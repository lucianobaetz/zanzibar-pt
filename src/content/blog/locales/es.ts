import type { Post } from "../types";
import { POST_SLUGS, type CoreGuideKey } from "../slugs";
import { linksFor } from "./links";

const L = linksFor("es");
const RELATED = [
  { href: L.hotels, label: "Hoteles en Zanzíbar todo incluido con vuelo" },
  { href: L.home, label: "Viaje a Zanzíbar 2027: vuelos, traslados y seguro" },
] as const;
const DATES = { published: "2026-11-14", updated: "2026-11-14", status: "published" } as const;

export const ES_POSTS: Record<CoreGuideKey, Post> = {
  where: {
    slug: POST_SLUGS.where.es,
    title: "¿Dónde está Zanzíbar? Mapa, país y cómo llegar",
    seoTitle: "¿Dónde está Zanzíbar? Mapa, país y cómo llegar",
    description:
      "¿Dónde está Zanzíbar? En el océano Índico, frente a Tanzania, a unos 6.800 km de Madrid. Mapa, zonas de playa (Nungwi, Kiwengwa, Paje) y cómo llegar.",
    subtitle: "En qué país está, dónde queda en el mapa, a qué distancia de Madrid y qué zona de la isla elegir.",
    excerpt: "En qué país está Zanzíbar, dónde queda en el mapa, cuánto dista de España y qué zona de playa elegir.",
    category: "Planificar el viaje",
    tags: ["ubicación", "mapa", "Tanzania"],
    keywords: ["dónde está zanzibar", "zanzibar mapa", "zanzibar en qué país está", "zanzibar tanzania", "dónde queda zanzibar"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Vista aérea de las playas de Zanzíbar, en el océano Índico, frente a la costa de Tanzania" },
    blocks: [
      {
        type: "p",
        text: "**¿Dónde está Zanzíbar? En el océano Índico, frente a la costa oriental de África, en Tanzania.** Es un archipiélago semiautónomo que forma parte de la República Unida de Tanzania, a unos 6.800 km de Madrid en línea recta. La isla principal se llama Unguja y es la que visita casi todo el mundo; la otra isla grande es Pemba, más al norte y mucho menos turística.",
      },
      { type: "map" },
      { type: "h2", text: "¿En qué país está Zanzíbar?" },
      {
        type: "p",
        text: "Zanzíbar pertenece a Tanzania. Tiene gobierno propio para muchos asuntos internos, pero se viaja con pasaporte, como a cualquier otro país. Antes de reservar, confirme los requisitos de entrada y de salud vigentes para ciudadanos españoles en la web del Ministerio de Asuntos Exteriores.",
      },
      { type: "h2", text: "¿Dónde está Zanzíbar en el mapa?" },
      {
        type: "p",
        text: "En el mapa, Zanzíbar queda unos 6° al sur del ecuador. La isla de Unguja está a pocas decenas de kilómetros de la costa continental y a unos 75 km en línea recta de Dar es Salaam, la mayor ciudad del país. Es una isla larga y estrecha, orientada de norte a sur, con playas de arena blanca en casi toda su costa.",
      },
      {
        type: "p",
        text: "El archipiélago tiene dos islas principales. **Unguja** concentra Stone Town, el aeropuerto y casi todos los resorts. **Pemba**, al norte, es más verde y tranquila, con pocos hoteles, y la buscan sobre todo los buceadores.",
      },
      { type: "h2", text: "¿A qué distancia está Zanzíbar de España?" },
      {
        type: "p",
        text: "Entre Madrid y Zanzíbar hay unos 6.800 km en línea recta. No es un viaje corto: en los vuelos regulares suele haber una escala, y eso es lo que alarga el trayecto. Lo explicamos en la guía de [vuelos a Zanzíbar](" + L.guide("flights") + ").",
      },
      {
        type: "p",
        text: "La diferencia horaria es pequeña. Zanzíbar va 2 horas por delante de la España peninsular en invierno y 1 hora en verano, porque Tanzania no cambia la hora. Casi no hay jet lag.",
      },
      { type: "h2", text: "Cómo llegar a Zanzíbar" },
      {
        type: "ul",
        items: [
          "**En avión, directo a la isla:** el aeropuerto internacional de Zanzíbar (ZNZ) está a pocos kilómetros de Stone Town. Es la forma más sencilla y la que usan nuestros paquetes.",
          "**Vía Dar es Salaam:** hay vuelos cortos y ferris rápidos entre la ciudad y la isla. En ferri, la travesía dura unas 2 horas.",
          "**Traslados:** del aeropuerto a los resorts del norte o de la costa este calcule entre una y dos horas por carretera. En nuestros paquetes el traslado está incluido.",
        ],
      },
      { type: "h2", text: "Las zonas de la isla" },
      { type: "p", text: "Elegir bien la zona cambia el viaje, porque la marea y el tipo de playa varían según el lado de la isla." },
      {
        type: "ul",
        items: [
          `**Norte (Nungwi y Kendwa):** arena blanca y mar turquesa, con menos variación de marea. Aquí están el [Riu Jambo](${L.hotel("riu-jambo-zanzibar")}), el [Riu Palace Zanzibar](${L.hotel("riu-palace-zanzibar")}) y el [Riu Palace Swahili](${L.hotel("riu-palace-swahili-zanzibar")}).`,
          `**Noreste y costa este (Kiwengwa):** resorts grandes y mareas que condicionan el baño. Aquí están el [Meliá Zanzibar](${L.hotel("melia-zanzibar")}) y el [TUI BLUE Bahari](${L.hotel("tui-blue-bahari-zanzibar")}).`,
          "**Sureste (Paje y Jambiani):** aldeas de pescadores y la zona del kitesurf. Marea muy marcada y ambiente relajado.",
          "**Oeste (Stone Town):** la capital histórica, Patrimonio de la Humanidad de la UNESCO, a pocos minutos del aeropuerto. Merece una visita de un día.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/nungwi.webp",
        alt: "Playa de Nungwi, en el extremo norte de Zanzíbar, Tanzania",
        caption: "Nungwi, en el extremo norte de la isla.",
      },
      { type: "h2", text: "¿Qué zona de Zanzíbar elegir?" },
      {
        type: "ul",
        items: [
          "Quiere **mar para bañarse a cualquier hora**: norte (Nungwi y Kendwa).",
          "Quiere **un resort grande con muchas actividades**: Kiwengwa.",
          "Quiere **kitesurf y ambiente de aldea**: sureste, en Paje y Jambiani.",
          "Quiere **historia y paseos a pie**: alójese cerca de Stone Town o dedíquele un día.",
        ],
      },
      {
        type: "note",
        text: `¿Quiere ver los hoteles por zona? Consulte los [hoteles en Zanzíbar todo incluido](${L.hotels}) y cuándo viajar en la guía de la [mejor época para viajar a Zanzíbar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "¿En qué país está Zanzíbar?", answer: "Zanzíbar forma parte de Tanzania, en la costa oriental de África, en el océano Índico." },
      { question: "¿Zanzíbar es una isla?", answer: "Es un archipiélago. La isla principal es Unguja, la más visitada, y la otra grande es Pemba." },
      { question: "¿Dónde está Zanzíbar en el mapa?", answer: "Unos 6° al sur del ecuador, en el océano Índico, a pocas decenas de kilómetros de la costa de Tanzania y a unos 75 km en línea recta de Dar es Salaam." },
      { question: "¿A qué distancia está Zanzíbar de Madrid?", answer: "Unos 6.800 km en línea recta. En los vuelos regulares suele haber una escala." },
      { question: "¿Qué diferencia horaria hay entre España y Zanzíbar?", answer: "Zanzíbar va 2 horas por delante de la España peninsular en invierno y 1 hora en verano." },
      { question: "¿En qué zona de Zanzíbar es mejor alojarse?", answer: "El norte (Nungwi y Kendwa) tiene el mar más estable para bañarse; Kiwengwa ofrece resorts grandes; el sureste es más relajado y muy popular para el kitesurf." },
    ],
    related: RELATED,
  },

  when: {
    slug: POST_SLUGS.when.es,
    title: "Mejor época para viajar a Zanzíbar: mes a mes",
    seoTitle: "Mejor época para viajar a Zanzíbar: clima mes a mes",
    description:
      "La mejor época para viajar a Zanzíbar es de junio a octubre, con cielos despejados. Clima mes a mes, lluvias, temperatura del mar, kitesurf y buceo.",
    subtitle: "Cuándo ir a Zanzíbar según lo que busque: playa, buceo, kitesurf o precio.",
    excerpt: "Clima mes a mes, temporada de lluvias, temperatura del mar y los mejores meses para ir a Zanzíbar.",
    category: "Planificar el viaje",
    tags: ["clima", "cuándo ir", "temporada"],
    keywords: ["mejor época para viajar a zanzibar", "cuándo ir a zanzibar", "zanzibar clima", "zanzibar mejor mes", "zanzibar temporada de lluvias"],
    ...DATES,
    cover: { src: "/images/destino/hero-molhe-por-do-sol.webp", alt: "Muelle al atardecer en una playa de Zanzíbar, en la mejor época del año" },
    blocks: [
      {
        type: "p",
        text: "**La mejor época para viajar a Zanzíbar es de junio a octubre**, la estación seca, con cielos despejados, menos humedad y noches más frescas. Enero y febrero también son muy buenos para la playa, aunque más calurosos. Marzo, abril y mayo son los meses de las grandes lluvias. Si se pregunta cuándo ir a Zanzíbar, esa es la respuesta corta; a continuación la detallamos mes a mes.",
      },
      {
        type: "p",
        text: "Zanzíbar está cerca del ecuador, así que no tiene verano e invierno como España. El año se divide en estación seca y estación de lluvias, y la temperatura varía poco: de día se mueve casi siempre entre 28 °C y 33 °C.",
      },
      { type: "h2", text: "El clima en Zanzíbar mes a mes" },
      {
        type: "table",
        head: ["Meses", "Qué esperar", "Para la playa"],
        rows: [
          ["Enero y febrero", "Calor, sol fuerte y más humedad. Pueden caer chubascos breves.", "Muy bueno"],
          ["Marzo, abril y mayo", "Grandes lluvias. Días nublados y chubascos fuertes; algunos servicios cierran.", "No recomendado"],
          ["Junio a septiembre", "Seco, cielo despejado y noches más frescas. El periodo más agradable.", "Ideal"],
          ["Octubre", "Todavía seco, con el calor de vuelta.", "Muy bueno"],
          ["Noviembre y diciembre", "Lluvias cortas, normalmente por la tarde, y más calor.", "Variable"],
        ],
      },
      {
        type: "image",
        src: "/images/destino/casal-banco-areia.webp",
        alt: "Pareja en un banco de arena de Zanzíbar con el mar en calma",
        caption: "En la estación seca el mar tiene colores más intensos.",
      },
      { type: "h2", text: "¿Cuál es la mejor época para la playa?" },
      {
        type: "p",
        text: "Para quien busca sobre todo playa y mar azul, la mejor época para viajar a Zanzíbar es de junio a octubre: el cielo está más limpio, la humedad es menor y las noches son agradables. Enero y febrero dan más calor y más sol directo, ideal para quien disfruta del calor, pero piden más protección solar y más agua.",
      },
      { type: "h2", text: "¿A qué temperatura está el mar?" },
      {
        type: "p",
        text: "El agua es cálida todo el año y se puede nadar en cualquier mes, normalmente entre 26 °C y 29 °C. Lo que cambia es la visibilidad y las condiciones: en la estación de lluvias el mar se vuelve más turbio y el viento más irregular.",
      },
      {
        type: "p",
        text: `Cuenta también la marea. En la costa este y el sureste (Kiwengwa, Paje, Jambiani) la marea baja retira el mar muchos metros y el baño depende de la hora. En el norte (Nungwi y Kendwa) el efecto es menor. Para elegir zona, vea [dónde está Zanzíbar y cómo es la isla](${L.guide("where")}).`,
      },
      { type: "h2", text: "¿Cuándo ir a Zanzíbar para kitesurf o buceo?" },
      {
        type: "ul",
        items: [
          "**Kitesurf:** el viento es más constante entre junio y septiembre y también en enero y febrero, sobre todo en el sureste, en Paje y Jambiani.",
          "**Buceo y snorkel:** la mejor visibilidad suele darse en la estación seca, de junio a octubre.",
          "**Excursiones y Stone Town:** la estación seca es más cómoda para caminar y visitar la ciudad.",
        ],
      },
      { type: "h2", text: "Temporada alta y precios" },
      {
        type: "p",
        text: "La demanda sube en el verano europeo, de julio a septiembre, y también en Navidad y Fin de Año, y los precios suben con ella. Si busca el mejor equilibrio entre buen tiempo y precio, mire junio y octubre: son meses secos y quedan fuera del pico de julio y agosto.",
      },
      {
        type: "note",
        text: `Consulte precios y fechas de salida en la página de cada hotel: [hoteles en Zanzíbar todo incluido](${L.hotels}). Los precios que mostramos son «desde», por persona, y el equipo confirma la disponibilidad antes de cerrar la reserva.`,
      },
      { type: "h2", text: "Entonces, ¿cuándo ir a Zanzíbar?" },
      {
        type: "ul",
        items: [
          "**Mejor tiempo:** de junio a octubre.",
          "**Más calor para playa y buceo:** enero y febrero.",
          "**Más económico:** fuera del pico de julio y agosto.",
          "**Evitar:** de marzo a mayo, por las lluvias.",
        ],
      },
    ],
    faq: [
      { question: "¿Cuál es la mejor época para viajar a Zanzíbar?", answer: "De junio a octubre, la estación seca, con cielo despejado y menos humedad. Enero y febrero también son buenos, pero más calurosos." },
      { question: "¿Cuándo llueve en Zanzíbar?", answer: "Las grandes lluvias van de marzo a mayo. En noviembre y diciembre hay lluvias más cortas." },
      { question: "¿Qué temperatura hace en Zanzíbar?", answer: "De día ronda casi siempre entre 28 °C y 33 °C durante todo el año, y el mar es cálido en todos los meses." },
      { question: "¿Cuándo ir a Zanzíbar para hacer kitesurf?", answer: "Entre junio y septiembre y en enero y febrero, cuando el viento es más constante, sobre todo en el sureste de la isla." },
      { question: "¿Qué mes es más barato para ir a Zanzíbar?", answer: "Los meses fuera del pico de julio y agosto, como junio u octubre, suelen ser más económicos y siguen siendo secos." },
    ],
    related: RELATED,
  },

  things: {
    slug: POST_SLUGS.things.es,
    title: "Qué ver en Zanzíbar: 12 lugares y experiencias",
    seoTitle: "Qué ver en Zanzíbar: 12 lugares y experiencias",
    description:
      "Qué ver en Zanzíbar en una semana: Stone Town, las playas de Nungwi, Kendwa y Paje, The Rock, tour de especias, Jozani y excursiones en dhow. Con plan por días.",
    subtitle: "Playas, Stone Town y excursiones: un plan sencillo para siete noches.",
    excerpt: "Los 12 lugares y experiencias que más merecen la pena en Zanzíbar, con un plan por días.",
    category: "Qué hacer",
    tags: ["qué ver", "Stone Town", "excursiones"],
    keywords: ["qué ver en zanzibar", "qué hacer en zanzibar", "zanzibar excursiones", "stone town zanzibar", "zanzibar en una semana"],
    ...DATES,
    cover: { src: "/images/destino/stone-town.webp", alt: "Calle de Stone Town, el casco histórico de Zanzíbar" },
    blocks: [
      {
        type: "p",
        text: "**En Zanzíbar el plan clásico combina playa, la ciudad histórica de Stone Town y una o dos excursiones.** Quien busca qué ver en Zanzíbar suele querer un plan sencillo, y con 7 noches hay tiempo para todo sin prisas. Estos son los 12 lugares y experiencias que más merecen la pena, agrupados por tipo.",
      },
      { type: "h2", text: "Qué ver en Zanzíbar: playas" },
      {
        type: "ul",
        items: [
          "**Nungwi:** en el extremo norte, arena blanca y atardeceres.",
          "**Kendwa:** larga playa de arena blanca, conocida por el mar con poca marea.",
          "**Paje:** la capital del kitesurf, en la costa sureste.",
          "**Jambiani:** aldea de pescadores con barcos tradicionales.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/paje-kitesurf.webp",
        alt: "Kitesurf en la playa de Paje, en Zanzíbar",
        caption: "Paje, el destino de kitesurf de Zanzíbar.",
      },
      { type: "h2", text: "Qué ver en Zanzíbar: cultura e historia" },
      {
        type: "ul",
        items: [
          "**Stone Town:** casco histórico declarado por la UNESCO, con callejones, puertas talladas y mercados.",
          "**Mercado de Darajani:** para ver el día a día local.",
          "**Tour de especias:** visita a plantaciones y degustación de frutas y especias.",
        ],
      },
      { type: "h2", text: "Qué ver en Zanzíbar: mar y naturaleza" },
      {
        type: "ul",
        items: [
          "**The Rock:** el restaurante sobre una roca en el mar, en Pingwe, una de las imágenes más famosas de la isla.",
          "**Paseo en dhow:** al atardecer o de día completo, con paradas para hacer snorkel.",
          "**Delfines en Kizimkazi:** salida en barco en el sur de la isla.",
          "**Bosque de Jozani:** hogar del colobo rojo.",
          "**Isla Prisión:** paseo corto en barco desde Stone Town para ver tortugas gigantes.",
        ],
      },
      { type: "h2", text: "¿Qué ver en Stone Town en un día?" },
      {
        type: "p",
        text: "Reserve una mañana o una tarde para recorrer a pie los callejones del casco histórico, sin mapa, buscando las puertas talladas. Pase por el Viejo Fuerte y el mercado de Darajani y termine en los Jardines Forodhani, junto al mar, donde al caer la tarde hay puestos de comida callejera. Está a pocos minutos del aeropuerto, así que encaja bien el día de llegada o de salida.",
      },
      { type: "h2", text: "Zanzíbar en una semana: plan por días" },
      {
        type: "ul",
        items: [
          "**Días 1 y 2:** llegada, descanso y primeros baños en la playa del hotel.",
          "**Día 3:** Stone Town y tour de especias.",
          "**Día 4:** paseo en dhow con snorkel o delfines en Kizimkazi.",
          "**Día 5:** bosque de Jozani y tarde en Paje o Jambiani.",
          "**Resto de días:** playa, spa y atardeceres, sin agenda.",
        ],
      },
      {
        type: "p",
        text: `Nuestros paquetes son de 7 noches. Suele bastar para 3 o 4 días de playa y resort, 1 día en Stone Town y 1 o 2 excursiones. Si quiere más, puede añadir un safari en la Tanzania continental. Para elegir fechas, vea la [mejor época para viajar a Zanzíbar](${L.guide("when")}).`,
      },
      {
        type: "note",
        text: "Las excursiones y entradas no están incluidas en el paquete. Se reservan en destino o a través del hotel. Confirme siempre precios y condiciones antes de pagar.",
      },
      { type: "h2", text: "Dónde alojarse para aprovecharlo mejor" },
      {
        type: "p",
        text: `La elección del hotel define el resto. En el norte está más cerca de las mejores playas para el baño; en la costa este los resorts son grandes y completos. Véalos todos en [hoteles en Zanzíbar](${L.hotels}).`,
      },
    ],
    faq: [
      { question: "¿Qué ver en Zanzíbar?", answer: "Stone Town, las playas de Nungwi, Kendwa, Paje y Jambiani, The Rock, el tour de especias, el bosque de Jozani y los paseos en barco." },
      { question: "¿Qué ver en Stone Town en un día?", answer: "Los callejones y las puertas talladas, el Viejo Fuerte, el mercado de Darajani y, al final del día, los Jardines Forodhani, junto al mar." },
      { question: "¿Cuántos días hacen falta en Zanzíbar?", answer: "Una semana permite playa, un día en Stone Town y una o dos excursiones sin prisas." },
      { question: "¿Las excursiones están incluidas en el paquete?", answer: "No. Los paquetes incluyen vuelo, 7 noches todo incluido, traslados y seguro de viaje. Las excursiones se reservan aparte." },
    ],
    related: RELATED,
  },

  flights: {
    slug: POST_SLUGS.flights.es,
    title: "Vuelos a Zanzíbar desde España: escalas y duración",
    seoTitle: "Vuelos a Zanzíbar desde Madrid: escalas y duración",
    description:
      "Vuelos a Zanzíbar desde Madrid: cuántas horas son, si hay vuelo directo, cómo funcionan las escalas y qué incluye el vuelo en nuestros paquetes todo incluido.",
    subtitle: "Cuántas horas son de Madrid a Zanzíbar, si hay vuelo directo y cómo funcionan las escalas.",
    excerpt: "Duración del viaje, escalas habituales, aeropuerto de llegada y qué incluye el vuelo en nuestros paquetes.",
    category: "Planificar el viaje",
    tags: ["vuelos", "escalas", "Madrid"],
    keywords: ["vuelos a zanzibar", "vuelos madrid zanzibar", "cuántas horas de vuelo a zanzibar", "zanzibar vuelo directo", "aeropuerto de zanzibar"],
    ...DATES,
    cover: { src: "/images/destino/molhe-aerea-topo.webp", alt: "Vista aérea de un muelle sobre el mar turquesa de Zanzíbar" },
    blocks: [
      {
        type: "p",
        text: "**De Madrid a Zanzíbar hay unos 6.800 km en línea recta.** Quien busca vuelos a Zanzíbar quiere saber cuánto tiempo pasará en el aire, y la respuesta honesta es que depende de la escala: para la mayoría de la gente supone un vuelo con una escala y un viaje que ronda un día entero, contando la espera entre vuelos. El tiempo exacto depende de la aerolínea, del aeropuerto de escala y del día.",
      },
      { type: "h2", text: "¿Cuántas horas son de Madrid a Zanzíbar?" },
      {
        type: "p",
        text: "Como orden de magnitud, el tiempo de vuelo suma dos tramos: el primero, desde Madrid hasta el aeropuerto de escala, y el segundo, hasta Zanzíbar. Con escala en Oriente Medio, por ejemplo, el primer tramo puede rondar las 6 horas y el segundo las 5 horas y media. A eso se suma la espera entre vuelos, que puede ir de poco más de una hora a más de medio día.",
      },
      { type: "h2", text: "¿Hay vuelo directo de España a Zanzíbar?" },
      {
        type: "p",
        text: "En los vuelos regulares, normalmente no: lo habitual es **una escala**. La disponibilidad de vuelos directos depende de la temporada y del operador, y por eso no la damos por supuesta. En cada pedido de reserva confirmamos el itinerario concreto con usted antes de cerrarla.",
      },
      {
        type: "note",
        text: "No prometemos vuelo directo. Cada salida tiene sus horarios y su escala, y los confirmamos con usted antes de que la reserva quede cerrada.",
      },
      { type: "h2", text: "¿Cuánto dura el viaje puerta a puerta?" },
      {
        type: "ul",
        items: [
          "**Tiempo de vuelo:** la suma de los dos vuelos; el segundo, desde África u Oriente Medio hasta Zanzíbar, es más corto.",
          "**Escala:** de poco más de una hora a más de medio día, según la conexión.",
          "**Total puerta a puerta:** cuente con un día entero, incluido el traslado al hotel.",
        ],
      },
      {
        type: "p",
        text: "Como Zanzíbar va 2 horas por delante de la España peninsular en invierno y 1 hora en verano, la llegada suele ser al día siguiente de la salida. Planifique el primer día sin prisas.",
      },
      { type: "h2", text: "Cómo funcionan los vuelos a Zanzíbar con escala" },
      {
        type: "p",
        text: "Los vuelos a Zanzíbar desde Madrid hacen escala en un gran aeropuerto de conexión, en Oriente Medio, Turquía o África oriental, según la aerolínea. Con un billete único, el equipaje facturado sigue en general hasta el destino final y la conexión está protegida: si el primer vuelo se retrasa, la aerolínea le reubica. Por su cuenta, con dos billetes separados, ese riesgo corre de su parte, y conviene dejar un margen generoso entre vuelos.",
      },
      { type: "h2", text: "El aeropuerto de Zanzíbar" },
      {
        type: "p",
        text: `Los vuelos aterrizan en el aeropuerto internacional de Zanzíbar, cerca de Stone Town. Desde allí salen los traslados al hotel, que pueden durar entre una y dos horas según el resort esté en el norte o en la costa este. En nuestros paquetes los traslados están incluidos. Para elegir zona, vea [dónde está Zanzíbar y cómo es la isla](${L.guide("where")}).`,
      },
      { type: "h2", text: "Qué incluye el vuelo en nuestros paquetes" },
      {
        type: "ul",
        items: [
          "Pasaje aéreo en **vuelo regular, clase turista**, con salida desde Madrid.",
          "Tasas de aeropuerto y de combustible (sujetas a cambio hasta la emisión de los billetes).",
          "Traslados y seguro de viaje.",
        ],
      },
      { type: "h2", text: "Consejos para un viaje largo" },
      {
        type: "ul",
        items: [
          "Lleve en el equipaje de mano lo esencial: medicación, cargadores y una muda de ropa.",
          "Hidrátese y levántese de vez en cuando durante el vuelo.",
          "Deje un margen generoso entre vuelos si reserva por su cuenta.",
          "Confirme los requisitos de entrada y de salud antes de salir.",
        ],
      },
      {
        type: "p",
        text: `¿Prefiere tener todo resuelto, con vuelo, hotel, traslados y seguro? Vea los [hoteles en Zanzíbar todo incluido con vuelo desde Madrid](${L.hotels}) y elija fecha con ayuda de la guía sobre la [mejor época para viajar a Zanzíbar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "¿Cuántas horas son de Madrid a Zanzíbar?", answer: "Son unos 6.800 km en línea recta. Con una escala, cuente con aproximadamente un día de viaje en total, según la conexión." },
      { question: "¿Hay vuelos directos de Madrid a Zanzíbar?", answer: "En los vuelos regulares, normalmente no: lo habitual es una escala. Confirmamos el itinerario concreto antes de cerrar la reserva." },
      { question: "¿Cuánto dura la escala en los vuelos a Zanzíbar?", answer: "De poco más de una hora a más de medio día, según la conexión." },
      { question: "¿En qué aeropuerto se aterriza en Zanzíbar?", answer: "En el aeropuerto internacional de Zanzíbar (ZNZ), cerca de Stone Town." },
      { question: "¿Los traslados están incluidos?", answer: "Sí, en nuestros paquetes están incluidos los traslados entre el aeropuerto y el hotel." },
    ],
    related: RELATED,
  },

  safety: {
    slug: POST_SLUGS.safety.es,
    title: "¿Es seguro viajar a Zanzíbar? Seguridad y salud",
    seoTitle: "¿Es seguro viajar a Zanzíbar? Seguridad, seguro y salud",
    description:
      "¿Es seguro viajar a Zanzíbar? Riesgos reales, avisos oficiales, el seguro obligatorio para entrar, salud (malaria, vacunas) y costumbres locales.",
    subtitle: "Qué riesgos hay de verdad, qué seguro es obligatorio y qué consultar antes de reservar.",
    excerpt: "Seguridad en Zanzíbar: avisos oficiales, seguro obligatorio, salud y consejos prácticos.",
    category: "Seguridad y salud",
    tags: ["seguridad", "seguro", "salud"],
    keywords: ["es seguro viajar a zanzibar", "zanzibar seguridad", "zanzibar seguro obligatorio", "zanzibar peligroso", "zanzibar vacunas"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Playa de Zanzíbar vista desde el aire" },
    blocks: [
      {
        type: "p",
        text: "**¿Es seguro viajar a Zanzíbar? Para la mayoría de turistas, sí: pasan una semana en la isla sin incidentes, sobre todo en los resorts.** Pero la seguridad no es una garantía y la situación en Tanzania puede cambiar. Antes de reservar, consulte siempre los avisos de viaje oficiales más recientes.",
      },
      { type: "h2", text: "La situación política: qué ocurrió recientemente" },
      {
        type: "p",
        text: "En octubre y noviembre de 2025, tras las elecciones en Tanzania, hubo protestas y disturbios que afectaron a conexiones de transporte, incluidos vuelos y enlaces marítimos. Algo así puede repetirse. Por eso, en lugar de decirle que «todo va bien», le recomendamos comprobar los avisos vigentes antes de salir.",
      },
      {
        type: "note",
        text: "Consulte las recomendaciones de viaje del Ministerio de Asuntos Exteriores de España para Tanzania antes de reservar y de nuevo antes de salir. Si la situación cambia después de su reserva, hablaremos con usted.",
      },
      {
        type: "p",
        text: "A fecha de noviembre de 2026, la recomendación de España para Tanzania es viajar con precaución. Los avisos varían de un país a otro, así que compruebe siempre el más reciente.",
      },
      { type: "h2", text: "Seguro obligatorio para entrar en Zanzíbar" },
      {
        type: "p",
        text: "Desde el 1 de octubre de 2024, todos los visitantes de Zanzíbar (salvo residentes en Tanzania) deben contar con un seguro de viaje obligatorio, contratado con la Zanzibar Insurance Corporation, que cubra toda la estancia. Las autoridades pueden denegar la entrada a quien no lo tenga. Como la cobertura de ese seguro es limitada, conviene tener además un seguro de viaje internacional con buena asistencia médica.",
      },
      { type: "h2", text: "Riesgos del día a día" },
      {
        type: "ul",
        items: [
          "**Pequeños hurtos:** como en cualquier destino turístico. No deje objetos de valor en la playa ni a la vista.",
          "**Sol y calor:** protector solar, gorra y mucha agua. La radiación cerca del ecuador es fuerte.",
          "**Mar y mareas:** consulte las mareas y use calzado en zonas de rocas o erizos.",
          "**Carreteras:** el tráfico es desordenado. Mejor el transporte organizado por el hotel.",
        ],
      },
      { type: "h2", text: "Salud: vacunas y malaria" },
      {
        type: "ul",
        items: [
          "Hable con su médico o con un centro de vacunación internacional **antes de viajar** sobre vacunas y profilaxis de la malaria.",
          "Beba solo agua embotellada o de origen seguro.",
          "Use repelente, sobre todo al anochecer.",
        ],
      },
      {
        type: "p",
        text: "Nuestros paquetes incluyen **seguro de viaje**. Lea las condiciones y compruebe qué cubre, en particular la asistencia médica, y pregúntenos cómo queda resuelto el seguro obligatorio de Zanzíbar.",
      },
      { type: "h2", text: "Respeto por las costumbres locales" },
      {
        type: "p",
        text: "Zanzíbar es una sociedad de mayoría musulmana. En los resorts y las playas turísticas el traje de baño es normal, pero fuera de ellos, y sobre todo en Stone Town, vista con más recato (hombros y rodillas cubiertos) y pida permiso antes de fotografiar a las personas.",
      },
      { type: "h2", text: "Entonces, ¿es seguro viajar a Zanzíbar?" },
      {
        type: "p",
        text: `Para quien se aloja en un resort y hace excursiones organizadas, el riesgo del día a día es bajo. Lo que más pesa es la incertidumbre política y logística, que se resuelve con información actualizada y un buen seguro. Si tiene dudas, hable con nuestro equipo antes de pedir la reserva. Vea los [hoteles en Zanzíbar](${L.hotels}) y el [contacto](${L.contact}). Para planificar, consulte también [dónde está Zanzíbar](${L.guide("where")}).`,
      },
    ],
    faq: [
      { question: "¿Es seguro viajar a Zanzíbar?", answer: "Para quien se aloja en un resort y hace excursiones organizadas, el riesgo del día a día es bajo. Conviene seguir los avisos oficiales, porque la situación en Tanzania puede cambiar." },
      { question: "¿Hubo problemas recientes en Tanzania?", answer: "Sí. En octubre y noviembre de 2025, tras las elecciones, hubo protestas y disturbios, también en los transportes. Compruebe los avisos vigentes antes de viajar." },
      { question: "¿Necesito un seguro especial para entrar en Zanzíbar?", answer: "Sí. Desde el 1 de octubre de 2024, los visitantes necesitan un seguro de viaje obligatorio, contratado con la Zanzibar Insurance Corporation, y pueden ver denegada la entrada sin él." },
      { question: "¿Necesito vacunas para viajar a Zanzíbar?", answer: "Consulte con su médico o con un centro de vacunación internacional antes de salir para saber qué le recomiendan." },
      { question: "¿El seguro de viaje está incluido?", answer: "Nuestros paquetes incluyen seguro de viaje. Lea las condiciones para confirmar la cobertura y pregúntenos cómo queda resuelto el seguro obligatorio de Zanzíbar." },
    ],
    related: RELATED,
  },
};
