"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SUBSTACK_SUBSCRIBE_URL = "https://kevinkennethlau.substack.com/subscribe";

function isFileDownload(url) {
  return /\.(pdf|zip|docx?|xlsx?|pptx?|csv)(\?|#|$)/i.test(url || "");
}

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
    coverImage,
    coverImageAlt,
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

  function handleSubscribe() {
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
          <img
            className="brand-mark"
            src="/assets/kevin-lau.jpeg"
            alt="Kevin Lau"
          />
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
        <div
          className={`resource-cover${coverImage ? " resource-cover--image" : ""}`}
        >
          {coverImage ? (
            <img
              className="resource-cover-img"
              src={coverImage}
              alt={coverImageAlt || title}
            />
          ) : (
            <span className="resource-cover-emoji" aria-hidden="true">
              {coverEmoji}
            </span>
          )}
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
                {...(isFileDownload(downloadUrl)
                  ? { download: true, target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {isFileDownload(downloadUrl)
                  ? `Download the ${format}`
                  : `Open the ${format}`}
              </a>
              <p className="fine-print">
                Check your inbox for The Customer Continuum confirmation email.
              </p>
            </div>
          ) : (
            <>
              <p className="resource-desc">
                Subscribe to The Customer Continuum to unlock the {format}.
                You'll get the download here and Kevin's posts straight to
                your inbox.
              </p>
              <a
                className="subscribe-cta"
                href={SUBSTACK_SUBSCRIBE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleSubscribe}
              >
                Subscribe to Substack to unlock the Guide
              </a>
              <div className="how-it-works">
                <p className="how-it-works-title">What happens next</p>
                <ol className="how-it-works-steps">
                  <li>
                    <span className="step-num">1</span>
                    <span>
                      Click the button above — Substack opens in a new tab.
                    </span>
                  </li>
                  <li>
                    <span className="step-num">2</span>
                    <span>
                      Enter your email and pick any plan. The{" "}
                      <strong>free plan</strong> works — no payment required.
                      <img
                        className="how-it-works-img"
                        src="/assets/tutorial.png"
                        alt="Substack subscription plan picker — the free 'None' plan on the right works."
                      />
                    </span>
                  </li>
                  <li>
                    <span className="step-num">3</span>
                    <span>
                      Come back to this tab and your {format} download will be
                      unlocked.
                    </span>
                  </li>
                </ol>
              </div>
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
