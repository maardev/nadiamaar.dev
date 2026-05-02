import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidateDelete, revalidateServicePage } from './hooks/revalidateServicePage'
import { settingsField } from '@/blocks/shared/settingsField'

const iconOptions = [
  'Activity', 'BarChart3', 'Calendar', 'Clock', 'Code', 'Database',
  'FileText', 'Gauge', 'GitBranch', 'Globe', 'Image', 'Languages',
  'Layers', 'Link2', 'Mail', 'Megaphone', 'MessageSquare', 'Palette',
  'Plug', 'Search', 'Settings', 'Share2', 'Shield', 'Sparkles',
  'Target', 'TrendingUp', 'Users', 'Video', 'Workflow', 'Zap',
].map((name) => ({ label: name, value: name }))

export const ServicePages: CollectionConfig<'service-pages'> = {
  slug: 'service-pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'category', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Contenuto',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Percorso URL completo, es. servizi/ai/chatbot',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenuto',
          fields: [
            {
              name: 'category',
              label: 'Categoria',
              type: 'text',
              required: true,
            },
            {
              name: 'subtitle',
              label: 'Sottotitolo',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Descrizione',
              type: 'textarea',
              required: true,
            },
            {
              name: 'features',
              label: 'Caratteristiche',
              type: 'array',
              minRows: 1,
              maxRows: 6,
              fields: [
                {
                  name: 'icon',
                  label: 'Icona',
                  type: 'select',
                  options: iconOptions,
                  required: true,
                },
                {
                  name: 'title',
                  label: 'Titolo',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Descrizione',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'CTA Banner',
          fields: [
            {
              name: 'featuredTitle',
              label: 'Titolo banner',
              type: 'text',
              required: true,
            },
            {
              name: 'featuredDescription',
              label: 'Descrizione banner',
              type: 'textarea',
              required: true,
            },
            {
              name: 'featuredCta',
              label: 'Testo bottone CTA',
              type: 'text',
            },
            {
              name: 'featuredHref',
              label: 'Link bottone CTA',
              type: 'text',
            },
          ],
        },
        {
          label: 'Blocchi extra',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, Content, MediaBlock],
              admin: {
                initCollapsed: true,
                description: 'Blocchi aggiuntivi visualizzati sotto il template standard',
              },
            },
          ],
        },
        {
          label: 'Visual Settings',
          fields: [settingsField],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateServicePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
