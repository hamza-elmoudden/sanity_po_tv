import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "Shortdescription",
      title: "Short Description",
      type: "localeText",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localeText",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      validation: (R) => R.positive(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "salesCount",
      title: "Number of Sales",
      type: "number",
      initialValue: 0,
      validation: (R) => R.min(0).integer(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en" },
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "price",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: `$${subtitle}`, media };
    },
  },
});
