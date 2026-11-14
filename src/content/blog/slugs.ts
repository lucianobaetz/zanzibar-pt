import type { LocaleCode } from "@/i18n/locales";

/**
 * One guide, one address per market. The Portuguese slug is the identity ("key") of the guide;
 * every other market has its own address, written around the words people search for in that country
 * (Ahrefs, November 2026), never translated word for word. Light on purpose: the language switcher
 * and the sitemap read this file without loading the articles.
 */
export type CoreGuideKey = "where" | "when" | "things" | "flights" | "safety";
export type MoreGuideKey = "beaches" | "stone" | "safari" | "cost";
export type GuideKey = CoreGuideKey | MoreGuideKey;

export const CORE_KEYS: readonly CoreGuideKey[] = ["where", "when", "things", "flights", "safety"];
export const MORE_KEYS: readonly MoreGuideKey[] = ["beaches", "stone", "safari", "cost"];
export const GUIDE_KEYS: readonly GuideKey[] = [...CORE_KEYS, ...MORE_KEYS];

export const POST_SLUGS: Record<GuideKey, Record<LocaleCode, string>> = {
  where: {
    pt: "onde-fica-zanzibar",
    es: "donde-esta-zanzibar",
    fr: "ou-se-trouve-zanzibar",
    en: "where-is-zanzibar",
    de: "wo-liegt-sansibar",
  },
  when: {
    pt: "melhor-altura-para-ir-a-zanzibar",
    es: "mejor-epoca-para-viajar-a-zanzibar",
    fr: "quand-partir-a-zanzibar",
    en: "best-time-to-visit-zanzibar",
    de: "beste-reisezeit-sansibar",
  },
  things: {
    pt: "o-que-fazer-em-zanzibar",
    es: "que-ver-en-zanzibar",
    fr: "que-faire-a-zanzibar",
    en: "things-to-do-in-zanzibar",
    de: "sansibar-sehenswuerdigkeiten",
  },
  flights: {
    pt: "voos-lisboa-zanzibar",
    es: "vuelos-a-zanzibar",
    fr: "vol-zanzibar",
    en: "flights-to-zanzibar",
    de: "flug-sansibar",
  },
  safety: {
    pt: "zanzibar-e-perigoso",
    es: "es-seguro-viajar-a-zanzibar",
    fr: "zanzibar-danger-securite",
    en: "is-zanzibar-safe",
    de: "ist-sansibar-sicher",
  },
  beaches: { pt: "praias-de-zanzibar", es: "playas-de-zanzibar", fr: "plages-de-zanzibar", en: "zanzibar-beaches", de: "sansibar-straende" },
  stone: { pt: "stone-town-zanzibar", es: "stone-town-zanzibar", fr: "stone-town-zanzibar", en: "stone-town-zanzibar", de: "stone-town-sansibar" },
  safari: { pt: "zanzibar-safari", es: "zanzibar-safari", fr: "safari-zanzibar", en: "zanzibar-safari", de: "sansibar-safari" },
  cost: { pt: "zanzibar-e-caro", es: "cuanto-cuesta-viajar-a-zanzibar", fr: "zanzibar-prix-voyage", en: "is-zanzibar-expensive", de: "sansibar-kosten" },
};


export const keyOfSlug = (locale: LocaleCode, slug: string): GuideKey | null =>
  GUIDE_KEYS.find((key) => POST_SLUGS[key][locale] === slug) ?? null;
