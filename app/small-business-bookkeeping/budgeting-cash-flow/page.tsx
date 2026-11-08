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
  title: "Budgeting & Cash Flow Forecasting Melbourne | Small Business Advisory | TaxNet",
  description:
    "Predict and protect your business cash flow. 13-week rolling cash forecasts, working capital runway analysis, and variance tracking by Melbourne CPA advisors.",
  keywords: [
    "cash flow forecasting Melbourne",
    "business budgeting Melbourne",
    "small business cash flow management",
    "13 week cash flow forecast",
    "virtual CFO cash flow",
  ],
};

const FORECAST_PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "trend",
    title: "13-Week Rolling Forecasts",
    desc: "Predict exactly when cash will enter and leave your accounts so you can plan tax, payroll, and stock purchases with zero stress.",
  },
  {
    icon: "target",
    title: "Budget vs. Actual Variance",
    desc: "Monthly tracking against your targets to catch unexpected overhead creeping before it erodes your profit margins.",
  },
  {
    icon: "shield",
    title: "Tax & Super Reserve Planning",
    desc: "Automated calculations for upcoming GST, PAYG, and quarterly Super Guarantee obligations so cash is always set aside.",
  },
  {
    icon: "chart",
    title: "Scenario & Growth Modeling",
    desc: "Thinking of hiring staff, opening a second venue, or buying equipment? We model the cash runway impact before you commit.",
  },
  {
    icon: "clock",
    title: "Debtor Days Acceleration",
    desc: "Identify chronic slow-paying clients and streamline collection terms to shorten your cash conversion cycle by 14+ days.",
  },
  {
    icon: "briefcase",
    title: "Bank & Lender Ready Packs",
    desc: "Professional three-way financial forecasts (P&L, Balance Sheet, Cash Flow) ready for bank loan reviews and investors.",
  },
];

const FAQS = [
  {
    q: "Why is cash flow forecasting different from an accounting profit statement?",
    a: "Profit is what's left on paper after expenses, but you cannot pay wages or suppliers with paper profit. A business can be profitable and still go broke if invoices aren't paid on time or large tax payments hit unexpectedly. Cash flow forecasting tracks the exact physical timing of cash entering and leaving your bank accounts.",
  },
  {
    q: "How often are the cash flow budgets updated?",
    a: "Our standard cash flow advisory models operate on a 13-week rolling cycle updated fortnightly or monthly, reflecting your latest reconciled bank feeds and upcoming invoices.",
  },
  {
    q: "Can this help me prepare for commercial or business loans?",
    a: "Yes. Major Australian lenders require detailed three-way cash flow forecasts when assessing commercial mortgages, business lines of credit, or equipment loans. We build lender-ready financial models that maximize borrowing capacity.",
  },
  {
    q: "Do I need complex software installed?",
    a: "No. We integrate directly with your existing cloud accounting platform (Xero, MYOB, or QuickBooks) and sync with dynamic cash flow modeling engines, giving you clean visual dashboards on your phone or laptop.",
  },
];

export default function BudgetingCashFlowPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Budgeting%20and%20Cash%20Flow/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Bookkeeping/Budgeting%20and%20Cash%20Flow/Analyst_working_on_financial_for_14427632.jpg";
  const bodyImg2 = "/taxnet-categories-images/Bookkeeping/Budgeting%20and%20Cash%20Flow/Consultant_and_owners_planning_b_e32e868c.jpg";

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
              <Link href="/small-business-bookkeeping" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Bookkeeping
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Budgeting & Cash Flow</span>
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
              Never Run Short on Cash Again.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Predict Every Dollar
              </span>{" "}
              Months in Advance.
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
              82% of small businesses fail from poor cash flow management, not lack of profit. Our Melbourne CPA
              advisors build dynamic 13-week rolling cash flow forecasts and annual budgets that eliminate financial
              blind spots and safeguard working capital.
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
                Build My Cash Flow Forecast →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss cash flow forecasting and budgeting."
                label="Chat with a Cash Flow Advisor"
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

        {/* ─── SECTION 1: THE REALITY OF CASH FLOW ─── */}
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
                    alt="Financial Analyst working on cash flow forecasts at TaxNet"
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
                    Forward-Looking
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Know Your Runway 90 Days Ahead
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
                  The Hidden Risk
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
                  Profit on an Income Statement Doesn&apos;t Pay Next Week&apos;s Bills
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Most businesses track performance looking backward—reviewing last month&apos;s sales once bank accounts have
                  already dipped. When a major supplier bill arrives or quarterly BAS coincides with superannuation,
                  cash crunches occur.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Our proactive cash flow forecasting shifts your viewpoint forward. By connecting directly to Xero or
                  MYOB, we track expected debtor receipts against fixed payroll, debt service, and operating costs,
                  giving you immediate warning if a deficit is looming weeks before it happens.
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
                      Stress-Free Tax Bills
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Tax reserves calculated automatically every week.
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
                      Confident Growth Moves
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Hire, expand, and invest backed by hard cash runway data.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 FORECASTING PILLARS ─── */}
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
                Executive Financial Intelligence
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Strategic Tools Designed to Keep Your Business Solvent & Expanding
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {FORECAST_PILLARS.map((p) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <BookkeepingBenefitIcon type={p.icon} />
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
                    {p.title}
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
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: SCENARIO PLANNING ─── */}
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
                  Scenario Planning
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
                  Model High-Stakes Decisions Before You Spend a Single Cent
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Wondering whether you can afford to take on two new team members? Unsure if leasing new commercial
                  equipment will strain your cash reserves during winter?
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We build side-by-side best-case, expected-case, and conservative-case scenario projections. You&apos;ll
                  know your exact break-even timeline, peak working capital requirements, and return on investment
                  with mathematical clarity.
                </p>

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
                  Request a Custom Cash Flow Model →
                </a>
              </div>

              {/* Body Image 2 */}
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
                  alt="TaxNet Consultant and business owners planning budget and growth"
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
                Common Inquiries
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
          serviceName="Budgeting & Cash Flow Forecasting"
          title="Take Control of Your Cash Runway Today"
          subtitle="Don't wait for a surprise tax bill or late debtor to derail your business. Book a confidential discovery session with our Melbourne cash flow strategists."
        />
      </main>

      <Footer />
    </>
  );
}

