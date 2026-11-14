import type { LocaleCode } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import { POST_SLUGS, type GuideKey } from "../slugs";

/** Internal links for the guides of one market, always pointing at that market's own pages. */
export const linksFor = (locale: LocaleCode) => ({
  hotel: (slug: string) => pathFor(locale, "hotel", slug),
  hotels: pathFor(locale, "hotels"),
  home: pathFor(locale, "home"),
  contact: pathFor(locale, "contact"),
  guide: (key: GuideKey) => pathFor(locale, "post", POST_SLUGS[key][locale]),
});
