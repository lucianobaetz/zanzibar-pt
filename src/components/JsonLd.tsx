type JsonLdProps = { data: Record<string, unknown> };

// "<" is escaped so a stray "</script>" in content can never break out of the tag.
export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);
