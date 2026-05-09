export default async function Home({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === "1";

  return (
    <main className="container">
      <section className="card">
        <p className="eyebrow">Kevin Lau</p>
        <h1>Customer marketing insights for modern B2B teams</h1>
        <p>
          Subscribe for practical playbooks on advocacy, lifecycle programs, and
          customer-led growth. By signing up here, you are subscribing to
          Kevin&apos;s Substack.
        </p>

        <form action="/api/subscribe" method="post">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@workemail.com"
            required
          />
          <button type="submit">Get Kevin's updates</button>
        </form>

        {hasError && (
          <p className="error">
            Could not process your request. Please try again.
          </p>
        )}

        <p className="fine-print">
          You will be added to Kevin's Substack list once sync completes.
        </p>
      </section>
    </main>
  );
}
