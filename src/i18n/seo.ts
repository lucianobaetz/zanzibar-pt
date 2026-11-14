import type { Metadata } from "next";
import { POST_SLUGS, type GuideKey } from "@/content/blog/slugs";
import { LOCALES, type LocaleCode } from "./locales";
import { pathFor, type PageKind } from "./routes";

const ORDER: readonly LocaleCode[] = ["pt", "es", "fr", "en", "de"];

/** Canonical plus hreflang alternates (every enabled market and x-default -> Portuguese) for one page. */
export const alternatesFor = (locale: LocaleCode, kind: PageKind, hotelSlug?: string): NonNullable<Metadata["alternates"]> => {
  const languages: Record<string, string> = {};
  for (const code of ORDER) if (LOCALES[code].enabled) languages[LOCALES[code].hreflang] = pathFor(code, kind, hotelSlug);
  languages["x-default"] = pathFor("pt", kind, hotelSlug);
  return { canonical: pathFor(locale, kind, hotelSlug), languages };
};

/** Same for a guide: only the markets that have this guide, each at its own native address. */
export const alternatesForPost = (locale: LocaleCode, key: GuideKey): NonNullable<Metadata["alternates"]> => {
  const languages: Record<string, string> = {};
  for (const code of ORDER) if (LOCALES[code].enabled) languages[LOCALES[code].hreflang] = pathFor(code, "post", POST_SLUGS[key][code]);
  languages["x-default"] = pathFor("pt", "post", POST_SLUGS[key].pt);
  return { canonical: pathFor(locale, "post", POST_SLUGS[key][locale]), languages };
};
