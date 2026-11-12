// Single source of truth for the public site address.
// The old zanzibar.pt shipped "http://localhost:3000" in its sitemap, robots and
// canonical because this value was missing in production. Never again: in
// production a missing or local address stops the build instead of going live.

const FALLBACK_DEV_URL = "http://localhost:3000";

const resolveSiteUrl = (): string => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const isProductionBuild = process.env.NODE_ENV === "production";

  if (!raw) {
    if (isProductionBuild) {
      throw new Error("NEXT_PUBLIC_SITE_URL is required in production (example: https://zanzibar.pt)");
    }
    return FALLBACK_DEV_URL;
  }

  const url = new URL(raw);
  const isLocal = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (isProductionBuild && (isLocal || url.protocol !== "https:")) {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be a public https address in production, got "${raw}"`);
  }
  return url.origin;
};

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "Zanzibar Resorts",
  legalName: "Vamos Fugir – Viagens e Expedições",
  rnavt: "4155",
  phone: "+351937045579",
  email: "info@vamosfugir.pt",
  locale: "pt-PT",
} as const;

export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).toString();
