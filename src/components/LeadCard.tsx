"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FROM_PRICE, eur } from "@/content/blog/shared";
import { validateLead } from "@/lib/booking";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const input = "w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-[15px] text-ocean-900 outline-none placeholder:text-ink-soft/60 focus:border-lagoon-500 focus:ring-2 focus:ring-lagoon-500/20";
const label = "mb-1 block text-[13px] font-semibold text-ocean-900";
const errorText = "mt-1 text-xs font-semibold text-clove-600";

/** Postcard-style form placed inside articles: the reader asks for 2027 dates and prices. */
export const LeadCard = ({ source }: { source: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const found = validateLead({ name, email, whatsapp, consent, source });
  const errors = submitted ? found : {};

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (Object.values(found).some(Boolean)) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "lead", name, email, whatsapp, consent, source: `/blog/${source}`, website }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby="lead-title"
      className="not-prose relative my-10 overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-lg"
    >
      <div aria-hidden className="h-2 w-full bg-[repeating-linear-gradient(135deg,var(--color-clove-600)_0_14px,var(--color-sand-100)_14px_22px,var(--color-lagoon-500)_22px_36px,var(--color-sand-100)_36px_44px)]" />
      <div className="grid md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative hidden bg-sand-100 md:block">
          <div className="absolute left-5 top-8 -rotate-3 rounded-sm bg-white p-2 pb-8 shadow-xl">
            <div className="relative h-56 w-48">
              <Image src="/images/destino/dhow-veleiro.webp" alt="Veleiro tradicional em Zanzibar" fill sizes="200px" className="object-cover" />
            </div>
            <p className="mt-2 text-center font-display text-sm italic text-ink-soft">Zanzibar, 2027</p>
          </div>
          <div aria-hidden className="absolute bottom-6 right-6 flex h-20 w-20 rotate-6 items-center justify-center rounded-full border-2 border-dashed border-clove-600/70 text-center text-[10px] font-bold uppercase leading-tight tracking-wider text-clove-600">
            Lisboa
            <br />→ Zanzibar
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {status === "sent" ? (
            <div role="status" className="py-6">
              <p className="text-xs font-bold uppercase tracking-widest text-lagoon-500">Pedido enviado</p>
              <h2 id="lead-title" className="mt-2 font-display text-3xl font-semibold text-ocean-900">Obrigado, {name.split(" ")[0]}!</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink">
                Estamos a tratar de todo o processo e logo que possível confirmamos. Enviámos-lhe um e-mail com o resumo.
              </p>
              <Link href="/hoteis" className="mt-5 inline-block font-semibold text-clove-600 underline underline-offset-4">
                Ver já o calendário de cada hotel →
              </Link>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <p className="text-xs font-bold uppercase tracking-widest text-clove-600">Gostou deste guia?</p>
              <h2 id="lead-title" className="mt-2 font-display text-3xl font-semibold leading-tight text-ocean-900">
                Receba as datas e os preços de Zanzibar 2027
              </h2>
              <p className="mt-2 text-[15px] text-ink-soft">
                Voo de Lisboa, 7 noites tudo incluído e transfers{FROM_PRICE ? <>, desde <strong className="text-ocean-900">{eur(FROM_PRICE)}</strong> por pessoa</> : null}. Sem pagamento agora.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="lead-name" className={label}>Nome</label>
                  <input id="lead-name" className={input} placeholder="O seu nome" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <p className={errorText}>{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="lead-email" className={label}>E-mail</label>
                  <input id="lead-email" type="email" className={input} placeholder="nome@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={Boolean(errors.email)} />
                  {errors.email ? <p className={errorText}>{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="lead-whatsapp" className={label}>WhatsApp</label>
                  <input id="lead-whatsapp" type="tel" className={input} placeholder="+351 912 345 678" autoComplete="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} aria-invalid={Boolean(errors.whatsapp)} />
                  {errors.whatsapp ? <p className={errorText}>{errors.whatsapp}</p> : null}
                </div>
                <div aria-hidden className="absolute -left-[9999px]">
                  <label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} /></label>
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-clove-600" />
                  <span>
                    Aceito a <Link href="/privacidade" className="underline underline-offset-2">Política de Privacidade</Link> e que me contactem sobre este pedido.
                  </span>
                </label>
                {errors.consent ? <p className={errorText}>{errors.consent}</p> : null}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-clove-600 px-6 py-3.5 text-[15px] font-bold text-white shadow-md transition hover:bg-clove-500 active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending" ? "A enviar…" : "Enviar-me as datas e preços →"}
              </button>
              {status === "error" ? (
                <p role="alert" className="mt-3 text-sm font-semibold text-clove-600">
                  Não foi possível enviar neste momento. Ligue-nos para {SITE.phoneDisplay} ou escreva para {SITE.email}.
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
