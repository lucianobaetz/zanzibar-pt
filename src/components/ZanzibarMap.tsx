// Schematic map (not to scale): where Zanzibar sits next to mainland Tanzania, and where the beaches are.
const SPOTS = [
  { name: "Nungwi", x: 262, y: 70 },
  { name: "Kendwa", x: 236, y: 92 },
  { name: "Kiwengwa", x: 292, y: 148 },
  { name: "Stone Town", x: 214, y: 214 },
  { name: "Paje", x: 296, y: 262 },
  { name: "Jambiani", x: 290, y: 292 },
] as const;

import type { LocaleCode } from "@/i18n/locales";

type MapText = { name: string; title: string; desc: string; mainland: string; island: string; ocean: string; caption: string; stone: string };

const TEXT: Record<LocaleCode, MapText> = {
  pt: {
    name: "Zanzibar",
    title: "Esquema de Zanzibar e da costa da Tanzânia",
    desc: "Zanzibar fica no oceano Índico, a leste da Tanzânia continental. Nungwi e Kendwa ficam a norte, Kiwengwa a nordeste, Stone Town a oeste e Paje e Jambiani a sudeste.",
    mainland: "{t.mainland}",
    island: "{t.island}",
    ocean: "Oceano Índico",
    caption: "Esquema simplificado, sem escala. Serve para perceber as zonas, não para navegar.",
    stone: "Stone Town",
  },
  es: {
    name: "Zanzíbar",
    title: "Esquema de Zanzíbar y de la costa de Tanzania",
    desc: "Zanzíbar está en el océano Índico, al este de la Tanzania continental. Nungwi y Kendwa están al norte, Kiwengwa al noreste, Stone Town al oeste y Paje y Jambiani al sureste.",
    mainland: "TANZANIA (continente)",
    island: "(isla de Unguja)",
    ocean: "Océano Índico",
    caption: "Esquema simplificado, sin escala. Sirve para entender las zonas, no para navegar.",
    stone: "Stone Town",
  },
  fr: {
    name: "Zanzibar",
    title: "Schéma de Zanzibar et de la côte tanzanienne",
    desc: "Zanzibar se trouve dans l'océan Indien, à l'est de la Tanzanie continentale. Nungwi et Kendwa sont au nord, Kiwengwa au nord-est, Stone Town à l'ouest, Paje et Jambiani au sud-est.",
    mainland: "TANZANIE (continent)",
    island: "(île d'Unguja)",
    ocean: "Océan Indien",
    caption: "Schéma simplifié, sans échelle. Il aide à comprendre les zones, pas à naviguer.",
    stone: "Stone Town",
  },
  en: {
    name: "Zanzibar",
    title: "Sketch map of Zanzibar and the Tanzanian coast",
    desc: "Zanzibar lies in the Indian Ocean, east of mainland Tanzania. Nungwi and Kendwa are in the north, Kiwengwa in the north-east, Stone Town in the west and Paje and Jambiani in the south-east.",
    mainland: "TANZANIA (mainland)",
    island: "(Unguja island)",
    ocean: "Indian Ocean",
    caption: "Simplified sketch, not to scale. It helps you understand the areas, not to navigate.",
    stone: "Stone Town",
  },
  de: {
    name: "Sansibar",
    title: "Übersichtskarte von Sansibar und der Küste Tansanias",
    desc: "Sansibar liegt im Indischen Ozean, östlich des tansanischen Festlands. Nungwi und Kendwa liegen im Norden, Kiwengwa im Nordosten, Stone Town im Westen sowie Paje und Jambiani im Südosten.",
    mainland: "TANSANIA (Festland)",
    island: "(Insel Unguja)",
    ocean: "Indischer Ozean",
    caption: "Vereinfachte Skizze, nicht maßstabsgetreu. Sie zeigt die Regionen, dient aber nicht zur Navigation.",
    stone: "Stone Town",
  },
};

export const ZanzibarMap = ({ locale = "pt" }: { locale?: LocaleCode }) => {
  const t = TEXT[locale];
  const label = (name: string) => (name === "Stone Town" ? t.stone : name);
  return (
  <figure className="overflow-hidden rounded-3xl border border-sand-200 bg-white">
    <svg viewBox="0 0 480 360" role="img" aria-labelledby="mapa-titulo mapa-desc" className="h-auto w-full">
      <title id="mapa-titulo">{t.title}</title>
      <desc id="mapa-desc">{t.desc}</desc>
      <rect width="480" height="360" fill="#d8f1ee" />
      <path d="M0 0 H92 C110 60 78 110 98 170 C116 230 84 300 100 360 H0 Z" fill="#eadcc0" />
      <text x="20" y="190" fill="#0a3440" fontSize="14" fontWeight="700" transform="rotate(-90 20 190)">
        {t.mainland}
      </text>
      <path
        d="M246 40 C282 44 300 96 306 150 C312 200 316 236 322 272 C326 304 306 326 288 322 C266 316 250 280 238 244 C226 208 206 176 214 140 C222 100 222 52 246 40 Z"
        fill="#fbf7ef"
        stroke="#0f5a6b"
        strokeWidth="2"
      />
      <text x="340" y="190" fill="#0f5a6b" fontSize="22" fontWeight="700">
        {t.name}
      </text>
      <text x="340" y="212" fill="#46595f" fontSize="12">
        {t.island}
      </text>
      <text x="360" y="330" fill="#0f5a6b" fontSize="13" fontStyle="italic">
        {t.ocean}
      </text>
      {SPOTS.map((spot) => (
        <g key={spot.name}>
          <circle cx={spot.x} cy={spot.y} r="5" fill="#d9572e" />
          <text x={spot.x + (spot.x > 250 ? 10 : -10)} y={spot.y + 4} fontSize="13" fontWeight="600" fill="#14262c" textAnchor={spot.x > 250 ? "start" : "end"}>
            {label(spot.name)}
          </text>
        </g>
      ))}
      <g transform="translate(430 40)">
        <path d="M0 22 L8 0 L16 22 L8 17 Z" fill="#0a3440" />
        <text x="8" y="40" fontSize="12" fontWeight="700" textAnchor="middle" fill="#0a3440">
          N
        </text>
      </g>
    </svg>
    <figcaption className="bg-sand-100 px-4 py-2 text-sm text-ink-soft">{t.caption}</figcaption>
  </figure>
  );
};
