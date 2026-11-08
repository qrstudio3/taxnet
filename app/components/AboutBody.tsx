"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ============================================================
   TAXNET ABOUT US — EDITORIAL BODY EXPERIENCE
   Designed to editorial creative director standards:
   - Section 1: Our Business Values (Asymmetric, SVG flow path)
   - Section 2: History of the Firm & Industry Expertise
   - Section 3: Our People (Emotional core, handcrafted portrait plates)
   - Section 4: Closing CTA (Curving organic vector convergence)
   ============================================================ */

export default function AboutBody() {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);

  // Dedicated element refs for precise viewport calculation
  const valuesRowsRef = useRef<HTMLDivElement>(null);
  const historyTimelineRef = useRef<HTMLDivElement>(null);
  const peopleRibbonRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  // SVG element refs for direct 0-latency stroke-dashoffset synchronization
  const valuesPathRef = useRef<SVGPathElement>(null);
  const historyLineRef = useRef<SVGLineElement>(null);
  const peoplePathRef = useRef<SVGPathElement>(null);
  const ctaPathRef = useRef<SVGPathElement>(null);

  // Lightweight state only for milestone indicator lights
  const [historyActiveNodes, setHistoryActiveNodes] = useState<boolean[]>([false, false, false, false]);
  const [peopleActiveNodes, setPeopleActiveNodes] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    let ticking = false;

    const updateScrollPaths = () => {
      const winH = window.innerHeight;

      // ── 1. Values Section Path ──
      // Connects the 5 principles. Begins drawing as the first row enters the lower third of the screen,
      // and leads smoothly ahead so the line is ALWAYS reached or exceeded as each row is viewed.
      if (valuesRowsRef.current && valuesPathRef.current) {
        const rect = valuesRowsRef.current.getBoundingClientRect();
        const currentY = winH * 0.85 - rect.top;
        const totalDistance = rect.height * 0.85;
        const progress = Math.min(Math.max(currentY / totalDistance, 0), 1);
        valuesPathRef.current.style.strokeDashoffset = `${720 * (1 - progress)}`;
      }

      // ── 2. History Timeline Line ──
      // Draws down the stages, illuminating each milestone dot as it crosses into view.
      if (historyTimelineRef.current && historyLineRef.current) {
        const rect = historyTimelineRef.current.getBoundingClientRect();
        const currentY = winH * 0.85 - rect.top;
        const totalDistance = rect.height * 0.82;
        const progress = Math.min(Math.max(currentY / totalDistance, 0), 1);
        historyLineRef.current.style.strokeDashoffset = `${600 * (1 - progress)}`;

        setHistoryActiveNodes([
          progress >= 0.08,
          progress >= 0.35,
          progress >= 0.65,
          progress >= 0.92,
        ]);
      }

      // ── 3. Our People Ribbon ──
      // Compact horizontal ribbon at the top of the team section.
      // Rapidly draws across as it enters view (across ~300px of scroll), never lagging behind.
      if (peopleRibbonRef.current && peoplePathRef.current) {
        const rect = peopleRibbonRef.current.getBoundingClientRect();
        const currentY = winH * 0.88 - rect.top;
        const totalDistance = winH * 0.35;
        const progress = Math.min(Math.max(currentY / totalDistance, 0), 1);
        peoplePathRef.current.style.strokeDashoffset = `${1200 * (1 - progress)}`;

        setPeopleActiveNodes([
          progress >= 0.05,
          progress >= 0.50,
          progress >= 0.95,
        ]);
      }

      // ── 4. Closing CTA Path ──
      // Dynamic progressive draw across the full height of the CTA section
      if (ctaSectionRef.current && ctaPathRef.current) {
        const rect = ctaSectionRef.current.getBoundingClientRect();
        const currentY = winH * 0.88 - rect.top;
        const totalDistance = rect.height + winH * 0.25;
        const progress = Math.min(Math.max(currentY / totalDistance, 0), 1);
        ctaPathRef.current.style.strokeDashoffset = `${840 * (1 - progress)}`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollPaths();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollPaths, { passive: true });
    updateScrollPaths();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollPaths);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#FBFBFA", color: "#1C2022", overflow: "hidden" }}>
      {/* Dynamic CSS styles for animations and editorial typography */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.65; transform: scale(1.04); }
        }
        @keyframes ctaStreamFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -96; }
        }
        .cta-flow-stream {
          animation: ctaStreamFlow 2.8s linear infinite;
        }
        @keyframes valuesStreamFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -64; }
        }
        .values-flow-stream {
          animation: valuesStreamFlow 3s linear infinite;
        }
        @keyframes timelineStreamFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -72; }
        }
        .timeline-flow-stream {
          animation: timelineStreamFlow 3s linear infinite;
        }
        @keyframes peopleStreamFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -80; }
        }
        .people-flow-stream {
          animation: peopleStreamFlow 3.2s linear infinite;
        }
        .principle-row {
          transition: all 260ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .principle-row:hover {
          background-color: #FFFFFF;
          box-shadow: 0 10px 30px rgba(13, 62, 38, 0.05);
          transform: translateX(8px);
        }
        .team-card {
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease;
        }
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(13, 62, 38, 0.08);
          border-color: rgba(197, 168, 105, 0.6) !important;
        }
        .editorial-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .editorial-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 240ms ease;
        }
        .editorial-link:hover::after {
          width: 100%;
        }
        .industry-tag {
          transition: all 220ms ease;
        }
        .industry-tag:hover {
          background-color: #0D3E26 !important;
          color: #FFFFFF !important;
          border-color: #0D3E26 !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .asymmetric-values-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .history-split-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .team-editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ============================================================
          SECTION 1 — OUR BUSINESS VALUES
          "More Than Numbers. Built on Trust."
          ============================================================ */}
      <section
        id="business-values"
        style={{
          position: "relative",
          padding: "7.5rem 0 6.5rem 0",
          backgroundColor: "#FBFBFA",
          borderBottom: "1px solid #ECEEEB",
        }}
      >
        {/* Decorative Watermark / Background Texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "5%",
            right: "3%",
            fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
            fontSize: "clamp(6rem, 15vw, 13rem)",
            color: "rgba(13, 62, 38, 0.025)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          TRUST
        </div>

        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ maxWidth: "820px", marginBottom: "4.5rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
              Section 01 · Our Business Values
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: "#0D3E26",
                letterSpacing: "-0.02em",
                margin: "0 0 1.25rem 0",
              }}
            >
              More Than Numbers. Built on Trust.
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                lineHeight: 1.7,
                color: "#4A5A50",
                maxWidth: "680px",
                margin: 0,
              }}
            >
              Financial figures only tell half the story. The enduring value of Taxnet lies in the fiduciary care, technical acumen, and long-term commitments we bring to every Australian business relationship.
            </p>
          </div>

          {/* Asymmetric Composition */}
          <div
            className="asymmetric-values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.35fr",
              gap: "4.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Column: Oversized Typographic Statement & Architectural Pillar */}
            <div
              style={{
                position: "sticky",
                top: "120px",
                paddingRight: "1rem",
              }}
            >
              <div
                style={{
                  borderLeft: "2px solid #C5A869",
                  paddingLeft: "1.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                    fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                    lineHeight: 1.2,
                    color: "#0D3E26",
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;Trust is where good business begins.&rdquo;
                </div>

                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    color: "#5C6E64",
                    margin: 0,
                  }}
                >
                  Accounting is often reduced to historical reporting. At Taxnet, we regard every ledger as a strategic compass for your family’s enterprise, ensuring every tax decision safeguards your long-term wealth and borrowing power.
                </p>
              </div>

              {/* Fiduciary Accreditations Stamp */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E6EAE7",
                  boxShadow: "0 4px 16px rgba(13, 62, 38, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#0D3E26",
                    color: "#C5A869",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    flexShrink: 0,
                    boxShadow: "0 4px 12px rgba(13, 62, 38, 0.2)",
                  }}
                >
                  CPA
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0D3E26", marginBottom: "2px" }}>
                    CPA Australia &amp; TPB Registered
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#6A7B70" }}>
                    Bound by rigorous statutory standards and public practice ethics.
                  </div>
                </div>
              </div>

              {/* Interactive SVG Ribbon connecting values */}
              <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#C5A869" strokeWidth="1.5" />
                  <path d="M12 7V17M7 12H17" stroke="#0D3E26" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0D3E26", letterSpacing: "0.06em" }}>
                  5 CORE OPERATING PRINCIPLES
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Value Rows with Progressive Animated SVG Path */}
            <div ref={valuesRowsRef} style={{ position: "relative" }}>
              {/* Organic Flowing SVG Path that draws itself on scroll without lag */}
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "-28px",
                  height: "calc(100% - 20px)",
                  width: "28px",
                  overflow: "visible",
                  pointerEvents: "none",
                }}
              >
                <path
                  d="M 14,0 C 14,80 2,120 14,200 C 26,280 2,360 14,440 C 26,520 14,600 14,680"
                  fill="none"
                  stroke="#E2E7E3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  ref={valuesPathRef}
                  d="M 14,0 C 14,80 2,120 14,200 C 26,280 2,360 14,440 C 26,520 14,600 14,680"
                  fill="none"
                  stroke="#C5A869"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="720"
                  strokeDashoffset="720"
                />
                {/* Continuous flowing animated stream */}
                <path
                  className="values-flow-stream"
                  d="M 14,0 C 14,80 2,120 14,200 C 26,280 2,360 14,440 C 26,520 14,600 14,680"
                  fill="none"
                  stroke="#DFC386"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="16 20"
                />
                {/* Traveling active light pulse */}
                <circle r="3.5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5">
                  <animateMotion
                    path="M 14,0 C 14,80 2,120 14,200 C 26,280 2,360 14,440 C 26,520 14,600 14,680"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              {/* The Five Principles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  {
                    num: "01",
                    title: "Integrity & Trust",
                    desc: "Long-term relationships built on honesty, confidentiality and professional integrity. We operate as an uncompromised fiduciary partner in your financial success.",
                  },
                  {
                    num: "02",
                    title: "Proactive Thinking",
                    desc: "Innovative accounting and business advisory that helps clients anticipate opportunities and challenges before they appear on the balance sheet.",
                  },
                  {
                    num: "03",
                    title: "Beyond Compliance",
                    desc: "Practical guidance, commercial leadership and tailored strategies that support sustainable revenue growth, operational efficiency and enterprise valuation.",
                  },
                  {
                    num: "04",
                    title: "Personal Attention",
                    desc: "No client or task is too small. Every business owner deserves responsive, friendly and technically sound advice delivered directly by senior practitioners.",
                  },
                  {
                    num: "05",
                    title: "Continuous Excellence",
                    desc: "Ongoing professional development ensures our advice stays relevant, reliable and strictly aligned with Australia’s rapidly changing tax legislation.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.num}
                    className="principle-row"
                    onMouseEnter={() => setActivePrinciple(index)}
                    onMouseLeave={() => setActivePrinciple(null)}
                    style={{
                      padding: "2rem 2.25rem",
                      borderRadius: "14px",
                      backgroundColor: activePrinciple === index ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                      border: "1px solid",
                      borderColor: activePrinciple === index ? "rgba(197, 168, 105, 0.4)" : "#EBEFEA",
                      cursor: "default",
                      position: "relative",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                            fontSize: "1.45rem",
                            fontWeight: 400,
                            color: activePrinciple === index ? "#C5A869" : "#8A9C91",
                            letterSpacing: "0.04em",
                            transition: "color 200ms ease",
                          }}
                        >
                          {item.num}
                        </span>
                        <h3
                          style={{
                            fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                            fontSize: "1.35rem",
                            fontWeight: 400,
                            color: "#0D3E26",
                            margin: 0,
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "#C5A869",
                          transform: activePrinciple === index ? "translateX(4px)" : "translateX(0)",
                          opacity: activePrinciple === index ? 1 : 0.4,
                          transition: "all 200ms ease",
                        }}
                      >
                        →
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.68,
                        color: "#4A5A50",
                        margin: 0,
                        paddingLeft: "2.4rem",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — HISTORY OF THE FIRM
          "Experience That Moves Business Forward"
          ============================================================ */}
      <section
        id="firm-history"
        style={{
          position: "relative",
          padding: "7.5rem 0",
          backgroundColor: "#071F14",
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Glows */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(13, 62, 38, 0.4) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          {/* Split Layout Composition */}
          <div
            className="history-split-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.15fr",
              gap: "4.5rem",
              alignItems: "start",
              marginBottom: "5.5rem",
            }}
          >
            {/* Left Side: Journey narrative & Finance Beyond Accounting feature */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#C5A869",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
                Section 02 · Evolution of the Practice
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                  fontSize: "clamp(2.3rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: "#FFFFFF",
                  letterSpacing: "-0.015em",
                  margin: "0 0 1.5rem 0",
                }}
              >
                Built on Relationships. Growing with Purpose.
              </h2>

              <div
                style={{
                  fontSize: "1.18rem",
                  fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                  color: "#C5A869",
                  lineHeight: 1.45,
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                &ldquo;From trusted accounting relationships to a complete financial services partner.&rdquo;
              </div>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                  color: "rgba(240, 245, 242, 0.85)",
                  marginBottom: "1.5rem",
                }}
              >
                Founded and guided by principal Philip Youssef, Taxnet grew out of a deep conviction that Australian SMEs require genuine commercial partnership rather than once-a-year compliance checklists.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                  color: "rgba(240, 245, 242, 0.85)",
                  marginBottom: "2.5rem",
                }}
              >
                Over more than a decade, organic client advocacy and targeted mergers with respected local practices have expanded our depth across tax structuring, cloud automation, cash flow engineering, and bespoke credit facilities.
              </p>

              {/* Special Feature: Finance Beyond Accounting */}
              <div
                style={{
                  padding: "2.25rem",
                  borderRadius: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(197, 168, 105, 0.35)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#C5A869",
                    marginBottom: "0.75rem",
                  }}
                >
                  Dual-Disciplinary Advantage
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    margin: "0 0 0.75rem 0",
                  }}
                >
                  Finance Beyond Accounting.
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: "rgba(240, 245, 242, 0.85)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Working directly with major Australian retail banks and boutique private lenders, Philip assists clients in structuring competitive lending solutions and refinancing packages that align perfectly with their tax returns.
                </p>

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#C5A869",
                    color: "#05110A",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    boxShadow: "0 6px 18px rgba(197, 168, 105, 0.3)",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#D4BC7D";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#C5A869";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span>Discover How We Can Help</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Flowing Vertical Timeline with Animated Progressive SVG */}
            <div ref={historyTimelineRef} style={{ position: "relative", paddingLeft: "2.5rem" }}>
              {/* Flowing Animated Spine */}
              <svg
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "0",
                  height: "calc(100% - 48px)",
                  width: "16px",
                  overflow: "visible",
                  pointerEvents: "none",
                }}
              >
                <line
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="100%"
                  stroke="rgba(255, 255, 255, 0.12)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line
                  ref={historyLineRef}
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="100%"
                  stroke="#C5A869"
                  strokeWidth="2"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                />
                {/* Continuous flowing light stream along timeline */}
                <line
                  className="timeline-flow-stream"
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="100%"
                  stroke="#DFC386"
                  strokeWidth="2.5"
                  strokeDasharray="16 22"
                />
              </svg>

              <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
                {[
                  {
                    stage: "01",
                    title: "The Beginning",
                    desc: "Led by Philip Youssef, Taxnet developed through longstanding client relationships, uncompromised attention to detail, and trusted personal referrals throughout Victoria.",
                  },
                  {
                    stage: "02",
                    title: "Growing Together",
                    desc: "Strategic mergers with smaller boutique accounting practices helped expand the firm’s collective experience, technical capacity, and industry specialisation.",
                  },
                  {
                    stage: "03",
                    title: "A Complete Financial Partner",
                    desc: "Today, Taxnet supports Australian small businesses well beyond tax compliance—delivering active advisory that drives revenue expansion, profitability, and enterprise asset value.",
                  },
                  {
                    stage: "04",
                    title: "Planning for the Future",
                    desc: "Through tailored tax-effective structures, self-managed superannuation (SMSF) guidance, and prudent investment modeling, we help clients build and protect multi-generational wealth.",
                  },
                ].map((item, idx) => (
                  <div key={item.stage} style={{ position: "relative" }}>
                    {/* Node marker */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-2.5rem",
                        top: "4px",
                        transform: "translateX(-50%)",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#071F14",
                        border: "2px solid #C5A869",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: historyActiveNodes[idx] ? "#C5A869" : "transparent",
                          transition: "background-color 200ms ease",
                        }}
                      />
                    </div>

                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#C5A869", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>
                      STAGE {item.stage}
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                        fontSize: "1.45rem",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        margin: "0 0 0.65rem 0",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.93rem",
                        lineHeight: 1.68,
                        color: "rgba(240, 245, 242, 0.78)",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Industry Expertise Section */}
          <div
            style={{
              paddingTop: "3.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", gap: "1rem" }}>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C5A869", marginBottom: "0.5rem" }}>
                  Sector Specialisations
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                    fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  Industries We Champion Across Victoria
                </h3>
              </div>
              <div style={{ fontSize: "0.88rem", color: "rgba(255, 255, 255, 0.7)", maxWidth: "420px" }}>
                Deep commercial insight into cash conversion cycles, award wage frameworks, and ATO industry benchmarks.
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                { name: "Trades & Construction", note: "Subcontractor TPAR, equipment leasing, cash flow cycles" },
                { name: "Professional Services", note: "Legal firms, engineering consultancies, partnership tax" },
                { name: "Primary Producers", note: "Agricultural tax concessions, farm income averaging, land assets" },
                { name: "Property Developers", note: "Margin scheme GST, joint ventures, construction lending" },
                { name: "Self-Managed Super Funds", note: "SMSF compliance, limited recourse borrowing, pension lodgements" },
                {
                  name: "Medical Professionals",
                  note: "Dentists, pharmacists, specialists & general practitioners",
                  featured: true,
                },
              ].map((ind) => (
                <div
                  key={ind.name}
                  className="industry-tag"
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderRadius: "12px",
                    backgroundColor: ind.featured ? "rgba(197, 168, 105, 0.12)" : "rgba(255, 255, 255, 0.04)",
                    border: "1px solid",
                    borderColor: ind.featured ? "#C5A869" : "rgba(255, 255, 255, 0.1)",
                    position: "relative",
                  }}
                >
                  {ind.featured && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "14px",
                        backgroundColor: "#C5A869",
                        color: "#05110A",
                        fontSize: "0.68rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "2px 8px",
                        borderRadius: "4px",
                      }}
                    >
                      Key Focus
                    </span>
                  )}
                  <div
                    style={{
                      fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: ind.featured ? "#E9D7A5" : "#FFFFFF",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {ind.name}
                  </div>
                  <div style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "rgba(240, 245, 242, 0.72)" }}>
                    {ind.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 — OUR PEOPLE
          "Good Business Starts with Good People"
          ============================================================ */}
      <section
        id="our-team"
        style={{
          position: "relative",
          padding: "7.5rem 0",
          backgroundColor: "#F8F7F3",
          borderBottom: "1px solid #ECEEEB",
        }}
      >
        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
          {/* Section Introduction */}
          <div style={{ maxWidth: "780px", margin: "0 auto 4.5rem auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
              The People Behind Taxnet
              <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                fontSize: "clamp(2.3rem, 4vw, 3.6rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#0D3E26",
                letterSpacing: "-0.015em",
                margin: "0 0 1.25rem 0",
              }}
            >
              Professional in What We Do. Personal in How We Do It.
            </h2>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.3vw, 1.15rem)",
                lineHeight: 1.7,
                color: "#4A5A50",
                margin: "0 auto",
                maxWidth: "680px",
              }}
            >
              Our team combines experience, practical knowledge and a genuine commitment to helping our clients feel supported at every stage of their financial journey.
            </p>
          </div>

          {/* Human Connection SVG Ribbon travelling between team profiles */}
          <div ref={peopleRibbonRef} style={{ position: "relative", marginBottom: "3.5rem" }}>
            <svg
              aria-hidden="true"
              style={{
                width: "100%",
                height: "36px",
                overflow: "visible",
                display: "block",
              }}
            >
              <path
                d="M 50,18 Q 300,32 600,18 T 1200,18"
                fill="none"
                stroke="#E2E7E3"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <path
                ref={peoplePathRef}
                d="M 50,18 Q 300,32 600,18 T 1200,18"
                fill="none"
                stroke="#C5A869"
                strokeWidth="2"
                strokeDasharray="1200"
                strokeDashoffset="1200"
              />
              {/* Continuous flowing connection stream */}
              <path
                className="people-flow-stream"
                d="M 50,18 Q 300,32 600,18 T 1200,18"
                fill="none"
                stroke="#DFC386"
                strokeWidth="2.5"
                strokeDasharray="20 26"
              />
              {/* Active traveling pulse connecting the team */}
              <circle r="4" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5">
                <animateMotion
                  path="M 50,18 Q 300,32 600,18 T 1200,18"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="50" cy="18" r="4" fill={peopleActiveNodes[0] ? "#C5A869" : "#0D3E26"} stroke="#C5A869" strokeWidth="2" style={{ transition: "fill 200ms ease" }} />
              <circle cx="600" cy="18" r="4" fill={peopleActiveNodes[1] ? "#C5A869" : "#0D3E26"} stroke="#C5A869" strokeWidth="2" style={{ transition: "fill 200ms ease" }} />
              <circle cx="1200" cy="18" r="4" fill={peopleActiveNodes[2] ? "#C5A869" : "#0D3E26"} stroke="#C5A869" strokeWidth="2" style={{ transition: "fill 200ms ease" }} />
            </svg>
          </div>

          {/* Team Profiles Composition: Pure Editorial Profiles focusing on Name, Designation & Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
            {/* ── PROFILE 01: PHILIP YOUSSEF (Principal) ── */}
            <article
              className="team-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #E2E8E3",
                borderTop: "4px solid #C5A869",
                boxShadow: "0 10px 32px rgba(13, 62, 38, 0.05)",
                padding: "clamp(2.25rem, 4vw, 3.75rem)",
                position: "relative",
              }}
            >
              {/* Header: Name, Designation & Credential Badges */}
              <div style={{ marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #EAEFEA" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", marginBottom: "0.75rem" }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                      fontSize: "clamp(2.4rem, 4.2vw, 3.4rem)",
                      fontWeight: 400,
                      color: "#0D3E26",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      margin: 0,
                    }}
                  >
                    Philip Youssef
                  </h3>

                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#A18650",
                      letterSpacing: "0.02em",
                    }}
                  >
                    CPA Accountant &amp; Accredited Mortgage Broker (FBAA)
                  </div>
                </div>

                {/* Refined Accreditations & Specialties Row */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1rem" }}>
                  {[
                    "CPA Australia Public Practice",
                    "FBAA Accredited Mortgage Broker",
                    "13+ Years SME Advisory Depth",
                    "Swinburne & La Trobe Graduate (B.Com / Finance)",
                    "Specialising in Medical Industry Taxation & Commercial Lending",
                  ].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#0D3E26",
                        backgroundColor: "#F2F6F3",
                        border: "1px solid #E1E8E2",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body: Two-Column Narrative (Professional Story + Personal Side) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "3rem",
                  alignItems: "start",
                }}
              >
                {/* Left Column: The Professional Story */}
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#0D3E26",
                      marginBottom: "0.85rem",
                    }}
                  >
                    Professional Experience
                  </div>

                  <p
                    style={{
                      fontSize: "1.02rem",
                      lineHeight: 1.8,
                      color: "#2D3E34",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Philip is a CPA Accountant and FBAA with over 13 years of experience supporting small to medium-sized businesses across Victoria. He holds an Accounting degree with a major in Finance and Commerce from Swinburne and La Trobe Universities.
                  </p>

                  <p
                    style={{
                      fontSize: "0.98rem",
                      lineHeight: 1.78,
                      color: "#4A5A50",
                      marginBottom: "2rem",
                    }}
                  >
                    He also works as an accredited Mortgage Broker, assisting clients with personal and commercial lending. Philip specialises in accounting and taxation, with a particular interest and depth of practice in the medical industry—including general practitioners, dental clinics, and pharmacy groups.
                  </p>

                  {/* Direct Contact Action */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
                    <a
                      href="mailto:philip@taxnet.com.au"
                      className="editorial-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "#0D3E26",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "all 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#155233";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#0D3E26";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>philip@taxnet.com.au</span>
                    </a>

                    <a
                      href="tel:0398025800"
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "#6A7B70",
                        textDecoration: "none",
                      }}
                    >
                      Direct: (03) 9802 5800
                    </a>
                  </div>
                </div>

                {/* Right Column: Personal Story ("Beyond the Ledger") */}
                <div
                  style={{
                    backgroundColor: "#F8FAF8",
                    padding: "2rem 2.25rem",
                    borderRadius: "14px",
                    border: "1px solid #E2EAE3",
                    borderLeft: "4px solid #C5A869",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#A18650",
                      marginBottom: "1rem",
                    }}
                  >
                    Personal Side · Beyond the Ledger
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      color: "#3D4E44",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;Outside the office, Philip enjoys spending quality time with his wife Mirel and their three children. Between family activities, sports and movie nights, he enjoys making time for friends and regularly serving at his local Coptic Orthodox Church.&rdquo;
                  </p>
                </div>
              </div>
            </article>

            {/* ── PROFILES 02 & 03: ANGELA AU YEUNG & MIREL YOUSSEF ── */}
            <div
              className="team-editorial-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {/* Profile 02: Angela Au Yeung */}
              <article
                className="team-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E2E8E3",
                  borderTop: "4px solid #C5A869",
                  boxShadow: "0 10px 30px rgba(13, 62, 38, 0.04)",
                  padding: "clamp(2rem, 3vw, 2.75rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                      fontSize: "clamp(2rem, 2.8vw, 2.4rem)",
                      fontWeight: 400,
                      color: "#0D3E26",
                      letterSpacing: "-0.015em",
                      margin: "0 0 0.4rem 0",
                    }}
                  >
                    Angela Au Yeung
                  </h3>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#A18650",
                      marginBottom: "1rem",
                    }}
                  >
                    Senior Accountant · Property Development Specialist
                  </div>

                  {/* Credentials Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                    {["15+ Years Tenured", "Property Development Tax", "Cashflow Manager, MYOB & QBO"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          color: "#0D3E26",
                          backgroundColor: "#F2F6F3",
                          border: "1px solid #E1E8E2",
                          padding: "3px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Professional Story */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#0D3E26",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Professional Background
                    </div>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#3D4E44", margin: 0 }}>
                      Angela has been part of Taxnet and its predecessor for over 15 years, bringing extensive experience in accounting and taxation. She specialises in property development and has hands-on experience with accounting platforms including Cashflow Manager, MYOB and QuickBooks.
                    </p>
                  </div>

                  {/* Personal Side Story */}
                  <div
                    style={{
                      backgroundColor: "#F8FAF8",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: "1px solid #E2EAE3",
                      borderLeft: "3px solid #C5A869",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#A18650",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Personal Side · Beyond the Ledger
                    </div>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#4A5A50", margin: 0, fontStyle: "italic" }}>
                      &ldquo;Outside work, Angela is a self-confessed workaholic and an enthusiastic home cook. Her homemade creations have become a favourite around the office. Fluent in Cantonese, she also enjoys spending time with her large family.&rdquo;
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: "1.25rem", borderTop: "1px solid #EAEFEA" }}>
                  <a
                    href="mailto:ayeung@taxnet.com.au"
                    className="editorial-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#0D3E26",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>ayeung@taxnet.com.au</span>
                    <span style={{ color: "#C5A869" }}>→</span>
                  </a>
                </div>
              </article>

              {/* Profile 03: Mirel Youssef */}
              <article
                className="team-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E2E8E3",
                  borderTop: "4px solid #C5A869",
                  boxShadow: "0 10px 30px rgba(13, 62, 38, 0.04)",
                  padding: "clamp(2rem, 3vw, 2.75rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                      fontSize: "clamp(2rem, 2.8vw, 2.4rem)",
                      fontWeight: 400,
                      color: "#0D3E26",
                      letterSpacing: "-0.015em",
                      margin: "0 0 0.4rem 0",
                    }}
                  >
                    Mirel Youssef
                  </h3>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#A18650",
                      marginBottom: "1rem",
                    }}
                  >
                    Practice Manager · Client Operations Director
                  </div>

                  {/* Credentials Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.5rem" }}>
                    {["B.Optom (UNSW)", "Client Operations Director", "First Point of Contact"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          color: "#0D3E26",
                          backgroundColor: "#F2F6F3",
                          border: "1px solid #E1E8E2",
                          padding: "3px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Professional Story */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#0D3E26",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Professional Background
                    </div>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#3D4E44", margin: 0 }}>
                      Mirel holds a Bachelor of Optometry from UNSW and brings a strong natural ability with numbers to her role as Practice Manager. She oversees the daily operations of Taxnet and is often the first point of contact for clients. Her focus is on making sure clients and staff receive the attention, assistance and support they need.
                    </p>
                  </div>

                  {/* Personal Side Story */}
                  <div
                    style={{
                      backgroundColor: "#F8FAF8",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: "1px solid #E2EAE3",
                      borderLeft: "3px solid #C5A869",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#A18650",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Personal Side · Beyond the Ledger
                    </div>
                    <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#4A5A50", margin: 0, fontStyle: "italic" }}>
                      &ldquo;Outside work, Mirel enjoys spending time with her husband Philip and their three children. She also loves exploring new culinary experiences and catching up with friends.&rdquo;
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: "1.25rem", borderTop: "1px solid #EAEFEA" }}>
                  <a
                    href="mailto:mirel@taxnet.com.au"
                    className="editorial-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#0D3E26",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>mirel@taxnet.com.au</span>
                    <span style={{ color: "#C5A869" }}>→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 — CLOSING CTA
          "Let's Build Something Better Together"
          ============================================================ */}
      <section
        ref={ctaSectionRef}
        id="about-cta"
        style={{
          position: "relative",
          padding: "7.5rem 0",
          backgroundColor: "#05110A",
          color: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* Curving SVG Path flowing organically towards the CTA */}
        <svg
          aria-hidden="true"
          viewBox="0 0 800 720"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "960px",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <defs>
            <filter id="ctaGoldGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="ctaGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C5A869" stopOpacity="0.25" />
              <stop offset="25%" stopColor="#DFC386" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#C5A869" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#DFC386" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#C5A869" stopOpacity="0.3" />
            </linearGradient>
            <radialGradient id="ctaOrbGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="40%" stopColor="#DFC386" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C5A869" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Underlying subtle track guide */}
          <path
            d="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
            fill="none"
            stroke="rgba(197, 168, 105, 0.16)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />

          {/* 2. Scroll-reactive progressive gold path */}
          <path
            ref={ctaPathRef}
            d="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
            fill="none"
            stroke="url(#ctaGoldGrad)"
            strokeWidth="2"
            strokeDasharray="840"
            strokeDashoffset="840"
          />

          {/* 3. Constantly flowing energetic light stream (active continuous movement) */}
          <path
            className="cta-flow-stream"
            d="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
            fill="none"
            stroke="#DFC386"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="20 28"
          />

          {/* 4. Traveling Golden Pulse Orbs along the curve */}
          <g>
            <circle r="12" fill="url(#ctaOrbGrad)" opacity="0.6" filter="url(#ctaGoldGlow)">
              <animateMotion
                path="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4" fill="#FFFFFF" stroke="#C5A869" strokeWidth="1.5" filter="url(#ctaGoldGlow)">
              <animateMotion
                path="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Second trailing orb offset by 2.5s */}
          <g>
            <circle r="9" fill="url(#ctaOrbGrad)" opacity="0.45" filter="url(#ctaGoldGlow)">
              <animateMotion
                path="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
                dur="5s"
                begin="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#DFC386" stroke="#FFFFFF" strokeWidth="1" filter="url(#ctaGoldGlow)">
              <animateMotion
                path="M 400,0 C 270,120 530,240 400,360 C 270,480 530,590 400,710"
                dur="5s"
                begin="2.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* 5. Pulsing Nexus Anchor at the end of the line */}
          <g transform="translate(400, 710)">
            <circle r="14" fill="none" stroke="#C5A869" strokeWidth="1" opacity="0.4">
              <animate attributeName="r" values="6;22;6" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="5" fill="#C5A869" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#ctaGoldGlow)" />
          </g>
        </svg>

        <div
          className="container"
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#C5A869",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
            Let&apos;s Build Something Better Together
            <span style={{ width: "24px", height: "1px", backgroundColor: "#C5A869" }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
              fontSize: "clamp(2.3rem, 4.4vw, 3.8rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
              margin: "0 0 1.5rem 0",
            }}
          >
            Your Business Deserves More Than Just an Accountant.
          </h2>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
              lineHeight: 1.7,
              color: "rgba(240, 245, 242, 0.85)",
              maxWidth: "680px",
              margin: "0 auto 3rem auto",
            }}
          >
            Whether you&apos;re starting out, growing your business or planning your next chapter, we&apos;re here to help you move forward with confidence.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#C5A869",
                color: "#05110A",
                fontWeight: 700,
                fontSize: "0.98rem",
                padding: "16px 36px",
                borderRadius: "8px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(197, 168, 105, 0.35)",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D4BC7D";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(197, 168, 105, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(197, 168, 105, 0.35)";
              }}
            >
              <span>Let&apos;s Talk About Your Business</span>
              <span>→</span>
            </Link>

            <Link
              href="/#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.96rem",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                backdropFilter: "blur(6px)",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Practice Location Micro-Footer */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            <span>Taxnet Business Consultants</span>
            <span>·</span>
            <span>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109</span>
            <span>·</span>
            <a href="tel:0398025800" style={{ color: "#C5A869", textDecoration: "none" }}>
              (03) 9802 5800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

