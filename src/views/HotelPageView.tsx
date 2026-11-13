import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingWidget } from "@/components/BookingWidget";
import { FaqSection } from "@/components/FaqSection";
import { HotelGallery } from "@/components/HotelGallery";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import type { Faq } from "@/content/faq";
import { getHotel, HOTELS } from "@/content/hotels";
import { departureLabel, getLocalizedHotel, type HotelView } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { AIRPORTS } from "@/lib/airports";
import { departuresFor } from "@/lib/departures";
import { absoluteUrl } from "@/lib/site";

const hotelFaq = (hotel: HotelView, locale: LocaleCode): readonly Faq[] => {
  const t = getMessages(locale);
  const f = t.hotelFaq;
  const from = departureLabel(locale);
  const coastKey = getHotel(hotel.slug)?.coast === "Costa norte" ? "north" : getHotel(hotel.slug)?.coast === "Costa leste" ? "east" : "island";
  return [
    {
      question: fmt(f.whereQ, { name: hotel.name }),
      answer: hotel.area ? fmt(f.whereA, { name: hotel.name, area: hotel.area, coastIn: t.coastIn[coastKey] }) : fmt(f.whereANoArea, { name: hotel.name }),
    },
    { question: fmt(f.allIncQ, { name: hotel.name }), answer: fmt(f.allIncA, { name: hotel.name, from }) },
    ...(hotel.adultsOnly ? [{ question: fmt(f.adultsQ, { name: hotel.name }), answer: fmt(f.adultsA, { name: hotel.name }) }] : []),
    ...t.faq.slice(2),
  ];
};

const SECTION_IDS = ["fotos", "sobre", "reservar", "inclui", "perguntas"] as const;
const SECTION_KEYS = { fotos: "photos", sobre: "about", reservar: "book", inclui: "includes", perguntas: "questions" } as const;

export const HotelPageView = ({ slug, locale = DEFAULT_LOCALE }: { slug: string; locale?: LocaleCode }) => {
  const hotel = getLocalizedHotel(slug, locale);
  if (!hotel) notFound();
  const t = getMessages(locale);
  const p = t.hotelPage;
  const from = departureLabel(locale);

  const url = absoluteUrl(pathFor(locale, "hotel", hotel.slug));
  const faq = hotelFaq(hotel, locale);
  const bookingHotels = HOTELS.map((item) => ({ slug: item.slug, name: item.name, adultsOnly: item.adultsOnly, departures: departuresFor(item.slug), byAirport: Object.fromEntries(AIRPORTS.map((airport) => [airport.code, departuresFor(item.slug, airport.code)])) }));

  const facts: ReadonlyArray<readonly [string, string]> = [
    [p.facts.duration, p.nights],
    [p.facts.board, p.allInclusive],
    [p.facts.departure, fmt(p.departureValue, { from })],
    ...(hotel.area ? ([[p.facts.zone, `${hotel.area} · ${hotel.coast ?? ""}`.replace(/ · $/, "")]] as const) : []),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Hotel",
          "@id": `${url}#hotel`,
          name: hotel.name,
          description: hotel.intro,
          url,
          image: hotel.images.map((image) => absoluteUrl(image.src)),
          address: {
            "@type": "PostalAddress",
            addressRegion: "Zanzibar",
            addressCountry: "TZ",
            ...(hotel.area ? { addressLocality: hotel.area } : {}),
          },
          amenityFeature: hotel.highlights.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
          ...(hotel.fromPrice === null ? {} : { priceRange: fmt(p.schemaPrice, { price: hotel.fromPrice }) }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: getMessages(locale).hotelsPage.crumbHome, item: absoluteUrl(pathFor(locale, "home")) },
            { "@type": "ListItem", position: 2, name: getMessages(locale).hotelsPage.crumbHotels, item: absoluteUrl(pathFor(locale, "hotels")) },
            { "@type": "ListItem", position: 3, name: hotel.name, item: url },
          ],
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-8">
        <nav aria-label={p.crumbAria} className="text-sm text-ink-soft">
          <Link href={pathFor(locale, "home")} className="hover:underline">{t.hotelsPage.crumbHome}</Link> /{" "}
          <Link href={pathFor(locale, "hotels")} className="hover:underline">{t.hotelsPage.crumbHotels}</Link> /{" "}
          <span aria-current="page" className="font-semibold text-ocean-900">{hotel.name}</span>
        </nav>

        <header className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">
              {[hotel.area, hotel.coast, hotel.adultsOnly ? t.card.adultsOnly : null].filter(Boolean).join(" · ")}
            </p>
            <h1 className="mt-1 text-4xl font-semibold text-ocean-900 sm:text-5xl">{fmt(p.h1, { name: hotel.name, from })}</h1>
          </div>
          <a
            href="#reservar"
            className="rounded-full bg-clove-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-clove-600 lg:hidden"
          >
            {p.requestBooking}
          </a>
        </header>

        <section id="fotos" aria-label={fmt(p.photosAria, { name: hotel.name })} className="mt-6 scroll-mt-28">
          <HotelGallery images={hotel.images} />
        </section>
      </div>

      <div className="sticky top-[3.4rem] z-30 mt-8 border-y border-sand-200 bg-sand-50/95 backdrop-blur">
        <nav aria-label={p.sectionsAria} className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 text-sm font-semibold">
          {SECTION_IDS.map((id) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap rounded-full px-4 py-3 text-ocean-900 hover:bg-sand-100">
              {p.sections[SECTION_KEYS[id]]}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="min-w-0 space-y-14">
          <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-32">
            <h2 id="sobre-titulo" className="text-3xl font-semibold text-ocean-900">{fmt(p.aboutTitle, { name: hotel.name })}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{hotel.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={p.highlightsAria}>
              {hotel.highlights.map((item) => (
                <li key={item} className="rounded-full bg-lagoon-100/70 px-4 py-1.5 text-sm font-semibold text-ocean-700">{item}</li>
              ))}
            </ul>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-lagoon-100/60 p-4">
                  <dt className="text-xs font-bold uppercase tracking-widest text-ocean-700">{label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-ocean-900">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

        <section id="reservar" aria-labelledby="reservar-titulo" className="scroll-mt-32">
          <h2 id="reservar-titulo" className="text-3xl font-semibold text-ocean-900">{p.bookTitle}</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            {p.bookLead}
          </p>
          <div className="mt-6">
            <BookingWidget hotels={bookingHotels} initialSlug={hotel.slug} locale={locale} />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            {p.bookNote}
          </p>
        </section>

          <section id="inclui" aria-label={p.includesAria} className="scroll-mt-32">
            <PriceConditions locale={locale} />
          </section>

          <div id="perguntas" className="scroll-mt-32">
            <FaqSection id="faq-hotel" title={fmt(p.faqTitle, { name: hotel.name })} items={faq} />
          </div>
        </div>

      </div>

      <section aria-label={p.searchOtherAria} className="mx-auto max-w-6xl px-5 pb-4">
        <h2 className="mb-4 text-2xl font-semibold text-ocean-900">{p.searchOther}</h2>
        <SearchBar variant="inline" locale={locale} />
      </section>
    </>
  );
};
