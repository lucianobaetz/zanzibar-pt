import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { ZANZIBAR_FAQ, type Faq } from "@/content/faq";
import { HOTELS } from "@/content/hotels";
import { FROM_PRICE, eur } from "@/content/blog/shared";
import { absoluteUrl } from "@/lib/site";

const TITLE = "Zanzibar tudo incluído 2027";
const DESCRIPTION = `Zanzibar tudo incluído 2027 com voo de Lisboa: 5 hotéis, 7 noites, transfers e seguro${FROM_PRICE === null ? "" : `, desde ${eur(FROM_PRICE)} por pessoa`}. Compare os resorts.`;

export const metadata: Metadata = {
  title: { absolute: "Zanzibar tudo incluído 2027, com voo de Lisboa" },
  description: DESCRIPTION,
  alternates: { canonical: "/zanzibar-tudo-incluido" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/zanzibar-tudo-incluido", images: [{ url: "/images/destino/cabanas-sobre-agua.webp" }] },
};

const FAQ: readonly Faq[] = [
  {
    question: "Há férias em Zanzibar tudo incluído em 2026?",
    answer: "Os nossos pacotes são para partidas em 2027. Em 2026 já não temos partidas disponíveis neste site.",
  },
  {
    question: "O que significa tudo incluído em Zanzibar?",
    answer: "Nos hotéis que vendemos, inclui o alojamento com refeições e bebidas no resort. As condições exatas de cada hotel estão na respetiva página.",
  },
  ...ZANZIBAR_FAQ,
];

export default function ZanzibarTudoIncluidoPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: TITLE, item: absoluteUrl("/zanzibar-tudo-incluido") },
          ],
        }}
      />
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image src="/images/destino/cabanas-sobre-agua.webp" alt="Cabanas sobre a água em Zanzibar" fill priority sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pt-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{TITLE}, com voo de Lisboa</h1>
          <p className="mt-4 max-w-2xl text-lg text-sand-100">
            Cinco resorts em tudo incluído, com 7 noites, voo regular desde Lisboa, transfers e seguro de viagem.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <SearchBar variant="hero" />
      </div>

      <section aria-labelledby="comparar" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="comparar" className="font-display text-3xl font-semibold text-ocean-900">Compare os hotéis tudo incluído em Zanzibar</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-sand-200 bg-white">
          <table className="w-full min-w-[40rem] text-left text-[15px]">
            <thead className="bg-sand-100 text-xs font-bold uppercase tracking-wider text-ocean-900">
              <tr>
                <th scope="col" className="px-4 py-3">Hotel</th>
                <th scope="col" className="px-4 py-3">Zona</th>
                <th scope="col" className="px-4 py-3">Para quem</th>
                <th scope="col" className="px-4 py-3">Por pessoa</th>
              </tr>
            </thead>
            <tbody>
              {HOTELS.map((hotel) => (
                <tr key={hotel.slug} className="border-t border-sand-200 align-top">
                  <td className="px-4 py-3 font-semibold">
                    <Link href={`/hoteis/${hotel.slug}`} className="text-clove-600 underline underline-offset-4">{hotel.name}</Link>
                  </td>
                  <td className="px-4 py-3">{hotel.area ?? "Zanzibar"}</td>
                  <td className="px-4 py-3">{hotel.adultsOnly ? "Só adultos" : "Casais e famílias"}</td>
                  <td className="px-4 py-3">{hotel.fromPrice === null ? "Sob pedido" : `desde ${eur(hotel.fromPrice)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink-soft">Preços por pessoa, 7 noites, com voo desde Lisboa. O preço depende da data de partida.</p>
      </section>

      <section aria-labelledby="porque" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 id="porque" className="font-display text-3xl font-semibold text-ocean-900">Porquê tudo incluído em Zanzibar?</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Num destino longe de Portugal, saber de antemão o que vai gastar tira pressão. Com o tudo incluído, refeições e bebidas no resort ficam
          resolvidas, e o preço já traz o voo, os transfers e o seguro. Fica de fora a taxa hoteleira de Zanzibar, que se paga no hotel, e as excursões.
        </p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Quer perceber os custos? Leia <Link href="/blog/zanzibar-e-caro" className="font-semibold text-clove-600 underline underline-offset-4">Zanzibar é caro?</Link> e as
          {" "}<Link href="/viagens-zanzibar" className="font-semibold text-clove-600 underline underline-offset-4">viagens a Zanzibar com voo de Lisboa</Link>.
        </p>
      </section>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <PriceConditions />
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <FaqSection id="perguntas" title="Perguntas frequentes sobre Zanzibar tudo incluído" items={FAQ} />
      </div>
    </>
  );
}
