import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const stoneTownZanzibar: Post = {
  slug: "stone-town-zanzibar",
  title: "Stone Town Zanzibar: o que ver e como visitar",
  seoTitle: "Stone Town Zanzibar: o que ver e como visitar",
  description:
    "Stone Town Zanzibar: o que ver no centro histórico classificado pela UNESCO. Ruelas, portas esculpidas, Velho Forte, mercado de Darajani, Forodhani e dicas.",
  excerpt: "O centro histórico de Zanzibar: o que ver, quanto tempo reservar e dicas para uma visita de um dia.",
  subtitle: "O centro histórico, o mercado e como visitar num dia.",
  category: "O que fazer",
  tags: ["Stone Town", "história", "passeios"],
  status: "published",
  keywords: ["stone town zanzibar", "o que ver em stone town", "stone town", "stone town o que visitar"],
  published: "2026-11-13",
  updated: "2026-11-14",
  cover: { src: "/images/destino/stone-town.webp", alt: "Rua de Stone Town, o centro histórico de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**Stone Town é o centro histórico da cidade de Zanzibar, classificado pela UNESCO.** Quem procura «Stone Town Zanzibar» quer em geral saber se vale a pena e quanto tempo reservar: vale, e basta um dia. Fica na costa oeste da ilha, perto do aeroporto, e é o principal passeio cultural de uma viagem de praia.",
    },
    { type: "h2", text: "Porque é que Stone Town é Património Mundial?" },
    {
      type: "p",
      text: "A cidade foi classificada pela UNESCO no ano 2000. Durante séculos foi um porto de comércio no oceano Índico, e vê-se isso na mistura de influências suaíli, árabes, indianas e europeias que marcam a arquitetura, desde as casas de coral e pedra até às varandas de madeira e às grandes portas esculpidas.",
    },
    { type: "h2", text: "O que ver em Stone Town" },
    {
      type: "ul",
      items: [
        "**As ruelas:** o melhor programa é perder-se a pé pelas ruas estreitas, entre casas antigas e lojas.",
        "**As portas esculpidas:** são um dos símbolos da cidade, com madeira trabalhada e detalhes em metal.",
        "**Mercado de Darajani:** para ver o dia a dia local, com fruta, peixe e especiarias.",
        "**Jardins de Forodhani:** à beira-mar, com banca de comida ao fim da tarde.",
        "**Velho Forte:** construção de pedra do século XVIII, junto ao mar, com um pátio onde há por vezes lojas e espetáculos.",
        "**Antigo mercado de escravos e catedral anglicana:** o local lembra o passado de tráfico de escravos da ilha e é uma visita com muito peso histórico.",
        "**Casa natal de Freddie Mercury:** o cantor dos Queen nasceu em Stone Town, e a casa é uma paragem popular.",
        "**Outros pontos históricos:** confirme horários, entradas e o estado das visitas antes de ir, porque alguns edifícios podem estar em restauro.",
      ],
    },
    { type: "h2", text: "Como é um dia em Stone Town?" },
    {
      type: "ul",
      items: [
        "**Manhã:** chegada cedo, passeio pelas ruelas e pelo mercado de Darajani, antes do calor.",
        "**Meio do dia:** almoço numa esplanada e visita ao Velho Forte ou ao antigo mercado de escravos.",
        "**Fim de tarde:** pôr do sol à beira-mar e jantar nos Jardins de Forodhani.",
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
    { question: "O que ver em Stone Town num dia?", answer: "As ruelas e as portas esculpidas, o mercado de Darajani, o Velho Forte, o antigo mercado de escravos e, ao fim do dia, os Jardins de Forodhani." },
    { question: "Stone Town fica perto do aeroporto?", answer: "Sim. Fica na costa oeste da ilha, perto do aeroporto internacional de Zanzibar." },
  ],
  related: DEFAULT_RELATED,
};
