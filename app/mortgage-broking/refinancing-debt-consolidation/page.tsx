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
  title: "Mortgage Refinancing & Debt Consolidation Melbourne | Taxnet",
  description:
    "Refinance your mortgage in Melbourne and eliminate the loyalty tax. Compare 40+ lenders, access bank cashbacks up to $4k, and consolidate high-interest debts into one low rate.",
  keywords: [
    "mortgage refinancing Melbourne",
    "home loan refinance broker",
    "debt consolidation home loan",
    "eliminate loyalty tax mortgage",
    "refinance cashback Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "percent",
    title: "Loyalty Tax Elimination",
    desc: "Australian banks charge existing loyal borrowers up to 0.75% more than new customers. We audit your rate and reprice or switch to claw back your hard-earned money.",
  },
  {
    icon: "coin",
    title: "High-Interest Debt Consolidation",
    desc: "Roll costly 14–22% credit card balances, personal loans, and car finance into your low-rate home loan, dramatically lowering your monthly commitments.",
  },
  {
    icon: "calculator",
    title: "Cashback Rebate Maximization",
    desc: "We monitor refinance cashbacks of $2,000 to $4,000 across 40+ lenders, ensuring incentive rebates comfortably exceed any discharge or transfer costs.",
  },
  {
    icon: "home",
    title: "Equity Cash-Out for Renovations",
    desc: "Unlock equity built in your home to fund home improvements, school fees, or deposit funding for your next investment property without selling your primary home.",
  },
  {
    icon: "shield",
    title: "Offset & Redraw Optimization",
    desc: "Restructure loans with multiple 100% offset accounts linked to daily transaction buckets, slashing interest calculations daily while keeping cash fully liquid.",
  },
  {
    icon: "lock",
    title: "My Protection Plan Integration",
    desc: "Incorporate loan repayment protection covering monthly commitments in the event of job loss, unexpected illness, or injury, safeguarding your family home.",
  },
];

const FAQS = [
  {
    q: "What is the 'loyalty tax' on Australian home loans and how much is it costing me?",
    a: "The Reserve Bank of Australia (RBA) found that borrowers with loans older than 4 years pay on average 0.40% to 0.80% more than new borrowers at the same bank. On an $800,000 mortgage, an 0.50% interest rate difference costs you an extra $4,000 per year—over $330 every single month in pure waste.",
  },
  {
    q: "How does debt consolidation into my home loan work?",
    a: "Debt consolidation involves refinancing your existing mortgage for a slightly higher amount and using the surplus funds to pay off credit cards, personal loans, or vehicle finance. Because mortgage rates (approx 5.8%-6.3%) are substantially lower than unsecured credit cards (18%-24%), your overall monthly repayments drop dramatically.",
  },
  {
    q: "What costs are involved when refinancing my home loan?",
    a: "Typical costs include your current bank's discharge administration fee ($150-$350), government title mortgage registration and deregistration fees (approx $250-$350 depending on your state), and sometimes a new loan settlement fee ($200-$400). In most cases, these fees are fully covered by bank refinance cashback rebates ($2,000-$4,000) or recovered within 1 to 3 months of rate savings.",
  },
  {
    q: "Will refinancing hurt my credit score?",
    a: "Submitting multiple speculative loan applications on comparison websites can harm your credit file. However, at Taxnet we review your credit file first and only lodge one carefully vetted application to the lender most likely to approve your best rate, protecting your credit reputation.",
  },
  {
    q: "How long does the refinancing process typically take in Melbourne?",
    a: "From initial rate comparison and document upload to formal approval and PEXA title exchange, the typical refinance process takes between 2 to 4 weeks. Taxnet manages all lender follow-ups, discharge requests, and digital settlement milestones for you.",
  },
];

export default function RefinancingDebtConsolidationPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Refinancing%20Debt%20Consolidation/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Refinancing%20Debt%20Consolidation/Advisor_reviewing_mortgage_with_7c45afd4.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Refinancing%20Debt%20Consolidation/Couple_reviewing_financial_docum_f67191d8.jpg";

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
              <span style={{ color: "#C5A869" }}>Refinancing & Debt Consolidation</span>
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
              Mortgage Refinancing.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Eliminate Loyalty Tax.
              </span>{" "}
              Cut Monthly Repayments.
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
              When did your bank last review your rate downwards without you asking? Taxnet benchmarks your loan
              against 40+ lenders, negotiates aggressive discounts, and rolls high-interest debt into one clean rate.
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
                Calculate My Refinance Savings →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like a free mortgage health check to see how much I can save by refinancing."
                label="Chat with a Refinance Partner"
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
                    alt="Taxnet mortgage advisor reviewing refinancing interest rate savings with Melbourne client"
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
                    Loyalty Penalties End
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Reprice or Switch in 14 Days
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
                  Rate Health Check
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
                  Why Australian Banks Punish Long-Term Loyal Customers
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Every major Australian bank counts on one thing: that you will be too busy to check your mortgage rate.
                  Over time, as the RBA adjusted cash rates, your lender quietly widened their profit margin on your
                  account while offering deep promotional discounts to attract new signups.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  At Taxnet, we first contact your existing bank&apos;s retention department to aggressively reprice your
                  existing loan. If they refuse to match top-tier market offers, we seamlessly switch your mortgage to a
                  competitor offering lower rates and thousands in cash-back rebates.
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
                      Instant Repricing Power
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      We demand tier-1 broker discounts from your current bank first.
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
                      Cash Flow Liberation
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Consolidate expensive cards into a single low mortgage repayment.
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
                Refinance Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Complete Restructuring & Debt Optimization Blueprint
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

        {/* ─── SECTION 2: CONSOLIDATION POWER ─── */}
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
                  Debt Consolidation
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
                  Slash Monthly Payments by Thousands Through Intelligent Restructuring
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Managing separate payments for a car loan, multiple store cards, and an owner-occupied mortgage drains
                  cash flow and generates unnecessary stress. By consolidating those high-interest obligations into your
                  sub-6% mortgage rate, your total monthly repayments can drop by $500 to $1,500 immediately.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  To avoid stretching short-term debts over a 30-year term, Taxnet creates a split loan structure. Your
                  consolidated debts remain isolated with an accelerated repayment plan, wiping them out in 3 to 5 years
                  at home-loan interest rates.
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
                  Request a Free Refinance Audit →
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
                  alt="Couple reviewing financial documents and celebrating mortgage repayment savings with Taxnet"
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
                Refinancing Insights
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
          serviceName="Mortgage Refinancing & Debt Consolidation"
          submitButtonText="Book A Consultation"
          title="Eliminate Your Loyalty Tax Today"
          subtitle="Send us your current mortgage statement for a zero-obligation rate comparison and find out how much you can save every single month."
        />
      </main>

      <Footer />
    </>
  );
}
