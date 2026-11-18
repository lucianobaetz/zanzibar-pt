"use client";

import { useState } from "react";
import type { LocaleCode } from "@/i18n/locales";

// WhatsApp with the country code chosen from the visitor's browser (owner, 18 Nov 2026: "tem de aparecer o indicativo
// de acordo com a origem do navegador"). The browser language region wins (fr-BE → Belgium); without a region, the page
// language decides (/fr → France). The visitor can change it. The value sent is "+<code><number>".
const COUNTRIES = [
  ["PT", "🇵🇹", "351"], ["ES", "🇪🇸", "34"], ["FR", "🇫🇷", "33"], ["DE", "🇩🇪", "49"], ["GB", "🇬🇧", "44"], ["IE", "🇮🇪", "353"],
  ["IT", "🇮🇹", "39"], ["NL", "🇳🇱", "31"], ["BE", "🇧🇪", "32"], ["LU", "🇱🇺", "352"], ["CH", "🇨🇭", "41"], ["AT", "🇦🇹", "43"],
  ["DK", "🇩🇰", "45"], ["SE", "🇸🇪", "46"], ["NO", "🇳🇴", "47"], ["PL", "🇵🇱", "48"], ["BR", "🇧🇷", "55"], ["US", "🇺🇸", "1"],
  ["CA", "🇨🇦", "1"], ["AO", "🇦🇴", "244"], ["MZ", "🇲🇿", "258"], ["CV", "🇨🇻", "238"], ["ST", "🇸🇹", "239"], ["AE", "🇦🇪", "971"],
  ["TZ", "🇹🇿", "255"], ["ZA", "🇿🇦", "27"],
] as const;
type Country = (typeof COUNTRIES)[number][0];
const BY_LOCALE: Record<string, Country> = { pt: "PT", es: "ES", fr: "FR", de: "DE", en: "GB" };

export const guessCountry = (languages: readonly string[], locale: string): Country => {
  for (const tag of languages) {
    const region = tag.split("-")[1]?.toUpperCase();
    const hit = COUNTRIES.find(([c]) => c === region);
    if (hit) return hit[0];
  }
  return BY_LOCALE[locale] ?? "PT";
};

const dial = (c: Country) => COUNTRIES.find(([x]) => x === c)?.[2] ?? "351";

/** "+351 912…" typed whole is kept; otherwise the chosen code goes in front (a leading 0 is dropped). */
export const withCode = (country: Country, number: string): string => {
  const raw = number.trim();
  if (!raw) return "";
  if (raw.startsWith("+") || raw.startsWith("00")) return raw.replace(/^00/, "+");
  return `+${dial(country)} ${raw.replace(/^0+/, "")}`;
};

type Props = { id: string; locale: LocaleCode; className: string; invalid?: boolean; onChange: (value: string) => void };

export const PhoneField = ({ id, locale, className, invalid, onChange }: Props) => {
  // The form is only filled in the browser, so the guess is taken on first render there (the server keeps the page language).
  const [country, setCountry] = useState<Country>(() => (typeof navigator === "undefined" ? (BY_LOCALE[locale] ?? "PT") : guessCountry(navigator.languages ?? [navigator.language], locale)));
  const [number, setNumber] = useState("");
  const update = (c: Country, n: string) => {
    setCountry(c);
    setNumber(n);
    onChange(withCode(c, n));
  };
  return (
    <div className="flex gap-2">
      <select aria-label="Indicativo" suppressHydrationWarning value={country} onChange={(e) => update(e.target.value as Country, number)} className={`${className} w-[7.5rem] shrink-0 px-2`}>
        {COUNTRIES.map(([c, flag, code]) => (
          <option key={c} value={c}>{`${flag} +${code}`}</option>
        ))}
      </select>
      <input id={id} name={id} type="tel" autoComplete="tel-national" placeholder="912 345 678" value={number} onChange={(e) => update(country, e.target.value)} className={className} aria-invalid={invalid} />
    </div>
  );
};
