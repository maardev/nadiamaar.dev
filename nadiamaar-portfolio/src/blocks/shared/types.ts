export type BlockSettings = {
  fontFamily?: string
  fontSize?: number
  fontWeight?: string
  colorBackground?: string
  colorText?: string
  colorAccent?: string
  paddingTop?: number
  paddingBottom?: number
  bgImageUrl?: string
  bgImageFit?: 'cover' | 'contain' | 'fill'
  customCode?: string
}

export type SettingsSchemaField =
  | { name: keyof BlockSettings; label: string; type: 'slider'; min: number; max: number }
  | { name: keyof BlockSettings; label: string; type: 'color' | 'text' | 'textarea' }
  | {
      name: keyof BlockSettings
      label: string
      type: 'select'
      options: { label: string; value: string }[]
    }

// Single source of truth — used by both Payload admin and the Visual Editor sidebar
export const SETTINGS_SCHEMA: SettingsSchemaField[] = [
  {
    name: 'fontFamily',
    label: 'Font Family',
    type: 'select',
    options: [
      { label: 'Inherit', value: 'inherit' },
      { label: 'Inter', value: "'Inter', sans-serif" },
      { label: 'Playfair Display', value: "'Playfair Display', serif" },
      { label: 'Space Grotesk', value: "'Space Grotesk', sans-serif" },
      { label: 'Montserrat', value: "'Montserrat', sans-serif" },
      { label: 'Roboto Mono', value: "'Roboto Mono', monospace" },
    ],
  },
  { name: 'fontSize', label: 'Font Size (px)', type: 'slider', min: 12, max: 96 },
  {
    name: 'fontWeight',
    label: 'Font Weight',
    type: 'select',
    options: [
      { label: 'Light (300)', value: '300' },
      { label: 'Regular (400)', value: '400' },
      { label: 'Medium (500)', value: '500' },
      { label: 'SemiBold (600)', value: '600' },
      { label: 'Bold (700)', value: '700' },
      { label: 'ExtraBold (900)', value: '900' },
    ],
  },
  { name: 'colorBackground', label: 'Background Color', type: 'color' },
  { name: 'colorText', label: 'Text Color', type: 'color' },
  { name: 'colorAccent', label: 'Accent Color', type: 'color' },
  { name: 'paddingTop', label: 'Padding Top (px)', type: 'slider', min: 0, max: 200 },
  { name: 'paddingBottom', label: 'Padding Bottom (px)', type: 'slider', min: 0, max: 200 },
  { name: 'bgImageUrl', label: 'Background Image URL', type: 'text' },
  {
    name: 'bgImageFit',
    label: 'Background Fit',
    type: 'select',
    options: [
      { label: 'Cover', value: 'cover' },
      { label: 'Contain', value: 'contain' },
      { label: 'Fill', value: 'fill' },
    ],
  },
  { name: 'customCode', label: 'Custom HTML / JS', type: 'textarea' },
]
