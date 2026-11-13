import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingWidget } from "@/components/BookingWidget";
import { FaqSection } from "@/components/FaqSection";
import { HotelGallery } from "@/components/HotelGallery";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { ZANZIBAR_FAQ, type Faq } from "@/content/faq";
import { getHotel, HOTELS, type Hotel } from "@/content/hotels";
import { departuresFor } from "@/lib/departures";
import { absoluteUrl } from "@/lib/site";

type HotelPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => HOTELS.map((hotel) => ({ slug: hotel.slug }));

export const generateMetadata = async ({ params }: HotelPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) return {};

  const path = `/hoteis/${hotel.slug}`;
  const cover = hotel.images[0];
  return {
    title: { absolute: hotel.seoTitle },
    description: hotel.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: hotel.seoTitle,
      description: hotel.seoDescription,
      url: path,
      images: cover ? [{ url: cover.src, alt: cover.alt }] : [],
    },
  };
};

const hotelFaq = (hotel: Hotel): readonly Faq[] => [
  {
    question: `Onde fica o ${hotel.name}?`,
    answer: hotel.area
      ? `O ${hotel.name} fica em ${hotel.area}, na ${hotel.coast?.toLowerCase() ?? "ilha"} de Zanzibar, na Tanzânia.`
      : `O ${hotel.name} fica em Zanzibar, na Tanzânia.`,
  },
  {
    question: `O ${hotel.name} é tudo incluído?`,
    answer: `Sim. O pacote que vendemos para o ${hotel.name} é em regime tudo incluído, com 7 noites, voo de Lisboa, transfers e seguro de viagem.`,
  },
  ...(hotel.adultsOnly
    ? [{ question: `O ${hotel.name} aceita crianças?`, answer: `Não. O ${hotel.name} é um hotel só para adultos.` }]
    : []),
  ...ZANZIBAR_FAQ.slice(2),
];

const SECTIONS = [
  { id: "fotos", label: "Fotos" },
  { id: "sobre", label: "Sobre o hotel" },
  { id: "reservar", label: "Datas e reserva" },
  { id: "inclui", label: "O que inclui" },
  { id: "perguntas", label: "Perguntas" },
] as const;

export default async function HotelPage({ params }: HotelPageProps) {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) notFound();

  const url = absoluteUrl(`/hoteis/${hotel.slug}`);
  const faq = hotelFaq(hotel);
  const bookingHotels = HOTELS.map((item) => ({ slug: item.slug, name: item.name, adultsOnly: item.adultsOnly, departures: departuresFor(item.slug) }));

  const facts: ReadonlyArray<readonly [string, string]> = [
    ["Duração", "7 noites"],
    ["Regime", "Tudo incluído"],
    ["Partida", "Lisboa, voo regular"],
    ...(hotel.area ? ([["Zona", `${hotel.area} · ${hotel.coast ?? ""}`.replace(/ · $/, "")]] as const) : []),
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
          ...(hotel.fromPrice === null ? {} : { priceRange: `desde ${hotel.fromPrice} EUR` }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Hotéis", item: absoluteUrl("/hoteis") },
            { "@type": "ListItem", position: 3, name: hotel.name, item: url },
          ],
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-8">
        <nav aria-label="Localização" className="text-sm text-ink-soft">
          <Link href="/" className="hover:underline">Início</Link> /{" "}
          <Link href="/hoteis" className="hover:underline">Hotéis</Link> /{" "}
          <span aria-current="page" className="font-semibold text-ocean-900">{hotel.name}</span>
        </nav>

        <header className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">
              {[hotel.area, hotel.coast, hotel.adultsOnly ? "Só adultos" : null].filter(Boolean).join(" · ")}
            </p>
            <h1 className="mt-1 text-4xl font-semibold text-ocean-900 sm:text-5xl">{hotel.name}: tudo incluído com voo de Lisboa</h1>
          </div>
          <a
            href="#reservar"
            className="rounded-full bg-clove-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-clove-600 lg:hidden"
          >
            Pedir reserva
          </a>
        </header>

        <section id="fotos" aria-label={`Fotos do ${hotel.name}`} className="mt-6 scroll-mt-28">
          <HotelGallery images={hotel.images} />
        </section>
      </div>

      <div className="sticky top-[3.4rem] z-30 mt-8 border-y border-sand-200 bg-sand-50/95 backdrop-blur">
        <nav aria-label="Secções do hotel" className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 text-sm font-semibold">
          {SECTIONS.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="whitespace-nowrap rounded-full px-4 py-3 text-ocean-900 hover:bg-sand-100">
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="min-w-0 space-y-14">
          <section id="sobre" aria-labelledby="sobre-titulo" className="scroll-mt-32">
            <h2 id="sobre-titulo" className="text-3xl font-semibold text-ocean-900">Sobre o {hotel.name}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{hotel.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Destaques">
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
          <h2 id="reservar-titulo" className="text-3xl font-semibold text-ocean-900">Datas e preços 2027: peça a sua reserva</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Partidas de Lisboa aos sábados, 7 noites em tudo incluído, com voo (1 escala), transfers e seguro. Escolha o hotel e a data, diga-nos quantos viajam e receba a confirmação por e-mail. Sem pagar online.
          </p>
          <div className="mt-6">
            <BookingWidget hotels={bookingHotels} initialSlug={hotel.slug} />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Preços por pessoa, em quarto duplo, sujeitos a disponibilidade. Criança: preço sob consulta. Não vendemos partidas de março a maio (época das chuvas); novembro e dezembro de 2027 abrem quando a TUI tiver voos.
          </p>
        </section>

          <section id="inclui" aria-label="O que inclui" className="scroll-mt-32">
            <PriceConditions />
          </section>

          <div id="perguntas" className="scroll-mt-32">
            <FaqSection id="faq-hotel" title={`Perguntas sobre o ${hotel.name}`} items={faq} />
          </div>
        </div>

      </div>

      <section aria-label="Pesquisar outros hotéis" className="mx-auto max-w-6xl px-5 pb-4">
        <h2 className="mb-4 text-2xl font-semibold text-ocean-900">Procurar outro hotel ou outro mês</h2>
        <SearchBar variant="inline" />
      </section>
    </>
  );
}
