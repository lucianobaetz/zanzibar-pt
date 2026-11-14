import { ALL_INCLUSIVE } from "@/views/AllInclusiveView";
import { SALES } from "@/views/HolidaysView";
import { POSTS } from "@/content/blog";
import { localePosts, type GuideLocale } from "@/content/blog/locales";
import { LOCALES } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import { HOTELS } from "@/content/hotels";
import { ZANZIBAR_FAQ } from "@/content/faq";
import { absoluteUrl, SITE, SITE_URL } from "@/lib/site";

// llms.txt: a plain-text summary for AI assistants and search crawlers.
// Generated from the same content files as the pages, so it never goes stale.
export function GET() {
  const hotels = HOTELS.map(
    (hotel) =>
      `- [${hotel.name}](${absoluteUrl(`/hoteis/${hotel.slug}`)}): ${hotel.intro}`,
  ).join("\n");
  const guides = POSTS.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt}`).join("\n");
  const otherLanguages = (["es", "fr", "en", "de"] as const satisfies readonly GuideLocale[])
    .map((code) => {
      const items = localePosts(code)
        .map((post) => `- [${post.title}](${absoluteUrl(pathFor(code, "post", post.slug))}): ${post.excerpt}`)
        .join("\n");
      const sales = `- [${ALL_INCLUSIVE[code].title}](${absoluteUrl(pathFor(code, "allinclusive"))})\n- [${SALES[code].title}](${absoluteUrl(pathFor(code, "holidays"))})`;
      return `### ${LOCALES[code].language} (${absoluteUrl(pathFor(code, "home"))})\n${sales}\n${items}`;
    })
    .join("\n\n");
  const faq = ZANZIBAR_FAQ.map((item) => `### ${item.question}\n${item.answer}`).join("\n\n");

  const body = `# ${SITE.name}

> Site de reservas de férias em Zanzibar tudo incluído com voo de Lisboa, operado pela ${SITE.legalName} (licença RNAVT n.º ${SITE.rnavt}). Os pacotes são vendidos com a TUI. O cliente faz um pedido de reserva sem pagar online e a equipa confirma disponibilidade e preço.

Língua: português de Portugal. Contacto: ${SITE.email}, ${SITE.phoneDisplay}.

## Hotéis
${hotels}

## Páginas principais
- [Início](${SITE_URL}/): pesquisa por zona, mês de partida e pessoas
- [Todos os hotéis](${absoluteUrl("/hoteis")}): lista com filtros
- [Viagens a Zanzibar](${absoluteUrl("/viagens-zanzibar")}): como funciona, hotéis e datas
- [Zanzibar tudo incluído 2027](${absoluteUrl("/zanzibar-tudo-incluido")}): comparação dos cinco hotéis

## Guias
${guides}

## Guides in other languages
Each market has its own pages, written for that country (not translated word for word).

${otherLanguages}

## Perguntas frequentes
${faq}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
