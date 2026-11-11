import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Mortgage Broking Melbourne | FBAA Accredited Brokers | Taxnet",
  description:
    "Accredited mortgage broking services in Melbourne. Compare 40+ Australian lenders for first homes, refinancing, investment property, and commercial loans.",
  keywords: [
    "mortgage broker Melbourne",
    "home loans Melbourne",
    "first home buyer loan Melbourne",
    "refinancing mortgage broker",
    "commercial business loans Melbourne",
    "FBAA accredited mortgage broker",
  ],
};

interface MortgageServiceItem {
  icon: BenefitIconType;
  title: string;
  desc: string;
}

const MORTGAGE_SERVICES: MortgageServiceItem[] = [
  {
    icon: "key",
    title: "Buying Your First Home",
    desc: "Step-by-step guidance from pre-approval to settlement. We help you understand deposit requirements and government support schemes.",
  },
  {
    icon: "home",
    title: "Buying Your Next Home",
    desc: "Using the equity in your current property to upsize or relocate, coordinating finance so your purchase and sale move in sync.",
  },
  {
    icon: "refresh",
    title: "Refinancing & Debt Consolidation",
    desc: "Comparing your current loan against 40+ lenders to explore better features and consolidate multiple debts into one simple repayment.",
  },
  {
    icon: "building",
    title: "Investment Property Loans",
    desc: "Structuring your investment loans with stand-alone security, integrated directly with your overall tax and accounting plan.",
  },
  {
    icon: "tool",
    title: "Land & Construction Loans",
    desc: "Progressive payment finance for vacant land purchases, knockdown-rebuilds, and builder construction contracts.",
  },
  {
    icon: "briefcase",
    title: "Business & Commercial Loans",
    desc: "Commercial mortgages, working capital facilities, and business borrowing structured to match your cash flow.",
  },
  {
    icon: "car",
    title: "Personal, Car & Equipment Finance",
    desc: "Chattel mortgages, novated car leases, and equipment finance to secure business assets while keeping cash reserves intact.",
  },
  {
    icon: "clock",
    title: "Bridging Loans",
    desc: "Short-term transition finance to help you purchase your next home before your existing home is sold.",
  },
];

const FAQS = [
  {
    q: "Why should I use a mortgage broker instead of going directly to my bank?",
    a: "A single bank can only offer you their own loans. We compare options from more than 40 Australian banks and lenders to find the right loan structure for your situation.",
  },
  {
    q: "How much does your mortgage broking service cost?",
    a: "Our residential mortgage broking services are provided at no direct charge to you. The lender pays us an industry-standard commission after your loan settles.",
  },
  {
    q: "How does having an accountant on your team help with my loan?",
    a: "If you are self-employed or have a family trust, lenders can find financial accounts complex. Our accountants make sure your figures are presented clearly to lenders.",
  },
  {
    q: "How long does loan pre-approval take?",
    a: "Pre-approval usually takes between 2 to 5 business days once your complete paperwork is submitted. Turnaround times vary depending on the lender.",
  },
  {
    q: "What deposit do I need to buy a home?",
    a: "A 20% deposit avoids Lenders Mortgage Insurance. However, eligible buyers can often purchase with lower deposits through government schemes or existing home equity.",
  },
];

export default function MortgageBrokingPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/hero.jpg";

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
              <span style={{ color: "#C5A869" }}>Mortgage Broking</span>
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
              FBAA Accredited · 40+ Australian Lenders
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
              Mortgage Broking & Lending
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
              We compare loans from over 40 banks and lenders to find the right loan structure for your purchase, refinancing, or business needs.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
              <Link
                href="/calculator"
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
                Borrowing Calculator →
              </Link>

              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                Book a Chat
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
                Lending Solutions
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
                Clear loan options tailored to your purchase timeline, personal goals, and cash flow.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {MORTGAGE_SERVICES.map((srv, idx) => (
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

            {/* Credit Disclosure Callout Box */}
            <div
              style={{
                marginTop: "3.5rem",
                padding: "1.5rem 1.75rem",
                backgroundColor: "#F9F9F6",
                borderRadius: "12px",
                border: "1px solid rgba(197, 168, 105, 0.35)",
                fontSize: "0.82rem",
                color: "#4B5563",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#0A0D0B" }}>Australian Credit Licence & Credit Disclosure:</strong>{" "}
              Mortgage broking and credit assistance services are provided by Taxnet Business Consultants in accordance with the National Consumer Credit Protection Act 2009. Credit Representative / Australian Credit Licence details: [Details to be supplied] · FBAA Accredited.
            </div>

            {/* Bottom Call to Action */}
            <div
              style={{
                marginTop: "2.5rem",
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
                Estimate Your Borrowing Power Today
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto 1.5rem", fontSize: "0.92rem" }}>
                Use our borrowing calculator to explore repayments and borrowing capacity, or book a consultation with our broking team.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/calculator"
                  style={{
                    backgroundColor: "#C5A869",
                    color: "#0A0D0B",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    padding: "0.8rem 1.8rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  Open Borrowing Calculator →
                </Link>
                <Link
                  href="/contact"
                  style={{
                    backgroundColor: "transparent",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    padding: "0.8rem 1.8rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  Book a Chat
                </Link>
              </div>
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
          serviceName="Mortgage Broking"
          title="Speak With Our Finance Team"
          subtitle="Connect with our accredited mortgage brokers in Doncaster East. Available in person, over video, or by phone."
        />
      </main>

      <Footer />
    </>
  );
}
