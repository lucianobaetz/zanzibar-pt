import type { Metadata } from "next";
import { HotelCard } from "@/components/HotelCard";
import { JsonLd } from "@/components/JsonLd";
import { HOTELS } from "@/content/hotels";
import { absoluteUrl } from "@/lib/site";

const TITLE = "Hotéis em Zanzibar tudo incluído com voo de Lisboa";
const DESCRIPTION =
  "Riu Jambo, Riu Palace Zanzibar, Riu Palace Swahili, Meliá Zanzibar e TUI BLUE Bahari: tudo incluído com voo de Lisboa, transfers e seguro.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/hoteis" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/hoteis" },
};

export default function HotelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: HOTELS.map((hotel, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: hotel.name,
            url: absoluteUrl(`/hoteis/${hotel.slug}`),
          })),
        }}
      />
      <h1 className="text-4xl font-semibold text-ocean-900 sm:text-5xl">Hotéis em Zanzibar, tudo incluído</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Todos com voo regular desde Lisboa, transfers e seguro de viagem. Escolha o resort e peça a reserva sem pagar online.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HOTELS.map((hotel) => (
          <HotelCard key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
