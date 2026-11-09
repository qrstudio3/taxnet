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
  title: "Bridging Loans Melbourne | Buy Before You Sell Mortgage Broker | Taxnet",
  description:
    "Secure bridging loans in Melbourne. Buy your new home before selling your current one without double moves. Open and closed bridging finance with interest capitalization.",
  keywords: [
    "bridging loans Melbourne",
    "buy before you sell finance",
    "bridging finance mortgage broker",
    "interest capitalization bridging loan",
    "peak debt calculation Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "home",
    title: "Buy First, Sell at Leisure",
    desc: "Never miss your dream home while waiting for buyers. Secure the new property immediately and sell your current house without rushed price discounts.",
  },
  {
    icon: "percent",
    title: "Interest Capitalization Flexibility",
    desc: "Opt to make zero monthly repayments on the bridging loan. Accrued interest is capitalized into peak debt and cleared automatically when your existing home settles.",
  },
  {
    icon: "calculator",
    title: "Accurate Peak Debt Modeling",
    desc: "We calculate your maximum temporary peak debt across 40+ lenders, identifying banks that apply sensible safety margins and stress-testing benchmarks.",
  },
  {
    icon: "refresh",
    title: "Open vs Closed Bridging Options",
    desc: "Whether you already have an unconditional contract of sale (closed bridging) or haven't listed your property yet (open bridging), we structure terms up to 12 months.",
  },
  {
    icon: "shield",
    title: "Zero Double Moving Costs",
    desc: "Save over $15,000 to $25,000 in short-term rental lease commitments, temporary storage units, double moving van charges, and unnecessary family disruption.",
  },
  {
    icon: "lock",
    title: "My Protection Plan Transition Cover",
    desc: "Protect the temporary higher debt burden during the transition period with comprehensive repayment insurance against redundancy, trauma, or unexpected injury.",
  },
];

const FAQS = [
  {
    q: "How does a bridging loan work in Victoria?",
    a: "A bridging loan is a temporary short-term financing solution that enables you to purchase a new home before selling your existing one. The lender finances the new purchase by taking security over both properties. The total combined borrowing amount is called 'peak debt'. Once your original home sells, the net proceeds pay down the bridging loan, leaving you with a standard permanent mortgage (the 'end debt').",
  },
  {
    q: "What is the difference between open bridging and closed bridging?",
    a: "Closed bridging applies when you have already signed an unconditional contract of sale for your existing home, with a settlement date set within a few weeks or months. Open bridging applies when your existing property is not yet sold (or not yet listed). Most lenders offer an open bridging period of 6 to 12 months to sell your property.",
  },
  {
    q: "Do I have to make double monthly mortgage repayments during the bridging period?",
    a: "Not necessarily. Most major bridging lenders offer 'interest capitalization'. Under this arrangement, monthly repayments on the bridging portion are waived during the bridging term. Instead, the interest is calculated and added onto the peak debt, which is subsequently paid in full when your old property settles.",
  },
  {
    q: "How much usable equity do I need to qualify for bridging finance?",
    a: "Lenders typically require that your peak debt does not exceed 75% to 80% of the combined value of both properties. Taxnet orders upfront professional bank valuations on both your current home and your intended purchase to calculate your exact peak equity position.",
  },
  {
    q: "What happens if my current house takes longer than 12 months to sell?",
    a: "If your property has not sold near the end of the agreed bridging period, the bank may require you to reprice the property, commence servicing both loans from cash flow, or extend the bridging facility. Taxnet works closely with your real estate agent throughout the term to ensure realistic pricing and timely settlement.",
  },
];

export default function BridgingLoansPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Bridging%20Loans/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Bridging%20Loans/Broker_reviewing_documents_with_1bc068cc.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Bridging%20Loans/Family_moving_into_new_house_8f1179fd.jpg";

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
              <span style={{ color: "#C5A869" }}>Bridging Loans</span>
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
              Bridging Loans.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Buy Before You Sell.
              </span>{" "}
              Zero Forced Price Cuts.
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
              Found your dream property but haven&apos;t sold your current house? Bridging finance gives you up to 12 months
              to sell for top dollar while securing your new home today—with zero double moves and optional interest capitalization.
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
                Calculate My Bridging Loan Feasibility →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I want to buy a new home before selling my current one and need bridging loan advice."
                label="Chat with a Bridging Loan Partner"
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
                    alt="Taxnet mortgage broker reviewing bridging loan documents with home upgraders"
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
                    Seamless Transition
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Move In Before You Sell
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
                  Financial Control
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
                  Avoid the Costly Nightmare of Selling Under Forced Pressure
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  When buyers fall in love with a new home without bridging finance in place, they feel panicked into
                  accepting low-ball offers on their existing property just to meet strict contract deadlines. Giving
                  away $50,000 to $100,000 in property equity just to secure a rushed sale is devastating.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet structures ironclad bridging facilities with up to 12 months grace period. You purchase your
                  new property without a subject-to-sale clause (making your offer far more attractive to sellers) and
                  give your selling agent ample time to stage, market, and auction your old house for maximum value.
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
                      Offer Superiority
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Bid with unconditional confidence at competitive property auctions.
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
                      Maximized Sale Price
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Hold out for genuine market value rather than desperate discounts.
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
                Bridging Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Precision Peak Debt Architecture for Smooth Upgrades
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

        {/* ─── SECTION 2: SETTLEMENT FREEDOM ─── */}
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
                  Zero Moving Headaches
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
                  Move Straight Into Your Dream Home in a Single Transition
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Moving is acknowledged as one of life&apos;s most demanding experiences. Doing it twice—packing up
                  your possessions, moving into a short-term rental for 6 months while paying bond, storage, and lease
                  fees, and then packing up again—costs a family thousands in lost money and immense stress.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  With Taxnet&apos;s bridging finance, you take possession of your new keys, move straight in at your own pace,
                  and leave your former home beautifully vacant, cleaned, and professionally styled for open-for-inspections.
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
                  Model My Bridging Loan Scenario →
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
                  alt="Relieved family moving directly into their new home without stressful double moves"
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
                Bridging Insights
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
          serviceName="Bridging Finance"
          submitButtonText="Book A Consultation"
          title="Buy Your Next Home Before You Sell"
          subtitle="Speak with our Melbourne bridging loan brokers to calculate peak debt, evaluate interest capitalization, and secure your new property without delay."
        />
      </main>

      <Footer />
    </>
  );
}
