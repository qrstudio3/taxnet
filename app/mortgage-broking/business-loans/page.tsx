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
  title: "Business Loans & Commercial Finance Melbourne | TaxNet",
  description:
    "Expert commercial and business loans in Melbourne. Working capital facilities, commercial property mortgages, debtor finance, and CPA-prepared credit submission packs.",
  keywords: [
    "business loans Melbourne",
    "commercial finance broker Melbourne",
    "working capital loans Victoria",
    "commercial property loan Melbourne",
    "low doc business finance",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "briefcase",
    title: "CPA-Prepared Credit Submissions",
    desc: "Our in-house CPA accountants normalize your P&L, document discretionary add-backs, and present institutional-grade submission packs that secure fast credit approvals.",
  },
  {
    icon: "calculator",
    title: "Commercial Property Mortgages",
    desc: "Purchase warehouses, retail shops, or office suites for your own trading entity or via a self-managed super fund (SMSF) with up to 80% LVR commercial funding.",
  },
  {
    icon: "coin",
    title: "Working Capital & Overdraft Facilities",
    desc: "Establish flexible revolving lines of credit and bank overdrafts to smooth seasonal cash flow gaps, finance large inventory purchases, and seize trade discounts.",
  },
  {
    icon: "shield",
    title: "Debtor & Invoice Financing",
    desc: "Unlock up to 85% of the cash tied up in unpaid customer invoices within 24 hours without waiting 30, 60, or 90 days for slow-paying commercial clients to settle.",
  },
  {
    icon: "refresh",
    title: "Low-Doc & Alt-Doc Finance",
    desc: "Haven't finalized your latest company tax returns? We access non-bank and Tier-1 commercial lenders that assess borrowing power using BAS returns or business bank statements.",
  },
  {
    icon: "lock",
    title: "Director Key-Person & Debt Protection",
    desc: "Safeguard business continuity with structured debt protection facilities that prevent lender default calls in the event of director illness or key-person disruption.",
  },
];

const FAQS = [
  {
    q: "Why do so many Australian business loan applications get rejected by major banks?",
    a: "Standard retail bank branches use automated computer algorithms that strictly scan bottom-line net profit. If you utilize smart tax strategies (such as accelerated depreciation, director super contributions, or instant asset write-offs), your net taxable income looks artificially low to an algorithm. TaxNet's CPA accountants build professional credit add-back schedules that demonstrate your true normalized cash-flow and servicing strength.",
  },
  {
    q: "What is the difference between secured and unsecured business loans?",
    a: "A secured business loan uses residential, commercial property, or business plant/equipment as collateral, unlocking the lowest interest rates and repayment terms up to 25 or 30 years. An unsecured business loan requires no physical property security and can be approved in 24 to 48 hours for terms of 6 to 36 months, ideal for rapid working capital or inventory surges.",
  },
  {
    q: "Can I get a business loan if my company tax returns are not up to date?",
    a: "Yes. Through our specialized Alt-Doc and Low-Doc commercial lending panel, we can secure competitive business loans and equipment finance using your recent Business Activity Statements (BAS), 6 months of bank account trading statements, or an accountant's declaration letter without waiting for finalized annual returns.",
  },
  {
    q: "Can my business purchase its own commercial premises instead of paying rent?",
    a: "Yes. Purchasing your business trading premises protects you from landlord rent hikes, secures your location long-term, and builds substantial commercial wealth. We structure owner-occupier commercial mortgages with up to 80% loan-to-value ratios (LVR) or help you purchase via an SMSF structure.",
  },
  {
    q: "How fast can TaxNet secure business funding in Melbourne?",
    a: "Unsecured business loans and invoice debtor facilities can often be approved and funded within 24 to 48 hours. Major commercial property mortgages and bank overdraft restructures typically settle within 2 to 4 weeks depending on independent valuation timelines.",
  },
];

export default function BusinessLoansPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Business%20Loans/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Business%20Loans/Finance_advisor_meeting_business_fad494fe.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Business%20Loans/Business_owner_discussing_financ_cafb36c9.jpg";

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
              <Link href="/mortgage-broking" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Mortgage Broking
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Business Loans & Commercial Finance</span>
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
              Business Loans.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                CPA Packaged.
              </span>{" "}
              Institutional Commercial Credit.
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
              Fuel your growth, acquire commercial premises, or secure flexible working capital. TaxNet bridges the gap
              between business accounting and institutional banking to get complex commercial deals approved.
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
                Assess My Business Borrowing Power →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I need commercial finance / business loan advisory for my company."
                label="Chat with a Commercial Lending Partner"
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
                    alt="TaxNet finance advisor meeting business owner to structure a commercial growth facility"
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
                    CPA Finance Engine
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Lender-Ready Submissions
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
                  Why Standard Brokers Struggle With Company Financials
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Most residential mortgage brokers have no commercial accounting background. When they see trust
                  distributions, bucket companies, Division 7A loans, or non-cash paper depreciation on your tax return,
                  they fail to explain them to credit underwriters, resulting in immediate loan declines.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet is an integrated CPA practice and credit brokerage. We compile sophisticated credit submission
                  packs that demonstrate your normalized EBITDA, show true debt serviceability, and negotiate directly
                  with commercial bank executives who have high lending authority.
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
                      Institutional Rapport
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Direct access to senior commercial credit underwriters.
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
                      No Cash Flow Choke
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Working capital lines sized accurately to your revenue growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS (ONLY THESE KIND OF CARDS) ─── */}
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
                Commercial Solutions
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Comprehensive Debt Facilities Structured for Growing Australian Enterprises
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

        {/* ─── SECTION 2: STRATEGIC GROWTH ─── */}
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
                  Capital Efficiency
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
                  Preserve Working Capital While Expanding Operations
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Using your cash reserves to purchase commercial real estate or expensive equipment strips your business
                  of vital liquidity. When supply chain crunches or delayed debtor payments occur, cash-starved businesses
                  face immediate solvency crises.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet structures tax-effective commercial borrowing facilities that allow you to invest in long-term
                  assets while keeping your operating cash reserves intact. We ensure loan interest, bank fees, and lease
                  charges are fully integrated into your corporate tax returns for maximum deductions.
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
                  Request a Business Loan Assessment →
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
                  alt="Business owner discussing company financial growth and loan restructuring with TaxNet"
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
                Commercial FAQ
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
          serviceName="Business & Commercial Loan"
          title="Secure Your Commercial Growth Facility"
          subtitle="Our Melbourne CPA accountants and commercial finance specialists prepare your loan submission pack to secure optimal rates from tier-1 lenders."
        />
      </main>

      <Footer />
    </>
  );
}
