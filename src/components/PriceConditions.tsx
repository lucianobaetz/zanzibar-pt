import { DEFAULT_LOCALE, type LocaleCode } from "@/i18n/locales";
import { getMessages } from "@/i18n/messages";

export const PriceConditions = ({ locale = DEFAULT_LOCALE }: { locale?: LocaleCode }) => {
  const t = getMessages(locale).conditions;
  return (
    <section aria-labelledby="condicoes" className="rounded-3xl border border-sand-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 id="condicoes" className="font-display text-2xl font-semibold text-ocean-900">
        {t.title}
      </h2>

      <div className="mt-5 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-lagoon-500">{t.includesTitle}</h3>
          <ul className="mt-3 space-y-2.5">
            {t.includes.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lagoon-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-clove-500">{t.excludesTitle}</h3>
            <p className="mt-3 text-[15px] leading-relaxed">{t.excludes}</p>
          </div>
          <div className="rounded-2xl bg-sand-100 p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-700">{t.notesTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.notes}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
