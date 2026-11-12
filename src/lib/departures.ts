// Departure months offered in 2027: two Saturday departures per month, except
// March, April and May (rainy season in Zanzibar). Decision of 12 Nov 2026.
// Exact dates and prices arrive with the TUI table.

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
