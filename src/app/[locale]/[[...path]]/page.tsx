import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHotel, HOTELS } from "@/content/hotels";
import { getLocalizedHotel } from "@/i18n/localize";
import { LOCALES, type LocaleCode } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { localeFromParam, NON_DEFAULT_LOCALES, pathFor, resolveSegments, type ResolvedPage } from "@/i18n/routes";
import { alternatesFor } from "@/i18n/seo";
import { ContactView } from "@/views/ContactView";
import { HomeView } from "@/views/HomeView";
import { HotelPageView } from "@/views/HotelPageView";
import { HotelsView } from "@/views/HotelsView";

type PageProps = { params: Promise<{ locale: string; path?: string[] }> };

const resolve = async (params: PageProps["params"]): Promise<{ locale: LocaleCode; page: ResolvedPage } | null> => {
  const { locale: param, path = [] } = await params;
  const locale = localeFromParam(param);
  if (!locale) return null;
  const page = resolveSegments(locale, path);
  if (!page) return null;
  if (page.kind === "hotel" && !getHotel(page.hotelSlug ?? "")) return null;
  return { locale, page };
};


export const generateStaticParams = () =>
  NON_DEFAULT_LOCALES.flatMap((locale) => {
    const parts = (kind: "hotels" | "contact") => pathFor(locale, kind).split("/").filter(Boolean).slice(1);
    return [
      { locale: LOCALES[locale].prefix.slice(1), path: [] },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("hotels") },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("contact") },
      ...HOTELS.map((hotel) => ({ locale: LOCALES[locale].prefix.slice(1), path: [...parts("hotels"), hotel.slug] })),
    ];
  });

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, page } = resolved;
  const t = getMessages(locale);
  const alternates = alternatesFor(locale, page.kind, page.hotelSlug);
  const url = pathFor(locale, page.kind, page.hotelSlug);

  let title = t.home.title;
  let description = t.home.description;
  let image: { url: string; alt?: string } = { url: "/images/destino/the-rock-topo.webp", alt: t.home.ogAlt };
  if (page.kind === "hotels") {
    title = t.hotelsPage.title;
    description = t.hotelsPage.description;
  } else if (page.kind === "contact") {
    title = t.contact.title;
    description = t.contact.description;
  } else if (page.kind === "hotel") {
    const hotel = getLocalizedHotel(page.hotelSlug ?? "", locale);
    if (!hotel) return {};
    title = hotel.seoTitle;
    description = hotel.seoDescription;
    const cover = hotel.images[0];
    if (cover) image = { url: cover.src, alt: cover.alt };
  }

  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: { title, description, url, images: [image] },
  };
};

export default async function LocalePage({ params }: PageProps) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, page } = resolved;
  if (page.kind === "hotels") return <HotelsView locale={locale} />;
  if (page.kind === "contact") return <ContactView locale={locale} />;
  if (page.kind === "hotel") return <HotelPageView slug={page.hotelSlug ?? ""} locale={locale} />;
  return <HomeView locale={locale} />;
}
