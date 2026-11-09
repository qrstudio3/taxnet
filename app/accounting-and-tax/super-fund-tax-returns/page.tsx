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
  title: "SMSF Tax Returns & Compliance Melbourne | Self-Managed Super Accountants | Taxnet",
  description:
    "End-to-end Self-Managed Super Fund (SMSF) accounting, annual tax returns, and independent audit coordination in Melbourne. SIS Act compliance, pension phase advice, and property LRBAs.",
  keywords: [
    "SMSF tax return Melbourne",
    "self managed super fund accountant Melbourne",
    "SMSF audit coordination",
    "SMSF pension phase tax accountant",
    "SMSF property LRBA tax Melbourne",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "calculator",
    title: "Annual Financials & Member Statements",
    desc: "Preparation of operating statements, financial position sheets, member contribution statements, and investment market valuations.",
  },
  {
    icon: "shield",
    title: "Independent External Audit Management",
    desc: "Coordinating directly with ASIC-registered approved SMSF auditors, providing full workpapers to eliminate compliance contraventions.",
  },
  {
    icon: "percent",
    title: "Pension Phase & Actuarial Advisory",
    desc: "Structuring Account-Based Pensions and Transition to Retirement (TTR) income streams to unlock lawful 0% tax on fund investment earnings.",
  },
  {
    icon: "building",
    title: "Property & LRBA Borrowing Compliance",
    desc: "Accounting for residential and commercial real estate held via Limited Recourse Borrowing Arrangements (LRBAs) and custodian bare trusts.",
  },
  {
    icon: "document",
    title: "Trustee Minutes & Investment Strategies",
    desc: "Formulating compliant annual investment strategy reviews, liquidity ratio stress tests, and member life insurance considerations.",
  },
  {
    icon: "trend",
    title: "Contribution Cap & Balance Tracking",
    desc: "Real-time monitoring of concessional ($30,000) and non-concessional caps, carry-forward provisions, and the Transfer Balance Cap.",
  },
];

const FAQS = [
  {
    q: "What is the complete process for lodging an SMSF tax return with Taxnet?",
    a: "We collect bank statements, asset purchase contracts, dividend/distribution summaries, and expense records. We compile the complete annual financial statements, prepare member balance summaries, and submit the entire file to an independent ASIC-registered auditor. Once the audit report is signed without qualification, we electronically lodge the SMSF Annual Return (SAR) with the ATO.",
  },
  {
    q: "Why must every SMSF be audited by an independent auditor by law?",
    a: "Under the Superannuation Industry (Supervision) Act 1993 (SIS Act), every SMSF must undergo an annual financial and compliance audit by an independent auditor registered with ASIC. The accountant who compiles the books cannot audit the fund. Taxnet manages this entire process with our network of approved external auditors at competitive fixed rates.",
  },
  {
    q: "How does tax work inside an SMSF once members enter the retirement pension phase?",
    a: "In the accumulation phase, SMSF investment earnings are taxed at a low concessional rate of 15% (or 10% on discounted capital gains). Once members reach preservation age and start an account-based pension, earnings and capital gains on assets supporting that pension are taxed at 0% up to the Transfer Balance Cap limit ($1.9 million).",
  },
  {
    q: "Can our SMSF acquire commercial property and lease it back to our business?",
    a: "Yes. Unlike residential property, an SMSF can legally purchase business real property and lease it back to the trustees' trading business, provided the lease is on strict commercial arm's length terms, rent is paid on time at market valuation, and all SIS Act borrowing rules are adhered to.",
  },
  {
    q: "What happens if an SMSF commits a compliance breach?",
    a: "Minor technical breaches can often be rectified before audit completion. If an Auditor Contravention Report (ACR) is lodged, the ATO can issue administrative penalties, education directions, or in severe cases, declare the fund non-complying (which triggers a punitive 45% tax on fund assets). Taxnet actively audits records during preparation to prevent contraventions.",
  },
];

export default function SuperFundTaxReturnsPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Super%20Fund%20Tax%20Returns/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Super%20Fund%20Tax%20Returns/Accountant_meeting_with_couple_b956daa8.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Super%20Fund%20Tax%20Returns/Accountant_reviewing_financial_s_10a8f807.jpg";

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
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span><Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Accounting & Tax</Link><span style={{ margin: "0 8px" }}>/</span><span style={{ color: "#C5A869" }}>Super Fund Tax Returns</span>
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
              SMSF Tax & Compliance.{" "}<span style={{ background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Total Regulatory Rigour.</span>{" "}Maximum Wealth.
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
              Flawless annual financial statements, independent audit management, and compliant tax return lodgement for Self-Managed Super Funds.
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
                Book Your SMSF Review →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss our SMSF annual return and compliance audit."
                label="Chat with an SMSF Specialist"
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
                    alt="Taxnet senior SMSF accountant meeting with couple for retirement superannuation review"
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
                    Trustee Protection
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Zero Compliance Breaches
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
                  Fiduciary Security
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
                  The Heavy Fiduciary Burden of SMSF Trustee Compliance
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  The ATO holds SMSF trustees personally responsible for every transaction. From the strict Sole Purpose
                  Test and 5% in-house asset limits to Non-Arm&apos;s Length Income (NALI) rules taxed at 45%, inadvertent
                  mistakes can devastate a family&apos;s life savings.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet takes the administrative friction out of your hands. We keep your fund meticulously compliant,
                  manage market asset valuations, track the $1.9 million Transfer Balance Cap, and coordinate independent
                  audits with complete transparency.
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
                      0% Pension Tax
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Zero income tax on earnings once in the formal retirement phase.
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
                      Clean Audit Opinion
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Flawless audit workpapers that pass without contraventions.
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
                Comprehensive SMSF Scope
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Complete Superannuation Administration for High-Net-Worth Trustees
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
                  Generational Wealth Transfer
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
                  Estate Planning & Binding Death Benefit Nominations
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Superannuation does not automatically form part of your estate under an ordinary Will. Without a valid,
                  binding death benefit nomination (BDBN) and corporate trustee constitution review, death benefits can be
                  delayed or taxed heavily at up to 17% for non-dependants.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet reviews your trust deed, harmonizes death benefit directions, and implements strategies like
                  recontribution strategies to eliminate future anti-detriment or death benefit tax for adult beneficiaries.
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
                  Consult an SMSF Specialist →
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
                  alt="Taxnet SMSF accountant analyzing fund balance sheet and investment performance"
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
                SMSF Trustee FAQs
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
          serviceName="Super Fund Tax Returns (SMSF)"
          title="Safeguard Your Self-Managed Super Fund"
          subtitle="Ensure your SMSF meets all SIS Act requirements while optimizing tax in accumulation and retirement pension phases."
        />
      </main>

      <Footer />
    </>
  );
}

