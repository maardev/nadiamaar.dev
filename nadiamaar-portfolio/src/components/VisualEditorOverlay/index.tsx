'use client'

import { useEffect } from 'react'

import type { BlockSettings } from '@/blocks/shared/types'

type VisualEditorMessage =
  | { type: 'VISUAL_EDITOR_UPDATE'; blockId: string; settings: BlockSettings }
  | { type: 'VISUAL_EDITOR_RESET'; blockId: string }
  | { type: 'VISUAL_EDITOR_RESET_ALL' }

function buildBlockCSS(blockId: string, s: BlockSettings): string {
  const rules: string[] = []

  if (s.colorBackground) rules.push(`background-color: ${s.colorBackground};`)
  if (s.colorText) rules.push(`color: ${s.colorText};`)
  if (s.fontFamily && s.fontFamily !== 'inherit') rules.push(`font-family: ${s.fontFamily};`)
  if (s.fontSize) rules.push(`font-size: ${s.fontSize}px;`)
  if (s.fontWeight) rules.push(`font-weight: ${s.fontWeight};`)
  if (s.paddingTop != null) rules.push(`padding-top: ${s.paddingTop}px;`)
  if (s.paddingBottom != null) rules.push(`padding-bottom: ${s.paddingBottom}px;`)
  if (s.bgImageUrl) {
    rules.push(`background-image: url(${s.bgImageUrl});`)
    rules.push(`background-size: ${s.bgImageFit ?? 'cover'};`)
    rules.push(`background-position: center;`)
    rules.push(`background-repeat: no-repeat;`)
  }
  if (s.colorAccent) rules.push(`--block-accent: ${s.colorAccent};`)

  if (rules.length === 0) return ''
  return `[data-block-id="${blockId}"] { ${rules.join(' ')} }`
}

function getOrCreateStyleTag(blockId: string): HTMLStyleElement {
  const id = `visual-editor-style-${blockId}`
  let el = document.getElementById(id) as HTMLStyleElement | null
  if (!el) {
    el = document.createElement('style')
    el.id = id
    document.head.appendChild(el)
  }
  return el
}

// Injected into every frontend page so the Visual Editor iframe can push
// live style updates without a full page reload.
export function VisualEditorOverlay() {
  useEffect(() => {
    const handle = (event: MessageEvent<VisualEditorMessage>) => {
      const msg = event.data
      if (!msg?.type?.startsWith('VISUAL_EDITOR_')) return

      if (msg.type === 'VISUAL_EDITOR_UPDATE') {
        const styleEl = getOrCreateStyleTag(msg.blockId)
        styleEl.textContent = buildBlockCSS(msg.blockId, msg.settings)
      }

      if (msg.type === 'VISUAL_EDITOR_RESET') {
        document.getElementById(`visual-editor-style-${msg.blockId}`)?.remove()
      }

      if (msg.type === 'VISUAL_EDITOR_RESET_ALL') {
        document
          .querySelectorAll('[id^="visual-editor-style-"]')
          .forEach((el) => el.remove())
      }
    }

    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [])

  return null
}
