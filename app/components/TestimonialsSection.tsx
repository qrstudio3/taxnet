"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

interface GoogleReviewItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  badge?: string;
  dateText: string;
  quote: string;
}

const GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: "gianni-della-negra",
    name: "Gianni Della Negra",
    initials: "GD",
    avatarBg: "#1F2937",
    badge: "9 reviews",
    dateText: "7 months ago",
    quote:
      "Excellent experience with the whole team. They recently helped me manage a complicated transaction with a lot of moving parts, and their advice was spot on and kept everything secure. It’s rare to find an accounting firm that is this responsive and genuinely focused on long-term goals. Thank you team!",
  },
  {
    id: "julie-bristow",
    name: "Julie Bristow",
    initials: "JB",
    avatarBg: "#0F9D58",
    badge: "Local Guide · 15 reviews",
    dateText: "a year ago",
    quote:
      "Taxnet have been looking after my tax and financial requirements for quite a few years now and I am really impressed by their service and ease of the relationship. There are often times in between my tax returns that they do for me each year that I need additional support and they are always really responsive to my emails and phone calls and give me sound advice, often without additional charges, which makes me feel as though they are there to generally support their clients, not just as a $ making exercise.",
  },
  {
    id: "johnny-c",
    name: "Johnny C",
    initials: "JC",
    avatarBg: "#4285F4",
    badge: "Local Guide · 10 reviews",
    dateText: "a year ago",
    quote:
      "Phil and his team are great. I can’t express how prompt and accurate the communication is which makes dealing with finances easier and gives you piece of mind that you are well looked after. Phil and the teams knowledge is vast and beyond competent. Really gives you confidence in any business venture or financial situation. Can’t thank Phil and the team enough for helping me and my family out. Would highly recommend anyone to Phil and the taxnet team.",
  },
  {
    id: "marian-rafael",
    name: "Marian Rafael",
    initials: "MR",
    avatarBg: "#0288D1",
    badge: "Local Guide · 25 reviews",
    dateText: "2 years ago",
    quote:
      "We came on board as Phil came highly recommended and I must say, he and his team have been nothing short of fantastic. They are efficient, proactive and very professional, nothing is too hard and there is a solution for everything, which is so refreshing. We are so pleased with how we have been able to restructure a few things and also set a plan moving forward. If you're looking for accounting/business consultants with a vision for growth, assistance with strategy and a 'can do' attitude, this team is the one.",
  },
  {
    id: "jordy-habib",
    name: "Jordy Habib",
    initials: "JH",
    avatarBg: "#5C6BC0",
    badge: "3 reviews",
    dateText: "a year ago",
    quote:
      "I switched to Philip at TaxNet from my previous tax accountant, couldn’t be happier! The service is much more efficient and straightforward. Highly recommend",
  },
  {
    id: "karim-george",
    name: "Karim George",
    initials: "KG",
    avatarBg: "#E91E63",
    badge: "Local Guide · 279 reviews",
    dateText: "4 years ago",
    quote:
      "I can't speak high enough about Taxnet. Very professional and caring, genuine interest in helping and providing the best service. Knowledgeable and professional. Philip and the team are really great to deal with and very approachable. Highly recommended.",
  },
];

const TOTAL_REAL = GOOGLE_REVIEWS.length;
const DISPLAY_ITEMS = [...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS];

function GoogleGIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

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
    }, 5500);
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
            Read reviews from clients who work with Philip and our Melbourne team.
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
                {/* Google Review Quote Card */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "1.6rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "340px",
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
                    {/* Header: User Avatar + Name + Google Review Badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "12px",
                        marginBottom: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        {/* Avatar Circle with Initials */}
                        <div
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "50%",
                            backgroundColor: r.avatarBg,
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.92rem",
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
                          {r.badge && (
                            <div
                              style={{
                                fontSize: "0.74rem",
                                color: "#6B7280",
                                marginTop: "2px",
                                lineHeight: 1.3,
                              }}
                            >
                              {r.badge}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Google review label badge */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          backgroundColor: "#F3F4F6",
                          border: "1px solid #E5E7EB",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          flexShrink: 0,
                        }}
                      >
                        <GoogleGIcon size={14} />
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#374151",
                            letterSpacing: "0.02em",
                          }}
                        >
                          Google review
                        </span>
                      </div>
                    </div>

                    {/* Review Body */}
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#374151",
                        lineHeight: 1.65,
                        margin: 0,
                        fontWeight: 400,
                        fontStyle: "italic",
                      }}
                    >
                      &ldquo;{r.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom: Both Action Buttons on each review card */}
                  <div
                    style={{
                      borderTop: "1px solid #F3F4F6",
                      paddingTop: "0.85rem",
                      marginTop: "1.1rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                    }}
                  >
                    <a
                      href="https://g.page/r/CSpLRi2RID-zEBM"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        backgroundColor: "#F9FAFB",
                        color: "#111827",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                        padding: "8px 8px",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        textAlign: "center",
                        transition: "all 160ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#F3F4F6";
                        e.currentTarget.style.borderColor = "#D1D5DB";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#F9FAFB";
                        e.currentTarget.style.borderColor = "#E5E7EB";
                      }}
                    >
                      <GoogleGIcon size={13} />
                      <span>View all reviews</span>
                    </a>

                    <a
                      href="https://g.page/r/CSpLRi2RID-zEBM/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        backgroundColor: "#0A0D0B",
                        color: "#FFFFFF",
                        border: "1px solid #0A0D0B",
                        borderRadius: "8px",
                        padding: "8px 8px",
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        textAlign: "center",
                        transition: "all 160ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#C5A869";
                        e.currentTarget.style.borderColor = "#C5A869";
                        e.currentTarget.style.color = "#0A0D0B";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#0A0D0B";
                        e.currentTarget.style.borderColor = "#0A0D0B";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                    >
                      <span>Leave us a review</span>
                      <span style={{ color: "#E5D6B6" }}>★</span>
                    </a>
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
            {GOOGLE_REVIEWS.map((_, dotIdx) => (
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
            marginTop: "2.5rem",
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
