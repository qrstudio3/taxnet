import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Cloud Accounting Software We Use | Xero, MYOB & QuickBooks | Taxnet",
  description:
    "Explore the cloud accounting platforms and add-on software Taxnet uses to streamline business financials. Certified Xero Platinum, MYOB Practice, and QuickBooks ProAdvisors.",
  keywords: [
    "cloud accounting software Melbourne",
    "Xero platinum partner Melbourne",
    "MYOB certified advisor",
    "QuickBooks ProAdvisor Australia",
    "cloud accounting integrations Melbourne",
  ],
};

interface SoftwareItem {
  icon: BenefitIconType;
  title: string;
  badge: string;
  href: string;
  desc: string;
  features: string[];
}

const SOFTWARE_LIST: SoftwareItem[] = [
  {
    icon: "cloud",
    title: "Xero Cloud Accounting",
    badge: "Platinum Champion Partner",
    href: "/software-we-use/xero",
    desc: "Australia's leading cloud ledger. Beautiful automated bank feeds, intuitive single-touch payroll (STP Phase 2), smart recurring billing, and over 1,000 ecosystem integrations.",
    features: ["Zero data-loss migrations", "Daily live bank reconciliation", "Integrated STP 2 payroll"],
  },
  {
    icon: "chart",
    title: "MYOB Business",
    badge: "Certified Practice Partner",
    href: "/software-we-use/myob",
    desc: "Powerful enterprise accounting built specifically for Australian awards, multi-location inventory, job costing for trades, and high-volume commercial manufacturing operations.",
    features: ["Complex award payroll engine", "Multi-tiered inventory tracking", "Custom financial report builder"],
  },
  {
    icon: "calculator",
    title: "QuickBooks Online",
    badge: "Certified ProAdvisor",
    href: "/software-we-use/quickbooks",
    desc: "Agile, cost-effective accounting designed for self-employed professionals, contractors, and e-commerce stores with multi-currency tracking and automated mobile mileage logging.",
    features: ["Multi-currency transactions", "Automated receipt capture", "Fast payment links & invoicing"],
  },
  {
    icon: "sync",
    title: "Cloud Accounting Add-Ons",
    badge: "Integrated Ecosystem",
    href: "/software-we-use/cloud-accounting-add-ons",
    desc: "Supercharge your core ledger with specialized apps: Dext Prepare for OCR receipt scanning, Deputy for roster scheduling, Shopify for e-commerce, and Tradify for field job management.",
    features: ["Dext & Hubdoc receipt capture", "Deputy & Employment Hero rostering", "Shopify & Stripe payment sync"],
  },
];

const ADVANTAGES = [
  {
    icon: "shield" as BenefitIconType,
    title: "Zero Data-Loss Migration",
    desc: "We manage complete transitions from legacy desktop files or paper records to modern cloud ledgers without disrupting your daily billing or supplier payments.",
  },
  {
    icon: "coin" as BenefitIconType,
    title: "Wholesale Partner Discounts",
    desc: "As accredited Platinum and Diamond tier partners, Taxnet passes wholesale software subscription discounts directly on to our ongoing bookkeeping clients.",
  },
  {
    icon: "users" as BenefitIconType,
    title: "Tailored Staff Coaching",
    desc: "We don't just set up the software and walk away. Our Melbourne team provides practical 1-on-1 training so your office team can quote, bill, and manage inventory with confidence.",
  },
  {
    icon: "mobile" as BenefitIconType,
    title: "Real-Time Mobile Freedom",
    desc: "Approve invoices, check cash balances, and monitor debtor collections from your smartphone anywhere in the world with bank-grade 256-bit encryption.",
  },
];

const FAQS = [
  {
    q: "Which cloud accounting software is best for my business: Xero, MYOB, or QuickBooks?",
    a: "The ideal platform depends on your industry and operational complexity. Xero is exceptionally user-friendly and boasts Australia's largest ecosystem of add-on apps, making it ideal for service businesses, agencies, and retail. MYOB excels at complex inventory, manufacturing, and intricate award payroll structures. QuickBooks is agile and cost-effective for freelancers, solopreneurs, and international multi-currency trading. During our initial discovery audit, we recommend the exact platform that fits your business model.",
  },
  {
    q: "How does Taxnet manage migrations from older desktop software?",
    a: "We extract your full historical chart of accounts, open invoices, supplier balances, trial balances, and employee records from your previous system (e.g., desktop MYOB, Reckon, or Excel). We then convert and balance the data against historical tax returns before switching your live bank feeds on, guaranteeing zero lost records.",
  },
  {
    q: "Do I have to pay retail prices for software subscriptions?",
    a: "No. Because Taxnet is an accredited Platinum Champion Partner with Xero and an official partner with MYOB and Intuit, we offer discounted wholesale software bundles that reduce your ongoing software licensing overhead.",
  },
  {
    q: "Will our data remain secure in the cloud?",
    a: "Yes. All platforms we deploy (Xero, MYOB, QuickBooks) utilize bank-grade 256-bit SSL encryption, automated off-site backups, and mandatory two-factor authentication (2FA). Your data is far more secure in the cloud than stored on a vulnerable office PC prone to hard drive failure or ransomware.",
  },
  {
    q: "Can you connect our Point-of-Sale (POS) or e-commerce store directly to our accounting software?",
    a: "Yes. We regularly connect systems like Shopify, WooCommerce, Square, Stripe, Kounta/Lightspeed, and Tradify directly into Xero or MYOB. Daily sales, card fees, and inventory updates flow automatically into your ledger, saving dozens of hours of manual data entry every month.",
  },
];

