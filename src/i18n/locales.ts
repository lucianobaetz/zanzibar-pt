/**
 * One entry per market. Every locale owns its URL prefix, its own SEO and its own departure airports,
 * so a market can be added, rewritten or removed without touching the others.
 * "pt" is the default and lives at the root (no prefix) so existing addresses keep working.
 */
export type LocaleCode = "pt" | "es" | "fr" | "en" | "de";

export type Departure = { airport: string; city: string };

export type Locale = {
  code: LocaleCode;
  /** hreflang value, with the market: tells Google which country each version is for. */
  hreflang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** URL prefix; empty for the default locale. */
  prefix: string;
  language: string;
  currency: "EUR" | "GBP";
  /** Airports TUI sells for this market. Filled only with what TUI really offers. */
  departures: readonly Departure[];
  /** Turned on only when the market has real content and prices. */
  enabled: boolean;
};

export const LOCALES: Record<LocaleCode, Locale> = {
  pt: { code: "pt", hreflang: "pt-PT", ogLocale: "pt_PT", prefix: "", language: "Português", currency: "EUR", departures: [{ airport: "LIS", city: "Lisboa" }], enabled: true },
  es: { code: "es", hreflang: "es-ES", ogLocale: "es_ES", prefix: "/es", language: "Español", currency: "EUR", departures: [{ airport: "MAD", city: "Madrid" }], enabled: true },
  fr: { code: "fr", hreflang: "fr-FR", ogLocale: "fr_FR", prefix: "/fr", language: "Français", currency: "EUR", departures: [{ airport: "CDG", city: "Paris" }, { airport: "BRU", city: "Bruxelles" }], enabled: true },
  en: { code: "en", hreflang: "en-GB", ogLocale: "en_GB", prefix: "/en", language: "English", currency: "EUR", departures: [{ airport: "AMS", city: "Amsterdam" }, { airport: "LIS", city: "Lisbon" }, { airport: "MAD", city: "Madrid" }, { airport: "BRU", city: "Brussels" }, { airport: "FRA", city: "Frankfurt" }, { airport: "MUC", city: "Munich" }, { airport: "ZRH", city: "Zurich" }, { airport: "CDG", city: "Paris" }], enabled: true },
  de: { code: "de", hreflang: "de-DE", ogLocale: "de_DE", prefix: "/de", language: "Deutsch", currency: "EUR", departures: [{ airport: "FRA", city: "Frankfurt" }, { airport: "MUC", city: "München" }, { airport: "ZRH", city: "Zürich" }], enabled: true },
};

export const DEFAULT_LOCALE: LocaleCode = "pt";
export const enabledLocales = (): Locale[] => Object.values(LOCALES).filter((locale) => locale.enabled);
