"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { formatEuro, LIMITS, longDate, validateBooking, type BookingErrors } from "@/lib/booking";

export type BookingHotel = {
  slug: string;
  name: string;
  adultsOnly: boolean;
  departures: readonly { date: string; price: number }[];
};

type BookingWidgetProps = { hotels: readonly BookingHotel[]; initialSlug?: string };

type Status = "idle" | "sending" | "sent" | "error";

const MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"] as const;
const WEEKDAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"] as const;
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

export const BookingWidget = ({ hotels, initialSlug = "" }: BookingWidgetProps) => {
  const [slug, setSlug] = useState(initialSlug);
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

  const hotel = hotels.find((item) => item.slug === slug);
  const priceByDate = useMemo(() => new Map((hotel?.departures ?? []).map((departure) => [departure.date, departure.price])), [hotel]);
  const price = date ? priceByDate.get(date) : undefined;
  const lowest = hotel ? Math.min(...hotel.departures.map((departure) => departure.price)) : null;
  const rules = useMemo(() => Object.fromEntries(hotels.map((item) => [item.slug, { adultsOnly: item.adultsOnly }])), [hotels]);
  // After the first send attempt, messages follow the form live and disappear as soon as a field is fixed.
  const found = validateBooking({ hotelSlug: slug, date, adults, childAges, name, email, whatsapp, consent }, rules);
  const errors: BookingErrors = submitted ? found : {};

  const chooseHotel = (next: string) => {
    setSlug(next);
    const nextHotel = hotels.find((item) => item.slug === next);
    if (nextHotel?.adultsOnly) setChildAges([]);
    if (nextHotel && !nextHotel.departures.some((departure) => departure.date === date)) setDate("");
    if (nextHotel && !date) setMonthIndex(Number(nextHotel.departures[0]?.date.slice(5, 7) ?? 1) - 1);
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
        body: JSON.stringify({ hotelSlug: slug, date, adults, childAges, name, email, whatsapp, consent, website }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-lagoon-500/30 bg-lagoon-100/50 p-8 text-center">
        <h3 className="font-display text-2xl font-semibold text-ocean-900">Pedido recebido. Obrigado, {name.trim().split(" ")[0]}!</h3>
        <p className="mx-auto mt-3 max-w-lg text-ocean-900">
          Estamos a tratar de todo o processo e logo que possível confirmamos. Enviámos-lhe um e-mail para {email.trim()} com o resumo do pedido.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft">
          Este pedido é uma pré-reserva: não paga nada agora. Um agente vai contactá-lo para confirmar a disponibilidade e o preço final.
        </p>
      </div>
    );
  }

  const weeks = weeksOf(monthIndex);
  const monthHasDeparture = (index: number) => (hotel?.departures ?? []).some((departure) => Number(departure.date.slice(5, 7)) === index + 1);
  const adultsLabel = adults === 1 ? "1 adulto" : `${adults} adultos`;

  return (
    <form onSubmit={submit} noValidate className="grid gap-8 lg:grid-cols-[1.1fr_1fr]" aria-label="Pedido de reserva">
      <div className="rounded-3xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-soft">
          <span aria-hidden>▦</span> Datas de partida
        </h3>

        <div className="mt-4">
          <label htmlFor="hotel" className={label}>Hotel</label>
          <select id="hotel" value={slug} onChange={(event) => chooseHotel(event.target.value)} className={field} aria-invalid={Boolean(errors.hotelSlug)}>
            <option value="">Escolha o hotel</option>
            {hotels.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}{item.adultsOnly ? " (só adultos)" : ""}
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
            aria-label="Mês anterior"
            className="grid size-11 place-items-center rounded-full border border-sand-200 text-lg text-ocean-900 disabled:opacity-30"
          >
            ‹
          </button>
          <p aria-live="polite" className="font-display text-xl font-semibold text-ocean-900">{MONTHS[monthIndex]} de {YEAR}</p>
          <button
            type="button"
            onClick={() => setMonthIndex((current) => Math.min(9, current + 1))}
            disabled={monthIndex === 9}
            aria-label="Mês seguinte"
            className="grid size-11 place-items-center rounded-full border border-sand-200 text-lg text-ocean-900 disabled:opacity-30"
          >
            ›
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft">
          {WEEKDAYS.map((day) => <span key={day}>{day}</span>)}
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
                aria-label={`${longDate(iso)}, ${formatEuro(dayPrice)} por pessoa`}
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
            ? "Escolha o hotel para ver as datas e os preços."
            : monthHasDeparture(monthIndex)
              ? `Preço por pessoa, em quarto duplo, 7 noites tudo incluído, com voo de Lisboa.${lowest ? ` Desde ${formatEuro(lowest)}.` : ""}`
              : "Sem partidas neste mês. Março a maio é época das chuvas; novembro e dezembro abrem quando a TUI tiver voos."}
        </p>
        {errors.date ? <p className={errorText}>{errors.date}</p> : null}
      </div>

      <div className="rounded-3xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="font-display text-2xl font-semibold text-ocean-900">Pedir reserva</h3>
        <p className="mt-1 text-sm text-ink-soft">Sem pagar online. Um agente confirma disponibilidade e preço antes de a reserva ficar confirmada.</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="adultos" className={label}>Adultos</label>
            <select id="adultos" value={adults} onChange={(event) => setAdults(Number(event.target.value))} className={field}>
              {Array.from({ length: LIMITS.maxAdults }, (_, index) => index + 1).map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            {errors.adults ? <p className={errorText}>{errors.adults}</p> : null}
          </div>
          <div>
            <label htmlFor="criancas" className={label}>Crianças</label>
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
        {hotel?.adultsOnly ? <p className="mt-2 text-xs text-ink-soft">{hotel.name} é um hotel só para adultos.</p> : null}

        {childAges.length > 0 ? (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {childAges.map((age, index) => (
              <div key={index}>
                <label htmlFor={`idade-${index}`} className={label}>Idade da criança {index + 1}</label>
                <select
                  id={`idade-${index}`}
                  value={age}
                  onChange={(event) => setChildAges((current) => current.map((value, i) => (i === index ? Number(event.target.value) : value)))}
                  className={field}
                >
                  {Array.from({ length: LIMITS.maxChildAge + 1 }, (_, n) => n).map((n) => <option key={n} value={n}>{n === 1 ? "1 ano" : `${n} anos`}</option>)}
                </select>
              </div>
            ))}
          </div>
        ) : null}
        {errors.children ? <p className={errorText}>{errors.children}</p> : null}

        {hotel && date && price !== undefined ? (
          <div className="mt-5 rounded-2xl bg-lagoon-100/60 p-4 text-sm text-ocean-900" aria-live="polite">
            <p className="font-bold">{hotel.name}</p>
            <p>{longDate(date)} · 7 noites · tudo incluído</p>
            <p className="mt-2 font-display text-xl font-semibold">
              {formatEuro(price * adults)} <span className="text-sm font-sans font-semibold text-ink-soft">para {adultsLabel} ({formatEuro(price)} por pessoa)</span>
            </p>
            {childAges.length > 0 ? <p className="mt-1 text-xs text-ink-soft">Preço das crianças sob consulta.</p> : null}
          </div>
        ) : null}

        <div className="mt-5 space-y-3">
          <div>
            <label htmlFor="nome" className={label}>Nome</label>
            <input id="nome" name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} className={field} aria-invalid={Boolean(errors.name)} />
            {errors.name ? <p className={errorText}>{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className={label}>E-mail</label>
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
            <label htmlFor="website">Não preencha este campo</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
          </div>
        </div>

        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 size-4 shrink-0 accent-clove-500" />
          <span>
            Autorizo o tratamento dos meus dados para responder a este pedido. <Link href="/privacidade" className="font-semibold underline">Política de privacidade</Link>.
          </span>
        </label>
        {errors.consent ? <p className={errorText}>{errors.consent}</p> : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-5 w-full rounded-full bg-clove-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-clove-600 disabled:opacity-60"
        >
          {status === "sending" ? "A enviar…" : "Enviar pedido de reserva"}
        </button>
        {status === "error" ? (
          <p role="alert" className="mt-3 text-sm font-semibold text-clove-600">
            Não foi possível enviar agora. Tente de novo dentro de instantes ou ligue +351 937 045 579.
          </p>
        ) : null}
      </div>
    </form>
  );
};

function initialDefaultMonth(hotels: readonly BookingHotel[], slug: string): number {
  const first = hotels.find((item) => item.slug === slug)?.departures[0]?.date;
  return first ? Number(first.slice(5, 7)) - 1 : 0;
}
