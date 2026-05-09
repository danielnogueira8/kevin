"use client";

export default function SubstackEmbed({ height = 200, className = "" }) {
  return (
    <iframe
      src="https://kevinkennethlau.substack.com/embed"
      width="100%"
      height={height}
      style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 12 }}
      frameBorder="0"
      scrolling="no"
      className={`substack-embed ${className}`}
      title="Subscribe to The Customer Continuum"
    />
  );
}
