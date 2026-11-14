"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const NewsletterCard = ({ source }: { source: string }) => {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [invalid, setInvalid] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) return setInvalid(true);
    setInvalid(false);
    setStatus("sending");
    try {
      const response = await fetch("/api/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "newsletter", email, source, website }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section aria-labelledby="newsletter-title" className="rounded-3xl bg-ocean-900 p-7 text-sand-100 shadow-lg">
      <h2 id="newsletter-title" className="font-display text-2xl font-semibold leading-snug text-white">
        Receba as nossas partidas antes de toda a gente
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-sand-100/80">Novas datas, vagas de última hora e dicas para Zanzibar.</p>
      {status === "sent" ? (
        <p role="status" className="mt-5 rounded-2xl bg-white/10 p-4 font-semibold text-white">Subscrição feita. Obrigado! Enviámos-lhe um e-mail de confirmação.</p>
      ) : (
        <form onSubmit={submit} noValidate className="mt-5 space-y-3">
          <label htmlFor="newsletter-email" className="sr-only">O seu e-mail</label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="O seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={invalid}
            className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-sand-100/60 focus:border-white"
          />
          <div aria-hidden className="absolute -left-[9999px]">
            <label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label>
          </div>
          {invalid ? <p className="text-sm font-semibold text-clove-100">Escreva um e-mail válido.</p> : null}
          <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-white px-5 py-3 font-bold text-ocean-900 transition hover:bg-sand-100 active:scale-[0.98] disabled:opacity-60">
            {status === "sending" ? "A enviar…" : "Subscrever"}
          </button>
          {status === "error" ? <p role="alert" className="text-sm font-semibold text-clove-100">Não foi possível subscrever agora. Tente mais tarde.</p> : null}
          <p className="text-xs leading-relaxed text-sand-100/70">
            Sem spam. Pode cancelar quando quiser. <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </p>
        </form>
      )}
    </section>
  );
};
