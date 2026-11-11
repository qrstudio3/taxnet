import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Accounting & Tax Services Melbourne | Taxnet Business Consultants",
  description:
    "Proactive accounting and taxation services for Australian businesses, property investors, and individuals. Tax planning, compliance, and registered tax agents in Doncaster East.",
  keywords: [
    "business accountant Melbourne",
    "tax agent Melbourne",
    "tax planning Doncaster East",
    "company tax return Melbourne",
    "SMSF tax return Melbourne",
    "property tax accountant Melbourne",
  ],
};

interface AccountingServiceItem {
  icon: BenefitIconType;
  title: string;
  desc: string;
}

const ACCOUNTING_SERVICES: AccountingServiceItem[] = [
  {
    icon: "chart",
    title: "Full Scope Business Accounting",
    desc: "Complete year-end financial statements, profit and loss reviews, and regular ledger oversight for Australian companies, trusts, and sole traders.",
  },
  {
    icon: "calculator",
    title: "Tax Planning & Structuring",
    desc: "We review your position before 30 June and help you structure things properly, so there are no surprises at tax time.",
  },
  {
    icon: "percent",
    title: "GST & BAS Preparation",
    desc: "Accurate Business Activity Statement preparation and input tax credit claims lodged on schedule with the ATO.",
  },
  {
    icon: "document",
    title: "Individual Tax Returns",
    desc: "Tailored returns for professionals, investors, and contractors, ensuring all allowable deductions and investment earnings are properly reported.",
  },
  {
    icon: "shield",
    title: "Super Fund Tax Returns (SMSF)",
    desc: "Self-Managed Superannuation Fund compliance, annual financial accounts preparation, and independent audit coordination.",
  },
  {
    icon: "trend",
    title: "Strategic Business Advice",
    desc: "Practical commercial guidance, cash flow reviews, and financial planning to support your business decisions.",
  },
  {
    icon: "building",
    title: "Company & ASIC Services",
    desc: "Company incorporations, registered office address management, annual ASIC review lodgements, and corporate changes.",
  },
  {
    icon: "scale",
    title: "Fringe Benefits Tax (FBT)",
    desc: "FBT return lodgements, salary packaging reviews, and compliant perk structuring for employers.",
  },
  {
    icon: "bank",
    title: "Property & Investment Tax",
    desc: "Rental property schedules, depreciation claims, and capital gains calculations structured properly for property owners.",
  },
];

const FAQS = [
  {
    q: "How does Taxnet differ from traditional accounting firms?",
    a: "Traditional accountants only look backward once a year at tax time. We stay in touch throughout the year and review your position before 30 June, so there are no surprises.",
  },
  {
    q: "Where are your accountants based?",
    a: "Our team is based at Suite 6, 861 Doncaster Road, Doncaster East. We meet clients in person, over video, or by phone across Melbourne's eastern suburbs and Australia.",
  },
  {
    q: "Do you offer agreed pricing?",
    a: "Yes. We offer transparent agreed pricing based on your entity structure and requirements, so you always have clear fee certainty.",
  },
  {
    q: "How do you manage the switch from our previous accountant?",
    a: "We handle the entire handover directly. We contact your previous firm for ethical clearance, retrieve past records, and ensure a smooth transition with zero fuss.",
  },
  {
    q: "Can you help if we have overdue lodgements?",
    a: "Yes. As registered tax agents, we work with the ATO on your behalf to bring your lodgements up to date in a calm, orderly manner.",
  },
];

export default function AccountingAndTaxPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/hero.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "72vh",
            backgroundColor: "#0A0D0B",
            display: "flex",
            alignItems: "center",
            paddingTop: "140px",
            paddingBottom: "4.5rem",
            overflow: "hidden",
          }}
        >
          <CategoryHeroParallax heroImg={heroImg} />

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
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Accounting & Tax</span>
            </nav>

            <span
              style={{
                display: "inline-block",
                color: "#C5A869",
                fontWeight: 700,
                fontSize: "0.82rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Big-firm expertise · Personal service
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                maxWidth: "860px",
                marginBottom: "1.25rem",
              }}
            >
              Accounting & Tax Services
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.82)",
                maxWidth: "640px",
                marginBottom: "2.25rem",
              }}
            >
              We handle your tax returns, financial statements, and business compliance with precision and care. Practical advice without confusing jargon.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#C5A869",
                  color: "#0A0D0B",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(197, 168, 105, 0.4)",
                  transition: "all 180ms ease",
                }}
              >
                Book a Consultation →
              </Link>

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

        {/* ─── SERVICES LIST (Single Page, No Sub-Pages) ─── */}
        <section id="services-list" style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Services We Offer
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                What We Offer
              </h2>
              <p style={{ color: "#55645B", maxWidth: "620px", margin: "0.75rem auto 0", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Clear, itemised services designed to give you certainty, compliance, and peace of mind at tax time.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {ACCOUNTING_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.75rem",
                    backgroundColor: "#F9F9F6",
                    borderRadius: "14px",
                    border: "1px solid #E2E8E4",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          backgroundColor: "rgba(197, 168, 105, 0.15)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <BookkeepingBenefitIcon type={srv.icon} />
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#0A0D0B",
                          margin: 0,
                        }}
                      >
                        {srv.title}
                      </h3>
                    </div>

                    <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div
              style={{
                marginTop: "3.5rem",
                textAlign: "center",
                padding: "2.5rem 1.5rem",
                backgroundColor: "#0A0D0B",
                borderRadius: "16px",
                color: "#FFFFFF",
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "1.75rem",
                  color: "#FFFFFF",
                  marginBottom: "0.5rem",
                }}
              >
                Need Help With Your Accounting or Tax?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto 1.5rem", fontSize: "0.92rem" }}>
                Speak with our registered tax accountants in Doncaster East. We will review your situation and guide you forward.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  backgroundColor: "#C5A869",
                  color: "#0A0D0B",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  padding: "0.8rem 1.8rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Book a Chat →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQS SECTION ─── */}
        <section style={{ padding: "4.5rem 0", backgroundColor: "#F9F9F6", borderTop: "1px solid #E5ECE7" }}>
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
                Common Questions
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    padding: "1.5rem",
                    border: "1px solid #E2E8E4",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                  }}
                >
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0A0D0B", marginBottom: "0.5rem" }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
        <BookkeepingContact
          serviceName="Accounting & Tax"
          title="Schedule Your Accounting Consultation"
          subtitle="Speak with our registered tax accountants in Doncaster East. Available in person, over video, or by phone."
        />
      </main>

      <Footer />
    </>
  );
}
