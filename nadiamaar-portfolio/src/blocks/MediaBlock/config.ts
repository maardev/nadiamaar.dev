import type { Block } from 'payload'

import { settingsField } from '@/blocks/shared/settingsField'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    settingsField,
  ],
}
