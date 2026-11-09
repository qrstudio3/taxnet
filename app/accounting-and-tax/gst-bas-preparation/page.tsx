import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import AutoSlidingCards from "@/app/components/AutoSlidingCards";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";

export const metadata: Metadata = {
  title: "GST & BAS Preparation Melbourne | Registered BAS Agents | Taxnet",
  description:
    "Expert GST and Business Activity Statement (BAS) preparation and lodgement in Melbourne. Extended agent deadlines, input tax credit verification, and zero late penalties.",
  keywords: [
    "BAS preparation Melbourne",
    "GST accountant Melbourne",
    "registered BAS agent Melbourne",
    "business activity statement lodgement",
    "IAS PAYG withholding accountant",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "calculator",
    title: "Quarterly & Monthly BAS Lodgement",
    desc: "Rigorous reconciliation of 1A (GST on sales) and 1B (GST on purchases) ensuring accurate net refunds or tax payable lodged directly with the ATO.",
  },
  {
    icon: "percent",
    title: "PAYG Withholding & Instalments",
    desc: "Seamless synchronization with payroll STP reports to ensure employee PAYG withholding and business income tax instalments are penny-accurate.",
  },
  {
    icon: "shield",
    title: "Tax Invoice & ABN Validation",
    desc: "Auditing expense receipts over $82.50 to verify valid supplier GST registration and prevent costly ATO clawbacks during routine reviews.",
  },
  {
    icon: "clock",
    title: "Extended Agent Lodgement Deadlines",
    desc: "As registered Tax and BAS Agents, our clients enjoy up to an extra 4 weeks past normal ATO deadlines to review and fund their quarterly obligations.",
  },
  {
    icon: "coin",
    title: "Fuel Tax & Industry Excise Credits",
    desc: "Unlocking specialized Fuel Tax Credits (FTC) for heavy machinery, agriculture, transport, and manufacturing operators across Australia.",
  },
  {
    icon: "sync",
    title: "Merchant & Clearing Account Reconciliations",
    desc: "Untangling complex POS merchant settlements (Stripe, Square, Tyro, PayPal) so gross revenue and transaction fee GST match bank feeds flawlessly.",
  },
];

const FAQS = [
  {
    q: "What is the key benefit of having Taxnet lodge my BAS instead of doing it myself?",
    a: "Self-lodgers face tight 28-day deadlines, complex tax-code rules, and strict ATO penalties for unintentional errors. As registered Tax and BAS Agents, Taxnet provides an automatic 4-week lodgement extension for most quarterly statements, verifies all input tax credits to legally maximize refunds, and provides statutory safe harbor protection against ATO administrative penalties.",
  },
  {
    q: "When is an Australian business legally required to register for GST?",
    a: "You must register for GST within 21 days once your gross business turnover reaches or is projected to exceed $75,000 per annum ($150,000 for non-profits), or immediately if you provide taxi, limousine, or ride-share services regardless of turnover. We can calculate your turnover thresholds and activate your GST registration smoothly.",
  },
  {
    q: "What are the most common GST mistakes small businesses make?",
    a: "Common pitfalls include claiming GST on non-taxable supplies (such as ASIC fees, bank charges, government charges, and international software without GST), failing to collect valid tax invoices over $82.50, misreporting private vehicle usage, and failing to reconcile Stripe/Square fees correctly. We audit your ledger to eliminate these errors before lodgement.",
  },
  {
    q: "Can Taxnet help if I have overdue or backlogged BAS statements?",
    a: "Yes. We frequently rescue businesses with months or years of overdue BAS statements. We work systematically through your historical bank records, reconstruct missing documentation, negotiate payment arrangements or remission of late lodgement penalties with the ATO, and bring your account back into good standing.",
  },
  {
    q: "How does the PAYG instalment system work on my BAS?",
    a: "Pay As You Go (PAYG) instalments allow you to prepay your expected end-of-year income tax liability incrementally throughout the year. If your business trading conditions change significantly, Taxnet can vary your quarterly PAYG instalment rate down to preserve cashflow.",
  },
];

export default function GstBasPreparationPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/GST-BAS-Preparation/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/GST-BAS-Preparation/Accountant_preparing_financial_r_9f0cd682.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/GST-BAS-Preparation/Accountant_reviewing_documents_w_ef5f3594.jpg";

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
            paddingBottom: "4.5rem",
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
            <nav style={{ marginBottom: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span><Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Accounting & Tax</Link><span style={{ margin: "0 8px" }}>/</span><span style={{ color: "#C5A869" }}>GST & BAS Preparation</span>
            </nav>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                maxWidth: "860px",
                marginBottom: "1rem",
              }}
            >
              GST & BAS Preparation.{" "}<span style={{ background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Penny-Perfect Records.</span>{" "}Guaranteed On-Time.
            </h1>

            {/* Subtitle - Lesser & Punchy */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              Audit-proof GST reconciliations, maximum input tax credits, and extended agent lodgement deadlines with registered BAS agents.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
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
                Automate Your BAS Today →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to automate our GST and BAS preparation."
                label="Chat with a Registered BAS Agent"
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
                    alt="Taxnet BAS agent preparing financial reconciliation and activity statements"
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
                    Safe Harbor Protection
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Zero Failure-to-Lodge Penalties
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
                  Compliance Defense
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
                  The Hidden Costs and Traps of Inaccurate BAS Lodgement
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  The Australian Taxation Office processes hundreds of millions of data-matched transaction records
                  every single week. When numbers on your BAS fail to align with Single Touch Payroll filings or merchant
                  bank streams, automated audit algorithms trigger red flags.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  A single missed deadline incurs Failure to Lodge (FTL) penalties starting at $330 per 28-day period,
                  compounding up to $1,650 for small businesses and much higher for medium enterprises. Taxnet shields your
                  enterprise from every penalty risk.
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
                      Maximized Credits
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Every valid commercial purchase credit claimed legitimately.
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
                      Extended Deadlines
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Maintain working capital in your account for 4 extra weeks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS ─── */}
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
                Comprehensive BAS Management
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Precision Activity Statement Services for Australian Businesses
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
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
                  Watertight Record-Keeping
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
                  Audit-Proof Records Backed by Registered Tax Agents
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Every figure lodged on your BAS is backed by cross-checked electronic documentation stored securely in
                  your cloud ledger. In the event of an ATO query or compliance audit, Taxnet acts as your authorized
                  representative, dealing directly with tax officers so you never have to endure uncomfortable interviews.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We also advise on cash-basis versus accruals-basis GST accounting methods, ensuring your business uses
                  the exact framework that preserves your operational working capital.
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
                  Consult Our BAS Team →
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
                  alt="Taxnet team reviewing business documents and tax invoices for BAS accuracy"
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
                BAS & GST Knowledge
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
          submitButtonText="Book A Consultation"
          serviceName="GST & BAS Lodgement"
          title="Eliminate BAS Headaches Once and for All"
          subtitle="Let registered Australian Tax & BAS Agents handle your quarterly activity statements with guaranteed accuracy and extended deadlines."
        />
      </main>

      <Footer />
    </>
  );
}