export default function SoftwareWeUseHubPage() {
  const heroImg = "/taxnet-categories-images/Software%20We%20Use/Cloud%20Accounting%20Add-Ons/hero.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "82vh",
            backgroundColor: "#06120B",
            display: "flex",
            alignItems: "center",
            paddingTop: "140px",
            paddingBottom: "5rem",
            overflow: "hidden",
          }}
        >
          {/* Parallax Background Hero Image */}
          <CategoryHeroParallax heroImg={heroImg} />

          {/* Dark Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(6,18,11,0.95) 0%, rgba(13,62,38,0.82) 55%, rgba(6,18,11,0.96) 100%)",
            }}
          />

          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
              width: "100%",
            }}
          >
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "1.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Software We Use</span>
            </nav>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "880px",
                marginBottom: "1.5rem",
              }}
            >
              Software We Use.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Intelligent Cloud Engines.
              </span>{" "}
              Seamless Automation.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
                maxWidth: "680px",
                marginBottom: "2.25rem",
              }}
            >
              We deploy Australia&apos;s leading cloud accounting platforms and tailored operational add-ons.
              Eliminate manual paperwork, automate daily bank reconciliations, and access live financial metrics anywhere.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#platforms"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#A18650",
                  color: "#0D3E26",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(161, 134, 80, 0.4)",
                  transition: "all 180ms ease",
                }}
              >
                Explore Supported Platforms ↓
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss cloud accounting software setup and migration for my business."
                label="Chat with a Systems Architect"
                sublabel="Direct WhatsApp Line"
              />

              <a
                href="tel:0398025800"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  marginLeft: "0.5rem",
                }}
              >
                Or call (03) 9802 5800
              </a>
            </div>


          </div>
        </section>

        {/* ─── 4 CORE PLATFORMS (ONLY THESE KIND OF CARDS) ─── */}
        <section id="platforms" style={{ padding: "5.5rem 0", backgroundColor: "#F9F9F6" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Supported Ecosystems
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Engineered for Your Business Operations
              </h2>
              <p style={{ color: "#55645B", maxWidth: "660px", margin: "0.75rem auto 0", fontSize: "0.95rem" }}>
                Select a platform below to discover how our certified Melbourne advisors set up, migrate, and optimize
                your ledger for maximum automation and compliance.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {SOFTWARE_LIST.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    textDecoration: "none",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                  className="card"
                >
                  <BookkeepingBenefitIcon type={s.icon} />
                  <div style={{ fontSize: "0.75rem", color: "#A18650", fontWeight: 700, textTransform: "uppercase", marginTop: "0.4rem", marginBottom: "0.2rem" }}>
                    {s.badge}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "0.88rem",
                      color: "#55645B",
                      lineHeight: 1.6,
                      margin: "0 0 1.5rem 0",
                      flexGrow: 1,
                    }}
                  >
                    {s.desc}
                  </p>

                  <div style={{ borderTop: "1px solid #E6ECE8", paddingTop: "1rem", marginBottom: "1.25rem" }}>
                    {s.features.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", color: "#3B4A40", marginBottom: "6px" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#A18650", display: "inline-block" }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <span
                    style={{
                      color: "#0A0D0B",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    Explore {s.title.split(" ")[0]} Services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CLOUD MIGRATION WITH TAXNET ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF", borderTop: "1px solid #E7ECE8" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                The Taxnet Advantage
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Why Businesses Trust Taxnet for Cloud Deployments
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {ADVANTAGES.map((a) => (
                <div
                  key={a.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <BookkeepingBenefitIcon type={a.icon} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "0.88rem",
                      color: "#55645B",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLANS SECTION EMBEDDED ─── */}
        <PlansSection />

        {/* ─── FAQS ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Software Queries
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  color: "#0F261B",
                  marginTop: "0.4rem",
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ borderTop: "1px solid #E5EAE7" }}>
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom: "1px solid #E5EAE7",
                    padding: "1.25rem 0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <summary
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      outline: "none",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "#A18650", fontSize: "1.25rem" }}>+</span>
                  </summary>
                  <p style={{ color: "#4A5A50", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "0.75rem", paddingLeft: "0.25rem" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION WITH EMAIL & WHATSAPP ─── */}
        <BookkeepingContact
          serviceName="Cloud Software Setup & Migration"
          title="Upgrade Your Accounting Software"
          subtitle="Speak with our Melbourne cloud accounting specialists to select the right platform, migrate historical data safely, and train your staff."
          submitButtonText="Book A Consultation"
        />
      </main>

      <Footer />
    </>
  );
}
