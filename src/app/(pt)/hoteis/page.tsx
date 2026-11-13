import type { Metadata } from "next";
import { HOTELS } from "@/content/hotels";
import { alternatesFor } from "@/i18n/seo";
import { HotelsView } from "@/views/HotelsView";

const TITLE = "Hotéis em Zanzibar 2027: tudo incluído com voo de Lisboa";
const DESCRIPTION =
  "Riu Jambo, Riu Palace Zanzibar, Riu Palace Swahili, Meliá Zanzibar e TUI BLUE Bahari: tudo incluído com voo de Lisboa, transfers e seguro.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor("pt", "hotels"),
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/hoteis", images: [{ url: HOTELS[0]?.images[0]?.src ?? "" }] },
};

export default function HotelsPage() {
  return <HotelsView />;
}
