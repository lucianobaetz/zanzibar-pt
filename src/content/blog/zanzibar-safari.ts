import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const zanzibarSafari: Post = {
  slug: "zanzibar-safari",
  title: "Safari em Zanzibar: o que pode (e não pode) ver",
  seoTitle: "Safari em Zanzibar: o que existe e alternativas",
  description:
    "Há safari em Zanzibar? Saiba o que pode ver na ilha (Jozani, tartarugas, golfinhos) e como fazer um safari a sério na Tanzânia continental.",
  excerpt: "Em Zanzibar não há leões nem elefantes, mas há passeios de natureza. E o safari a sério fica a um voo curto.",
  subtitle: "Como chegar aos parques da Tanzânia a partir da ilha.",
  category: "O que fazer",
  tags: ["safari", "Tanzânia", "parques"],
  status: "published",
  keywords: ["zanzibar safari", "safari zanzibar", "safari tanzânia"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/safari-girafa.webp", alt: "Girafa num safari em África" },
  blocks: [
    {
      type: "p",
      text: "**Em Zanzibar não há safari de animais selvagens grandes.** Não encontra leões, elefantes ou girafas na ilha. O que existe são passeios de natureza (florestas, tartarugas e golfinhos) e, para um safari a sério, é preciso ir à Tanzânia continental, o que se faz com um voo curto a partir de Zanzibar.",
    },
    { type: "h2", text: "O que pode ver em Zanzibar" },
    {
      type: "ul",
      items: [
        "**Floresta de Jozani:** parque nacional onde vive o macaco-colobo-vermelho, que só existe em Zanzibar.",
        "**Ilha Prisão (Changuu):** passeio de barco desde Stone Town, conhecido pelas tartarugas gigantes.",
        "**Golfinhos em Kizimkazi:** saídas de barco no sul da ilha, com possibilidade de ver golfinhos.",
        "**Passeio de barco com snorkel:** os passeios de um dia em barco tradicional, com paragens para mergulhar, são muitas vezes chamados «safari» na ilha.",
        "**Tour das especiarias:** visita a plantações de cravinho, canela e outras.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/dhow-veleiro.webp",
      alt: "Barco tradicional dhow no mar de Zanzibar",
      caption: "Os passeios em dhow são das excursões mais populares.",
    },
    { type: "h2", text: "Quer um safari a sério? Tanzânia continental" },
    {
      type: "p",
      text: "A Tanzânia é um dos grandes destinos de safari de África. Os parques mais conhecidos são o Serengeti, a cratera do Ngorongoro, o Tarangire, o Mikumi e a reserva de Nyerere (antiga Selous). De Zanzibar chega-se a vários deles em voos internos curtos, e alguns programas fazem-se em um dia ou em poucos dias.",
    },
    {
      type: "image",
      src: "/images/destino/safari-chita.webp",
      alt: "Chita num safari em África",
    },
    { type: "h2", text: "Praia e safari na mesma viagem" },
    {
      type: "p",
      text: "Muita gente combina safari e praia: primeiro os animais, depois o descanso em Zanzibar. Os nossos pacotes são de **praia em tudo incluído**, com voo desde Lisboa, 7 noites, transfers e seguro. **O safari não está incluído**, e não o vendemos neste momento; se quer combinar, diga-nos no pedido de reserva e indicamos como funciona.",
    },
    { type: "h2", text: "Dicas para escolher um passeio" },
    {
      type: "ul",
      items: [
        "Pergunte quantas horas de estrada ou de barco inclui e o que está incluído no preço.",
        "Escolha operadores licenciados e peça orientação ao hotel.",
        "Leve protetor solar, chapéu e calçado fechado.",
      ],
    },
    {
      type: "p",
      text: "Para as praias, veja os [hotéis em Zanzibar tudo incluído](/zanzibar-tudo-incluido).",
    },
  ],
  faq: [
    { question: "Há safari em Zanzibar?", answer: "Não há safari de animais selvagens grandes na ilha. Há passeios de natureza (Jozani, tartarugas e golfinhos) e passeios de barco chamados «safari»." },
    { question: "Onde fazer um safari a partir de Zanzibar?", answer: "Na Tanzânia continental: Serengeti, Ngorongoro, Tarangire, Mikumi e Nyerere, com voos internos curtos desde Zanzibar." },
    { question: "O safari está incluído nos pacotes?", answer: "Não. Os pacotes incluem voo desde Lisboa, 7 noites em tudo incluído, transfers e seguro de viagem." },
  ],
  related: DEFAULT_RELATED,
};
