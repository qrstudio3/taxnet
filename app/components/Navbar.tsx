"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Clean 6-Item Top Navigation (No Dropdowns, Single Page per Service) ── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Accounting & Tax", href: "/accounting-and-tax" },
  { label: "Mortgage Broking", href: "/mortgage-broking" },
  { label: "Bookkeeping", href: "/bookkeeping" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  /* Scroll listener — transparent ↔ solid */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const solid = scrolled || mobileOpen || !isHome;

  /* Derived styles */
  const navTextColor = solid ? "var(--color-text-secondary, #1C2022)" : "rgba(249,249,246,0.92)";
  const navTextHover = "#C5A869";
  const topBg = solid ? "rgba(255,255,255,0.98)" : "transparent";
  const topBorder = solid ? "rgba(0,0,0,0.08)" : "transparent";
  const topShadow = solid ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none";

  return (
    <header
      ref={navRef}
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 300ms ease",
      }}
    >
      <div
        style={{
          backgroundColor: topBg,
          borderBottom: `1px solid ${topBorder}`,
          boxShadow: topShadow,
          backdropFilter: solid ? "blur(8px)" : "none",
          WebkitBackdropFilter: solid ? "blur(8px)" : "none",
          transition: "background-color 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            aria-label="Taxnet"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              height: "46px",
              width: "140px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* White logo for dark hero transparent header */}
            <img
              src="/logo/darklog.png"
              alt="Taxnet Logo"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                height: "42px",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                opacity: solid ? 0 : 1,
                pointerEvents: solid ? "none" : "auto",
                transition: "opacity 240ms ease",
              }}
            />
            {/* Dark logo for solid white background */}
            <img
              src="/logo/Logo_TAXTNET.png"
              alt="Taxnet Logo"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                height: "42px",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                opacity: solid ? 1 : 0,
                pointerEvents: solid ? "auto" : "none",
                transition: "opacity 240ms ease",
              }}
            />
          </Link>

          {/* Desktop Navigation Links — No dropdowns */}
          <nav className="desktop-nav-menu" style={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        display: "inline-block",
                        padding: "0.55rem 0.85rem",
                        borderRadius: "6px",
                        fontFamily: "var(--font-sans)",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "0.9rem",
                        color: isActive ? "#C5A869" : navTextColor,
                        textDecoration: "none",
                        transition: "color 180ms ease, background-color 180ms ease",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = navTextHover;
                        if (solid) e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive ? "#C5A869" : navTextColor;
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Phone Number + Book a Chat CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="nav-right">
            <a
              href="tel:0398025800"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: navTextColor,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 180ms ease",
                whiteSpace: "nowrap",
              }}
              className="nav-phone"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = navTextHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = navTextColor;
              }}
            >
              (03) 9802 5800
            </a>

            <Link
              href="/contact"
              id="nav-cta"
              className="playful-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: solid ? "#0A0D0B" : "rgba(255,255,255,0.12)",
                color: solid ? "#C5A869" : "#FFFFFF",
                border: solid ? "1.5px solid #C5A869" : "1.5px solid rgba(255,255,255,0.45)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.55rem 1.25rem",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = solid ? "#C5A869" : "rgba(255,255,255,0.24)";
                e.currentTarget.style.color = solid ? "#0A0D0B" : "#FFFFFF";
                e.currentTarget.style.transform = "translateY(-3px) scale(1.06)";
                e.currentTarget.style.boxShadow = "0 8px 22px rgba(197, 168, 105, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = solid ? "#0A0D0B" : "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = solid ? "#C5A869" : "#FFFFFF";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(1px) scale(0.96)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.06)";
              }}
            >
              Book a Chat
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              id="nav-hamburger"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
              className="nav-hamburger"
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                width: "42px",
                height: "42px",
                background: mobileOpen ? "rgba(0,0,0,0.06)" : "transparent",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <div style={{ position: "relative", width: "24px", height: "16px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: mobileOpen ? "7px" : "0px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: solid ? "#0A0D0B" : "#FFFFFF",
                    borderRadius: "2px",
                    transition: "all 240ms ease",
                    transform: mobileOpen ? "rotate(45deg)" : "none",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "7px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: solid ? "#0A0D0B" : "#FFFFFF",
                    borderRadius: "2px",
                    transition: "all 200ms ease",
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: mobileOpen ? "7px" : "14px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: solid ? "#0A0D0B" : "#FFFFFF",
                    borderRadius: "2px",
                    transition: "all 240ms ease",
                    transform: mobileOpen ? "rotate(-45deg)" : "none",
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean Fullscreen Slide-Down, No Dropdowns) */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "76px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 99,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1.5rem 1.5rem 2.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.label}
                  style={{
                    borderBottom: "1px solid #F0F2F1",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "1rem 0",
                      fontSize: "1.1rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#C5A869" : "#1C2022",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a
              href="tel:0398025800"
              style={{
                textAlign: "center",
                display: "block",
                padding: "0.85rem",
                borderRadius: "8px",
                border: "1px solid #E5EBE7",
                color: "#1C2022",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              📞 Call (03) 9802 5800
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                textAlign: "center",
                display: "block",
                padding: "0.95rem",
                borderRadius: "8px",
                backgroundColor: "#0A0D0B",
                color: "#C5A869",
                border: "1px solid #C5A869",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Book a Chat
            </Link>
          </div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-nav-menu,
          .nav-phone {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
