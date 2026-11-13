// Booking request rules shared by the form (browser) and the API (server).
// The request is a pre-reservation: nothing is charged online and an agent confirms
// availability and price with TUI before anything is confirmed.

import { departuresFor } from "@/lib/departures";

export const LIMITS = { maxAdults: 6, maxChildren: 4, maxChildAge: 11 } as const;

export type BookingInput = {
  hotelSlug: string;
  date: string;
  adults: number;
  childAges: readonly number[];
  name: string;
  email: string;
  whatsapp: string;
  consent: boolean;
};

export type BookingErrors = Partial<Record<"hotelSlug" | "date" | "adults" | "children" | "name" | "email" | "whatsapp" | "consent", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const normalizeWhatsapp = (value: string): string => value.replace(/[\s().-]/g, "");

export const validateBooking = (input: BookingInput, hotelNames: Readonly<Record<string, { adultsOnly: boolean }>>): BookingErrors => {
  const errors: BookingErrors = {};
  const hotel = hotelNames[input.hotelSlug];

  if (!hotel) errors.hotelSlug = "Escolha o hotel.";
  if (!input.date) errors.date = "Escolha a data de partida no calendário.";
  else if (hotel && !departuresFor(input.hotelSlug).some((departure) => departure.date === input.date)) {
    errors.date = "Essa data não está disponível para este hotel.";
  }
  if (!Number.isInteger(input.adults) || input.adults < 1 || input.adults > LIMITS.maxAdults) {
    errors.adults = `Indique entre 1 e ${LIMITS.maxAdults} adultos.`;
  }
  if (input.childAges.length > LIMITS.maxChildren) errors.children = `No máximo ${LIMITS.maxChildren} crianças.`;
  else if (hotel?.adultsOnly && input.childAges.length > 0) errors.children = "Este hotel é só para adultos.";
  else if (input.childAges.some((age) => !Number.isInteger(age) || age < 0 || age > LIMITS.maxChildAge)) {
    errors.children = "Indique a idade de cada criança.";
  }
  if (input.name.trim().length < 2 || input.name.length > 100) errors.name = "Indique o seu nome.";
  if (!EMAIL.test(input.email.trim()) || input.email.length > 120) errors.email = "Indique um e-mail válido.";
  if (!/^\+?\d{9,15}$/.test(normalizeWhatsapp(input.whatsapp))) errors.whatsapp = "Indique um número de WhatsApp válido, com indicativo (ex.: +351 912 345 678).";
  if (!input.consent) errors.consent = "Precisamos da sua autorização para tratar o pedido.";
  return errors;
};

const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] as const;

export const longDate = (iso: string): string => {
  const [year, month, day] = iso.split("-").map(Number);
  return `sábado, ${day} de ${MONTHS[(month ?? 1) - 1]} de ${year}`;
};

export const formatEuro = (value: number): string => `${value.toLocaleString("pt-PT")} €`;

export type LeadInput = { name: string; email: string; whatsapp: string; consent: boolean; source: string };
export type LeadErrors = Partial<Record<"name" | "email" | "whatsapp" | "consent", string>>;

/** Short form shown inside blog articles: the reader asks for dates and prices. */
export const validateLead = (input: LeadInput): LeadErrors => {
  const { name, email, whatsapp, consent } = validateBooking(
    { hotelSlug: "", date: "", adults: 2, childAges: [], ...input },
    {},
  );
  return { name, email, whatsapp, consent };
};
