import { HOTELS, type Hotel } from "@/content/hotels";
import { cityName, isAirportCode } from "@/lib/airports";
import { departuresFor } from "@/lib/departures";
import { HOTEL_COPY, captionFor } from "./hotels";
import { LOCALES, type LocaleCode } from "./locales";
import { getMessages } from "./messages";

/** A hotel as one market sees it: native copy, native alt texts, and a "from" price for that market's airports. */
export type HotelView = Omit<Hotel, "coast"> & { coast: string | null };

const COAST_KEY = { "Costa norte": "north", "Costa leste": "east" } as const;

export const departureCities = (locale: LocaleCode): string[] =>
  LOCALES[locale].departures.map((item) => (isAirportCode(item.airport) ? cityName(item.airport, locale) : item.city));

/** "Madrid", "Frankfurt, München, Zürich" or "8 European airports" for the current market. */
export const departureLabel = (locale: LocaleCode): string => {
  const cities = departureCities(locale);
  if (cities.length > 3) return getMessages(locale).card.manyAirports.replace("{n}", String(cities.length));
  return cities.join(", ");
};

const lowestFrom = (slug: string, locale: LocaleCode): number | null => {
  const prices = LOCALES[locale].departures.flatMap((item) =>
    isAirportCode(item.airport) ? departuresFor(slug, item.airport).map((departure) => departure.price) : [],
  );
  return prices.length ? Math.min(...prices) : null;
};

export const localizeHotel = (hotel: Hotel, locale: LocaleCode): HotelView => {
  const t = getMessages(locale);
  const coast = hotel.coast ? t.coast[COAST_KEY[hotel.coast]] : null;
  if (locale === "pt") return { ...hotel, coast };
  const copy = HOTEL_COPY[locale][hotel.slug as keyof (typeof HOTEL_COPY)["es"]];
  return {
    ...hotel,
    coast,
    fromPrice: lowestFrom(hotel.slug, locale),
    seoTitle: copy.seoTitle,
    seoDescription: copy.seoDescription,
    intro: copy.intro,
    highlights: copy.highlights,
    images: hotel.images.map((image) => ({ ...image, alt: `${hotel.name}, ${locale === "de" ? "Sansibar" : "Zanzibar"}: ${captionFor(locale, image.caption)}` })),
  };
};

export const localizedHotels = (locale: LocaleCode): HotelView[] => HOTELS.map((hotel) => localizeHotel(hotel, locale));

export const getLocalizedHotel = (slug: string, locale: LocaleCode): HotelView | undefined => {
  const hotel = HOTELS.find((item) => item.slug === slug);
  return hotel ? localizeHotel(hotel, locale) : undefined;
};
