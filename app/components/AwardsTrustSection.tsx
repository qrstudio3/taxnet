"use client";

import React from "react";

/* ─── Compact Awards & Trust Data (To The Point) ─── */
const TRUST_ITEMS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="rgba(161, 134, 80, 0.08)" stroke="#A18650" strokeWidth="1" />
        <path
          d="M10 19C9.6 16 10.8 12.5 13 10.5M19 10.5C21.2 12.5 22.4 16 22 19M13 21C14.5 22.5 17.5 22.5 19 21M11.5 14C10.5 14 9.8 15 10.2 16.2M20.5 14C21.5 14 22.2 15 21.8 16.2"
          stroke="#A18650"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="15.5" r="2.5" fill="#A18650" />
      </svg>
    ),
    badge: "2024 / 2025 Finalist",
    title: "Australian Accounting Awards",
    highlight: "SME Taxation & Advisory Excellence",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="rgba(161, 134, 80, 0.08)" stroke="#A18650" strokeWidth="1" />
        <path
          d="M12 11H20V15C20 17.2 18.2 19 16 19C13.8 19 12 17.2 12 15V11ZM12 12.5H9.5C8.7 12.5 8 13.2 8 14C8 15.1 8.9 16 10 16.2L12 16.5M20 12.5H22.5C23.3 12.5 24 13.2 24 14C24 15.1 23.1 16 22 16.2L20 16.5M16 19V22M13 22H19"
          stroke="#A18650"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    badge: "5.0 ★ Client Choice",
    title: "250+ Verified 5-Star Reviews",
    highlight: "100% On-Time ATO Lodgement",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="rgba(161, 134, 80, 0.08)" stroke="#A18650" strokeWidth="1" />
        <path
          d="M16 9L21.5 11.5V16C21.5 19.5 19 22.2 16 23.5C13 22.2 10.5 19.5 10.5 16V11.5L16 9Z"
          stroke="#A18650"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.8 16L15.3 17.5L18.3 14" stroke="#A18650" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: "TPB & CPA Certified",
    title: "Registered Tax Agent",
    highlight: "99.8% First-Pass Acceptance",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="rgba(161, 134, 80, 0.08)" stroke="#A18650" strokeWidth="1" />
        <path
          d="M9 22V10M13.5 22V14M18 22V12M22.5 22V16"
          stroke="#A18650"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    badge: "$180M+ Protected",
    title: "1,500+ Entities Advised",
    highlight: "15+ Years Senior CPA Experience",
  },
];

/* ─── Accreditations Ticker ─── */
const BADGES = [
  "CPA Australia",
  "Tax Practitioners Board (TPB)",
  "MFAA Accredited Broking",
  "Xero Platinum Partner",
  "ATO Registered E-Filer",
];

export default function AwardsTrustSection() {
  return (
    <section
      id="trust"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: "3rem",
        paddingBottom: "3.25rem",
        overflow: "hidden",
        borderTop: "1px solid #EBF0EC",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Compact Header (Light Mode) ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontFamily: '"Monety", serif',
              fontSize: "clamp(1.75rem, 3.2vw, 2.3rem)",
              fontWeight: 400,
              color: "#0F261B",
              margin: "0 0 0.35rem 0",
              lineHeight: 1.15,
            }}
          >
            Award-Winning Advisory.{" "}
            <span style={{ color: "#A18650" }}>Proven Trust.</span>
          </h2>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#5C6B63",
              margin: 0,
            }}
          >
            Registered CPA & TPB tax agents safeguarding over $180M in
            Australian business wealth.
          </p>
        </div>

        {/* ── 4 Compact Cards in 1 Row (Light Mode) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.1rem",
            marginBottom: "2rem",
          }}
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(161, 134, 80, 0.28)",
                borderRadius: "14px",
                padding: "1.2rem 1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "#A18650";
                el.style.boxShadow = "0 10px 26px rgba(161, 134, 80, 0.16)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(161, 134, 80, 0.28)";
                el.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.04)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {item.icon}
                <span
                  style={{
                    color: "#8A6E3B",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 800,
                  color: "#0F261B",
                  lineHeight: 1.25,
                  marginTop: "0.2rem",
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: "0.76rem",
                  color: "#5C6B63",
                  lineHeight: 1.35,
                }}
              >
                {item.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* ── Compact Bottom Accreditations Bar (Light Mode) ── */}
        <div
          style={{
            borderTop: "1px solid #EBF0EC",
            paddingTop: "1.2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.25rem 2rem",
          }}
        >
          {BADGES.map((b) => (
            <span
              key={b}
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#4A5A50",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
