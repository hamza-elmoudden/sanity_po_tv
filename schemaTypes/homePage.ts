import { defineType, defineField } from "sanity";
import { maxLocaleLength } from "./locale";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
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
      name: "shortDescription",
      title: "Short Description",
      type: "localeString",
      validation: (R) => R.required().custom(maxLocaleLength(300)),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
