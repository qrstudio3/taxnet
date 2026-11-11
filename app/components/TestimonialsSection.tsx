"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  subtitle: string;
  platform: "gmail" | "imessage";
  headline: string;
  quote: string;
  serviceTag: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "nicole-turner",
    name: "Nicole Turner",
    initials: "NT",
    avatarBg: "#1A73E8", // Google Blue
    subtitle: "Victorian Dept. of Education · Client",
    platform: "gmail",
    headline: "Fantastic service as always, very grateful!",
    quote:
      "Hello. Happy Friday!! Thank you so very much for the fantastic service as always. Very grateful. Have a great weekend 😃",
    serviceTag: "Accounting & Tax",
  },
  {
    id: "johnny-c",
    name: "Johnny C",
    initials: "JC",
    avatarBg: "#0F9D58", // Google Green
    subtitle: "Tax & Compliance Client",
    platform: "gmail",
    headline: "Good feeling to start fresh – sorting out all that mess",
    quote:
      "That's fantastic!!! Thank you so much! I'll fix it up at asap. I've also paid your invoice , thanks again so much for sorting out all that mess . Good feeling to start fresh!",
    serviceTag: "Tax & Compliance",
  },
  {
    id: "gian",
    name: "Gian",
    initials: "G",
    avatarBg: "#EA4335", // Google Red
    subtitle: "Finance & Broking Client",
    platform: "gmail",
    headline: "Car arrived & sorted – heavy lifting on the numbers",
    quote:
      "Just letting you know the car arrived and everything is sorted. Thanks for the help with the heavy lifting on the numbers. also Ben was a massive help, he answered every question I threw at him. Really appreciate it! Now we just need to organise a drive day 🏎️",
    serviceTag: "Car & Equipment Finance",
  },
  {
    id: "mina-ghobrial",
    name: "Mina Ghobrial",
    initials: "MG",
    avatarBg: "#8E24AA", // Purple
    subtitle: "B.Pharmacy (Hons.) & Proprietor",
    platform: "gmail",
    headline: "Much appreciate your effort with this SMSF settlement",
    quote:
      "Hi Ben, Thanks heaps to you and Philip! Much appreciate your effort with this one. Looking forward to the next one.",
    serviceTag: "SMSF Property Settlement",
  },
  {
    id: "raelene",
    name: "Raelene",
    initials: "RR",
    avatarBg: "#34C759", // Apple Green
    subtitle: "Personal Tax Client",
    platform: "imessage",
    headline: "Was that easy? Absolutely. I appreciate you so much!",
    quote:
      "Good morning Mirel... If that works that will be great. Thankyou so much Mirel. Was that easy? Absolutely. Thankyou so much, Mirel. I appreciate you so much ❤️",
    serviceTag: "Personal Tax Service",
  },
  {
    id: "nicole-advisory",
    name: "Nicole",
    initials: "N",
    avatarBg: "#007AFF", // Apple Blue
    subtitle: "Client Advisory",
    platform: "imessage",
    headline: "I could not be more grateful – thank you so much",
    quote:
      "I'm happy to pay her fee now if you want to send it through. I'm so grateful for your service!! I could not be more grateful Thank you so much.",
    serviceTag: "Client Advisory",
  },
];

