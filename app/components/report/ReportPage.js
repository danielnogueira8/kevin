import Link from "next/link";

import { AUTHOR, LINKS, SITE_URL } from "../../../lib/site";
import SubscribeForm from "../SubscribeForm";
import ReportCode from "./ReportCode";
import ReportText from "./ReportText";
import { ReportToc, ReportTocMobile } from "./ReportToc";
import "./report.css";

const pad = (n) => String(n).padStart(2, "0");

function Block({ block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="rp-lead">
          <ReportText text={block.text} />
        </p>
      );
    case "p":
      return (
        <p className="rp-p">
          <ReportText text={block.text} />
        </p>
      );
    case "h3":
      return (
        <h3 className="rp-h3">
          <ReportText text={block.text} />
        </h3>
      );
    case "h4":
      return <p className="rp-h4">{block.text}</p>;
    case "code":
      return <ReportCode label={block.label} text={block.text} pre={block.pre} />;
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      const kind = block.ordered ? "rp-ol" : block.arrow ? "rp-arrows" : "rp-ul";
      return (
        <Tag className={`rp-list ${kind}`}>
          {block.items.map((item, i) => (
            <li key={i}>
              <ReportText text={item} />
            </li>
          ))}
        </Tag>
      );
    }
    case "table":
      return (
        <div className="rp-table-wrap">
          <table className="rp-table">
            {block.head.length > 0 && (
              <thead>
                <tr>
                  {block.head.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>
                      <ReportText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <aside className={`rp-callout rp-callout--${block.tone}`}>
          <span aria-hidden="true" className="rp-callout-emoji">
            {block.emoji}
          </span>
          <div>
            {block.title && (
              <p className="rp-callout-title">
                <ReportText text={block.title} />
              </p>
            )}
            {block.body.map((line, i) => (
              <p key={i} className="rp-callout-body">
                <ReportText text={line} />
              </p>
            ))}
          </div>
        </aside>
      );
    case "quote":
      return (
        <blockquote className="rp-quote">
          <ReportText text={block.text} />
        </blockquote>
      );
    case "image":
      return (
        <figure className="rp-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} width={block.width} height={block.height} loading="lazy" />
        </figure>
      );
    case "card":
      return (
        <details id={block.id} className="rp-card">
          <summary className="rp-card-summary">
            <span className="rp-card-num">{block.num}</span>
            <span className="rp-card-text">
              <span className="rp-card-title">{block.title}</span>
              <span className="rp-card-line">
                <ReportText text={block.summary} />
              </span>
            </span>
            <span aria-hidden="true" className="rp-card-toggle">
              +
            </span>
          </summary>
          <div className="rp-card-body">
            {block.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        </details>
      );
    case "link":
      return (
        <a href={block.href} target="_blank" rel="noopener noreferrer" className="rp-linkcard">
          <span className="rp-linkcard-icon" aria-hidden="true">
            ↓
          </span>
          <span className="rp-linkcard-text">
            <span className="rp-linkcard-title">{block.title}</span>
            <span className="rp-linkcard-detail">{block.detail}</span>
          </span>
          <span className="rp-linkcard-action">{block.action} →</span>
        </a>
      );
    case "cta":
      return (
        <div className="rp-cta">
          <a href={block.href} target="_blank" rel="noopener noreferrer" className="rp-button">
            {block.label} →
          </a>
          {block.detail && <span className="rp-cta-detail">{block.detail}</span>}
        </div>
      );
    default:
      return null;
  }
}

function Brand({ small = false }) {
  return (
    <Link href="/" className={`rp-brand${small ? " rp-brand--small" : ""}`} aria-label="Kevin Lau home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={AUTHOR.image} alt="" className="rp-brand-mark" width={34} height={34} />
      <span className="rp-brand-text">
        <span className="rp-brand-name">Kevin Lau</span>
        {!small && <span className="rp-brand-sub">The Customer Continuum</span>}
      </span>
    </Link>
  );
}

export default function ReportPage({ report }) {
  const path = `/resources/${report.slug}`;
  const toc = report.sections.map((s) => ({ id: s.id, nav: s.nav }));

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: report.title,
      description: report.description,
      url: `${SITE_URL}${path}`,
      mainEntityOfPage: `${SITE_URL}${path}`,
      dateModified: report.updated,
      image: report.cover ? `${SITE_URL}${report.cover.src}` : undefined,
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        jobTitle: AUTHOR.role,
        image: `${SITE_URL}${AUTHOR.image}`,
        sameAs: [AUTHOR.linkedin],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Resources", item: `${SITE_URL}/resources` },
        { "@type": "ListItem", position: 2, name: report.title, item: `${SITE_URL}${path}` },
      ],
    },
  ];

  return (
    <div className="rp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="rp-shell">
        {/* Sidebar (desktop) */}
        <aside className="rp-sidebar">
          <div className="rp-sidebar-head">
            <Brand />
            <p className="rp-kind">{report.kind}</p>
            <p className="rp-sidebar-title">{report.title}</p>
          </div>
          <div className="rp-sidebar-toc">
            <ReportToc items={toc} />
          </div>
          <div className="rp-sidebar-foot">
            <p>Rather build this with someone who&apos;s done it?</p>
            <a href={LINKS.fitCall} target="_blank" rel="noopener noreferrer" className="rp-button rp-button--block">
              Book a fit call
            </a>
            <a href={LINKS.substack} target="_blank" rel="noopener noreferrer" className="rp-sidebar-sub">
              Or get the next build free →
            </a>
          </div>
        </aside>

        {/* Top bar (mobile) */}
        <header className="rp-topbar">
          <div className="rp-topbar-row">
            <Brand small />
            <a href={LINKS.fitCall} target="_blank" rel="noopener noreferrer" className="rp-button rp-button--small">
              Book a fit call
            </a>
          </div>
          <ReportTocMobile items={toc} />
        </header>

        <main className="rp-main">
          {/* Banner: what's inside, in three numbers */}
          <section className="rp-banner">
            <div className="rp-banner-grid" aria-hidden="true" />
            <div className="rp-banner-glow" aria-hidden="true" />
            <nav aria-label="Breadcrumb" className="rp-crumbs">
              <Link href="/resources">Resources</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{report.title}</span>
            </nav>
            <dl className="rp-proof">
              {report.proof.map((card) => (
                <div key={card.label} className="rp-proof-card">
                  <dt>{card.label}</dt>
                  <dd className="rp-proof-value">{card.value}</dd>
                  <dd className="rp-proof-detail">{card.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <article className="rp-article">
            <div className="rp-article-inner">
              {/* Title block */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={AUTHOR.image} alt="Kevin Lau" className="rp-avatar" width={80} height={80} />
              <h1 className="rp-h1">
                {report.headline.map((line, i) => (
                  <span key={i}>
                    <ReportText text={line} />
                  </span>
                ))}
              </h1>
              <p className="rp-intro">
                <ReportText text={report.lead} />
              </p>
              <p className="rp-meta">
                {report.meta.map((item, i) => (
                  <span key={item}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    <span className="rp-meta-item">{item}</span>
                  </span>
                ))}
              </p>

              {report.sections.map((section, i) => (
                <section key={section.id} id={section.id} className="rp-section">
                  <p className="rp-eyebrow">
                    {pad(i + 1)} · {section.eyebrow}
                  </p>
                  <h2 className="rp-h2">
                    <ReportText text={section.heading} />
                  </h2>
                  <div className="rp-blocks">
                    {section.blocks.map((block, b) => (
                      <Block key={b} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          {/* Closing: the newsletter, same as the rest of the site */}
          <section className="rp-closing">
            <div className="rp-closing-card">
              <p className="eyebrow">The Customer Continuum</p>
              <h2>Get the next build free</h2>
              <p className="rp-closing-text">
                I publish the playbooks behind all of this every Thursday, read by 1,100+ operators.
              </p>
              <SubscribeForm />
              <p className="fine-print">Free. Unsubscribe anytime.</p>
            </div>
            <footer className="footer rp-footer">
              <span>© Kevin Lau</span>
              <span className="footer-sep">·</span>
              <Link href="/resources">Resources</Link>
              <span className="footer-sep">·</span>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="footer-sep">·</span>
              <a href={LINKS.substack} target="_blank" rel="noreferrer">
                Substack
              </a>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
