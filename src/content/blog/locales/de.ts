import type { Post } from "../types";
import { POST_SLUGS, type CoreGuideKey } from "../slugs";
import { linksFor } from "./links";

const L = linksFor("de");
const RELATED = [
  { href: L.hotels, label: "Sansibar Hotels all inclusive mit Flug" },
  { href: L.home, label: "Sansibar Urlaub 2027: Flug, Transfer und Versicherung" },
] as const;
const DATES = { published: "2026-11-14", updated: "2026-11-14", status: "published" } as const;

export const DE_POSTS: Record<CoreGuideKey, Post> = {
  where: {
    slug: POST_SLUGS.where.de,
    title: "Wo liegt Sansibar? Karte, Land und Anreise",
    seoTitle: "Wo liegt Sansibar? Karte, Land und Anreise",
    description:
      "Wo liegt Sansibar? Im Indischen Ozean, vor der Küste Tansanias, rund 6.900 km von Frankfurt entfernt. Karte, Strandregionen (Nungwi, Kiwengwa, Paje), Anreise.",
    subtitle: "In welchem Land es liegt, wo es auf der Karte ist, wie weit es von Deutschland entfernt ist und welche Region der Insel passt.",
    excerpt: "In welchem Land Sansibar liegt, wo es auf der Karte zu finden ist, wie weit es entfernt ist und welche Strandregion passt.",
    category: "Reise planen",
    tags: ["Lage", "Karte", "Tansania"],
    keywords: ["wo liegt sansibar", "sansibar karte", "in welchem land liegt sansibar", "sansibar tansania", "wo ist sansibar"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Luftaufnahme der Strände von Sansibar im Indischen Ozean vor der Küste Tansanias" },
    blocks: [
      {
        type: "p",
        text: "**Wo liegt Sansibar? Im Indischen Ozean, vor der Ostküste Afrikas, in Tansania.** Es ist ein teilautonomes Archipel und gehört zur Vereinigten Republik Tansania, rund 6.900 km Luftlinie von Frankfurt entfernt. Die Hauptinsel heißt Unguja und wird von fast allen Reisenden besucht; die zweite große Insel ist Pemba, weiter nördlich und deutlich weniger touristisch.",
      },
      { type: "map" },
      { type: "h2", text: "In welchem Land liegt Sansibar?" },
      {
        type: "p",
        text: "Sansibar gehört zu Tansania. Es hat für viele innere Angelegenheiten eine eigene Regierung, aber Sie reisen mit dem Reisepass ein, wie in jedes andere Land. Prüfen Sie vor der Buchung die aktuellen Einreise- und Gesundheitsbestimmungen, zum Beispiel in den Reise- und Sicherheitshinweisen des Auswärtigen Amts.",
      },
      { type: "h2", text: "Wo liegt Sansibar auf der Karte?" },
      {
        type: "p",
        text: "Auf der Karte liegt Sansibar etwa 6° südlich des Äquators. Die Insel Unguja ist nur wenige Dutzend Kilometer vom Festland entfernt und rund 75 km Luftlinie von Daressalam, der größten Stadt des Landes. Sie ist lang und schmal, von Nord nach Süd ausgerichtet, und fast überall von weißen Sandstränden gesäumt.",
      },
      {
        type: "p",
        text: "Das Archipel besteht aus zwei Hauptinseln. **Unguja** beherbergt Stone Town, den Flughafen und fast alle Resorts. **Pemba** im Norden ist grüner und ruhiger, mit wenigen Hotels, und vor allem bei Tauchern beliebt.",
      },
      { type: "h2", text: "Wie weit ist Sansibar von Deutschland entfernt?" },
      {
        type: "p",
        text: `Zwischen Frankfurt und Sansibar liegen rund 6.900 km Luftlinie, von München aus sind es etwa 6.600 km. Das ist keine kurze Reise: Bei Linienflügen gibt es meist einen Zwischenstopp, und der verlängert die Reisezeit. Mehr dazu in unserem Ratgeber zum [Flug nach Sansibar](${L.guide("flights")}).`,
      },
      {
        type: "p",
        text: "Der Zeitunterschied ist klein. Sansibar ist im Winter 2 Stunden und im Sommer 1 Stunde voraus, denn Tansania stellt die Uhr nicht um. Einen Jetlag gibt es praktisch nicht.",
      },
      { type: "h2", text: "Wie kommt man nach Sansibar?" },
      {
        type: "ul",
        items: [
          "**Mit dem Flugzeug direkt auf die Insel:** Der internationale Flughafen Sansibar (ZNZ) liegt wenige Kilometer von Stone Town entfernt. Das ist der einfachste Weg und der unserer Pakete.",
          "**Über Daressalam:** Zwischen der Stadt und der Insel gibt es Kurzflüge und schnelle Fähren. Die Überfahrt dauert etwa 2 Stunden.",
          "**Transfers:** Vom Flughafen zu den Resorts im Norden oder an der Ostküste rechnen Sie mit ein bis zwei Stunden Fahrt. In unseren Paketen ist der Transfer inklusive.",
        ],
      },
      { type: "h2", text: "Die Regionen der Insel" },
      { type: "p", text: "Die richtige Region entscheidet über den Urlaub, denn Gezeiten und Strandtyp unterscheiden sich je nach Küste." },
      {
        type: "ul",
        items: [
          `**Norden (Nungwi und Kendwa):** weißer Sand und türkisfarbenes Wasser, mit geringem Tidenhub. Hier liegen das [Riu Jambo](${L.hotel("riu-jambo-zanzibar")}), das [Riu Palace Zanzibar](${L.hotel("riu-palace-zanzibar")}) und das [Riu Palace Swahili](${L.hotel("riu-palace-swahili-zanzibar")}).`,
          `**Nordosten und Ostküste (Kiwengwa):** große Resorts, bei denen die Gezeiten das Baden beeinflussen. Hier finden Sie das [Meliá Zanzibar](${L.hotel("melia-zanzibar")}) und das [TUI BLUE Bahari](${L.hotel("tui-blue-bahari-zanzibar")}).`,
          "**Südosten (Paje und Jambiani):** Fischerdörfer und das Kitesurf-Revier. Starker Tidenhub, entspannte Atmosphäre.",
          "**Westen (Stone Town):** die historische Hauptstadt, UNESCO-Welterbe, nur wenige Minuten vom Flughafen. Einen Tagesausflug wert.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/nungwi.webp",
        alt: "Strand von Nungwi an der Nordspitze von Sansibar, Tansania",
        caption: "Nungwi, an der Nordspitze der Insel.",
      },
      { type: "h2", text: "Welche Region von Sansibar passt zu Ihnen?" },
      {
        type: "ul",
        items: [
          "Sie wollen **zu jeder Tageszeit baden**: der Norden (Nungwi und Kendwa).",
          "Sie wollen **ein großes Resort mit viel Programm**: Kiwengwa.",
          "Sie wollen **Kitesurfen und Dorfatmosphäre**: der Südosten, in Paje und Jambiani.",
          "Sie wollen **Geschichte und Spaziergänge**: wohnen Sie nahe Stone Town oder machen Sie dort einen Tagesausflug.",
        ],
      },
      {
        type: "note",
        text: `Möchten Sie die Hotels nach Region sehen? Stöbern Sie in unseren [Sansibar Hotels all inclusive](${L.hotels}) und lesen Sie in unserem Ratgeber die [beste Reisezeit für Sansibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "In welchem Land liegt Sansibar?", answer: "Sansibar gehört zu Tansania, an der Ostküste Afrikas im Indischen Ozean." },
      { question: "Ist Sansibar eine Insel?", answer: "Es ist ein Archipel. Die Hauptinsel ist Unguja, die meistbesuchte, die andere große Insel ist Pemba." },
      { question: "Wo liegt Sansibar auf der Karte?", answer: "Etwa 6° südlich des Äquators im Indischen Ozean, wenige Dutzend Kilometer vor der Küste Tansanias und rund 75 km Luftlinie von Daressalam." },
      { question: "Wie weit ist Sansibar von Frankfurt entfernt?", answer: "Rund 6.900 km Luftlinie. Bei Linienflügen gibt es meist einen Zwischenstopp." },
      { question: "Wie groß ist der Zeitunterschied zwischen Deutschland und Sansibar?", answer: "Sansibar ist im Winter 2 Stunden und im Sommer 1 Stunde voraus." },
      { question: "In welcher Region von Sansibar wohnt man am besten?", answer: "Der Norden (Nungwi und Kendwa) hat das verlässlichste Badewasser; Kiwengwa bietet große Resorts; der Südosten ist entspannter und bei Kitesurfern beliebt." },
    ],
    related: RELATED,
  },

  when: {
    slug: POST_SLUGS.when.de,
    title: "Beste Reisezeit Sansibar: Wetter Monat für Monat",
    seoTitle: "Beste Reisezeit Sansibar: Wetter Monat für Monat",
    description:
      "Die beste Reisezeit für Sansibar ist Juni bis Oktober: klarer Himmel, wenig Feuchtigkeit. Wetter Monat für Monat, Regenzeit, Wasser, Kitesurfen, Tauchen.",
    subtitle: "Wann Sie nach Sansibar reisen sollten, je nachdem ob Sie Strand, Tauchen, Kitesurfen oder einen günstigen Preis suchen.",
    excerpt: "Wetter Monat für Monat, Regenzeiten, Wassertemperatur und die besten Monate für Sansibar.",
    category: "Reise planen",
    tags: ["Wetter", "Reisezeit", "Jahreszeiten"],
    keywords: ["beste reisezeit sansibar", "sansibar wetter", "sansibar regenzeit", "wann nach sansibar", "sansibar bester monat"],
    ...DATES,
    cover: { src: "/images/destino/hero-molhe-por-do-sol.webp", alt: "Steg bei Sonnenuntergang an einem Strand auf Sansibar, in der besten Reisezeit" },
    blocks: [
      {
        type: "p",
        text: "**Die beste Reisezeit für Sansibar ist Juni bis Oktober**, die Trockenzeit, mit klarem Himmel, weniger Luftfeuchtigkeit und kühleren Nächten. Auch Januar und Februar sind sehr gut für den Strand, aber heißer. März, April und Mai sind die Monate der großen Regenzeit. Wer fragt, wann man nach Sansibar reisen sollte: Das ist die kurze Antwort, hier die Details Monat für Monat.",
      },
      {
        type: "p",
        text: "Sansibar liegt nahe am Äquator und kennt deshalb keinen Sommer und Winter wie Deutschland. Das Jahr teilt sich in Trockenzeit und Regenzeiten, und die Temperaturen schwanken kaum: Tagsüber liegen sie fast immer zwischen 28 °C und 33 °C.",
      },
      { type: "h2", text: "Das Wetter auf Sansibar Monat für Monat" },
      {
        type: "table",
        head: ["Monate", "Was Sie erwartet", "Für den Strand"],
        rows: [
          ["Januar und Februar", "Heiß, starke Sonne und mehr Luftfeuchtigkeit. Kurze Schauer möglich.", "Sehr gut"],
          ["März, April und Mai", "Große Regenzeit. Bewölkte Tage und kräftige Schauer, einige Angebote schließen.", "Nicht empfohlen"],
          ["Juni bis September", "Trocken, klarer Himmel und kühlere Nächte. Die angenehmste Zeit.", "Ideal"],
          ["Oktober", "Noch trocken, die Hitze kehrt zurück.", "Sehr gut"],
          ["November und Dezember", "Kurze Regenfälle, meist am Nachmittag, und mehr Hitze.", "Wechselhaft"],
        ],
      },
      {
        type: "image",
        src: "/images/destino/casal-banco-areia.webp",
        alt: "Paar auf einer Sandbank bei Sansibar mit ruhigem Wasser",
        caption: "In der Trockenzeit zeigt das Meer seine intensivsten Farben.",
      },
      { type: "h2", text: "Wann ist die beste Reisezeit für den Strandurlaub?" },
      {
        type: "p",
        text: "Wer vor allem Strand und blaues Wasser will, reist am besten zwischen Juni und Oktober: Der Himmel ist klarer, die Luftfeuchtigkeit niedriger und die Abende sind angenehm. Januar und Februar bringen mehr Hitze und direkte Sonne, ideal für Hitzeliebhaber, aber mit mehr Sonnenschutz und mehr Trinkwasser.",
      },
      { type: "h2", text: "Wie warm ist das Meer?" },
      {
        type: "p",
        text: "Das Wasser ist das ganze Jahr warm, Baden ist in jedem Monat möglich, meist bei 26 °C bis 29 °C. Was sich ändert, sind Sicht und Bedingungen: In den Regenzeiten ist das Meer trüber und der Wind unbeständiger.",
      },
      {
        type: "p",
        text: `Auch die Gezeiten zählen. An der Ostküste und im Südosten (Kiwengwa, Paje, Jambiani) zieht sich das Meer bei Ebbe viele Meter zurück, und Baden hängt von der Uhrzeit ab. Im Norden (Nungwi und Kendwa) ist der Effekt geringer. Für die Wahl der Region lesen Sie, [wo Sansibar liegt und wie die Insel aufgebaut ist](${L.guide("where")}).`,
      },
      { type: "h2", text: "Wann nach Sansibar zum Kitesurfen oder Tauchen?" },
      {
        type: "ul",
        items: [
          "**Kitesurfen:** Der Wind ist von Juni bis September sowie im Januar und Februar am beständigsten, vor allem im Südosten bei Paje und Jambiani.",
          "**Tauchen und Schnorcheln:** Die beste Sicht gibt es meist in der Trockenzeit von Juni bis Oktober.",
          "**Ausflüge und Stone Town:** In der Trockenzeit läuft es sich bequemer, und die Stadt lässt sich besser erkunden.",
        ],
      },
      { type: "h2", text: "Hochsaison und Preise" },
      {
        type: "p",
        text: "Die Nachfrage steigt im europäischen Sommer von Juli bis September sowie zu Weihnachten und Silvester, und die Preise ziehen mit. Wer das beste Verhältnis aus gutem Wetter und Preis sucht, schaut auf Juni und Oktober: trockene Monate außerhalb der Spitze im Juli und August.",
      },
      {
        type: "note",
        text: `Preise und Abreisetermine finden Sie auf der Seite jedes Hotels: [Sansibar Hotels all inclusive](${L.hotels}). Unsere Preise gelten «ab», pro Person, und unser Team bestätigt die Verfügbarkeit, bevor die Buchung verbindlich wird.`,
      },
      { type: "h2", text: "Also: Wann nach Sansibar reisen?" },
      {
        type: "ul",
        items: [
          "**Bestes Wetter:** Juni bis Oktober.",
          "**Mehr Hitze für Strand und Tauchen:** Januar und Februar.",
          "**Günstiger:** außerhalb der Spitze im Juli und August.",
          "**Besser meiden:** März bis Mai wegen des Regens.",
        ],
      },
    ],
    faq: [
      { question: "Was ist die beste Reisezeit für Sansibar?", answer: "Juni bis Oktober, die Trockenzeit, mit klarem Himmel und weniger Luftfeuchtigkeit. Januar und Februar sind ebenfalls gut, aber heißer." },
      { question: "Wann regnet es auf Sansibar?", answer: "Die große Regenzeit dauert von März bis Mai. Im November und Dezember gibt es kürzere Regenfälle." },
      { question: "Wie warm ist es auf Sansibar?", answer: "Tagsüber meist zwischen 28 °C und 33 °C, das ganze Jahr über, und das Meer ist in jedem Monat warm." },
      { question: "Wann ist die beste Zeit zum Kitesurfen auf Sansibar?", answer: "Von Juni bis September sowie im Januar und Februar, wenn der Wind am beständigsten ist, vor allem im Südosten der Insel." },
      { question: "Welcher Monat ist am günstigsten für Sansibar?", answer: "Monate außerhalb der Spitze im Juli und August, etwa Juni oder Oktober, sind meist günstiger und trotzdem trocken." },
    ],
    related: RELATED,
  },

  things: {
    slug: POST_SLUGS.things.de,
    title: "Sansibar Sehenswürdigkeiten: 12 Orte und Erlebnisse",
    seoTitle: "Sansibar Sehenswürdigkeiten: 12 Orte und Erlebnisse",
    description:
      "Sansibar Sehenswürdigkeiten für eine Woche: Stone Town, die Strände von Nungwi, Kendwa und Paje, The Rock, Gewürztour, Jozani-Wald, Dhow-Ausflüge.",
    subtitle: "Strände, Stone Town und Ausflüge: ein einfacher Plan für sieben Nächte.",
    excerpt: "Die 12 Orte und Erlebnisse, die sich auf Sansibar am meisten lohnen, mit Tagesplan.",
    category: "Was tun",
    tags: ["Sehenswürdigkeiten", "Stone Town", "Ausflüge"],
    keywords: ["sansibar sehenswürdigkeiten", "sansibar ausflüge", "sansibar was tun", "stone town sansibar", "sansibar eine woche"],
    ...DATES,
    cover: { src: "/images/destino/stone-town.webp", alt: "Gasse in Stone Town, der Altstadt von Sansibar" },
    blocks: [
      {
        type: "p",
        text: "**Das klassische Sansibar-Programm verbindet Strand, die historische Altstadt Stone Town und ein bis zwei Ausflüge.** Wer nach den Sehenswürdigkeiten auf Sansibar sucht, will meist einen einfachen Plan, und mit 7 Nächten ist Zeit für alles, ohne Hektik. Hier die 12 Orte und Erlebnisse, die sich am meisten lohnen, nach Art gruppiert.",
      },
      { type: "h2", text: "Sansibar Sehenswürdigkeiten: die Strände" },
      {
        type: "ul",
        items: [
          "**Nungwi:** an der Nordspitze, weißer Sand und Sonnenuntergänge.",
          "**Kendwa:** langer weißer Sandstrand, bekannt für Wasser mit geringem Tidenhub.",
          "**Paje:** die Hauptstadt des Kitesurfens, an der Südostküste.",
          "**Jambiani:** Fischerdorf mit traditionellen Booten.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/paje-kitesurf.webp",
        alt: "Kitesurfen am Strand von Paje auf Sansibar",
        caption: "Paje, das Kitesurf-Ziel von Sansibar.",
      },
      { type: "h2", text: "Sansibar Sehenswürdigkeiten: Kultur und Geschichte" },
      {
        type: "ul",
        items: [
          "**Stone Town:** UNESCO-Altstadt mit engen Gassen, geschnitzten Türen und Märkten.",
          "**Darajani-Markt:** für einen Blick in den Alltag der Einheimischen.",
          "**Gewürztour:** Besuch von Plantagen mit Kostproben von Früchten und Gewürzen.",
        ],
      },
      { type: "h2", text: "Sansibar Sehenswürdigkeiten: Meer und Natur" },
      {
        type: "ul",
        items: [
          "**The Rock:** das Restaurant auf einem Felsen im Meer bei Pingwe, eines der bekanntesten Bilder der Insel.",
          "**Dhow-Ausflug:** bei Sonnenuntergang oder ganztägig, mit Schnorchelstopps.",
          "**Delfine in Kizimkazi:** Bootsausflug im Süden der Insel.",
          "**Jozani-Wald:** Heimat des Roten Stummelaffen.",
          "**Prison Island:** kurzer Bootsausflug ab Stone Town zu den Riesenschildkröten.",
        ],
      },
      { type: "h2", text: "Was sieht man in Stone Town an einem Tag?" },
      {
        type: "p",
        text: "Planen Sie einen Vor- oder Nachmittag ein, um die Gassen der Altstadt zu Fuß zu erkunden, ohne Karte, auf der Suche nach den geschnitzten Türen. Schauen Sie beim Alten Fort und dem Darajani-Markt vorbei und beenden Sie den Tag in den Forodhani-Gärten am Meer, wo abends Straßenküchen aufbauen. Die Stadt liegt nur Minuten vom Flughafen entfernt und passt gut auf den An- oder Abreisetag.",
      },
      { type: "h2", text: "Eine Woche auf Sansibar: der Tagesplan" },
      {
        type: "ul",
        items: [
          "**Tag 1 und 2:** Ankunft, Ausruhen und erste Badegänge am Hotelstrand.",
          "**Tag 3:** Stone Town und Gewürztour.",
          "**Tag 4:** Dhow-Ausflug mit Schnorcheln oder Delfine in Kizimkazi.",
          "**Tag 5:** Jozani-Wald und ein Nachmittag in Paje oder Jambiani.",
          "**Übrige Tage:** Strand, Spa und Sonnenuntergänge, ohne Plan.",
        ],
      },
      {
        type: "p",
        text: `Unsere Pakete dauern 7 Nächte. Das reicht meist für 3 bis 4 Tage Strand und Resort, 1 Tag in Stone Town und 1 bis 2 Ausflüge. Wer mehr möchte, kann eine Safari auf dem tansanischen Festland ergänzen. Für die Terminwahl lesen Sie die [beste Reisezeit für Sansibar](${L.guide("when")}).`,
      },
      {
        type: "note",
        text: "Ausflüge und Eintritte sind im Paket nicht enthalten. Sie lassen sich vor Ort oder über das Hotel buchen. Prüfen Sie Preise und Bedingungen immer, bevor Sie zahlen.",
      },
      {
        type: "p",
        text: "Zwei Dinge sind für die Planung wichtig. Erstens: Die Wege auf der Insel sind lang und langsam, deshalb lohnt es sich, Ausflüge zu bündeln, statt jeden Tag woanders hinzufahren. Zweitens: Die Gezeiten bestimmen, wann Baden und Schnorcheln an welchem Strand gut möglich sind, und die Hotelmitarbeiter kennen die Zeiten des Tages.",
      },
      { type: "h2", text: "Wo wohnen, um das Meiste mitzunehmen?" },
      {
        type: "p",
        text: `Die Hotelwahl bestimmt den Rest. Im Norden sind Sie den besten Badestränden am nächsten; an der Ostküste sind die Resorts groß und umfassend. Alle finden Sie unter [Sansibar Hotels](${L.hotels}).`,
      },
    ],
    faq: [
      { question: "Was sind die schönsten Sehenswürdigkeiten auf Sansibar?", answer: "Stone Town, die Strände von Nungwi, Kendwa, Paje und Jambiani, The Rock, die Gewürztour, der Jozani-Wald und Bootsausflüge." },
      { question: "Was sieht man in Stone Town an einem Tag?", answer: "Die Gassen mit geschnitzten Türen, das Alte Fort, den Darajani-Markt und zum Tagesende die Forodhani-Gärten am Meer." },
      { question: "Wie viele Tage braucht man auf Sansibar?", answer: "Eine Woche reicht für Strand, einen Tag in Stone Town und ein bis zwei Ausflüge, ohne Hektik." },
      { question: "Sind Ausflüge im Paket enthalten?", answer: "Nein. Die Pakete enthalten Flug, 7 Nächte all inclusive, Transfers und Reiseversicherung. Ausflüge werden separat gebucht." },
    ],
    related: RELATED,
  },

  flights: {
    slug: POST_SLUGS.flights.de,
    title: "Flug Sansibar: Flugdauer, Zwischenstopps und Routen",
    seoTitle: "Flug Sansibar: Flugdauer und Zwischenstopps",
    description:
      "Flug Sansibar ab Frankfurt, München und Zürich: Flugdauer, Direktflüge, Zwischenstopps und was der Flug in unseren Paketen enthält.",
    subtitle: "Wie lange der Flug nach Sansibar dauert, ob es einen Direktflug gibt und wie Zwischenstopps funktionieren.",
    excerpt: "Reisedauer, übliche Zwischenstopps, Ankunftsflughafen und was der Flug in unseren Paketen enthält.",
    category: "Reise planen",
    tags: ["Flug", "Zwischenstopp", "Flugdauer"],
    keywords: ["flug sansibar", "flug frankfurt sansibar", "flugdauer sansibar", "direktflug sansibar", "flughafen sansibar"],
    ...DATES,
    cover: { src: "/images/destino/molhe-aerea-topo.webp", alt: "Luftaufnahme eines Stegs über dem türkisfarbenen Meer von Sansibar" },
    blocks: [
      {
        type: "p",
        text: "**Ein Flug Sansibar ab Frankfurt umfasst rund 6.900 km Luftlinie.** Wer einen Flug nach Sansibar sucht, will wissen, wie lange er in der Luft sein wird, und die ehrliche Antwort lautet: Das hängt vom Zwischenstopp ab. Für die meisten bedeutet es einen Flug mit einem Stopp und eine Reise von etwa einem Tag, inklusive Wartezeit zwischen den Flügen. Die genaue Dauer hängt von Fluggesellschaft, Umsteigeflughafen und Tag ab.",
      },
      { type: "h2", text: "Wie lange dauert der Flug nach Sansibar?" },
      {
        type: "p",
        text: "Als Faustregel addiert sich die Flugzeit aus zwei Teilstrecken: Die erste vom Abflughafen zum Umsteigeflughafen, die zweite weiter nach Sansibar. Bei einem Stopp im Nahen Osten kann die erste Teilstrecke etwa 6 Stunden und die zweite etwa 5,5 Stunden dauern. Dazu kommt die Wartezeit zwischen den Flügen, die von etwas über einer Stunde bis zu mehr als einem halben Tag reichen kann.",
      },
      { type: "h2", text: "Gibt es einen Direktflug nach Sansibar?" },
      {
        type: "p",
        text: "Bei Linienflügen in der Regel nicht: Üblich ist **ein Zwischenstopp**. Ob es Direktflüge gibt, hängt von Saison und Anbieter ab, deshalb gehen wir nicht davon aus. Bei jeder Buchungsanfrage bestätigen wir die genaue Flugverbindung mit Ihnen, bevor die Buchung verbindlich wird.",
      },
      {
        type: "note",
        text: "Wir versprechen keinen Direktflug. Jede Abreise hat eigene Zeiten und einen eigenen Zwischenstopp, die wir mit Ihnen bestätigen, bevor die Buchung verbindlich wird.",
      },
      { type: "h2", text: "Wie lange dauert die Reise von Tür zu Tür?" },
      {
        type: "ul",
        items: [
          "**Flugzeit:** die Summe beider Flüge; der zweite, aus Afrika oder dem Nahen Osten nach Sansibar, ist kürzer.",
          "**Zwischenstopp:** von knapp über einer Stunde bis mehr als einem halben Tag, je nach Verbindung.",
          "**Tür zu Tür:** rechnen Sie mit einem ganzen Tag, inklusive Transfer zum Hotel.",
        ],
      },
      {
        type: "p",
        text: "Da Sansibar im Winter 2 Stunden und im Sommer 1 Stunde voraus ist, kommen Sie meist am Tag nach dem Abflug an. Planen Sie den ersten Tag entspannt.",
      },
      { type: "h2", text: "Wie funktionieren Flüge nach Sansibar mit Zwischenstopp?" },
      {
        type: "p",
        text: "Flüge nach Sansibar machen einen Stopp an einem großen Drehkreuz im Nahen Osten, in der Türkei oder in Ostafrika, je nach Fluggesellschaft. Bei einem durchgehenden Ticket wird das aufgegebene Gepäck in der Regel bis zum Ziel durchgecheckt und der Anschluss ist geschützt: Verspätet sich der erste Flug, bucht die Airline Sie um. Wer selbst zwei getrennte Tickets bucht, trägt dieses Risiko selbst und sollte reichlich Puffer einplanen.",
      },
      { type: "h2", text: "Der Flughafen von Sansibar" },
      {
        type: "p",
        text: `Die Flüge landen am internationalen Flughafen Sansibar, nahe Stone Town. Von dort fahren die Transfers zum Hotel, die je nach Lage im Norden oder an der Ostküste ein bis zwei Stunden dauern. In unseren Paketen sind die Transfers inklusive. Für die Wahl der Region lesen Sie, [wo Sansibar liegt und wie die Insel aufgebaut ist](${L.guide("where")}).`,
      },
      { type: "h2", text: "Was der Flug in unseren Paketen enthält" },
      {
        type: "ul",
        items: [
          "Ein Platz auf einem **Linienflug in der Economy Class**, ab Frankfurt, München oder Zürich.",
          "Flughafen- und Treibstoffgebühren (bis zur Ticketausstellung Änderungen vorbehalten).",
          "Transfers und Reiseversicherung.",
        ],
      },
      { type: "h2", text: "Tipps für eine lange Reise" },
      {
        type: "ul",
        items: [
          "Packen Sie das Wichtigste ins Handgepäck: Medikamente, Ladekabel und Wechselkleidung.",
          "Trinken Sie viel und stehen Sie während des Flugs ab und zu auf.",
          "Planen Sie bei Eigenbuchung reichlich Puffer zwischen den Flügen ein.",
          "Prüfen Sie die Einreise- und Gesundheitsbestimmungen vor der Abreise.",
        ],
      },
      {
        type: "p",
        text: `Möchten Sie alles aus einer Hand, mit Flug, Hotel, Transfers und Versicherung? Sehen Sie sich unsere [Sansibar Hotels all inclusive mit Flug](${L.hotels}) an und wählen Sie Ihren Termin mit Hilfe unseres Ratgebers zur [besten Reisezeit für Sansibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "Wie lange dauert der Flug nach Sansibar?", answer: "Es sind rund 6.900 km Luftlinie von Frankfurt. Mit einem Zwischenstopp rechnen Sie insgesamt mit etwa einem Tag Reisezeit, je nach Verbindung." },
      { question: "Gibt es Direktflüge nach Sansibar?", answer: "Bei Linienflügen in der Regel nicht: Üblich ist ein Zwischenstopp. Wir bestätigen die genaue Verbindung, bevor die Buchung verbindlich wird." },
      { question: "Wie lange dauert der Zwischenstopp?", answer: "Von knapp über einer Stunde bis mehr als einem halben Tag, je nach Verbindung." },
      { question: "Auf welchem Flughafen landet man auf Sansibar?", answer: "Am internationalen Flughafen Sansibar (ZNZ), nahe Stone Town." },
      { question: "Sind die Transfers inklusive?", answer: "Ja, in unseren Paketen sind die Transfers zwischen Flughafen und Hotel inklusive." },
    ],
    related: RELATED,
  },

  safety: {
    slug: POST_SLUGS.safety.de,
    title: "Ist Sansibar sicher? Sicherheit, Versicherung und Gesundheit",
    seoTitle: "Ist Sansibar sicher? Sicherheit, Versicherung, Gesundheit",
    description:
      "Ist Sansibar sicher? Echte Risiken, offizielle Reisehinweise, die Pflichtversicherung für die Einreise, Gesundheit (Malaria, Impfungen) und Gepflogenheiten.",
    subtitle: "Welche Risiken es wirklich gibt, welche Versicherung Pflicht ist und was Sie vor der Buchung prüfen sollten.",
    excerpt: "Sicherheit auf Sansibar: offizielle Hinweise, Pflichtversicherung, Gesundheit und praktische Tipps.",
    category: "Sicherheit und Gesundheit",
    tags: ["Sicherheit", "Versicherung", "Gesundheit"],
    keywords: ["ist sansibar sicher", "sansibar sicherheit", "sansibar pflichtversicherung", "sansibar impfungen", "sansibar gefährlich"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Ein Strand auf Sansibar aus der Luft" },
    blocks: [
      {
        type: "p",
        text: "**Ist Sansibar sicher? Für die meisten Touristen ja: Sie verbringen eine Woche auf der Insel ohne Zwischenfälle, vor allem im Resort.** Sicherheit ist aber nie eine Garantie, und die Lage in Tansania kann sich ändern. Prüfen Sie vor der Buchung immer die aktuellsten offiziellen Reisehinweise.",
      },
      { type: "h2", text: "Die politische Lage: was zuletzt geschah" },
      {
        type: "p",
        text: "Im Oktober und November 2025 kam es nach den Wahlen in Tansania zu Protesten und Störungen, die Verkehrsverbindungen betrafen, darunter Flüge und Schiffsverbindungen. Das kann sich wiederholen. Deshalb sagen wir Ihnen nicht einfach, dass «alles in Ordnung» sei, sondern empfehlen, die aktuellen Hinweise vor der Abreise zu prüfen.",
      },
      {
        type: "note",
        text: "Lesen Sie die Reise- und Sicherheitshinweise des Auswärtigen Amts für Tansania vor der Buchung und noch einmal vor der Abreise. Ändert sich die Lage nach Ihrer Buchung, melden wir uns bei Ihnen.",
      },
      { type: "h2", text: "Pflichtversicherung für die Einreise nach Sansibar" },
      {
        type: "p",
        text: "Seit dem 1. Oktober 2024 müssen alle Besucher Sansibars (außer in Tansania ansässige Personen) eine obligatorische Reiseversicherung bei der Zanzibar Insurance Corporation abschließen, die den gesamten Aufenthalt abdeckt. Die Behörden können Personen ohne sie die Einreise verweigern. Da der Schutz dieser Versicherung begrenzt ist, empfiehlt sich zusätzlich eine internationale Reiseversicherung mit guter medizinischer Betreuung.",
      },
      { type: "h2", text: "Risiken im Alltag" },
      {
        type: "ul",
        items: [
          "**Kleinkriminalität:** wie in jedem Touristenziel. Lassen Sie keine Wertsachen am Strand oder sichtbar liegen.",
          "**Sonne und Hitze:** Sonnencreme, Hut und viel Wasser. Die Strahlung am Äquator ist stark.",
          "**Meer und Gezeiten:** Informieren Sie sich über die Gezeiten und tragen Sie Badeschuhe in Bereichen mit Felsen oder Seeigeln.",
          "**Straßen:** Der Verkehr ist chaotisch. Nutzen Sie lieber vom Hotel organisierte Transporte.",
        ],
      },
      { type: "h2", text: "Gesundheit: Impfungen und Malaria" },
      {
        type: "ul",
        items: [
          "Sprechen Sie **vor der Reise** mit Ihrem Arzt oder einem Tropeninstitut über Impfungen und Malariaprophylaxe.",
          "Trinken Sie nur abgefülltes oder sicheres Wasser.",
          "Verwenden Sie Insektenschutz, besonders in der Dämmerung.",
        ],
      },
      {
        type: "p",
        text: "Unsere Pakete enthalten eine **Reiseversicherung**. Lesen Sie die Bedingungen und prüfen Sie, was sie abdeckt, insbesondere die medizinische Betreuung, und fragen Sie uns, wie die Pflichtversicherung für Sansibar geregelt wird.",
      },
      { type: "h2", text: "Respekt vor lokalen Gepflogenheiten" },
      {
        type: "p",
        text: "Sansibar ist eine mehrheitlich muslimische Gesellschaft. In Resorts und an Touristenstränden ist Badekleidung normal, aber abseits davon, vor allem in Stone Town, kleiden Sie sich zurückhaltender (Schultern und Knie bedeckt) und fragen Sie, bevor Sie Menschen fotografieren.",
      },
      { type: "h2", text: "Also: Ist Sansibar sicher?" },
      {
        type: "p",
        text: `Für alle, die im Resort wohnen und organisierte Ausflüge machen, ist das Alltagsrisiko gering. Am meisten fällt die politische und logistische Unsicherheit ins Gewicht, die sich mit aktuellen Informationen und einer guten Versicherung beherrschen lässt. Bei Zweifeln sprechen Sie vor der Buchungsanfrage mit unserem Team. Sehen Sie sich unsere [Sansibar Hotels](${L.hotels}) und die [Kontaktseite](${L.contact}) an. Zur Planung lesen Sie auch, [wo Sansibar liegt](${L.guide("where")}).`,
      },
    ],
    faq: [
      { question: "Ist Sansibar für Touristen sicher?", answer: "Für alle, die im Resort wohnen und organisierte Ausflüge machen, ist das Alltagsrisiko gering. Beachten Sie die offiziellen Hinweise, denn die Lage in Tansania kann sich ändern." },
      { question: "Gab es zuletzt Probleme in Tansania?", answer: "Ja. Im Oktober und November 2025 gab es nach den Wahlen Proteste und Störungen, auch im Verkehr. Prüfen Sie vor der Reise die aktuellen Hinweise." },
      { question: "Brauche ich eine besondere Versicherung für die Einreise nach Sansibar?", answer: "Ja. Seit dem 1. Oktober 2024 benötigen Besucher eine obligatorische Reiseversicherung der Zanzibar Insurance Corporation und können ohne sie abgewiesen werden." },
      { question: "Brauche ich Impfungen für Sansibar?", answer: "Sprechen Sie vor der Abreise mit Ihrem Arzt oder einem Tropeninstitut, welche Impfungen für Sie empfohlen werden." },
      { question: "Ist die Reiseversicherung inklusive?", answer: "Unsere Pakete enthalten eine Reiseversicherung. Lesen Sie die Bedingungen, um den Schutz zu prüfen, und fragen Sie uns, wie die Pflichtversicherung für Sansibar geregelt wird." },
    ],
    related: RELATED,
  },
};
