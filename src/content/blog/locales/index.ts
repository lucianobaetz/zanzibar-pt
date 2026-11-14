import type { LocaleCode } from "@/i18n/locales";
import { GUIDE_KEYS, keyOfSlug, type GuideKey } from "../slugs";
import type { Post } from "../types";
import { DE_POSTS } from "./de";
import { DE_MORE } from "./de-more";
import { EN_POSTS } from "./en";
import { EN_MORE } from "./en-more";
import { ES_POSTS } from "./es";
import { ES_MORE } from "./es-more";
import { FR_POSTS } from "./fr";
import { FR_MORE } from "./fr-more";

export type GuideLocale = Exclude<LocaleCode, "pt">;

const BY_LOCALE: Record<GuideLocale, Record<GuideKey, Post>> = {
  es: { ...ES_POSTS, ...ES_MORE },
  fr: { ...FR_POSTS, ...FR_MORE },
  en: { ...EN_POSTS, ...EN_MORE },
  de: { ...DE_POSTS, ...DE_MORE },
};

export const localePosts = (locale: GuideLocale): readonly Post[] => GUIDE_KEYS.map((key) => BY_LOCALE[locale][key]);

export const getLocalePost = (locale: GuideLocale, slug: string): { key: GuideKey; post: Post } | undefined => {
  const key = keyOfSlug(locale, slug);
  return key ? { key, post: BY_LOCALE[locale][key] } : undefined;
};

/** Words in a post's body and FAQ, for the quality check. */
export const wordCount = (post: Post): number =>
  [
    ...post.blocks.map((block) => {
      if (block.type === "ul") return block.items.join(" ");
      if (block.type === "table") return [...block.head, ...block.rows.flat()].join(" ");
      return "text" in block ? block.text : "";
    }),
    ...post.faq.map((item) => `${item.question} ${item.answer}`),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
