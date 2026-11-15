import { defineType, defineField } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'localeText',
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: 'question.en' },
  },
})

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
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
      name: 'questions',
      title: 'Questions & Answers',
      type: 'array',
      of: [{ type: 'faqItem' }],
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'FAQ Page' }
    },
  },
})
