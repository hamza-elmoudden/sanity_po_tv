import { defineType, defineField } from 'sanity'

export const sliderSlide = defineType({
  name: 'sliderSlide',
  title: 'Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption (optional)',
      type: 'localeString',
    }),
    defineField({
      name: 'link',
      title: 'Link (optional)',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'alt.en', media: 'image' },
  },
})

export const imageSlider = defineType({
  name: 'imageSlider',
  title: 'Image Slider',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Internal Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ type: 'sliderSlide' }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'interval',
      title: 'Autoplay Interval (ms)',
      type: 'number',
      initialValue: 4000,
      hidden: ({ document }) => !document?.autoplay,
      validation: (R) => R.min(1000),
    }),
  ],
  preview: {
    select: { title: 'name' },
  },
})
