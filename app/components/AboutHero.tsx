"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Video autoplay assurance
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    const playAttempt = () => {
      vid.play().catch(() => {
        document.addEventListener("click", () => vid.play().catch(() => {}), { once: true });
      });
    };
    if (vid.readyState >= 3) {
      playAttempt();
    } else {
      vid.addEventListener("canplay", playAttempt, { once: true });
    }
  }, []);

  // GSAP Cinematic Instant-Start Scale-Up Reveal & Delayed Text Emergence
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure instant-start initial values: already visible & ready to expand
      gsap.set(logoWrapperRef.current, {
        scale: 0.08,
        opacity: 0.4,
        filter: "blur(2px) brightness(1.1) drop-shadow(0 0 25px rgba(197, 168, 105, 0.4))",
        transformOrigin: "center center",
      });

      gsap.set(haloRef.current, {
        scale: 0.1,
        opacity: 0.45,
        transformOrigin: "center center",
      });

      gsap.set([taglineRef.current, sublineRef.current, ctaRef.current], {
        opacity: 0,
        y: 24,
      });

      // ── 1. Fast Opacity Ramp (Visible immediately within 0.35s) ──
      tl.to(
        logoWrapperRef.current,
        {
          opacity: 1,
          filter:
            "blur(0px) brightness(1) drop-shadow(0 12px 45px rgba(0, 0, 0, 0.75)) drop-shadow(0 0 35px rgba(197, 168, 105, 0.55))",
          duration: 0.35,
          ease: "power2.out",
        },
        0
      );

      tl.to(
        haloRef.current,
        {
          opacity: 0.85,
          duration: 0.35,
          ease: "power2.out",
        },
        0
      );

      // ── 2. Instant Outward Momentum (power1.out moves immediately at t = 0) ──
      tl.to(
        haloRef.current,
        {
          scale: 1,
          duration: 3.2,
          ease: "power1.out",
        },
        0
      );

      tl.to(
        logoWrapperRef.current,
        {
          scale: 1.05, // Dramatic subtle overshoot
          duration: 3.2,
          ease: "power1.out", // Immediate motion, decelerating smoothly
        },
        0
      );

      // Subtle gentle settling into final scale 1.0
      tl.to(
        logoWrapperRef.current,
        {
          scale: 1.0,
          filter:
            "blur(0px) brightness(1) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.65)) drop-shadow(0 0 22px rgba(197, 168, 105, 0.35))",
          duration: 0.7,
          ease: "power2.out",
        },
        3.2
      );

      // Specular glint sweeps across settled logo
      const glint = logoWrapperRef.current?.querySelector<HTMLElement>(".logo-glint");
      if (glint) {
        tl.fromTo(
          glint,
          { left: "-130%", opacity: 0 },
          { left: "140%", opacity: 0.75, duration: 1.2, ease: "power1.inOut" },
          3.4
        );
      }

      // ── 3. Text Fades In Gracefully Only After Logo Settles ──
      tl.to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
        },
        3.9
      );

      tl.to(
        sublineRef.current,
        {
          opacity: 0.92,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        4.15
      );

      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        4.35
      );
    }, containerRef);

    // Subtle 3D Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoWrapperRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xNorm = (clientX / innerWidth - 0.5) * 2;
      const yNorm = (clientY / innerHeight - 0.5) * 2;

      gsap.to(logoWrapperRef.current, {
        rotateY: xNorm * 6,
        rotateX: -yNorm * 5,
        x: xNorm * 8,
        y: yNorm * 6,
        duration: 1.0,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "90vh",
        backgroundColor: "#030805",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "140px",
        paddingBottom: "80px",
        textAlign: "center",
      }}
    >
      <style>{`
        @keyframes halo-breath {
          0%, 100% { opacity: 0.45; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.75; transform: translate(-50%, -50%) scale(1.06); }
        }
      `}</style>

      {/* ── Background Video Layer with Crisp Visibility ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.72) contrast(1.1)",
          }}
        >
          <source src="/videos/106340-672600365.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Cinematic Black & Gold Overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(3, 7, 5, 0.78) 0%, rgba(8, 12, 10, 0.62) 48%, rgba(4, 7, 5, 0.94) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Subtle Golden Glow & Dark Vignette to Frame the Center ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(197, 168, 105, 0.09) 0%, rgba(3, 7, 5, 0.8) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main Centered Container ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "880px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── THE CENTRAL BRAND LOGO (Centered, Instant-Start Scale-Up) ── */}
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2.25rem",
            perspective: "1000px",
          }}
        >
          {/* Soft Golden Ambient Halo (Visible immediately at frame 0, expands with Logo) */}
          <div
            ref={haloRef}
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "440px",
              height: "440px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(197, 168, 105, 0.45) 0%, rgba(161, 134, 80, 0.22) 42%, transparent 70%)",
              filter: "blur(32px)",
              pointerEvents: "none",
              opacity: 0.45,
              transform: "translate(-50%, -50%) scale(0.1)",
              willChange: "transform, opacity",
            }}
          />

          {/* Logo Frame: Visible & glowing right at frame 0, expands instantly */}
          <div
            ref={logoWrapperRef}
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "16px 28px",
              borderRadius: "20px",
              opacity: 0.4,
              transform: "scale(0.08)",
              filter: "blur(2px) brightness(1.1) drop-shadow(0 0 25px rgba(197, 168, 105, 0.4))",
              willChange: "transform, opacity, filter",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Specular Light Sweep Glint */}
            <div
              className="logo-glint"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-50%",
                left: "-130%",
                width: "45%",
                height: "200%",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.75) 50%, transparent 100%)",
                transform: "rotate(25deg)",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />

            {/* Exactly darklog.png as specified */}
            <Image
              src="/logo/darklog.png"
              alt="Taxnet Logo"
              width={520}
              height={178}
              priority
              style={{
                width: "clamp(260px, 42vw, 480px)",
                height: "auto",
                objectFit: "contain",
                display: "block",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* ── TEXT GROUP (Appears only AFTER logo finishes its scale-up) ── */}
        <div
          ref={textGroupRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "760px",
          }}
        >
          {/* Minimal Headline */}
          <h1
            ref={taglineRef}
            style={{
              fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
              fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "#FFFFFF",
              margin: "0 0 1.25rem 0",
              textShadow: "0 4px 24px rgba(0, 0, 0, 0.7)",
              opacity: 0,
              transform: "translateY(24px)",
            }}
          >
            Where Strategy Meets{" "}
            <span style={{ color: "#C5A869" }}>Integrity.</span>
          </h1>

          {/* Single Concise Core Subline */}
          <p
            ref={sublineRef}
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.18rem)",
              lineHeight: 1.65,
              color: "rgba(240, 235, 222, 0.92)",
              maxWidth: "580px",
              margin: "0 auto",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0, 0, 0, 0.6)",
              opacity: 0,
              transform: "translateY(24px)",
            }}
          >
            Expert taxation strategy united with bespoke lending intelligence—delivering clarity and certainty for Australian enterprises.
          </p>

          {/* ── Book A Consultation CTA ── */}
          <div
            ref={ctaRef}
            style={{
              marginTop: "2.25rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transform: "translateY(24px)",
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "#C5A869",
                color: "#05110A",
                fontFamily: "var(--font-sans, system-ui, sans-serif)",
                fontWeight: 700,
                fontSize: "0.98rem",
                letterSpacing: "0.01em",
                padding: "14px 32px",
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
              <span>Book A Consultation</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="tel:0398025800"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#FFFFFF",
                fontFamily: "var(--font-sans, system-ui, sans-serif)",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "13px 24px",
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Or call (03) 9802 5800</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
