import type { Field } from 'payload'

export const settingsField: Field = {
  name: 'settings',
  type: 'group',
  label: 'Visual Settings',
  admin: {
    initCollapsed: true,
    description: 'Typography, colours, spacing and background for this block.',
  },
  fields: [
    // --- Typography ---
    {
      type: 'row',
      fields: [
        {
          name: 'fontFamily',
          type: 'select',
          label: 'Font Family',
          defaultValue: 'inherit',
          admin: { width: '50%' },
          options: [
            { label: 'Inherit', value: 'inherit' },
            { label: 'Inter', value: "'Inter', sans-serif" },
            { label: 'Playfair Display', value: "'Playfair Display', serif" },
            { label: 'Space Grotesk', value: "'Space Grotesk', sans-serif" },
            { label: 'Montserrat', value: "'Montserrat', sans-serif" },
            { label: 'Roboto Mono', value: "'Roboto Mono', monospace" },
          ],
        },
        {
          name: 'fontWeight',
          type: 'select',
          label: 'Font Weight',
          defaultValue: '400',
          admin: { width: '50%' },
          options: [
            { label: 'Light (300)', value: '300' },
            { label: 'Regular (400)', value: '400' },
            { label: 'Medium (500)', value: '500' },
            { label: 'SemiBold (600)', value: '600' },
            { label: 'Bold (700)', value: '700' },
            { label: 'ExtraBold (900)', value: '900' },
          ],
        },
      ],
    },
    {
      name: 'fontSize',
      type: 'number',
      label: 'Font Size (px)',
      min: 12,
      max: 96,
      admin: {
        components: {
          Field: '@/components/admin/SliderField',
        },
      },
    },
    // --- Colours ---
    {
      type: 'row',
      fields: [
        {
          name: 'colorBackground',
          type: 'text',
          label: 'Background',
          admin: {
            width: '33%',
            components: { Field: '@/components/admin/ColorPickerField' },
          },
        },
        {
          name: 'colorText',
          type: 'text',
          label: 'Text',
          admin: {
            width: '33%',
            components: { Field: '@/components/admin/ColorPickerField' },
          },
        },
        {
          name: 'colorAccent',
          type: 'text',
          label: 'Accent',
          admin: {
            width: '33%',
            components: { Field: '@/components/admin/ColorPickerField' },
          },
        },
      ],
    },
    // --- Spacing ---
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          type: 'number',
          label: 'Padding Top (px)',
          min: 0,
          max: 200,
          admin: { width: '50%' },
        },
        {
          name: 'paddingBottom',
          type: 'number',
          label: 'Padding Bottom (px)',
          min: 0,
          max: 200,
          admin: { width: '50%' },
        },
      ],
    },
    // --- Background image ---
    {
      type: 'row',
      fields: [
        {
          name: 'bgImageUrl',
          type: 'text',
          label: 'Background Image URL',
          admin: { width: '70%' },
        },
        {
          name: 'bgImageFit',
          type: 'select',
          label: 'Image Fit',
          defaultValue: 'cover',
          admin: { width: '30%' },
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
          ],
        },
      ],
    },
    // --- Custom code ---
    {
      name: 'customCode',
      type: 'textarea',
      label: 'Custom HTML / JS',
      admin: {
        description: 'Injected after the block. Supports raw HTML and <script> tags.',
      },
    },
  ],
}
