type AppEntry = {
  name: string;
  slug: string;
  status: "Ready" | "In Progress" | "Queued";
  summary: string;
  type: string;
  href?: string;
};

const appEntries: AppEntry[] = [
  {
    name: "Mini-playground",
    slug: "root",
    status: "Ready",
    summary: "The parent launcher and staging surface for everything in this workspace.",
    type: "Workspace shell",
    href: "/",
  },
  {
    name: "EHC Proposal UI",
    slug: "ehc-proposal-ui",
    status: "In Progress",
    summary: "A proposal experience for presenting home repair scope, pricing, and upgrades.",
    type: "Nested app",
    href: "https://ehc-proposal-ui.vercel.app/ehc-proposal-ui",
  },
  {
    name: "Next Slot",
    slug: "next-slot",
    status: "Queued",
    summary: "A reserved lane for the next experiment you decide to add to the playground.",
    type: "Future app",
  },
];

const principles = [
  "Root app owns navigation, curation, and links across projects.",
  "Each sub-app can stay isolated in its own folder and deployment flow.",
  "New ideas get a visible slot before they become fully launched apps.",
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Mini-playground</p>
          <h1>A living front door for every app you build next.</h1>
          <p className="lede">
            This root app is now the main surface: part index, part launch board,
            and part staging area for the experiments growing underneath it.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#directory">
              Browse app directory
            </a>
            <a className="button button--ghost" href="#structure">
              See workspace structure
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-label="Workspace snapshot">
          <div className="signal">
            <span className="signal__dot" />
            Root app active
          </div>
          <div className="hero__grid">
            <div>
              <p className="label">Workspace role</p>
              <p className="value">Main nav + app registry</p>
            </div>
            <div>
              <p className="label">Current sub-apps</p>
              <p className="value">1 live folder</p>
            </div>
            <div>
              <p className="label">Deployment target</p>
              <p className="value">Mini-playground root</p>
            </div>
            <div>
              <p className="label">Next lane</p>
              <p className="value">Open for experiments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="directory" id="directory">
        <div className="section-heading">
          <p className="eyebrow">App Directory</p>
          <h2>Track what is live, what is nested, and what is still waiting for shape.</h2>
        </div>

        <div className="directory__list">
          {appEntries.map((app) => (
            <article className="app-row" key={app.slug}>
              <div className="app-row__title">
                <p className="app-name">{app.name}</p>
                <p className="app-summary">{app.summary}</p>
              </div>
              <p className="app-type">{app.type}</p>
              <p className={`status status--${app.status.toLowerCase().replace(" ", "-")}`}>
                {app.status}
              </p>
              <div className="app-row__action">
                {app.href ? (
                  <a className="text-link" href={app.href}>
                    Open
                  </a>
                ) : (
                  <span className="muted">Attach route or external URL later</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="structure" id="structure">
        <div className="structure__intro">
          <p className="eyebrow">Workspace Structure</p>
          <h2>Keep the playground centered while each sub-app stays free to evolve.</h2>
        </div>

        <div className="structure__columns">
          <div className="structure__code">
            <pre>
              <code>{`Mini-playground/
  app/               # root Next app
  ehc-proposal-ui/   # nested app project
  future-apps/...    # next experiments`}</code>
            </pre>
          </div>

          <div className="structure__notes">
            {principles.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <p className="eyebrow">Next Move</p>
        <h2>Ship the root app first, then plug each project into the directory on your terms.</h2>
        <p className="lede lede--compact">
          `ehc-proposal-ui` can keep building in its own folder while this homepage becomes the
          canonical starting point for the whole workspace.
        </p>
      </section>
    </main>
  );
}
