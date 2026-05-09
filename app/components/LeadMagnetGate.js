import Link from "next/link";

export default function LeadMagnetGate({
  resource,
  searchParams,
}) {
  const unlocked = searchParams?.unlocked === "1";
  const hasError = searchParams?.error === "1";
  const subscribeStatus = searchParams?.status || null;

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
              <p className="unlocked-tag">
                {subscribeStatus === "synced"
                  ? "✅ You're subscribed."
                  : "✅ Got it — your resource is ready."}
              </p>
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
              <form
                className="signup"
                action="/api/subscribe"
                method="post"
              >
                <input
                  type="hidden"
                  name="redirect"
                  value={`/resources/${slug}`}
                />
                <label htmlFor="email" className="visually-hidden">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@workemail.com"
                  required
                />
                <button type="submit">Get the {format}</button>
              </form>

              {hasError && (
                <p className="error">
                  Could not process your request. Please try again.
                </p>
              )}

              <p className="fine-print">
                Subscribe to The Customer Continuum and unlock this resource.
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
