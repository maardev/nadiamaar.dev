'use client'

import { useField } from '@payloadcms/ui'
import React from 'react'

type Props = {
  path: string
  field: { label?: string | false; required?: boolean }
}

const ColorPickerField: React.FC<Props> = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path })
  const color = value ?? ''

  return (
    <div style={{ marginBottom: '8px' }}>
      {field.label && (
        <label
          style={{
            display: 'block',
            marginBottom: '6px',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--theme-text)',
          }}
        >
          {field.label}
          {field.required && <span style={{ color: 'var(--theme-error-500)' }}> *</span>}
        </label>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="color"
          value={color || '#000000'}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: '36px',
            height: '36px',
            padding: '2px',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '6px',
            cursor: 'pointer',
            background: 'none',
            flexShrink: 0,
          }}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setValue(e.target.value)}
          placeholder="#ffffff  or  rgba(0,0,0,0.5)"
          style={{
            flex: 1,
            padding: '6px 10px',
            fontSize: '13px',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: '6px',
            background: 'var(--theme-input-bg)',
            color: 'var(--theme-text)',
            fontFamily: 'monospace',
          }}
        />
        {color && (
          <button
            type="button"
            onClick={() => setValue('')}
            title="Clear"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--theme-elevation-500)',
              fontSize: '16px',
              padding: '0 4px',
            }}
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default ColorPickerField
