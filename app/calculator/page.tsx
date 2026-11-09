import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BorrowingPowerCalculator from "@/app/components/BorrowingPowerCalculator";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import BookkeepingBenefitIcon from "@/app/components/BookkeepingBenefitIcon";
import ExpandableFaq from "@/app/components/ExpandableFaq";

export const metadata: Metadata = {
  title: "Borrowing Power Calculator Australia | Accurate Home Loan Capacity | Taxnet",
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

const KEY_FACTORS = [
  {
    icon: "shield" as const,
    title: "APRA 3.00% Stress Buffer",
    desc: "Lenders test repayments at 3.00% above your actual rate to ensure loan safety if interest rates increase.",
  },
  {
    icon: "card" as const,
    title: "Credit Card Limits",
    desc: "Banks count ~3.5% of your approved credit card limit monthly as an ongoing commitment, even if your balance is $0.",
  },
  {
    icon: "home" as const,
    title: "Statutory HEM Benchmark",
    desc: "Lenders compare declared living expenses against official household benchmarks (HEM) based on family size and location.",
  },
];

const CALC_FAQS = [
  {
    q: "How accurate is this borrowing calculator?",
    a: "It implements the official APRA 3.00% serviceability buffer, 2024–2025 Stage 3 tax brackets, Medicare levies, and statutory HEM benchmark floors for highly accurate preliminary figures.",
  },
  {
    q: "Why do different Australian banks offer different loan amounts?",
    a: "Credit policies diverge across lenders. Some shade rental income to 70% while others allow 90%, and policies for self-employed income vary substantially. Taxnet compares 40+ lenders to maximize your capacity.",
  },
  {
    q: "How much does a formal broker assessment cost?",
    a: "Our residential mortgage broking services are 100% free ($0 broker fee to you). The lender pays our practice an industry-standard commission after your mortgage settles.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022", minHeight: "100vh" }}>
        {/* ─── HERO HEADER (CENTERED, BLACK WITH GOLD ACCENT, NO PILL BADGE) ─── */}
        <section
          style={{
            backgroundColor: "#0A0D0B",
            color: "#FFFFFF",
            paddingTop: "140px",
            paddingBottom: "5.5rem",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Subtle gold ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/mortgage-broking" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                Mortgage Broking
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Calculator</span>
            </nav>

            {/* Short Heading in Center */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                margin: "0 auto",
              }}
            >
              How Much Can You{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Borrow?
              </span>
            </h1>
          </div>
        </section>

        {/* ─── INTERACTIVE CALCULATOR (ELEVATED ON WHITE/CREAM CANVAS) ─── */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "-3rem auto 4.5rem",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <BorrowingPowerCalculator />
        </section>

        {/* ─── CONCISE KEY FACTORS (ON WHITE BACKGROUND) ─── */}
        <section style={{ padding: "1rem 0 4.5rem", backgroundColor: "#F9F9F6" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Lending Criteria
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                  color: "#0A0D0B",
                  marginTop: "0.35rem",
                  fontWeight: 400,
                }}
              >
                Key Factors That Shape Your Capacity
              </h2>
              <p style={{ color: "#55645B", maxWidth: "540px", margin: "0.5rem auto 0", fontSize: "0.92rem" }}>
                Three core benchmarks Australian lenders use to assess your formal borrowing power.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {KEY_FACTORS.map((card) => (
                <div
                  key={card.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "1.75rem",
                    border: "1px solid #E5ECE7",
                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(161, 134, 80, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      color: "#A18650",
                    }}
                  >
                    <BookkeepingBenefitIcon type={card.icon} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#4A5A50",
                      lineHeight: 1.6,
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

        {/* ─── CONCISE FREQUENTLY ASKED QUESTIONS (ON PURE WHITE) ─── */}
        <section style={{ padding: "3.5rem 0 4.5rem", backgroundColor: "#FFFFFF", borderTop: "1px solid #E6ECE8" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Clear Answers
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                  color: "#0A0D0B",
                  marginTop: "0.35rem",
                  fontWeight: 400,
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <ExpandableFaq items={CALC_FAQS} defaultOpenIndex={0} />
          </div>
        </section>

        {/* ─── BOOKING & CONSULTATION FORM ─── */}
        <div id="booking">
          <BookkeepingContact
            title="Ready for a Verified Borrowing Assessment?"
            subtitle="Book a confidential 15-minute consultation with our Melbourne mortgage broking & CPA team. We'll run your profile across 40+ lenders and unlock your maximum borrowing capacity."
            serviceName="Mortgage Borrowing Power Assessment"
            submitButtonText="Book A Consultation"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
