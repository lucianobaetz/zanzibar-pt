// The five hotels sold with TUI (decision of 12 Nov 2026), departing from Lisbon.
// Only facts that are verified are filled in. `null` means "to confirm with TUI
// or on site": never guess a location, a rating or a price.

export type Hotel = {
  slug: string;
  name: string;
  area: string | null;
  // Price per person from the cheapest 2027 departure, in euros. null = on request.
  fromPrice: number | null;
  // Provisional SEO copy: final titles/descriptions follow the keyword research.
  seoTitle: string;
  seoDescription: string;
  intro: string;
};

export const HOTELS: readonly Hotel[] = [
  {
    slug: "riu-jambo-zanzibar",
    name: "Riu Jambo",
    area: "Nungwi",
    fromPrice: null,
    seoTitle: "Riu Jambo Zanzibar: tudo incluído com voo de Lisboa",
    seoDescription:
      "Riu Jambo em Nungwi, Zanzibar, tudo incluído com voo de Lisboa, transfers e seguro. Escolha a partida de 2027 e peça a sua reserva sem pagar online.",
    intro:
      "Resort tudo incluído na costa norte de Zanzibar, na praia de Nungwi, com voo regular de Lisboa, transfers e seguro de viagem.",
  },
  {
    slug: "riu-palace-zanzibar",
    name: "Riu Palace Zanzibar",
    area: null,
    fromPrice: null,
    seoTitle: "Riu Palace Zanzibar: tudo incluído com voo de Lisboa",
    seoDescription:
      "Riu Palace Zanzibar em tudo incluído, com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort Riu Palace em Zanzibar em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
  },
  {
    slug: "riu-palace-swahili-zanzibar",
    name: "Riu Palace Swahili",
    area: null,
    fromPrice: null,
    seoTitle: "Riu Palace Swahili Zanzibar: tudo incluído com voo",
    seoDescription:
      "Riu Palace Swahili em Zanzibar, tudo incluído com voo de Lisboa, transfers e seguro. Veja as partidas de 2027 e peça a sua reserva sem pagar online.",
    intro:
      "Resort Riu Palace Swahili em Zanzibar em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
  },
  {
    slug: "melia-zanzibar",
    name: "Meliá Zanzibar",
    area: "Kiwengwa",
    fromPrice: null,
    seoTitle: "Meliá Zanzibar: tudo incluído com voo de Lisboa",
    seoDescription:
      "Meliá Zanzibar, em Kiwengwa, em tudo incluído com voo de Lisboa, transfers e seguro. Partidas em 2027 e pedido de reserva sem pagar online.",
    intro:
      "Resort Meliá em Kiwengwa, na costa leste de Zanzibar, em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
  },
  {
    slug: "tui-blue-bahari-zanzibar",
    name: "TUI BLUE Bahari",
    area: null,
    fromPrice: null,
    seoTitle: "TUI BLUE Bahari Zanzibar: tudo incluído com voo",
    seoDescription:
      "TUI BLUE Bahari em Zanzibar, tudo incluído com voo de Lisboa, transfers e seguro. Veja as partidas de 2027 e peça a sua reserva sem pagar online.",
    intro:
      "TUI BLUE Bahari em Zanzibar em regime tudo incluído, com voo regular de Lisboa, transfers e seguro de viagem.",
  },
] as const;

export const getHotel = (slug: string): Hotel | undefined => HOTELS.find((hotel) => hotel.slug === slug);
