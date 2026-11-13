import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/content/blog";
import { HOTELS } from "@/content/hotels";
import { SITE } from "@/lib/site";

export const SiteFooter = () => (
  <footer className="sun-glow mt-24 text-sand-100">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-2.5" aria-label="Zanzibar Resorts, página inicial">
          <Image src="/logo-zanzibar.png" alt="Zanzibar, paraíso por descobrir" width={776} height={175} className="h-9 w-auto" />
        </Link>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200">
          Férias em Zanzibar em tudo incluído, com voo de Lisboa, transfers e seguro de viagem. Tratamos de tudo, do primeiro
          contacto ao regresso.
        </p>
      </div>

      <nav aria-label="Hotéis">
        <p className="text-xs font-bold uppercase tracking-widest text-lagoon-300">Hotéis</p>
        <ul className="mt-3 space-y-2 text-sm">
          {HOTELS.map((hotel) => (
            <li key={hotel.slug}>
              <Link href={`/hoteis/${hotel.slug}`} className="hover:text-white hover:underline">
                {hotel.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

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

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-lagoon-300">Contactos</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a href={`tel:${SITE.phone}`} className="hover:text-white hover:underline">
              {SITE.phoneDisplay}
            </a>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-white hover:underline">Contactos</Link>
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
        Este site é propriedade da {SITE.legalName}. Licença RNAVT n.º {SITE.rnavt}. © {SITE.copyrightYear}
      </p>
    </div>
  </footer>
);
