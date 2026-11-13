import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { HOTELS } from "@/content/hotels";
import { absoluteUrl } from "@/lib/site";

// Dates come from content, never from "now": a rebuild must not pretend every page changed.
const CONTENT_UPDATED = new Date("2026-11-13");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/hoteis"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/viagens-zanzibar"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/zanzibar-tudo-incluido"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/blog"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.7 },
    ...POSTS.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [absoluteUrl(post.cover.src)],
      lastModified: new Date(post.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...HOTELS.map((hotel) => ({
      url: absoluteUrl(`/hoteis/${hotel.slug}`),
      images: hotel.images.map((image) => absoluteUrl(image.src)),
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
