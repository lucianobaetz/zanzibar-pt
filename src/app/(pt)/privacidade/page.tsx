import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Política de privacidade | Zanzibar Resorts" },
  description: "Como tratamos os dados dos pedidos de reserva feitos em zanzibar.pt.",
  alternates: { canonical: "/privacidade" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="text-4xl font-semibold text-ocean-900">Política de privacidade</h1>
      <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
        <p>
          O site zanzibar.pt é operado por {SITE.legalName} (RNAVT {SITE.rnavt}). Esta página explica que dados pedimos quando faz um pedido de reserva e o que fazemos com eles.
        </p>
        <h2 className="text-2xl font-semibold text-ocean-900">Que dados recolhemos</h2>
        <p>
          Nome, e-mail, número de WhatsApp, hotel e data escolhidos, número de adultos e crianças e a idade das crianças. Não recolhemos dados de pagamento: o pedido de reserva não implica pagamento online.
        </p>
        <h2 className="text-2xl font-semibold text-ocean-900">Para que os usamos</h2>
        <p>
          Apenas para responder ao seu pedido: confirmar disponibilidade e preço com o operador (TUI), contactá-lo por e-mail ou WhatsApp e tratar da reserva, se a confirmar. Não usamos os dados para publicidade nem os vendemos.
        </p>
        <h2 className="text-2xl font-semibold text-ocean-900">Quem recebe os dados</h2>
        <p>
          A nossa equipa e, quando a reserva avança, o operador turístico e os prestadores necessários para a viagem (companhia aérea e hotel).
        </p>
        <h2 className="text-2xl font-semibold text-ocean-900">Durante quanto tempo</h2>
        <p>
          Guardamos o pedido o tempo necessário para o tratar e para cumprir as obrigações legais da atividade de agência de viagens.
        </p>
        <h2 className="text-2xl font-semibold text-ocean-900">Os seus direitos</h2>
        <p>
          Pode pedir o acesso, a correção ou o apagamento dos seus dados, ou retirar a autorização, escrevendo para <a className="font-semibold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>. Pode também apresentar reclamação à Comissão Nacional de Proteção de Dados (cnpd.pt).
        </p>
      </div>
    </div>
  );
}
