// ── Locale types ──────────────────────────────────────
import { localeString, localeText } from "./locale";

// ── Shared object types ───────────────────────────────
import { seo } from "./seo";

// ── Page documents ────────────────────────────────────
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { faqPage, faqItem } from "./faqPage";

// ── Section / content documents ───────────────────────
import { infoSection } from "./infoSection";

// ── Feature documents ─────────────────────────────────
import { plan } from "./plan";
import { contactInfo } from "./contactInfo";

// Feature Blog ──────────────────────────────────────

import { post } from "./post";
import { blogPage } from "./blogPage";
import { category } from "./category";
import { author } from "./author";

import { footer } from "./footer";
import { navBar } from "./navbar";
import { plansection } from "./plansection";

import { submit } from "./submit";
import { order } from "./order";

// ── Schema types ──────────────────────────────────────
export const schemaTypes = [
  localeString,
  localeText,
  seo,
  homePage,
  aboutPage,
  faqPage,
  faqItem,
  infoSection,
  plan,
  contactInfo,

  //   blog
  post,
  blogPage,
  category,
  author,

  // navbar
  navBar,
  // footer
  footer,
  // palne Section
  plansection,

  // submit
  submit,
  // order
  order,
];
