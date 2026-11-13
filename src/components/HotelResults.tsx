"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { HotelCard } from "@/components/HotelCard";
import { HOTEL_AREAS } from "@/content/hotels";
import type { HotelView } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";

type Sort = "recomendado" | "nome";

const chip = "flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-ocean-900 hover:bg-sand-100";

// Booking-style results: filters on the left, one wide card per hotel on the right.
// Filters start from the search (?zona=...&criancas=...) and can be changed afterwards.
export const HotelResults = ({ hotels, locale = DEFAULT_LOCALE }: { hotels: readonly HotelView[]; locale?: LocaleCode }) => {
  const t = getMessages(locale).results;
  const params = useSearchParams();
  const initialArea = params.get("zona");
  const kids = Number(params.get("criancas") ?? "0") > 0;

  const [areas, setAreas] = useState<string[]>(initialArea && HOTEL_AREAS.includes(initialArea) ? [initialArea] : []);
  const [adultsOnly, setAdultsOnly] = useState(false);
  const [sort, setSort] = useState<Sort>("recomendado");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => {
    const filtered = hotels.filter((hotel) => {
      if (areas.length > 0 && !(hotel.area && areas.includes(hotel.area))) return false;
      if (adultsOnly && !hotel.adultsOnly) return false;
      // Adults-only hotels cannot take the children of the search.
      if (kids && hotel.adultsOnly && !adultsOnly) return false;
      return true;
    });
    return sort === "nome" ? [...filtered].sort((a, b) => a.name.localeCompare(b.name, locale)) : filtered;
  }, [hotels, locale, areas, adultsOnly, sort, kids]);

  const toggleArea = (area: string) =>
    setAreas((current) => (current.includes(area) ? current.filter((item) => item !== area) : [...current, area]));

  return (
    <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
      <aside aria-label={t.filters} className="h-fit rounded-3xl border border-sand-200 bg-white p-4 lg:sticky lg:top-24">
        {/* Phones: filters stay folded so the hotels show first. */}
        <button
          type="button"
          aria-expanded={filtersOpen}
          aria-controls="filtros-conteudo"
          onClick={() => setFiltersOpen((open) => !open)}
          className="flex w-full items-center justify-between px-3 py-1 text-sm font-bold text-ocean-900 lg:hidden"
        >
          {t.filtersToggle}
          <span aria-hidden>{filtersOpen ? "−" : "+"}</span>
        </button>
        <div id="filtros-conteudo" className={`${filtersOpen ? "mt-3" : "hidden"} lg:mt-0 lg:block`}>
        <fieldset>
          <legend className="px-3 text-xs font-bold uppercase tracking-widest text-ocean-700">{t.zone}</legend>
          {HOTEL_AREAS.map((area) => (
            <label key={area} className={chip}>
              <input type="checkbox" checked={areas.includes(area)} onChange={() => toggleArea(area)} className="size-4 accent-clove-500" />
              {area}
            </label>
          ))}
        </fieldset>
        <fieldset className="mt-4 border-t border-sand-200 pt-4">
          <legend className="px-3 text-xs font-bold uppercase tracking-widest text-ocean-700">{t.type}</legend>
          <label className={chip}>
            <input type="checkbox" checked={adultsOnly} onChange={(event) => setAdultsOnly(event.target.checked)} className="size-4 accent-clove-500" />
            {t.adultsOnly}
          </label>
        </fieldset>
        <div className="mt-4 border-t border-sand-200 pt-4">
          <label htmlFor="ordenar" className="px-3 text-xs font-bold uppercase tracking-widest text-ocean-700">{t.sortBy}</label>
          <select
            id="ordenar"
            value={sort}
            onChange={(event) => setSort(event.target.value as Sort)}
            className="mt-2 w-full rounded-xl border border-sand-200 bg-white px-3 py-2.5 text-sm font-semibold text-ocean-900"
          >
            <option value="recomendado">{t.favourites}</option>
            <option value="nome">{t.nameAZ}</option>
          </select>
        </div>
        </div>
      </aside>

      <section aria-live="polite" aria-label={t.resultsAria}>
        <p className="mb-4 text-sm font-semibold text-ink-soft">
          {results.length === 1 ? t.one : fmt(t.many, { n: results.length })}
          {kids ? t.kidsNote : ""}
        </p>
        {results.length === 0 ? (
          <p className="rounded-3xl bg-sand-100 p-6 text-ocean-900">
            {t.none}
          </p>
        ) : (
          <div className="space-y-5">
            {results.map((hotel, index) => (
              <HotelCard key={hotel.slug} hotel={hotel} priority={index === 0} locale={locale} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
