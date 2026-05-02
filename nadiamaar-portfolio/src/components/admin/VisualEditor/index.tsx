'use client'

import React, { useCallback, useRef, useState } from 'react'

import type { BlockSettings } from '@/blocks/shared/types'
import { Sidebar } from './Sidebar'
import { PreviewFrame, type PreviewFrameHandle } from './PreviewFrame'

export type EditorBlock = {
  id: string
  blockType: string
  settings?: BlockSettings
  [key: string]: unknown
}

type Props = {
  pageId: string
  pageSlug: string
  pageTitle: string
  initialBlocks: EditorBlock[]
  serverURL: string
  previewSecret: string
}

export function VisualEditor({
  pageId,
  pageSlug,
  pageTitle,
  initialBlocks,
  serverURL,
  previewSecret,
}: Props) {
  const [blocks, setBlocks] = useState<EditorBlock[]>(initialBlocks)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const previewRef = useRef<PreviewFrameHandle>(null)

  const selectedBlock = blocks.find((b) => b.id === selectedId) ?? null

  // Called by BlockSettingsForm on every field change — instant iframe update
  const handleSettingsChange = useCallback(
    (blockId: string, settings: BlockSettings) => {
      setBlocks((prev) =>
        prev.map((b) => (b.id === blockId ? { ...b, settings } : b)),
      )
      previewRef.current?.sendUpdate(blockId, settings)
    },
    [],
  )

  // Called by BlockList after drag-and-drop reorder
  const handleReorder = useCallback((reordered: EditorBlock[]) => {
    setBlocks(reordered)
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/pages/${pageId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ layout: blocks }),
      })
      if (!res.ok) throw new Error(await res.text())
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
      previewRef.current?.reload()
    } catch (err) {
      console.error('Save failed:', err)
      alert('Save failed — see console for details.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: '#0d0d0d',
        color: '#f0f0f0',
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          height: '52px',
          background: '#161616',
          borderBottom: '1px solid #2a2a2a',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/admin/pages"
            style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ← Pages
          </a>
          <span style={{ color: '#333' }}>|</span>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#eee' }}>
            {pageTitle}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a
            href={`/admin/pages/${pageId}`}
            target="_blank"
            style={{
              padding: '6px 14px',
              fontSize: '13px',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '6px',
              color: '#ccc',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Edit in CMS ↗
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '6px 18px',
              fontSize: '13px',
              fontWeight: 600,
              background: saved ? '#22c55e' : '#3b82f6',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
              transition: 'background 0.3s',
            }}
          >
            {saving ? 'Saving…' : saved ? '✓ Saved' : 'Save'}
          </button>
        </div>
      </div>

      {/* ── Main area ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          blocks={blocks}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onSettingsChange={handleSettingsChange}
          onReorder={handleReorder}
        />
        <PreviewFrame
          ref={previewRef}
          slug={pageSlug}
          serverURL={serverURL}
          previewSecret={previewSecret}
        />
      </div>
    </div>
  )
}
