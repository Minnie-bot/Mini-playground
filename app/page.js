const statusItems = [
  "Core structure and deployment path are being prepared for Vercel.",
  "Visual polish, launch content, and navigation are being refined.",
  "Public release details will follow once the final checks are complete.",
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__texture" aria-hidden="true" />
        <div className="hero__stripes" aria-hidden="true" />

        <div className="hero__content">
          <p className="eyebrow">Coming Soon</p>
          <p className="brand">Mini Playground</p>
          <h1>A sharper digital space is under construction.</h1>
          <p className="summary">
            We&apos;re rebuilding the site with a cleaner look, faster loading,
            and a better launch experience.
          </p>

          <div className="actions">
            <a className="button button--primary" href="mailto:hello@example.com">
              Contact Us
            </a>
            <a className="button button--ghost" href="#status">
              View Status
            </a>
          </div>
        </div>
      </section>

      <section className="status" id="status">
        <div className="status__intro">
          <p className="eyebrow">Build Status</p>
          <h2>The foundation is set. The final details are now being installed.</h2>
        </div>

        <div className="status__list" aria-label="Construction progress">
          {statusItems.map((item, index) => (
            <article className="status__item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div>
          <p className="eyebrow">Availability</p>
          <p className="contact__copy">
            For early inquiries or launch updates, send a note and we&apos;ll get
            back to you as soon as the site opens.
          </p>
        </div>

        <a className="contact__link" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </section>
    </main>
  );
}
