import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";

export const metadata: Metadata = {
  title: "Small Business Bookkeeping Melbourne | Certified CPA Bookkeepers | Taxnet",
  description:
    "Tailored bookkeeping services for Australian small businesses. Accurate weekly transaction coding, payroll, BAS-ready financials, and fixed monthly fees. Free initial assessment.",
  keywords: [
    "small business bookkeeping Melbourne",
    "bookkeeper Melbourne",
    "CPA bookkeeper Australia",
    "Xero bookkeeping services",
    "BAS preparation Melbourne",
    "fixed fee bookkeeping",
  ],
};

const BENEFITS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "clock",
    title: "Always Up-to-Date",
    desc: "Weekly bank feeds reconciled and receipts coded so your financial reports are accurate whenever you need them.",
  },
  {
    icon: "shield",
    title: "100% ATO Compliant",
    desc: "Superannuation, PAYG withholding, and BAS prepared by registered tax and BAS agents with zero penalty risk.",
  },
  {
    icon: "coin",
    title: "Fixed Monthly Retainers",
    desc: "No hourly billing surprises. Predictable flat fees that include unlimited day-to-day email and phone advisory.",
  },
  {
    icon: "cloud",
    title: "Xero & Cloud Masters",
    desc: "Seamless automated receipt capture, bank feeds, and invoice workflows with certified Xero Platinum partners.",
  },
  {
    icon: "chart",
    title: "Virtual CFO Insights",
    desc: "Clear monthly P&L and cash flow summaries that show where your business is making money and where cash is leaking.",
  },
  {
    icon: "handshake",
    title: "Seamless Year-End Handover",
    desc: "Clean, audit-proof files transferred directly to our tax team—saving you thousands in year-end accounting clean-up fees.",
  },
];

const FAQS = [
  {
    q: "Why should I outsource bookkeeping instead of doing it myself?",
    a: "Most business owners spend 6–10 hours each week wrestling with receipts, reconciliations, and payroll—time better spent serving clients and growing revenue. Professional bookkeeping ensures every deduction is claimed, super deadlines are met, and your financial data is accurate, while saving you thousands in accountant clean-up fees at tax time.",
  },
  {
    q: "What accounting software do you support?",
    a: "We are Platinum Champion Partners with Xero, and also fully support MYOB and QuickBooks Online. If your books are currently in spreadsheets or an older system, our team manages the entire migration to the cloud with zero data loss.",
  },
  {
    q: "How does the onboarding process work?",
    a: "It takes less than 48 hours. We conduct a preliminary health-check on your ledger, connect your software feeds, establish your weekly processing rhythm, and begin standardizing your chart of accounts immediately.",
  },
  {
    q: "Are your bookkeeping plans really fixed price?",
    a: "Yes. All our bookkeeping packages are billed on transparent, flat monthly retainers based on your transaction volume and employee count. There are zero hourly surprise invoices.",
  },
  {
    q: "Can you help catch up on overdue or messy books?",
    a: "Absolutely. We specialize in historical bookkeeping rescues. If you are months or even years behind on BAS lodgements or superannuation, we'll reconcile your backlog quickly and liaise with the ATO on your behalf.",
  },
];

export default function SmallBusinessBookkeepingPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/Bookkeeper_organizing_financial_1e11db7f.jpg";
  const bodyImg2 = "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/Business_owners_reviewing_financ_d971a4f6.jpg";

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
              <span style={{ color: "#C5A869" }}>Small Business Bookkeeping</span>
            </nav>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "850px",
                marginBottom: "1.5rem",
              }}
            >
              Flawless Bookkeeping.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Zero Headaches.
              </span>{" "}
              Maximum Financial Control.
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
              Reclaim your weekends. Our Melbourne-based certified CPA bookkeepers handle daily transaction coding,
              bulletproof bank reconciliations, seamless payroll, and BAS lodgements on transparent flat monthly plans.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#contact"
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
                Book a Free Discovery Call →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss small business bookkeeping."
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

        {/* ─── PAIN POINTS VS TAXNET SOLUTION SECTION ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Image with overlay badge */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                    position: "relative",
                    aspectRatio: "4/3",
                  }}
                >
                  <Image
                    src={bodyImg1}
                    alt="Taxnet Bookkeeper organizing financial records"
                    fill
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Float Card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    backgroundColor: "#0D3E26",
                    color: "#FFFFFF",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    maxWidth: "240px",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "#C5A869", fontWeight: 700, textTransform: "uppercase" }}>
                    CPA Supervised
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Clean Ledgers Guaranteed
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div>
                <span
                  style={{
                    color: "#0D3E26",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Stop Drowning in Receipts
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0F261B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Bookkeeping Built for Australian Business Owners Who Want to Grow
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Running a business is hard enough without having to decipher GST codes, balance bank feeds on Sunday
                  nights, or worry about missing Single Touch Payroll deadlines.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  At Taxnet, we don&apos;t just type numbers into software. Our senior bookkeeping team acts as your virtual
                  back-office: categorizing every deduction, keeping your ledger clean, and ensuring you are always
                  prepared for BAS and end-of-year tax without costly surprises.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "#F9FAF9",
                      border: "1px solid #E6ECE8",
                    }}
                  >
                    <div style={{ fontWeight: 800, color: "#0D3E26", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Weekly Reconciliations
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Bank feeds cleared and receipts matched consistently.
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "#F9FAF9",
                      border: "1px solid #E6ECE8",
                    }}
                  >
                    <div style={{ fontWeight: 800, color: "#0D3E26", fontSize: "0.95rem", marginBottom: "4px" }}>
                      BAS Ready, Every Quarter
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      No last-minute panic or missed lodgement dates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE DELIVERABLES GRID ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F3F5F2", borderTop: "1px solid #E7ECE8" }}>
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
                Comprehensive Deliverables
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Everything You Need for a Seamless Financial Back-Office
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                >
                  <BookkeepingBenefitIcon type={b.icon} />
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
                    {b.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#55645B", lineHeight: 1.6, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECOND SHOWCASE SECTION: REPORTING & ADVISORY ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Text side */}
              <div>
                <span
                  style={{
                    color: "#A18650",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Real-Time Visibility
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0F261B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Make Confident Decisions with Live Financial Dashboards
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Knowing your bank balance is not the same as knowing your true profitability. With Taxnet, your
                  books are structured so you can instantly see customer payment cycles, supplier liabilities, and net
                  margins.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3B4A41", fontSize: "0.92rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A18650", display: "inline-block" }} /> Monthly profit & loss statements with plain-English insights
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3B4A41", fontSize: "0.92rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A18650", display: "inline-block" }} /> Accounts receivable tracking to slash your average debtor days
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "#3B4A41", fontSize: "0.92rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#A18650", display: "inline-block" }} /> Superannuation and PAYG accruals so you never get hit with surprise tax bills
                  </li>
                </ul>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#0D3E26",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                  }}
                >
                  Talk to a Senior Bookkeeper →
                </a>
              </div>

              {/* Second Body Image */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={bodyImg2}
                  alt="Business owners reviewing financial results with Taxnet advisor"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PLANS SECTION EMBEDDED ─── */}
        <PlansSection />

        {/* ─── DEDICATED FAQS ─── */}
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
                Got Questions?
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
          serviceName="Small Business Bookkeeping"
          submitButtonText="Book A Consultation"
          title="Get Your Free Bookkeeping Health-Check"
          subtitle="Stop spending your weekends in spreadsheets. Speak with our Melbourne CPA bookkeepers today and get a fixed flat monthly quote."
        />
      </main>

      <Footer />
    </>
  );
}

