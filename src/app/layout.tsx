import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { absoluteUrl, SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE.name}: férias em Zanzibar`, template: `%s | ${SITE.name}` },
  applicationName: SITE.name,
  openGraph: { type: "website", siteName: SITE.name, locale: "pt_PT" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a3440", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT">
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
                areaServed: { "@type": "Country", name: "Portugal" },
                identifier: `RNAVT ${SITE.rnavt}`,
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: SITE.phone,
                  email: SITE.email,
                  contactType: "customer service",
                  availableLanguage: "pt-PT",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: SITE.name,
                inLanguage: SITE.locale,
                publisher: { "@id": `${SITE_URL}/#agency` },
              },
            ],
          }}
        />
        <SiteHeader />
        <main id="conteudo" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
