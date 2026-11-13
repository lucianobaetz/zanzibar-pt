import { departuresFor } from "@/lib/departures";
import { whatsappUrl } from "@/lib/site";

type DepartureCalendarProps = { slug: string; hotelName: string };

const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"] as const;

const formatPrice = (value: number) => `${value.toLocaleString("pt-PT")} €`;

// Departure calendar: every date is a Saturday from Lisbon, 7 nights, price per person in a double room.
// Plain links (no JavaScript): each date opens a WhatsApp request with the date already written.
export const DepartureCalendar = ({ slug, hotelName }: DepartureCalendarProps) => {
  const departures = departuresFor(slug);
  if (departures.length === 0) return null;

  const lowest = Math.min(...departures.map((departure) => departure.price));
  const months = MONTHS.map((name, index) => ({
    name,
    items: departures.filter((departure) => Number(departure.date.slice(5, 7)) === index + 1),
  })).filter((month) => month.items.length > 0);

  return (
    <div>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Partidas de Lisboa aos sábados, 7 noites em tudo incluído. O preço é por pessoa, em quarto duplo, com voo de Lisboa (1 escala), transfers e seguro.
        Escolha a data e peça a sua reserva sem pagar online.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {months.map((month) => (
          <div key={month.name} className="rounded-2xl border border-sand-200 bg-white p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-700">{month.name} de 2027</h3>
            <ul className="mt-3 space-y-2">
              {month.items.map((departure) => {
                const day = Number(departure.date.slice(8, 10));
                const label = `sábado, ${day} de ${month.name} de 2027`;
                const request = `Olá! Quero pedir uma reserva para o ${hotelName} em Zanzibar, partida de Lisboa a ${day} de ${month.name} de 2027. Número de adultos e crianças (com idades):`;
                return (
                  <li key={departure.date}>
                    <a
                      href={whatsappUrl(request)}
                      rel="noopener"
                      aria-label={`${label}, ${formatPrice(departure.price)} por pessoa. Pedir esta data`}
                      className="flex items-center justify-between gap-3 rounded-xl bg-lagoon-100/60 px-4 py-3 transition-colors hover:bg-lagoon-100"
                    >
                      <span className="text-sm font-semibold text-ocean-900">
                        <span className="text-ink-soft">Sáb</span> {day} {month.name.slice(0, 3)}
                      </span>
                      <span className="font-display text-lg font-semibold text-ocean-900">
                        {formatPrice(departure.price)}
                        {departure.price === lowest ? (
                          <span className="ml-2 rounded-full bg-clove-500 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-white">mais barata</span>
                        ) : null}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Preços por pessoa, sujeitos a disponibilidade e confirmados pelo agente antes de a reserva ficar confirmada. Criança: preço sob consulta.
        Não vendemos partidas de março a maio (época das chuvas); novembro e dezembro de 2027 abrem quando a TUI tiver voos.
      </p>
    </div>
  );
};
