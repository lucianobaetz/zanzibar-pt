import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { HOTELS } from "@/content/hotels";
import { LOCALES } from "@/i18n/locales";
import { pathFor, type PageKind } from "@/i18n/routes";
import { absoluteUrl } from "@/lib/site";

const CODES = (Object.keys(LOCALES) as (keyof typeof LOCALES)[]).filter((code) => LOCALES[code].enabled);

// One entry per language version, each listing all the others (hreflang in the sitemap).
const localized = (kind: PageKind, slug: string | undefined, priority: number, images?: string[]): MetadataRoute.Sitemap =>
  CODES.map((code) => ({
    url: absoluteUrl(pathFor(code, kind, slug)),
    ...(images ? { images } : {}),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "weekly" as const,
    priority: code === "pt" ? priority : priority - 0.1,
    alternates: {
      languages: {
        ...Object.fromEntries(CODES.map((other) => [LOCALES[other].hreflang, absoluteUrl(pathFor(other, kind, slug))])),
        "x-default": absoluteUrl(pathFor("pt", kind, slug)),
      },
    },
  }));

// Dates come from content, never from "now": a rebuild must not pretend every page changed.
const CONTENT_UPDATED = new Date("2026-11-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localized("home", undefined, 1),
    ...localized("hotels", undefined, 0.9),
    { url: absoluteUrl("/viagens-zanzibar"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/zanzibar-tudo-incluido"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    ...localized("contact", undefined, 0.3),
    ...POSTS.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [absoluteUrl(post.cover.src)],
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...HOTELS.flatMap((hotel) => localized("hotel", hotel.slug, 0.8, hotel.images.map((image) => absoluteUrl(image.src)))),
  ];
}
