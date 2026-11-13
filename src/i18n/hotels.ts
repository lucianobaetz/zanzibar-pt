import type { LocaleCode } from "./locales";

/** Native copy for each hotel and market. Portuguese lives in content/hotels.ts. */
export type HotelCopy = { seoTitle: string; seoDescription: string; intro: string; highlights: readonly string[] };

type Slug = "riu-jambo-zanzibar" | "riu-palace-zanzibar" | "riu-palace-swahili-zanzibar" | "melia-zanzibar" | "tui-blue-bahari-zanzibar";

export const HOTEL_COPY: Record<Exclude<LocaleCode, "pt">, Record<Slug, HotelCopy>> = {
  es: {
    "riu-jambo-zanzibar": {
      seoTitle: "Riu Jambo Zanzíbar 2027: todo incluido con vuelo",
      seoDescription: "Riu Jambo en Nungwi, Zanzíbar, todo incluido con vuelo, traslados y seguro. Elija la salida de 2027 y solicite su reserva sin pagar online.",
      intro: "Resort todo incluido en primera línea de playa en Nungwi, en la costa norte de Zanzíbar, con vuelo regular, traslados y seguro de viaje.",
      highlights: ["Primera línea de playa", "Todo incluido 24 horas", "Piscinas y piscina infantil", "Spa y programa de fitness"],
    },
    "riu-palace-zanzibar": {
      seoTitle: "Riu Palace Zanzibar 2027: todo incluido, con vuelo",
      seoDescription: "Riu Palace Zanzibar en la playa de Nungwi, todo incluido con vuelo, traslados y seguro. Salidas en 2027 y solicitud de reserva sin pagar online.",
      intro: "Resort Riu Palace en la playa de Nungwi, en la costa norte de Zanzíbar, en régimen todo incluido 24 horas, con vuelo regular, traslados y seguro de viaje.",
      highlights: ["Playa de Nungwi", "Todo incluido 24 horas", "Spa y bienestar", "Habitaciones con acceso directo a la piscina"],
    },
    "riu-palace-swahili-zanzibar": {
      seoTitle: "Riu Palace Swahili Zanzíbar 2027: solo adultos",
      seoDescription: "Riu Palace Swahili, hotel solo para adultos en Nungwi, Zanzíbar. Todo incluido con vuelo, traslados y seguro. Salidas en 2027 y solicitud de reserva sin pagar online.",
      intro: "Resort solo para adultos junto al mar en la playa de Nungwi, en la costa norte de Zanzíbar, con Elite Club, todo incluido, vuelo regular, traslados y seguro de viaje.",
      highlights: ["Solo para adultos", "Elite Club", "7 restaurantes y 8 bares", "Playa de Nungwi"],
    },
    "melia-zanzibar": {
      seoTitle: "Meliá Zanzíbar 2027: todo incluido con vuelo",
      seoDescription: "Meliá Zanzibar, en Kiwengwa, en todo incluido con vuelo, traslados y seguro. Salidas en 2027 y solicitud de reserva sin pagar online.",
      intro: "Resort Meliá en Kiwengwa, en la costa este de Zanzíbar, en régimen todo incluido, con vuelo regular, traslados y seguro de viaje.",
      highlights: ["Kiwengwa, costa este", "Todo incluido", "Piscina con vistas al mar", "Habitaciones con balcón"],
    },
    "tui-blue-bahari-zanzibar": {
      seoTitle: "TUI BLUE Bahari Zanzíbar 2027: todo incluido, con vuelo",
      seoDescription: "TUI BLUE Bahari Zanzibar en todo incluido, con vuelo, traslados y seguro. Salidas en 2027 y solicitud de reserva sin pagar online.",
      intro: "Resort TUI BLUE Bahari en Kiwengwa, en la costa este de Zanzíbar, en régimen todo incluido, con vuelo regular, traslados y seguro de viaje.",
      highlights: ["Kiwengwa, costa este", "Todo incluido", "Playa de arena blanca", "Piscina principal"],
    },
  },
  fr: {
    "riu-jambo-zanzibar": {
      seoTitle: "Riu Jambo Zanzibar 2027 : séjour tout inclus avec vol",
      seoDescription: "Riu Jambo à Nungwi, Zanzibar, tout inclus avec vol, transferts et assurance. Choisissez votre départ 2027 et demandez la réservation sans paiement en ligne.",
      intro: "Resort tout inclus en première ligne de plage à Nungwi, sur la côte nord de Zanzibar, avec vol régulier, transferts et assurance voyage.",
      highlights: ["Première ligne de plage", "Tout inclus 24 h/24", "Piscines et bassin pour enfants", "Spa et programme fitness"],
    },
    "riu-palace-zanzibar": {
      seoTitle: "Riu Palace Zanzibar 2027 : tout inclus, avec vol",
      seoDescription: "Riu Palace Zanzibar sur la plage de Nungwi, tout inclus avec vol, transferts et assurance. Départs en 2027 et demande de réservation sans paiement en ligne.",
      intro: "Resort Riu Palace sur la plage de Nungwi, sur la côte nord de Zanzibar, en formule tout inclus 24 h/24, avec vol régulier, transferts et assurance voyage.",
      highlights: ["Plage de Nungwi", "Tout inclus 24 h/24", "Spa et bien-être", "Chambres avec accès direct à la piscine"],
    },
    "riu-palace-swahili-zanzibar": {
      seoTitle: "Riu Palace Swahili Zanzibar 2027 : adultes uniquement",
      seoDescription: "Riu Palace Swahili, hôtel réservé aux adultes à Nungwi, Zanzibar. Tout inclus avec vol, transferts et assurance. Départs en 2027 et demande de réservation sans paiement en ligne.",
      intro: "Resort réservé aux adultes en bord de mer sur la plage de Nungwi, sur la côte nord de Zanzibar, avec Elite Club, tout inclus, vol régulier, transferts et assurance voyage.",
      highlights: ["Adultes uniquement", "Elite Club", "7 restaurants et 8 bars", "Plage de Nungwi"],
    },
    "melia-zanzibar": {
      seoTitle: "Meliá Zanzibar 2027 : tout inclus avec vol",
      seoDescription: "Meliá Zanzibar, à Kiwengwa, en tout inclus avec vol, transferts et assurance. Départs en 2027 et demande de réservation sans paiement en ligne.",
      intro: "Resort Meliá à Kiwengwa, sur la côte est de Zanzibar, en formule tout inclus, avec vol régulier, transferts et assurance voyage.",
      highlights: ["Kiwengwa, côte est", "Tout inclus", "Piscine avec vue sur la mer", "Chambres avec balcon"],
    },
    "tui-blue-bahari-zanzibar": {
      seoTitle: "TUI BLUE Bahari Zanzibar 2027 : tout inclus, avec vol",
      seoDescription: "TUI BLUE Bahari Zanzibar en tout inclus, avec vol, transferts et assurance. Départs en 2027 et demande de réservation sans paiement en ligne.",
      intro: "Resort TUI BLUE Bahari à Kiwengwa, sur la côte est de Zanzibar, en formule tout inclus, avec vol régulier, transferts et assurance voyage.",
      highlights: ["Kiwengwa, côte est", "Tout inclus", "Plage de sable blanc", "Piscine principale"],
    },
  },
  en: {
    "riu-jambo-zanzibar": {
      seoTitle: "Riu Jambo Zanzibar 2027: all inclusive holiday with flights",
      seoDescription: "Riu Jambo in Nungwi, Zanzibar, all inclusive with flights, transfers and insurance. Choose your 2027 departure and request your booking with nothing to pay online.",
      intro: "Beachfront all inclusive resort in Nungwi on Zanzibar's north coast, with scheduled flights, transfers and travel insurance.",
      highlights: ["Beachfront", "All inclusive 24 hours", "Pools and a children's pool", "Spa and fitness programme"],
    },
    "riu-palace-zanzibar": {
      seoTitle: "Riu Palace Zanzibar 2027: all inclusive with flights",
      seoDescription: "Riu Palace Zanzibar on Nungwi beach, all inclusive with flights, transfers and insurance. 2027 departures and a booking request with nothing to pay online.",
      intro: "Riu Palace resort on Nungwi beach on Zanzibar's north coast, 24-hour all inclusive, with scheduled flights, transfers and travel insurance.",
      highlights: ["Nungwi beach", "All inclusive 24 hours", "Spa & Wellness", "Rooms with direct pool access"],
    },
    "riu-palace-swahili-zanzibar": {
      seoTitle: "Riu Palace Swahili Zanzibar 2027: adults only",
      seoDescription: "Riu Palace Swahili, an adults-only hotel in Nungwi, Zanzibar. All inclusive with flights, transfers and insurance. 2027 departures and a booking request with nothing to pay online.",
      intro: "Adults-only seafront resort on Nungwi beach on Zanzibar's north coast, with the Elite Club, all inclusive, scheduled flights, transfers and travel insurance.",
      highlights: ["Adults only", "Elite Club", "7 restaurants and 8 bars", "Nungwi beach"],
    },
    "melia-zanzibar": {
      seoTitle: "Meliá Zanzibar 2027: all inclusive with flights",
      seoDescription: "Meliá Zanzibar in Kiwengwa, all inclusive with flights, transfers and insurance. 2027 departures and a booking request with nothing to pay online.",
      intro: "Meliá resort in Kiwengwa on Zanzibar's east coast, all inclusive, with scheduled flights, transfers and travel insurance.",
      highlights: ["Kiwengwa, east coast", "All inclusive", "Pool with sea views", "Rooms with a balcony"],
    },
    "tui-blue-bahari-zanzibar": {
      seoTitle: "TUI BLUE Bahari Zanzibar 2027: all inclusive with flights",
      seoDescription: "TUI BLUE Bahari Zanzibar, all inclusive with flights, transfers and insurance. 2027 departures and a booking request with nothing to pay online.",
      intro: "TUI BLUE Bahari resort in Kiwengwa on Zanzibar's east coast, all inclusive, with scheduled flights, transfers and travel insurance.",
      highlights: ["Kiwengwa, east coast", "All inclusive", "White sand beach", "Main pool"],
    },
  },
  de: {
    "riu-jambo-zanzibar": {
      seoTitle: "Riu Jambo Sansibar 2027: All inclusive mit Flug",
      seoDescription: "Riu Jambo in Nungwi, Sansibar, all inclusive mit Flug, Transfers und Versicherung. Wählen Sie Ihre Abreise 2027 und fragen Sie die Buchung an, ohne online zu bezahlen.",
      intro: "All-inclusive-Resort in erster Strandreihe in Nungwi an der Nordküste Sansibars, mit Linienflug, Transfers und Reiseversicherung.",
      highlights: ["Erste Strandreihe", "All inclusive rund um die Uhr", "Pools und Kinderbecken", "Spa und Fitnessprogramm"],
    },
    "riu-palace-zanzibar": {
      seoTitle: "Riu Palace Zanzibar 2027: All inclusive mit Flug",
      seoDescription: "Riu Palace Zanzibar am Strand von Nungwi, all inclusive mit Flug, Transfers und Versicherung. Abreisen 2027 und Buchungsanfrage ohne Online-Zahlung.",
      intro: "Riu Palace Resort am Strand von Nungwi an der Nordküste Sansibars, All inclusive rund um die Uhr, mit Linienflug, Transfers und Reiseversicherung.",
      highlights: ["Strand von Nungwi", "All inclusive rund um die Uhr", "Spa & Wellness", "Zimmer mit direktem Poolzugang"],
    },
    "riu-palace-swahili-zanzibar": {
      seoTitle: "Riu Palace Swahili Sansibar 2027: nur Erwachsene",
      seoDescription: "Riu Palace Swahili, Hotel nur für Erwachsene in Nungwi, Sansibar. All inclusive mit Flug, Transfers und Versicherung. Abreisen 2027 und Buchungsanfrage ohne Online-Zahlung.",
      intro: "Resort nur für Erwachsene direkt am Meer am Strand von Nungwi an der Nordküste Sansibars, mit Elite Club, all inclusive, Linienflug, Transfers und Reiseversicherung.",
      highlights: ["Nur für Erwachsene", "Elite Club", "7 Restaurants und 8 Bars", "Strand von Nungwi"],
    },
    "melia-zanzibar": {
      seoTitle: "Meliá Sansibar 2027: All inclusive mit Flug",
      seoDescription: "Meliá Zanzibar in Kiwengwa, all inclusive mit Flug, Transfers und Versicherung. Abreisen 2027 und Buchungsanfrage ohne Online-Zahlung.",
      intro: "Meliá Resort in Kiwengwa an der Ostküste Sansibars, all inclusive, mit Linienflug, Transfers und Reiseversicherung.",
      highlights: ["Kiwengwa, Ostküste", "All inclusive", "Pool mit Meerblick", "Zimmer mit Balkon"],
    },
    "tui-blue-bahari-zanzibar": {
      seoTitle: "TUI BLUE Bahari Sansibar 2027: All inclusive mit Flug",
      seoDescription: "TUI BLUE Bahari Zanzibar, all inclusive mit Flug, Transfers und Versicherung. Abreisen 2027 und Buchungsanfrage ohne Online-Zahlung.",
      intro: "TUI BLUE Bahari Resort in Kiwengwa an der Ostküste Sansibars, all inclusive, mit Linienflug, Transfers und Reiseversicherung.",
      highlights: ["Kiwengwa, Ostküste", "All inclusive", "Weißer Sandstrand", "Hauptpool"],
    },
  },
};

