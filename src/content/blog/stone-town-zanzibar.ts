import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const stoneTownZanzibar: Post = {
  slug: "stone-town-zanzibar",
  title: "Stone Town, Zanzibar: o que ver e como visitar",
  seoTitle: "Stone Town, Zanzibar: o que ver e como visitar",
  description:
    "O que ver em Stone Town, o centro histórico de Zanzibar: ruelas, portas esculpidas, mercados, Forodhani e dicas para um dia de visita.",
  excerpt: "O centro histórico de Zanzibar: o que ver, quanto tempo reservar e dicas para uma visita de um dia.",
  subtitle: "O centro histórico, o mercado e como visitar num dia.",
  category: "O que fazer",
  tags: ["Stone Town", "história", "passeios"],
  status: "published",
  keywords: ["stone town zanzibar", "o que ver em stone town", "stone town"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/stone-town.webp", alt: "Rua de Stone Town, o centro histórico de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**Stone Town é o centro histórico da cidade de Zanzibar, classificado pela UNESCO.** Fica na costa oeste da ilha, perto do aeroporto, e é o principal passeio cultural de uma viagem de praia. Basta um dia para a conhecer.",
    },
    { type: "h2", text: "O que ver em Stone Town" },
    {
      type: "ul",
      items: [
        "**As ruelas:** o melhor programa é perder-se a pé pelas ruas estreitas, entre casas antigas e lojas.",
        "**As portas esculpidas:** são um dos símbolos da cidade, com madeira trabalhada e detalhes em metal.",
        "**Mercado de Darajani:** para ver o dia a dia local, com fruta, peixe e especiarias.",
        "**Jardins de Forodhani:** à beira-mar, com banca de comida ao fim da tarde.",
        "**Pontos históricos:** o antigo forte e os locais ligados ao passado de comércio da ilha. Confirme horários e entradas antes de ir.",
      ],
    },
    { type: "h2", text: "Quanto tempo reservar?" },
    {
      type: "p",
      text: "Meio dia chega para uma primeira ideia. Com um dia inteiro fica com tempo para o mercado, um almoço e o pôr do sol à beira-mar. Os transfers até Stone Town demoram de uma a duas horas desde os resorts do norte e da costa leste. Muitos hotéis organizam a excursão.",
    },
    { type: "h2", text: "Dicas" },
    {
      type: "ul",
      items: [
        "Vista-se com recato (ombros e joelhos cobertos): é uma cidade de maioria muçulmana.",
        "Peça licença antes de fotografar pessoas.",
        "Leve calçado confortável e água.",
        "Combine um guia local através do hotel e confirme o preço antes.",
      ],
    },
    {
      type: "note",
      text: "A visita a Stone Town e as entradas não estão incluídas no pacote. Reserve-as no local ou através do hotel.",
    },
    {
      type: "p",
      text: "Para mais ideias, veja [o que fazer em Zanzibar](/blog/o-que-fazer-em-zanzibar) e escolha o seu hotel em [hotéis em Zanzibar](/hoteis).",
    },
  ],
  faq: [
    { question: "O que é Stone Town?", answer: "É o centro histórico da cidade de Zanzibar, classificado pela UNESCO, com ruelas, portas esculpidas e mercados." },
    { question: "Quanto tempo é preciso para visitar Stone Town?", answer: "Meio dia dá uma primeira ideia; um dia inteiro permite ver os mercados e o pôr do sol à beira-mar." },
    { question: "Stone Town fica perto do aeroporto?", answer: "Sim. Fica na costa oeste da ilha, perto do aeroporto internacional de Zanzibar." },
  ],
  related: DEFAULT_RELATED,
};
