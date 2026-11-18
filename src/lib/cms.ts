import { airportLabel } from "@/lib/airports";
import type { StoredLead, StoredRequest } from "@/lib/pedidos";

// Puts each request in the Vamos Fugir back office (Reservas + Registo de Clientes, cash-register sound).
// CMS_KEY is the key from Empresa › "Ligação com o zanzibar.pt". Without it, or if the CMS is down, nothing breaks:
// the request is already on disk and e-mailed. Never throws, never waits more than 6 s.
export const forwardToCms = async (request: StoredRequest | StoredLead, kind: "booking" | "lead"): Promise<void> => {
  const key = process.env.CMS_KEY;
  if (!key) return;
  const url = `${process.env.CMS_URL ?? "https://vamosfugir.pt"}/nxapi/partner/zanzibar-request`;
  const id = `${request.receivedAt}|${request.email}`;
  const body =
    kind === "booking"
      ? (() => {
          const r = request as StoredRequest;
          return { id, kind, hotelName: r.hotelName, hotelSlug: r.hotelSlug, airport: r.airport, airportLabel: airportLabel(r.airport), date: r.date, nights: 7, adults: r.adults, childAges: r.childAges, pricePerPerson: r.pricePerPerson, name: r.name, email: r.email, whatsapp: r.whatsapp };
        })()
      : (() => {
          const l = request as StoredLead;
          return { id, kind, name: l.name, email: l.email, whatsapp: l.whatsapp, source: l.source };
        })();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-partner-key": key },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) console.error("cms: pedido não entrou no back office", res.status, await res.text().catch(() => ""));
  } catch (error) {
    console.error("cms: pedido não entrou no back office", error);
  }
};
