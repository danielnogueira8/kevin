import Link from "next/link";

export const metadata = {
  title: "Your download — The AI-Powered CLG Flywheel",
  description:
    "Your copy of The AI-Powered CLG Flywheel playbook is on the way.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadPage() {
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

      <section className="hero">
        <p className="eyebrow">Your download</p>
        <h1>
          Your copy is <em>on the way</em>.
        </h1>
        <p className="lede">
          Thanks for subscribing to The Customer Continuum. The AI-Powered CLG
          Flywheel playbook is being finalized — Kevin will email it to your
          inbox shortly.
        </p>

        <div className="placeholder-card">
          <p className="placeholder-emoji" aria-hidden="true">
            🎯
          </p>
          <p className="placeholder-title">The AI-Powered CLG Flywheel</p>
          <p className="placeholder-meta">PDF · 18 pages · coming soon</p>
          <p className="placeholder-note">
            (This is a placeholder page. The PDF download will live here once
            the asset is final.)
          </p>
        </div>

        <p className="fine-print">
          Meanwhile, check your inbox for a confirmation from{" "}
          <strong>The Customer Continuum</strong>. While you wait, you can read
          the latest issues on{" "}
          <a
            href="https://kevinkennethlau.substack.com"
            target="_blank"
            rel="noreferrer"
          >
            Kevin's Substack
          </a>
          .
        </p>

        <p className="fine-print">
          <Link href="/">← Back to homepage</Link>
        </p>
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
