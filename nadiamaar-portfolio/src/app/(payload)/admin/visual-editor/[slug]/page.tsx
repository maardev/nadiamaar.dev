import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { VisualEditor } from '@/components/admin/VisualEditor'

type Args = {
  params: Promise<{ slug: string }>
}

export default async function VisualEditorPage({ params }: Args) {
  const { slug } = await params

  // Auth check — Payload reads the session cookie automatically
  const headersList = await headers()
  const payload = await getPayload({ config: configPromise })

  const { user } = await payload.auth({ headers: headersList })
  if (!user) {
    redirect('/admin/login')
  }

  // Fetch page with draft content so unsaved changes are visible
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    depth: 1,
    draft: true,
    overrideAccess: true,
    limit: 1,
  })

  const page = result.docs?.[0]
  if (!page) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>Page not found: <code>{slug}</code></h1>
        <a href="/admin/pages">← Back to pages</a>
      </div>
    )
  }

  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  return (
    <VisualEditor
      pageId={String(page.id)}
      pageSlug={slug}
      pageTitle={page.title}
      initialBlocks={(page.layout ?? []) as any[]}
      serverURL={serverURL}
      previewSecret={process.env.PREVIEW_SECRET ?? ''}
    />
  )
}
