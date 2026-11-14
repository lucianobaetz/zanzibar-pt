import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { HOTELS } from "@/content/hotels";
import { localePosts, type GuideLocale } from "@/content/blog/locales";
import { GUIDE_KEYS, POST_SLUGS } from "@/content/blog/slugs";
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

const GUIDE_LOCALES = CODES.filter((code): code is GuideLocale => code !== "pt");

/** hreflang for one guide: every market's own address, x-default -> Portuguese. */
const guideLanguages = (key: (typeof GUIDE_KEYS)[number]): Record<string, string> => ({
  ...Object.fromEntries(CODES.map((code) => [LOCALES[code].hreflang, absoluteUrl(pathFor(code, "post", POST_SLUGS[key][code]))])),
  "x-default": absoluteUrl(pathFor("pt", "post", POST_SLUGS[key].pt)),
});

// Dates come from content, never from "now": a rebuild must not pretend every page changed.
const CONTENT_UPDATED = new Date("2026-11-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localized("home", undefined, 1),
    ...localized("hotels", undefined, 0.9),
    ...localized("holidays", undefined, 0.9),
    ...localized("allinclusive", undefined, 0.9),
    ...localized("blog", undefined, 0.7),
    ...localized("contact", undefined, 0.3),
    ...POSTS.map((post) => {
      const key = GUIDE_KEYS.find((guide) => POST_SLUGS[guide].pt === post.slug);
      return {
        url: absoluteUrl(`/blog/${post.slug}`),
        images: [absoluteUrl(post.cover.src)],
        lastModified: new Date(post.updated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        ...(key ? { alternates: { languages: guideLanguages(key) } } : {}),
      };
    }),
    ...GUIDE_LOCALES.flatMap((code) =>
      localePosts(code).map((post) => {
        const key = GUIDE_KEYS.find((guide) => POST_SLUGS[guide][code] === post.slug);
        return {
          url: absoluteUrl(pathFor(code, "post", post.slug)),
          images: [absoluteUrl(post.cover.src)],
          lastModified: new Date(post.updated),
          changeFrequency: "monthly" as const,
          priority: 0.6,
          ...(key ? { alternates: { languages: guideLanguages(key) } } : {}),
        };
      }),
    ),
    ...HOTELS.flatMap((hotel) => localized("hotel", hotel.slug, 0.8, hotel.images.map((image) => absoluteUrl(image.src)))),
  ];
}
