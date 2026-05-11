import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <main className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <header className="nav">
        <div className="brand">
          <img
            className="brand-mark"
            src="/assets/kevin-lau.jpeg"
            alt="Kevin Lau"
          />
          <span className="brand-name">Kevin Lau</span>
        </div>
        <a
          className="nav-link"
          href="https://kevinkennethlau.substack.com"
          target="_blank"
          rel="noreferrer"
        >
          Read the archive →
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">The Customer Continuum · Newsletter</p>
        <h1>
          Most B2B teams are ignoring their <em>#1 growth engine</em>:
          their customers.
        </h1>
        <p className="lede">
          Practical playbooks on customer-led growth, advocacy, and lifecycle
          programs — for marketing, CS, and growth teams who want post-sale to
          drive the next dollar of revenue.
        </p>

        <SubscribeForm />

        <p className="fine-print">
          Free. New issue most weeks. Unsubscribe anytime.
        </p>

        <ul className="proof">
          <li>
            <span className="proof-num">15K+</span>
            <span className="proof-label">LinkedIn followers</span>
          </li>
          <li>
            <span className="proof-num">CAP</span>
            <span className="proof-label">Award winner, 2025</span>
          </li>
          <li>
            <span className="proof-num">Fearless 50</span>
            <span className="proof-label">Influitive, 2023</span>
          </li>
        </ul>
      </section>

      <section className="topics">
        <h2>What you'll get</h2>
        <div className="topic-grid">
          <article className="topic">
            <span className="topic-tag">CLG</span>
            <h3>The AI-Powered CLG Flywheel</h3>
            <p>
              How to wire adoption, retention, expansion, and advocacy into
              one compounding system.
            </p>
          </article>
          <article className="topic">
            <span className="topic-tag">Advocacy</span>
            <h3>Make customer marketing indispensable</h3>
            <p>
              Frameworks to move from "nice to have" to a measurable revenue
              line item.
            </p>
          </article>
          <article className="topic">
            <span className="topic-tag">Trends</span>
            <h3>What's next in customer marketing</h3>
            <p>
              Predictions, teardowns, and benchmarks from inside the world's
              best CLG programs.
            </p>
          </article>
        </div>
      </section>

      <section className="bio">
        <div className="bio-text">
          <p className="eyebrow">About</p>
          <h2>Written by Kevin Kenneth Lau</h2>
          <p>
            Customer marketing and advocacy leader at Freshworks. 15+ years
            building post-sale growth engines at companies most teams want to
            copy. The Customer Continuum is where I unpack what actually works.
          </p>
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
