import { defineType, defineField } from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog Page Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'localeText',
    }),
    defineField({
      name: 'postsPerPage',
      title: 'Posts Per Page',
      type: 'number',
      initialValue: 9,
      validation: (R) => R.required().min(1).max(50).integer(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Blog Page Settings' }
    },
  },
})
