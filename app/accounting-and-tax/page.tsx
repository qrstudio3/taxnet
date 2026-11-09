import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import AutoSlidingCards from "@/app/components/AutoSlidingCards";

export const metadata: Metadata = {
  title: "Accounting & Tax Services Melbourne | CPA Certified Tax Accountants | Taxnet",
  description:
    "Proactive accounting and taxation services for Australian businesses, property investors, and individuals. Fixed-fee packages, legal tax minimization, and registered tax agents.",
  keywords: [
    "business accountant Melbourne",
    "tax agent Melbourne",
    "CPA Australia tax planning",
    "company tax return Melbourne",
    "SMSF tax return Melbourne",
    "property tax accountant Melbourne",
  ],
};

interface AccountingServiceItem {
  icon: BenefitIconType;
  title: string;
  href: string;
  desc: string;
}

const ACCOUNTING_SERVICES: AccountingServiceItem[] = [
  {
    icon: "chart",
    title: "Full Scope Business Accounting",
    href: "/accounting-and-tax/business-accounting",
    desc: "Complete year-end financial statements, quarterly management meetings, P&L analysis, and proactive ledger oversight for Australian companies, trusts, and sole traders.",
  },
  {
    icon: "calculator",
    title: "Tax Planning & Structuring",
    href: "/accounting-and-tax/tax-planning",
    desc: "Strategic pre-June 30 tax forecasting, discretionary trust distribution planning, Division 7A loan agreements, and legal minimization strategies to legally slash your tax liability.",
  },
  {
    icon: "percent",
    title: "GST & BAS Preparation",
    href: "/accounting-and-tax/gst-bas-preparation",
    desc: "Penny-perfect Business Activity Statement preparation, fuel tax credits, and maximum input tax credits lodged on-time by registered BAS and Tax Agents with zero penalties.",
  },
  {
    icon: "document",
    title: "Individual & Executive Tax Returns",
    href: "/accounting-and-tax/individual-tax-returns",
    desc: "Sophisticated tax preparation for executives, medical professionals, contractors, and investors. Maximizing work deductions, share portfolios, crypto CGT, and foreign income.",
  },
  {
    icon: "shield",
    title: "Super Fund Tax Returns (SMSF)",
    href: "/accounting-and-tax/super-fund-tax-returns",
    desc: "Complete Self-Managed Superannuation Fund compliance, annual financial accounts, independent audit coordination, and pension phase tax minimization under the SIS Act.",
  },
  {
    icon: "trend",
    title: "Strategic Business Advice",
    href: "/accounting-and-tax/business-advice",
    desc: "Executive Virtual CFO advisory, 3-way financial modeling, cash runway expansion, KPI tracking, and profit improvement strategies designed to grow enterprise value.",
  },
  {
    icon: "building",
    title: "Company & ASIC Secretarial Services",
    href: "/accounting-and-tax/company-asic-services",
    desc: "Company incorporations, registered office address management, annual ASIC review lodgements, solvency resolutions, and share registry transfers with zero compliance lapses.",
  },
  {
    icon: "scale",
    title: "Fringe Benefits Tax (FBT)",
    href: "/accounting-and-tax/fringe-benefits-tax",
    desc: "FBT return lodgements, salary packaging advisory, commercial motor vehicle exemptions, and associate loan structuring to eliminate punitive FBT liabilities.",
  },
  {
    icon: "bank",
    title: "Property & Investment Tax",
    href: "/accounting-and-tax/property-investment-tax",
    desc: "Negative gearing schedules, Division 43 building write-offs, capital gains tax (CGT) discount planning, and developer GST margin scheme advisory for property investors.",
  },
];

const FAQS = [
  {
    q: "How does Taxnet differ from traditional accounting firms?",
    a: "Traditional accountants only look backward once a year when tax is already due—when it is too late to change anything. Taxnet provides proactive, forward-looking advice. We meet before June 30 to structure your profits, optimize deductions, and implement legal tax minimization strategies before the financial year closes.",
  },
  {
    q: "Are all your tax accountants based in Melbourne?",
    a: "Yes. Our senior advisors, CPA partners, and registered tax agents are based in our Melbourne office at Suite 6, 861 Doncaster Road, Doncaster East. You can meet with us in person, over video, or via direct phone and WhatsApp channels.",
  },
  {
    q: "Do you offer fixed-fee accounting packages?",
    a: "Yes. All our business accounting packages are billed on transparent, flat monthly retainers based on your entity structure and transaction volume. You will never receive an unexpected invoice for answering day-to-day tax questions.",
  },
  {
    q: "How do you manage the transition from our previous accountant?",
    a: "We manage 100% of the handover seamlessly. We send professional ethical clearance letters to your previous firm, retrieve prior year tax returns, depreciation schedules, and software access with zero disruption to your daily operations.",
  },
  {
    q: "Can you help if we are facing an ATO audit or overdue lodgements?",
    a: "Absolutely. We are registered tax agents with direct ATO portal access. We negotiate payment arrangements, request remissions of General Interest Charges (GIC) and failure-to-lodge penalties, and defend your deductions during ATO reviews.",
  },
];

export default function AccountingAndTaxHubPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/hero.jpg";

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
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link><span style={{ margin: "0 8px" }}>/</span><span style={{ color: "#C5A869" }}>Accounting & Tax Solutions</span>
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
              Proactive Accounting.{" "}<span style={{ background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>Strategic Tax Minimization.</span>{" "}Audit-Proof Peace of Mind.
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
              Year-round proactive advisory by Melbourne CPA accountants to protect your assets, optimize profits, and keep more money in your business.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <a
                href="#services"
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
                Explore Accounting Services →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'd like to discuss accounting and tax services."
                label="Chat with a CPA Partner"
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

        {/* ─── SERVICES DIRECTORY AUTO-SLIDER ─── */}
        <section id="services" style={{ padding: "5.5rem 0", backgroundColor: "#F9F9F6" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
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
                Specialized Disciplines
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Explore Our Tailored Accounting & Taxation Capabilities
              </h2>
              <p style={{ color: "#55645B", maxWidth: "660px", margin: "0.75rem auto 0", fontSize: "0.95rem" }}>
                Whether you need strategic tax minimization for a family trust, audit-proof SMSF compliance, or high-growth
                business advisory, our Melbourne team has you covered.
              </p>
            </div>

            <AutoSlidingCards items={ACCOUNTING_SERVICES} />
          </div>
        </section>

        {/* ─── PLANS SECTION EMBEDDED ─── */}
        <PlansSection />

        {/* ─── DEDICATED FAQS ─── */}
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
                Clear Answers
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
          serviceName="Accounting & Taxation"
          submitButtonText="Book A Consultation"
          title="Book Your Confidential Accounting & Tax Consultation"
          subtitle="Speak with our Melbourne CPA team at our Doncaster East office. We'll evaluate your entity structure, uncover unclaimed deductions, and provide a transparent flat-fee proposal."
        />
      </main>

      <Footer />
    </>
  );
}

