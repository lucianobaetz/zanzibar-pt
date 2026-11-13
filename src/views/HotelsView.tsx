import Image from "next/image";
import { Suspense } from "react";
import { HotelCard } from "@/components/HotelCard";
import { HotelResults } from "@/components/HotelResults";
import { JsonLd } from "@/components/JsonLd";
import { SearchBar } from "@/components/SearchBar";
import { localizedHotels } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/site";

export const HotelsView = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale).hotelsPage;
  const hotels = localizedHotels(locale);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: hotels.map((hotel, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: hotel.name,
            url: absoluteUrl(pathFor(locale, "hotel", hotel.slug)),
            image: absoluteUrl(hotel.images[0]?.src ?? "/"),
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t.crumbHome, item: absoluteUrl(pathFor(locale, "home")) },
            { "@type": "ListItem", position: 2, name: t.crumbHotels, item: absoluteUrl(pathFor(locale, "hotels")) },
          ],
        }}
      />

      <section className="relative isolate overflow-hidden bg-ocean-900 text-white">
        <Image src="/images/destino/molhe-aerea-topo.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ocean-950/55 via-ocean-950/20 to-transparent" />
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-12 sm:pt-16">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight [text-shadow:0_2px_16px_rgb(0_0_0/0.35)] sm:text-5xl">{t.h1}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white [text-shadow:0_1px_10px_rgb(0_0_0/0.4)]">
            {t.lead}
          </p>
        </div>
      </section>

      <div id="pesquisa" className="relative z-10 mx-auto -mt-14 max-w-6xl scroll-mt-20 px-5">
        <SearchBar variant="hero" locale={locale} />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-12 pb-28 md:pb-12">
        <h2 className="sr-only">{t.srOnly}</h2>
        {/* useSearchParams needs a Suspense boundary; the fallback is the full crawlable list. */}
        <Suspense
          fallback={
            <div className="space-y-5">
              {hotels.map((hotel, index) => (
                <HotelCard key={hotel.slug} hotel={hotel} priority={index === 0} locale={locale} />
              ))}
            </div>
          }
        >
          <HotelResults hotels={hotels} locale={locale} />
        </Suspense>
      </div>

      {/* Phones: a search button that stays on screen while scrolling the results. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a href="#pesquisa" className="block rounded-xl bg-clove-500 py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white">
          {t.search}
        </a>
      </div>
    </>
  );
};
