import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localeText",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),

    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "icone",
              title: "Icon",
              type: "string",
            },
            {
              name: "text",
              title: "Text",
              type: "localeString",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
