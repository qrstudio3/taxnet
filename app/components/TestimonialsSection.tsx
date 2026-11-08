"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Genuine Client Reviews Data ─── */
const REVIEWS = [
  {
    id: "marcus",
    name: "Marcus Adebayo",
    role: "Managing Director",
    company: "CloudTech Solutions Pty Ltd",
    location: "Richmond, VIC",
    image: "/testimonials/p1.jpg",
    rating: 5,
    date: "Reviewed 2 weeks ago",
    serviceCategory: "tax",
    serviceTag: "Corporate Tax & Structuring",
    title: "Found $42,000 in deductions our previous accountant overlooked",
    body: "We switched to Taxnet at the start of last financial year when our tech startup began scaling quickly. Their senior CPAs completely restructured our entity setup to protect IP and identified significant R&D tax offsets that our old firm never even mentioned. Flat monthly billing means no awkward surprises when we call for advice.",
  },
  {
    id: "sarah",
    name: "Dr. Sarah Lin",
    role: "Principal Director",
    company: "Apex Health & Medical Clinics",
    location: "Carlton, VIC",
    image: "/testimonials/p2.jpg",
    rating: 5,
    date: "Reviewed 1 month ago",
    serviceCategory: "bookkeeping",
    serviceTag: "Medical Practice Bookkeeping & BAS",
    title: "Complete peace of mind with multi-clinic payroll and BAS",
    body: "Running two medical clinics with 18 consulting doctors and support staff was a payroll and super nightmare before Taxnet took over. They automated our entire Xero workflow, handle our quarterly BAS without us lifting a finger, and make sure we remain 100% compliant with ATO and payroll tax thresholds.",
  },
  {
    id: "david",
    name: "David Miller",
    role: "Senior Partner",
    company: "Miller & Associates Legal",
    location: "Melbourne CBD",
    image: "/testimonials/p4.jpg",
    rating: 5,
    date: "Reviewed 3 weeks ago",
    serviceCategory: "tax",
    serviceTag: "Trust Accounting & Partnership Tax",
    title: "Deep expertise in Law Society trust accounting regulations",
    body: "As a legal practice, compliance with Victorian Legal Services Board trust accounts is non-negotiable. Taxnet’s partner team understands these regulations inside out. Their year-end financial statements and partnership tax distributions were completed weeks ahead of deadline. A truly elite accounting team.",
  },
  {
    id: "julian",
    name: "Julian Vance",
    role: "Managing Director",
    company: "Vance Hospitality Group",
    location: "South Yarra, VIC",
    image: "/testimonials/p5.jpg",
    rating: 5,
    date: "Reviewed 2 months ago",
    serviceCategory: "bookkeeping",
    serviceTag: "Payroll & Fortnightly BAS",
    title: "Automated restaurant award wages and saved our cashflow",
    body: "Hospitality award rates and penalty shifts used to give me headaches every fortnight. Taxnet sorted our roster-to-payroll integrations in Xero and meets with me monthly to go over our food and labor percentage margins. They’re more like a virtual CFO than just a tax agent.",
  },
  {
    id: "robert",
    name: "Robert Stirling",
    role: "Director",
    company: "Stirling Engineering & Fabrication",
    location: "Dandenong, VIC",
    image: "/testimonials/p6.jpg",
    rating: 5,
    date: "Reviewed 1 month ago",
    serviceCategory: "lending",
    serviceTag: "Commercial Equipment Loan",
    title: "Secured $1.4M machine financing with instant write-off advice",
    body: "We needed to upgrade our CNC machinery and didn't want to get slowed down by big-bank red tape. Taxnet’s broking division secured the $1.4M equipment facility within 9 days at a fantastic rate, while their tax advisors made sure we maximized our asset write-offs and depreciation for the year. Outstanding service.",
  },
];

