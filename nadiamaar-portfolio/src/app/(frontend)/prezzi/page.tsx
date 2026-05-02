import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'

import { VisualEditorOverlay } from '@/components/VisualEditorOverlay'
import { PrezziClient, type PrezziPageData } from './page.client'

export const metadata: Metadata = {
  title: 'Prezzi | Nadia Maar',
  description: 'Scegli il piano digitale giusto per la tua azienda. Prezzi chiari, nessun costo nascosto.',
}

async function getPageData(): Promise<PrezziPageData | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'static-pages',
      where: { slug: { equals: 'prezzi' } },
      limit: 1,
      depth: 1,
    })
    const doc = result.docs?.[0]
    if (!doc) return null

    return {
      settings: (doc as any).settings ?? null,
      heroTitle: (doc as any).heroTitle ?? null,
      heroSubtitle: (doc as any).heroSubtitle ?? null,
      plans: (doc as any).plans ?? null,
    }
  } catch {
    return null
  }
}

export default async function PrezziPage() {
  const pageData = await getPageData()
  const s = pageData?.settings

  // Apply page-level visual settings as inline CSS variables
  const pageStyle: React.CSSProperties = {}
  if (s?.colorBackground) pageStyle.backgroundColor = s.colorBackground
  if (s?.colorText) pageStyle.color = s.colorText
  if (s?.fontFamily && s.fontFamily !== 'inherit') pageStyle.fontFamily = s.fontFamily
  if (s?.fontSize) pageStyle.fontSize = `${s.fontSize}px`

  return (
    <div style={pageStyle}>
      <VisualEditorOverlay />
      <PrezziClient pageData={pageData} />
    </div>
  )
}
