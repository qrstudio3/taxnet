"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface WhyItemData {
  id: string;
  number: string;
  title: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
  watermark: React.ReactNode;
}

const WHY_ITEMS: WhyItemData[] = [
  {
    id: "one-team",
    number: "01",
    title: "One team, the full picture.",
    description:
      "Your accountant and your broker work together, so your tax and lending decisions line up.",
    tagline: "Synchronised Tax & Lending Structure",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#E5D7B5" strokeWidth="1.6" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#E5D7B5" strokeWidth="1.6" />
        <circle cx="16" cy="17" r="1.5" fill="#C5A869" />
      </svg>
    ),
    watermark: (
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="65" cy="80" r="45" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="3 3" />
        <circle cx="95" cy="80" r="45" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="3 3" />
        <ellipse cx="80" cy="80" rx="16" ry="34" fill="#C5A869" fillOpacity="0.1" />
        <line x1="80" y1="35" x2="80" y2="125" stroke="#C5A869" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="5" fill="#C5A869" />
      </svg>
    ),
  },
  {
    id: "deal-directly",
    number: "02",
    title: "You deal with us directly.",
    description: "No call centres and no being passed around.",
    tagline: "Direct Access to Senior Advisors",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" stroke="#E5D7B5" strokeWidth="1.8" />
      </svg>
    ),
    watermark: (
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="56" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="4 4" />
        <circle cx="80" cy="80" r="38" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="80" y1="20" x2="80" y2="140" stroke="#C5A869" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="20" y1="80" x2="140" y2="80" stroke="#C5A869" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="80" cy="80" r="8" fill="#C5A869" fillOpacity="0.25" />
        <circle cx="80" cy="80" r="3" fill="#C5A869" />
      </svg>
    ),
  },
  {
    id: "local-family-run",
    number: "03",
    title: "Local and family-run.",
    description:
      "Based in Doncaster East, working with individuals, families and businesses across Melbourne.",
    tagline: "Doncaster East Practice · Melbourne",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" stroke="#E5D7B5" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="1.2" fill="#C5A869" />
      </svg>
    ),
    watermark: (
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon points="80,25 93,65 135,65 101,90 114,130 80,105 46,130 59,90 25,65 67,65" stroke="#C5A869" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="80" cy="80" r="28" stroke="#C5A869" strokeWidth="1.4" />
        <circle cx="80" cy="80" r="5" fill="#C5A869" />
      </svg>
    ),
  },
];

/* ── Individual Editorial Differentiator Card ── */
function WhyCard({
  item,
  index,
  isInView,
}: {
  item: WhyItemData;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "2.6rem 2.2rem 2.2rem",
        border: `1px solid ${isHovered ? "rgba(197, 168, 105, 0.55)" : "#E5ECE7"}`,
        boxShadow: isHovered
          ? "0 20px 44px -8px rgba(10, 13, 11, 0.08), 0 4px 16px rgba(197, 168, 105, 0.12)"
          : "0 4px 18px rgba(10, 13, 11, 0.03)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        transform: isHovered
          ? "translateY(-6px)"
          : isInView
          ? "translateY(0)"
          : "translateY(32px)",
        opacity: isInView ? 1 : 0,
        transition: isHovered
          ? "transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms ease"
          : `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, box-shadow 280ms ease, border-color 280ms ease`,
        minHeight: "380px",
      }}
    >
      {/* ── Left Edge Champagne Gold Indicator ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "2.4rem",
          left: 0,
          width: "3px",
          height: isHovered ? "48px" : "24px",
          backgroundColor: "#C5A869",
          borderRadius: "0 3px 3px 0",
          boxShadow: isHovered ? "0 0 10px rgba(197, 168, 105, 0.6)" : "none",
          transition: "height 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms ease",
          zIndex: 3,
        }}
      />

      {/* ── Subtle Pointer-Following Radial Spotlight ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease",
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 168, 105, 0.11) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* ── Oversized Architectural Watermark Numeral ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.5rem",
          fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
          fontSize: "clamp(3.8rem, 5.5vw, 4.8rem)",
          fontWeight: 400,
          lineHeight: 1,
          color: "#C5A869",
          opacity: isHovered ? 0.22 : 0.08,
          transform: isHovered ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
          transition: "all 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {item.number}
      </div>

      {/* ── Background Unique Vector Motif ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-25px",
          right: "-25px",
          pointerEvents: "none",
          opacity: isHovered ? 0.09 : 0.035,
          transform: isHovered ? "scale(1.08) rotate(4deg)" : "scale(1) rotate(0deg)",
          transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0,
        }}
      >
        {item.watermark}
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top Header Row: Responsive Icon Container */}
        <div style={{ marginBottom: "1.75rem" }}>
          {/* Dual-Tone Responsive Icon Container */}
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "14px",
              backgroundColor: isHovered ? "#0A0D0B" : "rgba(197, 168, 105, 0.12)",
              border: `1px solid ${isHovered ? "#C5A869" : "rgba(197, 168, 105, 0.35)"}`,
              color: isHovered ? "#C5A869" : "#8A7040",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isHovered
                ? "0 8px 20px -2px rgba(10, 13, 11, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.12)"
                : "0 2px 8px rgba(197, 168, 105, 0.08)",
              transform: isHovered ? "scale(1.05) translateY(-2px)" : "scale(1) translateY(0)",
              transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {item.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
            fontSize: "1.45rem",
            fontWeight: 400,
            color: "#0A0D0B",
            lineHeight: 1.25,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: "0.95rem",
            color: "#54655B",
            lineHeight: 1.68,
            margin: 0,
          }}
        >
          {item.description}
        </p>
      </div>

      {/* ── Bottom Reassurance Detail ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "1.25rem",
          marginTop: "2rem",
          borderTop: "1px solid #EEF3EF",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#C5A869",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#7E6938",
            letterSpacing: "0.01em",
          }}
        >
          {item.tagline}
        </span>
      </div>
    </div>
  );
}

export default function WhyTaxnetSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-taxnet"
      style={{
        backgroundColor: "#FAFBF9",
        paddingTop: "5.5rem",
        paddingBottom: "6rem",
        position: "relative",
        borderBottom: "1px solid #E5EAE7",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Section Header with Staggered Entrance */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 3.75rem",
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            opacity: isInView ? 1 : 0,
            transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "#8C713A",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
            }}
          >
            <span
              style={{
                width: "20px",
                height: "1px",
                backgroundColor: "#C5A869",
                display: "inline-block",
              }}
            />
            The Taxnet Difference
            <span
              style={{
                width: "20px",
                height: "1px",
                backgroundColor: "#C5A869",
                display: "inline-block",
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#0A0D0B",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Why Taxnet
          </h2>
        </div>

        {/* 3 Pillars Grid with Rich Editorial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {WHY_ITEMS.map((item, index) => (
            <WhyCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
