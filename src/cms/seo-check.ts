import type { Block } from "@/content/blog/types";

export type Level = "ok" | "warn" | "fail";
export type Check = { id: string; level: Level; label: string; tip: string };
export type SeoInput = {
  focusKeyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  blocks: readonly Block[];
  coverAlt: string;
  /** Slugs and focus keywords of OTHER entries in the same locale, to spot cannibalisation. */
  others?: readonly { slug: string; focusKeyword: string }[];
  /** Addresses that exist on the site, to count valid internal links. */
  internalLinks?: number;
};

const fold = (text: string): string =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const plain = (block: Block): string => {
  switch (block.type) {
    case "h2":
    case "h3":
    case "p":
    case "note":
      return block.text;
    case "ul":
      return block.items.join(" ");
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ");
    default:
      return "";
  }
};

const level = (good: boolean, almost: boolean): Level => (good ? "ok" : almost ? "warn" : "fail");

/** Native-language checks: nothing here assumes Portuguese; the keyword is whatever the editor chose for this market. */
export const checkSeo = (input: SeoInput): { score: number; checks: Check[] } => {
  const key = fold(input.focusKeyword.trim());
  const body = input.blocks.map(plain).join(" ");
  const words = body.split(/\s+/).filter(Boolean).length;
  const firstParagraph = fold(input.blocks.find((block) => block.type === "p")?.type === "p" ? plain(input.blocks.find((block) => block.type === "p")!) : "");
  const h2s = input.blocks.filter((block) => block.type === "h2").map(plain);
  const checks: Check[] = [];
  const add = (id: string, lvl: Level, label: string, tip: string) => checks.push({ id, level: lvl, label, tip });

  add("keyword", key ? "ok" : "fail", "Palavra-chave principal definida", "Escolha a expressão que as pessoas pesquisam neste país.");
  if (key) {
    add("kw-title", fold(input.metaTitle).includes(key) ? "ok" : "fail", "Palavra-chave no título SEO", "Ponha a expressão no início do título que aparece no Google.");
    add("kw-h1", fold(input.title).includes(key) ? "ok" : "warn", "Palavra-chave no título do artigo (H1)", "O H1 deve conter a expressão ou uma variante muito próxima.");
    add("kw-slug", fold(input.slug).includes(key.replace(/\s+/g, "-")) ? "ok" : "warn", "Palavra-chave no endereço", "Use a expressão no endereço, sem acentos e com hífenes.");
    add("kw-intro", firstParagraph.includes(key) ? "ok" : "warn", "Palavra-chave no primeiro parágrafo", "Responda logo no início, com a expressão natural.");
    add("kw-h2", h2s.some((h) => fold(h).includes(key)) ? "ok" : "warn", "Palavra-chave num subtítulo (H2)", "Um H2 com a expressão ou uma pergunta relacionada ajuda.");
    const mentions = fold(body).split(key).length - 1;
    const density = words ? (mentions * key.split(/\s+/).length * 100) / words : 0;
    add("density", level(density >= 0.4 && density <= 2.5, mentions > 0), "Uso natural da palavra-chave", `Aparece ${mentions}x (${density.toFixed(1)}%). Entre 0,4% e 2,5% é o ideal; mais soa a repetição.`);
    const twin = input.others?.find((other) => fold(other.focusKeyword) === key);
    add("cannibal", twin ? "fail" : "ok", "Sem outro artigo a competir pela mesma palavra", twin ? `Já usada em /${twin.slug}. Dois artigos para a mesma pesquisa prejudicam-se.` : "Nenhum outro artigo usa esta palavra-chave.");
  }
  const metaTitleLength = input.metaTitle.trim().length;
  add("meta-title", level(metaTitleLength >= 35 && metaTitleLength <= 60, metaTitleLength >= 25 && metaTitleLength <= 70), "Título SEO com 35 a 60 caracteres", `Tem ${metaTitleLength}. Acima de 60 o Google corta-o.`);
  const descriptionLength = input.metaDescription.trim().length;
  add("meta-desc", level(descriptionLength >= 110 && descriptionLength <= 160, descriptionLength >= 70 && descriptionLength <= 175), "Meta descrição com 110 a 160 caracteres", `Tem ${descriptionLength}. Resuma a resposta e convide ao clique.`);
  add("slug", /^[a-z0-9]+(-[a-z0-9]+)*$/.test(input.slug) && input.slug.length <= 70 ? "ok" : "fail", "Endereço limpo", "Só minúsculas, números e hífenes, no máximo 70 caracteres.");
  add("length", level(words >= 600, words >= 350), "Extensão do texto", `${words} palavras. Para guias, 600 ou mais costuma competir melhor.`);
  add("structure", level(h2s.length >= 3, h2s.length >= 2), "Estrutura com subtítulos", `${h2s.length} H2. Use 3 ou mais para o leitor e para o Google percorrerem o texto.`);
  add("question-h2", h2s.some((h) => h.trim().endsWith("?")) ? "ok" : "warn", "Pelo menos um subtítulo em forma de pergunta", "As perguntas alimentam os resultados de resposta direta.");
  add("alt", input.coverAlt.trim().length >= 10 ? "ok" : "fail", "Texto alternativo da imagem de capa", "Descreva a imagem em poucas palavras, no idioma da página.");
  add("links", level((input.internalLinks ?? 0) >= 2, (input.internalLinks ?? 0) >= 1), "Ligações internas", "Ligue a pelo menos 2 páginas do site (hotéis, venda, outros guias).");

  const weight = { ok: 1, warn: 0.5, fail: 0 } as const;
  const score = Math.round((checks.reduce((sum, check) => sum + weight[check.level], 0) / checks.length) * 100);
  return { score, checks };
};
