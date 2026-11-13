import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl, mailtoUrl, SITE, whatsappUrl } from "@/lib/site";

export const ContactView = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale).contact;
  const common = getMessages(locale).common;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl(pathFor(locale, "contact")),
          mainEntity: {
            "@type": "TravelAgency",
            name: SITE.legalName,
            telephone: SITE.phone,
            email: SITE.email,
          },
        }}
      />
      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-ocean-900 sm:text-5xl">{t.h1}</h1>
        <p className="mt-4 text-lg text-ink-soft">
          {t.lead}
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">WhatsApp</p>
            <a
              href={whatsappUrl(t.whatsappMessage)}
              rel="noopener"
              className="mt-2 inline-block font-semibold text-clove-600 underline underline-offset-4"
            >
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">{t.phone}</p>
            <a href={`tel:${SITE.phone}`} className="mt-2 inline-block font-semibold text-clove-600 underline underline-offset-4">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">E-mail</p>
            <a
              href={mailtoUrl(t.mailSubject, t.mailBody)}
              className="mt-2 inline-block break-all font-semibold text-clove-600 underline underline-offset-4"
            >
              {SITE.email}
            </a>
          </li>
        </ul>

        <p className="mt-8 leading-relaxed text-ink-soft">
          {fmt(t.legalA, { legalName: SITE.legalName, rnavt: SITE.rnavt })}
          <Link href={pathFor(locale, "hotels")} className="font-semibold text-clove-600 underline underline-offset-4">{t.legalLink}</Link>
          {t.legalB}
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          {t.dataNote} <Link href="/privacidade" className="underline">{common.privacyLink}</Link>.
        </p>
      </div>
    </>
  );
};
