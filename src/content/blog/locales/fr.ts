import type { Post } from "../types";
import { POST_SLUGS, type CoreGuideKey } from "../slugs";
import { linksFor } from "./links";

const L = linksFor("fr");
const RELATED = [
  { href: L.hotels, label: "Hôtels à Zanzibar tout inclus avec vol" },
  { href: L.home, label: "Voyage Zanzibar 2027 : vols, transferts et assurance" },
] as const;
const DATES = { published: "2026-11-14", updated: "2026-11-14", status: "published" } as const;

export const FR_POSTS: Record<CoreGuideKey, Post> = {
  where: {
    slug: POST_SLUGS.where.fr,
    title: "Où se trouve Zanzibar ? Carte, pays et accès",
    seoTitle: "Où se trouve Zanzibar ? Carte, pays et accès",
    description:
      "Où se trouve Zanzibar ? Dans l'océan Indien, au large de la Tanzanie, à 7 100 km de Paris. Carte, zones de plage (Nungwi, Kiwengwa, Paje) et accès.",
    subtitle: "Dans quel pays, où sur la carte, à quelle distance de Paris et quelle zone de l'île choisir.",
    excerpt: "Dans quel pays se trouve Zanzibar, où le situer sur la carte, à quelle distance de la France et quelle plage choisir.",
    category: "Préparer le voyage",
    tags: ["localisation", "carte", "Tanzanie"],
    keywords: ["où se trouve zanzibar", "zanzibar carte", "zanzibar dans quel pays", "zanzibar tanzanie", "où est zanzibar"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Vue aérienne des plages de Zanzibar, dans l'océan Indien, au large de la Tanzanie" },
    blocks: [
      {
        type: "p",
        text: "**Où se trouve Zanzibar ? Dans l'océan Indien, au large de la côte est de l'Afrique, en Tanzanie.** C'est un archipel semi-autonome qui fait partie de la République unie de Tanzanie, à environ 7 100 km de Paris à vol d'oiseau. L'île principale s'appelle Unguja et c'est celle que visitent presque tous les voyageurs ; l'autre grande île est Pemba, plus au nord et bien moins touristique.",
      },
      { type: "map" },
      { type: "h2", text: "Dans quel pays se trouve Zanzibar ?" },
      {
        type: "p",
        text: "Zanzibar fait partie de la Tanzanie. L'archipel dispose de son propre gouvernement pour de nombreuses affaires intérieures, mais on y voyage avec un passeport, comme dans n'importe quel autre pays. Avant de réserver, vérifiez les conditions d'entrée et de santé en vigueur sur le site du ministère de l'Europe et des Affaires étrangères.",
      },
      { type: "h2", text: "Où se trouve Zanzibar sur la carte ?" },
      {
        type: "p",
        text: "Sur la carte, Zanzibar se situe à environ 6° au sud de l'équateur. L'île d'Unguja est à quelques dizaines de kilomètres de la côte continentale et à environ 75 km à vol d'oiseau de Dar es Salaam, la plus grande ville du pays. C'est une île longue et étroite, orientée nord-sud, bordée de plages de sable blanc presque partout.",
      },
      {
        type: "p",
        text: "L'archipel compte deux îles principales. **Unguja** rassemble Stone Town, l'aéroport et presque tous les resorts. **Pemba**, au nord, est plus verte et plus calme, avec peu d'hôtels ; elle attire surtout les plongeurs.",
      },
      { type: "h2", text: "À quelle distance de la France se trouve Zanzibar ?" },
      {
        type: "p",
        text: `Entre Paris et Zanzibar, il y a environ 7 100 km à vol d'oiseau. Ce n'est pas un trajet court : sur les vols réguliers, il y a généralement une escale, et c'est elle qui allonge le voyage. Nous détaillons tout dans notre guide du [vol pour Zanzibar](${L.guide("flights")}).`,
      },
      {
        type: "p",
        text: "Le décalage horaire est faible. Zanzibar a 2 heures d'avance sur la France en hiver et 1 heure en été, car la Tanzanie ne change pas d'heure. L'adaptation est quasi nulle.",
      },
      { type: "h2", text: "Comment aller à Zanzibar ?" },
      {
        type: "ul",
        items: [
          "**En avion, directement sur l'île :** l'aéroport international de Zanzibar (ZNZ) se trouve à quelques kilomètres de Stone Town. C'est le plus simple, et c'est ce que prévoient nos séjours.",
          "**Via Dar es Salaam :** des vols courts et des ferries rapides relient la ville à l'île. En ferry, la traversée dure environ 2 heures.",
          "**Transferts :** de l'aéroport aux resorts du nord ou de la côte est, comptez une à deux heures de route. Dans nos séjours, le transfert est inclus.",
        ],
      },
      { type: "h2", text: "Les zones de l'île" },
      { type: "p", text: "Bien choisir la zone change le séjour, car la marée et le type de plage varient selon la côte." },
      {
        type: "ul",
        items: [
          `**Nord (Nungwi et Kendwa) :** sable blanc et eau turquoise, avec peu de variation de marée. C'est là que se trouvent le [Riu Jambo](${L.hotel("riu-jambo-zanzibar")}), le [Riu Palace Zanzibar](${L.hotel("riu-palace-zanzibar")}) et le [Riu Palace Swahili](${L.hotel("riu-palace-swahili-zanzibar")}).`,
          `**Nord-est et côte est (Kiwengwa) :** grands resorts, avec une marée qui influence la baignade. On y trouve le [Meliá Zanzibar](${L.hotel("melia-zanzibar")}) et le [TUI BLUE Bahari](${L.hotel("tui-blue-bahari-zanzibar")}).`,
          "**Sud-est (Paje et Jambiani) :** villages de pêcheurs et spot de kitesurf. Marée très marquée, ambiance décontractée.",
          "**Ouest (Stone Town) :** la capitale historique, classée au patrimoine mondial de l'UNESCO, à quelques minutes de l'aéroport. Elle mérite une journée de visite.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/nungwi.webp",
        alt: "Plage de Nungwi, à la pointe nord de Zanzibar, en Tanzanie",
        caption: "Nungwi, à la pointe nord de l'île.",
      },
      { type: "h2", text: "Quelle zone de Zanzibar choisir ?" },
      {
        type: "ul",
        items: [
          "Vous voulez **vous baigner à toute heure** : le nord (Nungwi et Kendwa).",
          "Vous voulez **un grand resort avec beaucoup d'activités** : Kiwengwa.",
          "Vous voulez **du kitesurf et l'ambiance des villages** : le sud-est, à Paje et Jambiani.",
          "Vous voulez **de l'histoire et des balades à pied** : séjournez près de Stone Town ou consacrez-lui une journée.",
        ],
      },
      {
        type: "note",
        text: `Envie de voir les hôtels par zone ? Consultez nos [hôtels à Zanzibar tout inclus](${L.hotels}) et le guide pour savoir [quand partir à Zanzibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "Dans quel pays se trouve Zanzibar ?", answer: "Zanzibar fait partie de la Tanzanie, sur la côte est de l'Afrique, dans l'océan Indien." },
      { question: "Zanzibar est-elle une île ?", answer: "C'est un archipel. L'île principale est Unguja, la plus visitée, et l'autre grande île est Pemba." },
      { question: "Où se trouve Zanzibar sur la carte ?", answer: "À environ 6° au sud de l'équateur, dans l'océan Indien, à quelques dizaines de kilomètres de la côte tanzanienne et à environ 75 km à vol d'oiseau de Dar es Salaam." },
      { question: "À quelle distance de Paris se trouve Zanzibar ?", answer: "Environ 7 100 km à vol d'oiseau. Sur les vols réguliers, il y a généralement une escale." },
      { question: "Quel est le décalage horaire entre la France et Zanzibar ?", answer: "Zanzibar a 2 heures d'avance sur la France en hiver et 1 heure en été." },
      { question: "Dans quelle zone de Zanzibar vaut-il mieux séjourner ?", answer: "Le nord (Nungwi et Kendwa) offre la mer la plus stable pour se baigner ; Kiwengwa propose de grands resorts ; le sud-est est plus décontracté et très prisé des kitesurfeurs." },
    ],
    related: RELATED,
  },

  when: {
    slug: POST_SLUGS.when.fr,
    title: "Quand partir à Zanzibar ? Météo mois par mois",
    seoTitle: "Quand partir à Zanzibar ? Météo et meilleure période",
    description:
      "Quand partir à Zanzibar ? La meilleure période va de juin à octobre : ciel dégagé, moins d'humidité. Météo mois par mois, pluies, mer, kitesurf et plongée.",
    subtitle: "La meilleure période pour partir à Zanzibar selon vos envies : plage, plongée, kitesurf ou budget.",
    excerpt: "Météo mois par mois, saison des pluies, température de la mer et meilleurs mois pour partir à Zanzibar.",
    category: "Préparer le voyage",
    tags: ["météo", "quand partir", "saison"],
    keywords: ["quand partir à zanzibar", "meilleure période zanzibar", "zanzibar météo", "zanzibar saison des pluies", "zanzibar meilleur mois"],
    ...DATES,
    cover: { src: "/images/destino/hero-molhe-por-do-sol.webp", alt: "Ponton au coucher du soleil sur une plage de Zanzibar, à la meilleure période de l'année" },
    blocks: [
      {
        type: "p",
        text: "**La meilleure période pour partir à Zanzibar va de juin à octobre**, la saison sèche, avec un ciel dégagé, moins d'humidité et des nuits plus fraîches. Janvier et février sont aussi très bons pour la plage, mais plus chauds. Mars, avril et mai sont les mois des grandes pluies. Si vous vous demandez quand partir à Zanzibar, voilà la réponse courte ; voici le détail mois par mois.",
      },
      {
        type: "p",
        text: "Zanzibar est proche de l'équateur : pas d'été ni d'hiver comme en France. L'année se partage entre saison sèche et saison des pluies, et la température varie peu : en journée, elle tourne presque toujours entre 28 °C et 33 °C.",
      },
      { type: "h2", text: "La météo à Zanzibar mois par mois" },
      {
        type: "table",
        head: ["Mois", "À quoi s'attendre", "Pour la plage"],
        rows: [
          ["Janvier et février", "Chaud, soleil fort et plus d'humidité. Courtes averses possibles.", "Très bon"],
          ["Mars, avril et mai", "Grandes pluies. Journées nuageuses et fortes averses ; certains services ferment.", "Déconseillé"],
          ["Juin à septembre", "Sec, ciel dégagé et nuits plus fraîches. La période la plus agréable.", "Idéal"],
          ["Octobre", "Encore sec, la chaleur revient.", "Très bon"],
          ["Novembre et décembre", "Pluies courtes, en général l'après-midi, et plus de chaleur.", "Variable"],
        ],
      },
      {
        type: "image",
        src: "/images/destino/casal-banco-areia.webp",
        alt: "Couple sur un banc de sable à Zanzibar, mer calme",
        caption: "En saison sèche, la mer prend des couleurs plus intenses.",
      },
      { type: "h2", text: "Quelle est la meilleure période pour la plage ?" },
      {
        type: "p",
        text: "Pour qui veut surtout de la plage et une mer bleue, la meilleure période pour partir à Zanzibar est de juin à octobre : le ciel est plus clair, l'humidité plus faible et les nuits agréables. Janvier et février apportent plus de chaleur et de soleil direct, parfait si vous aimez la chaleur, mais il faut davantage de protection solaire et d'eau.",
      },
      { type: "h2", text: "Quelle température pour la mer ?" },
      {
        type: "p",
        text: "L'eau est chaude toute l'année et on peut se baigner n'importe quel mois, en général entre 26 °C et 29 °C. Ce qui change, c'est la visibilité et les conditions : en saison des pluies, la mer est plus trouble et le vent plus irrégulier.",
      },
      {
        type: "p",
        text: `La marée compte aussi. Sur la côte est et au sud-est (Kiwengwa, Paje, Jambiani), la marée basse éloigne la mer de plusieurs dizaines de mètres et la baignade dépend de l'heure. Au nord (Nungwi et Kendwa), l'effet est moindre. Pour choisir la zone, voyez [où se trouve Zanzibar et comment est l'île](${L.guide("where")}).`,
      },
      { type: "h2", text: "Quand partir à Zanzibar pour le kitesurf ou la plongée ?" },
      {
        type: "ul",
        items: [
          "**Kitesurf :** le vent est le plus régulier de juin à septembre et en janvier-février, surtout au sud-est, à Paje et Jambiani.",
          "**Plongée et snorkeling :** la meilleure visibilité se trouve généralement en saison sèche, de juin à octobre.",
          "**Excursions et Stone Town :** la saison sèche est plus confortable pour marcher et visiter la ville.",
        ],
      },
      { type: "h2", text: "Haute saison et prix" },
      {
        type: "p",
        text: "La demande grimpe pendant l'été européen, de juillet à septembre, ainsi qu'à Noël et au Nouvel An, et les prix suivent. Si vous cherchez le meilleur compromis entre beau temps et budget, regardez juin et octobre : ce sont des mois secs, hors du pic de juillet-août.",
      },
      {
        type: "note",
        text: `Retrouvez les prix et les dates de départ sur la page de chaque hôtel : [hôtels à Zanzibar tout inclus](${L.hotels}). Nos prix sont affichés « à partir de », par personne, et notre équipe confirme la disponibilité avant de valider la réservation.`,
      },
      { type: "h2", text: "Alors, quand partir à Zanzibar ?" },
      {
        type: "ul",
        items: [
          "**Meilleur temps :** de juin à octobre.",
          "**Plus de chaleur pour la plage et la plongée :** janvier et février.",
          "**Plus économique :** en dehors du pic de juillet-août.",
          "**À éviter :** de mars à mai, pour les pluies.",
        ],
      },
    ],
    faq: [
      { question: "Quelle est la meilleure période pour partir à Zanzibar ?", answer: "De juin à octobre, la saison sèche, avec un ciel dégagé et moins d'humidité. Janvier et février sont aussi bons, mais plus chauds." },
      { question: "Quand pleut-il à Zanzibar ?", answer: "Les grandes pluies vont de mars à mai. En novembre et décembre, les pluies sont plus courtes." },
      { question: "Quelle température fait-il à Zanzibar ?", answer: "En journée, il fait presque toujours entre 28 °C et 33 °C toute l'année, et la mer est chaude tous les mois." },
      { question: "Quand partir à Zanzibar pour faire du kitesurf ?", answer: "De juin à septembre et en janvier-février, quand le vent est le plus régulier, surtout au sud-est de l'île." },
      { question: "Quel mois est le moins cher pour Zanzibar ?", answer: "Les mois hors du pic de juillet-août, comme juin ou octobre, sont en général plus économiques tout en restant secs." },
    ],
    related: RELATED,
  },

  things: {
    slug: POST_SLUGS.things.fr,
    title: "Que faire à Zanzibar ? 12 visites et expériences",
    seoTitle: "Que faire à Zanzibar ? 12 visites et expériences",
    description:
      "Que faire à Zanzibar en une semaine : Stone Town, les plages de Nungwi, Kendwa et Paje, The Rock, tour des épices, Jozani et dhow. Programme jour par jour.",
    subtitle: "Plages, Stone Town et excursions : un programme simple pour sept nuits.",
    excerpt: "Les 12 visites et expériences qui valent le coup à Zanzibar, avec un programme jour par jour.",
    category: "Que faire",
    tags: ["que faire", "Stone Town", "excursions"],
    keywords: ["que faire à zanzibar", "que voir à zanzibar", "zanzibar excursions", "stone town zanzibar", "zanzibar une semaine"],
    ...DATES,
    cover: { src: "/images/destino/stone-town.webp", alt: "Ruelle de Stone Town, le centre historique de Zanzibar" },
    blocks: [
      {
        type: "p",
        text: "**À Zanzibar, le programme classique associe plage, ville historique de Stone Town et une ou deux excursions.** Quand on se demande que faire à Zanzibar, on cherche en général un plan simple, et avec 7 nuits il y a largement le temps de tout voir sans courir. Voici les 12 visites et expériences qui valent le plus le détour, classées par type.",
      },
      { type: "h2", text: "Que faire à Zanzibar : les plages" },
      {
        type: "ul",
        items: [
          "**Nungwi :** à la pointe nord, sable blanc et couchers de soleil.",
          "**Kendwa :** longue plage de sable blanc, réputée pour sa mer à faible marée.",
          "**Paje :** la capitale du kitesurf, sur la côte sud-est.",
          "**Jambiani :** village de pêcheurs avec ses bateaux traditionnels.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/paje-kitesurf.webp",
        alt: "Kitesurf sur la plage de Paje, à Zanzibar",
        caption: "Paje, le spot de kitesurf de Zanzibar.",
      },
      { type: "h2", text: "Que faire à Zanzibar : culture et histoire" },
      {
        type: "ul",
        items: [
          "**Stone Town :** centre historique classé par l'UNESCO, avec ruelles, portes sculptées et marchés.",
          "**Marché de Darajani :** pour voir le quotidien local.",
          "**Tour des épices :** visite de plantations et dégustation de fruits et d'épices.",
        ],
      },
      { type: "h2", text: "Que faire à Zanzibar : mer et nature" },
      {
        type: "ul",
        items: [
          "**The Rock :** le restaurant posé sur un rocher dans la mer, à Pingwe, une des images les plus célèbres de l'île.",
          "**Sortie en dhow :** au coucher du soleil ou à la journée, avec arrêts snorkeling.",
          "**Dauphins à Kizimkazi :** sortie en bateau dans le sud de l'île.",
          "**Forêt de Jozani :** où vit le colobe roux.",
          "**Île de la Prison :** courte sortie en bateau depuis Stone Town pour voir des tortues géantes.",
        ],
      },
      { type: "h2", text: "Que voir à Stone Town en une journée ?" },
      {
        type: "p",
        text: "Réservez une matinée ou un après-midi pour arpenter à pied les ruelles du centre historique, sans carte, à la recherche des portes sculptées. Passez par l'ancien fort et le marché de Darajani, puis terminez aux jardins Forodhani, en bord de mer, où des étals de cuisine de rue s'installent en fin de journée. La ville est à quelques minutes de l'aéroport : elle s'intègre bien au jour d'arrivée ou de départ.",
      },
      { type: "h2", text: "Une semaine à Zanzibar : le programme jour par jour" },
      {
        type: "ul",
        items: [
          "**Jours 1 et 2 :** arrivée, repos et premières baignades sur la plage de l'hôtel.",
          "**Jour 3 :** Stone Town et tour des épices.",
          "**Jour 4 :** sortie en dhow avec snorkeling ou dauphins à Kizimkazi.",
          "**Jour 5 :** forêt de Jozani et après-midi à Paje ou Jambiani.",
          "**Les autres jours :** plage, spa et couchers de soleil, sans programme.",
        ],
      },
      {
        type: "p",
        text: `Nos séjours durent 7 nuits. Cela suffit généralement pour 3 à 4 jours de plage et de resort, 1 jour à Stone Town et 1 ou 2 excursions. Pour aller plus loin, vous pouvez ajouter un safari en Tanzanie continentale. Pour choisir vos dates, voyez [quand partir à Zanzibar](${L.guide("when")}).`,
      },
      {
        type: "note",
        text: "Les excursions et les entrées ne sont pas incluses dans le séjour. Elles se réservent sur place ou via l'hôtel. Vérifiez toujours les prix et les conditions avant de payer.",
      },
      { type: "h2", text: "Où séjourner pour en profiter au mieux" },
      {
        type: "p",
        text: `Le choix de l'hôtel conditionne le reste. Au nord, vous êtes plus proche des meilleures plages pour se baigner ; sur la côte est, les resorts sont grands et complets. Découvrez-les tous dans nos [hôtels à Zanzibar](${L.hotels}).`,
      },
    ],
    faq: [
      { question: "Que faire à Zanzibar ?", answer: "Stone Town, les plages de Nungwi, Kendwa, Paje et Jambiani, The Rock, le tour des épices, la forêt de Jozani et les sorties en bateau." },
      { question: "Que voir à Stone Town en une journée ?", answer: "Les ruelles et les portes sculptées, l'ancien fort, le marché de Darajani et, en fin de journée, les jardins Forodhani en bord de mer." },
      { question: "Combien de jours faut-il à Zanzibar ?", answer: "Une semaine permet de faire de la plage, une journée à Stone Town et une ou deux excursions sans courir." },
      { question: "Les excursions sont-elles incluses dans le séjour ?", answer: "Non. Les séjours comprennent le vol, 7 nuits tout inclus, les transferts et l'assurance voyage. Les excursions se réservent à part." },
    ],
    related: RELATED,
  },

  flights: {
    slug: POST_SLUGS.flights.fr,
    title: "Vol Zanzibar depuis la France : durée et escales",
    seoTitle: "Vol Zanzibar depuis Paris : durée, escales et prix",
    description:
      "Vol Zanzibar depuis Paris : combien d'heures de vol, y a-t-il un vol direct, comment fonctionnent les escales et ce que comprend le vol dans nos séjours.",
    subtitle: "Combien d'heures de Paris à Zanzibar, y a-t-il un vol direct et comment fonctionnent les escales.",
    excerpt: "Durée du voyage, escales habituelles, aéroport d'arrivée et ce que comprend le vol dans nos séjours.",
    category: "Préparer le voyage",
    tags: ["vol", "escales", "Paris"],
    keywords: ["vol zanzibar", "vol paris zanzibar", "durée vol zanzibar", "vol direct zanzibar", "aéroport de zanzibar"],
    ...DATES,
    cover: { src: "/images/destino/molhe-aerea-topo.webp", alt: "Vue aérienne d'un ponton sur la mer turquoise de Zanzibar" },
    blocks: [
      {
        type: "p",
        text: "**Un vol Zanzibar depuis Paris, c'est environ 7 100 km à vol d'oiseau.** Quand on cherche un vol pour Zanzibar, on veut savoir combien de temps on passera dans les airs, et la réponse honnête est que cela dépend de l'escale : pour la plupart des voyageurs, c'est un vol avec une escale et un trajet qui avoisine une journée, attente entre les vols comprise. La durée exacte dépend de la compagnie, de l'aéroport d'escale et du jour.",
      },
      { type: "h2", text: "Combien d'heures de vol de Paris à Zanzibar ?" },
      {
        type: "p",
        text: "En ordre de grandeur, le temps de vol additionne deux tronçons : le premier, de Paris à l'aéroport d'escale, le second jusqu'à Zanzibar. Avec une escale au Moyen-Orient, par exemple, le premier tronçon peut durer environ 6 heures et le second 5 heures et demie. À cela s'ajoute l'attente entre les vols, qui peut aller d'un peu plus d'une heure à plus d'une demi-journée.",
      },
      { type: "h2", text: "Existe-t-il un vol direct pour Zanzibar ?" },
      {
        type: "p",
        text: "Sur les vols réguliers, en général non : la formule habituelle comporte **une escale**. La disponibilité de vols directs dépend de la saison et de l'opérateur, c'est pourquoi nous ne la tenons pas pour acquise. Pour chaque demande de réservation, nous confirmons avec vous l'itinéraire précis avant de la valider.",
      },
      {
        type: "note",
        text: "Nous ne promettons pas de vol direct. Chaque départ a ses horaires et son escale, et nous les confirmons avec vous avant que la réservation soit définitive.",
      },
      { type: "h2", text: "Combien de temps dure le voyage de porte à porte ?" },
      {
        type: "ul",
        items: [
          "**Temps de vol :** la somme des deux vols ; le second, depuis l'Afrique ou le Moyen-Orient jusqu'à Zanzibar, est plus court.",
          "**Escale :** d'un peu plus d'une heure à plus d'une demi-journée, selon la correspondance.",
          "**Total de porte à porte :** comptez une journée entière, transfert vers l'hôtel compris.",
        ],
      },
      {
        type: "p",
        text: "Zanzibar ayant 2 heures d'avance sur la France en hiver et 1 heure en été, l'arrivée a généralement lieu le lendemain du départ. Prévoyez un premier jour sans programme.",
      },
      { type: "h2", text: "Comment fonctionnent les vols pour Zanzibar avec escale ?" },
      {
        type: "p",
        text: "Les vols pour Zanzibar depuis Paris font escale dans une grande plateforme de correspondance, au Moyen-Orient, en Turquie ou en Afrique de l'Est, selon la compagnie. Avec un billet unique, les bagages en soute suivent en général jusqu'à la destination finale et la correspondance est protégée : si le premier vol prend du retard, la compagnie vous réachemine. Si vous réservez par vous-même deux billets séparés, ce risque est pour vous : prévoyez une marge généreuse entre les vols.",
      },
      { type: "h2", text: "L'aéroport de Zanzibar" },
      {
        type: "p",
        text: `Les vols atterrissent à l'aéroport international de Zanzibar, près de Stone Town. De là partent les transferts vers l'hôtel, qui durent d'une à deux heures selon que le resort se trouve au nord ou sur la côte est. Dans nos séjours, les transferts sont inclus. Pour choisir la zone, voyez [où se trouve Zanzibar et comment est l'île](${L.guide("where")}).`,
      },
      { type: "h2", text: "Ce que comprend le vol dans nos séjours" },
      {
        type: "ul",
        items: [
          "Billet d'avion sur **vol régulier, en classe économique**, au départ de Paris ou de Bruxelles.",
          "Taxes d'aéroport et supplément carburant (susceptibles d'évoluer jusqu'à l'émission des billets).",
          "Transferts et assurance voyage.",
        ],
      },
      { type: "h2", text: "Conseils pour un long voyage" },
      {
        type: "ul",
        items: [
          "Gardez l'essentiel en bagage cabine : médicaments, chargeurs et une tenue de rechange.",
          "Hydratez-vous et levez-vous de temps en temps pendant le vol.",
          "Prévoyez une marge généreuse entre les vols si vous réservez par vous-même.",
          "Vérifiez les conditions d'entrée et de santé avant de partir.",
        ],
      },
      {
        type: "p",
        text: `Vous préférez tout confier à une équipe, avec vol, hôtel, transferts et assurance ? Découvrez nos [hôtels à Zanzibar tout inclus avec vol depuis Paris](${L.hotels}) et choisissez votre date avec l'aide de notre guide pour savoir [quand partir à Zanzibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "Combien d'heures de vol de Paris à Zanzibar ?", answer: "Il y a environ 7 100 km à vol d'oiseau. Avec une escale, comptez environ une journée de voyage au total, selon la correspondance." },
      { question: "Existe-t-il des vols directs Paris-Zanzibar ?", answer: "Sur les vols réguliers, en général non : il y a le plus souvent une escale. Nous confirmons l'itinéraire précis avant de valider la réservation." },
      { question: "Combien de temps dure l'escale ?", answer: "D'un peu plus d'une heure à plus d'une demi-journée, selon la correspondance." },
      { question: "Sur quel aéroport atterrit-on à Zanzibar ?", answer: "À l'aéroport international de Zanzibar (ZNZ), près de Stone Town." },
      { question: "Les transferts sont-ils inclus ?", answer: "Oui, dans nos séjours, les transferts entre l'aéroport et l'hôtel sont inclus." },
    ],
    related: RELATED,
  },

  safety: {
    slug: POST_SLUGS.safety.fr,
    title: "Zanzibar danger : peut-on y voyager en sécurité ?",
    seoTitle: "Zanzibar danger : sécurité, assurance et santé",
    description:
      "Zanzibar danger ou destination sûre ? Les vrais risques, les avis officiels, l'assurance obligatoire, la santé (paludisme, vaccins) et les usages locaux.",
    subtitle: "Quels sont les vrais risques, quelle assurance est obligatoire et que consulter avant de réserver.",
    excerpt: "Sécurité à Zanzibar : avis officiels, assurance obligatoire, santé et conseils pratiques.",
    category: "Sécurité et santé",
    tags: ["sécurité", "assurance", "santé"],
    keywords: ["zanzibar danger", "zanzibar sécurité", "zanzibar assurance obligatoire", "zanzibar vaccins", "zanzibar est-il dangereux"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Plage de Zanzibar vue du ciel" },
    blocks: [
      {
        type: "p",
        text: "**Zanzibar danger ? Pour la plupart des voyageurs, non : ils passent une semaine sur l'île sans incident, surtout en resort.** Mais la sécurité n'est jamais une garantie et la situation en Tanzanie peut évoluer. Avant de réserver, consultez toujours les conseils aux voyageurs officiels les plus récents.",
      },
      { type: "h2", text: "La situation politique : ce qui s'est passé récemment" },
      {
        type: "p",
        text: "En octobre et novembre 2025, après les élections en Tanzanie, des manifestations et des troubles ont perturbé des liaisons de transport, notamment des vols et des liaisons maritimes. Cela peut se reproduire. C'est pourquoi, plutôt que de vous dire que « tout va bien », nous vous recommandons de vérifier les avis en vigueur avant le départ.",
      },
      {
        type: "note",
        text: "Consultez les Conseils aux voyageurs du ministère de l'Europe et des Affaires étrangères pour la Tanzanie avant de réserver, puis de nouveau avant de partir. Si la situation change après votre réservation, nous reviendrons vers vous.",
      },
      { type: "h2", text: "Assurance obligatoire pour entrer à Zanzibar" },
      {
        type: "p",
        text: "Depuis le 1er octobre 2024, tous les visiteurs de Zanzibar (hors résidents de Tanzanie) doivent disposer d'une assurance voyage obligatoire, souscrite auprès de la Zanzibar Insurance Corporation, couvrant tout le séjour. Les autorités peuvent refuser l'entrée à ceux qui n'en ont pas. La couverture de cette assurance étant limitée, il est conseillé d'avoir aussi une assurance voyage internationale avec une bonne assistance médicale.",
      },
      { type: "h2", text: "Les risques du quotidien" },
      {
        type: "ul",
        items: [
          "**Petits vols :** comme dans toute destination touristique. Ne laissez pas d'objets de valeur sur la plage ni à la vue de tous.",
          "**Soleil et chaleur :** crème solaire, chapeau et beaucoup d'eau. Le rayonnement près de l'équateur est fort.",
          "**Mer et marées :** renseignez-vous sur les marées et portez des chaussures dans les zones de roches ou d'oursins.",
          "**Routes :** la circulation est désordonnée. Privilégiez les transports organisés par l'hôtel.",
        ],
      },
      { type: "h2", text: "Santé : vaccins et paludisme" },
      {
        type: "ul",
        items: [
          "Parlez à votre médecin ou à un centre de vaccinations internationales **avant de partir** pour les vaccins et la prévention du paludisme.",
          "Ne buvez que de l'eau en bouteille ou d'origine sûre.",
          "Utilisez un répulsif, surtout au crépuscule.",
        ],
      },
      {
        type: "p",
        text: "Nos séjours comprennent une **assurance voyage**. Lisez les conditions et vérifiez ce qu'elle couvre, notamment l'assistance médicale, et demandez-nous comment l'assurance obligatoire de Zanzibar est traitée.",
      },
      { type: "h2", text: "Respect des usages locaux" },
      {
        type: "p",
        text: "Zanzibar est une société à majorité musulmane. Dans les resorts et sur les plages touristiques, le maillot de bain est normal, mais en dehors, et surtout à Stone Town, habillez-vous plus sobrement (épaules et genoux couverts) et demandez la permission avant de photographier des personnes.",
      },
      { type: "h2", text: "Alors, Zanzibar est-il dangereux ?" },
      {
        type: "p",
        text: `Pour qui séjourne en resort et fait des excursions organisées, le risque au quotidien est faible. Ce qui pèse le plus, c'est l'incertitude politique et logistique, que l'on gère avec une information à jour et une bonne assurance. En cas de doute, parlez à notre équipe avant de demander la réservation. Voyez nos [hôtels à Zanzibar](${L.hotels}) et notre [page contact](${L.contact}). Pour préparer le voyage, lisez aussi [où se trouve Zanzibar](${L.guide("where")}).`,
      },
    ],
    faq: [
      { question: "Zanzibar est-il dangereux ?", answer: "Pour qui séjourne en resort et fait des excursions organisées, le risque au quotidien est faible. Il convient de suivre les avis officiels, car la situation en Tanzanie peut évoluer." },
      { question: "Y a-t-il eu des problèmes récents en Tanzanie ?", answer: "Oui. En octobre et novembre 2025, après les élections, des manifestations et des troubles ont eu lieu, y compris sur les transports. Vérifiez les avis en vigueur avant de partir." },
      { question: "Faut-il une assurance spéciale pour entrer à Zanzibar ?", answer: "Oui. Depuis le 1er octobre 2024, les visiteurs doivent avoir une assurance voyage obligatoire, souscrite auprès de la Zanzibar Insurance Corporation, et peuvent se voir refuser l'entrée sans elle." },
      { question: "Faut-il des vaccins pour Zanzibar ?", answer: "Parlez-en à votre médecin ou à un centre de vaccinations internationales avant le départ pour savoir ce qui vous est recommandé." },
      { question: "L'assurance voyage est-elle incluse ?", answer: "Nos séjours comprennent une assurance voyage. Lisez les conditions pour vérifier la couverture et demandez-nous comment l'assurance obligatoire de Zanzibar est traitée." },
    ],
    related: RELATED,
  },
};
