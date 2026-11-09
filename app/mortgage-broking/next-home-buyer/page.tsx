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
  title: "Buying Your Next Home Mortgage Broker Melbourne | Upgrade & Upsize | Taxnet",
  description:
    "Expert mortgage broking for next home buyers in Melbourne. Unlock equity, coordinate simultaneous settlements, port existing loans, and compare 40+ Australian lenders.",
  keywords: [
    "buying next home mortgage broker Melbourne",
    "home upgrade mortgage broker",
    "access equity to buy second home",
    "simultaneous property settlement Melbourne",
    "port home loan Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "home",
    title: "Equity Release for Deposits",
    desc: "Calculate your usable equity without selling first. We structure equity release facilities to fund the 10% auction deposit and purchase costs for your next home.",
  },
  {
    icon: "refresh",
    title: "Simultaneous Settlement Coordination",
    desc: "We coordinate with conveyancers and real estate agents to align both sale and purchase settlement dates on PEXA, avoiding costly double moves and storage fees.",
  },
  {
    icon: "shield",
    title: "Loan Portability & Feature Preservation",
    desc: "Keep your grandfathered competitive interest rate and 100% offset accounts by transferring your existing mortgage directly to your new property title.",
  },
  {
    icon: "calculator",
    title: "Dual-Property Assessment Models",
    desc: "Lenders calculate existing mortgage commitments differently. We identify lenders that shade rental income favorably and apply realistic debt service buffers.",
  },
  {
    icon: "coin",
    title: "Upgrader to Investor Restructuring",
    desc: "Convert your current residence into a high-yielding investment property with optimal debt allocation for maximum negative gearing tax deductibility.",
  },
  {
    icon: "lock",
    title: "My Protection Plan & Family Cover",
    desc: "Safeguard higher mortgage liabilities with targeted debt protection insurance covering repayments during unexpected redundancy, critical illness, or injury.",
  },
];

const FAQS = [
  {
    q: "Should I buy my next home first or sell my current home first?",
    a: "Both pathways have clear advantages. Selling first gives you exact certainty of your budget and cash proceeds, but may require short-term rental accommodation. Buying first secures your dream home without time pressure, but requires sufficient usable equity or a short-term bridging facility. Our brokers model both scenarios against your cash flow to recommend the safest path.",
  },
  {
    q: "How do I access usable equity in my current home to buy a new property?",
    a: "Usable equity is calculated as 80% of your current home's verified bank valuation minus your outstanding mortgage balance. We can arrange a supplementary equity loan or line of credit with no repayment obligations until drawn, providing immediate funds for deposits and stamp duty.",
  },
  {
    q: "Can I keep my current home as an investment property when I move?",
    a: "Yes. Many of our clients transition their current home into a rental investment. Together with Taxnet's in-house CPA tax team, we structure your loans so that the debt against the investment property is tax-deductible, while minimizing non-deductible private debt on your new family home.",
  },
  {
    q: "What is loan portability and when should I use it?",
    a: "Loan portability allows you to keep your existing mortgage contract—including any locked-in fixed interest rates—and simply switch the underlying property security from your old house to your new one. This saves break costs and loan establishment fees.",
  },
  {
    q: "What costs should I budget for when upgrading homes in Victoria?",
    a: "Key expenses include Victorian stamp duty on the new property (typically 5-6% of purchase price), legal conveyancing for both transactions, real estate agent selling commissions (1.5-2.5%), marketing fees, building and pest inspections, and moving costs.",
  },
];

export default function NextHomeBuyerPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20Next%20Home/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20Next%20Home/Mortgage_advisor_meeting_couple_7ea7c9dc.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20Next%20Home/Family_exploring_new_home_d12c6415.jpg";

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
              <span style={{ color: "#C5A869" }}>Buying Your Next Home</span>
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
              Buying Your Next Home.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Upgrading Simplified.
              </span>{" "}
              Equity Unlocked.
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
              Unlock usable home equity and coordinate simultaneous settlements for a completely effortless transition.
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
                Calculate My Upgrader Equity →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'm planning to buy my next home and want to assess my equity and borrowing power."
                label="Chat with an Upgrader Lending Specialist"
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
                    alt="Taxnet mortgage advisor meeting couple to discuss upgrading to their next home"
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
                    Equity Freedom
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Upgrade Without Double Moving
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
                  Upgrader Strategy
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
                  The Timing Challenge: Buying Before Selling Without Overextending
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Upgrading from your first home presents a delicate balancing act. If you sell first, you risk being
                  priced out of a rising market or forced into temporary rental accommodation. If you buy first, you
                  worry about carrying two mortgages if your current property takes longer to sell.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet engineers precision financing solutions. We evaluate your equity position, structure pre-approved
                  simultaneous settlements, and line up flexible bridging loan safety nets so you can purchase your dream
                  home with calm confidence.
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
                      Accurate Equity Valuation
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Bank panel valuations ordered upfront to lock in deposit certainty.
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
                      Zero Double Moves
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Synchronise settlement days so you move straight into your new home.
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
                Upgrader Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                End-to-End Strategic Solutions for Your Next Property Transition
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: DOWNSIZING & UPSIZING MASTERY ─── */}
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
                  Tax & Wealth Alignment
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
                  Turn Your Existing Property into an Investment Machine
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Instead of selling your current home, have you considered renting it out? With Melbourne rental yields
                  strong and long-term capital growth proven, retaining your first property creates substantial wealth.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Because Taxnet integrates licensed mortgage brokers with senior CPA tax accountants, we structure your
                  new debt correctly from day one. We ensure loans linked to your future investment property maximize
                  tax deductions while your new home loan remains debt-recycled for fast principal repayment.
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
                  Explore Upgrader Loan Options →
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
                  alt="Family happily exploring their new upgraded family home in Melbourne"
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
                Next Home Advice
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
          serviceName="Next Home Buyer Mortgage"
          submitButtonText="Book A Consultation"
          title="Plan Your Next Home Purchase"
          subtitle="Speak with our Melbourne finance brokers to calculate usable equity, explore bridging options, and structure your next home upgrade."
        />
      </main>

      <Footer />
    </>
  );
}
