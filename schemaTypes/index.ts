// ── Locale types ──────────────────────────────────────
import { localeString, localeText } from "./locale";

// ── Shared object types ───────────────────────────────
import { seo } from "./seo";

// ── Page documents ────────────────────────────────────
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { faqPage, faqItem } from "./faqPage";

// ── Section / content documents ───────────────────────
import { imageSlider, sliderSlide } from "./imageSlider";
import { infoSection } from "./infoSection";

// ── Feature documents ─────────────────────────────────
import { product } from "./product";
import { contactInfo } from "./contactInfo";
import { authSettings } from "./authSettings";

// Feature Blog ──────────────────────────────────────

import { post } from "./post";
import { blogPage } from "./blogPage";
import { category } from "./category";
import { author } from "./author";

// ── Schema types ──────────────────────────────────────
export const schemaTypes = [
  localeString,
  localeText,
  seo,
  homePage,
  aboutPage,
  faqPage,
  faqItem,
  imageSlider,
  sliderSlide,
  infoSection,
  product,
  contactInfo,
  authSettings,
  //   blog
  post,
  blogPage,
  category,
  author,
];
