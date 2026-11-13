import type { Post } from "./types";
import { DEFAULT_RELATED } from "./shared";

export const ondeFicaZanzibar: Post = {
  slug: "onde-fica-zanzibar",
  title: "Onde fica Zanzibar? Mapa e localização",
  seoTitle: "Onde fica Zanzibar? Mapa, localização e zonas",
  description:
    "Onde fica Zanzibar, em que país está e como é a ilha. Mapa simples, as zonas de praia (Nungwi, Kiwengwa, Paje) e como chegar desde Portugal.",
  excerpt: "Em que país fica, a que distância está de Lisboa e como se divide a ilha, com um mapa simples das zonas de praia.",
  keywords: ["zanzibar onde fica", "onde fica zanzibar", "zanzibar mapa"],
  published: "2026-11-13",
  updated: "2026-11-13",
  cover: { src: "/images/destino/praias-aerea.webp", alt: "Vista aérea das praias de Zanzibar, no oceano Índico" },
  blocks: [
    {
      type: "p",
      text: "**Zanzibar fica no oceano Índico, ao largo da costa leste de África, em frente à Tanzânia.** É um arquipélago semiautónomo que faz parte da Tanzânia. A ilha principal chama-se Unguja e é a que a maior parte das pessoas visita; a outra ilha grande é Pemba, mais a norte e muito menos turística.",
    },
    { type: "map" },
    { type: "h2", text: "Em que país fica Zanzibar?" },
    {
      type: "p",
      text: "Na Tanzânia. Zanzibar tem governo próprio para vários assuntos internos, mas faz parte da República Unida da Tanzânia e a viagem faz-se com o passaporte, como para qualquer outro país. Antes de reservar, confirme sempre os requisitos de entrada e de saúde atualizados para quem viaja com passaporte português.",
    },
    { type: "h2", text: "A que distância fica de Portugal?" },
    {
      type: "p",
      text: "Em linha reta, Lisboa e Zanzibar estão separadas por cerca de 7 000 km. Não é uma viagem curta: nas ligações regulares a partir de Lisboa costuma haver uma escala, e é isso que faz o tempo total subir. Explicamos tudo no artigo sobre [voos e horas de voo para Zanzibar](/blog/voos-lisboa-zanzibar).",
    },
    {
      type: "p",
      text: "Zanzibar está 3 horas à frente de Lisboa no inverno e 2 horas à frente no verão, porque a Tanzânia não muda a hora. Não há grande diferença horária para ajustar.",
    },
    { type: "h2", text: "Como é a ilha: as zonas de praia" },
    {
      type: "p",
      text: "Unguja é comprida e estreita. Escolher a zona certa muda muito a viagem, porque a maré e o tipo de praia variam consoante o lado da ilha.",
    },
    {
      type: "ul",
      items: [
        "**Norte (Nungwi e Kendwa):** praias de areia branca e mar azul-turquesa, com menos variação de maré. É a zona onde ficam o [Riu Jambo](/hoteis/riu-jambo-zanzibar), o [Riu Palace Zanzibar](/hoteis/riu-palace-zanzibar) e o [Riu Palace Swahili](/hoteis/riu-palace-swahili-zanzibar).",
        "**Nordeste e costa leste (Kiwengwa):** zona de resorts grandes, com a maré a influenciar mais o banho. Aqui ficam o [Meliá Zanzibar](/hoteis/melia-zanzibar) e o [TUI BLUE Bahari](/hoteis/tui-blue-bahari-zanzibar).",
        "**Sudeste (Paje e Jambiani):** aldeias de pescadores e a zona do kitesurf. Maré mais marcada, ambiente mais descontraído.",
        "**Oeste (Stone Town):** a capital histórica, a poucos minutos do aeroporto. Vale uma visita de um dia pelas ruelas, portas esculpidas e mercados.",
      ],
    },
    {
      type: "image",
      src: "/images/destino/nungwi.webp",
      alt: "Praia de Nungwi, no norte de Zanzibar",
      caption: "Nungwi, na ponta norte da ilha.",
    },
    { type: "h2", text: "Quanto tempo se demora de uma ponta à outra?" },
    {
      type: "p",
      text: "A ilha é pequena, mas as estradas são lentas. Em geral conte com cerca de uma hora a duas horas entre o aeroporto e os resorts do norte ou da costa leste. Nos nossos pacotes os transfers estão incluídos, por isso não tem de se preocupar com isso.",
    },
    { type: "h2", text: "Como escolher a zona?" },
    {
      type: "ul",
      items: [
        "Quer **mar para nadar a qualquer hora**: norte (Nungwi e Kendwa).",
        "Quer **resort grande com muitas atividades**: Kiwengwa.",
        "Quer **kitesurf e aldeias**: sudeste, em Paje e Jambiani.",
      ],
    },
    {
      type: "note",
      text: "Quer ver os hotéis por zona? Veja a página de [hotéis em Zanzibar](/hoteis) e filtre pela zona que prefere.",
    },
  ],
  faq: [
    { question: "Em que país fica Zanzibar?", answer: "Zanzibar faz parte da Tanzânia, na costa leste de África, no oceano Índico." },
    { question: "Zanzibar é uma ilha?", answer: "É um arquipélago. A ilha principal é Unguja, a mais visitada, e a outra grande é Pemba." },
    { question: "Qual é a diferença horária entre Lisboa e Zanzibar?", answer: "Zanzibar está 3 horas à frente de Lisboa no inverno e 2 horas à frente no verão." },
    { question: "Em que zona de Zanzibar é melhor ficar?", answer: "O norte (Nungwi e Kendwa) tem o mar mais estável para banho; Kiwengwa tem resorts grandes; o sudeste é mais descontraído e muito procurado para kitesurf." },
  ],
  related: DEFAULT_RELATED,
};
