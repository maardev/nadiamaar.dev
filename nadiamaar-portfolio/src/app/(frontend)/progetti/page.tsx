import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'

import { VisualEditorOverlay } from '@/components/VisualEditorOverlay'
import { ProgettiClient, type ProgettiPageData } from './page.client'

export const metadata: Metadata = {
  title: 'Progetti | Nadia Maar',
  description: 'Case study e progetti realizzati: e-commerce, siti aziendali, AI, SEO, advertising.',
}

async function getPageData(): Promise<ProgettiPageData | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'static-pages',
      where: { slug: { equals: 'progetti' } },
      limit: 1,
      depth: 1,
    })
    const doc = result.docs?.[0]
    if (!doc) return null

    return {
      settings: (doc as any).settings ?? null,
      heroTitle: (doc as any).heroTitle ?? null,
      heroSubtitle: (doc as any).heroSubtitle ?? null,
      projects: (doc as any).projects ?? null,
    }
  } catch {
    return null
  }
}

export default async function ProgettiPage() {
  const pageData = await getPageData()
  const s = pageData?.settings

  const pageStyle: React.CSSProperties = {}
  if (s?.colorBackground) pageStyle.backgroundColor = s.colorBackground
  if (s?.colorText) pageStyle.color = s.colorText
  if (s?.fontFamily && s.fontFamily !== 'inherit') pageStyle.fontFamily = s.fontFamily
  if (s?.fontSize) pageStyle.fontSize = `${s.fontSize}px`

  return (
    <div style={pageStyle}>
      <VisualEditorOverlay />
      <ProgettiClient pageData={pageData} />
    </div>
  )
}
