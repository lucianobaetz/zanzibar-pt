import type { Metadata } from "next";
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
