// Questions shown on the page AND emitted as FAQPage structured data from the same
// source, so the visible text and the schema can never disagree.
// Wording is provisional until the Portugal keyword research (People Also Ask).

export type Faq = { question: string; answer: string };

export const ZANZIBAR_FAQ: readonly Faq[] = [
  {
    question: "O que inclui o pacote de férias em Zanzibar?",
    answer:
      "Passagem aérea em voo regular e em classe económica, 7 noites de alojamento em regime tudo incluído, transfers, seguro de viagem e taxas de aeroporto e de combustível (sujeitas a alteração até à emissão dos bilhetes).",
  },
  {
    question: "De onde partem os voos?",
    answer:
      "Os voos partem de Lisboa. Procuramos sempre a opção mais económica em voo regular, normalmente com uma escala.",
  },
  {
    question: "Preciso de pagar online para reservar?",
    answer:
      "Não. Faz um pedido de reserva no site e a nossa equipa confirma a disponibilidade e o preço consigo. Só depois a reserva fica confirmada.",
  },
  {
    question: "Em que meses há partidas?",
    answer:
      "Em 2027 há duas partidas por mês, ao sábado, exceto em março, abril e maio, a época das chuvas em Zanzibar.",
  },
  {
    question: "Há uma taxa a pagar no hotel?",
    answer:
      "Sim. O Governo de Zanzibar aplica uma taxa hoteleira entre 2 e 5 dólares americanos por pessoa e por noite (adultos e crianças), consoante a categoria do hotel. É paga diretamente no hotel, à chegada.",
  },
  {
    question: "Quanto custa para crianças?",
    answer: "O preço para crianças é sob consulta. Diga-nos as idades e a nossa equipa responde com a proposta.",
  },
];
