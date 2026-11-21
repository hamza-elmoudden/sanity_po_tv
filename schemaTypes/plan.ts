import { defineType, defineField } from "sanity";

export const plan = defineType({
  name: "plan",
  title: "Plan",
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
      name: "currency",
      title: "Currency",
      type: "string",
      options: {
        list: [
          { title: "Polish złoty (zł)", value: "PLN" },
          { title: "Euro (€)", value: "EUR" },
          { title: "US dollar ($)", value: "USD" },
          { title: "British pound (£)", value: "GBP" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "PLN",
      validation: (R) => R.required(),
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
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      price: "price",
      currency: "currency",
      media: "image",
    },
    prepare({ title, price, currency, media }) {
      const symbols: Record<string, string> = { PLN: "zł", EUR: "€", USD: "$", GBP: "£" };
      return { title, subtitle: `${price ?? "—"} ${symbols[currency ?? "PLN"] ?? currency}`, media };
    },
  },
});
