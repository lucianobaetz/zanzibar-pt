import { JsonLd } from "@/components/JsonLd";
import type { Faq } from "@/content/faq";

type FaqSectionProps = { id: string; title: string; items: readonly Faq[] };

// The same list feeds the visible accordion and the FAQPage structured data.
export const FaqSection = ({ id, title, items }: FaqSectionProps) => (
  <section aria-labelledby={id} className="mx-auto max-w-3xl">
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
    <h2 id={id} className="font-display text-3xl font-semibold text-ocean-900 sm:text-4xl">
      {title}
    </h2>
    <div className="mt-6 divide-y divide-sand-200 rounded-3xl border border-sand-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ocean-900">
            <h3 className="text-lg">{item.question}</h3>
            <span aria-hidden className="text-2xl leading-none text-clove-500 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-relaxed text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
);
