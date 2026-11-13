import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const voosLisboaZanzibar: Post = {
  slug: "voos-lisboa-zanzibar",
  title: "Voos para Zanzibar: horas de voo desde Lisboa",
  seoTitle: "Voos para Zanzibar: horas de voo desde Lisboa",
  description:
    "Quantas horas são de Lisboa a Zanzibar? Distância, escalas, tempo total de viagem e o que esperar de um voo regular em classe económica.",
  excerpt: "Distância, escalas e tempo total de viagem entre Lisboa e Zanzibar, explicados sem rodeios.",
  subtitle: "Quanto dura a viagem, como funcionam as escalas e o que esperar do voo.",
  category: "Planear a viagem",
  tags: ["voos", "Lisboa", "escalas"],
  status: "published",
  keywords: ["zanzibar horas de voo", "voos zanzibar", "voos lisboa zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/ilha-tropical.webp", alt: "Ilha tropical vista do ar, em Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**De Lisboa a Zanzibar são cerca de 7 000 km em linha reta.** Para a maioria das pessoas isto significa um voo com uma escala e um tempo total de viagem que ronda um dia de viagem, contando a espera entre voos. O tempo exato depende da companhia, do aeroporto de escala e do dia.",
    },
    { type: "h2", text: "Há voo direto de Lisboa para Zanzibar?" },
    {
      type: "p",
      text: "Normalmente não. A opção regular mais barata a partir de Lisboa costuma ter **uma escala**. Esta é a que procuramos para os nossos pacotes. Se um dia surgirem alternativas mais rápidas, indicamos no pedido de reserva.",
    },
    {
      type: "note",
      text: "Não prometemos voo direto. Cada partida tem as suas horas e escala, e confirmamos o itinerário consigo antes de a reserva ficar fechada.",
    },
    { type: "h2", text: "Quanto tempo demora a viagem?" },
    {
      type: "ul",
      items: [
        "**Tempo de voo:** é a soma dos dois voos, e o segundo, de África ou do Médio Oriente até Zanzibar, é mais curto.",
        "**Escala:** pode ir de pouco mais de uma hora a mais de meio dia, conforme a ligação.",
        "**Total porta a porta:** conte com um dia inteiro, incluindo o transfer para o hotel.",
      ],
    },
    {
      type: "p",
      text: "Como Zanzibar está 3 horas à frente de Lisboa no inverno e 2 no verão, a chegada acontece normalmente no dia seguinte ao da partida. Planeie o primeiro dia sem pressas.",
    },
    { type: "h2", text: "O aeroporto de Zanzibar" },
    {
      type: "p",
      text: "Os voos aterram no aeroporto internacional de Zanzibar, perto de Stone Town. Daí seguem os transfers para o hotel, que podem demorar entre cerca de uma e duas horas, consoante o resort fique no norte ou na costa leste. Nos nossos pacotes os transfers estão incluídos.",
    },
    { type: "h2", text: "O que inclui a passagem nos nossos pacotes" },
    {
      type: "ul",
      items: [
        "Passagem aérea em **voo regular, em classe económica**, com partida de Lisboa.",
        "Taxas de aeroporto e de combustível (sujeitas a alteração até à emissão dos bilhetes).",
        "Transfers e seguro de viagem.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/molhe-aerea-topo.webp",
      alt: "Vista aérea de um molhe sobre o mar turquesa de Zanzibar",
      caption: "Do aeroporto aos resorts, os transfers estão incluídos.",
    },
    { type: "h2", text: "Dicas para uma viagem longa" },
    {
      type: "ul",
      items: [
        "Leve na bagagem de mão o essencial (medicamentos, carregadores, uma muda de roupa).",
        "Hidrate-se e levante-se de vez em quando durante o voo.",
        "Deixe uma folga generosa entre voos se reservar por conta própria.",
      ],
    },
    {
      type: "p",
      text: "Prefere ter tudo tratado, com voo, hotel, transfers e seguro? Veja as [viagens a Zanzibar com partida de Lisboa](/viagens-zanzibar).",
    },
  ],
  faq: [
    { question: "Quantas horas são de Lisboa a Zanzibar?", answer: "São cerca de 7 000 km em linha reta. Com uma escala, conte com cerca de um dia de viagem no total, dependendo da ligação." },
    { question: "Há voos diretos de Lisboa para Zanzibar?", answer: "Normalmente não. A opção regular mais barata a partir de Lisboa costuma ter uma escala." },
    { question: "Em que aeroporto se aterra em Zanzibar?", answer: "No aeroporto internacional de Zanzibar, perto de Stone Town." },
    { question: "Os transfers estão incluídos?", answer: "Sim, nos nossos pacotes os transfers entre o aeroporto e o hotel estão incluídos." },
  ],
  related: DEFAULT_RELATED,
};
