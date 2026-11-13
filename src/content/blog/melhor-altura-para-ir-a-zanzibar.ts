import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const melhorAlturaZanzibar: Post = {
  slug: "melhor-altura-para-ir-a-zanzibar",
  title: "Melhor altura para ir a Zanzibar: clima mês a mês",
  seoTitle: "Melhor altura para ir a Zanzibar: tempo mês a mês",
  description:
    "Quando ir a Zanzibar? O tempo mês a mês, a época das chuvas, a época seca e as datas de partida de Lisboa em 2027.",
  excerpt: "Quando chove, quando faz mais calor e quais os melhores meses para a praia, com as datas em que há partidas em 2027.",
  subtitle: "Clima, mar e preços mês a mês, e as datas de partida de Lisboa em 2027.",
  category: "Planear a viagem",
  tags: ["clima", "épocas", "2027"],
  status: "published",
  keywords: ["melhor altura para ir a zanzibar", "quando ir a zanzibar", "melhor altura para visitar zanzibar", "tempo zanzibar"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/hero-molhe-por-do-sol.webp", alt: "Molhe ao pôr do sol numa praia de Zanzibar" },
  blocks: [
    {
      type: "p",
      text: "**A melhor altura para ir a Zanzibar é de junho a outubro**, a estação seca, com céu limpo, menos humidade e noites mais frescas. Janeiro e fevereiro também são muito bons para praia, mas mais quentes. Março, abril e maio são os meses das grandes chuvas.",
    },
    {
      type: "p",
      text: "Zanzibar fica perto da linha do equador, por isso não tem verão e inverno como em Portugal. O ano divide-se em estação seca e estação das chuvas, e a temperatura varia pouco: de dia anda quase sempre entre os 28 °C e os 33 °C.",
    },
    { type: "h2", text: "O tempo em Zanzibar mês a mês" },
    {
      type: "table",
      head: ["Meses", "O que esperar", "Para a praia"],
      rows: [
        ["Janeiro e fevereiro", "Quente, sol forte e mais humidade. Pode haver aguaceiros curtos.", "Muito bom"],
        ["Março, abril e maio", "Grandes chuvas. Dias nublados e aguaceiros fortes, e alguns serviços fecham.", "Não recomendado"],
        ["Junho a setembro", "Seco, céu limpo e noites mais frescas. É o período mais agradável.", "Ideal"],
        ["Outubro", "Ainda seco, com o calor a voltar.", "Muito bom"],
        ["Novembro e dezembro", "Chuvas curtas, em geral à tarde, e mais calor.", "Variável"],
      ],
    },
    {
      type: "image",
      src: "/images/destino/casal-banco-areia.webp",
      alt: "Casal num banco de areia em Zanzibar com mar calmo",
      caption: "Na estação seca o mar tem cores mais intensas.",
    },
    { type: "h2", text: "E o mar, a que temperatura está?" },
    {
      type: "p",
      text: "A água é quente todo o ano e dá para nadar em qualquer mês. O que muda é a visibilidade e as condições: na estação das chuvas o mar fica mais turvo e o vento mais irregular.",
    },
    { type: "h2", text: "Quando é a época alta?" },
    {
      type: "p",
      text: "A procura sobe no verão europeu, de julho a setembro, e também no Natal e fim de ano. Nessas datas os preços são mais altos. Por isso verá que, nas nossas partidas de 2027, os pacotes de julho e agosto custam mais do que os de junho ou outubro.",
    },
    { type: "h2", text: "Em que datas há partidas de Lisboa em 2027?" },
    {
      type: "p",
      text: "Temos partidas ao sábado, duas por mês, em janeiro, fevereiro, junho, julho, agosto, setembro e outubro. Não há partidas em março, abril e maio (a época das chuvas), nem em novembro e dezembro. Veja os preços de cada data na [página de cada hotel](/hoteis).",
    },
    {
      type: "note",
      text: "Dica: se procura o melhor equilíbrio entre bom tempo e preço, olhe para **junho** e para **outubro**. São meses secos e ficam fora do pico de julho e agosto.",
    },
    { type: "h2", text: "Então, quando ir?" },
    {
      type: "ul",
      items: [
        "**Melhor tempo:** junho a outubro.",
        "**Mais calor para o mergulho e a praia:** janeiro e fevereiro.",
        "**Mais barato:** épocas fora do pico de julho e agosto.",
        "**Evitar:** março a maio, pela chuva.",
      ],
    },
  ],
  faq: [
    { question: "Qual é a melhor altura para ir a Zanzibar?", answer: "De junho a outubro, a estação seca, com céu limpo e menos humidade. Janeiro e fevereiro também são bons, mas mais quentes." },
    { question: "Quando chove em Zanzibar?", answer: "As grandes chuvas vão de março a maio. Em novembro e dezembro há chuvas mais curtas." },
    { question: "Que temperatura faz em Zanzibar?", answer: "De dia ronda quase sempre os 28 °C a 33 °C ao longo do ano, e o mar é quente em todos os meses." },
    { question: "Em que meses há partidas de Lisboa em 2027?", answer: "Em janeiro, fevereiro e de junho a outubro, com duas partidas por mês, ao sábado." },
  ],
  related: DEFAULT_RELATED,
};
