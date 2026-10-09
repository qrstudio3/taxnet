"use client";

import React, { useEffect, useRef, useState } from "react";

/* ─── Plan Data ─── */
const PLANS = [
  {
    id: "chris",
    persona: "Chris",
    role: "The Contractor",
    price: 275,
    borderGlow: "rgba(255,255,255,0.18)",
    tag: "Sole Trader",
    featured: false,
    features: [
      "2 Business Bank Accounts",
      "No Other Employees",
      "Monthly Profit & Loss Discussions",
      "Quarterly BAS Lodgements",
      "End of Year Tax & Financials Included",
    ],
  },
  {
    id: "emma",
    persona: "Emma",
    role: "The Takeaway Cafe Owner",
    price: 475,
    borderGlow: "rgba(161, 134, 80, 0.8)",
    tag: "Most Popular",
    featured: true,
    features: [
      "3 Business Bank Accounts",
      "5 Staff",
      "Fortnightly Payroll",
      "Quarterly Cash Budgeting",
      "Quarterly BAS Lodgments",
      "End of Year Tax & Financials Included",
    ],
  },
  {
    id: "mick",
    persona: "Mick",
    role: "The Well-Established Firm",
    price: 690,
    borderGlow: "rgba(255,255,255,0.18)",
    tag: "Full Service",
    featured: false,
    features: [
      "Bills Clients through Xero",
      "Tracks Expenses with Hubdoc",
      "Multiple Business Bank Accounts",
      "10 Employees including timesheets",
      "Fortnightly Payroll",
      "Monthly Cash Flow Reports",
      "Monthly Budget",
      "Monthly Superannuation",
      "Payroll Tax Reconciliations",
      "End of Year Tax & Financials Included",
    ],
  },
];

/* ─── Animated Check Icon ─── */
function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <circle
        cx="8.5"
        cy="8.5"
        r="8.5"
        fill={featured ? "rgba(161, 134, 80, 0.25)" : "rgba(255,255,255,0.08)"}
      />
      <path
        d="M5 8.8L7.5 11.3L12 6"
        stroke={featured ? "#A18650" : "rgba(255,255,255,0.55)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Single Plan Card ─── */
function PlanCard({
  plan,
  animDelay,
  visible,
}: {
  plan: (typeof PLANS)[0];
  animDelay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        flex: "1 1 0",
        minWidth: "260px",
        maxWidth: "350px",
        background: plan.featured
          ? "rgba(161, 134, 80, 0.08)"
          : "rgba(255,255,255,0.05)",
        border: `1px solid ${
          hovered || plan.featured ? plan.borderGlow : "rgba(255,255,255,0.1)"
        }`,
        borderRadius: "20px",
        padding: plan.featured ? "1.6rem 1.5rem 1.4rem" : "1.4rem 1.35rem 1.35rem",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered
          ? plan.featured
            ? "0 28px 70px rgba(0,0,0,0.6), 0 0 45px rgba(161, 134, 80, 0.5), 0 0 0 2px rgba(161, 134, 80, 0.7)"
            : "0 20px 50px rgba(0,0,0,0.35)"
          : plan.featured
          ? "0 16px 45px rgba(0,0,0,0.5), 0 0 30px rgba(161, 134, 80, 0.4), 0 0 0 1.5px rgba(161, 134, 80, 0.45)"
          : "0 6px 24px rgba(0,0,0,0.2)",
        WebkitTransform: visible
          ? hovered
            ? "translateY(-8px) scale(1.015)"
            : plan.featured
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(40px) scale(0.97)",
        transform: visible
          ? hovered
            ? "translateY(-8px) scale(1.015)"
            : plan.featured
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(40px) scale(0.97)",
        opacity: visible ? 1 : 0,
        WebkitTransition: `transform 600ms cubic-bezier(0.25,0.46,0.45,0.94) ${animDelay}ms, -webkit-transform 600ms cubic-bezier(0.25,0.46,0.45,0.94) ${animDelay}ms, opacity 600ms ease ${animDelay}ms, box-shadow 260ms ease, border-color 260ms ease`,
        transition: `transform 600ms cubic-bezier(0.25,0.46,0.45,0.94) ${animDelay}ms, opacity 600ms ease ${animDelay}ms, box-shadow 260ms ease, border-color 260ms ease`,
        cursor: "default",
        zIndex: hovered ? 2 : plan.featured ? 1 : 0,
      } as React.CSSProperties}
    >
      {/* "Most Popular" pill badge */}
      {plan.featured && (
        <div
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650, #F5EFE4, #735C30)",
            color: "#111",
            fontSize: "0.64rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "4px 16px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            boxShadow: "0 6px 20px rgba(161, 134, 80, 0.65), 0 0 12px rgba(229, 214, 182, 0.5)",
          }}
        >
          ✦ Most Popular
        </div>
      )}

      {/* Header row: Persona & Tag */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.2rem",
        }}
      >
        <div
          style={{
            fontFamily: '"Monety", serif',
            fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {plan.persona}
        </div>
        <div
          style={{
            display: "inline-flex",
            background: plan.featured
              ? "rgba(161, 134, 80, 0.12)"
              : "rgba(255,255,255,0.07)",
            border: `1px solid ${
              plan.featured
                ? "rgba(161, 134, 80, 0.4)"
                : "rgba(255,255,255,0.12)"
            }`,
            color: plan.featured ? "#E5D6B6" : "rgba(255,255,255,0.65)",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 10px",
            borderRadius: "999px",
          }}
        >
          {plan.tag}
        </div>
      </div>

      {/* Role subtitle */}
      <div
        style={{
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "rgba(255,255,255,0.48)",
          marginBottom: "0.75rem",
          letterSpacing: "0.01em",
        }}
      >
        {plan.role}
      </div>

      {/* Thin divider */}
      <div
        style={{
          height: "1px",
          background: plan.featured
            ? "linear-gradient(90deg, transparent, rgba(161, 134, 80, 0.5), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
          marginBottom: "0.75rem",
          borderRadius: "1px",
        }}
      />

      {/* Price row */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "2px",
          marginBottom: "0.9rem",
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: plan.featured ? "#E5D6B6" : "rgba(255,255,255,0.65)",
          }}
        >
          $
        </span>
        <span
          style={{
            fontFamily: '"Monety", serif',
            fontSize: "clamp(2.3rem, 3.8vw, 2.9rem)",
            fontWeight: 400,
            background: plan.featured ? "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)" : "none",
            WebkitBackgroundClip: plan.featured ? "text" : "border-box",
            WebkitTextFillColor: plan.featured ? "transparent" : "#fff",
            color: plan.featured ? "transparent" : "#fff",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {plan.price}
        </span>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginLeft: "6px",
          }}
        >
          / Month + GST
        </span>
      </div>

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 1.25rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          flex: 1,
        }}
      >
        {plan.features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 400,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.35,
            }}
          >
            <CheckIcon featured={plan.featured} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          padding: "0.65rem 1.2rem",
          borderRadius: "10px",
          background: plan.featured
            ? "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)"
            : "rgba(255,255,255,0.08)",
          border: plan.featured
            ? "1px solid rgba(229, 214, 182, 0.5)"
            : "1px solid rgba(255,255,255,0.14)",
          color: plan.featured ? "#111" : "rgba(255,255,255,0.88)",
          fontWeight: 800,
          fontSize: "0.82rem",
          letterSpacing: "0.02em",
          textDecoration: "none",
          transition: "all 180ms ease",
          boxShadow: plan.featured ? "0 4px 16px rgba(161, 134, 80, 0.3)" : "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (plan.featured) {
            el.style.filter = "brightness(1.15)";
            el.style.boxShadow = "0 8px 24px rgba(161, 134, 80, 0.5)";
            el.style.transform = "translateY(-1px)";
          } else {
            el.style.background = "rgba(255,255,255,0.14)";
            el.style.borderColor = "rgba(255,255,255,0.25)";
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          if (plan.featured) {
            el.style.filter = "brightness(1)";
            el.style.boxShadow = "0 4px 16px rgba(161, 134, 80, 0.3)";
            el.style.transform = "translateY(0)";
          } else {
            el.style.background = "rgba(255,255,255,0.08)";
            el.style.borderColor = "rgba(255,255,255,0.14)";
          }
        }}
      >
        Get Started
        <svg width="13" height="13" viewBox="0 0 15 15" fill="none">
          <path
            d="M2.5 7.5H12.5M12.5 7.5L8.5 3.5M12.5 7.5L8.5 11.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

