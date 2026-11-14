import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { airportLabel } from "@/lib/airports";
import { formatEuro, longDate, type BookingInput, type LeadInput } from "@/lib/booking";
import { SITE } from "@/lib/site";

export type StoredRequest = BookingInput & { hotelName: string; pricePerPerson: number; receivedAt: string; ip: string };

export type StoredLead = LeadInput & { receivedAt: string; ip: string };

const esc = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

// Every request is written to disk first, so a mail problem can never lose a customer.
export const saveRequest = async (request: StoredRequest | StoredLead | Record<string, unknown>, file = "pedidos.jsonl"): Promise<void> => {
  const dir = process.env.REQUESTS_DIR ?? "/var/lib/zanzibar-pt";
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, file), `${JSON.stringify(request)}\n`, "utf8");
};

const transport = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
};

const summaryLines = (request: StoredRequest): string[] => {
  const children = request.childAges.length > 0 ? `${request.childAges.length} (idades: ${request.childAges.join(", ")})` : "0";
  return [
    `Hotel: ${request.hotelName}`,
    `Partida de ${airportLabel(request.airport)}: ${longDate(request.date)} · 7 noites · tudo incluído`,
    `Adultos: ${request.adults}`,
    `Crianças: ${children}`,
    `Preço: ${formatEuro(request.pricePerPerson)} por pessoa (${formatEuro(request.pricePerPerson * request.adults)} para ${request.adults} adulto${request.adults === 1 ? "" : "s"}); crianças sob consulta`,
  ];
};

// Returns true when both e-mails were handed to the mail server.
export const sendEmails = async (request: StoredRequest): Promise<boolean> => {
  const mail = transport();
  if (!mail) return false;

  const from = process.env.SMTP_FROM ?? `${SITE.name} <${process.env.SMTP_USER}>`;
  const team = process.env.REQUESTS_TO ?? SITE.email;
  const lines = summaryLines(request);

  await mail.sendMail({
    from,
    to: team,
    replyTo: request.email,
    subject: `Pedido de reserva Zanzibar: ${request.hotelName} · ${request.date} · ${request.name}`,
    text: [
      "Novo pedido de reserva no zanzibar.pt (pré-reserva, sem pagamento online).",
      "",
      ...lines,
      "",
      `Nome: ${request.name}`,
      `E-mail: ${request.email}`,
      `WhatsApp: ${request.whatsapp}`,
      "",
      "Cotar na TUI: https://pt.tui.com/single_product.php?pkt_id=33&Produto=Zanzibar&destino=TANZ%C3%82NIA",
      `Partida: ${airportLabel(request.airport)} · voo mais barato · quarto duplo.`,
    ].join("\n"),
  });

  await mail.sendMail({
    from,
    to: request.email,
    replyTo: SITE.email,
    subject: `Recebemos o seu pedido de reserva: ${request.hotelName}`,
    text: [
      `Olá, ${request.name.split(" ")[0]}!`,
      "",
      "Estamos a tratar de todo o processo e logo que possível confirmamos.",
      "",
      "Resumo do seu pedido:",
      ...lines,
      "",
      "Este pedido é uma pré-reserva: não paga nada agora. Um agente vai contactá-lo para confirmar a disponibilidade e o preço final antes de a reserva ficar confirmada.",
      "",
      `${SITE.name} · ${SITE.phoneDisplay} · ${SITE.email}`,
    ].join("\n"),
    html: `<p>Olá, ${esc(request.name.split(" ")[0] ?? "")}!</p><p><strong>Estamos a tratar de todo o processo e logo que possível confirmamos.</strong></p><p>Resumo do seu pedido:</p><ul>${lines.map((line) => `<li>${esc(line)}</li>`).join("")}</ul><p>Este pedido é uma pré-reserva: não paga nada agora. Um agente vai contactá-lo para confirmar a disponibilidade e o preço final antes de a reserva ficar confirmada.</p><p>${esc(SITE.name)} · ${esc(SITE.phoneDisplay)} · ${esc(SITE.email)}</p>`,
  });
  return true;
};

// Reader of a blog article asked for dates and prices. Returns true when both e-mails were handed to the mail server.
export const sendLeadEmails = async (lead: StoredLead): Promise<boolean> => {
  const mail = transport();
  if (!mail) return false;

  const from = process.env.SMTP_FROM ?? `${SITE.name} <${process.env.SMTP_USER}>`;
  const team = process.env.REQUESTS_TO ?? SITE.email;

  await mail.sendMail({
    from,
    to: team,
    replyTo: lead.email,
    subject: `Pedido de datas e preços Zanzibar (blog): ${lead.name}`,
    text: [
      "Um leitor do blog pediu as datas e os preços de Zanzibar 2027 (sem escolher hotel).",
      "",
      `Nome: ${lead.name}`,
      `E-mail: ${lead.email}`,
      `WhatsApp: ${lead.whatsapp}`,
      `Artigo: ${lead.source}`,
    ].join("\n"),
  });

  await mail.sendMail({
    from,
    to: lead.email,
    replyTo: SITE.email,
    subject: "Zanzibar 2027: as datas e os preços que pediu",
    text: [
      `Olá, ${lead.name.split(" ")[0]}!`,
      "",
      "Estamos a tratar de todo o processo e logo que possível confirmamos.",
      "",
      "Vamos enviar-lhe as partidas de Lisboa em 2027 e os preços por hotel, tudo incluído, com voo e transfers. Se preferir, pode ver já o calendário em https://zanzibar.pt/hoteis",
      "",
      `${SITE.name} · ${SITE.phoneDisplay} · ${SITE.email}`,
    ].join("\n"),
    html: `<p>Olá, ${esc(lead.name.split(" ")[0] ?? "")}!</p><p><strong>Estamos a tratar de todo o processo e logo que possível confirmamos.</strong></p><p>Vamos enviar-lhe as partidas de Lisboa em 2027 e os preços por hotel, tudo incluído, com voo e transfers. Se preferir, pode ver já o <a href="https://zanzibar.pt/hoteis">calendário de cada hotel</a>.</p><p>${esc(SITE.name)} · ${esc(SITE.phoneDisplay)} · ${esc(SITE.email)}</p>`,
  });
  return true;
};

export const sendNewsletterEmails = async (email: string, source: string): Promise<boolean> => {
  const mail = transport();
  if (!mail) return false;
  const from = process.env.SMTP_FROM ?? `${SITE.name} <${process.env.SMTP_USER}>`;
  await mail.sendMail({
    from,
    to: process.env.REQUESTS_TO ?? SITE.email,
    replyTo: email,
    subject: `Nova subscrição da newsletter: ${email}`,
    text: `Nova subscrição.\nE-mail: ${email}\nArtigo: ${source}`,
  });
  await mail.sendMail({
    from,
    to: email,
    replyTo: SITE.email,
    subject: "Subscrição confirmada: partidas de Zanzibar",
    text: ["Obrigado por subscrever!", "", "Vamos enviar-lhe as novas datas de partida, as vagas de última hora e dicas para Zanzibar.", "", `${SITE.name} · ${SITE.phoneDisplay} · ${SITE.email}`].join("\n"),
  });
  return true;
};
