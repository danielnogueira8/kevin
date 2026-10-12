import Link from "next/link";

import "../components/report/report.css";
import { Brand, BrandFonts } from "../components/report/ReportPage";
import { reports } from "../../lib/reports";
import { LINKS, SITE_URL } from "../../lib/site";

export const metadata = {
  title: "Free Resources | Kevin Lau",
  description:
    "Free setup guides and AI builds for customer marketing and post-sale teams, from Kevin Lau.",
  alternates: { canonical: `${SITE_URL}/resources` },
};

/** Cover in a framed panel, title and tag beneath. Opens the landing page. */
function ResourceTile({ report }) {
  return (
    <Link href={`/resources/${report.landingSlug}`} className="lib-tile">
      <div className="lib-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={report.cover.src}
          alt={report.cover.alt}
          width={report.cover.width}
          height={report.cover.height}
        />
      </div>
      <div className="lib-tile-row">
        <div>
          <h2>{report.title}</h2>
          <p>{report.cardDescription}</p>
        </div>
        <span className="lib-chip">{report.kind}</span>
      </div>
      <span className="lib-get">Get it free ↗</span>
    </Link>
  );
}

export default function ResourcesPage() {
  return (
    <main className="rp">
      <BrandFonts />

      <div className="lib-top">
        <div className="rp-banner-grid" aria-hidden="true" />
        <div className="rp-banner-glow" aria-hidden="true" />
        <header className="lib-nav">
          <Brand />
          <a className="lib-nav-link" href={LINKS.substack} target="_blank" rel="noreferrer">
            The Customer Continuum →
          </a>
        </header>

        <section className="lib-hero">
          <p className="lib-eyebrow">Free library</p>
          <h1>
            Free <span className="rp-accent">resources</span>
          </h1>
          <p className="lib-lede">
            Setup guides and AI builds for customer marketing and post-sale teams, from 15+ years
            building post-sale revenue engines.
          </p>
        </section>
      </div>

      <div className="lib-page">
        <section className="lib-grid">
          {reports.map((report) => (
            <ResourceTile key={report.slug} report={report} />
          ))}
        </section>

        <footer className="footer rp-footer">
          <span>© Kevin Lau</span>
          <span className="footer-sep">·</span>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="footer-sep">·</span>
          <a href={LINKS.substack} target="_blank" rel="noreferrer">
            Substack
          </a>
        </footer>
      </div>
    </main>
  );
}
