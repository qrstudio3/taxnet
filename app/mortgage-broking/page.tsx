import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Mortgage Broking | Taxnet Business Consultants",
  description:
    "We compare loans from a range of lenders and do the legwork for you. Because we’re also your accountants, your loan fits your tax and financial plans.",
  keywords: [
    "mortgage broker Doncaster East",
    "home loans Melbourne",
    "first home buyer loan Melbourne",
    "refinancing mortgage broker",
    "business and equipment finance",
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
    title: "First Home Buyers",
    desc: "Guidance from pre-approval to settlement, including help with available grants and schemes.",
  },
  {
    icon: "home",
    title: "Next Home or Upgrading",
    desc: "Buying and selling at the right time, including bridging finance if you need it.",
  },
  {
    icon: "refresh",
    title: "Refinancing",
    desc: "A check of your current loan to see whether a better option suits you.",
  },
  {
    icon: "building",
    title: "Investment Property Loans",
    desc: "Loans structured with your tax position in mind.",
  },
  {
    icon: "tool",
    title: "Construction & Land Loans",
    desc: "Finance for building, knock-down rebuilds and land purchases.",
  },
  {
    icon: "car",
    title: "Business & Equipment Finance",
    desc: "Loans for business premises, vehicles and equipment.",
  },
];

export default function MortgageBrokingPage() {
  const heroImg =
    "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/hero.jpg";

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
              FBAA Accredited · Personal Service
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
              Mortgage Broking
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
              We compare loans from a range of lenders and do the legwork for you. Because we’re also your accountants, your loan fits your tax and financial plans.
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
                href="/calculator"
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
                <span>How much can I borrow?</span>
                <span className="btn-arrow">→</span>
              </Link>

              <Link
                href="/contact"
                className="playful-btn playful-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                <span>Book a Chat</span>
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
        <section id="services-list" style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <style>{`
            .taxnet-broking-card {
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
            .taxnet-broking-card:hover {
              transform: translateY(-4px);
              background-color: #0A0D0B !important;
              border-color: #0A0D0B !important;
              box-shadow: 0 16px 36px -8px rgba(10, 13, 11, 0.35), 0 0 0 1px rgba(197, 168, 105, 0.35) !important;
            }
            .taxnet-broking-card .service-icon-box {
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
            .taxnet-broking-card:hover .service-icon-box {
              background-color: rgba(197, 168, 105, 0.22) !important;
              color: #DFC386 !important;
              border-color: rgba(197, 168, 105, 0.45) !important;
              transform: scale(1.06);
            }
            .taxnet-broking-card .service-title {
              font-family: var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              font-size: 1.25rem;
              font-weight: 700;
              color: #0A0D0B;
              margin: 0;
              letter-spacing: -0.015em;
              line-height: 1.25;
              transition: color 240ms ease;
            }
            .taxnet-broking-card:hover .service-title {
              color: #FFFFFF !important;
            }
            .taxnet-broking-card .service-desc {
              color: #4B5563;
              font-size: 0.92rem;
              line-height: 1.65;
              margin: 0;
              transition: color 240ms ease;
            }
            .taxnet-broking-card:hover .service-desc {
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
                  className="taxnet-broking-card"
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
              Taxnet Business Consultants Pty Ltd (ACN 169 468 482 / Credit Representative Number 480328) has access to a panel of lenders through National Mortgage Brokers Pty Ltd., (ACN 093 874 376 / Australian Credit Licence 391209), which is a fully-owned subsidiary of Liberty Financial Pty Ltd (ACN 077 248 983 / Australian Credit Licence 286596). Taxnet Business Consultants Pty Ltd has access to products including those from Liberty Financial.
            </div>

            {/* ─── CALL TO ACTION BANNER ─── */}
            <div
              style={{
                marginTop: "2.5rem",
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
                See how much you could borrow, or book a chat.
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
                Explore repayments with our borrowing calculator or speak with our accredited brokers about your situation.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/calculator"
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
                  <span>How much can I borrow?</span>
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="playful-btn playful-btn-ghost"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    padding: "0.85rem 1.8rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  <span>Book a Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
        <BookkeepingContact
          serviceName="Mortgage Broking"
          title="Let’s Talk About Your Home Loan"
          subtitle="Book a chat and tell us what you need. There’s no cost for the first conversation."
        />
      </main>

      <Footer />
    </>
  );
}
