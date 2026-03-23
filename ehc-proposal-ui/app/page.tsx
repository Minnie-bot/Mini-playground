"use client";

import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import styles from "./page.module.css";

type MaterialItem = {
  number: string;
  title: string;
  sku?: string;
  description?: string;
};

type EnhancementItem = {
  id: string;
  icon: "spark" | "clock";
  title: string;
  thumbnail: string;
  description?: string;
  price: number;
  selected: boolean;
};

const projectStats = [
  { label: "Prepared On", value: "March 18, 2026" },
  { label: "Address", value: "6 Bernard Drive, Holmdel, NJ" },
  { label: "Status", value: "Estimate Ready", accent: "status" as const },
  { label: "Quote ID", value: "HH-HM-2041" },
];

const scopeGroups = [
  {
    title: "Main Hallway",
    description:
      "Repair drywall and prepare the finish surfaces in the hallway.",
    preview: "/thumbnails/main-hallway.svg",
    items: [
      {
        number: "01",
        title: "Drywall Repair",
        description:
          "Repair and patch damaged drywall in the hallway.",
      },
    ],
  },
  {
    title: "First Floor Bedroom",
    description:
      "Adjust closet components so doors and hardware operate smoothly.",
    preview: "/thumbnails/first-floor-bedroom.svg",
    items: [
      {
        number: "02",
        title: "Closet Repair",
        description:
          "Review and adjust the first-floor bedroom closet so it operates smoothly.",
      },
    ],
  },
];

const materials: MaterialItem[] = [
  {
    number: "01",
    title: "1 gal primer",
  },
  {
    number: "02",
    title:
      "Job supplies (plywood, shims, fasteners, drywall anchors, caulk, drywall compound, primer)",
  },
  {
    number: "03",
    title: "Epoxy",
  },
];

const baseProjectTotal = 495;

const enhancements: EnhancementItem[] = [
  {
    id: "hallway-touch-up",
    icon: "spark" as const,
    title: "Repair and patch hallway drywall before painting or finish touch-ups.",
    thumbnail: "/thumbnails/hallway-touchup.svg",
    description: "This keeps the finish clean and avoids rework later.",
    price: 75,
    selected: false,
  },
  {
    id: "closet-adjustment",
    icon: "clock" as const,
    title: "Address the first-floor bedroom closet adjustment now.",
    thumbnail: "/thumbnails/closet-adjustment.svg",
    description: "",
    price: 95,
    selected: false,
  },
];

const differentiators = [
  {
    icon: "shield" as const,
    title: "Fully Insured And Vetted Team",
    description: "Trusted local professionals with a customer-friendly review process.",
  },
  {
    icon: "badge" as const,
    title: "W2 Employees",
    description: "A fully managed in-house team focused on clear communication and reliable service.",
  },
  {
    icon: "clipboard" as const,
    title: "Satisfaction Guarantee",
    description: "Locally owned and operated with a 4.9 average rating from nearby homeowners.",
  },
];

const membershipBenefits = [
  "Dedicated handyman for ongoing needs",
  "Personalized home care plan for your property",
  "Protection across 30+ home systems",
  "Priority scheduling for future visits",
];

type IconName =
  | "location"
  | "pliers"
  | "bulb"
  | "drop"
  | "spark"
  | "clock"
  | "shield"
  | "badge"
  | "clipboard"
  | "check";

