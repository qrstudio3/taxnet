import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BorrowingPowerCalculator from "@/app/components/BorrowingPowerCalculator";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import BookkeepingBenefitIcon from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Borrowing Power Calculator Australia | Accurate Home Loan Capacity | TaxNet",
  description:
    "Calculate your exact home loan borrowing capacity across 40+ Australian lenders. Includes APRA 3.00% serviceability stress buffers, HEM living expense benchmarks, and visual cashflow charts. Free assessment.",
  keywords: [
    "borrowing power calculator Australia",
    "home loan borrowing capacity Melbourne",
    "mortgage calculator with APRA buffer",
    "how much can I borrow home loan",
    "mortgage broker borrowing assessment",
    "HEM benchmark calculator",
  ],
};

const EXPLANATORY_CARDS = [
  {
    icon: "shield" as const,
    title: "The APRA 3.00% Serviceability Buffer",
    desc: "By law, Australian lenders cannot assess your application at the actual product rate (e.g. 6.14%). They add a mandatory 3.00% buffer (assessing serviceability at 9.14%) to stress-test your capacity if the RBA hikes interest rates.",
  },
  {
    icon: "card" as const,
    title: "The Credit Card Limit Multiplier",
    desc: "Lenders do not care if your credit card balance is $0. They assess 3.0% to 3.8% of your total approved limit every month as an ongoing liability. A $10,000 card limit directly wipes out ~$45,000 in borrowing power.",
  },
  {
    icon: "home" as const,
    title: "The Statutory HEM Benchmark",
    desc: "Banks test your declared living costs against the government Household Expenditure Measure (HEM). If you declare expenses below HEM for your postcode and family size, the bank automatically defaults to the higher HEM floor.",
  },
  {
    icon: "calculator" as const,
    title: "Self-Employed & Tax Add-Backs",
    desc: "Traditional branch bankers often decline business owners by looking solely at bottom-line taxable profit. TaxNet's CPA team prepares verified lender submissions adding back paper depreciation, interest, and director super.",
  },
];

const CALC_FAQS = [
  {
    q: "How accurate is this borrowing power calculator?",
    a: "This calculator implements the official APRA (Australian Prudential Regulation Authority) 3.00% serviceability stress-test buffer, 2024–2025 Stage 3 Australian resident income tax brackets, Medicare levies, HECS-HELP repayments, and the statutory Household Expenditure Measure (HEM) benchmark floor. It provides one of the most mathematically accurate preliminary estimates available online.",
  },
  {
    q: "Why do different Australian banks offer such different borrowing capacities?",
    a: "While all lenders follow APRA guidelines, credit policies diverge dramatically between institutions. For instance, some banks shade rental income to 70% while others accept 80% to 90%. Some banks average two years of business tax returns, while specialist lenders use the most recent year if your business is expanding. TaxNet compares 40+ lenders to find the policy that maximizes your borrowing capacity.",
  },
  {
    q: "How can I immediately increase my borrowing power before applying?",
    a: "The fastest ways to boost borrowing capacity are: (1) Lower or cancel unused credit card limits; (2) Pay off small personal loans or car finance; (3) Clean up discretionary expenses 3 months prior to application; and (4) If self-employed, coordinate with our CPA partners to ensure your latest tax return reflects optimal net profit.",
  },
  {
    q: "Does HECS/HELP debt reduce how much I can borrow?",
    a: "Yes. Compulsory HECS/HELP repayments are deducted directly from your gross income according to ATO salary brackets. For someone earning $120,000, HECS repayments reduce take-home pay by ~$750/month, which can reduce total borrowing power by $60,000 to $80,000.",
  },
  {
    q: "How much does a formal TaxNet borrowing capacity review cost?",
    a: "Our residential mortgage broking services and borrowing assessments are 100% free ($0 broker fee). The lender pays our practice an industry-standard commission after your mortgage settles, meaning you receive expert credit guidance, lender comparison, and application handling at zero out-of-pocket cost.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO HEADER ─── */}
        <section
          style={{
            backgroundColor: "#06120B",
            color: "#FFFFFF",
            paddingTop: "140px",
            paddingBottom: "4.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle gradient background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(6,18,11,0.98) 0%, rgba(13,62,38,0.85) 60%, rgba(6,18,11,0.98) 100%)",
            }}
          />

          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/mortgage-broking" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Mortgage Broking
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Borrowing Power Calculator</span>
            </nav>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.3rem, 4.8vw, 4rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                maxWidth: "860px",
                marginBottom: "1.25rem",
              }}
            >
              How Much Can You Borrow?{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Precision Australian Mortgage Calculator
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "700px",
                marginBottom: "2rem",
              }}
            >
              Simulate your true borrowing capacity across 40+ Australian banks and non-bank lenders. Features
              real-time cashflow allocation charts, APRA 3.00% serviceability stress testing, and statutory HEM expense floors.
            </p>

            {/* Quick trust metrics */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#C5A869" }}>✓</span> APRA 3.00% Buffer Compliant
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#C5A869" }}>✓</span> 2024–2025 Stage 3 Tax Rates
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#C5A869" }}>✓</span> 40+ Australian Lenders Compared
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#C5A869" }}>✓</span> $0 Broker Assessment Fee
              </span>
            </div>
          </div>
        </section>

        {/* ─── INTERACTIVE CALCULATOR SECTION ─── */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "-2.5rem auto 5rem",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <BorrowingPowerCalculator />
        </section>

        {/* ─── EDUCATIONAL / VALUE PILLARS (ONLY THESE KIND OF CARDS) ─── */}
        <section style={{ padding: "1rem 0 5rem", backgroundColor: "#F9F9F6" }}>
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
                Inside Australian Lending Criteria
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                The 4 Rules That Determine Your True Borrowing Capacity
              </h2>
              <p style={{ color: "#55645B", maxWidth: "660px", margin: "0.75rem auto 0", fontSize: "0.95rem" }}>
                Why two different borrowers with the exact same salary can receive completely different loan amounts from Australian banks.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {EXPLANATORY_CARDS.map((card) => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E6ECE8",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(13, 62, 38, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <BookkeepingBenefitIcon type={card.icon} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#4A5A50",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
        <section style={{ padding: "4rem 0 5rem", backgroundColor: "#FFFFFF", borderTop: "1px solid #E6ECE8" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.5rem" }}>
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
                Clear Answers
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.4rem",
                }}
              >
                Frequently Asked Questions About Borrowing Power
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {CALC_FAQS.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    backgroundColor: "#FAFBF9",
                    borderRadius: "14px",
                    padding: "1.75rem",
                    border: "1px solid #E5ECE7",
                  }}
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0D3E26", marginBottom: "0.5rem" }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#4A5A50", lineHeight: 1.65, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BOOKING & CONSULTATION FORM ─── */}
        <div id="booking">
          <BookkeepingContact
            title="Ready for a Verified Borrowing Assessment?"
            subtitle="Book a confidential 15-minute consultation with our Melbourne mortgage broking & CPA team. We'll run your profile across 40+ lenders and unlock your maximum borrowing capacity."
            serviceName="Mortgage Borrowing Power Assessment"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