const TOTAL_REAL = REVIEWS.length;
// Duplicate items to ensure smooth infinite wrap-around
const DISPLAY_ITEMS = [...REVIEWS, ...REVIEWS];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 680) {
        setVisibleCards(1);
      } else if (width < 1080) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Intersection observer for entrance fade-in
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

  // Navigation handlers
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return TOTAL_REAL - 1;
      }
      return prev - 1;
    });
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  // Handle transition end for seamless infinite loop reset
  const handleTransitionEnd = () => {
    if (currentIndex >= TOTAL_REAL) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Re-enable transition after reset
  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // Autoplay timer (pauses on hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  const activeDot = currentIndex % TOTAL_REAL;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#070B09",
        paddingTop: "4.5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 168, 105, 0.22)",
      }}
    >
      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-100px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 168, 105, 0.08) 0%, transparent 70%)",
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
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.75rem",
            transform: visible ? "translateY(0)" : "translateY(24px)",
            opacity: visible ? 1 : 0,
            transition: "transform 800ms ease, opacity 800ms ease",
          }}
        >
          {/* Google Review Trust Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(197, 168, 105, 0.12)",
              border: "1px solid rgba(197, 168, 105, 0.3)",
              padding: "6px 14px",
              borderRadius: "999px",
              marginBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden="true">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span style={{ color: "#E5E7EB", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.04em" }}>
              5.0 · Verified Client Feedback
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0 auto 0.5rem",
            }}
          >
            What Our Clients <span style={{ color: "#C5A869" }}>Say</span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Genuine correspondence and verified feedback from the clients we work with every day.
          </p>
        </div>

        {/* Automatic Slider Wrapper */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "0.5rem 0 1.25rem 0",
            transform: visible ? "translateY(0)" : "translateY(24px)",
            opacity: visible ? 1 : 0,
            transition: "transform 800ms ease 120ms, opacity 800ms ease 120ms",
          }}
        >
          {/* Sliding Track */}
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: "flex",
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: isTransitioning
                ? "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
              willChange: "transform",
            }}
          >
            {DISPLAY_ITEMS.map((r, idx) => (
              <div
                key={`${r.id}-${idx}`}
                style={{
                  flex: `0 0 ${100 / visibleCards}%`,
                  maxWidth: `${100 / visibleCards}%`,
                  padding: "0 0.75rem",
                  boxSizing: "border-box",
                }}
              >
                {/* Google Review Card Box */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "1.6rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "330px",
                    height: "100%",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
                    border: "1px solid #E5E7EB",
                    transition:
                      "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow =
                      "0 18px 40px rgba(0, 0, 0, 0.28), 0 0 0 1px #C5A869";
                    el.style.borderColor = "#C5A869";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.18)";
                    el.style.borderColor = "#E5E7EB";
                  }}
                >
                  <div>
                    {/* Header: User Initials Avatar + Name + Platform Logo */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        {/* Avatar Circle with Initials */}
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            backgroundColor: r.avatarBg,
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.14)",
                            flexShrink: 0,
                          }}
                        >
                          {r.initials}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "0.98rem",
                              fontWeight: 700,
                              color: "#111827",
                              lineHeight: 1.25,
                            }}
                          >
                            {r.name}
                          </div>
                          <div
                            style={{
                              fontSize: "0.74rem",
                              color: "#6B7280",
                              marginTop: "2px",
                              lineHeight: 1.3,
                            }}
                          >
                            {r.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Platform Icon: Official Multi-Color Gmail or Apple Messages Bubble */}
                      {r.platform === "gmail" ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            flexShrink: 0,
                          }}
                          title="Verified via Gmail"
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" aria-label="Gmail">
                            <path fill="#4285F4" d="M4 20h2.5V11.2L2 8v10.5c0 .83.67 1.5 1.5 1.5h.5z" />
                            <path fill="#34A853" d="M17.5 20H20c.83 0 1.5-.67 1.5-1.5V8l-4.5 3.2V20h.5z" />
                            <path fill="#EA4335" d="M17.5 11.2V5.5L12 9.5 6.5 5.5v5.7L12 15l5.5-3.8z" />
                            <path fill="#FBBC04" d="M2 8l4.5 3.2V5.5L4.7 4.2C3.3 3.1 2 4.1 2 5.5V8z" />
                            <path fill="#C5221F" d="M22 8l-4.5 3.2V5.5l1.8-1.3c1.4-1.1 2.7-.1 2.7 1.3V8z" />
                          </svg>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "38px",
                            height: "38px",
                            borderRadius: "10px",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                            flexShrink: 0,
                          }}
                          title="Verified via Apple Messages"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Apple Message">
                            <rect width="24" height="24" rx="6" fill="#34C759" />
                            <path
                              d="M12 4.5C7.306 4.5 3.5 7.858 3.5 12c0 2.378 1.258 4.512 3.235 5.823-.153.898-.624 2.14-1.574 2.996-.154.145-.043.402.171.402 1.506.017 3.125-.574 4.22-1.395.786.148 1.604.224 2.448.224 4.694 0 8.5-3.358 8.5-7.5S16.694 4.5 12 4.5z"
                              fill="#FFFFFF"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Google 5-Star Rating (Official Google #FBBC04 Yellow Stars) + Verified Pill */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                        {[0, 1, 2, 3, 4].map((starIdx) => (
                          <svg
                            key={starIdx}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="#FBBC04"
                            aria-hidden="true"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "#059669",
                          fontWeight: 600,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                      >
                        ✓ Verified
                      </span>
                    </div>

                    {/* Headline */}
                    <h4
                      style={{
                        fontSize: "0.94rem",
                        fontWeight: 700,
                        color: "#111827",
                        lineHeight: 1.35,
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      &ldquo;{r.headline}&rdquo;
                    </h4>

                    {/* Review Body */}
                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "#374151",
                        lineHeight: 1.6,
                        margin: "0 0 1rem 0",
                        fontWeight: 400,
                      }}
                    >
                      {r.quote}
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div
                    style={{
                      borderTop: "1px solid #F3F4F6",
                      paddingTop: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#8A7040",
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
                        color: "#6B7280",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontWeight: 500,
                      }}
                    >
                      {r.platform === "gmail" ? (
                        <>
                          <span style={{ color: "#EA4335", fontWeight: 700 }}>✉</span> Gmail
                        </>
                      ) : (
                        <>
                          <span style={{ color: "#34C759", fontWeight: 700 }}>💬</span> Apple Message
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls: Prev / Next Buttons + Pagination Indicator Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginTop: "1.75rem",
            transform: visible ? "translateY(0)" : "translateY(16px)",
            opacity: visible ? 1 : 0,
            transition: "transform 600ms ease 180ms, opacity 600ms ease 180ms",
          }}
        >
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(197, 168, 105, 0.35)",
              color: "#C5A869",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 200ms ease",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(197, 168, 105, 0.2)";
              e.currentTarget.style.borderColor = "#C5A869";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.35)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {REVIEWS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleDotClick(dotIdx)}
                aria-label={`Go to review ${dotIdx + 1} of ${TOTAL_REAL}`}
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

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(197, 168, 105, 0.35)",
              color: "#C5A869",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 200ms ease",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(197, 168, 105, 0.2)";
              e.currentTarget.style.borderColor = "#C5A869";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.35)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Bottom Consultation Call Link */}
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
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
            }}
          >
            Looking for personal, proactive accounting service? &nbsp;·&nbsp;{" "}
            <Link
              href="/contact"
              style={{
                color: "#C5A869",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Book a Consultation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
