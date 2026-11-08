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
  title: "Bookkeeping Services Melbourne | Small Business CPA Bookkeepers | TaxNet",
  description:
    "End-to-end bookkeeping services for Melbourne businesses. Bank reconciliations, STP Phase 2 payroll, automated invoicing, cash flow forecasting, and cloud accounting setup.",
  keywords: [
    "bookkeeping services Melbourne",
    "bookkeeper Melbourne",
    "small business bookkeeping Australia",
    "CPA bookkeeper Melbourne",
    "Xero certified bookkeeper",
    "payroll bookkeeping Melbourne",
  ],
};

interface BookkeepingServiceItem {
  icon: BenefitIconType;
  title: string;
  href: string;
  desc: string;
}

const BOOKKEEPING_SERVICES: BookkeepingServiceItem[] = [
  {
    icon: "briefcase",
    title: "Small Business Bookkeeping",
    href: "/small-business-bookkeeping",
    desc: "Complete day-to-day transaction coding, expense categorization, and weekly ledger reconciliations on flat monthly plans.",
  },
  {
    icon: "trend",
    title: "Budgeting & Cash Flow Forecasting",
    href: "/small-business-bookkeeping/budgeting-cash-flow",
    desc: "13-week rolling cash forecasts and variance tracking so you know your exact cash runway months in advance.",
  },
  {
    icon: "card",
    title: "Invoicing & Debtor Management",
    href: "/small-business-bookkeeping/invoicing",
    desc: "Prompt billing workflows, click-to-pay online gateways, and polite automated reminders to get paid 2x faster.",
  },
  {
    icon: "coin",
    title: "Accounts Payable & Receivable",
    href: "/small-business-bookkeeping/accounts-management",
    desc: "Receipt capture via Dext/Hubdoc, approval workflows, and 1-click ABA batch bank transfers to eliminate double payments.",
  },
  {
    icon: "clock",
    title: "Payroll & STP Phase 2 Compliance",
    href: "/small-business-bookkeeping/payroll",
    desc: "Weekly, fortnightly, or monthly pay runs, Super Guarantee 11.5% clearing house filing, and Modern Award interpretations.",
  },
  {
    icon: "calculator",
    title: "Bank Reconciliation & BAS Records",
    href: "/small-business-bookkeeping/bank-reconciliation",
    desc: "Zero-discrepancy bank balance matching, GST audit checks, and quarterly BAS-ready ledger preparation.",
  },
  {
    icon: "cloud",
    title: "Cloud Accounting Setup & Migration",
    href: "/small-business-bookkeeping/cloud-accounting",
    desc: "Full transitions from spreadsheets or desktop software to Xero or MYOB with zero data loss and team training.",
  },
];

const FAQS = [
  {
    q: "How does TaxNet differ from standard freelance bookkeepers?",
    a: "Unlike sole-operator bookkeepers who may fall ill or lack high-level tax knowledge, TaxNet provides a dedicated Melbourne bookkeeping team directly supervised by certified CPA partners and registered tax agents. Your books are maintained with strategic tax minimization and audit-defense in mind from day one.",
  },
  {
    q: "Are all your staff based in Australia?",
    a: "Yes. Our client advisory, review, and partner team is based in our Melbourne head office at Suite 6, 861 Doncaster Road, Doncaster East. You can call, email, or visit our office for in-person meetings.",
  },
  {
    q: "How do we switch from our previous bookkeeper or accountant?",
    a: "We manage 100% of the handover seamlessly. We send professional ethical clearance notices, transfer cloud access, securely import historical ledgers, and perform a complimentary initial health audit.",
  },
  {
    q: "What size businesses do you typically work with?",
    a: "We work with Australian sole traders, growing SMEs with 5 to 50+ staff, medical and legal practices, trade companies, hospitality groups, and tech startups.",
  },
];

export default function BookkeepingHubPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/hero.jpg";

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
              <span style={{ color: "#C5A869" }}>Bookkeeping Solutions</span>
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
              High-Precision Bookkeeping.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                CPA Strategic Oversight.
              </span>{" "}
              Total Peace of Mind.
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
              From everyday receipt coding and STP Phase 2 payroll to predictive 13-week cash flow modeling and BAS
              reconciliations. Explore our specialized bookkeeping disciplines engineered for Australian businesses.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#services"
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
                Explore Specialized Services ↓
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to chat about bookkeeping services."
                label="Chat with a Bookkeeping Partner"
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

        {/* ─── SERVICE DIRECTORY CARDS ─── */}
        <section id="services" style={{ padding: "5.5rem 0", backgroundColor: "#FFFFFF" }}>
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
                Specialized Disciplines
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Explore Our Tailored Bookkeeping Capabilities
              </h2>
              <p style={{ color: "#55645B", maxWidth: "640px", margin: "0.75rem auto 0", fontSize: "0.95rem" }}>
                Select a specialized area below to learn how we streamline workflows, automate reporting, and protect
                compliance for your sector.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {BOOKKEEPING_SERVICES.map((s) => (
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
                  <div
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      color: "#0D3E26",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "auto",
                    }}
                  >
                    Explore Service →
                  </div>
                </Link>
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
                Frequently Asked Questions
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  color: "#0F261B",
                  marginTop: "0.4rem",
                }}
              >
                Everything You Need to Know About Partnering With Us
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
          serviceName="Complete Bookkeeping Services"
          title="Transform Your Financial Back-Office Today"
          subtitle="Speak directly with our Melbourne CPA bookkeepers. Free discovery consultation, no lock-in contracts, and transparent flat monthly pricing."
        />
      </main>

      <Footer />
    </>
  );
}

