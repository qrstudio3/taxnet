import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FirstHomeBuyerCalculator from "@/app/components/FirstHomeBuyerCalculator";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import BookkeepingBenefitIcon from "@/app/components/BookkeepingBenefitIcon";
import ExpandableFaq from "@/app/components/ExpandableFaq";

export const metadata: Metadata = {
  title: "First Home Buyer Deposit & Cost Calculator | Taxnet",
  description:
    "Calculate the real cash needed to buy your first home in Australia. Compare the 5% First Home Guarantee, state stamp duty exemptions, LMI, and ongoing loan repayments.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const FHB_KEY_FACTORS = [
  {
    icon: "shield" as const,
    title: "5% First Home Guarantee (FHBG)",
    desc: "Eligible first home buyers can purchase with just a 5% deposit without paying costly Lenders Mortgage Insurance (LMI), with the Australian Government guaranteeing the rest.",
  },
  {
    icon: "card" as const,
    title: "State Stamp Duty Concessions",
    desc: "States offer significant stamp duty exemptions or tiered concessions for first home buyers (e.g. $0 duty in VIC up to $600k, and NSW up to $800k).",
  },
  {
    icon: "home" as const,
    title: "Upfront Cash & Fees",
    desc: "In addition to your deposit, you must budget for legal conveyancing (~$2,200), building & pest inspections (~$600), and transfer costs (~$1,500) payable at settlement.",
  },
];

const FHB_FAQS = [
  {
    q: "How does the 5% First Home Guarantee (FHBG) work?",
    a: "Under the Australian Government's First Home Guarantee, eligible first home buyers can purchase a property with as little as a 5% deposit. The National Housing Finance and Investment Corporation (NHFIC) guarantees up to 15% of the loan value, meaning participating lenders won't charge you Lenders Mortgage Insurance (LMI).",
  },
  {
    q: "Do I have to pay stamp duty as a first home buyer?",
    a: "Most Australian states offer generous stamp duty exemptions or concessions for first home buyers below designated price caps. For example, in Victoria, first home buyers pay $0 stamp duty on properties up to $600,000, and receive a tapered discount up to $750,000. In NSW, full exemption applies up to $800,000.",
  },
  {
    q: "What is Lenders Mortgage Insurance (LMI) and when does it apply?",
    a: "LMI is an insurance policy that protects the lender (not the borrower) if you default on your home loan. It is typically required if your deposit is less than 20% of the property value (an LVR above 80%), unless you qualify for the First Home Guarantee or have a family guarantor.",
  },
  {
    q: "Can I buy with a partner under the First Home Guarantee?",
    a: "Yes. Joint applicants (spouses, de facto partners, siblings, and friends) can apply together for the First Home Guarantee, provided both are eligible first home buyers or meet current scheme guidelines.",
  },
  {
    q: "How much does a Taxnet mortgage broker consultation cost?",
    a: "We don’t usually charge a fee for our mortgage broking services. Lenders pay us a commission upon settlement, which is fully disclosed to you in our Credit Guide before you proceed.",
  },
];

export default function FirstHomeBuyerCalculatorPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022", minHeight: "100vh" }}>
        {/* ─── HERO HEADER (MATCHING TAXNET LUXURY BLACK & GOLD DESIGN) ─── */}
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
              width: "550px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 105, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "880px",
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
              <span style={{ color: "#C5A869" }}>First Home Buyer Calculator</span>
            </nav>

            {/* Heading in Center */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                margin: "0 auto 1.25rem",
              }}
            >
              How Much Do You Need to Buy Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                First Home?
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "680px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Calculate your required deposit, state stamp duty exemptions, 5% First Home Guarantee eligibility, and upfront settlement costs.
            </p>
          </div>
        </section>

        {/* ─── INTERACTIVE CALCULATOR (ELEVATED ON WHITE/CREAM CANVAS) ─── */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "-3.5rem auto 4.5rem",
            padding: "0 1.5rem",
            position: "relative",
            zIndex: 10,
          }}
        >
          <FirstHomeBuyerCalculator />
        </section>

        {/* ─── KEY FACTORS FOR FIRST HOME BUYERS ─── */}
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
                Key Factors for First Home Buyers
              </h2>
              <p style={{ color: "#55645B", maxWidth: "560px", margin: "0.5rem auto 0", fontSize: "0.92rem" }}>
                Understanding government concessions, low-deposit schemes, and settlement costs.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {FHB_KEY_FACTORS.map((card) => (
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

            {/* Credit Disclosure & Disclaimer Box */}
            <div
              style={{
                marginTop: "2.5rem",
                padding: "1.5rem 1.75rem",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid rgba(197, 168, 105, 0.35)",
                fontSize: "0.82rem",
                color: "#4B5563",
                lineHeight: 1.65,
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div style={{ marginBottom: "0.75rem" }}>
                <strong style={{ color: "#0A0D0B" }}>Calculator Disclaimer:</strong>{" "}
                This calculator gives an estimate only, based on current state stamp duty rates, government scheme price caps, and standard fee assumptions. It is not a finance offer, pre-approval or credit assistance. Lenders apply their own criteria and rates change over time. Speak with our broker for an assessment based on your situation.
              </div>
              <div style={{ paddingTop: "0.75rem", borderTop: "1px solid rgba(197, 168, 105, 0.2)" }}>
                <strong style={{ color: "#0A0D0B" }}>Credit Licence &amp; Disclosure:</strong>{" "}
                Benjamin Kyle Willis (Credit Representative Number 576047) has access to a panel of lenders through National Mortgage Brokers Pty Ltd (ACN 093 874 376 / Australian Credit Licence 391209), which is a fully-owned subsidiary of Liberty Financial Pty Ltd (ACN 077 248 983 / Australian Credit Licence 286596). Benjamin Kyle Willis has access to products including those from Liberty Financial.
              </div>
            </div>
          </div>
        </section>

        {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
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
                First Home Buyer Guide
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

            <ExpandableFaq items={FHB_FAQS} defaultOpenIndex={0} />
          </div>
        </section>

        {/* ─── BOOKING & CONSULTATION FORM (MORTGAGE BROKING FORM) ─── */}
        <div id="booking">
          <BookkeepingContact
            serviceName="Mortgage Broking"
            title="Let’s Talk About Your First Home"
            subtitle="Speak with our broker team in Melbourne. We assess your scenario across a wide range of lenders, confirm your government scheme eligibility, and help you secure the right loan."
            submitButtonText="Book A First Home Buyer Chat"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
