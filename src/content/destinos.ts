// Destination sections (beaches and places) used on the home page.
// Descriptions are deliberately general: only well-known facts, no invented numbers.

export type Place = { slug: string; name: string; image: string; alt: string; text: string };

export const PLACES: readonly Place[] = [
  {
    slug: "nungwi",
    name: "Nungwi",
    image: "/images/destino/nungwi.webp",
    alt: "Praia de Nungwi, em Zanzibar, com mar turquesa e areia branca",
    text: "Na ponta norte da ilha, é uma das praias mais procuradas de Zanzibar, com água calma e pôr do sol.",
  },
  {
    slug: "kendwa",
    name: "Kendwa",
    image: "/images/destino/kendwa-aerea.webp",
    alt: "Vista aérea da praia de Kendwa, em Zanzibar",
    text: "Longa praia de areia branca na costa noroeste, conhecida pelo mar com pouca maré.",
  },
  {
    slug: "paje",
    name: "Paje",
    image: "/images/destino/paje-kitesurf.webp",
    alt: "Kitesurf na praia de Paje, em Zanzibar",
    text: "Na costa sudeste, é a capital do kitesurf em Zanzibar.",
  },
  {
    slug: "jambiani",
    name: "Jambiani",
    image: "/images/destino/jambiani.webp",
    alt: "Barco tradicional na praia de Jambiani, em Zanzibar",
    text: "Aldeia de pescadores na costa leste, com praias tranquilas e barcos tradicionais.",
  },
  {
    slug: "the-rock",
    name: "The Rock",
    image: "/images/destino/the-rock.webp",
    alt: "The Rock Restaurant, sobre uma rocha no mar, em Zanzibar",
    text: "O restaurante sobre uma rocha no mar, em Pingwe, é uma das imagens mais famosas da ilha.",
  },
  {
    slug: "stone-town",
    name: "Stone Town",
    image: "/images/destino/stone-town.webp",
    alt: "Rua de Stone Town, Zanzibar, com tecidos coloridos à venda",
    text: "O centro histórico da cidade de Zanzibar, Património Mundial da UNESCO, com vielas, mercados e portas esculpidas.",
  },
];
