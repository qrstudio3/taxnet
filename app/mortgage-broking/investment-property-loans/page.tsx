import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import AutoSlidingCards from "@/app/components/AutoSlidingCards";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";

export const metadata: Metadata = {
  title: "Investment Property Loans Melbourne | Portfolio Mortgage Broker | Taxnet",
  description:
    "Strategic investment property mortgage broking in Melbourne. Stand-alone security structures, uncross-collateralized loans, interest-only strategies, and CPA tax integration.",
  keywords: [
    "investment property loans Melbourne",
    "property investment mortgage broker",
    "uncross collateralized loans Australia",
    "interest only investment mortgage",
    "borrowing capacity property portfolio",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "shield",
    title: "Stand-Alone Security Structuring",
    desc: "We strictly refuse cross-collateralization. Each property is mortgaged individually, protecting your family home from risk and giving you total freedom to sell or refinance.",
  },
  {
    icon: "calculator",
    title: "Rental Income Shading Optimization",
    desc: "Lenders assess proposed rental yields differently (from 60% up to 90%). We target lenders that recognize maximum rental income to expand your portfolio borrowing capacity.",
  },
  {
    icon: "percent",
    title: "Interest-Only Cash Flow Protection",
    desc: "Preserve operational liquidity by structuring 1 to 5-year interest-only periods, maximizing tax-deductible interest while directing cash towards non-deductible debt.",
  },
  {
    icon: "coin",
    title: "Tax-Deductible Equity Release",
    desc: "Tap usable equity in your owner-occupied home via a separate investment split, preserving 100% tax deductibility of interest incurred on purchase deposits and stamp duty.",
  },
  {
    icon: "home",
    title: "Multi-Entity & Trust Lending",
    desc: "Navigate complex lending policies for discretionary family trusts, corporate trustees, unit trusts, and SMSF property acquisitions with accredited commercial underwriters.",
  },
  {
    icon: "lock",
    title: "My Protection Plan Asset Shield",
    desc: "Safeguard property debt with mortgage protection insurance designed to cover debt repayments during tenant vacancy gaps, medical emergencies, or unforeseen downtime.",
  },
];

const FAQS = [
  {
    q: "Why is cross-collateralizing investment properties dangerous?",
    a: "Cross-collateralization occurs when a bank uses one mortgage to secure multiple properties (e.g., your family home and an investment unit). If you decide to sell the investment property later, the bank can seize the entire sale proceeds to pay down the home loan instead of giving you your capital gains. Taxnet strictly structures each property as a stand-alone security with separate lenders if necessary.",
  },
  {
    q: "Should I choose Interest-Only (IO) or Principal and Interest (P&I) for an investment loan?",
    a: "For most property investors, Interest-Only repayments maximize cash flow and allow surplus income to be funneled into non-deductible personal debt (like an owner-occupied mortgage) via an offset account. Since interest on investment loans is 100% tax-deductible against rental income, paying down principal on investment debt before home debt is tax-inefficient.",
  },
  {
    q: "How does Taxnet integrate mortgage broking with CPA tax advice?",
    a: "Unlike standalone brokers who only sell loan products, Taxnet houses both licensed finance brokers and senior CPA accountants under one roof. We coordinate your loan structure directly with your tax returns, ensuring your loan purpose, negative gearing benefits, depreciation schedules, and CGT reduction plans are flawlessly aligned.",
  },
  {
    q: "Can I borrow 100% of the purchase price and stamp duty for an investment property?",
    a: "Yes. By establishing a separate equity loan or line of credit against your current home for the 20% deposit plus purchasing costs, and securing an 80% loan against the new investment property, you effectively borrow 100% of the acquisition cost without paying costly Lenders Mortgage Insurance (LMI).",
  },
  {
    q: "What deposit is required for an investment property purchase in Melbourne?",
    a: "While a 20% deposit (or 20% equity release) avoids Lenders Mortgage Insurance, many lenders allow investment purchases with as little as a 10% cash deposit. Our brokers calculate the exact sweet spot between LMI costs and return on equity.",
  },
];

export default function InvestmentPropertyLoansPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Investment%20Property%20Loans/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Investment%20Property%20Loans/Mortgage_broker_consulting_prope_c4e3922b.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Investment%20Property%20Loans/Investor_standing_on_balcony_59c68699.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "74vh",
            backgroundColor: "#0A0D0B",
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
                "linear-gradient(135deg, rgba(10,13,11,0.96) 0%, rgba(20,24,22,0.85) 55%, rgba(10,13,11,0.98) 100%)",
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
              <span style={{ color: "#C5A869" }}>Investment Property Loans</span>
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
              Investment Property Loans.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Zero Cross-Collateralization.
              </span>{" "}
              Maximum Wealth Leverage.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              Stand-alone mortgages, deductible debt structuring, and equity release to strategically expand your portfolio.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#C5A869",
                  color: "#0A0D0B",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(197, 168, 105, 0.4)",
                  transition: "all 180ms ease",
                }}
              >
                Structure My Property Investment Loan →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'm looking to invest in property and need strategic mortgage structuring."
                label="Chat with an Investment Loan Specialist"
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
                    alt="Taxnet mortgage broker advising property investor on portfolio loan structures"
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
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    maxWidth: "240px",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "#C5A869", fontWeight: 700, textTransform: "uppercase" }}>
                    Portfolio Architecture
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Scale to 3+ Properties
                  </div>
                </div>
              </div>

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
                  Investor Risk Management
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0A0D0B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  The Hidden Trap: How Bad Loan Structuring Paralyzes Investors
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Most investors hit a borrowing wall after their second property. Why? Because they let a retail bank
                  cross-collateralize their portfolio, tie up all their equity in restrictive covenants, and apply harsh
                  servicing buffers that strangle future borrowing capacity.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet takes a holistic multi-lender view. By distributing your properties across independent lenders
                  with generous rental assessment calculators, we keep each title completely autonomous and maintain
                  your capacity to keep acquiring high-performing assets.
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
                    <div style={{ fontWeight: 800, color: "#0A0D0B", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Asset Protection
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Isolate residential home equity from commercial or investment liabilities.
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
                    <div style={{ fontWeight: 800, color: "#0A0D0B", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Maximized Deductions
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Maintain a clean paper trail for ATO-compliant tax write-offs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS (ONLY THESE KIND OF CARDS) ─── */}
        <section style={{ padding: "5.5rem 0", backgroundColor: "#F9F9F6", borderTop: "1px solid #E7ECE8" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Investor Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Disciplined Lending Architecture for High-Yield Property Portfolios
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: CPA + BROKER COMBINED ADVANTAGE ─── */}
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
                  The Taxnet Edge
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0A0D0B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  When Your Mortgage Broker and CPA Accountant Work Hand in Hand
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Most mortgage brokers don&apos;t understand tax structures, and most accountants don&apos;t know how
                  banks assess living expenses. This disconnect frequently results in missed tax deductions or loan
                  rejections.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  At Taxnet, our CPA accounting team and credit broking team sit side-by-side. When we structure your
                  investment loan, we verify that your loan purpose, negative gearing schedules, trust distributions,
                  and corporate beneficiary caps are optimized for both bank credit approval and ATO compliance.
                </p>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                  }}
                >
                  Book an Investor Strategy Session →
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
                  alt="Confident property investor standing on modern apartment balcony overlooking Melbourne skyline"
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
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Investment Clarity
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  color: "#0A0D0B",
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
                      color: "#0A0D0B",
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
          serviceName="Investment Property Mortgage"
          submitButtonText="Book A Consultation"
          title="Scale Your Property Portfolio"
          subtitle="Consult our Melbourne investment finance specialists to structure stand-alone loans, release usable equity, and maximize borrowing power."
        />
      </main>

      <Footer />
    </>
  );
}
