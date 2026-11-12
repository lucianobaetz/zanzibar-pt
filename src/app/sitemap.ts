import type { MetadataRoute } from "next";
import { HOTELS } from "@/content/hotels";
import { absoluteUrl } from "@/lib/site";

// Dates come from content, never from "now": a rebuild must not pretend every page changed.
const CONTENT_UPDATED = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/hoteis"), lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    ...HOTELS.map((hotel) => ({
      url: absoluteUrl(`/hoteis/${hotel.slug}`),
      lastModified: CONTENT_UPDATED,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
