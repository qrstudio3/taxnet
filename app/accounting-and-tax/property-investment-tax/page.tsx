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
  title: "Property Investment Tax Accountants Melbourne | Negative Gearing & CGT | Taxnet",
  description:
    "Specialist property tax accountants in Melbourne for property investors and developers. Maximizing negative gearing, Division 43 depreciation, GST margin scheme, and CGT exemptions.",
  keywords: [
    "property tax accountant Melbourne",
    "negative gearing accountant Melbourne",
    "property depreciation schedule Melbourne",
    "CGT property investment accountant",
    "property developer GST margin scheme",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "building",
    title: "Negative Gearing & Cashflow Structuring",
    desc: "Offsetting mortgage interest, body corporate levies, insurance, and property management fees against your taxable personal or corporate earnings.",
  },
  {
    icon: "calculator",
    title: "Division 43 & 40 Tax Depreciation Schedules",
    desc: "Integrating certified quantity surveyor reports to unlock $5,000 to $15,000+ in annual non-cash capital works and plant depreciation deductions.",
  },
  {
    icon: "shield",
    title: "6-Year Temporary Absence CGT Exemption",
    desc: "Structuring primary residence conversions under Section 118-145 to earn rental income for up to 6 years with 100% tax-free capital growth.",
  },
  {
    icon: "percent",
    title: "Mixed-Purpose Loan & Contamination Audits",
    desc: "Untangling redrawn mortgages and equity loans to ensure interest deductions remain fully defensible against ATO investment audit scrutiny.",
  },
  {
    icon: "trend",
    title: "Property Development GST & Margin Scheme",
    desc: "Implementing the GST Margin Scheme on subdivisions and townhouse developments to calculate GST strictly on value added rather than total sale price.",
  },
  {
    icon: "scale",
    title: "Land Tax Threshold & Trust Structuring",
    desc: "Structuring acquisitions across individual names, unit trusts, and discretionary holdings to optimize state land tax threshold exemptions.",
  },
];

const FAQS = [
  {
    q: "What is the critical difference between immediate repairs and capital improvements?",
    a: "The ATO aggressively scrutinizes rental property repairs. An immediate repair restores an item to its original condition without changing its character (such as replacing broken roof tiles or servicing a hot water unit) and is 100% tax-deductible in the year incurred. A capital improvement enhances the asset beyond its original state (such as a full kitchen renovation or installing new timber flooring) and must be depreciated over multiple years under Division 43 or Division 40.",
  },
  {
    q: "Why do I need a Quantity Surveyor tax depreciation schedule?",
    a: "Unless your rental property was built decades ago, a professional tax depreciation report from an accredited quantity surveyor is the single most valuable tax deduction available. It allows you to write off the wear and tear on the building structure (Division 43 at 2.5% per year) and removable plant fixtures (Division 40), often delivering $8,000 to $15,000+ in non-cash deductions annually.",
  },
  {
    q: "How does the 6-year temporary absence rule work for Capital Gains Tax?",
    a: "If you move out of your primary home and rent it out, you can treat that property as your main residence for tax purposes for up to 6 years. If you sell within that 6-year window (and do not claim another property as your main residence simultaneously), the entire capital gain generated during the rental period remains 100% exempt from CGT.",
  },
  {
    q: "How does the GST Margin Scheme benefit property developers and subdividers?",
    a: "Standard property sales require developers to pay 1/11th of the total sale contract price to the ATO as GST. Under the Margin Scheme, GST is calculated solely on the margin between the purchase price (or valuation date) and the final sale price, drastically lowering the net GST payable and preserving project profitability.",
  },
  {
    q: "How can we structure our property portfolio to manage soaring Victoria Land Tax?",
    a: "The Victorian Government lowered the general land tax threshold to $50,000. Holding all properties in one individual name rapidly pushes you into higher progressive land tax brackets. We model asset distribution across distinct legal entities (such as separate discretionary trusts or company structures) to capture individual threshold exemptions where commercially appropriate.",
  },
];

export default function PropertyInvestmentTaxPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Property%20Investment%20Tax/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Property%20Investment%20Tax/Accountant_reviewing_documents_w_3463049f.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Property%20Investment%20Tax/Advisor_reviewing_property_with_7fb17636.jpg";

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
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span><Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Accounting & Tax</Link><span style={{ margin: "0 8px" }}>/</span><span style={{ color: "#C5A869" }}>Property Investment Tax</span>
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
              Property Investment Tax.{" "}<span style={{ background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Negative Gearing Mastery.</span>{" "}CGT Protection.
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
              Strategic depreciation schedules, interest deductibility, negative gearing optimization, and capital gains tax planning for investors.
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
                Review My Property Portfolio →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I have questions regarding property investment tax and negative gearing."
                label="Chat with a Property Tax Specialist"
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
                    alt="Taxnet property tax accountant reviewing rental investment documents and quantity surveyor report"
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
                    Deduction Maximization
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Legitimate Non-Cash Write-Offs
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
                  Investor Intelligence
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
                  Why Generalist Accountants Cost Property Investors Thousands
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  The ATO reports that 9 out of 10 individual rental property tax returns contain calculation errors.
                  Generalist tax preparers either claim initial repairs incorrectly—triggering audits and clawbacks—or worse,
                  fail to advise clients to obtain a quantity surveyor schedule, leaving tens of thousands in legitimate
                  depreciation unclaimed.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet specializes in Australian real estate tax law. We review every financing facility, claim full
                  borrowing cost amortizations, calculate Division 43 building deductions, and prepare seamless capital gains
                  clearance certificates for smooth settlement.
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
                      50% CGT Discount
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Halve your capital gains tax bill on properties held over 12 months.
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
                      Land Tax Shielding
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Entity ownership models that distribute state land tax thresholds.
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
                Property Tax Specialization
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Comprehensive Tax Advisory for Real Estate Investors & Developers
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
                  Capital Gains Defense
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
                  Optimizing the Cost Base Before You Divest
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Calculating Capital Gains Tax is never as simple as subtracting the purchase price from the sale price.
                  Under Section 110-25 of the Income Tax Assessment Act 1997, your property cost base includes five distinct
                  elements: acquisition costs, incidental costs, council rates and insurance (for non-income periods), capital
                  improvements, and title defence expenses.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet audits your historical documentation across the entire ownership lifecycle, maximizing cost-base
                  additions so your final net taxable capital gain is legally minimized.
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
                  Consult a Property Tax Specialist →
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
                  alt="Taxnet property tax advisor reviewing real estate investment contract and plans with client"
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
                Property Tax Knowledge
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
          serviceName="Property & Investment Tax"
          title="Optimize Your Property Portfolio Tax"
          subtitle="Stop leaving thousands in unclaimed depreciation on the table. Speak with our Melbourne property tax specialist accountants."
        />
      </main>

      <Footer />
    </>
  );
}

