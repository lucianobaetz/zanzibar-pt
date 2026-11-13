import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ZanzibarMap } from "@/components/ZanzibarMap";
import type { Block } from "@/content/blog/types";

// Inline format: **bold** and [text](/internal-path).
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

const Inline = ({ text }: { text: string }) => (
  <>
    {text.split(INLINE).map((part, index) => {
      if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (link) {
        return (
          <Link key={index} href={link[2] ?? "/"} className="font-semibold text-clove-600 underline underline-offset-4 hover:text-clove-500">
            {link[1]}
          </Link>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    })}
  </>
);

export const RichText = ({ blocks }: { blocks: readonly Block[] }) => (
  <div className="space-y-5 text-[17px] leading-[1.75] text-ink">
    {blocks.map((block, index) => {
      switch (block.type) {
        case "h2":
          return (
            <h2 key={index} className="pt-6 font-display text-3xl font-semibold text-ocean-900">
              {block.text}
            </h2>
          );
        case "h3":
          return (
            <h3 key={index} className="pt-2 font-display text-xl font-semibold text-ocean-900">
              {block.text}
            </h3>
          );
        case "p":
          return (
            <p key={index}>
              <Inline text={block.text} />
            </p>
          );
        case "ul":
          return (
            <ul key={index} className="space-y-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-lagoon-500" />
                  <span>
                    <Inline text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        case "note":
          return (
            <aside key={index} className="rounded-2xl border border-spice-400/50 bg-sand-100 p-5 text-[15px] leading-relaxed text-ink">
              <Inline text={block.text} />
            </aside>
          );
        case "image":
          return (
            <figure key={index} className="overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/9]">
                <Image src={block.src} alt={block.alt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
              </div>
              {block.caption ? <figcaption className="bg-sand-100 px-4 py-2 text-sm text-ink-soft">{block.caption}</figcaption> : null}
            </figure>
          );
        case "table":
          return (
            <div key={index} className="overflow-x-auto rounded-2xl border border-sand-200 bg-white">
              <table className="w-full min-w-[32rem] text-left text-[15px]">
                <thead className="bg-sand-100 text-xs font-bold uppercase tracking-wider text-ocean-900">
                  <tr>
                    {block.head.map((cell) => (
                      <th key={cell} scope="col" className="px-4 py-3">
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")} className="border-t border-sand-200 align-top">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-4 py-3 ${cellIndex === 0 ? "font-semibold text-ocean-900" : ""}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        case "map":
          return <ZanzibarMap key={index} />;
      }
    })}
  </div>
);
