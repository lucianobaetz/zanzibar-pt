// Conditions of the TUI package, as supplied by TUI (cotação, 12 nov 2026).
// Keep the meaning identical to TUI's text: this is what the customer is
// contractually told. Any change must be checked against a fresh TUI quote.

export type PriceConditions = {
  includes: readonly string[];
  excludes: string;
  notes: string;
};

export const TUI_PACKAGE_CONDITIONS: PriceConditions = {
  includes: [
    "Passagem aérea em voo regular e em classe económica.",
    "7 noites de alojamento em Zanzibar, hotel e regime conforme selecionado.",
    "Transfers.",
    "Seguro de viagem.",
    "Taxas de aeroporto e de combustível (sujeitas a alteração até à emissão dos bilhetes).",
  ],
  excludes:
    "Suplementos de tarifa aérea para outras classes de reserva e épocas altas, qualquer outro serviço não mencionado e extras de carácter pessoal.",
  notes:
    "O Governo de Zanzibar implementou uma taxa hoteleira que varia entre 2 USD e 5 USD por pessoa e por noite (adultos e crianças), conforme a categoria do hotel selecionado. Esta taxa é cobrada diretamente aos clientes na chegada aos hotéis.",
};
