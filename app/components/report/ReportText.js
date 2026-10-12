import Link from "next/link";

/**
 * Markup for lib/reports: **bold**, ==accent==, `code` and [label](url).
 * Bold and accent can hold code or links inside them.
 */
export default function ReportText({ text }) {
  const parts = [];
  const re = /\*\*(.+?)\*\*|==(.+?)==|\[([^\]]+?)\]\(([^)\s]+)\)|`([^`]+)`/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const key = m.index;
    if (m[1] !== undefined) {
      parts.push(
        <strong key={key} className="rp-strong">
          <ReportText text={m[1]} />
        </strong>,
      );
    } else if (m[2] !== undefined) {
      parts.push(
        <span key={key} className="rp-accent">
          <ReportText text={m[2]} />
        </span>,
      );
    } else if (m[5] !== undefined) {
      parts.push(
        <code key={key} className="rp-inline-code">
          {m[5]}
        </code>,
      );
    } else {
      const label = <ReportText text={m[3]} />;
      const href = m[4];
      if (href.startsWith("#")) {
        parts.push(
          <a key={key} href={href} className="rp-link">
            {label}
          </a>,
        );
      } else if (href.startsWith("/")) {
        parts.push(
          <Link key={key} href={href} className="rp-link">
            {label}
          </Link>,
        );
      } else {
        parts.push(
          <a key={key} href={href} className="rp-link" target="_blank" rel="noopener noreferrer">
            {label}
          </a>,
        );
      }
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
