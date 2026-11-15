import { defineType, defineField } from 'sanity'

export const authSettings = defineType({
  name: 'authSettings',
  title: 'Auth Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'loginPageTitle',
      title: 'Login Page Title',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'registerPageTitle',
      title: 'Register Page Title',
      type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Auth Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'enableGoogleAuth',
      title: 'Enable Google Sign-In',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'enableFacebookAuth',
      title: 'Enable Facebook Sign-In',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'termsUrl',
      title: 'Terms & Conditions URL',
      type: 'url',
    }),
    defineField({
      name: 'privacyUrl',
      title: 'Privacy Policy URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Auth Settings' }
    },
  },
})
