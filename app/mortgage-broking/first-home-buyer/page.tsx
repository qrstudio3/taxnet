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
  title: "First Home Buyer Mortgage Broker Melbourne | 5% Deposit & Grants | Taxnet",
  description:
    "Expert first home buyer mortgage broking in Melbourne. Compare 40+ lenders, access the 5% deposit First Home Guarantee Scheme, FHOG $10k grants, and $0 broker fees.",
  keywords: [
    "first home buyer mortgage broker Melbourne",
    "first home guarantee scheme 5 percent deposit",
    "FHOG Melbourne Victoria",
    "stamp duty exemption first home buyer",
    "first home loan pre approval Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "key",
    title: "5% Deposit First Home Guarantee",
    desc: "Access federal government guarantee places allowing eligible first-home buyers to purchase with just a 5% deposit while avoiding costly LMI.",
  },
  {
    icon: "coin",
    title: "FHOG & Stamp Duty Exemption Lodgement",
    desc: "We manage all applications for the $10,000 First Home Owner Grant and Victorian full stamp duty exemptions for properties valued up to $600,000.",
  },
  {
    icon: "calculator",
    title: "Maximum Borrowing Power Comparison",
    desc: "Lender borrowing calculators vary by up to $150,000. We compare policies across 40+ banks to secure the highest safe borrowing capacity.",
  },
  {
    icon: "shield",
    title: "Ironclad Pre-Approval for Auctions",
    desc: "Bid and negotiate with absolute confidence knowing your loan pre-approval is fully verified by senior credit assessment underwriters.",
  },
  {
    icon: "handshake",
    title: "Conveyancer & Agent Liaison",
    desc: "We coordinate directly with your property conveyancer, real estate agent, and the bank to ensure smooth contract exchange and timely settlement.",
  },
  {
    icon: "lock",
    title: "My Protection Plan & Home Security",
    desc: "Optional mortgage protection insurance structured to cover loan repayments in the event of involuntary redundancy, serious illness, or injury.",
  },
];

const FAQS = [
  {
    q: "How does the federal First Home Guarantee (FHBG) work and who is eligible?",
    a: "Under the First Home Guarantee, eligible Australian citizens and permanent residents can purchase a home with as little as a 5% deposit without paying Lenders Mortgage Insurance (LMI). The federal government guarantees up to 15% of the property value. Taxnet is accredited with all participating major and regional panel lenders to secure your scheme allocation.",
  },
  {
    q: "What first home buyer grants and stamp duty concessions apply in Victoria?",
    a: "In Victoria, first home buyers purchasing an eligible new or established home valued up to $600,000 pay $0 stamp duty. For properties valued between $600,001 and $750,000, a sliding concession applies. Additionally, a $10,000 First Home Owner Grant (FHOG) is available when purchasing or building a brand new home valued up to $750,000.",
  },
  {
    q: "Why are Taxnet's mortgage broking services completely free of charge?",
    a: "Under Australian credit regulations, mortgage brokers are paid an industry-standard commission by the lender upon successful loan settlement. You receive complete independent market research, multi-lender comparison, and end-to-end application management without paying a single dollar in broker fees.",
  },
  {
    q: "What is the difference between pre-approval and formal loan approval?",
    a: "Pre-approval (conditional approval) gives you an estimated borrowing limit based on your initial financial checks, allowing you to house-hunt and bid at auctions. Formal approval (unconditional approval) occurs once you have signed a purchase contract and the bank completes a physical property valuation.",
  },
  {
    q: "What documents do I need to prepare for my first home loan assessment?",
    a: "Typically, you will need 2 recent payslips, your most recent PAYG payment summary or Notice of Assessment, 3 to 6 months of bank statements showing genuine savings, photo identification (driver's licence or passport), and details of any credit cards, HECS-HELP debts, or personal loans.",
  },
];

export default function FirstHomeBuyerPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/Broker_consulting_couple_on_mort_34d7a579.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/Couple_exploring_new_home_7763a40e.jpg";

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
              <span style={{ color: "#C5A869" }}>Buying Your First Home</span>
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
              Buying Your First Home.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Zero Broker Fees.
              </span>{" "}
              Maximum Borrowing Power.
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
              Unlock 5% deposit schemes, government grants, and maximum borrowing capacity with zero broker fees.
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
                Calculate My First Home Borrowing Power →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'm looking to buy my first home and need expert mortgage advice."
                label="Chat with a First Home Loan Partner"
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
                    alt="Taxnet mortgage broker consulting first home buyer couple on loan options"
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
                    First Home Security
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Unlock 5% Deposit Scheme
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
                  Borrower Advocacy
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
                  Why Approaching Just One Bank Costs First Home Buyers Thousands
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  When you walk into a single bank branch, you only see their products, their strict assessment metrics,
                  and their standard retail rates. If their automated computer model rejects your application or restricts
                  your borrowing amount, your property dreams can stall for months.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  As MFAA-accredited finance brokers, Taxnet compares over 40 Australian lenders side-by-side. Different
                  lenders treat overtime, bonus income, HECS debts, and family living expenses drastically differently—often
                  resulting in borrowing capacity variances of over $150,000 for the exact same applicant.
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
                      Zero LMI Waste
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Save up to $30,000 in Lenders Mortgage Insurance fees.
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
                      Pre-Approval Certainty
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Bid with confidence knowing your budget is locked in.
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
                First Home Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Complete First Home Buyer Advisory from Pre-Approval to Keys
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: PATHWAY TO SETTLEMENT ─── */}
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
                  Stress-Free Settlement
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
                  We Guide You Through Every Single Milestone
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Buying your first property is one of life&apos;s biggest financial milestones. From initial deposit
                  calculations and government grant eligibility checks to loan contract signing, title transfers, and final
                  PEXA digital settlement, our Melbourne brokers handle the heavy lifting.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We also advise on competitive fixed versus variable splits, 100% offset accounts, and redraw facilities
                  so you pay off your mortgage years faster and save tens of thousands in cumulative interest.
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
                  Book a First Home Discovery Session →
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
                  alt="Excited first home buyer couple exploring their newly purchased home"
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
                First Home Answers
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
          serviceName="First Home Buyer Mortgage"
          submitButtonText="Book A Consultation"
          title="Get Ready to Buy Your First Home"
          subtitle="Let our Melbourne MFAA-accredited mortgage brokers calculate your exact borrowing power and unlock government first home concessions."
        />
      </main>

      <Footer />
    </>
  );
}

