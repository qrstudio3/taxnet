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
  title: "Xero Certified Platinum Partner Melbourne | Setup, Migration & Training | Taxnet",
  description:
    "Accredited Xero Platinum Champion Partners in Melbourne. Expert Xero setup, seamless zero data-loss migration, custom chart of accounts, and hands-on staff training.",
  keywords: [
    "Xero certified platinum partner Melbourne",
    "Xero setup and migration Melbourne",
    "convert MYOB to Xero",
    "Xero bookkeeper Melbourne",
    "Xero training for business owners",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "cloud",
    title: "Zero Data-Loss Migration",
    desc: "Seamless extraction and conversion of historical ledgers, open customer invoices, supplier balances, and trial balances from MYOB, Reckon, or Excel into Xero.",
  },
  {
    icon: "sync",
    title: "Automated Daily Bank Feeds",
    desc: "Connect Australian financial institutions for automatic overnight transaction feeds with custom bank rules that auto-reconcile recurring overheads.",
  },
  {
    icon: "chart",
    title: "Bespoke Industry Chart of Accounts",
    desc: "Tailored ledger codes designed specifically for your industry (construction, medical, hospitality, professional services) for pristine management reporting.",
  },
  {
    icon: "award",
    title: "STP Phase 2 Payroll & Super Hub",
    desc: "Full payroll configuration with automated superannuation clearing house integration, leave accrual tracking, and compliant single-touch payroll reporting.",
  },
  {
    icon: "mobile",
    title: "Hubdoc & Dext Receipt Automation",
    desc: "End the shoe-box receipt nightmare. Snap invoices via mobile camera; OCR extracts line items, GST components, and matches them to bank feeds automatically.",
  },
  {
    icon: "users",
    title: "1-on-1 Melbourne Staff Coaching",
    desc: "Hands-on training sessions for your directors, office managers, and administration staff so your internal team quotes, bills, and reconciles with complete confidence.",
  },
];

const FAQS = [
  {
    q: "Why should we hire a Xero Platinum Partner rather than setting up Xero ourselves?",
    a: "DIY setups frequently result in incorrect GST tax codes, duplicated bank transactions, misallocated capital expenditures, and non-compliant payroll categories. As Xero Platinum Partners, Taxnet architects your ledger correctly from day one, ensures STP Phase 2 disaggregation is audit-ready, and sets up advanced automation rules that save your team 5 to 10 hours every single week.",
  },
  {
    q: "Can you migrate our historical data from MYOB or Reckon into Xero without downtime?",
    a: "Yes. We execute clean data cut-overs. We extract your chart of accounts, customer and supplier lists, item codes, historical monthly comparative balances, and open unpaid invoices. We schedule migrations so your daily billing and invoicing continue seamlessly without operational disruption.",
  },
  {
    q: "What exclusive discounts do Taxnet clients receive on Xero subscriptions?",
    a: "As top-tier Platinum Champion Partners, Taxnet has access to exclusive wholesale software pricing and multi-organisation discounts. When you partner with us for bookkeeping or tax services, we pass these wholesale subscription rates directly on to your business.",
  },
  {
    q: "Can you fix our existing Xero file if it has become messy or out of balance?",
    a: "Absolutely. A large portion of our work involves 'Xero file rescues'. We perform comprehensive ledger audits, clear un-reconciled suspense accounts, resolve duplicated bank feeds, correct historic BAS misallocations, and return your balance sheet to pristine, audit-ready condition.",
  },
  {
    q: "Does Xero support Single Touch Payroll (STP) Phase 2 and superannuation clearing?",
    a: "Yes. Xero Payroll is fully accredited by the ATO for STP Phase 2 reporting, disaggregating gross wages, allowances, overtime, and salary sacrifice automatically. Furthermore, Xero's integrated Superannuation Clearing House allows you to pay super for your entire workforce in one secure single-click batch.",
  },
];

export default function XeroSoftwarePage() {
  const heroImg = "/taxnet-categories-images/Software%20We%20Use/Xero/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Software%20We%20Use/Xero/Accountant_consulting_with_busin_2ce35d4f.jpg";
  const bodyImg2 = "/taxnet-categories-images/Software%20We%20Use/Xero/Accountant_reviewing_financial_r_88f95a76.jpg";

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
              <span style={{ color: "#C5A869" }}>Xero</span>
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
              Xero Cloud Accounting.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Platinum Partner Setup.
              </span>{" "}
              Zero Data-Loss Migration.
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
              Harness the full automation power of Australia&apos;s leading cloud accounting engine. As accredited
              Xero Platinum Partners, Taxnet sets up audit-ready ledgers, migrates historical records with 100% precision,
              and trains your team to save 10+ hours every single week.
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
                Get a Free Xero Migration Quote →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss Xero setup and migration for my business."
                label="Chat with a Xero Platinum Partner"
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
                    alt="Taxnet Xero certified accountant consulting with Melbourne business owner on cloud automation"
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
                    Xero Specialists
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Fix Tangled Ledgers Fast
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
                  Cloud Accounting Mastery
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
                  Why DIY Xero Setups Turn Into Costly Accounting Headaches
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Xero is beautifully intuitive for daily invoicing, but setting up a robust, tax-compliant ledger
                  requires serious accounting architecture. When business owners use generic out-of-the-box templates,
                  they inadvertently duplicate bank feeds, miscategorize GST on hire purchases, and leave payroll
                  liabilities unbalanced.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  As Xero Platinum Partners, Taxnet customizes your chart of accounts to match your specific industry,
                  establishes foolproof automated bank rules, and integrates automated receipt processing so you never
                  lose another tax deduction again.
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
                      Flawless Ledger Accuracy
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Zero suspense account clutter and balanced trial balances.
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
                      10+ Hours Saved
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Eliminate manual data entry with OCR receipt capture.
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
                Xero Architecture
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                End-to-End Xero Setup, Optimization & Staff Training
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

        {/* ─── SECTION 2: REAL-TIME CLOUD VISIBILITY ─── */}
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
                  Mobile Freedom
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
                  Real-Time Financial Visibility From Any Device Anywhere
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Gone are the days of waiting until the end of the quarter to discover whether your business made a
                  profit. With Taxnet&apos;s Xero cloud deployment, you open the app on your phone, tablet, or laptop
                  and immediately view live cash balances, real-time debtor lists, and upcoming tax liabilities.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We configure online invoice payment buttons (credit card, Apple Pay, direct debit via Stripe/GoCardless)
                  so your customers pay with a single click, slashing your average payment collection time from 30+ days
                  down to under 48 hours.
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
                  Upgrade to Xero With Taxnet →
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
                  alt="Taxnet accountant reviewing real-time Xero financial reports and KPIs with Melbourne business client"
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
                Xero Guidance
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
          serviceName="Xero Cloud Setup & Migration"
          title="Elevate Your Business With Xero"
          subtitle="Speak with our certified Xero Platinum Partners in Melbourne to architect a clean ledger, automate bank feeds, and train your staff."
          submitButtonText="Book A Consultation"
        />
      </main>

      <Footer />
    </>
  );
}
