import Link from "next/link";

export default async function ThanksPage({ searchParams }) {
  const params = await searchParams;
  const status = params?.status || "pending";

  const messageByStatus = {
    synced: "You are subscribed. Watch your inbox for Substack confirmation.",
    failed:
      "We got your email, but Substack sync failed this time. We will retry from our backend records.",
    pending:
      "We got your email and are processing your Substack signup in the background.",
  };

  const statusMessage = messageByStatus[status] || messageByStatus.pending;

  return (
    <main className="container">
      <section className="card">
        <h1>Thanks, you are on the list</h1>
        <p>{statusMessage}</p>
        <p>
          <Link href="/">Back to landing page</Link>
        </p>
      </section>
    </main>
  );
}
