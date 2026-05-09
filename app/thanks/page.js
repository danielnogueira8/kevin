import Link from "next/link";

export default async function ThanksPage({ searchParams }) {
  const params = await searchParams;
  const status = params?.status || "pending";

  const messageByStatus = {
    synced: "You're subscribed. Watch your inbox for the Substack confirmation.",
    failed:
      "We got your email, but Substack sync failed this time. We'll retry from our backend records.",
    pending:
      "We got your email and are processing your Substack signup in the background.",
  };

  const statusMessage = messageByStatus[status] || messageByStatus.pending;

  return (
    <main className="page">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <header className="nav">
        <div className="brand">
          <span className="brand-mark">KL</span>
          <span className="brand-name">Kevin Lau</span>
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">The Customer Continuum</p>
        <h1>You're on the list.</h1>
        <p className="lede">{statusMessage}</p>
        <p className="fine-print">
          <Link href="/">← Back to landing page</Link>
        </p>
      </section>
    </main>
  );
}
