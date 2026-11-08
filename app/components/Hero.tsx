"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

/* Combined navbar height: top row 72px + service bar 44px = 116px */
const NAV_H = 116;

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
          alt="TaxNet Logo"
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

          {/* Overline */}
          <div
            ref={overlineRef}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", opacity: 0 }}
          >
            <span style={{ display: "block", width: "2rem", height: "1px", backgroundColor: "rgba(249,249,246,0.38)" }} />
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: "0.6875rem", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(249,249,246,0.5)",
            }}>
              Taxation · Bookkeeping · Mortgage · Business Advisory
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={h1Ref}
            aria-label="File right. Pay less."
            style={{
              fontFamily: "var(--font-monety)",
              fontSize: "clamp(2.75rem, 7.5vw, 8.5rem)",
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: "-0.01em",
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>File</span>
              {" "}
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>right.</span>
            </span>
            <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.1em" }}>
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>Pay</span>
              {" "}
              <span className="hl-word" style={{ display: "inline-block", opacity: 0 }}>less.</span>
            </span>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem,1.4vw,1.125rem)",
              lineHeight: 1.72,
              color: "rgba(249,249,246,0.58)",
              maxWidth: "34rem",
              marginBottom: "2rem",
              opacity: 0,
            }}
          >
            Expert advisors keeping more of your money where it belongs — in your hands.
            Tax, mortgages, bookkeeping and business strategy under one roof.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", opacity: 0 }}
          >
            {/* Calculator Link */}
            <Link
              href="/calculator"
              id="hero-cta-calculator"
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
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(161, 134, 80, 0.35)",
                transition: "background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(161, 134, 80, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#A18650";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(161, 134, 80, 0.35)";
              }}
            >
              <span>How much I can borrow</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              id="hero-cta-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                backgroundColor: "var(--color-secondary)",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                letterSpacing: "0.01em",
                padding: "0.9rem 1.8rem",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "background-color 220ms ease, transform 200ms ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--color-secondary-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "var(--color-secondary)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a Chat
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="#services"
              id="hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(249,249,246,0.72)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                textDecoration: "none",
                paddingBottom: "2px",
                borderBottom: "1px solid rgba(249,249,246,0.28)",
                transition: "color 180ms ease, border-color 180ms ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(249,249,246,0.75)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(249,249,246,0.72)"; e.currentTarget.style.borderColor = "rgba(249,249,246,0.28)"; }}
            >
              Our Services
            </a>
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
