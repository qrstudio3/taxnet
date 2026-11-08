"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Industries Data (Black & Gold Visual Edition) ─── */
const INDUSTRIES = [
  {
    id: "doctors",
    name: "Doctors",
    tag: "Healthcare",
    image: "/industries/gold/doctors.png?v=gold_v2",
  },
  {
    id: "mechanics",
    name: "Mechanics",
    tag: "Automotive",
    image: "/industries/gold/mechanics.png?v=gold_v2",
  },
  {
    id: "electricians",
    name: "Electricians",
    tag: "Trade & Electrical",
    image: "/industries/gold/electricians.png?v=gold_v2",
  },
  {
    id: "plumbers",
    name: "Plumbers",
    tag: "Plumbing Services",
    image: "/industries/gold/plumbers.png?v=gold_v2",
  },
  {
    id: "restaurants",
    name: "Restaurants",
    tag: "Hospitality & Dining",
    image: "/industries/gold/restaurants.png?v=gold_v2",
  },
  {
    id: "startups",
    name: "Startups",
    tag: "Tech & Innovation",
    image: "/industries/gold/startups.png?v=gold_v2",
  },
  {
    id: "lawyers",
    name: "Lawyers",
    tag: "Legal Practices",
    image: "/industries/gold/lawyers.png?v=gold_v2",
  },
];

/* 3x repeat ensures continuous, seamless infinite scrolling */
const MARQUEE_ITEMS = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="industries"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: "3.75rem",
        paddingBottom: "4.25rem",
        overflow: "hidden",
        borderTop: "1px solid #EBF0EC",
      }}
    >
      <style>{`
        @-webkit-keyframes industryMarquee {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(calc(-100% / 3));
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes industryMarquee {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(calc(-100% / 3));
            transform: translateX(calc(-100% / 3));
          }
        }
        .industry-track {
          display: flex;
          gap: 2.75rem;
          width: max-content;
          -webkit-animation: industryMarquee 34s linear infinite;
          animation: industryMarquee 34s linear infinite;
          will-change: transform;
        }
        .industry-track:hover {
          -webkit-animation-play-state: paused;
          animation-play-state: paused;
        }
        .industry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 195px;
          flex-shrink: 0;
          cursor: pointer;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-transition: -webkit-transform 240ms ease;
          transition: transform 240ms ease;
        }
        .industry-item:hover {
          -webkit-transform: translateY(-6px);
          transform: translateY(-6px);
        }
        .industry-item:hover .industry-img-wrap {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
        .industry-img-wrap {
          -webkit-transition: -webkit-transform 240ms ease;
          transition: transform 240ms ease;
        }
      `}</style>

      {/* ── Heading Block ── */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
          marginBottom: "3rem",
          transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
          opacity: visible ? 1 : 0,
          filter: visible ? "blur(0px)" : "blur(12px)",
          transition:
            "transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s ease, filter 1.2s ease",
        }}
      >
        <h2
          style={{
            fontFamily: '"Monety", serif',
            fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
            fontWeight: 400,
            color: "#1C2022",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: "0 auto 0.6rem",
            maxWidth: "760px",
          }}
        >
          Industries We Provide{" "}
          <span
            style={{
              color: "#C5A869",
            }}
          >
            Services
          </span>{" "}
          For
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            color: "#5C6B63",
            maxWidth: "540px",
            margin: "0 auto",
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          Specialized accounting, taxation, and bookkeeping built around the
          daily operational workflows of your sector.
        </p>
      </div>

      {/* ── Infinite Scrolling Marquee Track ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          padding: "1rem 0 1.5rem",
        }}
      >
        <div className="industry-track">
          {MARQUEE_ITEMS.map((ind, idx) => (
            <div
              key={`${ind.id}-${idx}`}
              className="industry-item"
            >
              {/* Illustration in Black & Gold */}
              <div
                className="industry-img-wrap"
                style={{
                  width: "100%",
                  height: "110px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Image
                  src={ind.image}
                  alt={ind.name}
                  width={180}
                  height={110}
                  unoptimized={true}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                  priority={idx < 7}
                />
              </div>

              {/* Bold Industry Name (Matching Reference Image) */}
              <h3
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 800,
                  color: "#000000",
                  marginTop: "1.1rem",
                  marginBottom: "0.25rem",
                  letterSpacing: "-0.015em",
                }}
              >
                {ind.name}
              </h3>

              {/* Subtle Sector Tag */}
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#C5A869",
                  opacity: 0.95,
                  letterSpacing: "0.02em",
                }}
              >
                {ind.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Subtitle / Link ── */}
      <div
        style={{
          textAlign: "center",
          marginTop: "2.25rem",
          transform: visible ? "translateY(0)" : "translateY(16px)",
          opacity: visible ? 0.8 : 0,
          transition: "transform 600ms ease 400ms, opacity 600ms ease 400ms",
        }}
      >
        <p
          style={{
            fontSize: "0.82rem",
            color: "#6B7C72",
            margin: 0,
          }}
        >
          Hover over any industry to pause &nbsp;·&nbsp; Serving over 50+
          industry sectors across Australia &nbsp;·&nbsp;{" "}
          <Link
            href="/contact"
            style={{
              color: "#C5A869",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Explore your industry →
          </Link>
        </p>
      </div>
    </section>
  );
}
