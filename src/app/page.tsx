import type { Metadata } from "next";
import Link from "next/link";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { HOTELS } from "@/content/hotels";
import { GOOGLE_REVIEWS, SITE, SITE_URL, whatsappUrl } from "@/lib/site";

// Provisional SEO copy: final wording follows the Portugal keyword research.
const TITLE = "Férias em Zanzibar tudo incluído 2027 com voo de Lisboa";
const DESCRIPTION =
  "Zanzibar tudo incluído com voo de Lisboa, transfers e seguro. 5 resorts selecionados, partidas em 2027 e pedido de reserva sem pagar online.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/" },
};

const PROMISES = [
  { title: "Voo desde Lisboa", text: "Voo regular em classe económica, a opção mais económica com uma escala." },
  { title: "Tudo incluído", text: "7 noites no resort que escolher, com o regime tudo incluído." },
  { title: "Transfers e seguro", text: "Transfers e seguro de viagem incluídos no preço." },
  { title: "Reserva sem pagar online", text: "Pede a reserva e a nossa equipa confirma consigo, sem pagamento no site." },
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
          "@type": "TravelAgency",
          name: SITE.name,
          legalName: SITE.legalName,
          url: SITE_URL,
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: "PT",
          identifier: `RNAVT ${SITE.rnavt}`,
        }}
      />

      <section className="sun-glow pattern-lattice relative overflow-hidden text-white">
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-20 sm:pt-28">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lagoon-100 backdrop-blur">
            Licença RNAVT n.º {SITE.rnavt} · Atendemos em Portugal
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Férias em Zanzibar, <em className="text-spice-400">tudo incluído</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100">
            Voo desde Lisboa, transfers, seguro e 7 noites em resorts de praia de areia branca e mar turquesa. Nós tratamos de
            tudo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/hoteis" className="rounded-full bg-clove-500 px-7 py-3.5 text-base font-bold shadow-lg transition-colors hover:bg-clove-600">
              Ver os hotéis
            </Link>
            <a
              href={whatsappUrl("Olá! Quero uma proposta para umas férias em Zanzibar.")}
              rel="noopener"
              className="rounded-full border border-white/40 px-7 py-3.5 text-base font-bold transition-colors hover:bg-white/10"
            >
              Pedir proposta no WhatsApp
            </a>
          </div>
        </div>
        <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-14 w-full text-sand-50">
          <path fill="currentColor" d="M0 40c240 60 480 60 720 20s480-40 720 10v10H0z" />
        </svg>
      </section>

      <section className="mx-auto -mt-2 max-w-6xl px-5 py-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((promise) => (
            <li key={promise.title} className="rounded-3xl bg-lagoon-100/60 p-5">
              <h2 className="font-display text-lg font-semibold text-ocean-900">{promise.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{promise.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="hoteis" className="mx-auto max-w-6xl px-5">
        <h2 id="hoteis" className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
          Cinco resorts, uma escolha fácil
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Selecionámos só os hotéis que as pessoas mais procuram, em tudo incluído e com voo desde Lisboa.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <PriceConditions />
      </section>

      <section aria-labelledby="opinioes" className="mx-auto mt-20 max-w-6xl px-5">
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

      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="sun-glow pattern-lattice rounded-[2rem] p-8 text-white sm:p-12">
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
