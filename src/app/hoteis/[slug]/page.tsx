import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { HOTELS, getHotel } from "@/content/hotels";
import { absoluteUrl, mailtoUrl, SITE, whatsappUrl } from "@/lib/site";

type HotelPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => HOTELS.map((hotel) => ({ slug: hotel.slug }));

export const generateMetadata = async ({ params }: HotelPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) return {};

  const path = `/hoteis/${hotel.slug}`;
  return {
    title: { absolute: hotel.seoTitle },
    description: hotel.seoDescription,
    alternates: { canonical: path },
    openGraph: { title: hotel.seoTitle, description: hotel.seoDescription, url: path },
  };
};

export default async function HotelPage({ params }: HotelPageProps) {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) notFound();

  const request = `Olá! Quero pedir uma reserva para o ${hotel.name} em Zanzibar. Datas pretendidas, número de adultos e crianças (com idades):`;

  const facts: ReadonlyArray<readonly [string, string]> = [
    ["Duração", "7 noites"],
    ["Regime", "Tudo incluído"],
    ["Partida", "Lisboa, voo regular"],
    ...(hotel.area ? ([["Zona", hotel.area]] as const) : []),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: hotel.name,
          description: hotel.intro,
          url: absoluteUrl(`/hoteis/${hotel.slug}`),
          address: { "@type": "PostalAddress", addressRegion: "Zanzibar", addressCountry: "TZ", ...(hotel.area ? { addressLocality: hotel.area } : {}) },
          ...(hotel.fromPrice === null
            ? {}
            : { priceRange: `desde ${hotel.fromPrice} EUR` }),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Hotéis", item: absoluteUrl("/hoteis") },
            { "@type": "ListItem", position: 3, name: hotel.name, item: absoluteUrl(`/hoteis/${hotel.slug}`) },
          ],
        }}
      />

      <section className="sun-glow pattern-lattice text-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-12">
          <nav aria-label="Localização" className="text-sm text-lagoon-100">
            <Link href="/" className="hover:underline">
              Início
            </Link>{" "}
            /{" "}
            <Link href="/hoteis" className="hover:underline">
              Hotéis
            </Link>{" "}
            / <span aria-current="page">{hotel.name}</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{hotel.name}, Zanzibar</h1>
          <p className="mt-4 max-w-2xl text-lg text-sand-100">{hotel.intro}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-[1fr_22rem]">
        <div className="space-y-10">
          <dl className="grid gap-4 sm:grid-cols-3">
            {facts.map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-lagoon-100/60 p-4">
                <dt className="text-xs font-bold uppercase tracking-widest text-ocean-700">{label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-ocean-900">{value}</dd>
              </div>
            ))}
          </dl>
          <PriceConditions />
        </div>

        <aside className="h-fit rounded-3xl border border-sand-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <p className="text-sm font-bold text-ocean-900">
            {hotel.fromPrice === null ? "Preço sob pedido" : `desde ${hotel.fromPrice} € por pessoa`}
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ocean-900">Pedir reserva</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Sem pagar online. Enviamos-lhe a proposta e o agente confirma disponibilidade e preço antes de a reserva ficar
            confirmada.
          </p>
          <a
            href={whatsappUrl(request)}
            rel="noopener"
            className="mt-5 block rounded-full bg-clove-500 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-clove-600"
          >
            Pedir no WhatsApp
          </a>
          <a
            href={mailtoUrl(`Pedido de reserva: ${hotel.name}`, request)}
            className="mt-3 block rounded-full border border-ocean-900/20 px-5 py-3 text-center font-bold text-ocean-900 transition-colors hover:bg-sand-100"
          >
            Pedir por e-mail
          </a>
          <p className="mt-4 text-center text-xs text-ink-soft">
            Ou ligue <a href={`tel:${SITE.phone}`} className="font-bold underline-offset-2 hover:underline">{SITE.phoneDisplay}</a>
          </p>
        </aside>
      </div>
    </>
  );
}
