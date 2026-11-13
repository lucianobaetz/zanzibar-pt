import { melhorAlturaZanzibar } from "./melhor-altura-para-ir-a-zanzibar";
import { oQueFazerEmZanzibar } from "./o-que-fazer-em-zanzibar";
import { ondeFicaZanzibar } from "./onde-fica-zanzibar";
import type { Post } from "./types";
import { voosLisboaZanzibar } from "./voos-lisboa-zanzibar";
import { zanzibarECaro } from "./zanzibar-e-caro";
import { zanzibarEPerigoso } from "./zanzibar-e-perigoso";
import { zanzibarSafari } from "./zanzibar-safari";

export type { Post } from "./types";

export const POSTS: readonly Post[] = [
  ondeFicaZanzibar,
  melhorAlturaZanzibar,
  voosLisboaZanzibar,
  oQueFazerEmZanzibar,
  zanzibarECaro,
  zanzibarEPerigoso,
  zanzibarSafari,
];

export const getPost = (slug: string): Post | undefined => POSTS.find((post) => post.slug === slug);
