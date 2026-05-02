'use client'

import React from 'react'

import { SETTINGS_SCHEMA } from '@/blocks/shared/types'
import type { BlockSettings } from '@/blocks/shared/types'

type Props = {
  settings: BlockSettings
  onChange: (updated: BlockSettings) => void
}

export function BlockSettingsForm({ settings, onChange }: Props) {
  const update = (key: keyof BlockSettings, value: unknown) => {
    onChange({ ...settings, [key]: value })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {SETTINGS_SCHEMA.map((field) => {
        const value = settings[field.name]

        if (field.type === 'slider') {
          const num = typeof value === 'number' ? value : field.min
          return (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  step={1}
                  value={num}
                  onChange={(e) => update(field.name, Number(e.target.value))}
                  style={{ flex: 1, accentColor: '#3b82f6' }}
                />
                <span style={valueStyle}>{num}px</span>
              </div>
            </div>
          )
        }

        if (field.type === 'color') {
          const str = typeof value === 'string' ? value : ''
          return (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="color"
                  value={str || '#000000'}
                  onChange={(e) => update(field.name, e.target.value)}
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '1px solid #333',
                    borderRadius: '4px',
                    background: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    flexShrink: 0,
                  }}
                />
                <input
                  type="text"
                  value={str}
                  onChange={(e) => update(field.name, e.target.value)}
                  placeholder="#ffffff  or  rgba(…)"
                  style={inputStyle}
                />
                {str && (
                  <button
                    onClick={() => update(field.name, '')}
                    style={clearBtnStyle}
                    title="Clear"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          )
        }

        if (field.type === 'select') {
          const str = typeof value === 'string' ? value : ''
          return (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <select
                value={str}
                onChange={(e) => update(field.name, e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          )
        }

        if (field.type === 'text') {
          const str = typeof value === 'string' ? value : ''
          return (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <input
                type="text"
                value={str}
                onChange={(e) => update(field.name, e.target.value)}
                style={inputStyle}
              />
            </div>
          )
        }

        if (field.type === 'textarea') {
          const str = typeof value === 'string' ? value : ''
          return (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              <textarea
                value={str}
                onChange={(e) => update(field.name, e.target.value)}
                rows={4}
                placeholder="<div>…</div>  or  <script>…</script>"
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  lineHeight: 1.5,
                  height: 'auto',
                }}
              />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

// ── Shared styles ────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.6px',
  color: '#888',
}

const valueStyle: React.CSSProperties = {
  minWidth: '44px',
  textAlign: 'right',
  fontSize: '12px',
  color: '#aaa',
  fontVariantNumeric: 'tabular-nums',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '6px 10px',
  fontSize: '13px',
  background: '#1e1e1e',
  border: '1px solid #2e2e2e',
  borderRadius: '5px',
  color: '#f0f0f0',
  outline: 'none',
  boxSizing: 'border-box',
}

const clearBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#555',
  fontSize: '18px',
  lineHeight: 1,
  padding: '0 2px',
  flexShrink: 0,
}
