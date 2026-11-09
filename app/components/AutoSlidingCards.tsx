"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import BookkeepingBenefitIcon, { BenefitIconType } from "./BookkeepingBenefitIcon";

export interface SlidingCardItem {
  icon?: BenefitIconType;
  title: string;
  desc: string;
  href?: string;
  tag?: string;
}

interface AutoSlidingCardsProps {
  items: SlidingCardItem[];
  intervalMs?: number;
}

export default function AutoSlidingCards({
  items,
  intervalMs = 3200,
}: AutoSlidingCardsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;

      const cardWidth = 340 + 24; // card width (340px) + gap (24px)
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 15) {
        // Smoothly return to the start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPaused, intervalMs]);

  const slideLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -364, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 15) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: 364, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <style>{`
        .auto-slide-track::-webkit-scrollbar {
          display: none;
        }
        .auto-slide-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .auto-slide-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1.5px solid #E5ECE7;
          border-radius: 18px;
          padding: 2.25rem 2rem;
          min-width: 320px;
          max-width: 360px;
          flex: 0 0 auto;
          scroll-snap-align: start;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          text-decoration: none;
          transition: background-color 360ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 360ms cubic-bezier(0.16, 1, 0.3, 1),
                      transform 360ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 360ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .auto-slide-card:hover {
          background-color: #0A0D0B !important;
          border-color: #C5A869 !important;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 42px rgba(10, 13, 11, 0.38), 0 0 28px rgba(197, 168, 105, 0.22) !important;
        }
        .auto-slide-card .card-glow {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(197, 168, 105, 0.24) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 360ms ease, transform 360ms ease;
          transform: scale(0.8);
        }
        .auto-slide-card:hover .card-glow {
          opacity: 1;
          transform: scale(1.2);
        }
        .auto-slide-card .card-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: "#0A0D0B";
          margin-bottom: 0.65rem;
          line-height: 1.32;
          letter-spacing: -0.01em;
          transition: color 300ms ease;
        }
        .auto-slide-card:hover .card-title {
          color: #FFFFFF !important;
        }
        .auto-slide-card .card-desc {
          font-size: 0.9rem;
          color: #55645B;
          line-height: 1.65;
          margin: 0;
          transition: color 300ms ease;
        }
        .auto-slide-card:hover .card-desc {
          color: rgba(255, 255, 255, 0.82) !important;
        }
        .auto-slide-card .card-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #A18650, #C5A869, #A18650);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 300ms ease, transform 340ms ease;
        }
        .auto-slide-card:hover .card-bottom-bar {
          opacity: 1;
          transform: scaleX(1);
        }
        .auto-slide-card .card-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #A18650;
          font-size: 0.85rem;
          font-weight: 700;
          margin-top: 1.25rem;
          transition: transform 260ms ease, color 260ms ease;
        }
        .auto-slide-card:hover .card-arrow {
          color: #DFC386;
          transform: translateX(4px);
        }
        @media (max-width: 640px) {
          .auto-slide-card {
            min-width: 285px;
            max-width: 310px;
            padding: 1.75rem 1.5rem;
          }
        }
      `}</style>

      {/* Manual Left/Right Floating Navigation Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.78rem",
            color: "#A18650",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginRight: "auto",
          }}
        >
          Auto-sliding · Swipe or click to browse
        </span>

        <button
          type="button"
          onClick={slideLeft}
          aria-label="Previous card"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "1.5px solid #E5ECE7",
            backgroundColor: "#FAFBF9",
            color: "#0A0D0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 180ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#0A0D0B";
            e.currentTarget.style.backgroundColor = "#0A0D0B";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5ECE7";
            e.currentTarget.style.backgroundColor = "#FAFBF9";
            e.currentTarget.style.color = "#0A0D0B";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={slideRight}
          aria-label="Next card"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            border: "1.5px solid #E5ECE7",
            backgroundColor: "#FAFBF9",
            color: "#0A0D0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 180ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#0A0D0B";
            e.currentTarget.style.backgroundColor = "#0A0D0B";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5ECE7";
            e.currentTarget.style.backgroundColor = "#FAFBF9";
            e.currentTarget.style.color = "#0A0D0B";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Horizontal Sliding Track */}
      <div
        ref={trackRef}
        className="auto-slide-track"
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: "1.5rem",
          paddingTop: "0.5rem",
        }}
      >
        {items.map((item, idx) => {
          const cardContent = (
            <>
              <div className="card-glow" />
              <div>
                {item.icon && <BookkeepingBenefitIcon type={item.icon} />}
                <h3 className="card-title" style={{ color: "#0A0D0B" }}>
                  {item.title}
                </h3>
                <p className="card-desc">{item.desc}</p>
              </div>

              {item.href && (
                <div className="card-arrow">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              )}
              <div className="card-bottom-bar" />
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.title + idx}
                href={item.href}
                className="auto-slide-card"
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={item.title + idx} className="auto-slide-card">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

