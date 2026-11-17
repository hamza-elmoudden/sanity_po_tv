import { defineType, defineField } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "fullname",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    {
      name: "plan",
      title: "Selected Plan",
      type: "reference",
      to: [{ type: "plan" }],
    },
  ],
});
