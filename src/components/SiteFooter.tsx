import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/content/blog";
import { localizedHotels } from "@/i18n/localize";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { SITE } from "@/lib/site";

export const SiteFooter = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale).common;
  const isDefault = locale === DEFAULT_LOCALE;
  return (
  <footer className="sun-glow mt-24 text-sand-100">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <Link href={pathFor(locale, "home")} className="inline-block rounded-2xl bg-white px-4 py-2.5" aria-label={t.homeAria}>
          <Image src="/logo-zanzibar.png" alt={t.logoAlt} width={776} height={175} className="h-9 w-auto" />
        </Link>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200">
          {t.footerBlurb}
        </p>
      </div>

      <nav aria-label={t.hotelsTitle}>
        <p className="text-xs font-bold uppercase tracking-widest text-lagoon-300">{t.hotelsTitle}</p>
        <ul className="mt-3 space-y-2 text-sm">
          {localizedHotels(locale).map((hotel) => (
            <li key={hotel.slug}>
              <Link href={pathFor(locale, "hotel", hotel.slug)} className="hover:text-white hover:underline">
                {hotel.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isDefault ? (
        <nav aria-label="Guias e viagens">
          <p className="text-xs font-bold uppercase tracking-widest text-lagoon-300">Guias e viagens</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/viagens-zanzibar" className="hover:text-white hover:underline">Viagens a Zanzibar</Link></li>
            <li><Link href="/zanzibar-tudo-incluido" className="hover:text-white hover:underline">Zanzibar tudo incluído</Link></li>
            {POSTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="hover:text-white hover:underline">{post.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-lagoon-300">{t.contactsTitle}</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a href={`tel:${SITE.phone}`} className="hover:text-white hover:underline">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li>
            <Link href={pathFor(locale, "contact")} className="hover:text-white hover:underline">{t.contactLink}</Link>
          </li>
          <li>
            <a href={`mailto:${SITE.email}`} className="hover:text-white hover:underline">
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-sand-200/80">
        {fmt(t.legal, { legalName: SITE.legalName, rnavt: SITE.rnavt, year: SITE.copyrightYear })}
      </p>
    </div>
  </footer>
);
};
