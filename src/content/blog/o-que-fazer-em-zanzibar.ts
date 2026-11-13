import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const oQueFazerEmZanzibar: Post = {
  slug: "o-que-fazer-em-zanzibar",
  title: "O que fazer em Zanzibar: 12 sítios e experiências",
  seoTitle: "O que fazer em Zanzibar: 12 sítios e experiências",
  description:
    "O que visitar e fazer em Zanzibar: praias, Stone Town, The Rock, kitesurf, tour das especiarias, passeios de barco e mais.",
  excerpt: "As praias, a cidade histórica e os passeios que mais valem a pena numa semana em Zanzibar.",
  keywords: ["zanzibar o que visitar", "o que fazer em zanzibar", "o que ver em zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/the-rock-topo.webp", alt: "The Rock, restaurante sobre uma rocha no mar de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**Em Zanzibar o programa clássico junta praia, a cidade histórica de Stone Town e uma ou duas excursões.** Com 7 noites há tempo para tudo sem correrias. Estes são os 12 sítios e experiências que mais valem a pena.",
    },
    { type: "h2", text: "Praias" },
    {
      type: "ul",
      items: [
        "**Nungwi:** na ponta norte, praia de areia branca e pôr do sol.",
        "**Kendwa:** longa praia de areia branca, conhecida pelo mar com pouca maré.",
        "**Paje:** capital do kitesurf, na costa sudeste.",
        "**Jambiani:** aldeia de pescadores com barcos tradicionais.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/paje-kitesurf.webp",
      alt: "Kitesurf na praia de Paje, em Zanzibar",
      caption: "Paje, o destino de kitesurf de Zanzibar.",
    },
    { type: "h2", text: "Cultura e história" },
    {
      type: "ul",
      items: [
        "**Stone Town:** centro histórico classificado pela UNESCO, com ruelas, portas esculpidas e mercados.",
        "**Mercado de Darajani:** para ver o dia a dia local.",
        "**Tour das especiarias:** visita a plantações e prova de frutos e especiarias.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/stone-town.webp",
      alt: "Rua de Stone Town, o centro histórico de Zanzibar",
    },
    { type: "h2", text: "Mar e natureza" },
    {
      type: "ul",
      items: [
        "**The Rock:** o restaurante sobre uma rocha no mar, em Pingwe, uma das imagens mais famosas da ilha.",
        "**Passeio de dhow:** ao pôr do sol ou de dia inteiro, com paragens para snorkel.",
        "**Golfinhos em Kizimkazi:** saída de barco no sul da ilha.",
        "**Floresta de Jozani:** onde vive o macaco-colobo-vermelho.",
        "**Ilha Prisão:** passeio curto de barco desde Stone Town, para ver tartarugas gigantes.",
      ],
    },
    { type: "h2", text: "Quantos dias são precisos?" },
    {
      type: "p",
      text: "Os nossos pacotes têm 7 noites. Costuma bastar para: 3 a 4 dias de praia e resort, 1 dia em Stone Town e 1 ou 2 excursões (barco, especiarias ou Jozani). Quem quer mais pode juntar um [safari na Tanzânia continental](/blog/zanzibar-safari).",
    },
    {
      type: "note",
      text: "Os passeios e entradas não estão incluídos no pacote. Pode reservá-los no local ou através do hotel. Confirme sempre preços e condições antes de pagar.",
    },
    { type: "h2", text: "Onde ficar para aproveitar melhor" },
    {
      type: "p",
      text: "A escolha do hotel define o resto. No norte fica mais perto das melhores praias para nadar; na costa leste os resorts são grandes e completos. Veja todos em [hotéis em Zanzibar](/hoteis).",
    },
  ],
  faq: [
    { question: "O que visitar em Zanzibar?", answer: "Stone Town, as praias de Nungwi, Kendwa, Paje e Jambiani, The Rock, o tour das especiarias, a floresta de Jozani e os passeios de barco." },
    { question: "Quantos dias são precisos em Zanzibar?", answer: "Uma semana permite praia, um dia em Stone Town e uma ou duas excursões sem correrias." },
    { question: "As excursões estão incluídas no pacote?", answer: "Não. Os pacotes incluem voo, 7 noites em tudo incluído, transfers e seguro. As excursões reservam-se à parte." },
  ],
  related: DEFAULT_RELATED,
};