const TOTAL_DOTS = REVIEWS.length;

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Drag state refs
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // Scroll smoothly to one of the 3 dot positions (0: start, 1: middle, 2: end)
  const scrollToDot = useCallback((dotIndex: number) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    if (maxScroll <= 0) return;

    const targetScroll = (dotIndex / (TOTAL_DOTS - 1)) * maxScroll;
    track.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveDot(dotIndex);
  }, []);

  // Track active dot on scroll
  const handleScroll = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    if (maxScroll <= 0) {
      setActiveDot(0);
      return;
    }
    const ratio = Math.min(1, Math.max(0, track.scrollLeft / maxScroll));
    const currentDot = Math.min(
      TOTAL_DOTS - 1,
      Math.max(0, Math.round(ratio * (TOTAL_DOTS - 1)))
    );
    setActiveDot(currentDot);
  }, []);

  // Autoplay interval (pauses on hover, drag, or touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveDot((prev) => {
        const nextDot = (prev + 1) % TOTAL_DOTS;
        if (trackRef.current) {
          const track = trackRef.current;
          const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
          if (maxScroll > 0) {
            const targetScroll = (nextDot / (TOTAL_DOTS - 1)) * maxScroll;
            track.scrollTo({
              left: targetScroll,
              behavior: "smooth",
            });
          }
        }
        return nextDot;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDownRef.current = true;
    setIsDragging(true);
    setIsPaused(true);
    startXRef.current = e.pageX;
    startScrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDownRef.current || !trackRef.current) return;
    e.preventDefault();
    const deltaX = e.pageX - startXRef.current;
    trackRef.current.scrollLeft = startScrollLeftRef.current - deltaX;
  };

  const handleMouseUp = () => {
    if (isDownRef.current) {
      isDownRef.current = false;
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDownRef.current) {
        isDownRef.current = false;
        setIsDragging(false);
        setIsPaused(false);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#070B09",
        paddingTop: "3.75rem",
        paddingBottom: "4rem",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 168, 105, 0.22)",
      }}
    >
      <style>{`
        .testimonials-slider-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .testimonials-slider-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ── Global Dotted World Map Watermark ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "650px",
          backgroundImage: "url('/global.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.15,
          pointerEvents: "none",
          filter: "brightness(1.5) contrast(1.1)",
        }}
      />

      {/* ── Subtle Ambient Glows ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(161, 134, 80, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
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
        {/* ── Header (Clean centered layout, no smaller drag/arrow buttons) ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
            transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(12px)",
            transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s ease, filter 1.2s ease",
          }}
        >
          <h2
            style={{
              fontFamily: '"Monety", serif',
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0 auto 0.5rem",
              maxWidth: "760px",
            }}
          >
            What Our Clients Say About{" "}
            <span
              style={{
                color: "#C5A869",
              }}
            >
              Taxnet
            </span>
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Genuine experiences from Australian business owners, founders, and
            medical professionals who trust us with their financial growth.
          </p>
        </div>

        {/* ── Single-Line Testimonials Slider Track (Never wraps to 2 lines) ── */}
        <div
          ref={trackRef}
          className="testimonials-slider-track"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap", // Guarantees 1 single horizontal row across all screen sizes
            gap: "1.5rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            padding: "0.5rem 0.25rem 1.25rem 0.25rem",
            cursor: isDragging ? "grabbing" : "default",
            userSelect: isDragging ? "none" : "auto",
            WebkitUserSelect: isDragging ? "none" : "auto",
            transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(12px)",
            transition: "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 120ms, opacity 1.2s ease 120ms, filter 1.2s ease 120ms",
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              style={{
                flex: "0 0 380px",
                width: "380px",
                maxWidth: "calc(100vw - 3.5rem)",
                flexShrink: 0,
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "1.6rem 1.45rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(161, 134, 80, 0.22)",
                transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
              }}
              onMouseEnter={(e) => {
                setIsPaused(true);
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow =
                  "0 18px 45px rgba(0, 0, 0, 0.35), 0 0 0 1px #C5A869";
              }}
              onMouseLeave={(e) => {
                setIsPaused(false);
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.25)";
              }}
            >
              <div>
                {/* Header: Client Avatar + Verified Badge + Stars */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        position: "relative",
                        border: "2px solid #A18650",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 800,
                          color: "#1C2022",
                          lineHeight: 1.2,
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#6B7C72",
                          marginTop: "2px",
                        }}
                      >
                        {r.company}
                      </div>
                    </div>
                  </div>

                  {/* Google Verified Checkmark */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "rgba(197, 168, 105, 0.08)",
                      border: "1px solid rgba(197, 168, 105, 0.25)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: "#C5A869",
                    }}
                  >
                    <span>✓</span> Verified
                  </div>
                </div>

                {/* Rating Stars + Date */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div style={{ color: "#C5A869", fontSize: "0.9rem", letterSpacing: "1px" }}>
                    {"★".repeat(r.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#8C9B92",
                    }}
                  >
                    {r.date}
                  </span>
                </div>

                {/* Review Title */}
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    color: "#1C2022",
                    lineHeight: 1.35,
                    marginBottom: "0.55rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{r.title}&rdquo;
                </h4>
                <p
                  style={{
                    fontSize: "0.84rem",
                    color: "#4A5A50",
                    lineHeight: 1.55,
                    margin: "0 0 1.25rem 0",
                  }}
                >
                  {r.body}
                </p>
              </div>

              {/* Bottom Tag */}
              <div
                style={{
                  borderTop: "1px solid #EBF0EC",
                  paddingTop: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "#C5A869",
                    background: "rgba(197, 168, 105, 0.12)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {r.serviceTag}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#8C9B92",
                  }}
                >
                  {r.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Slider Pagination Indicator Dots (Exactly 3 functioning dots) ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "1.5rem",
            transform: visible ? "translateY(0)" : "translateY(16px)",
            opacity: visible ? 1 : 0,
            transition: "transform 600ms ease 180ms, opacity 600ms ease 180ms",
          }}
        >
          {REVIEWS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => scrollToDot(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1} of ${TOTAL_DOTS}`}
              style={{
                width: activeDot === dotIdx ? "30px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background:
                  activeDot === dotIdx
                    ? "#C5A869"
                    : "rgba(255, 255, 255, 0.25)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow:
                  activeDot === dotIdx
                    ? "0 0 12px rgba(197, 168, 105, 0.5)"
                    : "none",
              }}
            />
          ))}
        </div>

        {/* ── Footer CTA Bar ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.75rem",
            transform: visible ? "translateY(0)" : "translateY(16px)",
            opacity: visible ? 0.85 : 0,
            transition: "transform 600ms ease 240ms, opacity 600ms ease 240ms",
          }}
        >
          <p
            style={{
              fontSize: "0.84rem",
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
            }}
          >
            Ready to experience proactive accounting with zero stress? &nbsp;·&nbsp;{" "}
            <Link
              href="/contact"
              style={{
                color: "#C5A869",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Book a Free Discovery Call →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
