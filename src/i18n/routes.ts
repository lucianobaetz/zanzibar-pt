import { keyOfSlug, POST_SLUGS } from "@/content/blog/slugs";
import { DEFAULT_LOCALE, LOCALES, type LocaleCode } from "./locales";

/**
 * Page addresses per market. Slugs are written for each language (keyword research per country),
 * not translated word for word. Hotel pages keep the hotel's own slug under the market's hotels address.
 */
export type PageKind = "home" | "hotels" | "hotel" | "contact" | "blog" | "post" | "holidays" | "allinclusive";

const SEGMENTS: Record<LocaleCode, { hotels: string; contact: string; blog: string; holidays: string; allinclusive: string }> = {
  pt: { hotels: "hoteis", contact: "contacto", blog: "blog", holidays: "viagens-zanzibar", allinclusive: "zanzibar-tudo-incluido" },
  es: { hotels: "hoteles-zanzibar", contact: "contacto", blog: "blog", holidays: "viaje-a-zanzibar", allinclusive: "zanzibar-todo-incluido" },
  fr: { hotels: "hotels-zanzibar", contact: "contact", blog: "blog", holidays: "voyage-zanzibar", allinclusive: "zanzibar-tout-inclus" },
  en: { hotels: "zanzibar-hotels", contact: "contact", blog: "blog", holidays: "zanzibar-holidays", allinclusive: "zanzibar-all-inclusive" },
  de: { hotels: "sansibar-hotels", contact: "kontakt", blog: "blog", holidays: "sansibar-urlaub", allinclusive: "sansibar-all-inclusive" },
};

/** `slug` is the hotel's slug for "hotel" pages and the article's slug for "post" pages. */
export const pathFor = (locale: LocaleCode, kind: PageKind, slug?: string): string => {
  const prefix = LOCALES[locale].prefix;
  const { hotels, contact, blog, holidays, allinclusive } = SEGMENTS[locale];
  if (kind === "home") return prefix || "/";
  if (kind === "hotels") return `${prefix}/${hotels}`;
  if (kind === "contact") return `${prefix}/${contact}`;
  if (kind === "blog") return `${prefix}/${blog}`;
  if (kind === "holidays") return `${prefix}/${holidays}`;
  if (kind === "allinclusive") return `${prefix}/${allinclusive}`;
  if (kind === "post") return `${prefix}/${blog}/${slug ?? ""}`;
  return `${prefix}/${hotels}/${slug ?? ""}`;
};

export type ResolvedPage = { kind: PageKind; hotelSlug?: string; postSlug?: string };

/** Segments after the locale prefix -> page. */
export const resolveSegments = (locale: LocaleCode, segments: readonly string[]): ResolvedPage | null => {
  const [first, second, ...rest] = segments;
  const { hotels, contact, blog, holidays, allinclusive } = SEGMENTS[locale];
  if (first === undefined) return { kind: "home" };
  if (rest.length > 0) return null;
  if (first === holidays && second === undefined) return { kind: "holidays" };
  if (first === allinclusive && second === undefined) return { kind: "allinclusive" };
  if (first === blog) return second === undefined ? { kind: "blog" } : { kind: "post", postSlug: second };
  if (first === hotels) return second === undefined ? { kind: "hotels" } : { kind: "hotel", hotelSlug: second };
  if (first === contact && second === undefined) return { kind: "contact" };
  return null;
};

/** Whole pathname (any market, including Portuguese at the root) -> locale and page. */
export const parsePathname = (pathname: string): { locale: LocaleCode; page: ResolvedPage } | null => {
  const parts = pathname.split("/").filter(Boolean);
  const [head, ...tail] = parts;
  const prefixed = (Object.keys(LOCALES) as LocaleCode[]).find((code) => code !== DEFAULT_LOCALE && LOCALES[code].prefix === `/${head}`);
  const locale = prefixed ?? DEFAULT_LOCALE;
  const page = resolveSegments(locale, prefixed ? tail : parts);
  return page ? { locale, page } : null;
};

/** Address of the same page in another market; the home page when there is no equivalent. */
export const equivalentPath = (pathname: string, target: LocaleCode): string => {
  const current = parsePathname(pathname);
  if (!current) return pathFor(target, "home");
  if (current.page.kind === "post") {
    const key = keyOfSlug(current.locale, current.page.postSlug ?? "");
    return key ? pathFor(target, "post", POST_SLUGS[key][target]) : pathFor(target, "blog");
  }
  return pathFor(target, current.page.kind, current.page.hotelSlug);
};

export const NON_DEFAULT_LOCALES: readonly LocaleCode[] = (Object.keys(LOCALES) as LocaleCode[]).filter(
  (code) => code !== DEFAULT_LOCALE && LOCALES[code].enabled,
);

/** URL segment ("es") -> enabled non-default locale, or null. */
export const localeFromParam = (value: string): LocaleCode | null => NON_DEFAULT_LOCALES.find((code) => LOCALES[code].prefix === `/${value}`) ?? null;
