import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title.en' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'color',
      title: 'Color (hex)',
      type: 'string',
      description: 'e.g. #3B82F6 — used as badge color in the UI',
      validation: (R) => R.regex(/^#[0-9A-Fa-f]{6}$/, { name: 'hex color' }),
    }),
  ],
  preview: {
    select: { title: 'title.en' },
  },
})
