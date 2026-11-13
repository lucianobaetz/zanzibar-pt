import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const zanzibarEPerigoso: Post = {
  slug: "zanzibar-e-perigoso",
  title: "Zanzibar é perigoso? Segurança para quem viaja",
  seoTitle: "Zanzibar é perigoso? Segurança para viajantes",
  description:
    "Zanzibar é seguro? O que saber sobre segurança, saúde, seguro de viagem e conselhos oficiais antes de viajar para Zanzibar a partir de Portugal.",
  excerpt: "Uma resposta honesta sobre segurança em Zanzibar, incluindo a instabilidade recente na Tanzânia e o que verificar antes de partir.",
  subtitle: "Segurança, saúde e conselhos oficiais, com honestidade.",
  category: "Segurança e saúde",
  tags: ["segurança", "saúde", "conselhos"],
  status: "published",
  keywords: ["zanzibar é perigoso", "zanzibar é seguro", "segurança zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/mulheres-praia.webp", alt: "Pessoas a caminhar numa praia de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**A maior parte dos turistas passa uma semana em Zanzibar sem incidentes, sobretudo nos resorts.** Mas segurança não é uma garantia, e a situação na Tanzânia pode mudar. Antes de reservar, consulte sempre os conselhos de viagem oficiais mais recentes.",
    },
    { type: "h2", text: "A situação política: o que se passou recentemente" },
    {
      type: "p",
      text: "Em outubro e novembro de 2025, depois das eleições na Tanzânia, houve protestos e perturbações, com impacto em ligações de transporte, incluindo voos e ligações marítimas. Estas situações podem repetir-se. Por isso, em vez de lhe dizer que «está tudo bem», recomendamos que verifique os avisos atuais antes da partida.",
    },
    {
      type: "note",
      text: "Consulte os conselhos aos viajantes do Ministério dos Negócios Estrangeiros de Portugal para a Tanzânia antes de reservar e novamente antes de partir. Se a situação mudar depois da reserva, falamos consigo.",
    },
    { type: "h2", text: "Riscos do dia a dia" },
    {
      type: "ul",
      items: [
        "**Pequenos furtos:** como em qualquer destino turístico. Não deixe objetos de valor na praia nem à vista.",
        "**Sol e calor:** protetor solar, chapéu e muita água. A radiação perto do equador é forte.",
        "**Mar e marés:** confirme as marés e use calçado em zonas de pedras ou ouriços.",
        "**Estradas:** o trânsito é desordenado. Prefira transportes organizados pelo hotel.",
      ],
    },
    { type: "h2", text: "Saúde" },
    {
      type: "ul",
      items: [
        "Fale com o seu médico ou com uma consulta do viajante **antes de partir**, sobre vacinas e prevenção do paludismo (malária).",
        "Beba só água engarrafada ou de origem segura.",
        "Use repelente, sobretudo ao anoitecer.",
      ],
    },
    {
      type: "p",
      text: "Os nossos pacotes incluem **seguro de viagem**. Leia as condições e confirme o que cobre, em particular a assistência médica.",
    },
    { type: "h2", text: "Respeito pelos costumes locais" },
    {
      type: "p",
      text: "Zanzibar é uma sociedade de maioria muçulmana. Nos resorts e nas praias turísticas a roupa de banho é normal, mas fora delas, e sobretudo em Stone Town, vista-se com mais recato (ombros e joelhos cobertos) e peça licença antes de fotografar pessoas.",
    },
    { type: "h2", text: "Então, é perigoso?" },
    {
      type: "p",
      text: "Para quem fica em resort e faz excursões organizadas, o risco do dia a dia é baixo. O que mais pesa é a incerteza política e logística, que se resolve com informação atualizada e um bom seguro. Se tiver dúvidas, fale com a nossa equipa antes de pedir a reserva. Veja as [viagens a Zanzibar](/viagens-zanzibar) e os [hotéis](/hoteis).",
    },
  ],
  faq: [
    { question: "Zanzibar é perigoso?", answer: "Para quem fica em resort e faz excursões organizadas, o risco do dia a dia é baixo. Convém acompanhar os conselhos oficiais, porque a situação na Tanzânia pode mudar." },
    { question: "Houve problemas recentes na Tanzânia?", answer: "Sim. Em outubro e novembro de 2025, depois das eleições, houve protestos e perturbações, incluindo nos transportes. Verifique os avisos atuais antes de viajar." },
    { question: "Preciso de vacinas para ir a Zanzibar?", answer: "Fale com o seu médico ou com uma consulta do viajante antes de partir para saber o que lhe é recomendado." },
    { question: "O seguro de viagem está incluído?", answer: "Sim, nos nossos pacotes o seguro de viagem está incluído. Leia as condições para confirmar a cobertura." },
  ],
  related: DEFAULT_RELATED,
};
