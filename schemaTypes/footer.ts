import { defineType, defineField } from "sanity";

export const footer = defineType({
  name: "footer",
  titile: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "title",
      titile: "Title Footer",
      type: "localeString",
    }),
    defineField({
      name: "text",
      title: "Short text",
      type: "localeString",
    }),
  ],
});
