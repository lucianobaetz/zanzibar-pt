import Image from "next/image";
import Link from "next/link";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { SITE } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const SiteHeader = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale).common;
  const home = pathFor(locale, "home");
  const hotels = pathFor(locale, "hotels");
  const nav = [
    { href: hotels, label: t.nav.hotels, always: true },
    ...(locale === DEFAULT_LOCALE ? [{ href: "/blog", label: "Blog", always: false }] : []),
    { href: `${home === "/" ? "" : home}/#destinos`, label: t.nav.beaches, always: false },
    { href: `${home === "/" ? "" : home}/#como-funciona`, label: t.nav.how, always: false },
    { href: `${home === "/" ? "" : home}/#perguntas`, label: t.nav.questions, always: false },
  ];
  return (
  <>
    <a
      href="#conteudo"
      className="sr-only z-50 rounded-full bg-white px-4 py-2 font-bold text-ocean-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      {t.skip}
    </a>
    <header className="sticky top-0 z-40 border-b border-sand-200/80 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href={home} className="shrink-0" aria-label={t.homeAria}>
          <Image src="/logo-zanzibar.png" alt={t.logoAlt} width={776} height={175} priority className="h-8 w-auto md:h-10" />
        </Link>

        <nav aria-label={t.mainNav} className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-ocean-900 hover:bg-sand-100 ${item.always ? "hidden sm:inline" : "hidden lg:inline"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={hotels}
            className="rounded-full bg-clove-500 px-4 py-2 font-bold sm:px-5 text-white shadow-sm transition-colors hover:bg-clove-600"
          >
            {t.book}
          </Link>
          <LanguageSwitcher locale={locale} />
          <a href={`tel:${SITE.phone}`} className="hidden rounded-full px-3 py-2 text-ocean-900 hover:bg-sand-100 xl:inline">
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  </>
);
};
