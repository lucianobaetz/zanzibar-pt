// Schematic map (not to scale): where Zanzibar sits next to mainland Tanzania, and where the beaches are.
const SPOTS = [
  { name: "Nungwi", x: 262, y: 70 },
  { name: "Kendwa", x: 236, y: 92 },
  { name: "Kiwengwa", x: 292, y: 148 },
  { name: "Stone Town", x: 214, y: 214 },
  { name: "Paje", x: 296, y: 262 },
  { name: "Jambiani", x: 290, y: 292 },
] as const;

export const ZanzibarMap = () => (
  <figure className="overflow-hidden rounded-3xl border border-sand-200 bg-white">
    <svg viewBox="0 0 480 360" role="img" aria-labelledby="mapa-titulo mapa-desc" className="h-auto w-full">
      <title id="mapa-titulo">Esquema de Zanzibar e da costa da Tanzânia</title>
      <desc id="mapa-desc">
        Zanzibar fica no oceano Índico, a leste da Tanzânia continental. Nungwi e Kendwa ficam a norte, Kiwengwa a nordeste, Stone Town a oeste e
        Paje e Jambiani a sudeste.
      </desc>
      <rect width="480" height="360" fill="#d8f1ee" />
      <path d="M0 0 H92 C110 60 78 110 98 170 C116 230 84 300 100 360 H0 Z" fill="#eadcc0" />
      <text x="20" y="190" fill="#0a3440" fontSize="14" fontWeight="700" transform="rotate(-90 20 190)">
        TANZÂNIA (continente)
      </text>
      <path
        d="M246 40 C282 44 300 96 306 150 C312 200 316 236 322 272 C326 304 306 326 288 322 C266 316 250 280 238 244 C226 208 206 176 214 140 C222 100 222 52 246 40 Z"
        fill="#fbf7ef"
        stroke="#0f5a6b"
        strokeWidth="2"
      />
      <text x="340" y="190" fill="#0f5a6b" fontSize="22" fontWeight="700">
        Zanzibar
      </text>
      <text x="340" y="212" fill="#46595f" fontSize="12">
        (ilha de Unguja)
      </text>
      <text x="360" y="330" fill="#0f5a6b" fontSize="13" fontStyle="italic">
        Oceano Índico
      </text>
      {SPOTS.map((spot) => (
        <g key={spot.name}>
          <circle cx={spot.x} cy={spot.y} r="5" fill="#d9572e" />
          <text x={spot.x + (spot.x > 250 ? 10 : -10)} y={spot.y + 4} fontSize="13" fontWeight="600" fill="#14262c" textAnchor={spot.x > 250 ? "start" : "end"}>
            {spot.name}
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
    <figcaption className="bg-sand-100 px-4 py-2 text-sm text-ink-soft">Esquema simplificado, sem escala. Serve para perceber as zonas, não para navegar.</figcaption>
  </figure>
);
