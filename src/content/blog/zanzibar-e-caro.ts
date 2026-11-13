import { HOTELS } from "@/content/hotels";
import type { Post } from "./types";
import { DEFAULT_RELATED, eur, FROM_PRICE } from "./shared";

const hotelRows = HOTELS.map((hotel) => [hotel.name, hotel.area ?? "Zanzibar", hotel.fromPrice === null ? "Sob pedido" : `desde ${eur(hotel.fromPrice)}`]);
const fromText = FROM_PRICE === null ? "" : ` Os nossos pacotes de 2027 começam em ${eur(FROM_PRICE)} por pessoa.`;

export const zanzibarECaro: Post = {
  slug: "zanzibar-e-caro",
  title: "Zanzibar é caro? Quanto custa uma viagem",
  seoTitle: "Zanzibar é caro? Quanto custa uma viagem em 2027",
  description:
    "Quanto custa uma viagem a Zanzibar saindo de Lisboa? Preços desde por pessoa, o que está incluído, o que paga à parte e como poupar.",
  excerpt: "Quanto custa uma semana em Zanzibar com voo de Lisboa, o que o preço inclui e o que ficará por pagar.",
  subtitle: "Quanto custa a viagem, o que está incluído e onde se gasta mais.",
  category: "Orçamento",
  tags: ["preços", "tudo incluído", "custos"],
  status: "published",
  keywords: ["zanzibar é caro", "quanto custa viagem zanzibar", "preço viagem zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/cabanas-sobre-agua.webp", alt: "Cabanas sobre a água em Zanzibar" },
  blocks: [
    {
      type: "p",
      text: `**Zanzibar não é um destino barato a partir de Portugal, sobretudo por causa do voo, mas o tudo incluído ajuda a controlar o orçamento.**${fromText} O preço varia com o hotel e, muito, com a data de partida.`,
    },
    { type: "h2", text: "Quanto custa por hotel" },
    {
      type: "p",
      text: "Estes são os preços «desde» por pessoa dos nossos pacotes de 7 noites em tudo incluído, com voo desde Lisboa. O preço final depende da data e é confirmado por nós no pedido de reserva.",
    },
    { type: "table", head: ["Hotel", "Zona", "Preço por pessoa"], rows: hotelRows },
    { type: "h2", text: "O que o preço inclui" },
    {
      type: "ul",
      items: [
        "Passagem aérea em voo regular, classe económica.",
        "7 noites de alojamento em regime tudo incluído.",
        "Transfers e seguro de viagem.",
        "Taxas de aeroporto e de combustível (sujeitas a alteração até à emissão dos bilhetes).",
      ],
    },
    { type: "h2", text: "O que paga à parte" },
    {
      type: "ul",
      items: [
        "A **taxa hoteleira** do Governo de Zanzibar, entre 2 USD e 5 USD por pessoa e por noite, conforme a categoria do hotel, paga no hotel à chegada.",
        "Excursões, passeios e extras de carácter pessoal.",
        "Suplementos de tarifa aérea para outras classes ou épocas altas.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/estrelas-do-mar.webp",
      alt: "Estrelas-do-mar na água cristalina de Zanzibar",
    },
    { type: "h2", text: "Como pagar menos" },
    {
      type: "ul",
      items: [
        "**Escolha as datas fora do pico:** em 2027 os pacotes de julho e agosto custam bem mais do que os de janeiro, fevereiro ou setembro e outubro.",
        "**Escolha o hotel:** a diferença entre o mais barato e o mais caro pode ser de centenas de euros por pessoa.",
        "**Viajar a dois ou em família** divide custos fixos como os transfers.",
      ],
    },
    {
      type: "p",
      text: "Para ver o preço de cada data, abra a página do hotel. Se quiser uma comparação geral, veja [Zanzibar tudo incluído 2027](/zanzibar-tudo-incluido).",
    },
  ],
  faq: [
    { question: "Zanzibar é caro?", answer: "A viagem desde Portugal custa mais do que muitos destinos de praia europeus, sobretudo pelo voo. Em tudo incluído é mais fácil controlar o orçamento." },
    { question: "Quanto custa uma semana em Zanzibar?", answer: `Nos nossos pacotes de 2027, 7 noites em tudo incluído com voo de Lisboa começam${FROM_PRICE === null ? "" : ` em ${eur(FROM_PRICE)} por pessoa`}, conforme o hotel e a data.` },
    { question: "Há alguma taxa a pagar no hotel?", answer: "Sim. O Governo de Zanzibar cobra uma taxa hoteleira de 2 a 5 USD por pessoa e por noite, paga diretamente no hotel." },
    { question: "Quando é mais barato ir a Zanzibar?", answer: "Fora de julho e agosto, que são as datas mais caras das partidas de 2027." },
  ],
  related: DEFAULT_RELATED,
};
