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
  title: "Tax Planning Melbourne | Pre-June 30 Tax Minimization Strategies | TaxNet",
  description:
    "Proactive tax planning and minimization for Australian businesses, family trusts, and investors. Pre-June 30 forecasting, bucket company structuring, and Division 7A compliance.",
  keywords: [
    "tax planning Melbourne",
    "pre June 30 tax planning",
    "business tax minimization Australia",
    "family trust tax planning",
    "bucket company tax Melbourne",
    "Division 7A loan agreement accountant",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "calculator",
    title: "Pre-June 30 Tax Forecasting",
    desc: "We project your full-year taxable earnings in March and April, so you know your exact prospective tax liability with ample time to execute optimization moves.",
  },
  {
    icon: "building",
    title: "Corporate Beneficiary ('Bucket Company')",
    desc: "Distribute surplus trust profits into an investment company capped at 25% or 30% corporate tax, shielding wealth from top individual 47% rates.",
  },
  {
    icon: "scale",
    title: "Family Trust Distributions & Section 100A",
    desc: "Structured trustee distribution resolutions executed before June 30 in strict compliance with ATO Section 100A guidelines and beneficiary entitlements.",
  },
  {
    icon: "percent",
    title: "Division 7A Loan Structuring",
    desc: "Formalize director loan agreements under compliant 7-year unsecured or 25-year secured terms with automated annual principal and benchmark interest repayments.",
  },
  {
    icon: "coin",
    title: "Superannuation & Catch-Up Concessions",
    desc: "Maximize $30,000 concessional contributions and leverage unused carry-forward caps over a 5-year rolling period to offset large capital gains.",
  },
  {
    icon: "chart",
    title: "Small Business CGT Concessions",
    desc: "Apply the 15-year exemption, 50% active asset reduction, and retirement rollover concessions when selling business assets or restructuring equity.",
  },
];

const FAQS = [
  {
    q: "When is the ideal time to start our annual tax planning?",
    a: "The optimal window is between March and May each financial year. This provides 8 to 12 weeks of runway to review profit trends, model alternative scenarios, draft trust minutes, organize capital purchases, and execute superannuation transfers before the June 30 midnight cutoff.",
  },
  {
    q: "What is a 'Bucket Company' and how does it reduce tax?",
    a: "When a family trust makes substantial trading profits, distributing all earnings to high-income adult beneficiaries pushes their personal income into the top 47% tax bracket. A 'bucket company' (corporate beneficiary) can receive undistributed trust earnings and pay a capped corporate tax rate (25% or 30%). The retained capital can then be invested into shares, property, or business loans.",
  },
  {
    q: "How does the ATO's Section 100A ruling impact family trusts?",
    a: "Section 100A targets trust distribution arrangements where income is nominally allocated to low-tax beneficiaries (such as adult university children) while the economic benefit is retained by someone else. TaxNet ensures all trust distributions reflect genuine commercial reality with documented legal resolutions and actual beneficiary entitlements that withstand ATO audit scrutiny.",
  },
  {
    q: "What are Division 7A loans and what happens if they are not managed?",
    a: "If a private company loans money or provides financial benefits to a director, shareholder, or associate without a formal loan agreement, the ATO automatically reclassifies that amount as an unfranked dividend taxed at your top personal rate. We prepare compliant Division 7A loan agreements, calculate statutory benchmark interest rates, and track minimum yearly repayments.",
  },
  {
    q: "What is the difference between legal tax planning and illegal tax avoidance?",
    a: "Tax planning uses legal provisions, statutory exemptions, depreciation allowances, and approved corporate structures established by Australian Parliament to pay the correct, minimum amount of tax required by law. TaxNet works strictly within legal tax law (Part IVA compliant), ensuring you never risk penalties, disqualification, or prosecution.",
  },
];

export default function TaxPlanningPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Tax%20Planning/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Tax%20Planning/Tax_advisor_analyzing_financial_247bc4d4.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Tax%20Planning/Tax_consultant_explaining_strate_0bbd858f.jpg";

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
              <span style={{ color: "#C5A869" }}>Tax Planning & Structuring</span>
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
              Strategic Tax Planning.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Legal Minimization.
              </span>{" "}
              Wealth Preservation.
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
              Tax planning is not something to contemplate in October after the financial year is long gone. At TaxNet, we
              calculate your projected tax in March and April, deploying legal, high-impact strategies before June 30 to
              protect tens of thousands in business profits.
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
                Book Your Pre-June 30 Tax Review →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss tax planning and minimization."
                label="Chat with a Tax Partner"
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
                    alt="TaxNet senior tax advisor analyzing financial data for tax minimization"
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
                    High-Impact ROI
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Save $10,000 to $100,000+
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
                  Financial Optimization
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
                  Paying More Tax Than Legally Required Is an Unnecessary Expense
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  The Australian Taxation Office provides dozens of legitimate tax structures, allowances, and concessions.
                  However, the ATO will never voluntarily calculate how you could have paid less. That requires an aggressive,
                  sophisticated tax advisory team on your side.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Without proactive tax planning, profitable business owners inadvertently leak hundreds of thousands of
                  dollars in personal 47% income tax, missed accelerated depreciation, and punitive Division 7A interest
                  charges. TaxNet stops this cash drain permanently.
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
                      Asset Protection
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Isolate retained business earnings from commercial operating litigation.
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
                      Reinvestment Power
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Keep extra capital inside the company to hire, acquire, or invest.
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
                Tax Minimization Arsenal
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Bespoke Strategies Designed to Preserve Your Wealth
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

        {/* ─── SECTION 2: STRATEGY IN ACTION ─── */}
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
                  Strategic Execution
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
                  A Clear Roadmap with Exact Dollar Calculations
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  We don&apos;t just give generic advice. Following our pre-June 30 modeling sessions, you receive a written
                  Tax Planning Action Report outlining three alternative scenarios with exact net tax payable comparisons.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Every recommended step—from discretionary trust minutes to instant write-off purchases and superannuation
                  clearing house payments—comes with explicit deadlines and step-by-step instructions so implementation is
                  flawless.
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
                  Request a Tax Planning Review →
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
                  alt="TaxNet consultant explaining strategic tax optimization roadmap to business director"
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
                Tax Advisory Insights
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
          serviceName="Tax Planning & Minimization"
          title="Slash Your Upcoming Tax Bill Legally"
          subtitle="Do not wait until June 30 when it is too late to act. Speak with our Melbourne CPA tax advisory team today."
        />
      </main>

      <Footer />
    </>
  );
}

