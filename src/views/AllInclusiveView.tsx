import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { POST_SLUGS } from "@/content/blog/slugs";
import { departureLabel, localizedHotels } from "@/i18n/localize";
import type { LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/site";

type Copy = {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  compare: string;
  head: readonly [string, string, string, string];
  adults: string;
  couples: string;
  onRequest: string;
  fromWord: string;
  tableNote: string;
  whyTitle: string;
  why: string;
  readMore: string;
  costLabel: string;
  holidaysLabel: string;
  faqTitle: string;
  extraFaq: readonly { question: string; answer: string }[];
  crumbHome: string;
  heroAlt: string;
};

export const ALL_INCLUSIVE: Record<Exclude<LocaleCode, "pt">, Copy> = {
  es: {
    title: "Zanzíbar todo incluido 2027",
    seoTitle: "Zanzíbar todo incluido 2027, con vuelo desde Madrid",
    description: "Zanzíbar todo incluido 2027 con vuelo desde {from}: 5 hoteles, 7 noches, traslados y seguro{price}. Compare los resorts.",
    lead: "Cinco resorts todo incluido, con 7 noches, vuelo regular desde {from}, traslados y seguro de viaje.",
    compare: "Compare los hoteles todo incluido en Zanzíbar",
    head: ["Hotel", "Zona", "Para quién", "Por persona"],
    adults: "Solo adultos",
    couples: "Parejas y familias",
    onRequest: "Bajo petición",
    fromWord: "desde",
    tableNote: "Precios por persona, 7 noches, con vuelo. El precio depende de la fecha de salida.",
    whyTitle: "¿Por qué todo incluido en Zanzíbar?",
    why: "En un destino lejano, saber de antemano cuánto se va a gastar quita presión. Con el todo incluido, las comidas y bebidas en el resort quedan resueltas, y el precio ya trae vuelo, traslados y seguro. Quedan fuera la tasa hotelera de Zanzíbar, que se paga en el hotel, y las excursiones.",
    readMore: "¿Quiere entender los costes? Lea",
    costLabel: "¿Cuánto cuesta viajar a Zanzíbar?",
    holidaysLabel: "viaje a Zanzíbar con vuelo",
    faqTitle: "Preguntas frecuentes sobre Zanzíbar todo incluido",
    extraFaq: [
      { question: "¿Qué significa todo incluido en Zanzíbar?", answer: "En los hoteles que vendemos incluye el alojamiento con comidas y bebidas en el resort. Las condiciones exactas de cada hotel están en su página." },
      { question: "¿Hay viajes a Zanzíbar todo incluido en 2026?", answer: "Nuestros paquetes son para salidas en 2027. Para 2026 ya no tenemos salidas disponibles en este sitio." },
    ],
    crumbHome: "Inicio",
    heroAlt: "Cabañas sobre el agua en Zanzíbar",
  },
  fr: {
    title: "Zanzibar tout inclus 2027",
    seoTitle: "Zanzibar tout inclus 2027, avec vol depuis Paris",
    description: "Zanzibar tout inclus 2027 avec vol depuis {from} : 5 hôtels, 7 nuits, transferts et assurance{price}. Comparez les resorts.",
    lead: "Cinq resorts tout inclus, avec 7 nuits, vol régulier depuis {from}, transferts et assurance voyage.",
    compare: "Comparez les hôtels tout inclus à Zanzibar",
    head: ["Hôtel", "Zone", "Pour qui", "Par personne"],
    adults: "Adultes uniquement",
    couples: "Couples et familles",
    onRequest: "Sur demande",
    fromWord: "à partir de",
    tableNote: "Prix par personne, 7 nuits, avec vol. Le prix dépend de la date de départ.",
    whyTitle: "Pourquoi le tout inclus à Zanzibar ?",
    why: "Pour une destination lointaine, savoir à l'avance ce que l'on va dépenser enlève de la pression. Avec le tout inclus, les repas et boissons au resort sont réglés, et le prix comprend déjà le vol, les transferts et l'assurance. Restent à part la taxe hôtelière de Zanzibar, payée à l'hôtel, et les excursions.",
    readMore: "Envie de comprendre les coûts ? Lisez",
    costLabel: "Zanzibar prix voyage",
    holidaysLabel: "voyage à Zanzibar avec vol",
    faqTitle: "Questions fréquentes sur Zanzibar tout inclus",
    extraFaq: [
      { question: "Que signifie tout inclus à Zanzibar ?", answer: "Dans les hôtels que nous vendons, cela comprend l'hébergement avec repas et boissons au resort. Les conditions exactes de chaque hôtel figurent sur sa page." },
      { question: "Y a-t-il des séjours tout inclus à Zanzibar en 2026 ?", answer: "Nos forfaits concernent des départs en 2027. Pour 2026, nous n'avons plus de départs disponibles sur ce site." },
    ],
    crumbHome: "Accueil",
    heroAlt: "Cabanes sur l'eau à Zanzibar",
  },
  en: {
    title: "All Inclusive Zanzibar 2027",
    seoTitle: "Zanzibar All Inclusive 2027 with Flights from Europe",
    description: "Zanzibar all inclusive 2027 with flights from {from}: 5 hotels, 7 nights, transfers and insurance{price}. Compare the resorts.",
    lead: "Five all inclusive resorts, with 7 nights, scheduled flights from {from}, transfers and travel insurance.",
    compare: "Compare all inclusive hotels in Zanzibar",
    head: ["Hotel", "Area", "Best for", "Per person"],
    adults: "Adults only",
    couples: "Couples and families",
    onRequest: "On request",
    fromWord: "from",
    tableNote: "Prices per person, 7 nights, with flights. The price depends on the departure date.",
    whyTitle: "Why all inclusive in Zanzibar?",
    why: "On a faraway destination, knowing in advance what you will spend takes the pressure off. With all inclusive, meals and drinks at the resort are sorted, and the price already covers flights, transfers and insurance. Left out are Zanzibar's hotel tax, paid at the hotel, and excursions.",
    readMore: "Want to understand the costs? Read",
    costLabel: "Is Zanzibar expensive?",
    holidaysLabel: "Zanzibar holidays with flights",
    faqTitle: "Frequently asked questions about all inclusive Zanzibar",
    extraFaq: [
      { question: "What does all inclusive mean in Zanzibar?", answer: "At the hotels we sell, it covers accommodation with meals and drinks at the resort. The exact terms for each hotel are on its page." },
      { question: "Are there all inclusive Zanzibar holidays in 2026?", answer: "Our packages are for 2027 departures. We no longer have 2026 departures available on this site." },
    ],
    crumbHome: "Home",
    heroAlt: "Over-water cabins in Zanzibar",
  },
  de: {
    title: "Sansibar all inclusive 2027",
    seoTitle: "Sansibar all inclusive 2027, mit Flug ab Frankfurt",
    description: "Sansibar all inclusive 2027 mit Flug ab {from}: 5 Hotels, 7 Nächte, Transfers und Versicherung{price}. Resorts vergleichen.",
    lead: "Fünf All-inclusive-Resorts mit 7 Nächten, Linienflug ab {from}, Transfers und Reiseversicherung.",
    compare: "Vergleichen Sie die All-inclusive-Hotels auf Sansibar",
    head: ["Hotel", "Region", "Für wen", "Pro Person"],
    adults: "Nur Erwachsene",
    couples: "Paare und Familien",
    onRequest: "Auf Anfrage",
    fromWord: "ab",
    tableNote: "Preise pro Person, 7 Nächte, mit Flug. Der Preis hängt vom Abreisetermin ab.",
    whyTitle: "Warum all inclusive auf Sansibar?",
    why: "Bei einem weit entfernten Reiseziel nimmt es Druck, vorher zu wissen, was man ausgibt. Mit All inclusive sind Mahlzeiten und Getränke im Resort geregelt, und der Preis enthält schon Flug, Transfers und Versicherung. Nicht enthalten sind die Hotelsteuer von Sansibar, die im Hotel gezahlt wird, und Ausflüge.",
    readMore: "Möchten Sie die Kosten verstehen? Lesen Sie",
    costLabel: "Sansibar Kosten",
    holidaysLabel: "Sansibar Urlaub mit Flug",
    faqTitle: "Häufige Fragen zu Sansibar all inclusive",
    extraFaq: [
      { question: "Was bedeutet all inclusive auf Sansibar?", answer: "In den Hotels, die wir verkaufen, umfasst es die Unterkunft mit Mahlzeiten und Getränken im Resort. Die genauen Bedingungen jedes Hotels stehen auf seiner Seite." },
      { question: "Gibt es Sansibar all inclusive im Jahr 2026?", answer: "Unsere Pakete gelten für Abreisen im Jahr 2027. Für 2026 haben wir auf dieser Seite keine Abreisen mehr." },
    ],
    crumbHome: "Startseite",
    heroAlt: "Hütten über dem Wasser auf Sansibar",
  },
};

const NUMBER_LOCALE = { es: "es-ES", fr: "fr-FR", en: "en-GB", de: "de-DE" } as const;

export const allInclusiveFromPrice = (locale: Exclude<LocaleCode, "pt">): number | null => {
  const prices = localizedHotels(locale).flatMap((hotel) => (hotel.fromPrice === null ? [] : [hotel.fromPrice]));
  return prices.length ? Math.min(...prices) : null;
};

export const AllInclusiveView = ({ locale }: { locale: Exclude<LocaleCode, "pt"> }) => {
  const c = ALL_INCLUSIVE[locale];
  const t = getMessages(locale);
  const hotels = localizedHotels(locale);
  const from = departureLabel(locale);
  const url = absoluteUrl(pathFor(locale, "allinclusive"));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: c.crumbHome, item: absoluteUrl(pathFor(locale, "home")) },
            { "@type": "ListItem", position: 2, name: c.title, item: url },
          ],
        }}
      />
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image src="/images/destino/cabanas-sobre-agua.webp" alt={c.heroAlt} fill priority sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pt-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{c.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-sand-100">{fmt(c.lead, { from })}</p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <SearchBar variant="hero" locale={locale} />
      </div>

      <section aria-labelledby="compare" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="compare" className="font-display text-3xl font-semibold text-ocean-900">{c.compare}</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-sand-200 bg-white">
          <table className="w-full min-w-[40rem] text-left text-[15px]">
            <thead className="bg-sand-100 text-xs font-bold uppercase tracking-wider text-ocean-900">
              <tr>
                {c.head.map((label) => (
                  <th key={label} scope="col" className="px-4 py-3">{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.slug} className="border-t border-sand-200 align-top">
                  <td className="px-4 py-3 font-semibold">
                    <Link href={pathFor(locale, "hotel", hotel.slug)} className="text-clove-600 underline underline-offset-4">{hotel.name}</Link>
                  </td>
                  <td className="px-4 py-3">{hotel.area ?? "Zanzibar"}</td>
                  <td className="px-4 py-3">{hotel.adultsOnly ? c.adults : c.couples}</td>
                  <td className="px-4 py-3">{hotel.fromPrice === null ? c.onRequest : `${c.fromWord} ${hotel.fromPrice.toLocaleString(NUMBER_LOCALE[locale])} €`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-soft">{c.tableNote}</p>
      </section>

      <section aria-labelledby="why" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 id="why" className="font-display text-3xl font-semibold text-ocean-900">{c.whyTitle}</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">{c.why}</p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {c.readMore}{" "}
          <Link href={pathFor(locale, "post", POST_SLUGS.cost[locale])} className="font-semibold text-clove-600 underline underline-offset-4">{c.costLabel}</Link>
          {" · "}
          <Link href={pathFor(locale, "holidays")} className="font-semibold text-clove-600 underline underline-offset-4">{c.holidaysLabel}</Link>.
        </p>
      </section>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <PriceConditions locale={locale} />
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <FaqSection id="faq" title={c.faqTitle} items={[...c.extraFaq, ...t.faq]} />
      </div>
    </>
  );
};
