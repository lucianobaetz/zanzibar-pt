// Departure airports offered with TUI. The site is in Portuguese, but the airport suggested
// to each visitor follows the language of their browser (Madrid for Spanish, Frankfurt for German...).

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

export const airportLabel = (code: AirportCode): string => {
  const airport = AIRPORTS.find((item) => item.code === code);
  return airport ? `${airport.city} (${airport.code})` : code;
};

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
