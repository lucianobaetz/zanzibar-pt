import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { PLACES } from "@/content/destinos";
import { ZANZIBAR_FAQ } from "@/content/faq";
import { HOTELS } from "@/content/hotels";
import { absoluteUrl, GOOGLE_REVIEWS, whatsappUrl } from "@/lib/site";

// Provisional SEO copy: final wording follows the Portugal keyword research.
const TITLE = "Férias em Zanzibar tudo incluído com voo de Lisboa";
const DESCRIPTION =
  "Zanzibar tudo incluído com voo de Lisboa, transfers e seguro. 5 resorts selecionados, partidas em 2027 e pedido de reserva sem pagar online.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", images: [{ url: "/images/destino/the-rock-topo.webp", alt: "The Rock, o restaurante sobre o mar em Zanzibar" }] },
};

const STEPS = [
  { title: "Escolha o hotel e o mês", text: "Pesquise acima ou veja os cinco resorts. Os voos partem de Lisboa." },
  { title: "Peça a reserva", text: "Sem pagar nada online. Diga-nos as datas, quantos são e as idades das crianças." },
  { title: "Nós confirmamos", text: "A nossa equipa confirma a disponibilidade e o preço antes de a reserva ficar confirmada." },
  { title: "Viaje descansado", text: "Voo, 7 noites tudo incluído, transfers e seguro de viagem tratados por nós." },
] as const;

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

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Hotéis em Zanzibar tudo incluído",
          itemListElement: HOTELS.map((hotel, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: hotel.name,
            url: absoluteUrl(`/hoteis/${hotel.slug}`),
            image: absoluteUrl(hotel.images[0]?.src ?? "/"),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Zanzibar",
          description:
            "Arquipélago da Tanzânia no Oceano Índico, conhecido pelas praias de areia branca, pelo mar turquesa e por Stone Town, Património Mundial da UNESCO.",
          touristType: ["Férias de praia", "Lua de mel", "Férias tudo incluído"],
          image: absoluteUrl("/images/destino/the-rock-topo.webp"),
        }}
      />

      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image
          src="/images/destino/the-rock-topo.webp"
          alt="The Rock, restaurante sobre o mar turquesa na praia de Michamvi, em Zanzibar"
          fill
          priority
          sizes="100vw"
          className="-z-10 -scale-x-100 object-cover object-[60%_60%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean-950/55 via-ocean-950/10 to-ocean-950/60" />
        <div className="mx-auto max-w-6xl px-5 pb-36 pt-16 sm:pb-40 sm:pt-24">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
            Voo desde Lisboa · Tudo incluído · 2027
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-7xl">
            Férias em Zanzibar, <em className="text-spice-400">tudo incluído</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand-100">
            Praias de areia branca e mar turquesa, com voo, transfers, seguro e 7 noites no resort que escolher. Nós tratamos de
            tudo.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-5 sm:-mt-28">
        <SearchBar variant="hero" />
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ocean-900">
          <li>✓ Sem pagar online</li>
          <li>✓ Voo regular, classe económica</li>
          <li>✓ Transfers e seguro incluídos</li>
          <li>✓ Licença RNAVT n.º 4155</li>
        </ul>
      </div>

      <section aria-labelledby="hoteis" className="mx-auto mt-20 max-w-6xl px-5">
        <h2 id="hoteis" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          Cinco resorts, uma escolha fácil
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Selecionámos só os hotéis que as pessoas mais procuram, em tudo incluído e com voo desde Lisboa.
        </p>
        <div className="mt-8 space-y-5">
          {HOTELS.map((hotel, index) => (
            <HotelCard key={hotel.slug} hotel={hotel} priority={index === 0} />
          ))}
        </div>
        <Link href="/hoteis" className="mt-6 inline-block text-sm font-bold text-clove-600 underline-offset-4 hover:underline">
          Filtrar e comparar os hotéis →
        </Link>
      </section>

      <section id="destinos" aria-labelledby="destinos-titulo" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <h2 id="destinos-titulo" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          As praias e os locais de Zanzibar
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">Zanzibar é uma ilha de praias muito diferentes entre si. Estas são as mais conhecidas.</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((place) => (
            <li key={place.slug} className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={place.image} alt={place.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-ocean-900">{place.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{place.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="como-funciona" aria-labelledby="como-titulo" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <h2 id="como-titulo" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          Como funciona
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-lagoon-100/60 p-6">
              <span className="font-display text-4xl font-semibold text-clove-500">{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-ocean-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <PriceConditions />
      </section>

      <section aria-labelledby="opinioes" className="mx-auto mt-24 max-w-6xl px-5">
        <h2 id="opinioes" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          Quem viajou com a nossa equipa
        </h2>
        <p className="mt-3 text-ink-soft">
          <strong className="text-ocean-900">
            {GOOGLE_REVIEWS.rating} em {GOOGLE_REVIEWS.count} opiniões no Google
          </strong>{" "}
          sobre a Vamos Fugir, a agência por trás deste site. Estas são opiniões de clientes das nossas viagens a São Tomé e
          Príncipe.
        </p>
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
        <a href={GOOGLE_REVIEWS.url} rel="noopener" className="mt-6 inline-block text-sm font-bold text-clove-600 underline-offset-4 hover:underline">
          Ver as {GOOGLE_REVIEWS.count} opiniões no Google →
        </a>
      </section>

      <div id="perguntas" className="mt-24 scroll-mt-24 px-5">
        <FaqSection id="faq-titulo" title="Perguntas frequentes sobre Zanzibar" items={ZANZIBAR_FAQ} />
      </div>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-ocean-900 p-8 text-white sm:p-14">
          <Image src="/images/destino/casal-banco-areia.webp" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">Vamos planear a sua viagem a Zanzibar?</h2>
          <p className="mt-3 max-w-lg text-sand-100">Diga-nos o hotel e as datas. Respondemos com uma proposta, sem pagar nada online.</p>
          <a
            href={whatsappUrl("Olá! Quero uma proposta para umas férias em Zanzibar.")}
            rel="noopener"
            className="mt-7 inline-block rounded-full bg-clove-500 px-7 py-3.5 font-bold transition-colors hover:bg-clove-600"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
