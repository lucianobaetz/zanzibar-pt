"use client";

import { usePathname } from "next/navigation";
import { LOCALES, type LocaleCode } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";
import { equivalentPath } from "@/i18n/routes";

const ORDER: readonly LocaleCode[] = ["pt", "es", "fr", "en", "de"];

export const LanguageSwitcher = ({ locale }: { locale: LocaleCode }) => {
  const pathname = usePathname();
  const label = getMessages(locale).common.language;
  return (
    <details className="group relative">
      <summary
        aria-label={label}
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-ocean-900 hover:bg-sand-100 [&::-webkit-details-marker]:hidden"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
        </svg>
        <span className="uppercase">{locale}</span>
      </summary>
      <ul className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-sand-200 bg-white py-1 shadow-lg">
        {ORDER.filter((code) => LOCALES[code].enabled).map((code) => (
          <li key={code}>
            <a
              href={equivalentPath(pathname, code)}
              hrefLang={LOCALES[code].hreflang}
              lang={code}
              aria-current={code === locale ? "true" : undefined}
              className={`block px-4 py-2 text-sm hover:bg-sand-100 ${code === locale ? "font-bold text-ocean-900" : "text-ink"}`}
            >
              {LOCALES[code].language}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};
