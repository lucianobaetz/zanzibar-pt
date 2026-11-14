import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import { getLocalePost, localePosts, type GuideLocale } from "@/content/blog/locales";
import { BLOG_UI } from "@/content/blog/locales/ui";
import { outline, readingMinutes, relatedPosts } from "@/content/blog/utils";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl, SITE } from "@/lib/site";

export const BlogPostView = ({ locale, slug }: { locale: GuideLocale; slug: string }) => {
  const found = getLocalePost(locale, slug);
  if (!found) return null;
  const { post } = found;
  const ui = BLOG_UI[locale];
  const url = absoluteUrl(pathFor(locale, "post", post.slug));
  const sections = outline(post.blocks);
  const more = relatedPosts(post, localePosts(locale));
  const date = new Date(post.updated).toLocaleDateString(ui.dateLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

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
          inLanguage: ui.inLanguage,
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
            { "@type": "ListItem", position: 1, name: ui.home, item: absoluteUrl(pathFor(locale, "home")) },
            { "@type": "ListItem", position: 2, name: ui.blog, item: absoluteUrl(pathFor(locale, "blog")) },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }}
      />

      <article className="mx-auto max-w-3xl px-5 pt-10">
        <nav aria-label={ui.breadcrumbLabel} className="text-sm text-ink-soft">
          <Link href={pathFor(locale, "home")} className="hover:underline">{ui.home}</Link> /{" "}
          <Link href={pathFor(locale, "blog")} className="hover:underline">{ui.blog}</Link>
        </nav>
        <p className="mt-6 inline-block rounded-full bg-ocean-900/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ocean-900">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-ocean-900 sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-xl leading-relaxed text-ink-soft">{post.subtitle}</p>
        <p className="mt-4 text-sm text-ink-soft">
          {ui.by} · {ui.updated} <time dateTime={post.updated}>{date}</time> · {readingMinutes(post)} {ui.minutes}
        </p>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.cover.src} alt={post.cover.alt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        {sections.length > 1 ? (
          <nav aria-labelledby="in-this-article" className="mt-8 rounded-2xl border border-sand-200 bg-white p-5">
            <p id="in-this-article" className="text-xs font-bold uppercase tracking-widest text-clove-600">{ui.inThisArticle}</p>
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
          <RichText blocks={post.blocks} locale={locale} />
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-3xl px-5">
        <FaqSection id="faq" title={ui.faqTitle} items={post.faq} />
      </div>

      <section aria-labelledby="team" className="mx-auto mt-16 max-w-3xl px-5">
        <div className="rounded-3xl border border-sand-200 bg-white p-7 shadow-sm">
          <p id="team" className="text-[11px] font-bold uppercase tracking-[0.2em] text-clove-600">{ui.teamLabel}</p>
          <div className="mt-4 flex items-center gap-4">
            <Image src="/images/equipa/sara.webp" alt={ui.teamRole} width={80} height={80} className="h-20 w-20 shrink-0 rounded-full bg-sand-100 object-cover object-top ring-2 ring-sand-200" />
            <div>
              <p className="font-display text-xl font-semibold text-ocean-900">Sara</p>
              <p className="text-sm text-ink-soft">{ui.teamRole}</p>
            </div>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{ui.teamText}</p>
          <Link href={pathFor(locale, "hotels")} className="mt-5 inline-block rounded-full bg-clove-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-clove-500 active:scale-[0.98]">
            {ui.teamCta}
          </Link>
          <p className="mt-3 text-sm text-ink-soft">
            {ui.teamOr} <a href={`tel:${SITE.phone}`} className="font-semibold text-ocean-900">{SITE.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5 pb-4" aria-labelledby="more-guides">
        <h2 id="more-guides" className="text-2xl font-semibold text-ocean-900">{ui.moreTitle}</h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {more.map((other) => (
            <li key={other.slug} className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
              <Link href={pathFor(locale, "post", other.slug)} className="block">
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
};
