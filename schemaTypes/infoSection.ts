import { defineType, defineField } from 'sanity'

export const infoSection = defineType({
  name: 'infoSection',
  title: 'Info Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Internal Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localeText',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'right',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
})