/* ─── Main Export ─── */
export default function PlansSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === sectionRef.current && e.isIntersecting)
            setVisible(true);
          if (e.target === headingRef.current && e.isIntersecting)
            setHeadingVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    if (headingRef.current) io.observe(headingRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="plans"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#0D3E26",
        overflow: "hidden",
        paddingTop: "3.75rem",
        paddingBottom: "4.25rem",
      }}
    >
      {/* ── Background decorations ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-150px",
          right: "-120px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,229,93,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.035) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Heading block ── */}
        <div
          ref={headingRef}
          style={{
            textAlign: "center",
            marginBottom: "2.25rem",
            transform: headingVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: headingVisible ? 1 : 0,
            filter: headingVisible ? "blur(0px)" : "blur(12px)",
            transition:
              "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s ease, filter 1.2s ease",
          }}
        >
          <h2
            style={{
              fontFamily: '"Monety", serif',
              fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0 auto 0.6rem",
              maxWidth: "680px",
            }}
          >
            Plans to suit your business{" "}
            <span style={{ 
              background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}>
              accounting & bookkeeping
            </span>{" "}
            needs
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Flat monthly fees with no surprises. Expert financial support
            tailored to your business size.
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              animDelay={60 + i * 110}
              visible={visible}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            transform: visible ? "translateY(0)" : "translateY(16px)",
            opacity: visible ? 0.6 : 0,
            transition: "transform 600ms ease 500ms, opacity 600ms ease 500ms",
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.02em",
            }}
          >
            All plans include a complimentary initial consultation &nbsp;·&nbsp;
            Prices exclude GST &nbsp;·&nbsp;{" "}
            <a
              href="#contact"
              style={{
                color: "#FFFFFF",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Need a custom plan? Let&apos;s talk.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
