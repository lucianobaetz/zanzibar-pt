import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalePost, localePosts, type GuideLocale } from "@/content/blog/locales";
import { BLOG_UI } from "@/content/blog/locales/ui";
import { getHotel, HOTELS } from "@/content/hotels";
import { departureLabel, getLocalizedHotel, localizedHotels } from "@/i18n/localize";
import { LOCALES, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { localeFromParam, NON_DEFAULT_LOCALES, pathFor, resolveSegments, type ResolvedPage } from "@/i18n/routes";
import { alternatesFor, alternatesForPost } from "@/i18n/seo";
import { BlogIndexView } from "@/views/BlogIndexView";
import { BlogPostView } from "@/views/BlogPostView";
import { AllInclusiveView, ALL_INCLUSIVE } from "@/views/AllInclusiveView";
import { HolidaysView, SALES } from "@/views/HolidaysView";
import { ContactView } from "@/views/ContactView";
import { HomeView } from "@/views/HomeView";
import { HotelPageView } from "@/views/HotelPageView";
import { HotelsView } from "@/views/HotelsView";

type PageProps = { params: Promise<{ locale: string; path?: string[] }> };

const localizedHotelsFrom = (locale: LocaleCode): number | null => {
  const prices = localizedHotels(locale).flatMap((hotel) => (hotel.fromPrice === null ? [] : [hotel.fromPrice]));
  return prices.length ? Math.min(...prices) : null;
};

const resolve = async (params: PageProps["params"]): Promise<{ locale: LocaleCode; page: ResolvedPage } | null> => {
  const { locale: param, path = [] } = await params;
  const locale = localeFromParam(param);
  if (!locale) return null;
  const page = resolveSegments(locale, path);
  if (!page) return null;
  if (page.kind === "hotel" && !getHotel(page.hotelSlug ?? "")) return null;
  if (page.kind === "post" && !getLocalePost(locale as GuideLocale, page.postSlug ?? "")) return null;
  return { locale, page };
};


export const generateStaticParams = () =>
  NON_DEFAULT_LOCALES.flatMap((locale) => {
    const parts = (kind: "hotels" | "contact" | "blog" | "holidays" | "allinclusive") => pathFor(locale, kind).split("/").filter(Boolean).slice(1);
    return [
      { locale: LOCALES[locale].prefix.slice(1), path: [] },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("hotels") },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("contact") },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("blog") },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("holidays") },
      { locale: LOCALES[locale].prefix.slice(1), path: parts("allinclusive") },
      ...localePosts(locale as GuideLocale).map((post) => ({ locale: LOCALES[locale].prefix.slice(1), path: [...parts("blog"), post.slug] })),
      ...HOTELS.map((hotel) => ({ locale: LOCALES[locale].prefix.slice(1), path: [...parts("hotels"), hotel.slug] })),
    ];
  });

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, page } = resolved;
  const t = getMessages(locale);
  const found = page.kind === "post" ? getLocalePost(locale as GuideLocale, page.postSlug ?? "") : undefined;
  const alternates = found ? alternatesForPost(locale, found.key) : alternatesFor(locale, page.kind, page.hotelSlug);
  const url = pathFor(locale, page.kind, page.kind === "post" ? page.postSlug : page.hotelSlug);

  let title = t.home.title;
  let description = t.home.description;
  let image: { url: string; alt?: string } = { url: "/images/destino/the-rock-topo.webp", alt: t.home.ogAlt };
  if (page.kind === "hotels") {
    title = t.hotelsPage.title;
    description = t.hotelsPage.description;
  } else if (page.kind === "contact") {
    title = t.contact.title;
    description = t.contact.description;
  } else if (page.kind === "holidays") {
    const sales = SALES[locale as GuideLocale];
    const prices = localizedHotelsFrom(locale);
    title = sales.seoTitle;
    description = sales.description.replace("{from}", departureLabel(locale)).replace("{price}", prices === null ? "" : `, ${fmt(t.card.from, { price: prices })}`);
    image = { url: "/images/destino/hero-molhe-por-do-sol.webp", alt: sales.heroAlt };
  } else if (page.kind === "allinclusive") {
    const copy = ALL_INCLUSIVE[locale as GuideLocale];
    const price = localizedHotelsFrom(locale);
    title = copy.seoTitle;
    description = copy.description.replace("{from}", departureLabel(locale)).replace("{price}", price === null ? "" : `, ${fmt(t.card.from, { price })}`);
    image = { url: "/images/destino/cabanas-sobre-agua.webp", alt: copy.heroAlt };
  } else if (page.kind === "blog") {
    const ui = BLOG_UI[locale as GuideLocale];
    title = ui.blogTitle;
    description = ui.blogDescription;
  } else if (found) {
    const { post } = found;
    return {
      title: { absolute: post.seoTitle },
      description: post.description,
      keywords: [...post.keywords],
      alternates,
      openGraph: {
        type: "article",
        title: post.seoTitle,
        description: post.description,
        url,
        publishedTime: post.published,
        modifiedTime: post.updated,
        images: [{ url: post.ogImage ?? post.cover.src, alt: post.cover.alt }],
        tags: [...post.tags],
        section: post.category,
      },
    };
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
  if (page.kind === "holidays") return <HolidaysView locale={locale as GuideLocale} />;
  if (page.kind === "allinclusive") return <AllInclusiveView locale={locale as GuideLocale} />;
  if (page.kind === "blog") return <BlogIndexView locale={locale as GuideLocale} />;
  if (page.kind === "post") return <BlogPostView locale={locale as GuideLocale} slug={page.postSlug ?? ""} />;
  if (page.kind === "hotel") return <HotelPageView slug={page.hotelSlug ?? ""} locale={locale} />;
  return <HomeView locale={locale} />;
}
