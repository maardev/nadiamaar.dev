'use client'

import { useField } from '@payloadcms/ui'
import React from 'react'

type Props = {
  path: string
  field: { label?: string | false; min?: number; max?: number; required?: boolean }
}

const SliderField: React.FC<Props> = ({ path, field }) => {
  const { value, setValue } = useField<number>({ path })
  const min = field.min ?? 0
  const max = field.max ?? 100
  const current = value ?? min

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={current}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{ flex: 1, accentColor: 'var(--theme-success-500, #3b82f6)' }}
        />
        <span
          style={{
            minWidth: '48px',
            textAlign: 'right',
            fontSize: '13px',
            color: 'var(--theme-text)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {current}px
        </span>
      </div>
    </div>
  )
}

export default SliderField
