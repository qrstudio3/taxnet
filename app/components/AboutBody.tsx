"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";

/* ─── DATA DEFINITIONS ─── */
const FIRM_MILESTONES = [
  {
    stage: "01",
    title: "The Foundation",
    desc: "Established on personal client relationships, thorough attention to detail, and word-of-mouth referrals across Victoria.",
  },
  {
    stage: "02",
    title: "Strategic Growth",
    desc: "Expanding our expertise in property tax and the medical sector.",
  },
  {
    stage: "03",
    title: "Complete Financial Partner",
    desc: "Unifying business tax accounting, cloud automation, cashflow forecasting, and residential/commercial lending under one roof.",
  },
  {
    stage: "04",
    title: "Multi-Generational Wealth",
    desc: "Structuring tax-effective family trusts, self-managed super funds (SMSF), and wealth-protection strategies for family enterprises.",
  },
];

const CORE_VALUES = [
  {
    num: "01",
    title: "Integrity & Trust",
    desc: "Long-term relationships built on honesty, confidentiality, and professional integrity.",
  },
  {
    num: "02",
    title: "Proactive Thinking",
    desc: "Forward-looking advisory that helps you anticipate tax savings, regulatory changes, and cashflow challenges well before year-end.",
  },
  {
    num: "03",
    title: "Beyond Compliance",
    desc: "Practical commercial guidance and debt-structuring strategies that drive sustainable revenue growth and enterprise asset value.",
  },
  {
    num: "04",
    title: "Personal Attention",
    desc: "Direct access to our team, with no call centres, offering responsive, friendly, and technically sound advice.",
  },
  {
    num: "05",
    title: "Continuous Excellence",
    desc: "Rigorous adherence to CPA Australia standards and public practice ethics, ensuring advice strictly aligns with current legislation.",
  },
  {
    num: "06",
    title: "Complete Alignment",
    desc: "Coordinating bookkeeping, corporate tax, and mortgage finance into one harmonised strategy for maximum wealth retention.",
  },
];

const SECTORS = [
  {
    id: "medical",
    name: "Medical & Healthcare",
    desc: "GPs, dental clinics, medical specialists, and pharmacy groups with equipment finance and service trust structures.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "trades",
    name: "Trades & Construction",
    desc: "Subcontractor TPAR compliance, equipment leasing, retention cash flows, and progressive project billing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 22 1-1h3l9-9" />
        <path d="M14 8 8 14" />
        <path d="m18 10 4-4a3 3 0 0 0-4-4l-4 4" />
      </svg>
    ),
  },
  {
    id: "property",
    name: "Property Developers",
    desc: "GST margin scheme calculations, joint venture structuring, private development lending, and ATO clearance certificates.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    id: "professional",
    name: "Professional Services",
    desc: "Legal practices, architecture studios, and consulting partnerships requiring equity structuring and partner distributions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "smsf",
    name: "Self-Managed Super (SMSF)",
    desc: "Annual SMSF tax returns, independent audit coordination, and limited recourse borrowing arrangements (LRBA).",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface TeamMember {
  name: string;
  role?: string;
  email: string;
  initials: string;
  note?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Benjamin Willis",
    role: "Mortgage Broker",
    email: "Ben@taxnet.com.au",
    initials: "BW",
  },
  {
    name: "Amanda Lew",
    role: "Accountant",
    email: "Amanda@taxnet.com.au",
    initials: "AL",
    note: "Amanda is currently on leave and will be returning early 2027",
  },
  {
    name: "Aaron Li",
    role: "Accountant",
    email: "Aaron@taxnet.com.au",
    initials: "AL",
  },
  {
    name: "Dulanga Gunathilake",
    role: "Accountant",
    email: "Dulanga@taxnet.com.au",
    initials: "DG",
  },
  {
    name: "Shanty Bavan",
    role: "Bookkeeper",
    email: "Shanty@taxnet.com.au",
    initials: "SB",
  },
];

