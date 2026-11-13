import type { Faq } from "@/content/faq";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: readonly string[] }
  | { type: "note"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; head: readonly string[]; rows: readonly (readonly string[])[] }
  | { type: "map" };

export type Post = {
  slug: string;
  /** The H1: carries the main search keyword. */
  title: string;
  /** <title> tag, up to about 60 characters. */
  seoTitle: string;
  description: string;
  /** One line under the H1 that sums up the idea. */
  subtitle: string;
  category: string;
  tags: readonly string[];
  /** Only "published" posts with a date in the past are shown and indexed. */
  status: "draft" | "published";
  /** Optional social-share image (1200x630); falls back to the cover. */
  ogImage?: string;
  /** Short text for the blog index card. */
  excerpt: string;
  keywords: readonly string[];
  published: string;
  updated: string;
  cover: { src: string; alt: string };
  blocks: readonly Block[];
  faq: readonly Faq[];
  /** Internal links to sales pages shown at the end. */
  related: readonly { href: string; label: string }[];
};
