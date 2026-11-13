import type { Metadata } from "next";
import { alternatesFor } from "@/i18n/seo";
import { HomeView } from "@/views/HomeView";

// Provisional SEO copy: final wording follows the Portugal keyword research.
const TITLE = "Férias em Zanzibar tudo incluído com voo de Lisboa";
const DESCRIPTION =
  "Zanzibar tudo incluído com voo de Lisboa, transfers e seguro. 5 resorts selecionados, partidas em 2027 e pedido de reserva sem pagar online.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor("pt", "home"),
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/", images: [{ url: "/images/destino/the-rock-topo.webp", alt: "The Rock, o restaurante sobre o mar em Zanzibar" }] },
};

export default function HomePage() {
  return <HomeView />;
}
