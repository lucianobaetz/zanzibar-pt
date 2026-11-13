import type { Block, Post } from "./types";

const WORDS_PER_MINUTE = 200;

const blockText = (block: Block): string => {
  switch (block.type) {
    case "h2":
    case "h3":
    case "p":
    case "note":
      return block.text;
    case "ul":
      return block.items.join(" ");
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ");
    default:
      return "";
  }
};

export const readingMinutes = (post: Post): number => {
  const text = [...post.blocks.map(blockText), ...post.faq.map((item) => `${item.question} ${item.answer}`)].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
};

/** Other posts ranked by shared category and tags. */
export const relatedPosts = (post: Post, all: readonly Post[], limit = 3): Post[] =>
  all
    .filter((other) => other.slug !== post.slug)
    .map((other) => ({
      other,
      score: (other.category === post.category ? 2 : 0) + other.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ other }) => other);
