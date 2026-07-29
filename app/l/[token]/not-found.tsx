export default function LetterNotFound() {
  return (
    <main className="letter-page">
      <article className="letter-shell">
        <header className="brand-header">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">
              ∞
            </span>
            <span>Forever Alive</span>
          </a>
        </header>

        <section className="letter-card">
          <div className="letter-label">FOREVER ALIVE</div>

          <h1>This letter is unavailable.</h1>

          <div className="divider">
            <span />
          </div>

          <div className="letter-content">
            <p>
              The private link may be incorrect, expired, or the letter may
              have been withdrawn.
            </p>
          </div>

          <footer className="letter-footer">
            <a href="/">Return to Forever Alive</a>
          </footer>
        </section>
      </article>
    </main>
  );
}