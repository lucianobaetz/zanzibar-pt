import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, mailtoUrl, SITE, whatsappUrl } from "@/lib/site";

const TITLE = "Contactos: viagens a Zanzibar";
const DESCRIPTION = "Fale connosco sobre a sua viagem a Zanzibar: WhatsApp, telefone e e-mail. Vamos Fugir, licença RNAVT 4155.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contacto" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contacto" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contacto"),
          mainEntity: {
            "@type": "TravelAgency",
            name: SITE.legalName,
            telephone: SITE.phone,
            email: SITE.email,
          },
        }}
      />
      <div className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-ocean-900 sm:text-5xl">Contactos</h1>
        <p className="mt-4 text-lg text-ink-soft">
          Tem dúvidas sobre a sua viagem a Zanzibar? Escreva-nos ou ligue. Respondemos o mais depressa possível.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">WhatsApp</p>
            <a
              href={whatsappUrl("Olá! Quero saber mais sobre as viagens para Zanzibar.")}
              rel="noopener"
              className="mt-2 inline-block font-semibold text-clove-600 underline underline-offset-4"
            >
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">Telefone</p>
            <a href={`tel:${SITE.phone}`} className="mt-2 inline-block font-semibold text-clove-600 underline underline-offset-4">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li className="rounded-3xl border border-sand-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">E-mail</p>
            <a
              href={mailtoUrl("Viagem a Zanzibar", "Olá! Gostava de saber mais sobre as viagens a Zanzibar.")}
              className="mt-2 inline-block break-all font-semibold text-clove-600 underline underline-offset-4"
            >
              {SITE.email}
            </a>
          </li>
        </ul>

        <p className="mt-8 leading-relaxed text-ink-soft">
          Este site é propriedade da {SITE.legalName}, licença RNAVT n.º {SITE.rnavt}. Para pedir uma reserva, escolha um
          <Link href="/hoteis" className="font-semibold text-clove-600 underline underline-offset-4"> hotel </Link>
          e uma data. Não paga nada online.
        </p>
        <p className="mt-3 text-sm text-ink-soft">
          Como tratamos os seus dados: <Link href="/privacidade" className="underline">política de privacidade</Link>.
        </p>
      </div>
    </>
  );
}
