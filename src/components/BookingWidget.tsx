"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { AIRPORTS, airportLabel, isAirportCode, LOCALE_AIRPORT, type AirportCode } from "@/lib/airports";
import { formatEuro, LIMITS, longDate, validateBooking, type BookingErrors } from "@/lib/booking";

export type BookingHotel = {
  slug: string;
  name: string;
  adultsOnly: boolean;
  departures: readonly { date: string; price: number }[];
  // Departures from the other airports, by airport code.
  byAirport: Readonly<Record<string, readonly { date: string; price: number }[]>>;
};

type BookingWidgetProps = { hotels: readonly BookingHotel[]; initialSlug?: string; locale?: LocaleCode };

type Status = "idle" | "sending" | "sent" | "error";

const YEAR = 2027;

const field = "w-full rounded-xl border border-sand-200 bg-white px-3 py-2.5 text-sm font-semibold text-ocean-900 outline-none focus:border-lagoon-500 disabled:bg-sand-100";
const label = "mb-1 block text-[11px] font-bold uppercase tracking-widest text-ocean-700";
const errorText = "mt-1 text-xs font-semibold text-clove-600";

const pad = (value: number) => String(value).padStart(2, "0");

// Weeks of one month, Monday first; null pads the days that belong to other months.
const weeksOf = (monthIndex: number): (number | null)[][] => {
  const first = new Date(Date.UTC(YEAR, monthIndex, 1));
  const offset = (first.getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(YEAR, monthIndex + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [...Array<null>(offset).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)];
  while (cells.length % 7 !== 0) cells.push(null);
  return Array.from({ length: cells.length / 7 }, (_, row) => cells.slice(row * 7, row * 7 + 7));
};

export const BookingWidget = ({ hotels, initialSlug = "", locale = DEFAULT_LOCALE }: BookingWidgetProps) => {
  const t = getMessages(locale).booking;
  const MONTHS = getMessages(locale).months;
  const [slug, setSlug] = useState(initialSlug);
  const [airport, setAirport] = useState<AirportCode>(LOCALE_AIRPORT[locale]);
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [childAges, setChildAges] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot: people never see or fill it
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [monthIndex, setMonthIndex] = useState(initialDefaultMonth(hotels, initialSlug));

  // The airport follows the language of the page, unless the visitor chose one before.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem("zanzibar-airport");
    } catch {
      saved = null;
    }
    if (isAirportCode(saved)) setAirport(saved);
  }, []);

  const hotel = hotels.find((item) => item.slug === slug);
  const departures = useMemo(() => (hotel ? (airport === "LIS" ? hotel.departures : hotel.byAirport[airport] ?? []) : []), [hotel, airport]);
  const priceByDate = useMemo(() => new Map(departures.map((departure) => [departure.date, departure.price])), [departures]);
  const price = date ? priceByDate.get(date) : undefined;
  const lowest = departures.length ? Math.min(...departures.map((departure) => departure.price)) : null;
  const rules = useMemo(() => Object.fromEntries(hotels.map((item) => [item.slug, { adultsOnly: item.adultsOnly }])), [hotels]);
  // After the first send attempt, messages follow the form live and disappear as soon as a field is fixed.
  const found = validateBooking({ hotelSlug: slug, airport, date, adults, childAges, name, email, whatsapp, consent }, rules, t.errors);
  const errors: BookingErrors = submitted ? found : {};

  const chooseHotel = (next: string) => {
    setSlug(next);
    const nextHotel = hotels.find((item) => item.slug === next);
    if (nextHotel?.adultsOnly) setChildAges([]);
    const nextDepartures = nextHotel ? departuresOf(nextHotel, airport) : [];
    if (!nextDepartures.some((departure) => departure.date === date)) setDate("");
    if (!date) setMonthIndex(Number(nextDepartures[0]?.date.slice(5, 7) ?? 1) - 1);
  };

  const chooseAirport = (next: AirportCode) => {
    setAirport(next);
    try {
      window.localStorage.setItem("zanzibar-airport", next);
    } catch {
      // Private mode: the choice just is not remembered.
    }
    const nextDepartures = hotel ? departuresOf(hotel, next) : [];
    if (!nextDepartures.some((departure) => departure.date === date)) setDate("");
    if (!date) setMonthIndex(Number(nextDepartures[0]?.date.slice(5, 7) ?? 1) - 1);
  };

  const setChildren = (count: number) =>
    setChildAges((current) => (count <= current.length ? current.slice(0, count) : [...current, ...Array<number>(count - current.length).fill(0)]));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hotelSlug: slug, airport, date, adults, childAges, name, email, whatsapp, consent, website, locale }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-lagoon-500/30 bg-lagoon-100/50 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-ocean-900">{fmt(t.sentTitle, { name: name.trim().split(" ")[0] ?? "" })}</h3>
        <p className="mx-auto mt-3 max-w-lg text-ocean-900">
          {fmt(t.sentText, { email: email.trim() })}
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft">
          {t.sentNote}
        </p>
      </div>
    );
  }

  const weeks = weeksOf(monthIndex);
  const monthHasDeparture = (index: number) => departures.some((departure) => Number(departure.date.slice(5, 7)) === index + 1);
  const adultsLabel = adults === 1 ? t.oneAdult : fmt(t.adultsN, { n: adults });

  return (
    <form onSubmit={submit} noValidate className="grid gap-8 lg:grid-cols-[1.1fr_1fr]" aria-label={t.requestTitle}>
      <div className="rounded-3xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-soft">
          <span aria-hidden>▦</span> {t.dates}
        </h3>

        <div className="mt-4">
          <label htmlFor="aeroporto" className={label}>{t.airport}</label>
          <select id="aeroporto" value={airport} onChange={(event) => chooseAirport(event.target.value as AirportCode)} className={field}>
            {AIRPORTS.map((item) => <option key={item.code} value={item.code}>{airportLabel(item.code, locale)}</option>)}
          </select>
        </div>

        <div className="mt-4">
          <label htmlFor="hotel" className={label}>{t.hotel}</label>
          <select id="hotel" value={slug} onChange={(event) => chooseHotel(event.target.value)} className={field} aria-invalid={Boolean(errors.hotelSlug)}>
            <option value="">{t.chooseHotel}</option>
            {hotels.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}{item.adultsOnly ? t.adultsOnlyTag : ""}
              </option>
            ))}
          </select>
          {errors.hotelSlug ? <p className={errorText}>{errors.hotelSlug}</p> : null}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMonthIndex((current) => Math.max(0, current - 1))}
            disabled={monthIndex === 0}
            aria-label={t.prevMonth}
            className="grid size-11 place-items-center rounded-full border border-sand-200 text-lg text-ocean-900 disabled:opacity-30"
          >
            ‹
          </button>
          <p aria-live="polite" className="font-display text-xl font-semibold text-ocean-900">{fmt(getMessages(locale).monthYear, { month: MONTHS[monthIndex] ?? "", year: YEAR })}</p>
          <button
            type="button"
            onClick={() => setMonthIndex((current) => Math.min(9, current + 1))}
            disabled={monthIndex === 9}
            aria-label={t.nextMonth}
            className="grid size-11 place-items-center rounded-full border border-sand-200 text-lg text-ocean-900 disabled:opacity-30"
          >
            ›
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">
          {t.weekdays.map((day) => <span key={day}>{day}</span>)}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {weeks.flat().map((day, index) => {
            if (day === null) return <span key={`empty-${index}`} />;
            const iso = `${YEAR}-${pad(monthIndex + 1)}-${pad(day)}`;
            const dayPrice = priceByDate.get(iso);
            if (dayPrice === undefined) {
              return (
                <span key={iso} className="grid h-14 place-items-center rounded-xl bg-sand-100 text-sm text-ink-soft/60 sm:h-16">
                  {day}
                </span>
              );
            }
            const selected = iso === date;
            return (
              <button
                key={iso}
                type="button"
                onClick={() => setDate(iso)}
                aria-pressed={selected}
                aria-label={fmt(t.dayAria, { date: longDate(iso, locale), price: formatEuro(dayPrice, locale) })}
                className={`grid h-14 place-content-center rounded-xl border text-center transition-colors sm:h-16 ${
                  selected ? "border-ocean-900 bg-ocean-900 text-white" : "border-clove-500 bg-white text-ocean-900 hover:bg-clove-500/10"
                }`}
              >
                <span className="text-base font-bold leading-none">{day}</span>
                <span className={`mt-1 text-[11px] font-semibold leading-none ${selected ? "text-white" : "text-clove-600"}`}>{dayPrice}€</span>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-ink-soft">
          {!hotel
            ? t.hintNoHotel
            : monthHasDeparture(monthIndex)
              ? `${fmt(t.hint, { city: airportLabel(airport, locale) })}${lowest ? fmt(t.hintFrom, { price: formatEuro(lowest, locale) }) : ""}`
              : t.hintNone}
        </p>
        {errors.date ? <p className={errorText}>{errors.date}</p> : null}
      </div>

      <div className="rounded-3xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="font-display text-2xl font-semibold text-ocean-900">{t.requestTitle}</h3>
        <p className="mt-1 text-sm text-ink-soft">{t.requestLead}</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="adultos" className={label}>{t.adults}</label>
            <select id="adultos" value={adults} onChange={(event) => setAdults(Number(event.target.value))} className={field}>
              {Array.from({ length: LIMITS.maxAdults }, (_, index) => index + 1).map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            {errors.adults ? <p className={errorText}>{errors.adults}</p> : null}
          </div>
          <div>
            <label htmlFor="criancas" className={label}>{t.children}</label>
            <select
              id="criancas"
              value={childAges.length}
              onChange={(event) => setChildren(Number(event.target.value))}
              disabled={hotel?.adultsOnly}
              className={field}
            >
              {Array.from({ length: LIMITS.maxChildren + 1 }, (_, index) => index).map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>
        {hotel?.adultsOnly ? <p className="mt-2 text-xs text-ink-soft">{fmt(t.adultsOnlyNote, { name: hotel.name })}</p> : null}

        {childAges.length > 0 ? (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {childAges.map((age, index) => (
              <div key={index}>
                <label htmlFor={`idade-${index}`} className={label}>{fmt(t.childAge, { n: index + 1 })}</label>
                <select
                  id={`idade-${index}`}
                  value={age}
                  onChange={(event) => setChildAges((current) => current.map((value, i) => (i === index ? Number(event.target.value) : value)))}
                  className={field}
                >
                  {Array.from({ length: LIMITS.maxChildAge + 1 }, (_, n) => n).map((n) => <option key={n} value={n}>{n === 1 ? t.oneYear : fmt(t.years, { n })}</option>)}
                </select>
              </div>
            ))}
          </div>
        ) : null}
        {errors.children ? <p className={errorText}>{errors.children}</p> : null}

        {hotel && date && price !== undefined ? (
          <div className="mt-5 rounded-2xl bg-lagoon-100/60 p-4 text-sm text-ocean-900" aria-live="polite">
            <p className="font-bold">{hotel.name}</p>
            <p>{fmt(t.summary, { date: longDate(date, locale), airport: airportLabel(airport, locale) })}</p>
            <p className="mt-2 font-display text-xl font-semibold">
              {formatEuro(price * adults, locale)} <span className="text-sm font-sans font-semibold text-ink-soft">{fmt(t.priceFor, { who: adultsLabel, per: formatEuro(price, locale) })}</span>
            </p>
            {childAges.length > 0 ? <p className="mt-1 text-xs text-ink-soft">{t.childrenOnRequest}</p> : null}
          </div>
        ) : null}

        <div className="mt-5 space-y-3">
          <div>
            <label htmlFor="nome" className={label}>{t.name}</label>
            <input id="nome" name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className={field} aria-invalid={Boolean(errors.name)} />
            {errors.name ? <p className={errorText}>{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className={label}>{t.email}</label>
            <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className={field} aria-invalid={Boolean(errors.email)} />
            {errors.email ? <p className={errorText}>{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor="whatsapp" className={label}>WhatsApp</label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              autoComplete="tel"
              placeholder="+351 912 345 678"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
              className={field}
              aria-invalid={Boolean(errors.whatsapp)}
            />
            {errors.whatsapp ? <p className={errorText}>{errors.whatsapp}</p> : null}
          </div>
          <div aria-hidden className="absolute -left-[9999px]">
            <label htmlFor="website">{t.honeypot}</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
          </div>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 size-4 shrink-0 accent-clove-500" />
          <span>
            {t.consent} <Link href="/privacidade" className="font-semibold underline">{t.privacy}</Link>.
          </span>
        </label>
        {errors.consent ? <p className={errorText}>{errors.consent}</p> : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-5 w-full rounded-full bg-clove-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-clove-600 disabled:opacity-60"
        >
          {status === "sending" ? t.sending : t.submit}
        </button>
        {status === "error" ? (
          <p role="alert" className="mt-3 text-sm font-semibold text-clove-600">
            {t.error}
          </p>
        ) : null}
      </div>
    </form>
  );
};

function departuresOf(hotel: BookingHotel, airport: AirportCode): readonly { date: string; price: number }[] {
  return airport === "LIS" ? hotel.departures : hotel.byAirport[airport] ?? [];
}

function initialDefaultMonth(hotels: readonly BookingHotel[], slug: string): number {
  const first = hotels.find((item) => item.slug === slug)?.departures[0]?.date;
  return first ? Number(first.slice(5, 7)) - 1 : 0;
}
