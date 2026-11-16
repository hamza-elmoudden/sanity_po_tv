import { defineType, defineField } from "sanity";

export const plansection = defineType({
  name: "plansection",
  title: "Plan Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
    }),
    defineField({
      name: "shorttext",
      title: "Short Text",
      type: "localeString",
    }),
  ],
});
