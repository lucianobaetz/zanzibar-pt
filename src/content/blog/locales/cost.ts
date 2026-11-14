import { localizedHotels } from "@/i18n/localize";
import type { LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";

/** Hotel name, area and "from" price per person for one market, from the same departures data as the hotel pages. */
export const costRows = (locale: LocaleCode, onRequest: string): string[][] => {
  const t = getMessages(locale);
  return localizedHotels(locale).map((hotel) => [
    hotel.name,
    hotel.coast ?? "Zanzibar",
    hotel.fromPrice === null ? onRequest : fmt(t.card.from, { price: hotel.fromPrice }),
  ]);
};

export const lowestPrice = (locale: LocaleCode): number | null => {
  const prices = localizedHotels(locale).flatMap((hotel) => (hotel.fromPrice === null ? [] : [hotel.fromPrice]));
  return prices.length ? Math.min(...prices) : null;
};
