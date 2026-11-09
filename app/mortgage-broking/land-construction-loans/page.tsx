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
  title: "Land & Construction Loans Melbourne | Progressive Drawdown Finance | Taxnet",
  description:
    "Expert land and construction loan mortgage broking in Melbourne. Manage progressive drawdowns across 5 build stages, fixed-price contracts, and as-if-complete valuations.",
  keywords: [
    "land and construction loans Melbourne",
    "construction mortgage broker",
    "progressive drawdown loan Victoria",
    "building loan as if complete valuation",
    "house and land package finance",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "tool",
    title: "5-Stage Progressive Drawdown",
    desc: "We coordinate bank inspection sign-offs and fund releases across Base, Frame, Lock-Up, Fixing, and Practical Completion stages without construction delays.",
  },
  {
    icon: "percent",
    title: "Interest-Only Construction Payments",
    desc: "Only pay interest on the exact funds drawn at each stage, keeping monthly repayments minimal while you continue paying existing rent or mortgage commitments.",
  },
  {
    icon: "calculator",
    title: "As-If-Complete Bank Valuations",
    desc: "We order comprehensive valuations based on your architectural drawings and fixed-price HIA contract before construction starts, locking in total project funding.",
  },
  {
    icon: "shield",
    title: "Fixed-Price Contract & Variation Protection",
    desc: "Our brokers vet your Master Builders or HIA contract schedule and establish contingency cash reserves to absorb unforeseen site costs or builder variations.",
  },
  {
    icon: "home",
    title: "House & Land Two-Part Settlement",
    desc: "Seamlessly coordinate the initial land settlement so you secure the block immediately, followed by the seamless transition into the construction loan tranche.",
  },
  {
    icon: "lock",
    title: "My Protection Plan Build Shield",
    desc: "Safeguard your project against unexpected life events with mortgage protection insurance structured to cover repayments during the entire construction cycle.",
  },
];

const FAQS = [
  {
    q: "How does a progressive drawdown construction loan work in Victoria?",
    a: "Unlike a standard home loan where the entire lump sum is transferred on settlement day, a construction loan is released in five progressive tranches as your builder completes each milestone: 1) Base/Slab, 2) Frame, 3) Lock-Up, 4) Fixing, and 5) Practical Completion. The bank inspects the site and pays the builder directly upon receiving a signed progress claim invoice.",
  },
  {
    q: "Do I pay full principal and interest repayments while my house is being built?",
    a: "No. During the construction period (typically 6 to 18 months), your loan operates on an interest-only basis, and you only pay interest on the money drawn so far. For example, if only $100,000 has been paid to the builder on a $500,000 construction facility, you only pay monthly interest on $100,000.",
  },
  {
    q: "What documents are required to approve a construction loan?",
    a: "You will need a signed fixed-price building contract (such as an HIA or Master Builders contract), council-approved architectural building plans and engineering specifications, a detailed schedule of finishes, the builder's current domestic building insurance and registration certificates, and proof of your land ownership or land contract.",
  },
  {
    q: "Can I use the Victorian First Home Owner Grant ($10,000 FHOG) towards a construction loan?",
    a: "Yes. In Victoria, eligible first-home buyers building a brand-new home valued up to $750,000 can receive the $10,000 FHOG. The grant funds are typically released by the State Revenue Office (SRO) at the base/slab stage and applied directly towards the builder's initial progress invoice.",
  },
  {
    q: "What happens if there are builder variations or unexpected cost increases during the build?",
    a: "Builder variations (such as upgrading benchtops or unexpected rock excavation) usually require upfront cash payment or an approved bank loan increase. Taxnet ensures your initial loan includes a prudent contingency buffer so that unexpected site costs never halt your build.",
  },
];

export default function LandConstructionLoansPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Land%20and%20Construction%20Loans/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Land%20and%20Construction%20Loans/Broker_reviewing_construction_pl_2e98e204.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Land%20and%20Construction%20Loans/Couple_visiting_house_constructi_2895abc2.jpg";

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
              <span style={{ color: "#C5A869" }}>Land & Construction Loans</span>
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
              Land & Construction Loans.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Progressive Drawdowns.
              </span>{" "}
              Seamless Build Handover.
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
              Stage-by-stage construction financing across slab, frame, lockup, and completion with smooth progress claims.
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
                Calculate My Construction Borrowing Power →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'm planning to build and need expert construction loan advice."
                label="Chat with a Construction Finance Partner"
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
                    alt="Taxnet mortgage broker reviewing construction plans and building schedule with builder and client"
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
                    Builder Cash Flow
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Fast Claim Approvals
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
                  Construction Risk Mitigation
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
                  Why Construction Loans Fail Without Dedicated Broker Management
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Unlike standard mortgages, construction loans involve multiple parties: you, your builder, private
                  building certifiers, municipal councils, bank quantity surveyors, and lender processing teams. A single
                  missing invoice signature or unapproved variation can delay progress payments for weeks, bringing work
                  on-site to a grinding halt.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet serves as your dedicated construction project manager on the finance side. We review every progress
                  claim, coordinate bank valuations at critical build stages, and ensure your builder receives funds promptly
                  so your home is finished without costly delays.
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
                      Zero Payment Delays
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Swift turnaround on all progress drawdown requests.
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
                      Fixed Price Assurance
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      HIA and Master Builders contract review before signing.
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
                Construction Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                End-to-End Financial Support for Every Stage of Your Build
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: FROM SLAB TO COMPLETION ─── */}
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
                  Practical Completion
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
                  Seamless Transition to Permanent Low-Rate Home Loan
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  When your builder issues the Certificate of Occupancy, your construction journey reaches its culmination.
                  At this point, final bank inspection occurs, the final retention payment is released, and your construction
                  facility converts into a permanent principal and interest or variable loan.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet automatically benchmarks your completed property against the market. With your home now physically
                  built and often having achieved substantial equity growth, we renegotiate lower interest rate tiers or add
                  multiple 100% offset accounts to accelerate your mortgage-free timeline.
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
                  Start Your Construction Loan Assessment →
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
                  alt="Excited couple visiting their new house construction site in Melbourne"
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
                Construction FAQ
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
          serviceName="Land & Construction Mortgage"
          submitButtonText="Book A Consultation"
          title="Build Your Dream Home With Confidence"
          subtitle="Speak with our Melbourne construction finance specialists to review your building contract, calculate progressive drawdowns, and lock in funding."
        />
      </main>

      <Footer />
    </>
  );
}
