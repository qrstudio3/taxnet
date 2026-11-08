"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ContactHero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // GSAP Cinematic Entrance & Text Animation
  useEffect(() => {
    if (!mounted || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Cinematic Background Ken-Burns Zoom-In
      if (bgRef.current) {
        tl.fromTo(
          bgRef.current,
          { scale: 1.15, opacity: 0, filter: "brightness(0.3) contrast(1.3) blur(8px)" },
          { scale: 1.04, opacity: 0.65, filter: "brightness(0.55) contrast(1.15) blur(0px)", duration: 2.2, ease: "power2.out" },
          0
        );
      }

      // 2. Ambient Golden Glow Bloom
      if (glowRef.current) {
        tl.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 2.0, ease: "sine.out" },
          0.2
        );
      }

      // 3. Overline Reveal
      if (overlineRef.current) {
        tl.fromTo(
          overlineRef.current,
          { opacity: 0, y: 16, letterSpacing: "0.22em" },
          { opacity: 1, y: 0, letterSpacing: "0.14em", duration: 0.9 },
          0.35
        );
      }

      // 4. Kinetic Typography - Split Words Mask Reveal
      const words = titleRef.current?.querySelectorAll<HTMLElement>(".hero-word");
      if (words && words.length > 0) {
        tl.fromTo(
          words,
          {
            y: "115%",
            opacity: 0,
            rotateX: -32,
            filter: "blur(6px)",
          },
          {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.07,
            ease: "power4.out",
          },
          0.45
        );
      }

      // 5. Gold Highlight Shimmer
      const goldSpan = titleRef.current?.querySelector<HTMLElement>(".gold-shimmer");
      if (goldSpan) {
        tl.fromTo(
          goldSpan,
          { backgroundPosition: "200% 0" },
          { backgroundPosition: "-200% 0", duration: 1.8, ease: "power1.inOut" },
          1.1
        );
      }

      // 6. Subheading Paragraph Fade & Lift
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 22, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.95 },
          0.9
        );
      }

      // 7. Interactive Action Buttons Stagger
      const buttons = actionsRef.current?.querySelectorAll<HTMLElement>(".hero-btn");
      if (buttons && buttons.length > 0) {
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.1, ease: "back.out(1.5)" },
          1.1
        );
      }

      // 8. Scroll Indicator Fade In
      if (scrollCueRef.current) {
        tl.fromTo(
          scrollCueRef.current,
          { opacity: 0, y: -10 },
          { opacity: 0.85, y: 0, duration: 0.8 },
          1.5
        );
      }
    }, heroRef);

    // Subtle 3D Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current || !glowRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yNorm = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to(bgRef.current, {
        x: -xNorm * 18,
        y: -yNorm * 14,
        duration: 1.8,
        ease: "power1.out",
      });

      gsap.to(glowRef.current, {
        x: xNorm * 30,
        y: yNorm * 25,
        duration: 2.2,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted]);

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "640px",
        backgroundColor: "#05110A",
        color: "#FFFFFF",
        paddingTop: "150px",
        paddingBottom: "100px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        .hero-word-wrap {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          margin-right: 0.28em;
          padding-bottom: 0.08em;
        }
        .hero-word {
          display: inline-block;
          will-change: transform, opacity;
          transform-origin: 50% 100%;
        }
        .gold-shimmer {
          background: linear-gradient(
            90deg,
            #C5A869 0%,
            #FFF0CE 25%,
            #C5A869 50%,
            #E5D6B6 75%,
            #C5A869 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .hero-cta-primary {
          background: linear-gradient(135deg, #C5A869 0%, #A18650 100%);
          color: #06190E !important;
          font-weight: 800;
          font-size: 0.92rem;
          padding: 12px 24px;
          border-radius: 10px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 8px 24px rgba(197, 168, 105, 0.35);
          transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(197, 168, 105, 0.48);
          filter: brightness(1.06);
        }
        .hero-glass-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-glass-btn:hover {
          background-color: rgba(255, 255, 255, 0.16);
          border-color: rgba(197, 168, 105, 0.55);
          transform: translateY(-2px);
          color: #FFF6E5;
        }
        .hero-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 18px;
          border-radius: 10px;
          background-color: rgba(37, 211, 102, 0.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(37, 211, 102, 0.4);
          color: #FFFFFF;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-whatsapp-btn:hover {
          background-color: rgba(37, 211, 102, 0.28);
          border-color: #25D366;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.25);
        }
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes float-dust {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-40px) translateX(15px); opacity: 0.75; }
          100% { transform: translateY(-80px) translateX(-10px); opacity: 0; }
        }
        .dust-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #E5D6B6 0%, transparent 80%);
          pointer-events: none;
          animation: float-dust 7s ease-in-out infinite;
        }
        @keyframes mouse-wheel {
          0% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(6px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 0.9; }
        }
        .scroll-dot {
          animation: mouse-wheel 1.8s ease-in-out infinite;
        }
      `}</style>

      {/* ─── Cinematic Background Layer ─── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-5%",
          left: "-5%",
          width: "110%",
          height: "110%",
          backgroundImage: "url('/taxnet-other-page/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
          pointerEvents: "none",
          willChange: "transform, opacity, filter",
        }}
      />

      {/* ─── Deep Multi-Tier Forest & Charcoal Atmospheric Gradients ─── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5, 17, 10, 0.85) 0%, rgba(13, 62, 38, 0.72) 45%, rgba(5, 17, 10, 0.97) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ─── Radial Dark Vignette For Text Legibility ─── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 35% 45%, transparent 20%, rgba(4, 14, 8, 0.8) 75%, rgba(3, 10, 6, 0.95) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* ─── Golden Ambient Glow Spotlight ─── */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "25%",
          width: "720px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(197, 168, 105, 0.28) 0%, rgba(13, 62, 38, 0.15) 50%, transparent 75%)",
          pointerEvents: "none",
          filter: "blur(40px)",
          animation: "subtle-pulse 6s ease-in-out infinite",
        }}
      />

      {/* ─── Floating Golden Micro-Dust Particles ─── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="dust-particle" style={{ width: "4px", height: "4px", top: "70%", left: "20%", animationDelay: "0s" }} />
        <div className="dust-particle" style={{ width: "6px", height: "6px", top: "80%", left: "45%", animationDelay: "2.4s" }} />
        <div className="dust-particle" style={{ width: "3px", height: "3px", top: "65%", left: "75%", animationDelay: "1.2s" }} />
        <div className="dust-particle" style={{ width: "5px", height: "5px", top: "85%", left: "82%", animationDelay: "3.8s" }} />
      </div>

      {/* ─── Main Content Container ─── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "880px" }}>
          {/* Overline with Sleek Gold Line */}
          <div
            ref={overlineRef}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              color: "#C5A869",
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "36px",
                height: "2px",
                backgroundColor: "#C5A869",
              }}
            />
            <span>Strategic Advisory · Melbourne & Nationwide</span>
          </div>

          {/* Headline with Word-by-Word Kinetic Typography */}
          <h1
            ref={titleRef}
            style={{
              fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
              fontSize: "clamp(2.85rem, 5.8vw, 4.85rem)",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.018em",
              color: "#FFFFFF",
              margin: "0 0 1.5rem 0",
              textShadow: "0 6px 30px rgba(0, 0, 0, 0.6)",
              perspective: "1000px",
            }}
          >
            <span className="hero-word-wrap"><span className="hero-word">Direct</span></span>
            <span className="hero-word-wrap"><span className="hero-word">Access</span></span>
            <span className="hero-word-wrap"><span className="hero-word">to</span></span>
            <span className="hero-word-wrap"><span className="hero-word">Senior</span></span>
            <span className="hero-word-wrap"><span className="hero-word">Advisory.</span></span>
            <br />
            <span className="hero-word-wrap">
              <span className="hero-word gold-shimmer">Engineered for Growth.</span>
            </span>
          </h1>

          {/* Subheading with High Contrast and Optical Balance */}
          <p
            ref={descRef}
            style={{
              fontSize: "clamp(1.05rem, 1.45vw, 1.28rem)",
              lineHeight: 1.68,
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "740px",
              margin: "0 0 2.25rem 0",
              fontWeight: 400,
              textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
            }}
          >
            Connect directly with Taxnet&apos;s certified CPA accountants, registered tax agents,
            and licensed mortgage brokers. Experience proactive advice, zero surprise bills,
            and clear financial clarity—in person at our Doncaster East suites or via secure video consultation Australia-wide.
          </p>

          {/* Interactive Fast Action Row */}
          <div
            ref={actionsRef}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.85rem",
              alignItems: "center",
              marginBottom: "2.5rem",
            }}
          >
            {/* Primary Action: Book Discovery Session */}
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="hero-btn hero-cta-primary"
            >
              <span>Book Discovery Session</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Direct Phone */}
            <a
              href="tel:0398025800"
              className="hero-btn hero-glass-btn"
              aria-label="Call Taxnet direct"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A869" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(03) 9802 5800</span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-whatsapp-btn"
              aria-label="Direct WhatsApp Advisory"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Advisory</span>
            </a>

            {/* Email Direct */}
            <a
              href="mailto:info@taxnet.com.au"
              className="hero-btn hero-glass-btn"
              aria-label="Email Taxnet"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C5A869" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>info@taxnet.com.au</span>
            </a>
          </div>

          {/* Subtle Live Consultation Reassurance */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(229, 214, 182, 0.75)",
              fontSize: "0.82rem",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#25D366",
                display: "inline-block",
                boxShadow: "0 0 8px #25D366",
              }}
            />
            <span>Melbourne Practice Open · Mon–Fri 6:00 AM – 6:00 PM · Dedicated Senior CPA Consultations</span>
          </div>
        </div>
      </div>

      {/* ─── Elegant Cinematic Scroll Cue ─── */}
      <div
        ref={scrollCueRef}
        onClick={scrollToBooking}
        style={{
          position: "absolute",
          bottom: "26px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          zIndex: 3,
          color: "rgba(229, 214, 182, 0.7)",
          fontSize: "0.74rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
          transition: "color 200ms ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E5D6B6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(229, 214, 182, 0.7)")}
      >
        <div
          style={{
            width: "22px",
            height: "36px",
            borderRadius: "18px",
            border: "2px solid rgba(197, 168, 105, 0.5)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            className="scroll-dot"
            style={{
              width: "4px",
              height: "7px",
              borderRadius: "2px",
              backgroundColor: "#C5A869",
            }}
          />
        </div>
        <span>Explore Consultation</span>
      </div>
    </section>
  );
}

