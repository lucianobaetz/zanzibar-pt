import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { POSTS } from "@/content/blog";
import { readingMinutes } from "@/content/blog/utils";
import { absoluteUrl } from "@/lib/site";

const TITLE = "Blog de viagens a Zanzibar";
const DESCRIPTION =
  "Guias para planear a viagem a Zanzibar a partir de Portugal: onde fica, melhor altura, voos, o que fazer, quanto custa e segurança.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
          ],
        }}
      />
      <div className="mx-auto max-w-6xl px-5 pt-12">
        <h1 className="text-4xl font-semibold text-ocean-900 sm:text-5xl">{TITLE}</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">{DESCRIPTION}</p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, index) => (
            <li key={post.slug} className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-clove-600">
                    {post.category} · {readingMinutes(post)} min
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-ocean-900">{post.title}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-clove-600">Ler o guia →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
