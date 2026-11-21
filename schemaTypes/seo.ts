import { defineType, defineField } from "sanity";
import { maxLocaleLength } from "./locale";

// Reusable SEO object — embed as `type: 'seo'` in any page document
export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    // ── Meta ──────────────────────────────────────────
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "localeString",
      description: "Recommended: 50–60 characters",
      validation: (R) => R.custom(maxLocaleLength(60)),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "localeText",
      description: "Recommended: 150–160 characters",
      validation: (R) => R.custom(maxLocaleLength(160)),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "string",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description: "Hide this page from search engines",
    }),

    // ── Open Graph ────────────────────────────────────
    defineField({
      name: "ogTitle",
      title: "OG Title",
      type: "localeString",
      description: "Fallback: Meta Title",
    }),
    defineField({
      name: "ogDescription",
      title: "OG Description",
      type: "localeText",
      description: "Fallback: Meta Description",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      description: "Recommended: 1200×630px",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogType",
      title: "OG Type",
      type: "string",
      initialValue: "website",
      options: {
        list: [
          { title: "Website", value: "website" },
          { title: "Article", value: "article" },
          { title: "Product", value: "product" },
        ],
      },
    }),
  ],
});
