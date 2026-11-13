import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LOCALES } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { localeFromParam, NON_DEFAULT_LOCALES } from "@/i18n/routes";
import { absoluteUrl, SITE, SITE_URL } from "@/lib/site";

export const generateStaticParams = () => NON_DEFAULT_LOCALES.map((locale) => ({ locale }));

export const generateMetadata = async ({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> => {
  const locale = localeFromParam((await params).locale);
  if (!locale) return {};
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE.name,
    openGraph: { type: "website", siteName: SITE.name, locale: LOCALES[locale].ogLocale },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
};

export const viewport: Viewport = { themeColor: "#0a3440", width: "device-width", initialScale: 1 };

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = localeFromParam((await params).locale);
  if (!locale) notFound();
  const t = getMessages(locale);

  return (
    <html lang={t.htmlLang}>
      <body className="flex min-h-screen flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "TravelAgency",
                "@id": `${SITE_URL}/#agency`,
                name: SITE.name,
                legalName: SITE.legalName,
                url: SITE_URL,
                logo: absoluteUrl("/logo-zanzibar.png"),
                telephone: SITE.phone,
                email: SITE.email,
                identifier: `RNAVT ${SITE.rnavt}`,
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: SITE.phone,
                  email: SITE.email,
                  contactType: "customer service",
                  availableLanguage: ["pt-PT", t.htmlLang],
                },
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}${LOCALES[locale].prefix}/#website`,
                url: absoluteUrl(LOCALES[locale].prefix || "/"),
                name: SITE.name,
                inLanguage: t.htmlLang,
                publisher: { "@id": `${SITE_URL}/#agency` },
              },
            ],
          }}
        />
        <SiteHeader locale={locale} />
        <main id="conteudo" className="flex-1">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
