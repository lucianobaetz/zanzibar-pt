import type { LocaleCode } from "../locales";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { pt, type Messages } from "./pt";

const MESSAGES: Record<LocaleCode, Messages> = { pt, es, fr, en, de };

export const getMessages = (locale: LocaleCode): Messages => MESSAGES[locale];

export type { Messages };

/** Replaces {placeholders} in a message. */
export const fmt = (text: string, values: Readonly<Record<string, string | number>> = {}): string =>
  text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
