"use client";

import React, { useState } from "react";
import Image from "next/image";

const SERVICES_LINKS = [
  { label: "Corporate Tax & Structuring", href: "#services" },
  { label: "Small Business Bookkeeping", href: "#services" },
  { label: "GST & BAS Lodgements", href: "#services" },
  { label: "Commercial & Equipment Lending", href: "#services" },
  { label: "Virtual CFO & Strategic Advisory", href: "#services" },
  { label: "R&D Tax Incentives & Grants", href: "#services" },
];

const INDUSTRIES_LINKS = [
  { label: "Medical & Dental Clinics", href: "#industries" },
  { label: "Legal & Professional Firms", href: "#industries" },
  { label: "Building & Construction Trades", href: "#industries" },
  { label: "Engineering & Fabrication", href: "#industries" },
  { label: "Hospitality & Restaurant Groups", href: "#industries" },
  { label: "High-Growth Tech Startups", href: "#industries" },
];

const OPENING_HOURS = [
  { day: "Monday", hours: "6am - 6pm" },
  { day: "Tuesday", hours: "6am - 6pm" },
  { day: "Wednesday", hours: "6am - 6pm" },
  { day: "Thursday", hours: "6am - 6pm" },
  { day: "Friday", hours: "6am - 6pm" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const QUICK_LINKS = [
  { label: "About Our Practice", href: "#" },
  { label: "Client Pricing & Plans", href: "#plans" },
  { label: "Accreditations & Awards", href: "#awards" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "Book a Discovery Call", href: "#contact" },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#0D3E26",
        background: "linear-gradient(180deg, #0D3E26 0%, #072316 100%)",
        color: "#FFFFFF",
        overflow: "hidden",
        borderTop: "1px solid rgba(161, 134, 80, 0.28)",
      }}
    >
      {/* ── Background Dotted World Map Watermark ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          backgroundImage: "url('/global.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.08,
          pointerEvents: "none",
          filter: "brightness(1.4)",
        }}
      />

      {/* ── Subtle Ambient Glows ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-80px",
          left: "20%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(161, 134, 80, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top Newsletter & Consultation Strip ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "2.75rem 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.75rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: '"Monety", Georgia, serif',
                fontSize: "1.55rem",
                fontWeight: 400,
                color: "#FFFFFF",
                margin: "0 0 0.35rem 0",
                letterSpacing: "-0.01em",
              }}
            >
              Stay Ahead of Australian Tax & Lending Changes
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.65)",
                margin: 0,
              }}
            >
              Quarterly advisory updates, ATO threshold alerts, and commercial finance insights.
            </p>
          </div>

          <div style={{ flex: "1 1 340px", maxWidth: "460px" }}>
            {subscribed ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#C5A869",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  padding: "10px 16px",
                  backgroundColor: "rgba(197, 168, 105, 0.12)",
                  borderRadius: "8px",
                  border: "1px solid rgba(197, 168, 105, 0.3)",
                }}
              >
                <span>✓</span> Subscribed. You will receive our next quarterly tax bulletin.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: "flex",
                  gap: "8px",
                  background: "rgba(255, 255, 255, 0.08)",
                  padding: "4px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    padding: "10px 14px",
                    color: "#FFFFFF",
                    fontSize: "0.86rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#A18650",
                    color: "#0D3E26",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    border: "none",
                    borderRadius: "6px",
                    padding: "0 18px",
                    cursor: "pointer",
                    transition: "background-color 180ms ease, transform 180ms ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#C5A869";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#A18650";
                  }}
                >
                  Join Insights
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Footer Columns ── */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "3.5rem 1.5rem 2.5rem 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.25rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Info & Light Logo */}
          <div style={{ minWidth: "220px", maxWidth: "320px" }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                marginBottom: "1.25rem",
                textDecoration: "none",
              }}
            >
              {/* Using the requested light logo: public/logo/darklog.png */}
              <Image
                src="/logo/darklog.png"
                alt="TaxNet"
                width={150}
                height={48}
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </a>

            <p
              style={{
                fontSize: "0.86rem",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.6,
                maxWidth: "340px",
                marginBottom: 0,
              }}
            >
              TaxNet is an Australian CPA accounting firm and licensed finance broking
              practice providing full-spectrum corporate tax, proactive bookkeeping,
              and commercial debt solutions.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Advisory Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SERVICES_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.65rem" }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 180ms ease, transform 180ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Key Sectors
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {INDUSTRIES_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.65rem" }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 180ms ease, transform 180ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.65rem" }}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.84rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 180ms ease, transform 180ms ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Opening Hours */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Opening Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {OPENING_HOURS.map((item) => (
                <div
                  key={item.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.82rem",
                    borderBottom: "1px dashed rgba(255, 255, 255, 0.08)",
                    paddingBottom: "4px",
                  }}
                >
                  <span style={{ color: "rgba(255, 255, 255, 0.78)" }}>
                    {item.day}
                  </span>
                  <span
                    style={{
                      color:
                        item.hours === "Closed"
                          ? "rgba(255, 255, 255, 0.45)"
                          : "#C5A869",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                    }}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Professional Accreditations Bar (No Badges) ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.78rem",
            color: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.85rem" }}>
            <span>CPA Australia Public Practice</span>
            <span style={{ color: "rgba(197, 168, 105, 0.6)" }}>·</span>
            <span>Registered Tax Agent #26194820</span>
            <span style={{ color: "rgba(197, 168, 105, 0.6)" }}>·</span>
            <span>Tax Practitioners Board (TPB)</span>
            <span style={{ color: "rgba(197, 168, 105, 0.6)" }}>·</span>
            <span>MFAA Accredited Broker</span>
            <span style={{ color: "rgba(197, 168, 105, 0.6)" }}>·</span>
            <span>Xero Platinum Champion Partner</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              padding: "6px 14px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 180ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            Back to Top ↑
          </button>
        </div>

        {/* ── Bottom Legal Disclaimer & Copyright ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.73rem",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div>
            © {new Date().getFullYear()} TaxNet Advisory Pty Ltd. ABN 48 619 284 901. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a
              href="#"
              style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none" }}
            >
              Terms of Engagement
            </a>
            <a
              href="#"
              style={{ color: "rgba(255, 255, 255, 0.5)", textDecoration: "none" }}
            >
              Financial Services Guide (FSG)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
