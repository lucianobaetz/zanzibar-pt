"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Section = { id: string; title: string };

const label = "text-[11px] font-bold uppercase tracking-[0.2em] text-clove-600";
const iconButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-ocean-900 transition hover:border-ocean-900 hover:bg-ocean-900 hover:text-white";

/** Sticky reading aid: where you are in the article, its topics and ways to share it. */
export const ArticleSidebar = ({ sections, tags, title, path }: { sections: readonly Section[]; tags: readonly string[]; title: string; path: string }) => {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const headings = sections.map((section) => document.getElementById(section.id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-90px 0px -65% 0px" },
    );
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [sections]);

  const url = () => `${window.location.origin}${path}`;
  const share = (target: "facebook" | "x" | "mail") => {
    const link = encodeURIComponent(url());
    const text = encodeURIComponent(title);
    const href = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      x: `https://twitter.com/intent/tweet?url=${link}&text=${text}`,
      mail: `mailto:?subject=${text}&body=${link}`,
    }[target];
    window.open(href, target === "mail" ? "_self" : "_blank", "noopener,noreferrer");
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };

  return (
    <aside aria-label="Neste artigo" className="hidden lg:block">
      <div className="sticky top-24 space-y-8">
        {sections.length > 1 ? (
          <nav aria-labelledby="neste-artigo">
            <p id="neste-artigo" className={label}>Neste artigo</p>
            <ol className="mt-4 border-l border-sand-200">
              {sections.map((section) => {
                const current = section.id === active;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={current ? "location" : undefined}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15px] leading-snug transition-colors ${
                        current ? "border-clove-600 font-semibold text-ocean-900" : "border-transparent text-ink-soft hover:text-ocean-900"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div>
          <p className={label}>Temas</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={tag}>
                <Link
                  href="/blog"
                  className={`inline-block rounded-full border px-3.5 py-1.5 text-sm first-letter:uppercase transition ${
                    index === 0 ? "border-clove-600 bg-clove-600 text-white" : "border-sand-200 text-ink-soft hover:border-ocean-900 hover:text-ocean-900"
                  }`}
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={label}>Partilhar</p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={() => share("facebook")} aria-label="Partilhar no Facebook" className={iconButton}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.3-1.6 1.6-1.6h1.8V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v2.3H7v3.3h2.9V22h3.6z" /></svg>
            </button>
            <button type="button" onClick={() => share("x")} aria-label="Partilhar no X" className={iconButton}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.9 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" /></svg>
            </button>
            <button type="button" onClick={() => share("mail")} aria-label="Partilhar por e-mail" className={iconButton}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            </button>
            <button type="button" onClick={copy} aria-label="Copiar ligação" className={iconButton}>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" /></svg>
            </button>
          </div>
          <p role="status" className="mt-2 h-4 text-xs font-semibold text-lagoon-500">{copied ? "Ligação copiada" : ""}</p>
        </div>
      </div>
    </aside>
  );
};
