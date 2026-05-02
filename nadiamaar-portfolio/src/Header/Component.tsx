import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CustomHeader, type CmsNavItem, type CmsColumn } from '../components/CustomHeader'

function resolveHref(
  linkType: string,
  reference: { value: unknown } | null | undefined,
  url: string | null | undefined,
): string {
  if (linkType === 'custom') return url ?? '#'
  if (!reference?.value || typeof reference.value === 'string') return '#'
  const doc = reference.value as { slug?: string }
  return `/${doc.slug ?? ''}`
}

// Run `pnpm generate:types` after changing src/Header/config.ts to get proper types.
// Until then, header data is cast to `any` to read the new schema fields at runtime.
export const HeaderClient = async () => {
  const payload = await getPayload({ config: configPromise })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const header = (await payload.findGlobal({ slug: 'header', depth: 2 })) as any

  const navItems: CmsNavItem[] = ((header.navItems as unknown[]) ?? []).map((rawItem) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const item = rawItem as any

    const columns: CmsColumn[] = ((item.columns as unknown[]) ?? []).map((rawCol) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const col = rawCol as any
      return {
        links: ((col.links as unknown[]) ?? []).map((rawLink) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const link = rawLink as any
          const icon =
            link.icon && typeof link.icon === 'object' ? (link.icon as { url?: string }) : null
          return {
            title: link.title as string,
            description: (link.description as string | undefined) ?? undefined,
            iconUrl: icon?.url ?? null,
            href: resolveHref(link.linkType, link.reference, link.url),
          }
        }),
      }
    })

    const f = item.featured
    const featured =
      f?.title || f?.description
        ? {
            title: (f.title as string | undefined) ?? undefined,
            description: (f.description as string | undefined) ?? undefined,
            cta: (f.cta as string | undefined) ?? undefined,
            href: resolveHref(f.linkType, f.reference, f.url),
          }
        : undefined

    return {
      label: item.label as string,
      sublabel: (item.sublabel as string | undefined) ?? undefined,
      columns,
      featured,
    }
  })

  return <CustomHeader navItems={navItems} />
}
