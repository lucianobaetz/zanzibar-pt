import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { getPost, POSTS } from "@/content/blog";
import { absoluteUrl, SITE } from "@/lib/site";

type PostPageProps = { params: Promise<{ slug: string }> };

export const generateStaticParams = () => POSTS.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: PostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    keywords: [...post.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url: path,
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: [{ url: post.cover.src, alt: post.cover.alt }],
    },
  };
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.cover.src),
          datePublished: post.published,
          dateModified: post.updated,
          inLanguage: SITE.locale,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: SITE.legalName },
          publisher: { "@type": "Organization", name: SITE.legalName },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }}
      />

      <article className="mx-auto max-w-3xl px-5 pt-10">
        <nav aria-label="Localização" className="text-sm text-ink-soft">
          <Link href="/" className="hover:underline">Início</Link> / <Link href="/blog" className="hover:underline">Blog</Link>
        </nav>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ocean-900 sm:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-ink-soft">
          Por {SITE.legalName} · Atualizado a <time dateTime={post.updated}>{formatDate(post.updated)}</time>
        </p>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        <div className="mt-8">
          <RichText blocks={post.blocks} />
        </div>

        <aside className="mt-12 rounded-3xl bg-ocean-900 p-6 text-sand-100">
          <p className="font-display text-2xl font-semibold text-white">Quer viajar para Zanzibar?</p>
          <ul className="mt-4 space-y-2">
            {post.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold underline-offset-4 hover:underline">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <div className="mx-auto mt-16 max-w-3xl px-5">
        <FaqSection id="perguntas" title="Perguntas frequentes" items={post.faq} />
      </div>
    </>
  );
}