// Photo captions used in the alt texts: Portuguese caption -> [es, fr, en, de].
const CAPTIONS: Record<string, readonly [string, string, string, string]> = {
  "vista geral do resort": ["vista general del resort", "vue d'ensemble du resort", "general view of the resort", "Gesamtansicht des Resorts"],
  "piscina": ["piscina", "piscine", "pool", "Pool"],
  "piscina ao ar livre": ["piscina al aire libre", "piscine extérieure", "outdoor pool", "Außenpool"],
  "bar dentro da piscina": ["bar dentro de la piscina", "bar dans la piscine", "swim-up pool bar", "Bar im Pool"],
  "edifício principal": ["edificio principal", "bâtiment principal", "main building", "Hauptgebäude"],
  "lobby": ["vestíbulo", "hall d'entrée", "lobby", "Lobby"],
  "quarto": ["habitación", "chambre", "room", "Zimmer"],
  "restaurante": ["restaurante", "restaurant", "restaurant", "Restaurant"],
  "zona de piscinas": ["zona de piscinas", "espace piscines", "pool area", "Poolbereich"],
  "bar de praia": ["bar de playa", "bar de plage", "beach bar", "Strandbar"],
  "receção": ["recepción", "réception", "reception", "Rezeption"],
  "quarto com acesso à piscina": ["habitación con acceso a la piscina", "chambre avec accès à la piscine", "room with pool access", "Zimmer mit Poolzugang"],
  "spa": ["spa", "spa", "spa", "Spa"],
  "vista aérea do resort": ["vista aérea del resort", "vue aérienne du resort", "aerial view of the resort", "Luftaufnahme des Resorts"],
  "vista aérea da praia": ["vista aérea de la playa", "vue aérienne de la plage", "aerial view of the beach", "Luftaufnahme des Strands"],
  "quarto com vista": ["habitación con vistas", "chambre avec vue", "room with a view", "Zimmer mit Aussicht"],
  "restaurante principal": ["restaurante principal", "restaurant principal", "main restaurant", "Hauptrestaurant"],
  "praia": ["playa", "plage", "beach", "Strand"],
  "vista aérea do resort e do cais": ["vista aérea del resort y del muelle", "vue aérienne du resort et de la jetée", "aerial view of the resort and jetty", "Luftaufnahme von Resort und Steg"],
  "piscina com vista para o mar": ["piscina con vistas al mar", "piscine avec vue sur la mer", "pool with sea view", "Pool mit Meerblick"],
  "quarto com cama de dossel": ["habitación con cama con dosel", "chambre avec lit à baldaquin", "room with a canopy bed", "Zimmer mit Himmelbett"],
  "quarto com varanda": ["habitación con balcón", "chambre avec balcon", "room with a balcony", "Zimmer mit Balkon"],
  "bungalow na falésia": ["bungalow en el acantilado", "bungalow sur la falaise", "cliff-top bungalow", "Bungalow auf der Klippe"],
  "varanda com vista para o oceano": ["balcón con vistas al océano", "balcon avec vue sur l'océan", "balcony with ocean view", "Balkon mit Meerblick"],
  "casa de banho": ["cuarto de baño", "salle de bains", "bathroom", "Badezimmer"],
  "piscina principal": ["piscina principal", "piscine principale", "main pool", "Hauptpool"],
  "vista aérea da piscina": ["vista aérea de la piscina", "vue aérienne de la piscine", "aerial view of the pool", "Luftaufnahme des Pools"],
  "bungalows junto à praia": ["bungalows junto a la playa", "bungalows en bord de plage", "bungalows by the beach", "Bungalows am Strand"],
  "lounge de boas-vindas": ["salón de bienvenida", "salon d'accueil", "welcome lounge", "Willkommens-Lounge"],
  "praia com chapéus de sol": ["playa con sombrillas", "plage avec parasols", "beach with parasols", "Strand mit Sonnenschirmen"],
};

const INDEX: Record<Exclude<LocaleCode, "pt">, number> = { es: 0, fr: 1, en: 2, de: 3 };

/** Alt text for a photo in the given market; falls back to the original caption if none is known. */
export const captionFor = (locale: LocaleCode, caption: string): string =>
  locale === "pt" ? caption : (CAPTIONS[caption]?.[INDEX[locale]] ?? caption);
