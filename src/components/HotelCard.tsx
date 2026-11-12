import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/content/hotels";

type HotelCardProps = { hotel: Hotel; priority?: boolean };

// Booking-style result: photo on the left, facts in the middle, call to action on the right.
// The hotel name is never printed over the photo (the photo sells the dream, the text sits beside it).
export const HotelCard = ({ hotel, priority = false }: HotelCardProps) => {
  const [cover, ...rest] = hotel.images;
  const href = `/hoteis/${hotel.slug}`;

  return (
    <article className="group grid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg md:grid-cols-[19rem_1fr]">
      <Link href={href} className="relative block aspect-[4/3] md:aspect-auto md:min-h-64" tabIndex={-1} aria-hidden>
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(min-width: 768px) 19rem, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        {hotel.adultsOnly ? (
          <span className="absolute left-3 top-3 rounded-full bg-ocean-900/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Só adultos
          </span>
        ) : null}
      </Link>

      <div className="flex flex-col gap-4 p-5 sm:p-6 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">
            {[hotel.area, hotel.coast].filter(Boolean).join(" · ")}
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-ocean-900">
            <Link href={href} className="hover:underline">
              {hotel.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{hotel.intro}</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Destaques do ${hotel.name}`}>
            {hotel.highlights.map((item) => (
              <li key={item} className="rounded-full bg-lagoon-100/70 px-3 py-1 text-xs font-semibold text-ocean-700">
                {item}
              </li>
            ))}
          </ul>
          {rest.length > 0 ? (
            <ul className="mt-4 hidden gap-2 sm:flex" aria-hidden>
              {rest.slice(0, 3).map((photo) => (
                <li key={photo.src} className="relative h-14 w-20 overflow-hidden rounded-xl">
                  <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-row items-end justify-between gap-4 border-t border-sand-200 pt-4 lg:w-48 lg:flex-col lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0 lg:text-right">
          <div>
            <p className="text-xs text-ink-soft">7 noites · voo de Lisboa</p>
            <p className="font-display text-lg font-semibold text-ocean-900">
              {hotel.fromPrice === null ? "Preço sob pedido" : `desde ${hotel.fromPrice} €`}
            </p>
            {hotel.fromPrice === null ? null : <p className="text-xs text-ink-soft">por pessoa</p>}
          </div>
          <Link
            href={href}
            className="rounded-full bg-clove-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-clove-600"
          >
            Ver o hotel
          </Link>
        </div>
      </div>
    </article>
  );
};
