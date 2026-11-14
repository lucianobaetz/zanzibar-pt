import type { GuideLocale } from "./index";

/** Small interface texts around the guides, per market. */
export type BlogUi = {
  home: string;
  blog: string;
  blogTitle: string;
  blogDescription: string;
  by: string;
  updated: string;
  minutes: string;
  inThisArticle: string;
  faqTitle: string;
  readGuide: string;
  moreTitle: string;
  teamLabel: string;
  teamRole: string;
  teamText: string;
  teamCta: string;
  teamOr: string;
  dateLocale: string;
  inLanguage: string;
  breadcrumbLabel: string;
};

export const BLOG_UI: Record<GuideLocale, BlogUi> = {
  es: {
    home: "Inicio",
    blog: "Blog",
    blogTitle: "Blog de viajes a Zanzíbar",
    blogDescription: "Guías para planificar el viaje a Zanzíbar desde España: dónde está, mejor época, vuelos, qué ver y seguridad.",
    by: "Por Luciano Baetz",
    updated: "Actualizado el",
    minutes: "min de lectura",
    inThisArticle: "En este artículo",
    faqTitle: "Preguntas frecuentes",
    readGuide: "Leer la guía →",
    moreTitle: "Para preparar el viaje",
    teamLabel: "Hable con nuestro equipo",
    teamRole: "Equipo Zanzibar Resorts",
    teamText: "Elija el hotel y la fecha. Nos ocupamos de todo el proceso, desde la solicitud hasta el regreso.",
    teamCta: "Ver hoteles",
    teamOr: "o llame al",
    dateLocale: "es-ES",
    inLanguage: "es-ES",
    breadcrumbLabel: "Ubicación",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    blogTitle: "Blog voyage Zanzibar",
    blogDescription: "Guides pour préparer votre voyage à Zanzibar depuis la France : où se trouve l'île, quand partir, vols, que faire et sécurité.",
    by: "Par Luciano Baetz",
    updated: "Mis à jour le",
    minutes: "min de lecture",
    inThisArticle: "Dans cet article",
    faqTitle: "Questions fréquentes",
    readGuide: "Lire le guide →",
    moreTitle: "Pour préparer le voyage",
    teamLabel: "Parlez à notre équipe",
    teamRole: "Équipe Zanzibar Resorts",
    teamText: "Choisissez l'hôtel et la date. Nous nous occupons de tout, de la demande au retour.",
    teamCta: "Voir les hôtels",
    teamOr: "ou appelez le",
    dateLocale: "fr-FR",
    inLanguage: "fr-FR",
    breadcrumbLabel: "Fil d'Ariane",
  },
  en: {
    home: "Home",
    blog: "Blog",
    blogTitle: "Zanzibar travel blog",
    blogDescription: "Guides to planning your Zanzibar holiday: where it is, the best time to go, flights, things to do and safety.",
    by: "By Luciano Baetz",
    updated: "Updated",
    minutes: "min read",
    inThisArticle: "In this article",
    faqTitle: "Frequently asked questions",
    readGuide: "Read the guide →",
    moreTitle: "To prepare your trip",
    teamLabel: "Talk to our team",
    teamRole: "Zanzibar Resorts team",
    teamText: "Choose the hotel and the date. We take care of the whole process, from request to return.",
    teamCta: "See hotels",
    teamOr: "or call",
    dateLocale: "en-GB",
    inLanguage: "en-GB",
    breadcrumbLabel: "Breadcrumb",
  },
  de: {
    home: "Startseite",
    blog: "Blog",
    blogTitle: "Sansibar Reiseblog",
    blogDescription: "Ratgeber für Ihren Sansibar Urlaub: wo es liegt, beste Reisezeit, Flug, Sehenswürdigkeiten und Sicherheit.",
    by: "Von Luciano Baetz",
    updated: "Aktualisiert am",
    minutes: "Min. Lesezeit",
    inThisArticle: "In diesem Artikel",
    faqTitle: "Häufige Fragen",
    readGuide: "Ratgeber lesen →",
    moreTitle: "Zur Reisevorbereitung",
    teamLabel: "Sprechen Sie mit unserem Team",
    teamRole: "Team Zanzibar Resorts",
    teamText: "Wählen Sie Hotel und Termin. Wir kümmern uns um alles, von der Anfrage bis zur Rückkehr.",
    teamCta: "Hotels ansehen",
    teamOr: "oder rufen Sie an:",
    dateLocale: "de-DE",
    inLanguage: "de-DE",
    breadcrumbLabel: "Brotkrumen-Navigation",
  },
};
