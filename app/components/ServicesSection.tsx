"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
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
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <circle cx="10" cy="9" r="1.2" fill="currentColor" />
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
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <circle cx="12" cy="7.5" r="1.3" fill="currentColor" />
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
        <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <line x1="9" y1="11" x2="13" y2="11" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <circle cx="16.5" cy="11.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

/* ── Content Elements Component (Shared across Light Base & Dark Spotlight) ── */
function ServiceCardContent({
  service,
  isDark,
  isHovered,
}: {
  service: ServiceCardData;
  isDark: boolean;
  isHovered: boolean;
}) {
  return (
    <>
      {/* ── Top Accent Ribbon ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3.5px",
          background: isDark
            ? "linear-gradient(90deg, #C5A869 0%, #F5E5B8 50%, #C5A869 100%)"
            : "linear-gradient(90deg, #C5A869 0%, #E5D5A5 55%, rgba(197, 168, 105, 0.25) 100%)",
          transform: isHovered ? "scaleX(1)" : "scaleX(0.22)",
          transformOrigin: "left",
          transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: isDark ? "0 0 14px rgba(197, 168, 105, 0.8)" : "none",
          zIndex: 3,
        }}
      />

      {/* ── Main Content Area ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top Icon Row */}
        <div style={{ marginBottom: "1.75rem" }}>
          {/* Refined Icon Box */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "15px",
              backgroundColor: isDark ? "rgba(197, 168, 105, 0.22)" : "#0A0D0B",
              border: `1.5px solid ${isDark ? "#C5A869" : "rgba(10, 13, 11, 0.2)"}`,
              color: isDark ? "#DFC386" : "#C5A869",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isDark
                ? "0 0 24px rgba(197, 168, 105, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
                : "0 4px 14px rgba(0, 0, 0, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              transform: isHovered ? "scale(1.06) translateY(-2px)" : "scale(1) translateY(0)",
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
            color: isDark ? "#FFFFFF" : "#0A0D0B",
            lineHeight: 1.22,
            margin: "0 0 0.85rem",
            letterSpacing: "-0.01em",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: "0.95rem",
            color: isDark ? "rgba(255, 255, 255, 0.85)" : "#54655B",
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
          borderTop: `1px solid ${isDark ? "rgba(197, 168, 105, 0.3)" : "#EEF3EF"}`,
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
            color: isDark ? "#DFC386" : isHovered ? "#0A0D0B" : "#4B5563",
            letterSpacing: "0.01em",
          }}
        >
          Explore {service.title}
        </span>

        {/* Arrow Circle Button */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: isDark ? "#C5A869" : isHovered ? "#0A0D0B" : "rgba(10, 13, 11, 0.05)",
            border: `1px solid ${isDark ? "#E5D5A5" : isHovered ? "#0A0D0B" : "rgba(10, 13, 11, 0.12)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isDark ? "#0A0D0B" : isHovered ? "#FFFFFF" : "#0A0D0B",
            boxShadow: isDark
              ? "0 4px 14px rgba(197, 168, 105, 0.45)"
              : isHovered
              ? "0 4px 14px rgba(10, 13, 11, 0.25)"
              : "none",
            transform: isHovered ? "translateX(3px)" : "translateX(0)",
            transition: "all 260ms cubic-bezier(0.16, 1, 0.3, 1)",
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
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </>
  );
}

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
  const overlayRef = useRef<HTMLDivElement>(null);
  const liquidGlowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  // Dynamic Liquid physics simulation refs
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  const startLiquidLoop = useCallback(() => {
    if (animFrameIdRef.current) return;
    let pulseTime = 0;

    const tick = () => {
      pulseTime += 0.055;

      // Heavy liquid viscosity lerp (0.13)
      const dx = targetPosRef.current.x - currentPosRef.current.x;
      const dy = targetPosRef.current.y - currentPosRef.current.y;

      currentPosRef.current.x += dx * 0.13;
      currentPosRef.current.y += dy * 0.13;

      // Velocity & momentum stretch
      const speed = Math.hypot(dx, dy);
      const stretch = Math.min(speed * 0.24, 32);
      const squish = Math.min(speed * 0.12, 16);

      // Organic liquid droplet breathing
      const breath = Math.sin(pulseTime) * 3.5;
      const rx = Math.max(165 + stretch + breath, 140);
      const ry = Math.max(165 - squish + breath, 140);

      const x = currentPosRef.current.x;
      const y = currentPosRef.current.y;

      // Update liquid mask directly on the GPU layer
      if (overlayRef.current && isHoveredRef.current) {
        const liquidMask = `radial-gradient(ellipse ${rx.toFixed(1)}px ${ry.toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, black 64%, rgba(0,0,0,0.85) 78%, transparent 100%)`;
        overlayRef.current.style.webkitMaskImage = liquidMask;
        overlayRef.current.style.maskImage = liquidMask;
      }

      // Update subtle liquid meniscus aura
      if (liquidGlowRef.current && isHoveredRef.current) {
        liquidGlowRef.current.style.background = `radial-gradient(ellipse ${(rx + 14).toFixed(1)}px ${(ry + 14).toFixed(1)}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, rgba(197, 168, 105, 0.20) 68%, rgba(197, 168, 105, 0.08) 84%, transparent 100%)`;
      }

      if (isHoveredRef.current || Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
        animFrameIdRef.current = requestAnimationFrame(tick);
      } else {
        animFrameIdRef.current = null;
      }
    };

    animFrameIdRef.current = requestAnimationFrame(tick);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetPosRef.current = { x, y };
    currentPosRef.current = { x, y };
    isHoveredRef.current = true;
    setIsHovered(true);
    startLiquidLoop();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    targetPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!animFrameIdRef.current) {
      startLiquidLoop();
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <Link
      ref={cardRef}
      href={service.href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        border: `1.5px solid ${isHovered ? "#0A0D0B" : "#E5ECE7"}`,
        boxShadow: isHovered
          ? "0 20px 42px -10px rgba(10, 13, 11, 0.12), 0 4px 16px rgba(10, 13, 11, 0.04)"
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
      {/* ── Base Layer (Light Card Content) ── */}
      <ServiceCardContent service={service} isDark={false} isHovered={isHovered} />

      {/* ── Fluid Liquid Meniscus Aura (Subtle gold liquid edge) ── */}
      <div
        aria-hidden="true"
        ref={liquidGlowRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 300ms ease",
          zIndex: 9,
        }}
      />

      {/* ── Dynamic Liquid Inverted Spotlight Layer (Masked by Viscous Liquid Droplet) ── */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0A0D0B",
          borderRadius: "20px",
          padding: "2.6rem 2.2rem 2.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 10,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 240ms ease",
          willChange: "mask-image, -webkit-mask-image",
        }}
      >
        <ServiceCardContent service={service} isDark={true} isHovered={isHovered} />
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
