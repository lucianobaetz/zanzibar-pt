import { HOTELS } from "@/content/hotels";

const prices = HOTELS.flatMap((hotel) => (hotel.fromPrice === null ? [] : [hotel.fromPrice]));

/** Lowest "desde" price per person across the hotels, straight from the departures data. */
export const FROM_PRICE = prices.length ? Math.min(...prices) : null;

export const eur = (value: number) => `${value.toLocaleString("pt-PT")} €`;

export const DEFAULT_RELATED = [
  { href: "/viagens-zanzibar", label: "Viagens a Zanzibar com voo de Lisboa" },
  { href: "/zanzibar-tudo-incluido", label: "Zanzibar tudo incluído 2027" },
  { href: "/hoteis", label: "Hotéis em Zanzibar" },
] as const;
