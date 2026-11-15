import { defineType, defineField } from 'sanity'

// Supported languages — add more here if needed
export const SUPPORTED_LANGUAGES = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'pl', title: 'Polish' },
]

/**
 * localeString — single-line translated text
 * Usage:  type: 'localeString'
 */
export const localeString = defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  // Show the flag of the default language as the preview icon
  fieldsets: [
    { name: 'translations', title: 'Translations', options: { collapsible: true } },
  ],
  fields: SUPPORTED_LANGUAGES.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'string',
      fieldset: lang.isDefault ? undefined : 'translations',
      validation: lang.isDefault ? (R) => R.required() : undefined,
    })
  ),
})

/**
 * localeText — multi-line translated text (textarea)
 * Usage:  type: 'localeText'
 */
export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fieldsets: [
    { name: 'translations', title: 'Translations', options: { collapsible: true } },
  ],
  fields: SUPPORTED_LANGUAGES.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'text',
      fieldset: lang.isDefault ? undefined : 'translations',
      validation: lang.isDefault ? (R) => R.required() : undefined,
    })
  ),
})
