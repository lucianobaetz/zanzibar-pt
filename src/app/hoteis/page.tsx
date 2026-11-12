import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { HotelCard } from "@/components/HotelCard";
import { HotelResults } from "@/components/HotelResults";
import { JsonLd } from "@/components/JsonLd";
import { SearchBar } from "@/components/SearchBar";
import { HOTELS } from "@/content/hotels";
import { absoluteUrl } from "@/lib/site";

const TITLE = "Hotéis em Zanzibar tudo incluído com voo de Lisboa";
const DESCRIPTION =
  "Riu Jambo, Riu Palace Zanzibar, Riu Palace Swahili, Meliá Zanzibar e TUI BLUE Bahari: tudo incluído com voo de Lisboa, transfers e seguro.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/hoteis" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/hoteis", images: [{ url: HOTELS[0]?.images[0]?.src ?? "" }] },
};

export default function HotelsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Hotéis", item: absoluteUrl("/hoteis") },
          ],
        }}
      />

      <section className="relative isolate overflow-hidden bg-ocean-900 text-white">
        <Image src="/images/destino/praias-aerea.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:pt-16">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Hotéis em Zanzibar, tudo incluído</h1>
          <p className="mt-3 max-w-2xl text-lg text-sand-100">
            Todos com voo regular desde Lisboa, transfers e seguro de viagem. Escolha o resort e peça a reserva sem pagar online.
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-14 max-w-6xl px-5">
        <SearchBar variant="hero" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="sr-only">Hotéis disponíveis</h2>
        {/* useSearchParams needs a Suspense boundary; the fallback is the full crawlable list. */}
        <Suspense
          fallback={
            <div className="space-y-5">
              {HOTELS.map((hotel, index) => (
                <HotelCard key={hotel.slug} hotel={hotel} priority={index === 0} />
              ))}
            </div>
          }
        >
          <HotelResults />
        </Suspense>
      </div>
    </>
  );
}
