// Departure months offered in 2027: two Saturday departures per month, except
// March, April and May (rainy season in Zanzibar). Decision of 12 Nov 2026.
// Dates and prices are the same as the Zanzibar trips on vamosfugir.pt (read 13 Nov 2026):
// TUI price per person, double room, 7 nights all inclusive, flight from Lisbon with 1 stop.
// November and December 2027 have no flights on sale at TUI yet.

const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
] as const;

const NO_DEPARTURE_MONTHS = new Set([3, 4, 5]);

export type DepartureMonth = { value: string; label: string };

export const DEPARTURE_MONTHS: readonly DepartureMonth[] = MONTH_NAMES.flatMap((name, index) => {
  const month = index + 1;
  if (NO_DEPARTURE_MONTHS.has(month)) return [];
  return [{ value: `2027-${String(month).padStart(2, "0")}`, label: `${name} de 2027` }];
});

export const monthLabel = (value: string | undefined): string | null =>
  DEPARTURE_MONTHS.find((month) => month.value === value)?.label ?? null;

export type Departure = { date: string; price: number };

const D = ["2027-01-09", "2027-01-23", "2027-02-13", "2027-02-27", "2027-06-12", "2027-06-26", "2027-07-10", "2027-07-24", "2027-08-14", "2027-08-28", "2027-09-11", "2027-09-25", "2027-10-09", "2027-10-23"] as const;

const series = (prices: readonly number[]): readonly Departure[] =>
  D.map((date, index) => ({ date, price: prices[index] ?? 0 }));

// Price per person (euros) for each departure date, by hotel slug.
export const DEPARTURES: Readonly<Record<string, readonly Departure[]>> = {
  "riu-jambo-zanzibar": series([2730, 2579, 2650, 2595, 2196, 2325, 2683, 2810, 2959, 2690, 2378, 2378, 2378, 2416]),
  "riu-palace-zanzibar": series([2962, 2811, 2891, 2890, 2516, 2669, 3057, 3184, 3334, 3058, 2742, 2742, 2742, 2779]),
  "riu-palace-swahili-zanzibar": series([2936, 2786, 2865, 2864, 2569, 2735, 3141, 3268, 3417, 3131, 2807, 2807, 2807, 2845]),
  "melia-zanzibar": series([3214, 3023, 3295, 3119, 2948, 3151, 3692, 3767, 4055, 3429, 2907, 2907, 2907, 3014]),
  "tui-blue-bahari-zanzibar": series([2890, 2470, 2325, 2325, 2171, 2279, 2607, 2734, 2884, 2612, 2299, 2327, 2395, 2432]),
};

export const departuresFor = (slug: string): readonly Departure[] => DEPARTURES[slug] ?? [];

export const lowestPrice = (slug: string): number | null => {
  const prices = departuresFor(slug).map((departure) => departure.price);
  return prices.length ? Math.min(...prices) : null;
};
