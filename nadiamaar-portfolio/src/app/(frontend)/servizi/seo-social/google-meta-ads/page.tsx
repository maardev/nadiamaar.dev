import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { mapIconName } from '@/utilities/iconMap'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'service-pages',
    where: { slug: { equals: 'servizi/seo-social/google-meta-ads' } },
    limit: 1,
    draft: false,
  })

  const page = docs[0]
  if (!page) notFound()

  return (
    <ServicePageTemplate
      config={{
        category: page.category,
        title: page.title,
        subtitle: page.subtitle,
        description: page.description,
        features: (page.features ?? []).map((f) => ({
          icon: mapIconName(f.icon),
          title: f.title,
          description: f.description,
        })),
        featuredTitle: page.featuredTitle,
        featuredDescription: page.featuredDescription,
        featuredCta: page.featuredCta ?? undefined,
        featuredHref: page.featuredHref ?? undefined,
      }}
    />
  )
}
