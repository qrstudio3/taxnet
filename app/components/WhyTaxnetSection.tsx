"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface WhyItemData {
  id: string;
  number: string;
  title: string;
  description: string;
  tagline: string;
  icon: React.ReactNode;
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
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <circle cx="16" cy="17" r="1.5" fill="currentColor" />
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
        <polyline points="17 11 19 13 23 9" stroke="currentColor" strokeWidth="1.8" />
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
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
        <circle cx="12" cy="10" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

/* ── Content Elements Component (Shared across Light Base & Dark Spotlight) ── */
function WhyCardContent({
  item,
  isDark,
  isHovered,
}: {
  item: WhyItemData;
  isDark: boolean;
  isHovered: boolean;
}) {
  return (
    <>
      {/* ── Left Edge Indicator ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "2.4rem",
          left: 0,
          width: "3px",
          height: isHovered ? "48px" : "24px",
          backgroundColor: isDark ? "#C5A869" : "#C5A869",
          borderRadius: "0 3px 3px 0",
          boxShadow: isDark ? "0 0 14px rgba(197, 168, 105, 0.9)" : "none",
          transition: "height 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms ease",
          zIndex: 3,
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
          color: isDark ? "#C5A869" : "#0A0D0B",
          opacity: isDark ? 0.28 : 0.05,
          transform: isHovered ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
          transition: "all 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {item.number}
      </div>

      {/* ── Main Content Area ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Top Header Row: Responsive Icon Container */}
        <div style={{ marginBottom: "1.75rem" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "14px",
              backgroundColor: isDark ? "rgba(197, 168, 105, 0.22)" : "rgba(10, 13, 11, 0.05)",
              border: `1.5px solid ${isDark ? "#C5A869" : "rgba(10, 13, 11, 0.12)"}`,
              color: isDark ? "#DFC386" : "#0A0D0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isDark
                ? "0 0 24px rgba(197, 168, 105, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.25)"
                : "0 2px 8px rgba(10, 13, 11, 0.04)",
              transform: isHovered ? "scale(1.06) translateY(-2px)" : "scale(1) translateY(0)",
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
            color: isDark ? "#FFFFFF" : "#0A0D0B",
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
            color: isDark ? "rgba(255, 255, 255, 0.85)" : "#54655B",
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
          borderTop: `1px solid ${isDark ? "rgba(197, 168, 105, 0.3)" : "#EEF3EF"}`,
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
            boxShadow: isDark ? "0 0 8px #C5A869" : "none",
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: "0.8rem",
            fontWeight: 600,
            color: isDark ? "#DFC386" : "#7E6938",
            letterSpacing: "0.01em",
          }}
        >
          {item.tagline}
        </span>
      </div>
    </>
  );
}

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

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        padding: "2.6rem 2.2rem 2.2rem",
        border: `1.5px solid ${isHovered ? "#0A0D0B" : "#E5ECE7"}`,
        boxShadow: isHovered
          ? "0 20px 42px -10px rgba(10, 13, 11, 0.12), 0 4px 16px rgba(10, 13, 11, 0.04)"
          : "0 4px 18px rgba(10, 13, 11, 0.03)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        transform: isHovered
          ? "translateY(-7px)"
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
      {/* ── Base Layer (Light Card Content) ── */}
      <WhyCardContent item={item} isDark={false} isHovered={isHovered} />

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
        <WhyCardContent item={item} isDark={true} isHovered={isHovered} />
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
