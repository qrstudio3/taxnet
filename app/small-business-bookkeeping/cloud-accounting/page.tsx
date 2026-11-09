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
  title: "Cloud Accounting Set-Up & Xero Migration Melbourne | Taxnet",
  description:
    "Seamless cloud accounting setup and migrations for Australian businesses. Certified Xero Platinum & MYOB partners managing data transitions with zero downtime.",
  keywords: [
    "cloud accounting setup Melbourne",
    "Xero migration services",
    "MYOB to Xero conversion",
    "cloud bookkeeping software setup",
    "Xero Platinum partner Melbourne",
  ],
};

const CLOUD_PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "cloud",
    title: "Zero Data-Loss Migration",
    desc: "Complete transfer of historical general ledgers, trial balances, customer/supplier lists, and inventory balances from old systems to Xero or MYOB.",
  },
  {
    icon: "bank",
    title: "Automated Live Bank Feeds",
    desc: "Direct integration with major Australian banks and credit unions so daily transactions flow in automatically with military-grade encryption.",
  },
  {
    icon: "chart",
    title: "Customized Chart of Accounts",
    desc: "Engineered specifically for your industry (hospitality, trades, medical, legal) to give you meaningful, granular profit and loss reporting.",
  },
  {
    icon: "mobile",
    title: "Paperless Receipt Automation",
    desc: "Configuration of Dext Prepare or Hubdoc so your team can snap receipts with smartphone cameras and never lose a tax invoice again.",
  },
  {
    icon: "sync",
    title: "Industry Add-On Integration",
    desc: "Connect your POS, job management, or e-commerce platforms (Shopify, Stripe, Square, Tradify, Deputy) directly into your accounting engine.",
  },
  {
    icon: "award",
    title: "1-on-1 Practical Training",
    desc: "Personalized coaching sessions for you and your staff so you can create professional quotes, invoices, and run payroll with total confidence.",
  },
];

const FAQS = [
  {
    q: "How long does a full cloud migration to Xero take?",
    a: "A typical migration takes between 3 to 7 business days depending on the volume of historical data and inventory. We schedule transitions to ensure zero downtime for your daily billing and invoicing.",
  },
  {
    q: "Will we lose our historical financial data from previous years?",
    a: "No. We extract and convert your historical financial balances, comparative reports, and open invoices so your prior-year benchmarks remain accessible.",
  },
  {
    q: "Do you offer discounts on accounting software subscriptions?",
    a: "Yes. As accredited Xero Platinum Champion Partners, we provide exclusive wholesale software packaging and multi-organisation discounts not available to retail subscribers.",
  },
  {
    q: "Can you train my office staff on how to use Xero or MYOB?",
    a: "Yes. Every cloud setup package includes hands-on virtual or in-person Melbourne training sessions tailored to your exact daily operational workflow.",
  },
];

export default function CloudAccountingPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Cloud%20Accounting%20Set-Up/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Bookkeeping/Cloud%20Accounting%20Set-Up/Man_configuring_accounting_software_abd647bf.jpg";
  const bodyImg2 = "/taxnet-categories-images/Bookkeeping/Cloud%20Accounting%20Set-Up/Man_reviewing_financials_on_laptop_81b34cc9.jpg";

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
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span><Link href="/small-business-bookkeeping" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Small Business Bookkeeping</Link><span style={{ margin: "0 8px" }}>/</span><span style={{ color: "#C5A869" }}>Cloud Accounting</span>
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
              Modernize Your Accounting.{" "}<span style={{ background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Seamless Cloud Migration.</span>{" "}Zero Downtime.
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
              Full-scope cloud migrations to Xero, MYOB, or QuickBooks—preserving historical records, automating bank feeds, and team training.
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
                Start My Cloud Migration →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss cloud accounting setup and migration."
                label="Chat with a Cloud Specialist"
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
                    alt="Taxnet technician configuring accounting software and bank feeds"
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
                    Expert Setup
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Xero & MYOB Certified
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
                  Escape Legacy Software
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
                  Why Old Accounting Tools Are Costing You Thousands Every Month
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Desktop programs require constant manual backups, lock your files onto a single computer in the
                  office, and cannot connect to live bank feeds. When an office computer crashes or an update fails,
                  vital records can vanish.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  By moving to the cloud with Taxnet, you gain 24/7 access to your financial performance from any phone,
                  tablet, or laptop. Your bank feeds update automatically every midnight, invoices can be sent from job
                  sites in seconds, and your accountants collaborate in real-time.
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
                      Access Anywhere
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Send invoices and check cash balances from your smartphone.
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
                      Zero Server Costs
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Automated bank-grade security and daily cloud backups.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 CLOUD PILLARS ─── */}
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
                Seamless Transition
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Complete Architecture for a Modern Cloud Back-Office
              </h2>
            </div>

            <AutoSlidingCards items={CLOUD_PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: LIVE METRICS & TRAINING ─── */}
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
                  Custom Training
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
                  We Don&apos;t Just Set It Up. We Teach Your Team How to Win With It.
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Software is only as good as the team operating it. That&apos;s why every Taxnet cloud setup includes
                  tailored video walkthroughs, cheat sheets, and 1-on-1 coaching for your administration and sales staff.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  We walk you through quotes, bill scanning, inventory movements, and payroll until you feel 100%
                  comfortable and empowered.
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
                  Schedule a Migration Consultation →
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
                  alt="Taxnet manager reviewing live cloud financials on laptop"
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
                Migration Facts
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
          serviceName="Cloud Accounting Setup & Migration"
          submitButtonText="Book A Consultation"
          title="Move Your Business to the Cloud Seamlessly"
          subtitle="Stop wrestling with desktop accounting. Let our Melbourne Xero Platinum specialists handle your migration with zero data loss and guaranteed peace of mind."
        />
      </main>

      <Footer />
    </>
  );
}

