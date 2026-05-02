'use client'

import React, { useState } from 'react'

import type { BlockSettings } from '@/blocks/shared/types'
import type { EditorBlock } from './index'
import { BlockList } from './BlockList'
import { BlockSettingsForm } from './BlockSettingsForm'

type Props = {
  blocks: EditorBlock[]
  selectedId: string | null
  onSelect: (id: string) => void
  onSettingsChange: (blockId: string, settings: BlockSettings) => void
  onReorder: (blocks: EditorBlock[]) => void
}

type Tab = 'blocks' | 'settings'

export function Sidebar({ blocks, selectedId, onSelect, onSettingsChange, onReorder }: Props) {
  const [tab, setTab] = useState<Tab>('blocks')

  const selectedBlock = blocks.find((b) => b.id === selectedId) ?? null

  const handleSelect = (id: string) => {
    onSelect(id)
    setTab('settings')
  }

  const handleSettingsChange = (updated: BlockSettings) => {
    if (!selectedId) return
    onSettingsChange(selectedId, updated)
  }

  return (
    <div
      style={{
        width: '280px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        background: '#161616',
        borderRight: '1px solid #2a2a2a',
        overflow: 'hidden',
      }}
    >
      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid #2a2a2a',
          flexShrink: 0,
        }}
      >
        {(['blocks', 'settings'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            disabled={t === 'settings' && !selectedBlock}
            style={{
              flex: 1,
              padding: '11px 0',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'capitalize',
              letterSpacing: '0.4px',
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${tab === t ? '#3b82f6' : 'transparent'}`,
              color: tab === t ? '#93c5fd' : '#555',
              cursor: t === 'settings' && !selectedBlock ? 'not-allowed' : 'pointer',
              transition: 'color 0.15s',
            }}
          >
            {t === 'blocks' ? '⊞ Blocks' : '⚙ Settings'}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px',
        }}
      >
        {tab === 'blocks' && (
          <BlockList
            blocks={blocks}
            selectedId={selectedId}
            onSelect={handleSelect}
            onReorder={onReorder}
          />
        )}

        {tab === 'settings' && (
          <>
            {selectedBlock ? (
              <>
                <div
                  style={{
                    marginBottom: '16px',
                    padding: '8px 10px',
                    background: '#1e1e1e',
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: '#888',
                  }}
                >
                  Editing:{' '}
                  <strong style={{ color: '#93c5fd' }}>
                    {selectedBlock.blockType}
                  </strong>
                </div>
                <BlockSettingsForm
                  settings={selectedBlock.settings ?? {}}
                  onChange={handleSettingsChange}
                />
              </>
            ) : (
              <div
                style={{
                  padding: '24px 12px',
                  textAlign: 'center',
                  color: '#555',
                  fontSize: '13px',
                }}
              >
                Select a block from the list to edit its visual settings.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
