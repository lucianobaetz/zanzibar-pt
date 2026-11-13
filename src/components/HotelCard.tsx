import Image from "next/image";
import Link from "next/link";
import { departureLabel, type HotelView } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";

type HotelCardProps = { hotel: HotelView; priority?: boolean; locale?: LocaleCode };

// Result card. On phones it is a compact row (photo left, text beside it, price in a dark box,
// like Logitravel); from tablets up it grows into the Booking-style card with details and thumbnails.
// The hotel name is never printed over the photo.
export const HotelCard = ({ hotel, priority = false, locale = DEFAULT_LOCALE }: HotelCardProps) => {
  const t = getMessages(locale).card;
  const from = departureLabel(locale);
  const [cover, ...rest] = hotel.images;
  const href = pathFor(locale, "hotel", hotel.slug);
  const priceLabel = hotel.fromPrice === null ? t.onRequest : fmt(t.from, { price: hotel.fromPrice });

  return (
    <article className="group grid grid-cols-[8.5rem_1fr] overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg sm:grid-cols-[11rem_1fr] md:grid-cols-[19rem_1fr] md:rounded-3xl">
      <Link href={href} className="relative block min-h-36 md:min-h-64" tabIndex={-1} aria-hidden>
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(min-width: 768px) 19rem, (min-width: 640px) 11rem, 8.5rem"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        {hotel.adultsOnly ? (
          <span className="absolute left-2 top-2 rounded-full bg-ocean-900/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white md:left-3 md:top-3 md:px-3 md:py-1 md:text-xs">
            {t.adultsOnly}
          </span>
        ) : null}
      </Link>

      <div className="flex min-w-0 flex-col justify-between gap-3 p-3 sm:p-4 md:gap-4 md:p-6 lg:flex-row lg:items-stretch lg:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug text-ocean-900 md:text-2xl">
            <Link href={href} className="hover:underline">
              {hotel.name}
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-ink-soft md:order-first md:mb-1 md:mt-0 md:text-xs md:font-bold md:uppercase md:tracking-widest md:text-lagoon-500">
            {[hotel.area, hotel.coast].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-1 text-sm font-semibold text-lagoon-600 md:hidden">{t.mobileLine}</p>
          <p className="mt-2 hidden text-sm leading-relaxed text-ink-soft md:block">{hotel.intro}</p>
          <ul className="mt-3 hidden flex-wrap gap-2 md:flex" aria-label={fmt(t.highlightsAria, { name: hotel.name })}>
            {hotel.highlights.map((item) => (
              <li key={item} className="rounded-full bg-lagoon-100/70 px-3 py-1 text-xs font-semibold text-ocean-700">
                {item}
              </li>
            ))}
          </ul>
          {rest.length > 0 ? (
            <ul className="mt-4 hidden gap-2 md:flex" aria-hidden>
              {rest.slice(0, 3).map((photo) => (
                <li key={photo.src} className="relative h-14 w-20 overflow-hidden rounded-xl">
                  <Image src={photo.src} alt="" fill sizes="80px" className="object-cover" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Phones: voo + dark price box, as on Logitravel. */}
        <div className="flex items-end justify-between gap-2 md:hidden">
          <p className="text-xs text-ink-soft">{fmt(t.flightFrom, { from })}</p>
          <Link href={href} className="rounded-sm bg-ink px-3 py-1.5 text-right text-white">
            <span className="block text-[10px] leading-none text-white/80">{hotel.fromPrice === null ? t.mobilePrice : t.mobileFrom}</span>
            <span className="block whitespace-nowrap font-display text-base font-semibold leading-tight">
              {hotel.fromPrice === null ? t.mobileOnRequest : `${hotel.fromPrice}€`}
            </span>
          </Link>
        </div>

        {/* Tablet and desktop. */}
        <div className="hidden shrink-0 flex-row items-end justify-between gap-4 border-t border-sand-200 pt-4 md:flex lg:w-48 lg:flex-col lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0 lg:text-right">
          <div>
            <p className="text-xs text-ink-soft">{fmt(t.nightsFlight, { from })}</p>
            <p className="font-display text-lg font-semibold text-ocean-900">{priceLabel}</p>
            {hotel.fromPrice === null ? null : <p className="text-xs text-ink-soft">{t.perPerson}</p>}
          </div>
          <Link
            href={href}
            className="rounded-full bg-clove-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-clove-600"
          >
            {t.seeHotel}
          </Link>
        </div>
      </div>
    </article>
  );
};
