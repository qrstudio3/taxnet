"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

/* Combined navbar height: top row 72px + service bar 44px = 116px */
const NAV_H = 80;

export default function Hero() {
  const heroRef     = useRef<HTMLElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);
  const h1Ref       = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef     = useRef<HTMLImageElement>(null);

  /* Force video play — bypasses browser autoplay restrictions */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    const attempt = () => {
      vid.play().catch(() => {
        /* retry once on next interaction */
        document.addEventListener("click", () => vid.play().catch(() => {}), { once: true });
      });
    };
    if (vid.readyState >= 3) {
      attempt();
    } else {
      vid.addEventListener("canplay", attempt, { once: true });
    }
  }, []);

  /* GSAP entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Preloader Logo Reveal
      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.9, filter: "blur(12px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4, ease: "power2.out" }
      )
      // 2. Preloader Logo Fade Out
      .to(logoRef.current, { opacity: 0, scale: 1.05, filter: "blur(5px)", duration: 0.7, delay: 0.4 }, "hide")
      // 3. Preloader Background Fade Out
      .to(preloaderRef.current, { opacity: 0, duration: 0.8 }, "hide+=0.2")

      // 4. Reveal Hero Elements
      const words = h1Ref.current?.querySelectorAll<HTMLElement>(".hl-word");
      if (words?.length) {
        tl.fromTo(words,
          { y: 90, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.05, stagger: 0.14 },
          "hide+=0.5"
        );
      }

      tl.fromTo(overlineRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.65 },
        "hide+=0.75"
      );

      tl.fromTo(subRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65 },
        "hide+=1.2"
      );

      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55 },
        "hide+=1.4"
      );

      tl.fromTo(lineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1.1, ease: "power2.inOut" },
        "hide+=1.35"
      );


    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        /* Full viewport — transparent navbar floats over the top */
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "620px",
        overflow: "hidden",
        backgroundColor: "#06100a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* ── Cinematic Preloader ── */}
      <div
        ref={preloaderRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#06100a",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <img
          ref={logoRef}
          src="/logo/darklog.png"
          alt="Taxnet Logo"
          style={{ width: "260px", height: "auto", opacity: 0 }}
        />
      </div>

      {/* ── Video background ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 15%",
          pointerEvents: "none",
        }}
      >
        <source src="/videos/268230_medium.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              108deg,
              rgba(4,14,8,0.88) 0%,
              rgba(6,20,12,0.52) 52%,
              rgba(3,10,6,0.84) 100%
            )
          `,
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom fade into page bg ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "240px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(249,249,246,0.1) 55%, #F9F9F6 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Content — vertically centred, pushed below navbar ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1260px",
          margin: "0 auto",
          /* top padding clears transparent 2-row navbar */
          paddingTop: `max(${NAV_H}px, 14vh)`,
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingBottom: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        {/* Left */}
        <div>

          {/* Overline: Big-firm expertise · Personal service */}
          <div
            ref={overlineRef}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", opacity: 0 }}
          >
            <span style={{ display: "block", width: "2rem", height: "1px", backgroundColor: "#C5A869" }} />
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase", color: "#C5A869",
            }}>
              Big-firm expertise · Personal service
            </span>
          </div>

          {/* Headline: One firm. Every financial move. */}
          <h1
            ref={h1Ref}
            aria-label="One firm. Every financial move."
            style={{
              fontFamily: "var(--font-monety)",
              fontSize: "clamp(2.4rem, 6.2vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 0.96,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>One</span>
              {" "}
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>firm.</span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>Every</span>
              {" "}
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>financial</span>
              {" "}
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>move.</span>
            </span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem,1.4vw,1.125rem)",
              lineHeight: 1.72,
              color: "rgba(249,249,246,0.7)",
              maxWidth: "34rem",
              marginBottom: "2rem",
              opacity: 0,
            }}
          >
            Tax, accounting, mortgage broking and bookkeeping under one roof.
            We help individuals and businesses make smart financial moves with clarity and personal care.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", opacity: 0 }}
          >
            {/* Borrowing Calculator Button */}
            <Link
              href="/calculator"
              id="hero-cta-calculator"
              className="playful-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                backgroundColor: "#A18650",
                color: "#06120B",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
                padding: "0.9rem 1.8rem",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(161, 134, 80, 0.35)",
                transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 14px 32px rgba(161, 134, 80, 0.5), 0 0 0 2px rgba(229, 213, 165, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#A18650";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(161, 134, 80, 0.35)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(1.5px) scale(0.96)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
              }}
            >
              <span>Borrowing Calculator</span>
              <span className="btn-arrow" aria-hidden="true" style={{ transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)", display: "inline-block" }}>→</span>
            </Link>

            {/* Book a Chat */}
            <Link
              href="/contact"
              id="hero-cta-contact"
              className="playful-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#FFFFFF",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
                padding: "0.9rem 1.8rem",
                borderRadius: "6px",
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.28)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
                e.currentTarget.style.borderColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(197, 168, 105, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.28)";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(1.5px) scale(0.96)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
              }}
            >
              <span>Book a Chat</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div
        ref={lineRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%) scaleY(0)",
          transformOrigin: "top",
          width: "1px",
          height: "3rem",
          backgroundColor: "rgba(249,249,246,0.28)",
        }}
      />
    </section>
  );
}
