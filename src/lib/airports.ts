// Departure airports offered with TUI. The site is in Portuguese, but the airport suggested
// to each visitor follows the language of their browser (Madrid for Spanish, Frankfurt for German...).

import type { LocaleCode } from "@/i18n/locales";

export const AIRPORTS = [
  { code: "LIS", city: "Lisboa" },
  { code: "MAD", city: "Madrid" },
  { code: "AMS", city: "Amesterdão" },
  { code: "BRU", city: "Bruxelas" },
  { code: "FRA", city: "Frankfurt" },
  { code: "MUC", city: "Munique" },
  { code: "ZRH", city: "Zurique" },
  { code: "CDG", city: "Paris" },
] as const;

export type AirportCode = (typeof AIRPORTS)[number]["code"];

export const DEFAULT_AIRPORT: AirportCode = "LIS";

export const isAirportCode = (value: unknown): value is AirportCode => AIRPORTS.some((airport) => airport.code === value);

// City names as each market writes them.
const CITY_NAMES: Record<LocaleCode, Record<AirportCode, string>> = {
  pt: { LIS: "Lisboa", MAD: "Madrid", AMS: "Amesterdão", BRU: "Bruxelas", FRA: "Frankfurt", MUC: "Munique", ZRH: "Zurique", CDG: "Paris" },
  es: { LIS: "Lisboa", MAD: "Madrid", AMS: "Ámsterdam", BRU: "Bruselas", FRA: "Fráncfort", MUC: "Múnich", ZRH: "Zúrich", CDG: "París" },
  fr: { LIS: "Lisbonne", MAD: "Madrid", AMS: "Amsterdam", BRU: "Bruxelles", FRA: "Francfort", MUC: "Munich", ZRH: "Zurich", CDG: "Paris" },
  en: { LIS: "Lisbon", MAD: "Madrid", AMS: "Amsterdam", BRU: "Brussels", FRA: "Frankfurt", MUC: "Munich", ZRH: "Zurich", CDG: "Paris" },
  de: { LIS: "Lissabon", MAD: "Madrid", AMS: "Amsterdam", BRU: "Brüssel", FRA: "Frankfurt", MUC: "München", ZRH: "Zürich", CDG: "Paris" },
};

export const cityName = (code: AirportCode, locale: LocaleCode = "pt"): string => CITY_NAMES[locale][code];

export const airportLabel = (code: AirportCode, locale: LocaleCode = "pt"): string => `${cityName(code, locale)} (${code})`;

// Airport suggested first on each market's pages (the visitor can change it).
export const LOCALE_AIRPORT: Record<LocaleCode, AirportCode> = { pt: "LIS", es: "MAD", fr: "CDG", en: "AMS", de: "FRA" };

// Browser language (BCP 47, e.g. "de-CH") to the nearest departure airport.
const BY_LOCALE: Readonly<Record<string, AirportCode>> = {
  "pt": "LIS",
  "es": "MAD",
  "nl": "AMS",
  "nl-be": "BRU",
  "fr": "CDG",
  "fr-be": "BRU",
  "fr-ch": "ZRH",
  "de": "FRA",
  "de-at": "MUC",
  "de-ch": "ZRH",
  "it-ch": "ZRH",
};

export const airportForLanguages = (languages: readonly string[]): AirportCode => {
  for (const language of languages) {
    const locale = language.toLowerCase();
    const match = BY_LOCALE[locale] ?? BY_LOCALE[locale.split("-")[0] ?? ""];
    if (match) return match;
  }
  return DEFAULT_AIRPORT;
};
