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
import AutoSlidingCards from "@/app/components/AutoSlidingCards";

export const metadata: Metadata = {
  title: "QuickBooks Online Certified ProAdvisor Melbourne | Taxnet",
  description:
    "Expert QuickBooks Online (QBO) setup, migration, and bookkeeping in Melbourne. Certified ProAdvisors for multi-currency, mobile invoicing, and automated mileage tracking.",
  keywords: [
    "QuickBooks Online ProAdvisor Melbourne",
    "QBO setup and bookkeeping Melbourne",
    "QuickBooks multi currency accounting",
    "QuickBooks contractor payroll TPAR",
    "QuickBooks certified accountant Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "calculator",
    title: "Certified ProAdvisor Configuration",
    desc: "Complete ledger setup from chart of accounts to GST tax codes, tailored to service businesses, trades, consultants, and digital enterprises.",
  },
  {
    icon: "coin",
    title: "Multi-Currency Global Operations",
    desc: "Seamlessly buy and sell in USD, EUR, GBP, and NZD with live exchange rate updates, automated realized gain/loss calculations, and foreign currency accounts.",
  },
  {
    icon: "car",
    title: "Automated GPS Mileage Tracking",
    desc: "Maximize motor vehicle tax deductions without logbook stress. The QBO mobile app automatically tracks business trips and categorizes kilometers for tax time.",
  },
  {
    icon: "card",
    title: "Instant Invoicing & One-Click Payments",
    desc: "Create professional quotes and invoices on your smartphone with embedded payment buttons (credit card, Apple Pay, PayPal), cutting debtor collection days in half.",
  },
  {
    icon: "document",
    title: "Contractor Management & TPAR Reporting",
    desc: "Track subcontractor payments and generate audit-ready Taxable Payments Annual Reports (TPAR) directly to the ATO without manual spreadsheet compilation.",
  },
  {
    icon: "sync",
    title: "E-Commerce & Bank Feed Sync",
    desc: "Direct integration with Australian major banks, Shopify, Square, PayPal, and Stripe, automatically matching net deposits with processing fees.",
  },
];

const FAQS = [
  {
    q: "Why should small businesses and contractors consider QuickBooks Online?",
    a: "QuickBooks Online (QBO) offers an agile, cost-effective accounting environment with exceptional mobile features. Its smartphone app allows you to invoice clients on-site, scan receipts instantly, and track business travel mileage via background GPS. For solo operators, trades, and digital consultants, QBO delivers incredible functionality at an accessible price point.",
  },
  {
    q: "How does QuickBooks handle multi-currency transactions for Australian businesses?",
    a: "QBO supports over 145 currencies with live, automated foreign exchange rate updates. You can invoice international clients in their local currency, pay overseas suppliers, and maintain foreign currency bank accounts while QBO automatically calculates realized and unrealized currency gains/losses for Australian tax compliance.",
  },
  {
    q: "What is Taxable Payments Annual Reporting (TPAR) and how does QuickBooks help?",
    a: "If your business provides building and construction, cleaning, courier, IT, or security services and hires subcontractors, the ATO requires you to lodge an annual TPAR by August 28. Taxnet configures QuickBooks to tag subcontractor payments throughout the year, enabling one-click digital TPAR lodgement without last-minute panic.",
  },
  {
    q: "Can Taxnet migrate our data from another system to QuickBooks Online?",
    a: "Yes. We regularly migrate clients from desktop software, Xero, MYOB, or Excel into QuickBooks Online. We migrate your customer contacts, open accounts receivable, supplier balances, and opening balances to ensure your new file starts with 100% balanced precision.",
  },
  {
    q: "Do you offer training for QuickBooks Online in Melbourne?",
    a: "Yes. As Certified QuickBooks ProAdvisors, we provide tailored virtual and in-person Melbourne training sessions. We coach you on creating estimates, tracking billable time, issuing recurring invoices, and reviewing your monthly profit and loss reports.",
  },
];

export default function QuickBooksSoftwarePage() {
  const heroImg = "/taxnet-categories-images/Software%20We%20Use/QuickBooks/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Software%20We%20Use/QuickBooks/Accountant_reviewing_financial_r_46f66d7c.jpg";
  const bodyImg2 = "/taxnet-categories-images/Software%20We%20Use/QuickBooks/Man_reviewing_financial_software_5440c4bf.jpg";

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
              background: "linear-gradient(135deg, rgba(10,13,11,0.96) 0%, rgba(20,24,22,0.85) 55%, rgba(10,13,11,0.98) 100%)",
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
              <Link href="/software-we-use" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Software We Use
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>QuickBooks</span>
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
              QuickBooks Online Certified ProAdvisor.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Smart Cash Flow.
              </span>{" "}
              Mobile Business Agility.
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
              Intuitive cloud invoicing, automatic expense matching, multi-currency accounting, and mobile bookkeeping workflows for agile Melbourne businesses.
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
                Deploy QuickBooks Online →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss QuickBooks Online setup and bookkeeping for my business."
                label="Chat with a QuickBooks ProAdvisor"
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
            <AutoSlidingCards
              items={PILLARS.map((p) => ({
                icon: p.icon,
                title: p.title,
                desc: p.desc,
                tag: "QuickBooks Agility",
                href: "#contact",
              }))}
            />
          </div>
        </section>

        {/* ─── SECTION 2: GLOBAL MULTI-CURRENCY FREEDOM ─── */}
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
                  Global Commerce
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
                  Trade Internationally Without Foreign Exchange Chaos
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Doing business in USD, EUR, or GBP shouldn&apos;t mean wrestling with manual currency conversions
                  on an Excel spreadsheet. QuickBooks Online automatically records real-time exchange rates at the time
                  of billing and recalculates real-time variances when payment settles into your multi-currency account.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet ensures your foreign currency accounts, overseas digital supplier costs, and Australian GST
                  obligations remain strictly aligned with ATO Section 9-85 translation rules, shielding you from tax
                  penalties.
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
                  Explore QuickBooks Advisory Options →
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
                  alt="Business professional reviewing QuickBooks Online software and multi-currency financials on laptop"
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
                QuickBooks FAQ
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
          serviceName="QuickBooks Online Setup & Advisory"
          title="Optimize Your Business With QuickBooks"
          subtitle="Speak with our Certified QuickBooks ProAdvisors in Melbourne to configure automated invoicing, multi-currency tracking, and contractor TPAR compliance."
          submitButtonText="Book A Consultation"
        />
      </main>

      <Footer />
    </>
  );
}
