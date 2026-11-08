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
  title: "Individual Tax Returns Melbourne | Executive & Investor Tax Accountants | TaxNet",
  description:
    "Expert individual and executive tax return preparation in Melbourne. Cryptocurrency CGT, share portfolios, negative gearing, and extended May 15 lodgement deadlines.",
  keywords: [
    "individual tax return Melbourne",
    "executive tax accountant Melbourne",
    "crypto tax accountant Melbourne",
    "property investment tax return",
    "May 15 tax agent deadline",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "calculator",
    title: "Executive & High-Income Individual Returns",
    desc: "Rigorous tax preparation for company directors, medical professionals, legal partners, and contractors with complex multi-stream earnings.",
  },
  {
    icon: "percent",
    title: "Optimized Work Deductions & Vehicle Claims",
    desc: "Comparing the logbook method versus cents-per-km, self-education expenses, home office actual costs, and union or professional memberships.",
  },
  {
    icon: "chart",
    title: "Cryptocurrency & Share Portfolio CGT",
    desc: "Reconciling thousands of exchange trades, DeFi staking, airdrops, and ASX share dividends with franking credits to calculate precise net CGT.",
  },
  {
    icon: "building",
    title: "Rental Property & Negative Gearing",
    desc: "Claiming interest deductions, quantity surveyor capital works (Div 43), plant depreciation (Div 40), body corporate fees, and water rates.",
  },
  {
    icon: "shield",
    title: "Employee Share Schemes & Foreign Income",
    desc: "Navigating startup stock options, vesting taxing points, RSUs, and foreign pension or rental income under double-tax agreements.",
  },
  {
    icon: "clock",
    title: "Extended May 15 Lodgement Deadline",
    desc: "Clients registered on our tax agent portal bypass the hurried October 31 cutoff, enjoying an extended lodgement deadline until May 15.",
  },
];

const FAQS = [
  {
    q: "Why shouldn't I just lodge my tax return myself through myGov?",
    a: "The myGov pre-fill system only captures basic data reported by employers and banks. It does not identify missing work-related deductions, determine whether actual-cost home office claims beat the fixed-rate method, optimize depreciation on investment properties, or apply the 50% CGT discount on crypto and shares. Our clients regularly save thousands more than our fee.",
  },
  {
    q: "How does TaxNet manage complex cryptocurrency and DeFi transactions?",
    a: "The ATO actively data-matches Australian crypto exchange accounts. Every trade, swap, NFT sale, or staking reward is a capital gains tax event. We import your exchange CSVs and wallet histories into specialized crypto tax software to calculate optimal FIFO/HODL capital gains and ensure full ATO disclosure.",
  },
  {
    q: "What is the deadline for lodging my individual return with TaxNet?",
    a: "If you lodge by yourself, the ATO deadline is October 31. However, when you appoint TaxNet as your registered tax agent before October 31, your lodgement and payment deadline is automatically extended to May 15 of the following year (or June 5 in certain circumstances).",
  },
  {
    q: "How can I avoid or minimize the Medicare Levy Surcharge (MLS)?",
    a: "If your taxable income exceeds the MLS threshold ($97,000 for singles, $194,000 for families) and you do not hold appropriate private hospital cover, you face up to an additional 1.5% surcharge. We review your family income thresholds and model whether salary sacrificing or health cover adjustments provide immediate tax relief.",
  },
  {
    q: "Can I complete my individual tax return 100% online with TaxNet?",
    a: "Yes. You can upload all your documents, receipts, and PAYG summaries securely through our client portal, review your prepared return over video or phone with a CPA accountant, and sign electronically with legally binding e-signatures from your smartphone.",
  },
];

export default function IndividualTaxReturnsPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Individual%20Tax%20Returns/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Individual%20Tax%20Returns/Tax_consultant_helping_client_wi_9abab800.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Individual%20Tax%20Returns/Woman_consulting_tax_accountant_39c0427f.jpg";

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
              <span style={{ color: "#C5A869" }}>Individual Tax Returns</span>
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
              Individual & Executive Tax Returns.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Maximized Legal Refunds.
              </span>{" "}
              Total Audit Defense.
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
              Avoid generic online tax apps that leave thousands of dollars in legitimate deductions unclaimed. TaxNet delivers
              meticulous tax preparation for professionals, investors, property owners, and business leaders.
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
                Lodge Your Tax Return Today →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to book an individual tax return consultation."
                label="Chat with an Individual Tax Expert"
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
                    alt="TaxNet consultant helping client maximize individual tax deductions"
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
                    Deduction Audit
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Every Dollar Accounted For
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
                  Taxpayer Advocacy
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
                  Why Generic Tax Apps Cost High Earners Thousands
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Automated lodgement portals are designed for simplicity, not for maximizing your refund. They push you
                  into conservative standard deductions and fail to identify nuanced tax write-offs across your vehicle,
                  home office depreciation, professional development, and investment interests.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  At TaxNet, an experienced tax accountant personally interrogates your expense history. We know the exact
                  industry rulings and deduction boundaries set by the ATO, ensuring you legally capture every single dollar
                  you are entitled to.
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
                      50% CGT Discount
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Halve your taxable gains on assets held for over 12 months.
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
                      Zero Audit Anxiety
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Every claimed expense supported by valid evidentiary documentation.
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
                Comprehensive Personal Tax Scopes
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Specialized Tax Solutions for Australian Professionals & Investors
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

        {/* ─── SECTION 2: ADVISORY IN ACTION ─── */}
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
                  Effortless Digital Lodgement
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
                  Seamless Collaboration from Home or Office
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  We believe professional accounting should respect your busy schedule. Whether you prefer an in-person
                  consultation at our Doncaster East offices or an entirely digital experience from your
                  living room, we deliver rapid turnaround times and instant ATO lodgement confirmation.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Your dedicated accountant reviews every question directly with you, guarantees transparent upfront pricing,
                  and issues your lodgement receipt within 24 hours of approval.
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
                  Book Your Personal Tax Consultation →
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
                  alt="TaxNet client reviewing personal tax deductions and return details"
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
                Tax Clarifications
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
          serviceName="Individual & Executive Tax Return"
          title="Maximize Your Personal Tax Refund"
          subtitle="Don't leave your hard-earned money in ATO coffers. Speak with our Melbourne CPA tax advisors for an exhaustive deduction review."
        />
      </main>

      <Footer />
    </>
  );
}

