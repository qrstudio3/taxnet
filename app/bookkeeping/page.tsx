import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Bookkeeping | Taxnet Business Consultants",
  description:
    "Up-to-date books make everything easier, from your BAS to tax time to applying for a loan. We take care of it so you can focus on your business.",
  keywords: [
    "bookkeeping Melbourne",
    "bookkeeper Doncaster East",
    "small business bookkeeping",
    "payroll services Melbourne",
    "Xero bookkeeper Melbourne",
    "MYOB bookkeeping",
    "cloud accounting setup",
  ],
};

interface BookkeepingServiceItem {
  icon: BenefitIconType;
  title: string;
  desc: string;
}

const BOOKKEEPING_SERVICES: BookkeepingServiceItem[] = [
  {
    icon: "calculator",
    title: "Bookkeeping",
    desc: "Regular data entry and reconciliation, so your records are always current.",
  },
  {
    icon: "clock",
    title: "Payroll",
    desc: "Pay runs, Single Touch Payroll reporting and super, done on time.",
  },
  {
    icon: "card",
    title: "Accounts Payable & Receivable",
    desc: "Keeping track of bills and invoices so you get paid and pay on time.",
  },
  {
    icon: "trend",
    title: "Cash Flow & Budgeting",
    desc: "Simple reports that show where your money is going.",
  },
  {
    icon: "cloud",
    title: "Software Set-Up",
    desc: "Getting you started on cloud accounting, or moving you across from another system.",
  },
];

export default function BookkeepingPage() {
  const heroImg =
    "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/hero.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "68vh",
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
            <nav
              style={{
                marginBottom: "1.25rem",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <Link
                href="/"
                style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
              >
                Home
              </Link>
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
              Xero Gold Partner · MYOB · QuickBooks
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
              Bookkeeping
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "640px",
                marginBottom: "2.25rem",
              }}
            >
              Up-to-date books make everything easier, from your BAS to tax time to applying for a loan. We take care of it so you can focus on your business.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Link
                href="/contact"
                className="playful-btn playful-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Book a Chat</span>
                <span className="btn-arrow">→</span>
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

        {/* ─── SERVICES GRID (Itemised Services We Offer) ─── */}
        <section id="services-list" style={{ padding: "5rem 0 3.5rem", backgroundColor: "#FFFFFF" }}>
          <style>{`
            .taxnet-bookkeeping-card {
              display: flex;
              flex-direction: column;
              justifyContent: space-between;
              padding: 2rem 1.75rem;
              background-color: #F9F9F6;
              border-radius: 14px;
              border: 1px solid #E2E8E4;
              box-shadow: 0 2px 8px rgba(0,0,0,0.03);
              transition: all 280ms cubic-bezier(0.16, 1, 0.3, 1);
              cursor: default;
            }
            .taxnet-bookkeeping-card:hover {
              transform: translateY(-4px);
              background-color: #0A0D0B !important;
              border-color: #0A0D0B !important;
              box-shadow: 0 16px 36px -8px rgba(10, 13, 11, 0.35), 0 0 0 1px rgba(197, 168, 105, 0.35) !important;
            }
            .taxnet-bookkeeping-card .service-icon-box {
              width: 44px;
              height: 44px;
              border-radius: 10px;
              background-color: rgba(197, 168, 105, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #8A7040;
              flex-shrink: 0;
              border: 1px solid transparent;
              transition: all 260ms ease;
            }
            .taxnet-bookkeeping-card:hover .service-icon-box {
              background-color: rgba(197, 168, 105, 0.22) !important;
              color: #DFC386 !important;
              border-color: rgba(197, 168, 105, 0.45) !important;
              transform: scale(1.06);
            }
            .taxnet-bookkeeping-card .service-title {
              font-family: var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              font-size: 1.25rem;
              font-weight: 700;
              color: #0A0D0B;
              margin: 0;
              letter-spacing: -0.015em;
              line-height: 1.25;
              transition: color 240ms ease;
            }
            .taxnet-bookkeeping-card:hover .service-title {
              color: #FFFFFF !important;
            }
            .taxnet-bookkeeping-card .service-desc {
              color: #4B5563;
              font-size: 0.92rem;
              line-height: 1.65;
              margin: 0;
              transition: color 240ms ease;
            }
            .taxnet-bookkeeping-card:hover .service-desc {
              color: rgba(255, 255, 255, 0.82) !important;
            }
          `}</style>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#C5A869",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
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
              <p
                style={{
                  color: "#55645B",
                  maxWidth: "620px",
                  margin: "0.75rem auto 0",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
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
                  className="taxnet-bookkeeping-card"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="service-icon-box">
                        <BookkeepingBenefitIcon type={srv.icon} />
                      </div>
                      <h3 className="service-title">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="service-desc">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SOFTWARE WE WORK WITH (Xero, MYOB & QuickBooks) ─── */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E5ECE7",
            padding: "3.5rem 0 5rem",
          }}
        >
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span
                style={{
                  color: "#C5A869",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Supported Platforms
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  color: "#0A0D0B",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Software we work with
              </h3>
            </div>

            {/* Single Row of 3 Platforms */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                alignItems: "stretch",
              }}
            >
              {/* Xero Card */}
              <div
                style={{
                  padding: "1.6rem 1.75rem",
                  borderRadius: "14px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "12px",
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
                    width={42}
                    height={42}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 3px 0", fontSize: "1.1rem", fontWeight: 700, color: "#0A0D0B" }}>
                    Xero
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.4 }}>
                    Xero Gold Partner · Setup &amp; migration
                  </p>
                </div>
              </div>

              {/* MYOB Card */}
              <div
                style={{
                  padding: "1.6rem 1.75rem",
                  borderRadius: "14px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "12px",
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
                    width={42}
                    height={42}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 3px 0", fontSize: "1.1rem", fontWeight: 700, color: "#0A0D0B" }}>
                    MYOB
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.4 }}>
                    Business &amp; payroll support
                  </p>
                </div>
              </div>

              {/* QuickBooks Online Card */}
              <div
                style={{
                  padding: "1.6rem 1.75rem",
                  borderRadius: "14px",
                  backgroundColor: "#F9F9F6",
                  border: "1px solid #E2E8E4",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.1rem",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "12px",
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
                    width={42}
                    height={42}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 3px 0", fontSize: "1.1rem", fontWeight: 700, color: "#0A0D0B" }}>
                    QuickBooks Online
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.4 }}>
                    Mobile invoicing &amp; ledger setup
                  </p>
                </div>
              </div>
            </div>

            {/* ─── CALL TO ACTION BANNER ─── */}
            <div
              style={{
                marginTop: "3.5rem",
                textAlign: "center",
                padding: "2.75rem 2rem",
                backgroundColor: "#0A0D0B",
                borderRadius: "16px",
                color: "#FFFFFF",
                border: "1px solid rgba(197, 168, 105, 0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  fontWeight: 400,
                }}
              >
                Want your books off your plate?
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "540px",
                  margin: "0 auto 1.75rem",
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                }}
              >
                Book a chat with our bookkeeping team and tell us what you need.
              </p>
              <Link
                href="/contact"
                className="playful-btn playful-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  padding: "0.85rem 2rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Book a Chat</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
        <BookkeepingContact
          serviceName="Bookkeeping"
          title="Let’s Talk About Your Bookkeeping"
          subtitle="Book a chat and tell us what you need. There’s no cost for the first conversation."
        />
      </main>

      <Footer />
    </>
  );
}
