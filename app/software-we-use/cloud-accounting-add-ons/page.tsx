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
  title: "Preferred Cloud Accounting Add-Ons Melbourne | Dext, Deputy & Tradify | Taxnet",
  description:
    "Supercharge your accounting software with preferred cloud add-ons. Expert integration of Dext Prepare, Hubdoc, Deputy, Tradify, Shopify, and Stripe in Melbourne.",
  keywords: [
    "cloud accounting add-ons Melbourne",
    "Dext Prepare integration specialist",
    "Deputy rostering Xero integration",
    "Tradify job management setup Melbourne",
    "Shopify Xero accounting sync",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "mobile",
    title: "Dext Prepare & Hubdoc Receipt Capture",
    desc: "Paperless document capture with high-accuracy OCR. Snap physical receipts on your phone or forward bills via email; line items and GST match to bank feeds automatically.",
  },
  {
    icon: "users",
    title: "Deputy & Employment Hero Rostering",
    desc: "Seamless staff scheduling, digital timesheets, GPS geofenced clock-in, and automated modern award wage interpretation pushing directly to cloud payroll.",
  },
  {
    icon: "tool",
    title: "Tradify & ServiceM8 for Trades",
    desc: "End-to-end field service management for plumbers, electricians, and builders. Generate on-site quotes, track job hours, schedule crews, and sync invoices instantly.",
  },
  {
    icon: "card",
    title: "Shopify & Stripe E-Commerce Sync",
    desc: "Eliminate manual clearing account reconciliations. Daily web store sales, card processing merchant fees, and customer refunds synchronize with ledger precision.",
  },
  {
    icon: "cloud",
    title: "Square & Lightspeed POS Integration",
    desc: "Hospitality and retail point-of-sale synchronization. End-of-day cash and card takings flow into your accounting system with accurate GST and tender breakdown.",
  },
  {
    icon: "shield",
    title: "ApprovalMax Bill Authorizations",
    desc: "Multi-tiered digital approval workflows for accounts payable. Protect company funds by enforcing strict authorization limits before supplier invoices are cleared.",
  },
];

const FAQS = [
  {
    q: "Why should we connect third-party add-on apps to our core accounting software?",
    a: "Core platforms like Xero, MYOB, and QuickBooks excel at general ledger accounting, but cannot manage industry-specific workflows like on-site trade quoting, complex staff shift rostering, or retail barcode scanning. By connecting specialized add-ons, your team handles their daily operations in specialized apps while all financial figures, tax invoices, and payroll hours flow automatically into your accounting ledger.",
  },
  {
    q: "How does Dext Prepare (formerly Receipt Bank) eliminate physical paper receipts?",
    a: "Dext uses machine-learning optical character recognition (OCR) to extract supplier names, invoice dates, total amounts, and GST components from photos or PDF attachments. Once Taxnet configures your auto-publish rules, receipts are automatically linked to corresponding bank feed transactions in Xero or MYOB, meeting strict ATO 5-year digital recordkeeping compliance.",
  },
  {
    q: "Can you help our trade business set up Tradify or ServiceM8?",
    a: "Yes. We configure job management platforms like Tradify, ServiceM8, and Fergus for trade contractors across Melbourne. We build your price lists, configure mobile quote templates, link field staff time tracking, and connect the API to Xero so client invoices sync with one click.",
  },
  {
    q: "How do you handle high-volume Shopify and e-commerce merchant clearing reconciliations?",
    a: "E-commerce stores frequently face messy reconciliations because payment gateways (Stripe, PayPal, Afterpay, Klarna) deposit net payouts minus processing fees days after sales occur. Taxnet implements automated e-commerce connectors like A2X or Dext Commerce that create balanced daily sales summaries and isolate merchant processing fees for effortless bank reconciliation.",
  },
  {
    q: "Will our staff find these add-on apps complicated to use?",
    a: "Not with our guided onboarding. We choose user-friendly apps designed for mobile smartphones and provide hands-on Melbourne team training. Your team only needs to learn the simple mobile interface (such as snapping a receipt on Dext or clocking in on Deputy) while Taxnet manages the underlying accounting rules.",
  },
];

export default function CloudAccountingAddOnsPage() {
  const heroImg = "/taxnet-categories-images/Software%20We%20Use/Cloud%20Accounting%20Add-Ons/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Software%20We%20Use/Cloud%20Accounting%20Add-Ons/Man_configuring_business_softwar_ec0afc8b.jpg";
  const bodyImg2 = "/taxnet-categories-images/Software%20We%20Use/Cloud%20Accounting%20Add-Ons/Business_owner_reviewing_laptop_278786c6.jpg";

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
              <Link href="/software-we-use" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Software We Use
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Cloud Accounting Add-Ons</span>
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
              Cloud Accounting Add-Ons.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                100% Paperless Automation.
              </span>{" "}
              Zero Manual Data Entry.
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
              Supercharge your core ledger with certified third-party cloud integrations. From OCR receipt scanning with
              Dext and staff rostering with Deputy, to trade job management with Tradify and seamless Shopify synchronization.
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
                Connect Your Business App Stack →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss integrating cloud accounting add-ons (Dext, Deputy, Tradify) for my business."
                label="Chat with an App Integration Partner"
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
                    alt="Taxnet technical specialist configuring business software add-ons and automated cloud integrations"
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
                    Connected Stack
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Eliminate Double Entry
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
                  Operational Automation
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
                  Stop Wasting Valuable Business Hours on Manual Double Data Entry
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Does your team still type supplier paper invoices into software manually? Do your site managers re-type
                  paper timesheets into payroll? Are your e-commerce sales manually balanced against merchant bank payouts?
                  This manual busywork wastes dozens of productive hours and introduces constant human errors.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet creates unified digital pipelines. When your tradie completes a job in Tradify, the invoice
                  generates automatically in Xero. When an employee clocks in on Deputy, their award-interpreted hours
                  feed directly into pay runs. When receipts are snapped on Dext, the tax deduction is secured instantly.
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
                      Zero Missing Receipts
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Capture receipts on the spot with automated OCR extraction.
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
                      Single Source of Truth
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      All operational software feeds live data into one balanced ledger.
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
                Ecosystem Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Battle-Tested Cloud Integrations Deployed by Melbourne Specialists
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

        {/* ─── SECTION 2: THE PAPERLESS ADVANTAGE ─── */}
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
                  Digital Freedom
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
                  Reclaim 15+ Hours Each Week and Gain Total Control
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Imagine walking into your office without piles of paper receipts, manila folders, or unopened mail.
                  With our tailored add-on ecosystem, every document is scanned, categorized, and filed into the cloud
                  at the exact moment it is incurred.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  When it&apos;s time for your quarterly BAS or annual tax return, Taxnet has instant access to clear,
                  audit-proof digital receipts attached directly to each ledger transaction. No more frantic searching,
                  no missed deductions, and zero ATO compliance anxiety.
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
                  Schedule an App Stack Consultation →
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
                  alt="Business owner reviewing automated cloud dashboard on laptop in modern office"
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
                Integration Clarity
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
          serviceName="Cloud Accounting Add-Ons & Integrations"
          title="Automate Your Business App Stack"
          subtitle="Speak with our Melbourne cloud automation specialists to connect Dext, Deputy, Tradify, or Shopify directly into your accounting engine."
          submitButtonText="Book A Consultation"
        />
      </main>

      <Footer />
    </>
  );
}
