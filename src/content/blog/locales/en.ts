import type { Post } from "../types";
import { POST_SLUGS, type CoreGuideKey } from "../slugs";
import { linksFor } from "./links";

const L = linksFor("en");
const RELATED = [
  { href: L.hotels, label: "All inclusive Zanzibar hotels with flights" },
  { href: L.home, label: "Zanzibar holidays 2027: flights, transfers and insurance" },
] as const;
const DATES = { published: "2026-11-14", updated: "2026-11-14", status: "published" } as const;

export const EN_POSTS: Record<CoreGuideKey, Post> = {
  where: {
    slug: POST_SLUGS.where.en,
    title: "Where Is Zanzibar? Map, Country and How to Get There",
    seoTitle: "Where Is Zanzibar? Map, Country and How to Get There",
    description:
      "Where is Zanzibar? In the Indian Ocean, off the coast of Tanzania, about 7,400 km from London. Map, beach areas (Nungwi, Kiwengwa, Paje) and how to get there.",
    subtitle: "Which country it is in, where it sits on the map, how far it is from the UK and which part of the island to choose.",
    excerpt: "Which country Zanzibar belongs to, where it is on the map, how far it is from the UK and which beach area to pick.",
    category: "Planning your trip",
    tags: ["location", "map", "Tanzania"],
    keywords: ["where is zanzibar", "zanzibar map", "which country is zanzibar in", "zanzibar tanzania", "where is zanzibar located"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "Aerial view of Zanzibar's beaches in the Indian Ocean, off the coast of Tanzania" },
    blocks: [
      {
        type: "p",
        text: "**Where is Zanzibar? It is in the Indian Ocean, off the east coast of Africa, in Tanzania.** It is a semi-autonomous archipelago that forms part of the United Republic of Tanzania, about 7,400 km from London in a straight line. The main island is called Unguja and is the one most visitors see; the other large island is Pemba, further north and far less touristy.",
      },
      { type: "map" },
      { type: "h2", text: "Which country is Zanzibar in?" },
      {
        type: "p",
        text: "Zanzibar is part of Tanzania. It has its own government for many internal matters, but you travel with a passport as you would to any other country. Before booking, check the current entry and health requirements for your nationality, for example on the UK government's travel advice pages.",
      },
      { type: "h2", text: "Where is Zanzibar on the map?" },
      {
        type: "p",
        text: "On the map, Zanzibar sits about 6° south of the equator. The island of Unguja lies a few dozen kilometres off the mainland coast and roughly 75 km in a straight line from Dar es Salaam, Tanzania's largest city. It is a long, narrow island running north to south, with white-sand beaches along most of its coast.",
      },
      {
        type: "p",
        text: "The archipelago has two main islands. **Unguja** is home to Stone Town, the airport and almost all of the resorts. **Pemba**, to the north, is greener and quieter, with few hotels, and is popular mainly with divers.",
      },
      { type: "h2", text: "How far is Zanzibar from the UK?" },
      {
        type: "p",
        text: `London and Zanzibar are roughly 7,400 km apart in a straight line. It is not a short trip: scheduled flights usually involve one stop, and that is what stretches the journey. We explain it in our guide to [flights to Zanzibar](${L.guide("flights")}).`,
      },
      {
        type: "p",
        text: "The time difference is small. Zanzibar is 3 hours ahead of the UK in winter and 2 hours ahead in summer, because Tanzania does not change its clocks. There is very little jet lag to speak of.",
      },
      { type: "h2", text: "How to get to Zanzibar" },
      {
        type: "ul",
        items: [
          "**By air, straight to the island:** Zanzibar International Airport (ZNZ) is a few kilometres from Stone Town. It is the simplest way and the one our packages use.",
          "**Via Dar es Salaam:** there are short flights and fast ferries between the city and the island. The ferry crossing takes about 2 hours.",
          "**Transfers:** from the airport to resorts on the north or east coast, allow one to two hours by road. Transfers are included in our packages.",
        ],
      },
      { type: "h2", text: "The areas of the island" },
      { type: "p", text: "Choosing the right area changes the whole holiday, because the tides and the type of beach differ from one side of the island to the other." },
      {
        type: "ul",
        items: [
          `**North (Nungwi and Kendwa):** white sand and turquoise water, with less tidal change. This is where you will find the [Riu Jambo](${L.hotel("riu-jambo-zanzibar")}), the [Riu Palace Zanzibar](${L.hotel("riu-palace-zanzibar")}) and the [Riu Palace Swahili](${L.hotel("riu-palace-swahili-zanzibar")}).`,
          `**North-east and east coast (Kiwengwa):** large resorts, with tides that affect swimming. Here are the [Meliá Zanzibar](${L.hotel("melia-zanzibar")}) and the [TUI BLUE Bahari](${L.hotel("tui-blue-bahari-zanzibar")}).`,
          "**South-east (Paje and Jambiani):** fishing villages and the kitesurfing area. Strong tides and a laid-back feel.",
          "**West (Stone Town):** the historic capital, a UNESCO World Heritage Site, a few minutes from the airport. Well worth a day trip.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/nungwi.webp",
        alt: "Nungwi beach at the northern tip of Zanzibar, Tanzania",
        caption: "Nungwi, at the northern tip of the island.",
      },
      { type: "h2", text: "Which part of Zanzibar should you stay in?" },
      {
        type: "ul",
        items: [
          "You want **water for swimming at any time of day**: the north (Nungwi and Kendwa).",
          "You want **a big resort with plenty to do**: Kiwengwa.",
          "You want **kitesurfing and village life**: the south-east, in Paje and Jambiani.",
          "You want **history and walking**: stay near Stone Town or give it a day trip.",
        ],
      },
      {
        type: "note",
        text: `Want to see hotels by area? Browse our [all inclusive Zanzibar hotels](${L.hotels}) and read when to go in our guide to the [best time to visit Zanzibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "Which country is Zanzibar in?", answer: "Zanzibar is part of Tanzania, on the east coast of Africa, in the Indian Ocean." },
      { question: "Is Zanzibar an island?", answer: "It is an archipelago. The main island is Unguja, the most visited, and the other large one is Pemba." },
      { question: "Where is Zanzibar on the map?", answer: "About 6° south of the equator in the Indian Ocean, a few dozen kilometres off the Tanzanian coast and roughly 75 km in a straight line from Dar es Salaam." },
      { question: "How far is Zanzibar from London?", answer: "Around 7,400 km in a straight line. Scheduled flights usually involve one stop." },
      { question: "What is the time difference between the UK and Zanzibar?", answer: "Zanzibar is 3 hours ahead of the UK in winter and 2 hours ahead in summer." },
      { question: "Which area of Zanzibar is best to stay in?", answer: "The north (Nungwi and Kendwa) has the most reliable water for swimming; Kiwengwa has big resorts; the south-east is more relaxed and popular for kitesurfing." },
    ],
    related: RELATED,
  },

  when: {
    slug: POST_SLUGS.when.en,
    title: "Best Time to Visit Zanzibar: Month-by-Month Guide",
    seoTitle: "Best Time to Visit Zanzibar: Weather Month by Month",
    description:
      "The best time to visit Zanzibar is June to October: clear skies and low humidity. Weather month by month, the rains, sea temperature, kitesurfing and diving.",
    subtitle: "When to go to Zanzibar depending on what you want: beaches, diving, kitesurfing or a lower price.",
    excerpt: "Weather month by month, the rainy seasons, sea temperature and the best months to visit Zanzibar.",
    category: "Planning your trip",
    tags: ["weather", "when to go", "seasons"],
    keywords: ["best time to visit zanzibar", "zanzibar weather", "when to go to zanzibar", "zanzibar rainy season", "best month to visit zanzibar"],
    ...DATES,
    cover: { src: "/images/destino/hero-molhe-por-do-sol.webp", alt: "Jetty at sunset on a Zanzibar beach, in the best season of the year" },
    blocks: [
      {
        type: "p",
        text: "**The best time to visit Zanzibar is from June to October**, the dry season, with clear skies, lower humidity and cooler nights. January and February are also very good for the beach, though hotter. March, April and May bring the long rains. If you are asking when to go to Zanzibar, that is the short answer; here is the month-by-month detail.",
      },
      {
        type: "p",
        text: "Zanzibar sits close to the equator, so it has no summer and winter as the UK does. The year splits into a dry season and rainy seasons, and temperatures barely change: daytime highs are almost always between 28 °C and 33 °C.",
      },
      { type: "h2", text: "Zanzibar weather month by month" },
      {
        type: "table",
        head: ["Months", "What to expect", "For the beach"],
        rows: [
          ["January and February", "Hot, strong sun and more humidity. Short showers are possible.", "Very good"],
          ["March, April and May", "The long rains. Cloudy days and heavy showers, and some services close.", "Not recommended"],
          ["June to September", "Dry, clear skies and cooler nights. The most pleasant period.", "Ideal"],
          ["October", "Still dry, with the heat returning.", "Very good"],
          ["November and December", "Short rains, usually in the afternoon, and more heat.", "Variable"],
        ],
      },
      {
        type: "image",
        src: "/images/destino/casal-banco-areia.webp",
        alt: "Couple on a sandbank in Zanzibar with calm, clear water",
        caption: "In the dry season the sea shows its most intense colours.",
      },
      { type: "h2", text: "What is the best time for a beach holiday?" },
      {
        type: "p",
        text: "If you mainly want beaches and blue water, the best time to visit Zanzibar is June to October: skies are clearer, humidity is lower and the evenings are pleasant. January and February bring more heat and direct sun, which suits people who love hot weather but calls for more sun protection and more water.",
      },
      { type: "h2", text: "How warm is the sea?" },
      {
        type: "p",
        text: "The water is warm all year and you can swim in any month, usually between 26 °C and 29 °C. What changes is visibility and conditions: in the rainy seasons the sea gets murkier and the wind less predictable.",
      },
      {
        type: "p",
        text: `Tides matter too. On the east coast and in the south-east (Kiwengwa, Paje, Jambiani) low tide pulls the sea back many metres and swimming depends on the time of day. In the north (Nungwi and Kendwa) the effect is smaller. To choose an area, read [where Zanzibar is and what the island is like](${L.guide("where")}).`,
      },
      { type: "h2", text: "When to go to Zanzibar for kitesurfing or diving" },
      {
        type: "ul",
        items: [
          "**Kitesurfing:** the wind is steadiest from June to September and again in January and February, especially in the south-east at Paje and Jambiani.",
          "**Diving and snorkelling:** visibility is usually best in the dry season, June to October.",
          "**Excursions and Stone Town:** the dry season is more comfortable for walking and sightseeing.",
        ],
      },
      { type: "h2", text: "High season and prices" },
      {
        type: "p",
        text: "Demand rises over the European summer, July to September, and again at Christmas and New Year, and prices rise with it. For the best balance of good weather and price, look at June and October: both are dry and fall outside the July and August peak.",
      },
      {
        type: "note",
        text: `See prices and departure dates on each hotel page: [all inclusive Zanzibar hotels](${L.hotels}). Our prices are shown as "from", per person, and our team confirms availability before a booking is final.`,
      },
      { type: "h2", text: "So, when should you go to Zanzibar?" },
      {
        type: "ul",
        items: [
          "**Best weather:** June to October.",
          "**More heat for beach and diving:** January and February.",
          "**Cheaper:** outside the July and August peak.",
          "**Avoid:** March to May, because of the rains.",
        ],
      },
    ],
    faq: [
      { question: "What is the best time to visit Zanzibar?", answer: "June to October, the dry season, with clear skies and lower humidity. January and February are also good but hotter." },
      { question: "When does it rain in Zanzibar?", answer: "The long rains run from March to May. In November and December there are shorter showers." },
      { question: "What is the temperature in Zanzibar?", answer: "Daytime highs are almost always between 28 °C and 33 °C all year, and the sea is warm in every month." },
      { question: "When is the best time for kitesurfing in Zanzibar?", answer: "June to September and January to February, when the wind is steadiest, especially in the south-east of the island." },
      { question: "Which month is cheapest to visit Zanzibar?", answer: "Months outside the July and August peak, such as June or October, tend to cost less and are still dry." },
    ],
    related: RELATED,
  },

  things: {
    slug: POST_SLUGS.things.en,
    title: "Things to Do in Zanzibar: 12 Places and Experiences",
    seoTitle: "Things to Do in Zanzibar: 12 Places and Experiences",
    description:
      "Things to do in Zanzibar in a week: Stone Town, the beaches of Nungwi, Kendwa and Paje, The Rock, a spice tour, Jozani Forest and dhow trips. Day-by-day plan.",
    subtitle: "Beaches, Stone Town and excursions: a simple plan for seven nights.",
    excerpt: "The 12 places and experiences most worth your time in Zanzibar, with a day-by-day plan.",
    category: "What to do",
    tags: ["things to do", "Stone Town", "excursions"],
    keywords: ["things to do in zanzibar", "what to do in zanzibar", "zanzibar excursions", "stone town zanzibar", "zanzibar one week"],
    ...DATES,
    cover: { src: "/images/destino/stone-town.webp", alt: "A street in Stone Town, the historic centre of Zanzibar" },
    blocks: [
      {
        type: "p",
        text: "**The classic Zanzibar plan mixes beach time, the historic town of Stone Town and one or two excursions.** People searching for things to do in Zanzibar usually want a simple plan, and with 7 nights there is time to do it all without rushing. These are the 12 places and experiences most worth your time, grouped by type.",
      },
      { type: "h2", text: "Things to do in Zanzibar: beaches" },
      {
        type: "ul",
        items: [
          "**Nungwi:** at the northern tip, white sand and sunsets.",
          "**Kendwa:** a long white-sand beach known for water that barely changes with the tide.",
          "**Paje:** the kitesurfing capital, on the south-east coast.",
          "**Jambiani:** a fishing village with traditional boats.",
        ],
      },
      {
        type: "image",
        src: "/images/destino/paje-kitesurf.webp",
        alt: "Kitesurfing on Paje beach in Zanzibar",
        caption: "Paje, Zanzibar's kitesurfing destination.",
      },
      { type: "h2", text: "Things to do in Zanzibar: culture and history" },
      {
        type: "ul",
        items: [
          "**Stone Town:** a UNESCO-listed old town of narrow alleys, carved doors and markets.",
          "**Darajani Market:** to see everyday local life.",
          "**Spice tour:** a visit to plantations with tastings of fruits and spices.",
        ],
      },
      { type: "h2", text: "Things to do in Zanzibar: sea and nature" },
      {
        type: "ul",
        items: [
          "**The Rock:** the restaurant perched on a rock in the sea at Pingwe, one of the island's best-known views.",
          "**Dhow trip:** at sunset or for a full day, with snorkelling stops.",
          "**Dolphins at Kizimkazi:** a boat trip in the south of the island.",
          "**Jozani Forest:** home of the red colobus monkey.",
          "**Prison Island:** a short boat trip from Stone Town to see giant tortoises.",
        ],
      },
      { type: "h2", text: "What to see in Stone Town in a day" },
      {
        type: "p",
        text: "Set aside a morning or afternoon to wander the old town's alleys on foot, without a map, looking for the carved doors. Take in the Old Fort and Darajani Market, then finish at Forodhani Gardens by the sea, where street-food stalls set up in the evening. It is only minutes from the airport, so it fits neatly into your arrival or departure day.",
      },
      { type: "h2", text: "One week in Zanzibar: a day-by-day plan" },
      {
        type: "ul",
        items: [
          "**Days 1 and 2:** arrive, rest and take your first swims off the hotel beach.",
          "**Day 3:** Stone Town and a spice tour.",
          "**Day 4:** a dhow trip with snorkelling, or dolphins at Kizimkazi.",
          "**Day 5:** Jozani Forest and an afternoon at Paje or Jambiani.",
          "**Remaining days:** beach, spa and sunsets, no schedule.",
        ],
      },
      {
        type: "p",
        text: `Our packages are 7 nights. That is usually enough for 3 or 4 days of beach and resort time, 1 day in Stone Town and 1 or 2 excursions. If you want more, you can add a safari on mainland Tanzania. To pick your dates, see the [best time to visit Zanzibar](${L.guide("when")}).`,
      },
      {
        type: "note",
        text: "Excursions and entrance fees are not included in the package. You can book them locally or through the hotel. Always check prices and conditions before paying.",
      },
      { type: "h2", text: "Where to stay to make the most of it" },
      {
        type: "p",
        text: `Your choice of hotel shapes everything else. In the north you are closest to the best beaches for swimming; on the east coast the resorts are big and complete. See them all under [Zanzibar hotels](${L.hotels}).`,
      },
    ],
    faq: [
      { question: "What are the best things to do in Zanzibar?", answer: "Stone Town, the beaches of Nungwi, Kendwa, Paje and Jambiani, The Rock, a spice tour, Jozani Forest and boat trips." },
      { question: "What should I see in Stone Town in one day?", answer: "The alleys and carved doors, the Old Fort, Darajani Market and, at the end of the day, Forodhani Gardens by the sea." },
      { question: "How many days do you need in Zanzibar?", answer: "A week gives you time for the beach, a day in Stone Town and one or two excursions without rushing." },
      { question: "Are excursions included in the package?", answer: "No. Packages include flights, 7 nights all inclusive, transfers and travel insurance. Excursions are booked separately." },
    ],
    related: RELATED,
  },

  flights: {
    slug: POST_SLUGS.flights.en,
    title: "Flights to Zanzibar: Flight Time, Stopovers and Routes",
    seoTitle: "Flights to Zanzibar: How Long Is the Flight?",
    description:
      "Flights to Zanzibar: how long the flight takes, whether there are direct flights, how stopovers work and what flights include in our all inclusive packages.",
    subtitle: "How long the flight to Zanzibar takes, whether there is a direct flight and how stopovers work.",
    excerpt: "Journey time, usual stopovers, the arrival airport and what the flight includes in our packages.",
    category: "Planning your trip",
    tags: ["flights", "stopovers", "flight time"],
    keywords: ["flights to zanzibar", "how long is the flight to zanzibar", "zanzibar flight time", "direct flights to zanzibar", "zanzibar airport"],
    ...DATES,
    cover: { src: "/images/destino/molhe-aerea-topo.webp", alt: "Aerial view of a jetty over the turquoise sea of Zanzibar" },
    blocks: [
      {
        type: "p",
        text: "**London to Zanzibar is roughly 7,400 km in a straight line.** People searching for flights to Zanzibar want to know how long they will spend in the air, and the honest answer is that it depends on the stopover: for most travellers it means one connection and a journey of around a day, including the wait between flights. The exact time depends on the airline, the connecting airport and the day.",
      },
      { type: "h2", text: "How long is the flight to Zanzibar?" },
      {
        type: "p",
        text: "As a rule of thumb, flight time adds up two legs: the first, from your departure airport to the connecting airport, and the second on to Zanzibar. With a stopover in the Middle East, for example, the first leg can be around 6 hours and the second around 5 and a half. On top of that comes the wait between flights, which can run from a little over an hour to more than half a day.",
      },
      { type: "h2", text: "Are there direct flights to Zanzibar?" },
      {
        type: "p",
        text: "On scheduled services, usually not: the normal route has **one stop**. Direct flights depend on the season and the operator, so we never assume them. For every booking request we confirm the exact itinerary with you before the booking is final.",
      },
      {
        type: "note",
        text: "We do not promise a direct flight. Every departure has its own timings and stopover, and we confirm them with you before the booking is final. Our packages currently depart from continental European airports rather than from UK airports.",
      },
      { type: "h2", text: "How long is the journey door to door?" },
      {
        type: "ul",
        items: [
          "**Flight time:** the sum of the two flights; the second, from Africa or the Middle East to Zanzibar, is shorter.",
          "**Stopover:** from a little over an hour to more than half a day, depending on the connection.",
          "**Door to door:** allow a full day, including the transfer to your hotel.",
        ],
      },
      {
        type: "p",
        text: "Because Zanzibar is 3 hours ahead of the UK in winter and 2 hours ahead in summer, you usually arrive the day after you leave. Plan a relaxed first day.",
      },
      { type: "h2", text: "How flights to Zanzibar with a stopover work" },
      {
        type: "p",
        text: "Flights to Zanzibar make a stop at a large hub airport in the Middle East, Turkey or East Africa, depending on the airline. On a single ticket, checked baggage normally goes through to the final destination and the connection is protected: if the first flight is late, the airline rebooks you. If you book two separate tickets yourself, that risk is yours, so leave a generous gap between flights.",
      },
      { type: "h2", text: "Zanzibar airport" },
      {
        type: "p",
        text: `Flights land at Zanzibar International Airport, near Stone Town. Hotel transfers leave from there and take between one and two hours depending on whether your resort is on the north or the east coast. Transfers are included in our packages. To choose an area, read [where Zanzibar is and what the island is like](${L.guide("where")}).`,
      },
      { type: "h2", text: "What the flight includes in our packages" },
      {
        type: "ul",
        items: [
          "A seat on a **scheduled flight in economy class**, from Amsterdam, Brussels, Frankfurt, Munich, Zurich, Paris, Madrid or Lisbon (see each hotel page for the airports and dates on offer).",
          "Airport and fuel charges (which may change until tickets are issued).",
          "Transfers and travel insurance.",
        ],
      },
      { type: "h2", text: "Tips for a long journey" },
      {
        type: "ul",
        items: [
          "Keep the essentials in your hand luggage: medication, chargers and a change of clothes.",
          "Drink plenty of water and get up now and then during the flight.",
          "Leave a generous gap between flights if you book yourself.",
          "Check entry and health requirements before you leave.",
        ],
      },
      {
        type: "p",
        text: `Would you rather have everything arranged, with flights, hotel, transfers and insurance? See our [all inclusive Zanzibar hotels with flights](${L.hotels}) and choose your date with the help of our guide to the [best time to visit Zanzibar](${L.guide("when")}).`,
      },
    ],
    faq: [
      { question: "How long is the flight to Zanzibar?", answer: "It is roughly 7,400 km from London in a straight line. With one stop, allow about a day of travel in total, depending on the connection." },
      { question: "Are there direct flights to Zanzibar?", answer: "On scheduled services, usually not: the normal route has one stop. We confirm the exact itinerary before a booking is final." },
      { question: "How long is the stopover on flights to Zanzibar?", answer: "From a little over an hour to more than half a day, depending on the connection." },
      { question: "Which airport do you land at in Zanzibar?", answer: "Zanzibar International Airport (ZNZ), near Stone Town." },
      { question: "Are transfers included?", answer: "Yes, transfers between the airport and the hotel are included in our packages." },
    ],
    related: RELATED,
  },

  safety: {
    slug: POST_SLUGS.safety.en,
    title: "Is Zanzibar Safe? Safety, Insurance and Health",
    seoTitle: "Is Zanzibar Safe? Safety, Insurance and Health Advice",
    description:
      "Is Zanzibar safe? The real risks, official travel advice, the mandatory insurance for entry, health (malaria, vaccines) and local customs.",
    subtitle: "What the real risks are, which insurance is compulsory and what to check before you book.",
    excerpt: "Safety in Zanzibar: official advice, compulsory insurance, health and practical tips.",
    category: "Safety and health",
    tags: ["safety", "insurance", "health"],
    keywords: ["is zanzibar safe", "zanzibar safety", "zanzibar mandatory insurance", "zanzibar vaccinations", "is zanzibar dangerous"],
    ...DATES,
    cover: { src: "/images/destino/praias-aerea.webp", alt: "A Zanzibar beach seen from above" },
    blocks: [
      {
        type: "p",
        text: "**Is Zanzibar safe? For most tourists, yes: they spend a week on the island without incident, especially in the resorts.** But safety is never a guarantee, and the situation in Tanzania can change. Before you book, always check the most recent official travel advice.",
      },
      { type: "h2", text: "The political situation: what happened recently" },
      {
        type: "p",
        text: "In October and November 2025, after Tanzania's elections, there were protests and disruption that affected transport links, including flights and sea connections. It could happen again. So rather than telling you everything is fine, we recommend checking the current advice before you travel.",
      },
      {
        type: "note",
        text: "Check the UK government's foreign travel advice for Tanzania before you book and again before you leave. If the situation changes after you have booked, we will contact you.",
      },
      { type: "h2", text: "Mandatory insurance to enter Zanzibar" },
      {
        type: "p",
        text: "Since 1 October 2024, all visitors to Zanzibar (except Tanzanian residents) must hold compulsory travel insurance bought from the Zanzibar Insurance Corporation covering their whole stay. Authorities can refuse entry to anyone without it. Because that policy's cover is limited, it is wise to carry international travel insurance with good medical assistance as well.",
      },
      { type: "h2", text: "Everyday risks" },
      {
        type: "ul",
        items: [
          "**Petty theft:** as in any tourist destination. Do not leave valuables on the beach or in plain sight.",
          "**Sun and heat:** sunscreen, a hat and plenty of water. The sun near the equator is strong.",
          "**Sea and tides:** check the tides and wear shoes where there are rocks or sea urchins.",
          "**Roads:** traffic is chaotic. Prefer transport arranged by your hotel.",
        ],
      },
      { type: "h2", text: "Health: vaccinations and malaria" },
      {
        type: "ul",
        items: [
          "Talk to your doctor or a travel clinic **before you go** about vaccinations and malaria prevention.",
          "Drink only bottled water or water from a safe source.",
          "Use insect repellent, especially at dusk.",
        ],
      },
      {
        type: "p",
        text: "Our packages include **travel insurance**. Read the conditions and check what it covers, in particular medical assistance, and ask us how Zanzibar's compulsory insurance is handled.",
      },
      { type: "h2", text: "Respecting local customs" },
      {
        type: "p",
        text: "Zanzibar is a majority-Muslim society. In resorts and tourist beaches swimwear is normal, but away from them, and especially in Stone Town, dress more modestly (shoulders and knees covered) and ask permission before photographing people.",
      },
      { type: "h2", text: "So, is Zanzibar safe?" },
      {
        type: "p",
        text: `For anyone staying in a resort and taking organised excursions, everyday risk is low. What weighs most is political and logistical uncertainty, which you manage with up-to-date information and good insurance. If you have doubts, talk to our team before you send a booking request. See our [Zanzibar hotels](${L.hotels}) and our [contact page](${L.contact}). To plan your trip, also read [where Zanzibar is](${L.guide("where")}).`,
      },
    ],
    faq: [
      { question: "Is Zanzibar safe for tourists?", answer: "For anyone staying in a resort and taking organised excursions, everyday risk is low. Follow official advice, because the situation in Tanzania can change." },
      { question: "Were there recent problems in Tanzania?", answer: "Yes. In October and November 2025, after the elections, there were protests and disruption, including to transport. Check current advice before you travel." },
      { question: "Do I need special insurance to enter Zanzibar?", answer: "Yes. Since 1 October 2024, visitors need compulsory travel insurance bought from the Zanzibar Insurance Corporation and can be refused entry without it." },
      { question: "Do I need vaccinations for Zanzibar?", answer: "Talk to your doctor or a travel clinic before you leave to find out what is recommended for you." },
      { question: "Is travel insurance included?", answer: "Our packages include travel insurance. Read the conditions to confirm the cover and ask us how Zanzibar's compulsory insurance is handled." },
    ],
    related: RELATED,
  },
};