export default function AboutBody() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
      {/* ─── DYNAMIC STYLES FOR LUXURY HOVER ANIMATIONS ─── */}
      <style>{`
        /* Hide scrollbars while allowing smooth touch/scroll behavior */
        .sliding-track-container::-webkit-scrollbar {
          display: none;
        }
        .sliding-track-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* ── Sliding Values Card: Turns Black on Hover with Amazing Animation ── */
        .sliding-value-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1.5px solid #E5ECE7;
          border-radius: 18px;
          padding: 2.25rem 2rem;
          min-width: 330px;
          max-width: 360px;
          flex: 0 0 auto;
          scroll-snap-align: start;
          overflow: hidden;
          cursor: pointer;
          transition: background-color 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 380ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sliding-value-card:hover {
          background-color: #0A0D0B !important;
          border-color: #C5A869 !important;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 42px rgba(10, 13, 11, 0.38), 0 0 30px rgba(197, 168, 105, 0.22) !important;
        }
        .sliding-value-card .val-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 168, 105, 0.22) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 380ms ease, transform 380ms ease;
          transform: scale(0.8);
        }
        .sliding-value-card:hover .val-glow {
          opacity: 1;
          transform: scale(1.15);
        }
        .sliding-value-card .val-num {
          font-family: var(--font-monety), "Playfair Display", Georgia, serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #A18650;
          line-height: 1;
          margin-bottom: 1.25rem;
          transition: color 320ms ease, text-shadow 320ms ease;
        }
        .sliding-value-card:hover .val-num {
          color: #E5D6B6;
          text-shadow: 0 0 14px rgba(197, 168, 105, 0.45);
        }
        .sliding-value-card .val-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #0A0D0B;
          margin-bottom: 0.65rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
          transition: color 320ms ease;
        }
        .sliding-value-card:hover .val-title {
          color: #FFFFFF;
        }
        .sliding-value-card .val-desc {
          font-size: 0.92rem;
          color: "#54655B";
          line-height: 1.65;
          margin: 0;
          transition: color 320ms ease;
        }
        .sliding-value-card:hover .val-desc {
          color: rgba(255, 255, 255, 0.82) !important;
        }
        .sliding-value-card .val-accent-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #A18650, #C5A869, #A18650);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 320ms ease, transform 360ms ease;
        }
        .sliding-value-card:hover .val-accent-bar {
          opacity: 1;
          transform: scaleX(1);
        }

        /* ── 3-Cards In A Row: Turns Black on Hover with Amazing Animation ── */
        .sector-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1.5px solid #E5ECE7;
          border-radius: 18px;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          overflow: hidden;
          cursor: pointer;
          transition: background-color 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 380ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 380ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sector-card:hover {
          background-color: #0A0D0B !important;
          border-color: #C5A869 !important;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 42px rgba(10, 13, 11, 0.38), 0 0 30px rgba(197, 168, 105, 0.22) !important;
        }
        .sector-card .sec-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 168, 105, 0.24) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 380ms ease, transform 380ms ease;
          transform: scale(0.8);
        }
        .sector-card:hover .sec-glow {
          opacity: 1;
          transform: scale(1.2);
        }
        .sector-card .sec-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: rgba(161, 134, 80, 0.12);
          color: #A18650;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: background-color 320ms ease, color 320ms ease, transform 320ms ease;
        }
        .sector-card:hover .sec-icon-wrapper {
          background-color: rgba(197, 168, 105, 0.22);
          color: #DFC386;
          transform: rotate(6deg) scale(1.08);
        }
        .sector-card .sec-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0A0D0B;
          margin-bottom: 0.65rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
          transition: color 320ms ease;
        }
        .sector-card:hover .sec-title {
          color: #FFFFFF;
        }
        .sector-card .sec-desc {
          font-size: 0.92rem;
          color: #54655B;
          line-height: 1.65;
          margin: 0;
          transition: color 320ms ease;
        }
        .sector-card:hover .sec-desc {
          color: rgba(255, 255, 255, 0.82);
        }
        .sector-card .sec-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #A18650, #C5A869, #A18650);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 320ms ease, transform 360ms ease;
        }
        .sector-card:hover .sec-bottom-bar {
          opacity: 1;
          transform: scaleX(1);
        }

        /* ── Responsive Grid Breakpoints ── */
        @media (max-width: 960px) {
          .three-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .three-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .sliding-value-card {
            min-width: 285px;
            max-width: 310px;
            padding: 1.75rem 1.5rem;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — JUST BELOW HERO
          "Built on Relationships. Growing with Purpose."
          (The Practice & Dual-Disciplinary Advantage)
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="firm-history"
        style={{
          padding: "5.5rem 0",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5ECE7",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Story & Dual Advantage Feature Card */}
            <div>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                The Practice
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2.1rem, 3.6vw, 3rem)",
                  color: "#0A0D0B",
                  marginTop: "0.4rem",
                  marginBottom: "1.25rem",
                  fontWeight: 400,
                  lineHeight: 1.18,
                  letterSpacing: "-0.015em",
                }}
              >
                Built on Relationships.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8A7040, #C5A869)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Growing with Purpose.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "#4A5A50",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Founded and guided by principal Philip Youssef, Taxnet grew out of a firm conviction:
                Australian small-to-medium businesses need a genuine commercial partner rather than
                a once-a-year compliance checklist.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  color: "#4A5A50",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Over more than a decade, organic client referrals have broadened our advisory scope across corporate tax,
                cloud bookkeeping, and bespoke lending facilities.
              </p>

              {/* Dual-Disciplinary Feature Card */}
              <div
                style={{
                  backgroundColor: "#0A0D0B",
                  color: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "2rem 2.25rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 14px 34px rgba(10, 13, 11, 0.2)",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(197, 168, 105, 0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                <span
                  style={{
                    color: "#C5A869",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Dual-Disciplinary Advantage
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "1.5rem",
                    color: "#FFFFFF",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  Finance Beyond Accounting
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  As qualified CPA accountants and accredited mortgage brokers under one roof, we
                  coordinate your tax returns and lending applications simultaneously. We ensure
                  tax deductions never inadvertently hinder your borrowing capacity across a wide range of lenders.
                </p>

                <Link
                  href="/contact"
                  className="playful-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#C5A869",
                    color: "#0A0D0B",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    padding: "11px 22px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(197, 168, 105, 0.25)",
                    transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#DFC386";
                    e.currentTarget.style.transform = "translateY(-3.5px) scale(1.04)";
                    e.currentTarget.style.boxShadow = "0 12px 28px rgba(197, 168, 105, 0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#C5A869";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(197, 168, 105, 0.25)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "translateY(1.5px) scale(0.965)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "translateY(-3.5px) scale(1.04)";
                  }}
                >
                  <span>Book A Consultation</span>
                  <span className="btn-arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Milestones Timeline */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {FIRM_MILESTONES.map((m) => (
                <div
                  key={m.stage}
                  style={{
                    backgroundColor: "#FAFBF9",
                    borderRadius: "14px",
                    padding: "1.5rem 1.75rem",
                    border: "1px solid #E5ECE7",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#A18650",
                      letterSpacing: "0.08em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    STAGE {m.stage}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      marginBottom: "0.45rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#54655B",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — LEADERSHIP & TEAM
          "Professional in What We Do. Personal in How We Do It."
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="our-team"
        style={{
          padding: "5.5rem 0",
          backgroundColor: "#F9F9F6",
          borderBottom: "1px solid #E5ECE7",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span
              style={{
                color: "#A18650",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Our Leadership
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                color: "#0A0D0B",
                marginTop: "0.4rem",
                marginBottom: "0.85rem",
                fontWeight: 400,
                lineHeight: 1.18,
              }}
            >
              Professional in What We Do.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Personal in How We Do It.
              </span>
            </h2>
            <p style={{ color: "#55645B", fontSize: "0.96rem", lineHeight: 1.65, margin: 0 }}>
              Our senior team combines extensive technical knowledge with direct, accessible communication
              at every step of your financial journey.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Principal Card: Philip Youssef */}
            <article
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #E5ECE7",
                borderTop: "4px solid #C5A869",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
                padding: "clamp(2rem, 3.5vw, 3rem)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid #EEF3EF",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "clamp(1.85rem, 3vw, 2.4rem)",
                      color: "#0A0D0B",
                      fontWeight: 400,
                      margin: "0 0 0.35rem 0",
                    }}
                  >
                    Philip Youssef
                  </h3>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#A18650", marginBottom: "0.2rem" }}>
                    Principal
                  </div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#A18650", marginBottom: "0.35rem" }}>
                    Credit Representative No. 484876
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#54655B", lineHeight: 1.45 }}>
                    CPA Accountant, Registered Tax Agent (TPB) &amp; Accredited Mortgage Broker (FBAA)
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <a
                    href="mailto:philip@taxnet.com.au"
                    style={{
                      color: "#0A0D0B",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    philip@taxnet.com.au
                  </a>
                  <span style={{ color: "#D1DCD5" }}>|</span>
                  <a
                    href="tel:0398025800"
                    style={{
                      color: "#54655B",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    (03) 9802 5800
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Professional Background
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#4A5A50", lineHeight: 1.7, margin: 0 }}>
                    Philip is a CPA Accountant and accredited Mortgage Broker with over 20 years experience having started in January 2005,
                    advising small to medium-sized businesses across Victoria. Holding an Accounting degree
                    majoring in Finance and Commerce from Swinburne and La Trobe Universities, he provides
                    coordinated leadership across entity structuring, commercial debt advisory, and home loans.
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Specialised Practice Focus
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "#4A5A50", lineHeight: 1.7, margin: 0 }}>
                    Specialises in corporate taxation, trust distributions, and financing structures with deep practice
                    experience in the medical sector—including general practitioners, dental clinics, and pharmacy groups.
                  </p>
                </div>
              </div>
            </article>

            {/* Team Grid: Angela Au Yeung & Mirel Youssef */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {/* Angela Au Yeung */}
              <article
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E5ECE7",
                  borderTop: "4px solid #C5A869",
                  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "1.75rem",
                      color: "#0A0D0B",
                      fontWeight: 400,
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Angela Au Yeung
                  </h3>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#A18650",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Senior Accountant
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4A5A50",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Angela has been an integral part of Taxnet and its predecessor for over 15 years.
                    She provides extensive experience in property development accounting, GST margin schemes,
                    and hands-on administration across Xero, MYOB, and QuickBooks.
                  </p>
                </div>

                <div style={{ paddingTop: "1rem", borderTop: "1px solid #EEF3EF" }}>
                  <a
                    href="mailto:ayeung@taxnet.com.au"
                    style={{
                      color: "#0A0D0B",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>ayeung@taxnet.com.au</span>
                    <span style={{ color: "#A18650" }}>→</span>
                  </a>
                </div>
              </article>

              {/* Mirel Youssef */}
              <article
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E5ECE7",
                  borderTop: "4px solid #C5A869",
                  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "1.75rem",
                      color: "#0A0D0B",
                      fontWeight: 400,
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    Mirel Youssef
                  </h3>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#A18650",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Practice Manager
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4A5A50",
                      lineHeight: 1.65,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Holding a Bachelor of Optometry from UNSW, Mirel brings strong analytical acumen
                    to managing practice operations. As the first point of contact, she ensures every client
                    receives prompt, dedicated partner-level attention and structured onboarding.
                  </p>
                </div>

                <div style={{ paddingTop: "1rem", borderTop: "1px solid #EEF3EF" }}>
                  <a
                    href="mailto:mirel@taxnet.com.au"
                    style={{
                      color: "#0A0D0B",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>mirel@taxnet.com.au</span>
                    <span style={{ color: "#A18650" }}>→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          AWARDS & RECOGNITION SECTION (Directly below Leadership)
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="awards"
        style={{
          padding: "5rem 0 5.5rem",
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #E5ECE7",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "3.25rem" }}>
            <span
              style={{
                color: "#A18650",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Industry Excellence
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                color: "#0A0D0B",
                fontWeight: 400,
                margin: "0 0 0.6rem",
                letterSpacing: "-0.01em",
              }}
            >
              Awards &amp; Recognition
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "#54655B",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Recognised for lending excellence, portfolio milestones and industry partnerships.
            </p>
          </div>

          {/* Two Columns: Philip Youssef & Taxnet Business Consultants */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Column 1: Philip Youssef */}
            <div
              style={{
                backgroundColor: "#FAFBF9",
                borderRadius: "16px",
                border: "1px solid #E5ECE7",
                padding: "2.25rem 2rem",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(161, 134, 80, 0.12)",
                    color: "#A18650",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  ★
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#0A0D0B",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Philip Youssef
                  </h3>
                  <span style={{ fontSize: "0.8rem", color: "#8C713A", fontWeight: 600 }}>
                    Principal Broker &amp; Advisor
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {[
                  "Broker of the Year, Victoria – National Mortgage Brokers, 2025",
                  "Platinum Broker – Westpac, 2024",
                  "Elite Broker – CommBank, 2021",
                  "$10m Monthly Settlements – National Mortgage Brokers, June 2020",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.92rem",
                      color: "#374151",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#C5A869", fontWeight: 700, marginTop: "2px" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Taxnet Business Consultants */}
            <div
              style={{
                backgroundColor: "#FAFBF9",
                borderRadius: "16px",
                border: "1px solid #E5ECE7",
                padding: "2.25rem 2rem",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(161, 134, 80, 0.12)",
                    color: "#A18650",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  🏆
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "#0A0D0B",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Taxnet Business Consultants
                  </h3>
                  <span style={{ fontSize: "0.8rem", color: "#8C713A", fontWeight: 600 }}>
                    Practice Milestones &amp; Partnerships
                  </span>
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {[
                  "Medallion Club – National Mortgage Brokers, 2022, 2023, 2024 and 2025",
                  "$250m Portfolio Milestone – National Mortgage Brokers, September 2023",
                  "Top 11 Broker (1st XI) – National Mortgage Brokers network, 2020",
                  "$100m Portfolio Milestone – National Mortgage Brokers, March 2019",
                  "Sales Milestone – National Mortgage Brokers, December 2018",
                  "$50m Club Portfolio Milestone – National Mortgage Brokers, September 2017",
                  "Xero Gold Partner",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.92rem",
                      color: "#374151",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#C5A869", fontWeight: 700, marginTop: "2px" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OUR TEAM SECTION (Directly below Leadership)
          Heading: Our Team
          Intro: The people you’ll work with day to day.
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="our-team"
        style={{
          padding: "4.5rem 0 5rem",
          backgroundColor: "#FAFBF9",
          borderTop: "1px solid #E5ECE7",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                color: "#0A0D0B",
                fontWeight: 400,
                margin: "0 0 0.6rem",
                letterSpacing: "-0.01em",
              }}
            >
              Our Team
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: "1rem",
                color: "#54655B",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              The people you’ll work with day to day.
            </p>
          </div>

          {/* Team Member Cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.email}
                style={{
                  flex: "1 1 240px",
                  maxWidth: "285px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "14px",
                  border: "1px solid #E5ECE7",
                  padding: "1.85rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 24px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "#C5A869";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.borderColor = "#E5ECE7";
                }}
              >
                {/* Circle with Initials in Brand Gold */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(197, 168, 105, 0.12)",
                    border: "1.5px solid rgba(197, 168, 105, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.1rem",
                    color: "#8C713A",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    letterSpacing: "0.06em",
                  }}
                >
                  {member.initials}
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontSize: "1.18rem",
                    fontWeight: 700,
                    color: "#0A0D0B",
                    margin: "0 0 0.35rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                {member.role && (
                  <div
                    style={{
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#A18650",
                      marginBottom: member.note ? "0.45rem" : "1.25rem",
                    }}
                  >
                    {member.role}
                  </div>
                )}

                {/* Note (in italics) */}
                {member.note && (
                  <div
                    style={{
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "0.82rem",
                      fontStyle: "italic",
                      color: "#54655B",
                      lineHeight: 1.45,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {member.note}
                  </div>
                )}

                {/* Clickable Mailto Link */}
                <div
                  style={{
                    width: "100%",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid #EEF3EF",
                    marginTop: "auto",
                  }}
                >
                  <a
                    href={`mailto:${member.email}`}
                    style={{
                      fontFamily: 'var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: "0.85rem",
                      color: "#182820",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      transition: "color 180ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C5A869";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#182820";
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A18650"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — SLIDING LIST IN A ROW (HOVER TURNS BLACK WITH ANIMATION)
          "More Than Numbers. Built on Trust"
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="business-values"
        style={{
          padding: "5.5rem 0",
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5ECE7",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Section Header with Left/Right Nav Arrows */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              gap: "1.5rem",
            }}
          >
            <div style={{ maxWidth: "700px" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Core Values
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                  color: "#0A0D0B",
                  marginTop: "0.4rem",
                  marginBottom: "0.85rem",
                  fontWeight: 400,
                  lineHeight: 1.18,
                  letterSpacing: "-0.015em",
                }}
              >
                More Than Numbers.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #8A7040, #C5A869)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Built on Trust
                </span>
              </h2>
              <p style={{ color: "#55645B", fontSize: "0.96rem", lineHeight: 1.65, margin: 0 }}>
                Swipe or scroll horizontally to explore the foundational principles that guide our
                accounting practice and professional standards.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={slideLeft}
                aria-label="Previous core value"
                className="playful-btn"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid #E5ECE7",
                  backgroundColor: "#FAFBF9",
                  color: "#0A0D0B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.backgroundColor = "#0A0D0B";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 8px 18px rgba(10, 13, 11, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5ECE7";
                  e.currentTarget.style.backgroundColor = "#FAFBF9";
                  e.currentTarget.style.color = "#0A0D0B";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(1.5px) scale(0.92)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.12)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={slideRight}
                aria-label="Next core value"
                className="playful-btn"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid #E5ECE7",
                  backgroundColor: "#FAFBF9",
                  color: "#0A0D0B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.backgroundColor = "#0A0D0B";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 8px 18px rgba(10, 13, 11, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5ECE7";
                  e.currentTarget.style.backgroundColor = "#FAFBF9";
                  e.currentTarget.style.color = "#0A0D0B";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "translateY(1.5px) scale(0.92)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.12)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Sliding Track in a Single Row ── */}
          <div
            ref={sliderRef}
            className="sliding-track-container"
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              paddingBottom: "1.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {CORE_VALUES.map((val) => (
              <div key={val.num} className="sliding-value-card">
                <div className="val-glow" />
                <div className="val-num">{val.num}</div>
                <h3 className="val-title">{val.title}</h3>
                <p className="val-desc">{val.desc}</p>
                <div className="val-accent-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — 3 CARDS IN A ROW (HOVER TURNS BLACK WITH ANIMATION)
          "Tailored Advisory for Distinct Sectors"
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="sectors"
        style={{
          padding: "5.5rem 0 6rem",
          backgroundColor: "#F9F9F6",
          borderBottom: "1px solid #E5ECE7",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span
              style={{
                color: "#A18650",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Industry Depth
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                color: "#0A0D0B",
                marginTop: "0.4rem",
                marginBottom: "0.85rem",
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: "-0.015em",
              }}
            >
              Tailored Advisory for Distinct Sectors
            </h2>
            <p style={{ color: "#55645B", fontSize: "0.96rem", lineHeight: 1.65, margin: 0 }}>
              Deep familiarity with industry-specific award wage frameworks, asset depreciation cycles,
              and ATO benchmark standards across Victoria.
            </p>
          </div>

          {/* ── 3 Cards in a Row Grid (3 Columns) ── */}
          <div
            className="three-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {SECTORS.map((sec) => (
              <div key={sec.id} className="sector-card">
                <div className="sec-glow" />
                <div>
                  <div className="sec-icon-wrapper">{sec.icon}</div>
                  <h3 className="sec-title">{sec.name}</h3>
                  <p className="sec-desc">{sec.desc}</p>
                </div>
                <div className="sec-bottom-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — FOOTER CTA BANNER (BLACK WITH GOLD ACCENTS)
          ══════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#0A0D0B",
          color: "#FFFFFF",
          padding: "4.5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(197, 168, 105, 0.3)",
        }}
      >
        {/* Subtle gold ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              marginBottom: "0.85rem",
              lineHeight: 1.18,
            }}
          >
            Your Business Deserves More Than Just an Accountant.
          </h2>

          <p
            style={{
              fontSize: "0.98rem",
              color: "rgba(255, 255, 255, 0.78)",
              maxWidth: "620px",
              margin: "0 auto 2.25rem auto",
              lineHeight: 1.6,
            }}
          >
            Connect directly with our senior Melbourne CPA and mortgage advisory team.
            In-person at our Doncaster East suites or via secure video consultation Australia-wide.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="/contact"
              className="playful-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#C5A869",
                color: "#0A0D0B",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "0.95rem 1.85rem",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(197, 168, 105, 0.35)",
                transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#DFC386";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.045)";
                e.currentTarget.style.boxShadow = "0 14px 32px rgba(197, 168, 105, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(197, 168, 105, 0.35)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(1.5px) scale(0.965)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.045)";
              }}
            >
              <span>Book A Consultation</span>
              <span className="btn-arrow">→</span>
            </Link>

            <ExecutiveWhatsAppButton
              message="Hi Taxnet, I would like to schedule a consultation with your Melbourne team."
              style={{
                fontSize: "0.95rem",
                padding: "0.95rem 1.85rem",
              }}
            />

            <a
              href="tel:0398025800"
              className="playful-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.95rem 1.85rem",
                borderRadius: "8px",
                border: "1px solid rgba(197, 168, 105, 0.6)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#E5D6B6",
                fontSize: "0.92rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(197, 168, 105, 0.18)";
                e.currentTarget.style.borderColor = "#C5A869";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(-3.5px) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(197, 168, 105, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.6)";
                e.currentTarget.style.color = "#E5D6B6";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(1.5px) scale(0.965)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-3.5px) scale(1.04)";
              }}
            >
              <span>Call (03) 9802 5800</span>
            </a>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.75rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: "0.82rem",
              color: "rgba(255, 255, 255, 0.55)",
            }}
          >
            Suite 6, 861 Doncaster Road, Doncaster East VIC 3109 · Free On-Site Client Parking
          </div>
        </div>
      </section>
    </div>
  );
}
