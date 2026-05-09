"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SubstackEmbed from "./SubstackEmbed";

export default function LeadMagnetGate({ resource }) {
  const {
    slug,
    eyebrow = "Free resource",
    title,
    subtitle,
    description,
    bullets = [],
    pages,
    format = "PDF",
    downloadUrl,
    coverEmoji = "📘",
  } = resource;

  const storageKey = `kevinlau:unlocked:${slug}`;
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(storageKey) === "1") {
        setUnlocked(true);
      }
    } catch {
      // localStorage unavailable; ignore
    }
  }, [storageKey]);

  function handleUnlock() {
    try {
      window.localStorage.setItem(storageKey, "1");
    } catch {
      // ignore
    }
    setUnlocked(true);
  }

  return (
    <main className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <header className="nav">
        <Link href="/" className="brand">
          <span className="brand-mark">KL</span>
          <span className="brand-name">Kevin Lau</span>
        </Link>
        <a
          className="nav-link"
          href="https://kevinkennethlau.substack.com"
          target="_blank"
          rel="noreferrer"
        >
          The Customer Continuum →
        </a>
      </header>

      <section className="resource">
        <div className="resource-cover" aria-hidden="true">
          <span className="resource-cover-emoji">{coverEmoji}</span>
          <span className="resource-cover-meta">
            {format} · {pages ? `${pages} pages` : "Free download"}
          </span>
        </div>

        <div className="resource-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {subtitle && <p className="lede">{subtitle}</p>}

          {description && <p className="resource-desc">{description}</p>}

          {bullets.length > 0 && (
            <ul className="resource-bullets">
              {bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          {unlocked ? (
            <div className="unlocked">
              <p className="unlocked-tag">✅ Your resource is ready.</p>
              <a
                className="download-btn"
                href={downloadUrl}
                download
                target="_blank"
                rel="noreferrer"
              >
                Download the {format}
              </a>
              <p className="fine-print">
                Check your inbox for The Customer Continuum confirmation email.
              </p>
            </div>
          ) : (
            <>
              <p className="resource-step">
                <strong>Step 1.</strong> Subscribe to The Customer Continuum
                below.
              </p>
              <div className="embed-wrap">
                <SubstackEmbed height={150} />
              </div>

              <p className="resource-step">
                <strong>Step 2.</strong> Once you've subscribed, click below to
                unlock the {format}.
              </p>
              <button
                type="button"
                className="download-btn"
                onClick={handleUnlock}
              >
                I subscribed — unlock the {format}
              </button>

              <p className="fine-print">
                Free, weekly-ish, unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </section>

      <footer className="footer">
        <span>© Kevin Lau</span>
        <span className="footer-sep">·</span>
        <a
          href="https://www.linkedin.com/in/kevinkennethlau/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <span className="footer-sep">·</span>
        <a
          href="https://kevinkennethlau.substack.com"
          target="_blank"
          rel="noreferrer"
        >
          Substack
        </a>
      </footer>
    </main>
  );
}
