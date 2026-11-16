import { defineType, defineField } from "sanity";

export const navBar = defineType({
  name: "navbar",
  title: "Nave Bar",
  type: "document",
  fields: [
    defineField({
      name: "names",
      title: "Names",
      type: "array",
      of: [
        {
          type: "localeString",
        },
      ],
    }),
  ],
});
