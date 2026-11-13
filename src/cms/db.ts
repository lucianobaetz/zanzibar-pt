import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

/**
 * Own database, separate from every other site. One file on the server, easy to back up.
 * Content is stored per locale: a row is one language version with its own native SEO.
 */
const MIGRATIONS: readonly string[] = [
  `CREATE TABLE users (
     id INTEGER PRIMARY KEY,
     email TEXT NOT NULL UNIQUE,
     name TEXT NOT NULL,
     password_hash TEXT NOT NULL,
     created_at TEXT NOT NULL DEFAULT (datetime('now'))
   );
   CREATE TABLE sessions (
     token_hash TEXT PRIMARY KEY,
     user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
     expires_at TEXT NOT NULL
   );
   -- One "entry" groups the language versions of the same piece (article, page, hotel text).
   CREATE TABLE entries (
     id INTEGER PRIMARY KEY,
     kind TEXT NOT NULL CHECK (kind IN ('post','page','hotel')),
     ref TEXT NOT NULL,                 -- stable internal name, e.g. "zanzibar-e-caro"
     category TEXT NOT NULL DEFAULT '',
     tags TEXT NOT NULL DEFAULT '[]',   -- JSON array
     cover_src TEXT,
     created_at TEXT NOT NULL DEFAULT (datetime('now')),
     UNIQUE (kind, ref)
   );
   CREATE TABLE versions (
     id INTEGER PRIMARY KEY,
     entry_id INTEGER NOT NULL REFERENCES entries(id) ON DELETE CASCADE,
     locale TEXT NOT NULL,
     status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
     publish_at TEXT,                   -- scheduled publishing (ISO date)
     title TEXT NOT NULL DEFAULT '',
     subtitle TEXT NOT NULL DEFAULT '',
     excerpt TEXT NOT NULL DEFAULT '',
     blocks TEXT NOT NULL DEFAULT '[]', -- JSON, same blocks the site already renders
     faq TEXT NOT NULL DEFAULT '[]',
     cover_alt TEXT NOT NULL DEFAULT '',
     -- SEO, native to this locale
     slug TEXT NOT NULL,
     focus_keyword TEXT NOT NULL DEFAULT '',
     keywords TEXT NOT NULL DEFAULT '[]',
     meta_title TEXT NOT NULL DEFAULT '',
     meta_description TEXT NOT NULL DEFAULT '',
     og_image TEXT,
     noindex INTEGER NOT NULL DEFAULT 0,
     updated_at TEXT NOT NULL DEFAULT (datetime('now')),
     UNIQUE (entry_id, locale),
     UNIQUE (locale, slug)
   );
   CREATE TABLE redirects (
     from_path TEXT PRIMARY KEY,
     to_path TEXT NOT NULL,
     status INTEGER NOT NULL DEFAULT 301,
     hits INTEGER NOT NULL DEFAULT 0
   );
   -- Departures and prices per market, always with where they came from and when they were checked.
   CREATE TABLE departures (
     id INTEGER PRIMARY KEY,
     hotel_slug TEXT NOT NULL,
     locale TEXT NOT NULL,
     airport TEXT NOT NULL,
     date TEXT NOT NULL,
     price_cents INTEGER NOT NULL,
     source TEXT NOT NULL DEFAULT 'TUI',
     checked_at TEXT NOT NULL DEFAULT (datetime('now')),
     UNIQUE (hotel_slug, locale, airport, date)
   );
   CREATE TABLE media (
     id INTEGER PRIMARY KEY,
     path TEXT NOT NULL UNIQUE,
     alt TEXT NOT NULL DEFAULT '',
     credit TEXT NOT NULL DEFAULT '',
     width INTEGER,
     height INTEGER
   );`,
];

const globalForDb = globalThis as unknown as { cmsDb?: Database.Database };

export const db = (): Database.Database => {
  if (globalForDb.cmsDb) return globalForDb.cmsDb;
  const file = process.env.CMS_DB ?? "/var/lib/zanzibar-pt/cms.db";
  mkdirSync(path.dirname(file), { recursive: true });
  const connection = new Database(file);
  connection.pragma("journal_mode = WAL");
  connection.pragma("foreign_keys = ON");
  migrate(connection);
  globalForDb.cmsDb = connection;
  return connection;
};

export const migrate = (connection: Database.Database): void => {
  const current = Number(connection.pragma("user_version", { simple: true }));
  MIGRATIONS.slice(current).forEach((sql, offset) => {
    connection.transaction(() => {
      connection.exec(sql);
      connection.pragma(`user_version = ${current + offset + 1}`);
    })();
  });
};
