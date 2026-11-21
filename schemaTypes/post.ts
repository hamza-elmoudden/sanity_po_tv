import { defineType, defineField } from "sanity";
import { maxLocaleLength } from "./locale";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    // ── Identity ──────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
      validation: (R) => R.required(),
    }),

    // ── Media ─────────────────────────────────────────
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),

    // ── Taxonomy ──────────────────────────────────────
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    // ── Authorship ────────────────────────────────────
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (R) => R.required(),
    }),

    // ── Publishing ────────────────────────────────────
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      hidden: ({ document }) => document?.status !== "published",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
      description: "Pin this post to the top of the blog listing",
    }),

    // ── Content ───────────────────────────────────────
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "localeText",
      description: "Short summary shown in listing cards — max 200 chars",
      validation: (R) => R.required().custom(maxLocaleLength(200)),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "localeText",
      validation: (R) => R.required(),
    }),

    // ── SEO ───────────────────────────────────────────
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],

  orderings: [
    {
      title: "Published Date, Newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date, Oldest",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title.en",
      author: "author.name",
      status: "status",
      media: "coverImage",
    },
    prepare({ title, author, status, media }) {
      const statusIcon =
        status === "published" ? "🟢" : status === "archived" ? "🔴" : "🟡";
      return {
        title: `${statusIcon} ${title}`,
        subtitle: author ? `by ${author}` : undefined,
        media,
      };
    },
  },
});
