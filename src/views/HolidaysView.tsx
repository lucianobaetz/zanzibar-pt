import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { POST_SLUGS } from "@/content/blog/slugs";
import { departureLabel, localizedHotels } from "@/i18n/localize";
import type { LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/site";

type Sales = {
  title: string;
  seoTitle: string;
  description: string;
  lead: string;
  stepsTitle: string;
  steps: readonly { title: string; text: string }[];
  hotelsTitle: string;
  hotelsText: string;
  whenTitle: string;
  whenText: string;
  guides: string;
  faqTitle: string;
  crumbHome: string;
  heroAlt: string;
};

export const SALES: Record<Exclude<LocaleCode, "pt">, Sales> = {
  es: {
    title: "Viaje a Zanzíbar todo incluido con vuelo",
    seoTitle: "Viaje a Zanzíbar 2027: todo incluido con vuelo y traslados",
    description: "Viaje a Zanzíbar todo incluido con vuelo desde {from}, 7 noches, traslados y seguro. 5 hoteles en el norte y la costa este{price}.",
    lead: "Viajes a Zanzíbar todo incluido, con vuelo regular desde {from}, 7 noches, traslados y seguro de viaje.",
    stepsTitle: "Cómo funciona su viaje a Zanzíbar",
    steps: [
      { title: "Elija el hotel y la fecha", text: "Compare los cinco resorts y las fechas de salida de 2027." },
      { title: "Solicite la reserva", text: "Sin pagar nada online. Nuestro equipo confirma disponibilidad y precio con usted." },
      { title: "Nosotros hacemos el resto", text: "Vuelo, 7 noches todo incluido, traslados y seguro de viaje." },
    ],
    hotelsTitle: "Los hoteles para su viaje a Zanzíbar",
    hotelsText: "Cinco resorts todo incluido, en el norte y en la costa este de la isla, todos con vuelo.",
    whenTitle: "Cuándo viajar a Zanzíbar",
    whenText: "La mejor época es de junio a octubre, y enero y febrero también funcionan bien para la playa. Las lluvias fuertes llegan de marzo a mayo.",
    guides: "Guías para planificar",
    faqTitle: "Preguntas frecuentes sobre el viaje a Zanzíbar",
    crumbHome: "Inicio",
    heroAlt: "Muelle al atardecer en una playa de Zanzíbar",
  },
  fr: {
    title: "Voyage Zanzibar tout inclus avec vol",
    seoTitle: "Voyage Zanzibar 2027 : tout inclus avec vol et transferts",
    description: "Voyage Zanzibar tout inclus avec vol depuis {from}, 7 nuits, transferts et assurance. 5 hôtels au nord et sur la côte est{price}.",
    lead: "Voyages à Zanzibar tout inclus, avec vol régulier depuis {from}, 7 nuits, transferts et assurance voyage.",
    stepsTitle: "Comment se passe votre voyage à Zanzibar",
    steps: [
      { title: "Choisissez l'hôtel et la date", text: "Comparez les cinq resorts et les dates de départ de 2027." },
      { title: "Faites la demande de réservation", text: "Rien à payer en ligne. Notre équipe confirme disponibilité et prix avec vous." },
      { title: "Nous nous occupons du reste", text: "Vol, 7 nuits tout inclus, transferts et assurance voyage." },
    ],
    hotelsTitle: "Les hôtels pour votre voyage à Zanzibar",
    hotelsText: "Cinq resorts tout inclus, au nord et sur la côte est de l'île, tous avec vol.",
    whenTitle: "Quand partir à Zanzibar",
    whenText: "La meilleure période va de juin à octobre ; janvier et février conviennent aussi à la plage. Les grandes pluies arrivent de mars à mai.",
    guides: "Guides pour préparer le voyage",
    faqTitle: "Questions fréquentes sur le voyage à Zanzibar",
    crumbHome: "Accueil",
    heroAlt: "Ponton au coucher du soleil sur une plage de Zanzibar",
  },
  en: {
    title: "All inclusive Zanzibar holidays with flights",
    seoTitle: "Zanzibar Holidays 2027: All Inclusive with Flights",
    description: "All inclusive Zanzibar holidays with flights from {from}, 7 nights, transfers and insurance. 5 hotels on the north and east coasts{price}.",
    lead: "All inclusive Zanzibar holidays with scheduled flights from {from}, 7 nights, transfers and travel insurance.",
    stepsTitle: "How your Zanzibar holiday works",
    steps: [
      { title: "Choose the hotel and date", text: "Compare the five resorts and the 2027 departure dates." },
      { title: "Request your booking", text: "Nothing to pay online. Our team confirms availability and price with you." },
      { title: "We take care of the rest", text: "Flights, 7 nights all inclusive, transfers and travel insurance." },
    ],
    hotelsTitle: "The hotels for your Zanzibar holiday",
    hotelsText: "Five all inclusive resorts on the north and east coasts of the island, all with flights.",
    whenTitle: "When to go to Zanzibar",
    whenText: "The best time is June to October, and January and February also suit the beach. The long rains come from March to May.",
    guides: "Guides to plan your trip",
    faqTitle: "Frequently asked questions about Zanzibar holidays",
    crumbHome: "Home",
    heroAlt: "Jetty at sunset on a Zanzibar beach",
  },
  de: {
    title: "Sansibar Urlaub all inclusive mit Flug",
    seoTitle: "Sansibar Urlaub 2027: All inclusive mit Flug und Transfer",
    description: "Sansibar Urlaub all inclusive mit Flug ab {from}, 7 Nächte, Transfers und Versicherung. 5 Hotels im Norden und an der Ostküste{price}.",
    lead: "Sansibar Urlaub all inclusive, mit Linienflug ab {from}, 7 Nächten, Transfers und Reiseversicherung.",
    stepsTitle: "So läuft Ihr Sansibar Urlaub ab",
    steps: [
      { title: "Hotel und Termin wählen", text: "Vergleichen Sie die fünf Resorts und die Abreisetermine 2027." },
      { title: "Buchung anfragen", text: "Online zahlen Sie nichts. Unser Team bestätigt Verfügbarkeit und Preis mit Ihnen." },
      { title: "Wir kümmern uns um den Rest", text: "Flug, 7 Nächte all inclusive, Transfers und Reiseversicherung." },
    ],
    hotelsTitle: "Die Hotels für Ihren Sansibar Urlaub",
    hotelsText: "Fünf All-inclusive-Resorts im Norden und an der Ostküste der Insel, alle mit Flug.",
    whenTitle: "Wann nach Sansibar reisen",
    whenText: "Die beste Reisezeit ist Juni bis Oktober; auch Januar und Februar eignen sich für den Strand. Die große Regenzeit dauert von März bis Mai.",
    guides: "Ratgeber zur Reiseplanung",
    faqTitle: "Häufige Fragen zum Sansibar Urlaub",
    crumbHome: "Startseite",
    heroAlt: "Steg bei Sonnenuntergang an einem Strand auf Sansibar",
  },
};

export const HolidaysView = ({ locale }: { locale: Exclude<LocaleCode, "pt"> }) => {
  const s = SALES[locale];
  const t = getMessages(locale);
  const hotels = localizedHotels(locale);
  const prices = hotels.flatMap((hotel) => (hotel.fromPrice === null ? [] : [hotel.fromPrice]));
  const from = departureLabel(locale);
  const lead = fmt(s.lead, { from }) + (prices.length ? ` ${fmt(t.card.from, { price: Math.min(...prices) })} ${t.card.perPerson}.` : "");
  const guides = (["where", "when", "things", "flights", "safety"] as const).map((key) => ({
    href: pathFor(locale, "post", POST_SLUGS[key][locale]),
  }));
  const url = absoluteUrl(pathFor(locale, "holidays"));
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: s.crumbHome, item: absoluteUrl(pathFor(locale, "home")) },
            { "@type": "ListItem", position: 2, name: s.title, item: url },
          ],
        }}
      />
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image src="/images/destino/hero-molhe-por-do-sol.webp" alt={s.heroAlt} fill priority sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pt-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{s.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-sand-100">{lead}</p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <SearchBar variant="hero" locale={locale} />
      </div>

      <section aria-labelledby="how" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="how" className="font-display text-3xl font-semibold text-ocean-900">{s.stepsTitle}</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {s.steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-sand-200 bg-white p-6">
              <span className="font-display text-3xl font-semibold text-clove-500">{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-ocean-900">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="hotels" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="hotels" className="font-display text-3xl font-semibold text-ocean-900">{s.hotelsTitle}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{s.hotelsText}</p>
        <div className="mt-8 space-y-5">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} locale={locale} />
          ))}
        </div>
      </section>

      <section aria-labelledby="when" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 id="when" className="font-display text-3xl font-semibold text-ocean-900">{s.whenTitle}</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">{s.whenText}</p>
        <p className="mt-3 text-sm font-bold uppercase tracking-wider text-clove-600">{s.guides}</p>
        <ul className="mt-2 space-y-1">
          {guides.map((guide, index) => (
            <li key={guide.href}>
              <Link href={guide.href} className="font-semibold text-clove-600 underline underline-offset-4">
                {["where", "when", "things", "flights", "safety"][index] ? guideLabel(locale, index) : guide.href}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <PriceConditions locale={locale} />
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <FaqSection id="faq" title={s.faqTitle} items={t.faq} />
      </div>
    </>
  );
};

const GUIDE_LABELS: Record<Exclude<LocaleCode, "pt">, readonly string[]> = {
  es: ["¿Dónde está Zanzíbar?", "Mejor época para viajar a Zanzíbar", "Qué ver en Zanzíbar", "Vuelos a Zanzíbar", "¿Es seguro viajar a Zanzíbar?"],
  fr: ["Où se trouve Zanzibar ?", "Quand partir à Zanzibar ?", "Que faire à Zanzibar ?", "Vol Zanzibar", "Zanzibar danger : sécurité"],
  en: ["Where is Zanzibar?", "Best time to visit Zanzibar", "Things to do in Zanzibar", "Flights to Zanzibar", "Is Zanzibar safe?"],
  de: ["Wo liegt Sansibar?", "Beste Reisezeit Sansibar", "Sansibar Sehenswürdigkeiten", "Flug Sansibar", "Ist Sansibar sicher?"],
};
const guideLabel = (locale: Exclude<LocaleCode, "pt">, index: number): string => GUIDE_LABELS[locale][index] ?? "";
