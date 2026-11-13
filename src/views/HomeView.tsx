import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { PLACES } from "@/content/destinos";
import { localizedHotels } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl, GOOGLE_REVIEWS } from "@/lib/site";

const REVIEWS = [
  {
    author: "Ana Maria A.",
    meta: "São Tomé e Príncipe · 2026",
    quote:
      "a Vamos Fugir é uma agência de excelência que nos leva a conhecer a cultura e a gastronomia com rotas bem estruturadas e toda a equipa é fantástica e de uma simpatia incrível é sem dúvida a minha agência de eleição e o Luciano é um ser humano incrível sempre disponível e incansável.",
  },
  {
    author: "Maria B.",
    meta: "Viagem em grupo a São Tomé · 2025",
    quote:
      "Viagem a São Tomé fantástica, com um grupo maravilhoso, com um acompanhante da agência, \"Vamos Fugir\", (Luciano) , pessoa fantástica, genuína e com muito amor ao \"próximo\".",
  },
] as const;

export const HomeView = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale);
  const h = t.home;
  const hotels = localizedHotels(locale);
  const showReviews = locale === DEFAULT_LOCALE;
  const [ratingText, reviewsRest = ""] = fmt(h.reviewsLead, { rating: GOOGLE_REVIEWS.rating, count: GOOGLE_REVIEWS.count }).split("|");
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: h.schemaListName,
          itemListElement: hotels.map((hotel, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: hotel.name,
            url: absoluteUrl(pathFor(locale, "hotel", hotel.slug)),
            image: absoluteUrl(hotel.images[0]?.src ?? "/"),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Zanzibar",
          description: h.schemaDescription,
          touristType: h.touristType,
          image: absoluteUrl("/images/destino/the-rock-topo.webp"),
        }}
      />

      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image
          src="/images/destino/the-rock-topo.webp"
          alt={h.heroAlt}
          fill
          priority
          sizes="100vw"
          className="-z-10 -scale-x-100 object-cover object-[60%_60%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean-950/55 via-ocean-950/10 to-ocean-950/60" />
        <div className="mx-auto max-w-6xl px-5 pb-36 pt-16 sm:pb-40 sm:pt-24">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
            {h.pill}
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-7xl">
            {h.h1a}<em className="text-spice-400">{h.h1b}</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand-100">
            {h.lead}
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-5 sm:-mt-28">
        <SearchBar variant="hero" locale={locale} />
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ocean-900">
          {h.checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="hoteis" className="mx-auto mt-20 max-w-6xl px-5">
        <h2 id="hoteis" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          {h.hotelsTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          {h.hotelsLead}
        </p>
        <div className="mt-8 space-y-5">
          {hotels.map((hotel, index) => (
            <HotelCard key={hotel.slug} hotel={hotel} priority={index === 0} locale={locale} />
          ))}
        </div>
        <Link href={pathFor(locale, "hotels")} className="mt-6 inline-block text-sm font-bold text-clove-600 underline-offset-4 hover:underline">
          {h.hotelsLink}
        </Link>
      </section>

      <section id="destinos" aria-labelledby="destinos-titulo" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <h2 id="destinos-titulo" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          {h.placesTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{h.placesLead}</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((place) => (
            <li key={place.slug} className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={place.image} alt={t.places[place.slug as keyof typeof t.places]?.alt ?? place.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-ocean-900">{place.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.places[place.slug as keyof typeof t.places]?.text ?? place.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="como-funciona" aria-labelledby="como-titulo" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <h2 id="como-titulo" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          {h.stepsTitle}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-lagoon-100/60 p-6">
              <span className="font-display text-4xl font-semibold text-clove-500">{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-ocean-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <PriceConditions locale={locale} />
      </section>

      <section aria-labelledby="opinioes" className="mx-auto mt-24 max-w-6xl px-5">
        <h2 id="opinioes" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          {h.reviewsTitle}
        </h2>
        <p className="mt-3 text-ink-soft">
          <strong className="text-ocean-900">{ratingText}</strong> {reviewsRest}
        </p>
        {showReviews ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <figure key={review.author} className="rounded-3xl border border-sand-200 bg-white p-6 shadow-sm">
                <blockquote className="text-[15px] leading-relaxed text-ink">“{review.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-bold text-ocean-900">{review.author}</span>
                  <span className="text-ink-soft"> · {review.meta} · Google</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        <a href={GOOGLE_REVIEWS.url} rel="noopener" className="mt-6 inline-block text-sm font-bold text-clove-600 underline-offset-4 hover:underline">
          {fmt(h.reviewsLink, { count: GOOGLE_REVIEWS.count })}
        </a>
      </section>

      <div id="perguntas" className="mt-24 scroll-mt-24 px-5">
        <FaqSection id="faq-titulo" title={h.faqTitle} items={t.faq} />
      </div>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ocean-900 p-8 text-white sm:p-14">
          <Image src="/images/destino/casal-banco-areia.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">{h.ctaTitle}</h2>
          <p className="mt-3 max-w-lg text-sand-100">{h.ctaText}</p>
          <Link
            href={pathFor(locale, "hotels")}
            className="mt-7 inline-block rounded-full bg-clove-500 px-7 py-3.5 font-bold transition-colors hover:bg-clove-600"
          >
            {t.common.book}
          </Link>
        </div>
      </section>
    </>
  );
};
