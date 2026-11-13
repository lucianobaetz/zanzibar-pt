import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";
import { formatEuro, longDate, type BookingInput } from "@/lib/booking";
import { SITE } from "@/lib/site";

export type StoredRequest = BookingInput & { hotelName: string; pricePerPerson: number; receivedAt: string; ip: string };

const esc = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);

// Every request is written to disk first, so a mail problem can never lose a customer.
export const saveRequest = async (request: StoredRequest): Promise<void> => {
  const dir = process.env.REQUESTS_DIR ?? "/var/lib/zanzibar-pt";
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "pedidos.jsonl"), `${JSON.stringify(request)}\n`, "utf8");
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
    `Partida de Lisboa: ${longDate(request.date)} · 7 noites · tudo incluído`,
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
      "Partida: Lisboa · voo mais barato com 1 escala · quarto duplo.",
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
