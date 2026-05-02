import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { settingsField } from '@/blocks/shared/settingsField'
import { revalidateDelete, revalidateStaticPage } from './hooks/revalidateStaticPage'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

// Slug values that correspond to the 3 hardcoded frontend pages
export type StaticPageSlug = 'prezzi' | 'contatti' | 'progetti'

export const StaticPages: CollectionConfig<'static-pages'> = {
  slug: 'static-pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    group: 'Contenuto',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Pagine statiche del sito: Prezzi, Contatti, Progetti.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'select',
      required: true,
      unique: true,
      options: [
        { label: 'Prezzi  (/prezzi)', value: 'prezzi' },
        { label: 'Contatti  (/contatti)', value: 'contatti' },
        { label: 'Progetti  (/progetti)', value: 'progetti' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Identifica la pagina statica. Non modificare dopo la creazione.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        // ── Tab: Contenuto ───────────────────────────────────────────────
        {
          label: 'Contenuto',
          fields: [
            // Hero (comune a tutte le pagine)
            {
              name: 'heroTitle',
              label: 'Titolo hero',
              type: 'text',
            },
            {
              name: 'heroSubtitle',
              label: 'Sottotitolo hero',
              type: 'textarea',
            },

            // ── Prezzi ──────────────────────────────────────────────────
            {
              name: 'plans',
              label: 'Piani tariffari',
              type: 'array',
              maxRows: 6,
              admin: {
                description: 'Visibile solo per la pagina /prezzi.',
                condition: (data) => data?.slug === 'prezzi',
              },
              fields: [
                { name: 'name', label: 'Nome piano', type: 'text', required: true },
                { name: 'price', label: 'Prezzo (es. 990 o Custom)', type: 'text', required: true },
                { name: 'period', label: 'Periodo (es. una tantum)', type: 'text' },
                { name: 'description', label: 'Descrizione', type: 'textarea' },
                {
                  name: 'features',
                  label: 'Caratteristiche',
                  type: 'array',
                  fields: [{ name: 'text', label: 'Voce', type: 'text', required: true }],
                },
                { name: 'cta', label: 'Testo CTA', type: 'text' },
                { name: 'highlighted', label: 'Piano in evidenza', type: 'checkbox' },
              ],
            },

            // ── Contatti ────────────────────────────────────────────────
            {
              name: 'contactInfo',
              label: 'Informazioni di contatto',
              type: 'group',
              admin: {
                condition: (data) => data?.slug === 'contatti',
              },
              fields: [
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'phone', label: 'Telefono', type: 'text' },
                { name: 'address', label: 'Indirizzo / Sede', type: 'text' },
                {
                  name: 'responseTime',
                  label: 'Tempi di risposta',
                  type: 'textarea',
                  admin: {
                    description: 'Es. Rispondiamo entro 24 ore lavorative.',
                  },
                },
              ],
            },

            // ── Progetti ────────────────────────────────────────────────
            {
              name: 'projects',
              label: 'Portfolio progetti',
              type: 'array',
              maxRows: 20,
              admin: {
                description: 'Visibile solo per la pagina /progetti.',
                condition: (data) => data?.slug === 'progetti',
              },
              fields: [
                { name: 'title', label: 'Titolo', type: 'text', required: true },
                { name: 'category', label: 'Categoria', type: 'text' },
                { name: 'description', label: 'Descrizione', type: 'textarea' },
                {
                  name: 'tags',
                  label: 'Tag tecnologie',
                  type: 'array',
                  fields: [{ name: 'tag', label: 'Tag', type: 'text', required: true }],
                },
                { name: 'url', label: 'URL progetto (opzionale)', type: 'text' },
                {
                  name: 'gradient',
                  label: 'Gradiente card (Tailwind classes)',
                  type: 'text',
                  admin: {
                    description: 'Es. from-violet-500/20 to-fuchsia-500/10',
                  },
                },
              ],
            },
          ],
        },

        // ── Tab: Visual Settings ─────────────────────────────────────────
        {
          label: 'Visual Settings',
          fields: [settingsField],
        },

        // ── Tab: SEO ─────────────────────────────────────────────────────
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: false }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: false,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
  ],
  hooks: {
    afterChange: [revalidateStaticPage],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
