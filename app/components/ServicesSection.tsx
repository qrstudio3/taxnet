"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  watermark: React.ReactNode;
}

const SERVICES: ServiceCardData[] = [
  {
    id: "accounting-and-tax",
    title: "Accounting & Tax",
    description:
      "Tax returns, BAS, company and SMSF compliance, and planning ahead so there are no surprises.",
    href: "/accounting-and-tax",
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="#E5D7B5" strokeWidth="1.6" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="#E5D7B5" strokeWidth="1.6" />
        <circle cx="10" cy="9" r="1.2" fill="#C5A869" />
      </svg>
    ),
    watermark: (
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="25" y="20" width="130" height="140" rx="12" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="4 4" />
        <rect x="40" y="38" width="100" height="10" rx="3" fill="#C5A869" />
        <line x1="40" y1="62" x2="140" y2="62" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="40" y1="78" x2="115" y2="78" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="40" y1="94" x2="140" y2="94" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="40" y1="110" x2="105" y2="110" stroke="#C5A869" strokeWidth="1.2" />
        <circle cx="125" cy="125" r="18" stroke="#C5A869" strokeWidth="1.4" />
        <path d="M118 125l5 5 10-10" stroke="#C5A869" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "mortgage-broking",
    title: "Mortgage Broking",
    description:
      "Home, investment and business loans, with your tax position in view from the start.",
    href: "/mortgage-broking",
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
        <path d="M3 9.5L12 3l9 6.5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="#E5D7B5" strokeWidth="1.6" />
        <circle cx="12" cy="7.5" r="1.3" fill="#C5A869" />
      </svg>
    ),
    watermark: (
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 90L90 30L160 90" stroke="#C5A869" strokeWidth="1.5" />
        <path d="M36 78V155H144V78" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="4 4" />
        <line x1="90" y1="30" x2="90" y2="155" stroke="#C5A869" strokeWidth="1" strokeDasharray="2 3" />
        <rect x="70" y="105" width="40" height="50" rx="4" stroke="#C5A869" strokeWidth="1.3" />
        <circle cx="90" cy="75" r="14" stroke="#C5A869" strokeWidth="1.3" />
        <line x1="50" y1="155" x2="130" y2="155" stroke="#C5A869" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description:
      "Accurate, up-to-date books and payroll, so your BAS and tax time run smoothly.",
    href: "/bookkeeping",
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
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" stroke="#E5D7B5" strokeWidth="1.6" />
        <line x1="9" y1="11" x2="13" y2="11" stroke="#E5D7B5" strokeWidth="1.6" />
        <circle cx="16.5" cy="11.5" r="1.2" fill="#C5A869" />
      </svg>
    ),
    watermark: (
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="25" y="25" width="130" height="130" rx="10" stroke="#C5A869" strokeWidth="1.4" strokeDasharray="3 3" />
        <line x1="25" y1="65" x2="155" y2="65" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="25" y1="105" x2="155" y2="105" stroke="#C5A869" strokeWidth="1.2" />
        <line x1="80" y1="25" x2="80" y2="155" stroke="#C5A869" strokeWidth="1.2" />
        <circle cx="52" cy="45" r="6" fill="#C5A869" fillOpacity="0.4" />
        <circle cx="118" cy="45" r="6" fill="#C5A869" fillOpacity="0.4" />
        <rect x="42" y="80" width="22" height="8" rx="2" fill="#C5A869" />
        <rect x="105" y="80" width="30" height="8" rx="2" fill="#C5A869" />
        <rect x="42" y="120" width="28" height="8" rx="2" fill="#C5A869" />
        <rect x="105" y="120" width="20" height="8" rx="2" fill="#C5A869" />
      </svg>
    ),
  },
];

/* ── Individual Interactive Service Card Component ── */
function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: ServiceCardData;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <Link
      ref={cardRef}
      href={service.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        textDecoration: "none",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "2.6rem 2.2rem 2.2rem",
        border: `1px solid ${isHovered ? "rgba(197, 168, 105, 0.55)" : "#E5ECE7"}`,
        boxShadow: isHovered
          ? "0 20px 44px -8px rgba(10, 13, 11, 0.08), 0 4px 16px rgba(197, 168, 105, 0.12)"
          : "0 4px 20px rgba(10, 13, 11, 0.03)",
        transform: isHovered
          ? "translateY(-7px)"
          : isInView
          ? "translateY(0)"
          : "translateY(32px)",
        opacity: isInView ? 1 : 0,
        transition: isHovered
          ? "transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms ease"
          : `transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, box-shadow 280ms ease, border-color 280ms ease`,
        overflow: "hidden",
        cursor: "pointer",
        minHeight: "410px",
      }}
    >
      {/* ── Top Champagne Gold Accent Ribbon ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, #C5A869 0%, #E5D5A5 55%, rgba(197, 168, 105, 0.25) 100%)",
          transform: isHovered ? "scaleX(1)" : "scaleX(0.22)",
          transformOrigin: "left",
          transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
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
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 168, 105, 0.11) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* ── Background Unique Vector Watermark Detail ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          pointerEvents: "none",
          opacity: isHovered ? 0.11 : 0.045,
          transform: isHovered ? "scale(1.08) rotate(-2deg)" : "scale(1) rotate(0deg)",
          transition: "all 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0,
        }}
      >
        {service.watermark}
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top Icon Row */}
        <div style={{ marginBottom: "1.75rem" }}>
          {/* Refined Obsidian & Gold Icon Box */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "15px",
              backgroundColor: "#0A0D0B",
              border: `1px solid ${isHovered ? "rgba(197, 168, 105, 0.85)" : "rgba(197, 168, 105, 0.35)"}`,
              color: "#C5A869",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isHovered
                ? "0 10px 24px -2px rgba(197, 168, 105, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.14)"
                : "0 4px 14px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              transform: isHovered ? "scale(1.05) translateY(-2px)" : "scale(1) translateY(0)",
              transition: "all 300ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
            fontSize: "1.6rem",
            fontWeight: 400,
            color: "#0A0D0B",
            lineHeight: 1.22,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
            transition: "color 200ms ease",
          }}
        >
          {service.title}
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
          {service.description}
        </p>
      </div>

      {/* ── Integrated Interactive Footer Action ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "1.5rem",
          marginTop: "2.25rem",
          borderTop: "1px solid #EEF3EF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: "0.88rem",
            fontWeight: 700,
            color: isHovered ? "#8C713A" : "#111827",
            letterSpacing: "0.01em",
            transition: "color 220ms ease",
          }}
        >
          Explore {service.title}
        </span>

        {/* Smooth Forward-Translating Arrow Circle */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: isHovered ? "#0A0D0B" : "rgba(197, 168, 105, 0.12)",
            border: `1px solid ${isHovered ? "#C5A869" : "rgba(197, 168, 105, 0.32)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isHovered ? "#C5A869" : "#8A7040",
            transition: "all 240ms cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: isHovered ? "0 4px 12px rgba(10, 13, 11, 0.18)" : "none",
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isHovered ? "translateX(2px)" : "translateX(0)",
              transition: "transform 240ms ease",
            }}
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
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
      id="services"
      style={{
        backgroundColor: "#FFFFFF",
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
            maxWidth: "640px",
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
            Core Capabilities
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
              margin: "0 0 0.85rem",
              letterSpacing: "-0.01em",
            }}
          >
            What we do
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
              fontSize: "1rem",
              color: "#54655B",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Three interconnected services designed to keep your tax, lending, and business operations moving in harmony.
          </p>
        </div>

        {/* Three Rich Interactive Service Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            alignItems: "stretch",
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
