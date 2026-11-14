import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleSidebar } from "@/components/ArticleSidebar";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { NewsletterCard } from "@/components/NewsletterCard";
import { RichText } from "@/components/RichText";
import { getPost, POSTS } from "@/content/blog";
import { outline, readingMinutes, relatedPosts, withLeadForm } from "@/content/blog/utils";
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
      images: [{ url: post.ogImage ?? post.cover.src, alt: post.cover.alt }],
      tags: [...post.tags],
      section: post.category,
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
  const minutes = readingMinutes(post);
  const more = relatedPosts(post, POSTS);
  const sections = outline(post.blocks);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: absoluteUrl(post.ogImage ?? post.cover.src),
          alternativeHeadline: post.subtitle,
          articleSection: post.category,
          keywords: post.keywords.join(", "),
          datePublished: post.published,
          dateModified: post.updated,
          inLanguage: SITE.locale,
          mainEntityOfPage: url,
          author: { "@type": "Person", name: "Luciano Baetz", worksFor: { "@type": "Organization", name: SITE.legalName } },
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

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-10 lg:grid-cols-[minmax(0,1fr)_280px]">
      <article className="min-w-0 max-w-3xl">
        <nav aria-label="Localização" className="text-sm text-ink-soft">
          <Link href="/" className="hover:underline">Início</Link> / <Link href="/blog" className="hover:underline">Blog</Link>
        </nav>
        <p className="mt-6 inline-block rounded-full bg-ocean-900/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean-900">
          {post.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ocean-900 sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-xl leading-relaxed text-ink-soft">{post.subtitle}</p>
        <p className="mt-4 text-sm text-ink-soft">
          Por Luciano Baetz · Atualizado a <time dateTime={post.updated}>{formatDate(post.updated)}</time> · {minutes} min de leitura
        </p>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
        </div>

        {sections.length > 1 ? (
          <nav aria-labelledby="neste-artigo-mobile" className="mt-8 rounded-2xl lg:hidden border border-sand-200 bg-white p-5">
            <p id="neste-artigo-mobile" className="text-xs font-bold uppercase tracking-widest text-clove-600">Neste artigo</p>
            <ol className="mt-3 space-y-1.5 text-[15px]">
              {sections.map((section, index) => (
                <li key={section.id} className="flex gap-3">
                  <span className="w-5 shrink-0 font-semibold text-ink-soft">{index + 1}.</span>
                  <a href={`#${section.id}`} className="font-semibold text-ocean-900 underline-offset-4 hover:text-clove-600 hover:underline">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="mt-8">
          <RichText blocks={withLeadForm(post.blocks)} source={post.slug} />
        </div>

        <ul className="mt-10 flex flex-wrap gap-2 lg:hidden" aria-label="Etiquetas">
          {post.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-sand-200 px-3 py-1 text-sm text-ink-soft">#{tag}</li>
          ))}
        </ul>

      </article>
      <ArticleSidebar sections={sections} tags={post.tags} title={post.title} path={`/blog/${post.slug}`} />
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-5">
        <FaqSection id="perguntas" title="Perguntas frequentes" items={post.faq} />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        <section aria-labelledby="autor" className="rounded-3xl border border-sand-200 bg-white p-7 shadow-sm">
          <p id="autor" className="text-[11px] font-bold uppercase tracking-[0.2em] text-clove-600">Escrito por</p>
          <div className="mt-4 flex items-center gap-4">
            <span aria-hidden className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ocean-900 font-display text-2xl font-semibold text-white">LB</span>
            <div>
              <p className="font-display text-xl font-semibold text-ocean-900">Luciano Baetz</p>
              <p className="text-sm text-ink-soft">{SITE.legalName}</p>
            </div>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Organizamos viagens a Zanzibar com voo de Lisboa e tratamos de todo o processo, do primeiro contacto ao regresso.
          </p>
          <Link href="/hoteis" className="mt-5 inline-block rounded-full bg-clove-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-clove-500 active:scale-[0.98]">
            Reservar
          </Link>
          <p className="mt-3 text-sm text-ink-soft">
            ou ligue <a href={`tel:${SITE.phone}`} className="font-semibold text-ocean-900">{SITE.phoneDisplay}</a>
          </p>
        </section>
        <NewsletterCard source={`/blog/${post.slug}`} />
      </div>

      <section className="mx-auto mt-16 max-w-6xl px-5 pb-4" aria-labelledby="mais-guias">
        <h2 id="mais-guias" className="text-2xl font-semibold text-ocean-900">Para preparar a viagem</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {more.map((other) => (
            <li key={other.slug} className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
              <Link href={`/blog/${other.slug}`} className="block">
                <div className="relative aspect-[4/3]">
                  <Image src={other.cover.src} alt={other.cover.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-clove-600">{other.category}</p>
                  <h3 className="mt-1 text-lg font-semibold text-ocean-900">{other.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
