import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const praiasDeZanzibar: Post = {
  slug: "praias-de-zanzibar",
  title: "Praias de Zanzibar: as melhores e como escolher",
  seoTitle: "Praias de Zanzibar: Nungwi, Kendwa, Paje e mais",
  description:
    "As melhores praias de Zanzibar: Nungwi, Kendwa, Kiwengwa, Paje, Jambiani e Pingwe (The Rock). Como são, a maré e qual escolher.",
  excerpt: "Nungwi, Kendwa, Kiwengwa, Paje, Jambiani e Pingwe: como são e qual escolher conforme o que procura.",
  keywords: ["zanzibar praias", "melhores praias de zanzibar", "praias zanzibar", "paje zanzibar", "praia de nungwi"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/praias-aerea.webp", alt: "Vista aérea das praias de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**As praias mais procuradas de Zanzibar são Nungwi e Kendwa, no norte, Kiwengwa, no nordeste, e Paje e Jambiani, no sudeste.** A grande diferença entre elas é a maré: no norte o mar mantém-se mais estável, no leste e no sudeste a maré faz recuar a água e muda por completo a praia ao longo do dia.",
    },
    { type: "map" },
    { type: "h2", text: "Nungwi" },
    {
      type: "p",
      text: "Na ponta norte da ilha, é uma das praias mais conhecidas, com areia branca, água turquesa e pôr do sol. É uma boa escolha para quem quer nadar a qualquer hora. É aqui que ficam o [Riu Jambo](/hoteis/riu-jambo-zanzibar), o [Riu Palace Zanzibar](/hoteis/riu-palace-zanzibar) e o [Riu Palace Swahili](/hoteis/riu-palace-swahili-zanzibar).",
    },
    { type: "image", src: "/images/destino/nungwi.webp", alt: "Praia de Nungwi, em Zanzibar", caption: "Nungwi, no norte da ilha." },
    { type: "h2", text: "Kendwa" },
    {
      type: "p",
      text: "Mesmo ao lado de Nungwi, na costa noroeste, é uma longa praia de areia branca conhecida pelo mar com pouca variação de maré. Tem um ambiente animado ao fim do dia.",
    },
    { type: "image", src: "/images/destino/kendwa-aerea.webp", alt: "Vista aérea da praia de Kendwa, em Zanzibar" },
    { type: "h2", text: "Kiwengwa" },
    {
      type: "p",
      text: "Na costa nordeste, é zona de resorts grandes. Aqui ficam o [Meliá Zanzibar](/hoteis/melia-zanzibar) e o [TUI BLUE Bahari](/hoteis/tui-blue-bahari-zanzibar). Como na costa leste, a maré influencia o banho: informe-se no hotel sobre os melhores horários.",
    },
    { type: "h2", text: "Paje" },
    {
      type: "p",
      text: "Na costa sudeste, Paje é a capital do kitesurf em Zanzibar. A maré baixa deixa grandes extensões de areia e pouca água, por isso é uma praia mais para passear, fazer desporto e ver os kites do que para nadar a qualquer hora.",
    },
    { type: "image", src: "/images/destino/paje-kitesurf.webp", alt: "Kitesurf na praia de Paje, em Zanzibar" },
    { type: "h2", text: "Jambiani" },
    {
      type: "p",
      text: "Aldeia de pescadores na costa leste, com praias tranquilas e barcos tradicionais. Tem um ambiente simples e descontraído, longe dos grandes resorts.",
    },
    { type: "image", src: "/images/destino/jambiani.webp", alt: "Barco tradicional na praia de Jambiani, em Zanzibar" },
    { type: "h2", text: "Pingwe e The Rock" },
    {
      type: "p",
      text: "Em Pingwe, na costa leste, fica o restaurante sobre uma rocha no mar, conhecido como The Rock. É uma das imagens mais famosas de Zanzibar e vale uma visita para uma refeição ou fotografias, com atenção à maré.",
    },
    { type: "image", src: "/images/destino/the-rock.webp", alt: "The Rock, restaurante sobre uma rocha no mar, em Pingwe" },
    { type: "h2", text: "Qual escolher?" },
    {
      type: "table",
      head: ["Procura…", "Escolha", "Nota"],
      rows: [
        ["Nadar a qualquer hora", "Nungwi e Kendwa", "Mar mais estável"],
        ["Resort grande com muitas atividades", "Kiwengwa", "Maré influencia o banho"],
        ["Kitesurf", "Paje", "Maré baixa recua muito"],
        ["Aldeia e sossego", "Jambiani", "Poucos resorts"],
      ],
    },
    {
      type: "p",
      text: "Veja os hotéis por zona em [hotéis em Zanzibar](/hoteis) ou todas as opções em [Zanzibar tudo incluído 2027](/zanzibar-tudo-incluido).",
    },
  ],
  faq: [
    { question: "Quais são as melhores praias de Zanzibar?", answer: "Nungwi e Kendwa, no norte, são as mais procuradas para nadar. Paje e Jambiani, no sudeste, destacam-se pelo kitesurf e pelo ambiente de aldeia." },
    { question: "Há maré em Zanzibar?", answer: "Sim. No norte a variação é menor; na costa leste e sudeste a maré baixa recua muito e muda o aspeto da praia ao longo do dia." },
    { question: "Qual é a melhor praia para kitesurf?", answer: "Paje, na costa sudeste, é conhecida como a capital do kitesurf em Zanzibar." },
    { question: "O que é The Rock?", answer: "É um restaurante sobre uma rocha no mar, em Pingwe, na costa leste, uma das imagens mais famosas de Zanzibar." },
  ],
  related: DEFAULT_RELATED,
};
