import { HOTEL_AREAS } from "@/content/hotels";
import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { fmt, getMessages } from "@/i18n/messages";
import { pathFor } from "@/i18n/routes";
import { DEPARTURE_MONTHS } from "@/lib/departures";

type SearchBarProps = { variant?: "hero" | "inline"; locale?: LocaleCode; defaults?: { zona?: string; mes?: string; adultos?: string; criancas?: string } };

const field = "w-full rounded-xl border border-sand-200 bg-white px-3 py-2.5 text-sm font-semibold text-ocean-900 outline-none focus:border-lagoon-500";
const label = "mb-1 block text-[11px] font-bold uppercase tracking-widest text-ocean-700";

// Plain GET form: works without JavaScript and makes every search a crawlable URL.
export const SearchBar = ({ variant = "hero", locale = DEFAULT_LOCALE, defaults = {} }: SearchBarProps) => {
  const t = getMessages(locale);
  return (
  <form
    action={pathFor(locale, "hotels")}
    method="get"
    role="search"
    aria-label={t.search.aria}
    className={
      variant === "hero"
        ? "grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.7fr_0.7fr_auto] lg:items-end"
        : "grid grid-cols-2 gap-3 rounded-3xl border border-sand-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.7fr_0.7fr_auto] lg:items-end"
    }
  >
    <div className="col-span-2 sm:col-span-1">
      <label htmlFor={`zona-${variant}`} className={label}>{t.search.zone}</label>
      <select id={`zona-${variant}`} name="zona" defaultValue={defaults.zona ?? ""} className={field}>
        <option value="">{t.search.allIsland}</option>
        {HOTEL_AREAS.map((area) => (
          <option key={area} value={area}>{area}</option>
        ))}
      </select>
    </div>
    <div className="col-span-2 sm:col-span-1">
      <label htmlFor={`mes-${variant}`} className={label}>{t.search.month}</label>
      <select id={`mes-${variant}`} name="mes" defaultValue={defaults.mes ?? ""} className={field}>
        <option value="">{t.search.anyMonth}</option>
        {DEPARTURE_MONTHS.map((month) => (
          <option key={month.value} value={month.value}>{fmt(t.monthYear, { month: t.months[Number(month.value.slice(5, 7)) - 1] ?? month.label, year: 2027 })}</option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor={`adultos-${variant}`} className={label}>{t.search.adults}</label>
      <select id={`adultos-${variant}`} name="adultos" defaultValue={defaults.adultos ?? "2"} className={field}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor={`criancas-${variant}`} className={label}>{t.search.children}</label>
      <select id={`criancas-${variant}`} name="criancas" defaultValue={defaults.criancas ?? "0"} className={field}>
        {[0, 1, 2, 3, 4].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
    <button
      type="submit"
      className="col-span-2 rounded-xl bg-clove-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-clove-600"
    >
      {t.search.submit}
    </button>
  </form>
);
};
