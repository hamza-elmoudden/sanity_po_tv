import { defineType, defineField } from 'sanity'

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  // Singleton — only one document of this type
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, e.g. +48123456789',
      validation: (R) => R.regex(/^\+?[0-9\s\-()]{7,20}$/, { name: 'phone number' }),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (R) => R.email(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      validation: (R) =>
        R.uri({ scheme: ['https', 'http'] }),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'localeText',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Info' }
    },
  },
})
