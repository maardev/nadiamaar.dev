import type { GlobalConfig } from 'payload'

import { revalidateHeader } from './hooks/revalidateHeader'

const linkFields = [
  {
    name: 'linkType',
    type: 'radio' as const,
    defaultValue: 'reference',
    options: [
      { label: 'Pagina interna', value: 'reference' },
      { label: 'URL personalizzato', value: 'custom' },
    ],
    admin: { layout: 'horizontal' as const },
  },
  {
    name: 'reference',
    type: 'relationship' as const,
    relationTo: ['pages', 'service-pages'] as const,
    admin: {
      condition: (_: unknown, siblingData: Record<string, unknown>) =>
        siblingData?.linkType === 'reference',
    },
  },
  {
    name: 'url',
    type: 'text' as const,
    admin: {
      condition: (_: unknown, siblingData: Record<string, unknown>) =>
        siblingData?.linkType === 'custom',
    },
  },
]

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 8,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'sublabel',
          type: 'text',
        },
        {
          name: 'columns',
          type: 'array',
          maxRows: 3,
          admin: { initCollapsed: true },
          fields: [
            {
              name: 'links',
              type: 'array',
              maxRows: 6,
              admin: { initCollapsed: true },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                },
                ...linkFields,
              ],
            },
          ],
        },
        {
          name: 'featured',
          type: 'group',
          label: 'Featured (pannello destro)',
          fields: [
            { name: 'title', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'cta', type: 'text', label: 'Testo CTA' },
            ...linkFields,
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
