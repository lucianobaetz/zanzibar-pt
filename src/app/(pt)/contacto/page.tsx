import type { Metadata } from "next";
import { alternatesFor } from "@/i18n/seo";
import { ContactView } from "@/views/ContactView";

const TITLE = "Contactos: viagens a Zanzibar";
const DESCRIPTION = "Fale connosco sobre a sua viagem a Zanzibar: WhatsApp, telefone e e-mail. Vamos Fugir, licença RNAVT 4155.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("pt", "contact"),
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contacto" },
};

export default function ContactPage() {
  return <ContactView />;
}
