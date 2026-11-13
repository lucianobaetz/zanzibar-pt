import { HOTELS } from "@/content/hotels";
import { validateBooking, normalizeWhatsapp, type BookingInput } from "@/lib/booking";
import { departuresFor } from "@/lib/departures";
import { saveRequest, sendEmails, type StoredRequest } from "@/lib/pedidos";

const rules = Object.fromEntries(HOTELS.map((hotel) => [hotel.slug, { adultsOnly: hotel.adultsOnly }]));

// Small in-memory limit per address: 6 requests every 10 minutes.
const recent = new Map<string, number[]>();
const tooMany = (ip: string): boolean => {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((time) => now - time < 10 * 60 * 1000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 6;
};

const text = (value: unknown, max: number): string => (typeof value === "string" ? value.slice(0, max) : "");

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (tooMany(ip)) return Response.json({ ok: false, error: "Demasiados pedidos. Tente mais tarde." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Pedido inválido." }, { status: 400 });
  }

  // Robots fill the hidden field; answer "ok" so they learn nothing.
  if (text(body.website, 200) !== "") return Response.json({ ok: true });

  const childAges = Array.isArray(body.childAges) ? body.childAges.map(Number) : [];
  const input: BookingInput = {
    hotelSlug: text(body.hotelSlug, 80),
    date: text(body.date, 10),
    adults: Number(body.adults),
    childAges,
    name: text(body.name, 100).trim(),
    email: text(body.email, 120).trim(),
    whatsapp: normalizeWhatsapp(text(body.whatsapp, 30)),
    consent: body.consent === true,
  };

  const errors = validateBooking(input, rules);
  if (Object.keys(errors).length > 0) return Response.json({ ok: false, errors }, { status: 400 });

  const hotel = HOTELS.find((item) => item.slug === input.hotelSlug);
  const price = departuresFor(input.hotelSlug).find((departure) => departure.date === input.date)?.price;
  if (!hotel || price === undefined) return Response.json({ ok: false, error: "Pedido inválido." }, { status: 400 });

  const stored: StoredRequest = { ...input, hotelName: hotel.name, pricePerPerson: price, receivedAt: new Date().toISOString(), ip };

  let saved = true;
  try {
    await saveRequest(stored);
  } catch (error) {
    saved = false;
    console.error("pedido: não gravou no disco", error);
  }

  let emailed = false;
  try {
    emailed = await sendEmails(stored);
  } catch (error) {
    console.error("pedido: falhou o envio de e-mail", error);
  }

  // Never tell a customer "received" if nobody on the team can ever see it.
  if (!saved && !emailed) return Response.json({ ok: false, error: "Não foi possível registar o pedido." }, { status: 500 });
  if (!emailed) console.error("pedido: GUARDADO MAS SEM E-MAIL (configurar SMTP_*)", stored.hotelName, stored.date);
  return Response.json({ ok: true });
}
