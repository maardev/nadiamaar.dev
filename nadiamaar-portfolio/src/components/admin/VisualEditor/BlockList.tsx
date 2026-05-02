'use client'

import React from 'react'
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import type { EditorBlock } from './index'

const BLOCK_LABELS: Record<string, string> = {
  archive: 'Archive',
  content: 'Content',
  cta: 'Call to Action',
  formBlock: 'Form',
  mediaBlock: 'Media',
  code: 'Code',
  banner: 'Banner',
}

const BLOCK_ICONS: Record<string, string> = {
  archive: '📚',
  content: '📝',
  cta: '🔔',
  formBlock: '📋',
  mediaBlock: '🖼',
  code: '⌨️',
  banner: '📢',
}

// ── Sortable item ────────────────────────────────────────────────────────────

function SortableBlock({
  block,
  isSelected,
  onSelect,
}: {
  block: EditorBlock
  isSelected: boolean
  onSelect: (id: string) => void
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: block.id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style}>
      <div
        onClick={() => onSelect(block.id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 10px',
          borderRadius: '6px',
          background: isSelected ? '#1d3557' : 'transparent',
          border: `1px solid ${isSelected ? '#3b82f6' : 'transparent'}`,
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'background 0.15s',
        }}
      >
        {/* Drag handle */}
        <span
          {...attributes}
          {...listeners}
          style={{
            fontSize: '14px',
            color: '#444',
            cursor: 'grab',
            flexShrink: 0,
            lineHeight: 1,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          ⠿
        </span>

        <span style={{ fontSize: '15px', flexShrink: 0 }}>
          {BLOCK_ICONS[block.blockType] ?? '🧩'}
        </span>

        <span
          style={{
            fontSize: '13px',
            color: isSelected ? '#93c5fd' : '#ccc',
            fontWeight: isSelected ? 600 : 400,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {BLOCK_LABELS[block.blockType] ?? block.blockType}
        </span>
      </div>
    </div>
  )
}

// ── Block list with DnD ──────────────────────────────────────────────────────

type Props = {
  blocks: EditorBlock[]
  selectedId: string | null
  onSelect: (id: string) => void
  onReorder: (blocks: EditorBlock[]) => void
}

export function BlockList({ blocks, selectedId, onSelect, onReorder }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = blocks.findIndex((b) => b.id === active.id)
    const newIndex = blocks.findIndex((b) => b.id === over.id)
    onReorder(arrayMove(blocks, oldIndex, newIndex))
  }

  if (blocks.length === 0) {
    return (
      <div style={{ padding: '16px', color: '#555', fontSize: '13px', textAlign: 'center' }}>
        No blocks on this page.
        <br />
        <a href="#" style={{ color: '#3b82f6', fontSize: '12px' }}>
          Add blocks in the CMS ↗
        </a>
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {blocks.map((block) => (
            <SortableBlock
              key={block.id}
              block={block}
              isSelected={block.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
