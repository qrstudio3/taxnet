"use client";

import React from "react";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section
      style={{
        backgroundColor: "#0A0D0B",
        color: "#FFFFFF",
        paddingTop: "140px",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Subtle gold ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: "#C5A869" }}>Contact Us</span>
        </nav>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
            fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            margin: "0 auto 1.75rem auto",
          }}
        >
          Contact{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Us
          </span>
        </h1>

        {/* Book A Consultation Button */}
        <div>
          <a
            href="#booking"
            style={{
              display: "inline-block",
              backgroundColor: "#C5A869",
              color: "#0A0D0B",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "14px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(197, 168, 105, 0.35)",
              transition: "transform 180ms ease, background-color 180ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D6BC7E";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C5A869";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book A Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
