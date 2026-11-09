"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES_LINKS = [
  { label: "Business Accounting", href: "/accounting-and-tax/business-accounting" },
  { label: "Strategic Tax Planning", href: "/accounting-and-tax/tax-planning" },
  { label: "Property Investment Tax", href: "/accounting-and-tax/property-investment-tax" },
  { label: "SMSF Tax & Compliance", href: "/accounting-and-tax/super-fund-tax-returns" },
  { label: "Small Business Bookkeeping", href: "/small-business-bookkeeping" },
  { label: "Mortgage Broking & Loans", href: "/mortgage-broking" },
  { label: "First Home Buyer Mortgage", href: "/mortgage-broking/first-home-buyer" },
  { label: "Mortgage Refinancing", href: "/mortgage-broking/refinancing-debt-consolidation" },
  { label: "Commercial & Business Loans", href: "/mortgage-broking/business-loans" },
];

const INDUSTRIES_LINKS = [
  { label: "Medical & Dental Clinics", href: "/#industries" },
  { label: "Legal & Professional Firms", href: "/#industries" },
  { label: "Building & Construction Trades", href: "/#industries" },
  { label: "Engineering & Fabrication", href: "/#industries" },
  { label: "Hospitality & Restaurant Groups", href: "/#industries" },
  { label: "High-Growth Tech Startups", href: "/#industries" },
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
  { label: "About Our Practice", href: "/about" },
  { label: "Borrowing Power Calculator", href: "/calculator" },
  { label: "Industries We Serve", href: "/#industries" },
  { label: "Cloud Software & Add-Ons", href: "/software-we-use" },
  { label: "Accreditations & Trust", href: "/#trust" },
  { label: "Client Testimonials", href: "/#testimonials" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Book a Discovery Call", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "#05110A",
        background: "linear-gradient(180deg, #090D0B 0%, #040705 100%)",
        color: "#FFFFFF",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 168, 105, 0.28)",
      }}
    >
      {/* ── Responsive View Switching (Mobile vs Desktop) ── */}
      <style>{`
        .footer-desktop-view {
          display: block;
        }
        .footer-mobile-view {
          display: none;
        }
        @media (max-width: 767px) {
          .footer-desktop-view {
            display: none !important;
          }
          .footer-mobile-view {
            display: block !important;
          }
        }
      `}</style>
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

      {/* ── DESKTOP FOOTER (Visible on screens >= 768px) ── */}
      <div className="footer-desktop-view">
        {/* ── Top Accreditation & Practice Strip ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "2.25rem 1.5rem",
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
              Certified Australian Accounting & Financial Practice
            </h3>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.65)",
                margin: 0,
              }}
            >
              Registered Tax Practitioners Board (TPB) agent and CPA Australia Public Practice firm.
            </p>
          </div>

          {/* Official Accreditations in Top Bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                height: "46px",
              }}
            >
              <Image
                src="/Tax-Practitioners-Board-1.jpg"
                alt="Tax Practitioners Board Registered Tax Agent"
                width={150}
                height={40}
                style={{ height: "32px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "6px 14px",
                borderRadius: "8px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                height: "46px",
              }}
            >
              <Image
                src="/CPA-logo-(2017).jpg"
                alt="CPA Australia Public Practice"
                width={110}
                height={40}
                style={{ height: "32px", width: "auto", objectFit: "contain" }}
              />
            </div>

            <Link
              href="/contact"
              style={{
                backgroundColor: "#A18650",
                color: "#0A0D0B",
                fontWeight: 700,
                fontSize: "0.85rem",
                padding: "0.75rem 1.4rem",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 180ms ease",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 12px rgba(161, 134, 80, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#A18650";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Consultation →
            </Link>
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
            <Link
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
                alt="Taxnet"
                width={150}
                height={48}
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>

            <p
              style={{
                fontSize: "0.86rem",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.6,
                maxWidth: "340px",
                marginBottom: "1rem",
              }}
            >
              Taxnet is an Australian CPA accounting firm and licensed finance broking
              practice providing full-spectrum corporate tax, proactive bookkeeping,
              and commercial debt solutions.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                fontSize: "0.82rem",
                color: "rgba(255, 255, 255, 0.78)",
                lineHeight: 1.5,
              }}
            >
              {/* Address */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "9px" }}>
                <span
                  style={{
                    color: "#C5A869",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109</span>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <span
                  style={{
                    color: "#C5A869",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a
                  href="tel:0398025800"
                  style={{ color: "#FFFFFF", textDecoration: "none", fontWeight: 600, transition: "color 160ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  (03) 9802 5800
                </a>
              </div>

              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <span
                  style={{
                    color: "#C5A869",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <a
                  href="mailto:info@taxnet.com.au"
                  style={{ color: "#FFFFFF", textDecoration: "none", transition: "color 160ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  info@taxnet.com.au
                </a>
              </div>

              {/* WhatsApp */}
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <span
                  style={{
                    color: "#C5A869",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FFFFFF", textDecoration: "none", transition: "color 160ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  +61 420 956 761
                </a>
              </div>
            </div>
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
                  <Link
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
                  </Link>
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
                  <Link
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
                  </Link>
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
                  <Link
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
                  </Link>
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
            <span>Registered Tax Agent</span>
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
            © {new Date().getFullYear()} Taxnet Advisory Pty Ltd. ABN 40 610 387 881. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
            <Link
              href="/privacy-policy"
              style={{ color: "rgba(255, 255, 255, 0.65)", textDecoration: "none", transition: "color 160ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              style={{ color: "rgba(255, 255, 255, 0.65)", textDecoration: "none", transition: "color 160ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
            >
              Terms of Engagement
            </Link>
            <Link
              href="/contact"
              style={{ color: "rgba(255, 255, 255, 0.65)", textDecoration: "none", transition: "color 160ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A869")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)")}
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </div>
      </div>

      {/* ── MOBILE FOOTER (Visible on screens <= 767px) ── */}
      <div
        className="footer-mobile-view"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "2.25rem 1.25rem 1.75rem 1.25rem",
        }}
      >
        {/* Brand & Accreditations */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1rem",
          }}
        >
          <Link href="/" style={{ display: "inline-block", textDecoration: "none" }}>
            <Image
              src="/logo/darklog.png"
              alt="Taxnet"
              width={130}
              height={40}
              style={{ height: "36px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "3px 8px",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                height: "30px",
              }}
            >
              <Image
                src="/Tax-Practitioners-Board-1.jpg"
                alt="TPB Registered Tax Agent"
                width={80}
                height={22}
                style={{ height: "18px", width: "auto", objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "3px 8px",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                height: "30px",
              }}
            >
              <Image
                src="/CPA-logo-(2017).jpg"
                alt="CPA Australia Public Practice"
                width={60}
                height={22}
                style={{ height: "18px", width: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        {/* Short Executive Bio */}
        <p
          style={{
            fontSize: "0.83rem",
            color: "rgba(255, 255, 255, 0.72)",
            lineHeight: 1.5,
            margin: "0 0 1.25rem 0",
          }}
        >
          CPA Australia Public Practice & licensed finance broking firm delivering proactive tax, bookkeeping, and commercial lending advice.
        </p>

        {/* Quick Touch Contact Actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "1.5rem",
          }}
        >
          <a
            href="tel:0398025800"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              borderRadius: "8px",
              padding: "10px",
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C5A869"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(03) 9802 5800</span>
          </a>

          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              backgroundColor: "#A18650",
              borderRadius: "8px",
              padding: "10px",
              color: "#0A0D0B",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 700,
              boxShadow: "0 3px 10px rgba(161, 134, 80, 0.25)",
            }}
          >
            <span>Book Meeting</span>
            <span>→</span>
          </Link>
        </div>

        {/* Essential Navigation (Short & Easy to Read 2-Column Grid) */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "1.1rem 0",
            marginBottom: "1.25rem",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#C5A869",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Quick Navigation
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "0.7rem",
              columnGap: "0.75rem",
              fontSize: "0.84rem",
            }}
          >
            <Link href="/about" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>About Taxnet</Link>
            <Link href="/accounting-and-tax/business-accounting" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Business Accounting</Link>
            <Link href="/accounting-and-tax/tax-planning" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Tax Planning</Link>
            <Link href="/small-business-bookkeeping" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Bookkeeping</Link>
            <Link href="/mortgage-broking" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Mortgage Broking</Link>
            <Link href="/calculator" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Loan Calculator</Link>
            <Link href="/software-we-use" style={{ color: "rgba(255, 255, 255, 0.82)", textDecoration: "none" }}>Cloud Software</Link>
            <Link href="/contact" style={{ color: "#C5A869", textDecoration: "none", fontWeight: 600 }}>Get In Touch →</Link>
          </div>
        </div>

        {/* Location & Operating Hours */}
        <div
          style={{
            fontSize: "0.78rem",
            color: "rgba(255, 255, 255, 0.68)",
            lineHeight: 1.55,
            marginBottom: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <span style={{ color: "#C5A869", display: "inline-flex", flexShrink: 0, marginTop: "2px" }} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span>Suite 6, 861 Doncaster Rd, Doncaster East VIC 3109</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#C5A869", display: "inline-flex", flexShrink: 0 }} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span>Mon – Fri: 6:00am – 6:00pm (Sat & Sun: Closed)</span>
          </div>
        </div>

        {/* Compact Legal Footer & Back to Top */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            fontSize: "0.72rem",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div>© {new Date().getFullYear()} Taxnet Advisory Pty Ltd</div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Privacy</Link>
            <span>·</span>
            <Link href="/terms-of-service" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Terms</Link>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "#C5A869",
                fontSize: "0.72rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
