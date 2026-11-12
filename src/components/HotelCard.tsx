import Link from "next/link";
import type { Hotel } from "@/content/hotels";

const formatPrice = (price: number): string => new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);

type HotelCardProps = { hotel: Hotel };

export const HotelCard = ({ hotel }: HotelCardProps) => (
  <article className="group overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
    <Link href={`/hoteis/${hotel.slug}`} className="block">
      <div className="sun-glow pattern-lattice relative flex h-44 items-end p-5">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-lagoon-100 backdrop-blur">
          {hotel.area ?? "Zanzibar"}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold text-ocean-900 group-hover:text-clove-600">{hotel.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{hotel.intro}</p>
        <p className="mt-4 text-sm font-bold text-ocean-900">
          {hotel.fromPrice === null ? (
            "Preço sob pedido"
          ) : (
            <>
              desde <span className="text-xl text-clove-600">{formatPrice(hotel.fromPrice)}</span> por pessoa
            </>
          )}
        </p>
      </div>
    </Link>
  </article>
);
