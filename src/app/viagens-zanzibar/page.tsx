import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { PriceConditions } from "@/components/PriceConditions";
import { SearchBar } from "@/components/SearchBar";
import { ZANZIBAR_FAQ } from "@/content/faq";
import { HOTELS } from "@/content/hotels";
import { FROM_PRICE, eur } from "@/content/blog/shared";
import { absoluteUrl } from "@/lib/site";

const TITLE = "Viagens a Zanzibar com voo de Lisboa";
const DESCRIPTION = `Viagens a Zanzibar em tudo incluído com voo de Lisboa, 7 noites, transfers e seguro. 5 hotéis e 14 partidas em 2027${FROM_PRICE === null ? "" : `, desde ${eur(FROM_PRICE)}`}.`;

export const metadata: Metadata = {
  title: { absolute: "Viagens a Zanzibar 2027 com voo de Lisboa" },
  description: DESCRIPTION,
  alternates: { canonical: "/viagens-zanzibar" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/viagens-zanzibar", images: [{ url: "/images/destino/hero-molhe-por-do-sol.webp" }] },
};

const STEPS = [
  { title: "Escolha o hotel e a data", text: "Compare os cinco resorts e as 14 partidas de 2027, ao sábado." },
  { title: "Faça o pedido de reserva", text: "Sem pagar online. A nossa equipa confirma disponibilidade e preço consigo." },
  { title: "Nós tratamos do resto", text: "Voo desde Lisboa, 7 noites, transfers e seguro de viagem." },
] as const;

export default function ViagensZanzibarPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Viagens a Zanzibar", item: absoluteUrl("/viagens-zanzibar") },
          ],
        }}
      />
      <section className="relative isolate overflow-hidden bg-ocean-950 text-white">
        <Image src="/images/destino/hero-molhe-por-do-sol.webp" alt="Molhe ao pôr do sol numa praia de Zanzibar" fill priority sizes="100vw" className="-z-10 object-cover opacity-70" />
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:pt-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{TITLE}</h1>
          <p className="mt-4 max-w-2xl text-lg text-sand-100">
            Viagens a Zanzibar em tudo incluído, com voo regular desde Lisboa, 7 noites, transfers e seguro de viagem.
            {FROM_PRICE === null ? "" : ` Preços desde ${eur(FROM_PRICE)} por pessoa.`}
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <SearchBar variant="hero" />
      </div>

      <section aria-labelledby="como" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="como" className="font-display text-3xl font-semibold text-ocean-900">Como funciona a sua viagem a Zanzibar</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-sand-200 bg-white p-6">
              <span className="font-display text-3xl font-semibold text-clove-500">{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-ocean-900">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="hoteis" className="mx-auto mt-16 max-w-6xl px-5">
        <h2 id="hoteis" className="font-display text-3xl font-semibold text-ocean-900">Os hotéis para a sua viagem a Zanzibar</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Cinco resorts em tudo incluído, no norte e na costa leste. Todos com voo desde Lisboa.
        </p>
        <div className="mt-8 space-y-5">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>

      <section aria-labelledby="quando" className="mx-auto mt-16 max-w-3xl px-5">
        <h2 id="quando" className="font-display text-3xl font-semibold text-ocean-900">Quando viajar</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Em 2027 há duas partidas por mês, ao sábado, em janeiro, fevereiro e de junho a outubro. Não há partidas em março, abril e maio (as chuvas) nem em novembro e dezembro. Veja o clima mês a mês na nossa
          {" "}
          <Link href="/blog/melhor-altura-para-ir-a-zanzibar" className="font-semibold text-clove-600 underline underline-offset-4">guia da melhor altura para ir a Zanzibar</Link>.
        </p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Ainda a planear? Leia também onde fica Zanzibar, quanto custa e se é seguro:{" "}
          <Link href="/blog/onde-fica-zanzibar" className="font-semibold text-clove-600 underline underline-offset-4">onde fica</Link>,{" "}
          <Link href="/blog/zanzibar-e-caro" className="font-semibold text-clove-600 underline underline-offset-4">preços</Link>,{" "}
          <Link href="/blog/zanzibar-e-perigoso" className="font-semibold text-clove-600 underline underline-offset-4">segurança</Link>.
        </p>
      </section>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <PriceConditions />
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5">
        <FaqSection id="perguntas" title="Perguntas frequentes sobre as viagens a Zanzibar" items={ZANZIBAR_FAQ} />
      </div>
    </>
  );
}
