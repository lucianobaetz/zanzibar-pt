import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const oQueFazerEmZanzibar: Post = {
  slug: "o-que-fazer-em-zanzibar",
  title: "O que fazer em Zanzibar: 12 sítios e experiências",
  seoTitle: "Zanzibar o que visitar: 12 sítios e experiências",
  description:
    "Zanzibar, o que visitar e fazer? 12 sítios: praias de Nungwi e Paje, Stone Town, The Rock, tour das especiarias, Jozani e passeios de barco, por zona.",
  excerpt: "As praias, a cidade histórica e os passeios que mais valem a pena numa semana em Zanzibar.",
  subtitle: "Praias, Stone Town, ilhas e passeios: o essencial para uma semana.",
  category: "O que fazer",
  tags: ["passeios", "praias", "Stone Town"],
  status: "published",
  keywords: ["zanzibar o que visitar", "o que fazer em zanzibar", "o que visitar em zanzibar", "o que ver em zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-14",
  cover: { src: "/images/destino/the-rock-topo.webp", alt: "The Rock, restaurante sobre uma rocha no mar de Zanzibar, um dos sítios a visitar" },
  blocks: [
    {
      type: "p",
      text: "**Em Zanzibar o programa clássico junta praia, a cidade histórica de Stone Town e uma ou duas excursões.** Quem pergunta «zanzibar o que visitar» costuma querer um plano simples, e com 7 noites há tempo para tudo sem correrias. Estes são os 12 sítios e experiências que mais valem a pena, agrupados por tipo.",
    },
    { type: "h2", text: "O que visitar em Zanzibar: os 12 essenciais" },
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
    { type: "h2", text: "O que ver em Stone Town num dia?" },
    {
      type: "p",
      text: "Reserve uma manhã ou uma tarde para andar a pé pelas ruelas do centro histórico, sem mapa, à procura das portas esculpidas. Passe pelo Velho Forte, pelo mercado de Darajani e termine nos Jardins Forodhani, junto ao mar, onde ao fim do dia há bancas de comida de rua. Fica a poucos minutos do aeroporto, por isso encaixa bem no dia de chegada ou de partida.",
    },
    { type: "h2", text: "Como organizar a semana?" },
    {
      type: "ul",
      items: [
        "**Dias 1 e 2:** chegada, descanso e primeiros mergulhos na praia do hotel.",
        "**Dia 3:** Stone Town e tour das especiarias.",
        "**Dia 4:** passeio de dhow com snorkel ou golfinhos em Kizimkazi.",
        "**Dia 5:** Floresta de Jozani e uma tarde em Paje ou Jambiani.",
        "**Restantes dias:** praia, spa e pôr do sol, sem agenda.",
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
    { question: "O que ver em Stone Town num dia?", answer: "As ruelas e portas esculpidas, o Velho Forte, o mercado de Darajani e, ao fim do dia, os Jardins Forodhani, junto ao mar." },
    { question: "Quantos dias são precisos em Zanzibar?", answer: "Uma semana permite praia, um dia em Stone Town e uma ou duas excursões sem correrias." },
    { question: "As excursões estão incluídas no pacote?", answer: "Não. Os pacotes incluem voo, 7 noites em tudo incluído, transfers e seguro. As excursões reservam-se à parte." },
  ],
  related: DEFAULT_RELATED,
};