function Icon({ name }: { name: IconName }) {
  const icons: Record<IconName, ReactNode> = {
    location: (
      <path
        d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5Z"
        fill="currentColor"
      />
    ),
    pliers: (
      <path
        d="M11.2 4.5 9 6.7l2.8 2.8-1.6 1.6L7.4 8.3 5 10.7l1.8 1.8-2.3 6.3 1.5 1.5 6.2-2.3 1.8 1.8 2.4-2.4-2.8-2.8 1.6-1.6 2.8 2.8 2.2-2.2-7-7Z"
        fill="currentColor"
      />
    ),
    bulb: (
      <path
        d="M12 3a6 6 0 0 0-3.9 10.6c.8.7 1.4 1.7 1.6 2.8h4.6c.2-1.1.8-2.1 1.6-2.8A6 6 0 0 0 12 3Zm-2 15h4v1.5a2 2 0 0 1-4 0V18Z"
        fill="currentColor"
      />
    ),
    drop: (
      <path
        d="M12 3.5c2.7 3.5 5.5 6.8 5.5 10a5.5 5.5 0 1 1-11 0c0-3.2 2.8-6.5 5.5-10Zm0 12.5a2.5 2.5 0 0 0 2.5-2.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    spark: (
      <path
        d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Zm6.5 11.5.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1ZM6 14l1.1 2.4L9.5 17l-2.4 1.1L6 20.5l-1.1-2.4L2.5 17l2.4-.6L6 14Z"
        fill="currentColor"
      />
    ),
    clock: (
      <path
        d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm.8 3.5v4.2l3 1.8-.8 1.4-3.8-2.3V8h1.6Z"
        fill="currentColor"
      />
    ),
    shield: (
      <path
        d="M12 3.5 6.5 5.7v4.7c0 3.6 2.2 6.8 5.5 8.1 3.3-1.3 5.5-4.5 5.5-8.1V5.7L12 3.5Zm-1 9.7-2-2 1.1-1.1 1 1 2.8-2.8 1.1 1.1-3.9 3.8Z"
        fill="currentColor"
      />
    ),
    badge: (
      <path
        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-4.3 8.9L6.2 20l3-1.5 2.8 1.5 2.8-1.5 3 1.5-1.5-7.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    clipboard: (
      <path
        d="M9.5 4.5h5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 6 17V6A1.5 1.5 0 0 1 7.5 4.5h2Zm0 0A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5m-5 4h5m-5 3h5m-5 3h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    ),
    check: (
      <path
        d="m6.5 12.5 3.2 3.2 7.8-7.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={styles.iconSvg}
      viewBox="0 0 24 24"
      fill="none"
    >
      {icons[name]}
    </svg>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function Home() {
  const [selectedEnhancements, setSelectedEnhancements] = useState<string[]>(
    enhancements.filter((item) => item.selected).map((item) => item.id),
  );

  const selectedAddOnTotal = useMemo(
    () =>
      enhancements.reduce(
        (sum, item) =>
          selectedEnhancements.includes(item.id) ? sum + item.price : sum,
        0,
      ),
    [selectedEnhancements],
  );
  const selectedEnhancementItems = useMemo(
    () =>
      enhancements.filter((item) => selectedEnhancements.includes(item.id)),
    [selectedEnhancements],
  );

  const totalEstimate = baseProjectTotal + selectedAddOnTotal;
  const totalScopeItems = scopeGroups.reduce(
    (count, group) => count + group.items.length,
    0,
  );
  const selectedEnhancementCount = selectedEnhancementItems.length;

  function toggleEnhancement(id: string) {
    setSelectedEnhancements((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  }

  return (
    <main className={styles.page} id="proposal">
      <div className={styles.topbarWrap}>
        <div className={styles.shell}>
          <header className={styles.topbar}>
            <a href="#proposal" className={styles.wordmark}>
              HANDY HOMES
            </a>
            <nav className={styles.topbarNav} aria-label="Proposal sections">
              <a href="#scope">Scope</a>
              <a href="#materials">Materials</a>
              <a href="#pricing">Options</a>
              <a href="#confirm">Approve</a>
            </nav>
            <div className={styles.topbarGroup}>
              <div className={styles.topbarTotal}>
                <span className={styles.topbarTotalLabel}>Project Total</span>
                <strong className={styles.topbarTotalValue}>
                  {formatCurrency(totalEstimate)}
                </strong>
              </div>
              <a href="#confirm" className={styles.acceptButton}>
                Review Proposal
              </a>
            </div>
          </header>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero-placeholder.svg"
            alt="Placeholder exterior home backdrop"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Handy Homes Proposal</p>
            <p className={styles.heroKicker}>Prepared for Smith Residence</p>
            <h1 className={styles.heroTitle}>
              Your Handyman
              <br />
              Project Proposal
            </h1>
            <p className={styles.heroSummary}>
              Review the work area by area, select any add-ons, and approve the
              quote without digging through a long estimate.
            </p>
            <div className={styles.heroActions}>
              <a href="#confirm" className={styles.acceptButton}>
                Review And Approve
              </a>
              <a href="#scope" className={styles.secondaryAction}>
                Jump To Scope
              </a>
            </div>
          </div>

          <div className={styles.heroMeta}>
            {projectStats.map((item) => (
              <div key={item.label} className={styles.heroMetaItem}>
                <span className={styles.statLabel}>{item.label}</span>
                <span
                  className={
                    item.accent === "status"
                      ? styles.statValueAccent
                      : styles.statValue
                  }
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.shell}>
        <div className={styles.proposalLayout}>
          <div className={styles.mainColumn}>
            <section className={styles.summarySection}>
              <div className={styles.sectionIntro}>
                <h2 className={styles.sectionLabelTitle}>Overview</h2>
                <p className={styles.sectionDescription}>
                  A cleaner proposal built around the work, the options, and the
                  approval decision.
                </p>
              </div>

              <div className={styles.summaryNarrative}>
                <p className={styles.summaryCopy}>
                  This project summary gives you a quick overview of the work we
                  will complete, using project materials where needed and keeping
                  the scope simple, customer-friendly, and easy to approve.
                </p>

                <div className={styles.summaryFacts}>
                  <div>
                    <span>Work Areas</span>
                    <strong>{scopeGroups.length} spaces</strong>
                  </div>
                  <div>
                    <span>Scope Items</span>
                    <strong>{totalScopeItems} tasks</strong>
                  </div>
                  <div>
                    <span>Included</span>
                    <strong>Labor &amp; Materials</strong>
                  </div>
                  <div>
                    <span>Add-Ons Selected</span>
                    <strong>{selectedEnhancementCount}</strong>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.scopeSection} id="scope">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionLabelTitle}>Scope of work</h2>
                <p className={styles.sectionDescription}>
                  Each room is broken down into the exact repair or adjustment we
                  will complete on site.
                </p>
              </div>

              <div className={styles.scopeStack}>
                {scopeGroups.map((group) => (
                  <article key={group.title} className={styles.scopeRow}>
                    <div className={styles.scopeMediaColumn}>
                      <div className={styles.scopeLead}>
                        <h3>{group.title}</h3>
                        <p>{group.description}</p>
                      </div>
                      <div className={styles.scopePreview}>
                        <Image
                          src={group.preview}
                          alt={group.title}
                          width={720}
                          height={420}
                          className={styles.scopePreviewImage}
                        />
                      </div>
                    </div>

                    <div className={styles.scopeList}>
                      {group.items.map((item) => (
                        <div key={item.number} className={styles.scopeItem}>
                          <div className={styles.scopeItemHeader}>
                            <span className={styles.scopeItemNumber}>
                              {item.number}
                            </span>
                            <h4>{item.title}</h4>
                          </div>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.materialsSection} id="materials">
              <div className={styles.materialsColumn}>
                <h2 className={styles.sectionLabelTitle}>Materials</h2>
                <p className={styles.sectionDescription}>
                  Included materials needed to complete the job cleanly.
                </p>
                <div className={styles.materialList}>
                  {materials.map((item) => (
                    <article key={item.title} className={styles.materialItem}>
                      <span className={styles.materialNumber}>{item.number}</span>
                      <div className={styles.materialBody}>
                        <h3>{item.title}</h3>
                        {item.sku ? (
                          <p className={styles.materialSku}>{item.sku}</p>
                        ) : null}
                        {item.description ? <p>{item.description}</p> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.pricingSection} id="pricing">
              <div className={styles.pricingColumn}>
                <h2 className={styles.sectionLabelTitle}>Optional enhancements</h2>
                <p className={styles.sectionDescription}>
                  Add related work now so everything can be handled in the same
                  visit.
                </p>
                <div className={styles.enhancementList}>
                  {enhancements.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      className={
                        selectedEnhancements.includes(item.id)
                          ? styles.enhancementCardSelected
                          : styles.enhancementCard
                      }
                      onClick={() => toggleEnhancement(item.id)}
                      aria-pressed={selectedEnhancements.includes(item.id)}
                    >
                      <div className={styles.enhancementInfo}>
                        <div className={styles.enhancementThumb}>
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={96}
                            height={96}
                            className={styles.squareImage}
                          />
                        </div>
                        <div>
                          <h3>{item.title}</h3>
                          {item.description ? <p>{item.description}</p> : null}
                        </div>
                      </div>
                      <div className={styles.enhancementMeta}>
                        <span className={styles.enhancementPrice}>
                          +{formatCurrency(item.price)}
                        </span>
                        <span
                          className={
                            selectedEnhancements.includes(item.id)
                              ? styles.checkboxSelected
                              : styles.checkbox
                          }
                          aria-hidden="true"
                        >
                          {selectedEnhancements.includes(item.id) ? (
                            <Icon name="check" />
                          ) : null}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className={styles.assuranceSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionLabelTitle}>
                  Why homeowners choose us
                </h2>
                <p className={styles.sectionDescription}>
                  The proposal is simple, but the delivery standards stay high.
                </p>
              </div>

              <div className={styles.benefitList}>
                {differentiators.map((item) => (
                  <article key={item.title} className={styles.benefitCard}>
                    <span className={styles.benefitIcon}>
                      <Icon name={item.icon} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside className={styles.testimonialCard}>
                <span className={styles.quoteMark}>&quot;</span>
                <p>
                  The crew was professional, helpful, and explained everything
                  clearly.
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.avatar}>L</span>
                  <div>
                    <strong>Lorena C</strong>
                    <span>Handy Homes Homeowner</span>
                  </div>
                </div>
              </aside>
            </section>

            <section className={styles.membershipSection} id="membership">
              <div className={styles.membershipIntro}>
                <p className={styles.membershipOffer}>Exclusive offer</p>
                <h2 className={styles.sectionLabelTitle}>Annual Home Care</h2>
                <p className={styles.sectionDescription}>
                  Support your home after this project is done.
                </p>
                <p>
                  Homes need year-round care to keep them humming. Get a
                  dedicated handyman and a personalized home care plan that helps
                  protect over 30 home systems all year round.
                </p>
                <div className={styles.membershipPrice}>
                  <strong>30+</strong>
                  <span>systems covered</span>
                </div>
                <p className={styles.membershipFinePrint}>
                  Annual care option available for non-members.
                </p>
              </div>

              <div className={styles.membershipActions}>
                <ul className={styles.membershipList}>
                  {membershipBenefits.map((benefit) => (
                    <li key={benefit}>
                      <span className={styles.membershipCheck}>
                        <Icon name="check" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a href="#confirm" className={styles.membershipButton}>
                  Explore Annual Care
                </a>
              </div>
            </section>

            <section className={styles.confirmSection} id="confirm">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionLabelTitle}>Approval</h2>
                <p className={styles.sectionDescription}>
                  Review the total, sign digitally, and secure the quote.
                </p>
              </div>

              <div className={styles.confirmLayout}>
                <div className={styles.confirmCard}>
                  <h2>Confirm And Secure This Quote</h2>
                  <p>
                    Review the proposal and provide a digital signature to approve
                    the project scope.
                  </p>
                  <form className={styles.confirmForm}>
                    <label htmlFor="full-name">Full Name</label>
                    <input id="full-name" type="text" defaultValue="John Smith" />

                    <label htmlFor="signature">Digital Signature</label>
                    <div id="signature" className={styles.signatureField}>
                      Sign here
                    </div>

                    <label className={styles.termsRow}>
                      <input type="checkbox" />
                      <span>
                        I agree to the <a href="#proposal">Terms &amp; Conditions</a>{" "}
                        and approve this project proposal for{" "}
                        {formatCurrency(totalEstimate)}.
                      </span>
                    </label>

                    <button type="submit" className={styles.payButton}>
                      Sign And Approve Proposal
                    </button>
                    <button type="button" className={styles.questionButton}>
                      Ask A Question
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>

          <aside className={styles.sidebarColumn}>
            <div className={styles.stickyPricingCard}>
              <p className={styles.quoteEyebrow}>Project total</p>
              <div className={styles.quoteRows}>
                <div>
                  <span>Base Project</span>
                  <strong>{formatCurrency(baseProjectTotal)}</strong>
                </div>
                <div>
                  <span>Selected Add-Ons</span>
                  <strong>{formatCurrency(selectedAddOnTotal)}</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>Estimate Ready</strong>
                </div>
              </div>
              <div className={styles.selectedAddOnList}>
                <span className={styles.selectedAddOnLabel}>Selected add-ons</span>
                {selectedEnhancementItems.length > 0 ? (
                  <ul>
                    {selectedEnhancementItems.map((item) => (
                      <li key={item.id}>
                        <span>{item.title}</span>
                        <strong>+{formatCurrency(item.price)}</strong>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.quoteNote}>No add-ons selected yet.</p>
                )}
              </div>
              <div className={styles.quoteTotal}>
                <span>Total Estimate</span>
                <strong>{formatCurrency(totalEstimate)}</strong>
              </div>
              <p className={styles.quoteNote}>
                Organized by area so the quote stays fast to review and simple
                to sign off.
              </p>
              <a href="#confirm" className={styles.depositButton}>
                Continue To Approval
              </a>
            </div>
          </aside>
        </div>
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerBrand}>Handy Homes</span>
        <nav className={styles.footerNav}>
          <a href="#proposal">Privacy Policy</a>
          <a href="#proposal">Terms of Service</a>
          <a href="#proposal">Contact Support</a>
          <a href="#proposal">Licensing</a>
        </nav>
        <span className={styles.footerMeta}>
          © 2026 Handy Homes. All rights reserved.
        </span>
      </footer>
    </main>
  );
}
