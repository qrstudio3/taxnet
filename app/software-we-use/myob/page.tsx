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
  title: "MYOB Certified Practice Partner Melbourne | Setup & Migration | TaxNet",
  description:
    "Expert MYOB accounting setup and cloud migration in Melbourne. Desktop v19 to cloud conversions, complex award payroll, advanced inventory, and job costing.",
  keywords: [
    "MYOB certified partner Melbourne",
    "MYOB cloud migration Melbourne",
    "upgrade MYOB desktop to cloud",
    "MYOB award payroll specialist",
    "MYOB job costing Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "cloud",
    title: "Desktop to Cloud Modernization",
    desc: "Migrate legacy AccountRight v19, Premier, or Enterprise files to MYOB Business Cloud with historical transaction verification and zero downtime.",
  },
  {
    icon: "award",
    title: "Complex Modern Award Payroll",
    desc: "Configure intricate Australian award conditions, penalty rates, overtime multipliers, and automated superannuation with 100% STP Phase 2 compliance.",
  },
  {
    icon: "tool",
    title: "Multi-Tiered Inventory Management",
    desc: "Track stock across multiple warehouses, manage bill of materials (BOM), create assembly kits, and set automated reorder points to prevent stockouts.",
  },
  {
    icon: "briefcase",
    title: "Real-Time Job Costing & Profitability",
    desc: "Allocate materials, labor hours, and subcontractor costs to specific client projects to identify your highest-margin service contracts.",
  },
  {
    icon: "sync",
    title: "Live Bank Feeds & BAS Automation",
    desc: "Set up direct daily bank feeds with automated GST classification and one-click electronic BAS lodgement directly to the Australian Taxation Office.",
  },
  {
    icon: "users",
    title: "Staff MYOB Training & Helpdesk",
    desc: "Empower your payroll officers and accounts team with practical Melbourne training sessions, tailored user manuals, and ongoing priority support.",
  },
];

const FAQS = [
  {
    q: "Why should we upgrade our older MYOB desktop software to the cloud?",
    a: "Older desktop versions (like AccountRight v19) lack Single Touch Payroll (STP) Phase 2 compliance, require manual software patches, risk catastrophic data loss on local hard drives, and prevent remote access. Upgrading to MYOB Business Cloud gives you bank-grade data security, automated daily bank feeds, ATO-compliant payroll, and multi-user access anywhere in the world.",
  },
  {
    q: "How does TaxNet manage the migration from desktop AccountRight to the cloud?",
    a: "We perform a comprehensive pre-migration file health check, purge obsolete accounts and duplicate cards, verify historical trial balance matching, and upload the file to MYOB Cloud. We balance bank reconciliation accounts and confirm opening balances before releasing the live environment to your team.",
  },
  {
    q: "Can MYOB handle complex Australian Modern Award wages and enterprise agreements?",
    a: "Yes. MYOB has one of the most powerful award payroll engines in Australia. TaxNet configures complex shift penalties, RDO accruals, meal allowances, tool allowances, and salary sacrifice arrangements, ensuring you never risk Fair Work underpayment compliance penalties.",
  },
  {
    q: "Is MYOB better suited for businesses with heavy inventory than other cloud platforms?",
    a: "Yes. For manufacturing, wholesale distribution, and multi-location retail businesses, MYOB's native inventory capabilities—including bill of materials, assembly items, serial tracking, and backorder management—are exceptionally robust and handle high transaction volumes without requiring expensive external inventory plugins.",
  },
  {
    q: "Do you offer ongoing MYOB bookkeeping and payroll support?",
    a: "Yes. In addition to initial setup and migration, TaxNet provides ongoing weekly, fortnightly, or monthly bookkeeping and payroll management in MYOB, guaranteeing all BAS, super, and payroll commitments are lodged on time.",
  },
];

export default function MyobSoftwarePage() {
  const heroImg = "/taxnet-categories-images/Software%20We%20Use/MYOB/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Software%20We%20Use/MYOB/Accountant_consulting_business_o_76bfb758.jpg";
  const bodyImg2 = "/taxnet-categories-images/Software%20We%20Use/MYOB/Accountant_reviewing_payroll_rec_bff1ecd9.jpg";

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
              <span style={{ color: "#C5A869" }}>MYOB</span>
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
              MYOB Business.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Enterprise Power.
              </span>{" "}
              Complex Award Payroll & Inventory.
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
              For businesses with intricate modern awards, multi-site warehouse inventory, and strict job costing needs,
              MYOB delivers unrivaled commercial depth. TaxNet handles desktop-to-cloud conversions and end-to-end ledger architecture.
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
                Migrate Your MYOB File to the Cloud →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I need MYOB setup, migration, or payroll consulting for my business."
                label="Chat with an MYOB Specialist"
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
                    alt="TaxNet accountant consulting with Australian business owner on MYOB cloud migration and inventory management"
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
                    Industrial Scale
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Multi-Site Inventory Power
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
                  Commercial Architecture
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
                  The Hidden Risk of Running Business Operations on Outdated Software
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Thousands of established Australian businesses still run on legacy desktop MYOB versions stored on a
                  single office PC. When that hard drive crashes, when a key payroll officer falls ill, or when the ATO
                  audits STP Phase 2 compliance, un-upgraded businesses face immediate operational paralysis.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet takes the pain out of moving to the cloud. We inspect your data file, purge corrupted historical
                  entries, balance your general ledger against historical tax returns, and transition your team to MYOB
                  Business Cloud with zero downtime.
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
                      Zero Data Corruption
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Thorough pre-migration audit guarantees accurate ledger history.
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
                      Fair Work Compliance
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Precision award conditions protect you against wage underpayment risks.
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
                MYOB Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Enterprise Functionality Configured for Real-World Operations
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

        {/* ─── SECTION 2: COMPLEX AWARD PAYROLL ─── */}
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
                  Payroll Excellence
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
                  Ironclad Single Touch Payroll & Superannuation Clearing
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Managing payroll across complex Australian enterprise awards is one of the highest legal liability
                  zones for directors. Inadvertently failing to pay overtime rates on weekend shifts or miscalculating
                  leave loading triggers severe penalties from the Fair Work Ombudsman.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet structures your MYOB payroll engine with customized pay items, superannuation guarantee rate
                  triggers, and automatic SuperStream clearing house integration. Every pay run is disaggregated to the
                  ATO with digital precision.
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
                  Book an MYOB Assessment Session →
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
                  alt="TaxNet payroll specialist reviewing MYOB payroll records and superannuation compliance reports"
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
                MYOB FAQ
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
          serviceName="MYOB Setup & Migration"
          title="Modernize Your Business With MYOB"
          subtitle="Speak with our certified MYOB Practice Specialists in Melbourne to plan a seamless cloud migration, configure complex awards, and optimize inventory."
        />
      </main>

      <Footer />
    </>
  );
}
