// Booking request rules shared by the form (browser) and the API (server).
// The request is a pre-reservation: nothing is charged online and an agent confirms
// availability and price with TUI before anything is confirmed.

import { isAirportCode, type AirportCode } from "@/lib/airports";
import { fmt } from "@/i18n/messages";
import { pt } from "@/i18n/messages/pt";
import { departuresFor } from "@/lib/departures";

export type BookingMessages = { readonly [K in keyof typeof pt.booking.errors]: string };

export const LIMITS = { maxAdults: 6, maxChildren: 4, maxChildAge: 11 } as const;

export type BookingInput = {
  hotelSlug: string;
  airport: AirportCode;
  date: string;
  adults: number;
  childAges: readonly number[];
  name: string;
  email: string;
  whatsapp: string;
  consent: boolean;
};

export type BookingErrors = Partial<Record<"hotelSlug" | "airport" | "date" | "adults" | "children" | "name" | "email" | "whatsapp" | "consent", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const normalizeWhatsapp = (value: string): string => value.replace(/[\s().-]/g, "");

export const validateBooking = (input: BookingInput, hotelNames: Readonly<Record<string, { adultsOnly: boolean }>>, m: BookingMessages = pt.booking.errors): BookingErrors => {
  const errors: BookingErrors = {};
  const hotel = hotelNames[input.hotelSlug];

  if (!hotel) errors.hotelSlug = m.hotel;
  if (!isAirportCode(input.airport)) errors.airport = m.airport;
  if (!input.date) errors.date = m.date;
  else if (hotel && !departuresFor(input.hotelSlug, input.airport).some((departure) => departure.date === input.date)) {
    errors.date = m.dateUnavailable;
  }
  if (!Number.isInteger(input.adults) || input.adults < 1 || input.adults > LIMITS.maxAdults) {
    errors.adults = fmt(m.adults, { max: LIMITS.maxAdults });
  }
  if (input.childAges.length > LIMITS.maxChildren) errors.children = fmt(m.childrenMax, { max: LIMITS.maxChildren });
  else if (hotel?.adultsOnly && input.childAges.length > 0) errors.children = m.adultsOnly;
  else if (input.childAges.some((age) => !Number.isInteger(age) || age < 0 || age > LIMITS.maxChildAge)) {
    errors.children = m.childAges;
  }
  if (input.name.trim().length < 2 || input.name.length > 100) errors.name = m.name;
  if (!EMAIL.test(input.email.trim()) || input.email.length > 120) errors.email = m.email;
  if (!/^\+?\d{9,15}$/.test(normalizeWhatsapp(input.whatsapp))) errors.whatsapp = m.whatsapp;
  if (!input.consent) errors.consent = m.consent;
  return errors;
};

const LANG: Record<string, string> = { pt: "pt-PT", es: "es-ES", fr: "fr-FR", en: "en-GB", de: "de-DE" };

export const longDate = (iso: string, locale = "pt"): string => {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year ?? 2027, (month ?? 1) - 1, day ?? 1));
  const text = new Intl.DateTimeFormat(LANG[locale] ?? "pt-PT", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
  return text;
};

export const formatEuro = (value: number, locale = "pt"): string => `${value.toLocaleString(LANG[locale] ?? "pt-PT")} €`;

export type LeadInput = { name: string; email: string; whatsapp: string; consent: boolean; source: string };
export type LeadErrors = Partial<Record<"name" | "email" | "whatsapp" | "consent", string>>;

/** Short form shown inside blog articles: the reader asks for dates and prices. */
export const validateLead = (input: LeadInput): LeadErrors => {
  const { name, email, whatsapp, consent } = validateBooking(
    { hotelSlug: "", airport: "LIS", date: "", adults: 2, childAges: [], ...input },
    {},
  );
  return { name, email, whatsapp, consent };
};
