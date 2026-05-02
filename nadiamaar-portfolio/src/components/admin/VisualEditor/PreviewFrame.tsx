'use client'

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import type { BlockSettings } from '@/blocks/shared/types'

export type PreviewFrameHandle = {
  sendUpdate: (blockId: string, settings: BlockSettings) => void
  reload: () => void
}

type Props = {
  slug: string
  serverURL: string
  previewSecret: string
}

const VIEWPORTS = [
  { label: 'Mobile', width: 375 },
  { label: 'Tablet', width: 768 },
  { label: 'Desktop', width: '100%' as const },
]

export const PreviewFrame = forwardRef<PreviewFrameHandle, Props>(
  function PreviewFrame({ slug, serverURL, previewSecret }, ref) {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const [viewport, setViewport] = useState<'Mobile' | 'Tablet' | 'Desktop'>('Desktop')

    // The preview route enables draft mode and redirects to the page
    const previewUrl = `${serverURL}/next/preview?path=/${slug}&previewSecret=${previewSecret}`

    useImperativeHandle(ref, () => ({
      sendUpdate(blockId, settings) {
        iframeRef.current?.contentWindow?.postMessage(
          { type: 'VISUAL_EDITOR_UPDATE', blockId, settings },
          serverURL,
        )
      },
      reload() {
        if (iframeRef.current) {
          iframeRef.current.src = previewUrl
        }
      },
    }))

    const currentVP = VIEWPORTS.find((v) => v.label === viewport)!

    return (
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: '#111',
          overflow: 'hidden',
        }}
      >
        {/* Viewport switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            padding: '8px',
            borderBottom: '1px solid #2a2a2a',
            flexShrink: 0,
          }}
        >
          {VIEWPORTS.map((vp) => (
            <button
              key={vp.label}
              onClick={() => setViewport(vp.label as typeof viewport)}
              style={{
                padding: '4px 12px',
                fontSize: '12px',
                background: viewport === vp.label ? '#3b82f6' : 'transparent',
                border: '1px solid',
                borderColor: viewport === vp.label ? '#3b82f6' : '#333',
                borderRadius: '4px',
                color: viewport === vp.label ? '#fff' : '#888',
                cursor: 'pointer',
              }}
            >
              {vp.label}
            </button>
          ))}
        </div>

        {/* iframe wrapper */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: '16px',
            overflow: 'auto',
            background: '#0a0a0a',
          }}
        >
          <div
            style={{
              width:
                typeof currentVP.width === 'number'
                  ? `${currentVP.width}px`
                  : '100%',
              maxWidth: '100%',
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              transition: 'width 0.3s ease',
            }}
          >
            <iframe
              ref={iframeRef}
              src={previewUrl}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '600px',
                border: 'none',
                display: 'block',
              }}
              title="Page preview"
            />
          </div>
        </div>
      </div>
    )
  },
)
