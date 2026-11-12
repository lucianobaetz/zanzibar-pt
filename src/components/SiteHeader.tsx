import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";

const NAV = [
  { href: "/hoteis", label: "Hotéis" },
  { href: "/#destinos", label: "Praias e locais" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#perguntas", label: "Perguntas" },
] as const;

export const SiteHeader = () => (
  <>
    <a
      href="#conteudo"
      className="sr-only z-50 rounded-full bg-white px-4 py-2 font-bold text-ocean-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Saltar para o conteúdo
    </a>
    <header className="sticky top-0 z-40 border-b border-sand-200/80 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight text-ocean-900">
          Zanzibar <span className="text-clove-500">Resorts</span>
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-ocean-900 hover:bg-sand-100 ${item.href === "/hoteis" ? "" : "hidden lg:inline"}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl("Olá! Quero saber mais sobre as viagens para Zanzibar.")}
            className="rounded-full bg-clove-500 px-4 py-2 text-white shadow-sm transition-colors hover:bg-clove-600"
            rel="noopener"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
          <a href={`tel:${SITE.phone}`} className="hidden rounded-full px-3 py-2 text-ocean-900 hover:bg-sand-100 xl:inline">
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  </>
);
