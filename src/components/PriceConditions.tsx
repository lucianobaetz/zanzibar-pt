import { TUI_PACKAGE_CONDITIONS } from "@/content/inclusions";

export const PriceConditions = () => (
  <section aria-labelledby="condicoes" className="rounded-3xl border border-sand-200 bg-white p-6 shadow-sm sm:p-8">
    <h2 id="condicoes" className="font-display text-2xl font-semibold text-ocean-900">
      O que inclui o preço
    </h2>

    <div className="mt-5 grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-lagoon-500">O nosso preço inclui</h3>
        <ul className="mt-3 space-y-2.5">
          {TUI_PACKAGE_CONDITIONS.includes.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
              <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lagoon-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-clove-500">O preço não inclui</h3>
          <p className="mt-3 text-[15px] leading-relaxed">{TUI_PACKAGE_CONDITIONS.excludes}</p>
        </div>
        <div className="rounded-2xl bg-sand-100 p-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-700">Observações</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{TUI_PACKAGE_CONDITIONS.notes}</p>
        </div>
      </div>
    </div>
  </section>
);
