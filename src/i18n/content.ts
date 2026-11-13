import type { LocaleCode } from "./locales";

/**
 * SEO written natively for one market. These fields are NEVER derived from another language:
 * each locale has its own slug, keywords, titles and description, researched for that country.
 */
export type LocaleSeo = {
  /** Address inside the locale prefix, e.g. "/es/viaje-a-zanzibar". Different per language. */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Main keyword first, then secondary ones researched for this country. */
  keywords: readonly string[];
  ogImage?: string;
  /** Canonical is the page's own address; alternates are built from the other locales' slugs. */
  noindex?: boolean;
};

/** A piece of content (page, hotel, article) with one independent version per locale. */
export type Localized<Fields> = Partial<Record<LocaleCode, Fields & { seo: LocaleSeo; status: "draft" | "published" }>>;

/** Alternates for <link rel="alternate" hreflang>: only locales that are published. */
export const alternatesOf = <Fields>(content: Localized<Fields>): { code: LocaleCode; slug: string }[] =>
  (Object.entries(content) as [LocaleCode, NonNullable<Localized<Fields>[LocaleCode]>][])
    .filter(([, version]) => version.status === "published")
    .map(([code, version]) => ({ code, slug: version.seo.slug }));
