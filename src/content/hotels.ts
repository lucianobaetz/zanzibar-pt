// The five hotels sold with TUI (decision of 12 Nov 2026), departing from Lisbon.
// Only facts that are verified are filled in. `null` means "to confirm with TUI
// or on site": never guess a location, a rating or a price.
// Sources: riu.com (Riu hotels), melia.com and tui-blue.com (official photo galleries).

import { lowestPrice } from "@/lib/departures";

export type HotelImage = { src: string; alt: string };

export type Hotel = {
  slug: string;
  name: string;
  // Beach / village on the island, as stated by the hotel or the booking pages.
  area: string | null;
  coast: "Costa norte" | "Costa leste" | null;
  adultsOnly: boolean;
  // Price per person from the cheapest 2027 departure (derived from the calendar), in euros.
  fromPrice: number | null;
  // Provisional SEO copy: final titles/descriptions follow the keyword research.
  seoTitle: string;
  seoDescription: string;
  intro: string;
  // Verified selling points, short, shown as chips and used in the schema.
  highlights: readonly string[];
  images: readonly HotelImage[];
};

const photos = (slug: string, name: string, captions: readonly string[]): HotelImage[] =>
  captions.map((caption, index) => ({
    src: `/images/hoteis/${slug}/${String(index + 1).padStart(2, "0")}.webp`,
    alt: `${name}, Zanzibar: ${caption}`,
  }));

export const HOTELS: readonly Hotel[] = [
  {
    slug: "riu-jambo-zanzibar",
    name: "Riu Jambo",
    area: "Nungwi",
    coast: "Costa norte",
    adultsOnly: false,
    fromPrice: lowestPrice("riu-jambo-zanzibar"),
    seoTitle: "Riu Jambo Zanzibar 2027: tudo incluído desde Lisboa",
    seoDescription:
      "Riu Jambo em Nungwi, Zanzibar, tudo incluído com voo de Lisboa, transfers e seguro. Escolha a partida de 2027 e peça a sua reserva sem pagar online.",
    intro:
      "Resort tudo incluído em primeira linha de praia em Nungwi, na costa norte de Zanzibar, com voo regular de Lisboa, transfers e seguro de viagem.",
    highlights: ["Primeira linha de praia", "Tudo incluído 24 horas", "Piscinas e piscina infantil", "Spa e programa fitness"],
    images: photos("riu-jambo-zanzibar", "Riu Jambo", [
      "vista geral do resort",
      "piscina",
      "piscina ao ar livre",
      "bar dentro da piscina",
      "edifício principal",
      "lobby",
      "quarto",
      "restaurante",
    ]),
  },
  {
    slug: "riu-palace-zanzibar",
    name: "Riu Palace Zanzibar",
    area: "Nungwi",
    coast: "Costa norte",
    adultsOnly: false,
    fromPrice: lowestPrice("riu-palace-zanzibar"),
    seoTitle: "Riu Palace Zanzibar 2027: tudo incluído, voo de Lisboa",
    seoDescription:
      "Riu Palace Zanzibar na praia de Nungwi, tudo incluído com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort Riu Palace na praia de Nungwi, na costa norte de Zanzibar, em regime tudo incluído 24 horas, com voo regular de Lisboa, transfers e seguro de viagem.",
    highlights: ["Praia de Nungwi", "Tudo incluído 24 horas", "Spa & Wellness", "Quartos com acesso direto à piscina"],
    images: photos("riu-palace-zanzibar", "Riu Palace Zanzibar", [
      "vista geral do resort",
      "piscina",
      "zona de piscinas",
      "bar de praia",
      "receção",
      "quarto com acesso à piscina",
      "restaurante",
      "spa",
    ]),
  },
  {
    slug: "riu-palace-swahili-zanzibar",
    name: "Riu Palace Swahili",
    area: "Nungwi",
    coast: "Costa norte",
    adultsOnly: true,
    fromPrice: lowestPrice("riu-palace-swahili-zanzibar"),
    seoTitle: "Riu Palace Swahili Zanzibar 2027: só adultos",
    seoDescription:
      "Riu Palace Swahili, hotel só para adultos em Nungwi, Zanzibar. Tudo incluído com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort só para adultos à beira-mar na praia de Nungwi, na costa norte de Zanzibar, com Elite Club, tudo incluído, voo regular de Lisboa, transfers e seguro de viagem.",
    highlights: ["Só para adultos", "Elite Club", "7 restaurantes e 8 bares", "Praia de Nungwi"],
    images: photos("riu-palace-swahili-zanzibar", "Riu Palace Swahili", [
      "vista aérea do resort",
      "vista aérea da praia",
      "piscina",
      "bar dentro da piscina",
      "quarto",
      "quarto com vista",
      "restaurante principal",
      "praia",
    ]),
  },
  {
    slug: "melia-zanzibar",
    name: "Meliá Zanzibar",
    area: "Kiwengwa",
    coast: "Costa leste",
    adultsOnly: false,
    fromPrice: lowestPrice("melia-zanzibar"),
    seoTitle: "Meliá Zanzibar 2027: tudo incluído com voo de Lisboa",
    seoDescription:
      "Meliá Zanzibar, em Kiwengwa, em tudo incluído com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort Meliá em Kiwengwa, na costa leste de Zanzibar, em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
    highlights: ["Kiwengwa, costa leste", "Tudo incluído", "Piscina com vista para o mar", "Quartos com varanda"],
    images: photos("melia-zanzibar", "Meliá Zanzibar", [
      "vista aérea do resort e do cais",
      "piscina com vista para o mar",
      "quarto com cama de dossel",
      "quarto com varanda",
      "quarto",
      "bungalow na falésia",
      "varanda com vista para o oceano",
      "casa de banho",
    ]),
  },
  {
    slug: "tui-blue-bahari-zanzibar",
    name: "TUI BLUE Bahari",
    area: "Kiwengwa",
    coast: "Costa leste",
    adultsOnly: false,
    fromPrice: lowestPrice("tui-blue-bahari-zanzibar"),
    seoTitle: "TUI BLUE Bahari Zanzibar 2027: tudo incluído, Lisboa",
    seoDescription:
      "TUI BLUE Bahari Zanzibar em tudo incluído, com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort TUI BLUE Bahari em Kiwengwa, na costa leste de Zanzibar, em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
    highlights: ["Kiwengwa, costa leste", "Tudo incluído", "Praia de areia branca", "Piscina principal"],
    images: photos("tui-blue-bahari-zanzibar", "TUI BLUE Bahari", [
      "vista geral do resort",
      "praia",
      "piscina principal",
      "vista aérea da piscina",
      "bungalows junto à praia",
      "quarto",
      "lounge de boas-vindas",
      "praia com chapéus de sol",
    ]),
  },
];

export const getHotel = (slug: string): Hotel | undefined => HOTELS.find((hotel) => hotel.slug === slug);

export const HOTEL_AREAS = [...new Set(HOTELS.flatMap((hotel) => (hotel.area ? [hotel.area] : [])))];
