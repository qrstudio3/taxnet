import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Bookkeeping Services Melbourne | Xero, MYOB & QuickBooks | Taxnet",
  description:
    "Tailored bookkeeping services for Australian businesses. Bank reconciliations, payroll, invoicing, and cloud accounting in Doncaster East.",
  keywords: [
    "bookkeeping services Melbourne",
    "bookkeeper Doncaster East",
    "small business bookkeeping",
    "Xero bookkeeper Melbourne",
    "MYOB bookkeeping",
    "payroll services Melbourne",
  ],
};

interface BookkeepingServiceItem {
  icon: BenefitIconType;
  title: string;
  desc: string;
}

const BOOKKEEPING_SERVICES: BookkeepingServiceItem[] = [
  {
    icon: "briefcase",
    title: "Small Business Bookkeeping",
    desc: "Day-to-day transaction coding, expense tracking, and regular reconciliations keeping your business ledger accurate and up to date.",
  },
  {
    icon: "calculator",
    title: "Bank Reconciliation & BAS-Ready Records",
    desc: "Prompt bank feed matching and balance sheet reviews so your financial records are always balanced and ready for BAS lodgement.",
  },
  {
    icon: "clock",
    title: "Payroll & Superannuation Compliance",
    desc: "Timely pay runs, Single Touch Payroll (STP Phase 2) reporting, and superannuation clearing house filings to keep your staff paid on schedule.",
  },
  {
    icon: "card",
    title: "Invoicing & Debtor Management",
    desc: "Digital invoice templates, online payment links, and polite automated reminders to help you collect customer payments promptly.",
  },
  {
    icon: "coin",
    title: "Accounts Payable & Supplier Bills",
    desc: "Systematic receipt capture, supplier bill approvals, and organized payables tracking to maintain positive vendor relationships.",
  },
  {
    icon: "trend",
    title: "Budgeting & Cash Flow Forecasting",
    desc: "Rolling cash flow forecasts and practical variance tracking so you have clear visibility over upcoming cash runway.",
  },
  {
    icon: "cloud",
    title: "Cloud Accounting Setup & Migration",
    desc: "Setup and transition to Xero, MYOB, or QuickBooks, including chart of accounts customization and staff training.",
  },
];

const FAQS = [
  {
    q: "How does Taxnet differ from standard freelance bookkeepers?",
    a: "Our bookkeeping team works directly alongside our registered tax accountants. Your files are maintained with tax season and compliance in mind from day one.",
  },
  {
    q: "Where is your team based?",
    a: "Our team is based at Suite 6, 861 Doncaster Road, Doncaster East. You can call, email, or visit our office for in-person meetings.",
  },
  {
    q: "How do we switch from our previous bookkeeper?",
    a: "We manage the handover process smoothly. We contact your previous firm, transfer software access, and review your historical ledgers.",
  },
  {
    q: "Which cloud accounting software do you support?",
    a: "We fully support Xero, MYOB, and QuickBooks Online. We also assist with receipt capture tools like Dext and Stripe integrations.",
  },
];

export default function BookkeepingPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/hero.jpg";

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
              <span style={{ color: "#C5A869" }}>Bookkeeping</span>
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
              Certified Xero Gold Partner · MYOB · QuickBooks
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
              Bookkeeping & Payroll Services
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
              Clean accounts, prompt bank reconciliations, and reliable payroll processing. We keep your business numbers accurate so you can focus on running your business.
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

        {/* ─── SOFTWARE WE USE ROW (Xero, MYOB & QuickBooks) ─── */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E5ECE7",
            padding: "2.75rem 0",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <span
                style={{
                  color: "#6B7280",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Platforms We Support & Integrate
              </span>
            </div>

            {/* Single Row of 3 Platforms */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
                alignItems: "stretch",
              }}
            >
              {/* Xero Card */}
              <div
                style={{
                  padding: "1.5rem 1.75rem",
                  borderRadius: "12px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: "6px",
                  }}
                >
                  <Image
                    src="/software-logo/xero.webp"
                    alt="Xero Logo"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                    Xero
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#6B7280" }}>
                    Gold Champion Partner · Setup & migration
                  </p>
                </div>
              </div>

              {/* MYOB Card */}
              <div
                style={{
                  padding: "1.5rem 1.75rem",
                  borderRadius: "12px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: "6px",
                  }}
                >
                  <Image
                    src="/software-logo/myob.webp"
                    alt="MYOB Logo"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                    MYOB
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#6B7280" }}>
                    Certified Partner · Business & payroll support
                  </p>
                </div>
              </div>

              {/* QuickBooks Online Card */}
              <div
                style={{
                  padding: "1.5rem 1.75rem",
                  borderRadius: "12px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    padding: "6px",
                  }}
                >
                  <Image
                    src="/software-logo/quickbooks.webp"
                    alt="QuickBooks Online Logo"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                    QuickBooks Online
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#6B7280" }}>
                    Certified ProAdvisor · Mobile invoicing & setup
                  </p>
                </div>
              </div>
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
                Bookkeeping Solutions
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
                Clear bookkeeping services to give you accurate books, timely reporting, and effortless tax handovers.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {BOOKKEEPING_SERVICES.map((srv, idx) => (
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
                Looking for Dependable Bookkeeping?
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto 1.5rem", fontSize: "0.92rem" }}>
                Speak with our bookkeeping team in Doncaster East to discuss your transaction volume and software needs.
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
                Book a Consultation →
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
          serviceName="Bookkeeping"
          title="Discuss Your Bookkeeping Needs"
          subtitle="Speak with our bookkeeping and cloud accounting team in Doncaster East. Available in person, over video, or by phone."
        />
      </main>

      <Footer />
    </>
  );
}
