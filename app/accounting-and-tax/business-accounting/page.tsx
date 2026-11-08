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
  title: "Business Accounting Services Melbourne | CPA Certified Accountants | TaxNet",
  description:
    "Proactive small and medium business accounting services in Melbourne. Statutory financial statements, quarterly advisory meetings, cash flow management, and entity tax compliance.",
  keywords: [
    "business accounting Melbourne",
    "CPA business accountants Melbourne",
    "company tax return Melbourne",
    "management accounting Australia",
    "Melbourne CBD business tax accountant",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "chart",
    title: "Quarterly Management Reports & KPIs",
    desc: "Detailed quarterly Profit & Loss, balance sheet health checks, and gross margin analysis so you steer your business on real numbers, not guesswork.",
  },
  {
    icon: "scale",
    title: "Entity Structuring & Asset Shielding",
    desc: "Strategic structure reviews across Proprietary Limited companies, family discretionary trusts, and dual-tier corporate holdings to isolate operational risk.",
  },
  {
    icon: "calculator",
    title: "Statutory Financials & Tax Lodgement",
    desc: "Flawless annual financial statements, depreciation schedules, and corporate tax returns lodged under full CPA Australia public practice standards.",
  },
  {
    icon: "trend",
    title: "3-Way Cash Flow Forecasting",
    desc: "Integrated rolling projections tracking cash, balance sheet liquidity, and revenue pipeline to eliminate unexpected capital crunches.",
  },
  {
    icon: "shield",
    title: "ATO Audit Protection & Compliance",
    desc: "Proactive governance ensuring benchmark profit margins, Director Identification compliance, and complete defense against ATO data-matching flags.",
  },
  {
    icon: "handshake",
    title: "Quarterly Director Strategy Meetings",
    desc: "Scheduled boardroom sessions with your senior CPA advisor in our Melbourne CBD office or via executive video conference to optimize forward margins.",
  },
];

const FAQS = [
  {
    q: "How does TaxNet's business accounting differ from an annual tax preparer?",
    a: "Traditional accountants only look backward once a year when tax is already due—when it is too late to make any strategic changes. TaxNet provides proactive, continuous accounting advisory. We meet with directors every quarter to review financial performance, optimize expenses, project tax liabilities, and implement legal minimization strategies well before June 30.",
  },
  {
    q: "Why do I need a CPA accountant if I already have a bookkeeper?",
    a: "Bookkeepers handle transactional record-keeping—invoicing, payroll, bank reconciliations, and routine data entry. A CPA business accountant handles high-level statutory compliance, tax optimization, entity structuring, Division 7A compliance, asset protection, and executive growth strategy. Both work synergistically, and TaxNet provides both services under one unified roof.",
  },
  {
    q: "When is the right time to restructure from a sole trader to a company or trust?",
    a: "Once your net taxable income consistently exceeds $90,000 to $120,000, sole trader tax rates climb steeply up to 47% (including Medicare). Transitioning to a corporate structure caps the base rate company tax at 25%, while a discretionary family trust allows lawful income streaming to adult beneficiaries. We evaluate your risk profile and calculate exact tax savings before executing any transition.",
  },
  {
    q: "Can you help our business secure commercial banking finance and lines of credit?",
    a: "Yes. Major Australian lenders require pristine, CPA-signed financial statements, accountant declaration letters, and forward cash flow forecasts. We prepare lender-ready financial packs that satisfy commercial credit underwriters rapidly.",
  },
  {
    q: "Are your accounting fees fixed or billed hourly?",
    a: "We operate on transparent, all-inclusive monthly fixed-fee agreements. You receive unlimited email and phone advisory support for day-to-day queries without ever receiving an unexpected invoice.",
  },
];

export default function BusinessAccountingPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/Accountant_consulting_business_o_3a69478d.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/Accountants_reviewing_financial_c452ecb3.jpg";

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
              <Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Accounting & Tax
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Full Scope Business Accounting</span>
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
              Full Scope Business Accounting.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Strategic Financial Mastery.
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
              Move beyond once-a-year backward compliance. Partner with Melbourne CPA business accountants who actively
              manage your statutory reporting, unlock cash flow, protect assets, and uncover hidden profit leaks across every
              quarter.
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
                Book a Confidential Consultation →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss business accounting services."
                label="Chat with a Partner"
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

        {/* ─── PAIN POINT SECTION ─── */}
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
              {/* Image 1 */}
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
                    alt="TaxNet senior CPA accountant consulting with business owner in Melbourne"
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
                    CPA Public Practice
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Proactive Advisory Guaranteed
                  </div>
                </div>
              </div>

              {/* Text */}
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
                  Commercial Advantage
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
                  Why Growing Businesses Outgrow Traditional Accountants
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Most Australian business owners only hear from their accountant once a year—usually when a huge tax bill
                  is already finalized and due. By that point, the financial year is long closed, and every opportunity for
                  strategic deductions, super contributions, or corporate restructuring has vanished.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  At TaxNet, we treat your business like an enterprise. We maintain continuous oversight of your ledger,
                  conduct quarterly health checks, and implement forward tax strategies that protect your cash reserves and
                  accelerate commercial growth.
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
                      Zero Tax Shocks
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Accurate pre-quarter tax provisioning leaves no year-end surprises.
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
                      Director Protection
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Watertight compliance shields personal assets from commercial liabilities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS ─── */}
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
                Comprehensive Accounting Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                End-to-End Financial Governance for Australian Enterprises
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {PILLARS.map((p) => (
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

        {/* ─── SECTION 2: ADVISORY IN PRACTICE ─── */}
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
              {/* Text */}
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
                  Boardroom Precision
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
                  Lender-Ready Financial Statements That Unlock Capital
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Whether you are negotiating a commercial property loan, expanding equipment leases, or pitching private
                  equity investors, the quality of your accounting reports dictates your borrowing power and interest rate.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet structures verified balance sheets, clean aging debtors ledgers, and defensible EBITDA calculations
                  that credit underwriters respect, enabling seamless loan approvals and substantial funding access.
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
                  Schedule a Financial Review →
                </a>
              </div>

              {/* Image 2 */}
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
                  alt="TaxNet corporate accounting team reviewing commercial financial models"
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
                Expert Guidance
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
          serviceName="Full Scope Business Accounting"
          title="Elevate Your Business Accounting"
          subtitle="Stop flying blind with once-a-year tax returns. Connect with our senior Melbourne CPA accounting partners at our Doncaster East office."
        />
      </main>

      <Footer />
    </>
  );
}

