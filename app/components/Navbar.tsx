"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── Navigation data ── */
const TOP_LINKS = [
  { label: "Home",           href: "/" },
  { label: "About Us",       href: "/about" },
  { label: "Calculator",     href: "/calculator" },
  { label: "Contact",        href: "/contact" },
];

const SERVICE_LINKS = [
  {
    label: "Accounting & Tax",
    href: "/accounting-and-tax",
    items: [
      { label: "Full Scope Business Accounting", href: "/accounting-and-tax/business-accounting" },
      { label: "Tax Planning & Structuring", href: "/accounting-and-tax/tax-planning" },
      { label: "GST & BAS Preparation", href: "/accounting-and-tax/gst-bas-preparation" },
      { label: "Individual Tax Returns", href: "/accounting-and-tax/individual-tax-returns" },
      { label: "Super Fund Tax Returns (SMSF)", href: "/accounting-and-tax/super-fund-tax-returns" },
      { label: "Strategic Business Advice", href: "/accounting-and-tax/business-advice" },
      { label: "Company & ASIC Services", href: "/accounting-and-tax/company-asic-services" },
      { label: "Fringe Benefits Tax (FBT)", href: "/accounting-and-tax/fringe-benefits-tax" },
      { label: "Property & Investment Tax", href: "/accounting-and-tax/property-investment-tax" },
    ],
  },
  {
    label: "Mortgage Broking",
    href: "/mortgage-broking",
    items: [
      { label: "Buying Your First Home", href: "/mortgage-broking/first-home-buyer" },
      { label: "Buying Your Next Home", href: "/mortgage-broking/next-home-buyer" },
      { label: "Refinancing & Debt Consolidation", href: "/mortgage-broking/refinancing-debt-consolidation" },
      { label: "Investment Property Loans", href: "/mortgage-broking/investment-property-loans" },
      { label: "Land & Construction Loans", href: "/mortgage-broking/land-construction-loans" },
      { label: "Business Loans", href: "/mortgage-broking/business-loans" },
      { label: "Personal, Car & Equipment Finance", href: "/mortgage-broking/personal-car-equipment-finance" },
      { label: "Bridging Loans", href: "/mortgage-broking/bridging-loans" },
    ],
  },
  {
    label: "Bookkeeping",
    href: "/bookkeeping",
    items: [
      { label: "Small Business Bookkeeping", href: "/small-business-bookkeeping" },
      { label: "Bank Reconciliation & BAS-Ready Records", href: "/small-business-bookkeeping/bank-reconciliation" },
      { label: "Payroll", href: "/small-business-bookkeeping/payroll" },
      { label: "Accounts Management", href: "/small-business-bookkeeping/accounts-management" },
      { label: "Automated Invoicing", href: "/small-business-bookkeeping/invoicing" },
      { label: "Budgeting & Cash Flow", href: "/small-business-bookkeeping/budgeting-cash-flow" },
      { label: "Cloud Accounting Set-Up", href: "/small-business-bookkeeping/cloud-accounting" },
    ],
  },
  {
    label: "Software We Use",
    href: "/software-we-use",
    items: [
      { label: "QuickBooks", href: "/software-we-use/quickbooks" },
      { label: "Xero", href: "/software-we-use/xero" },
      { label: "MYOB", href: "/software-we-use/myob" },
      { label: "Cloud Accounting Add-Ons", href: "/software-we-use/cloud-accounting-add-ons" },
    ],
  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [openDrop,    setOpenDrop]    = useState<string | null>(null);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  /* Scroll listener — transparent ↔ solid */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDrop(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  /* ─────────────── Derived styles ─────────────── */
  const navTextColor   = solid ? "var(--color-text-secondary)" : "rgba(249,249,246,0.85)";
  const navTextHover   = "#C5A869";
  const topBg          = solid
    ? "rgba(255,255,255,0.97)"
    : "transparent";
  const topBorder      = solid ? "var(--color-border)" : "transparent";
  const topShadow      = solid ? "var(--shadow-md)"    : "none";

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
        transition: "background-color 320ms ease, box-shadow 320ms ease, border-color 320ms ease",
      }}
    >
      {/* ── Top row ── */}
      <div
        style={{
          backgroundColor: topBg,
          borderBottom: `1px solid ${topBorder}`,
          boxShadow: solid ? topShadow : "none",
          backdropFilter: solid ? "none" : "none",
          transition: "background-color 320ms ease, box-shadow 320ms ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
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
            {/* Normal Navbar Logo: light/white for dark hero video background */}
            <img
              src="/logo/darklog.png"
              alt="Taxnet"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                height: "44px",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                opacity: solid ? 0 : 1,
                pointerEvents: solid ? "none" : "auto",
                transition: "opacity 300ms ease",
              }}
            />
            {/* Sticky Navbar Logo: dark green for light/scrolled background */}
            <img
              src="/logo/Logo_TAXTNET.png"
              alt="Taxnet"
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                height: "44px",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                opacity: solid ? 1 : 0,
                pointerEvents: solid ? "auto" : "none",
                transition: "opacity 300ms ease",
              }}
            />
          </Link>

          {/* Centre links */}
          <ul
            className="nav-top-links"
            style={{ display: "flex", alignItems: "center", gap: "0.125rem", listStyle: "none" }}
          >
            {TOP_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  style={{
                    display: "block",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "4px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: navTextColor,
                    textDecoration: "none",
                    transition: "color 180ms ease, background-color 180ms ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = navTextHover;
                    if (solid) e.currentTarget.style.backgroundColor = "var(--color-surface-raised)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = navTextColor;
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: phone + CTA */}
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
              onMouseEnter={e => { e.currentTarget.style.color = navTextHover; }}
              onMouseLeave={e => { e.currentTarget.style.color = navTextColor; }}
            >
              (03) 9802 5800
            </a>
            <Link
              href="/contact"
              id="nav-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                backgroundColor: solid ? "var(--color-secondary)" : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: solid ? "none" : "1.5px solid rgba(255,255,255,0.45)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "0.6rem 1.25rem",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background-color 280ms ease, border-color 280ms ease, transform 180ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = solid
                  ? "var(--color-secondary-light)"
                  : "rgba(255,255,255,0.22)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = solid
                  ? "var(--color-secondary)"
                  : "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book a Chat
            </Link>

            {/* Hamburger */}
            <button
              id="nav-hamburger"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(p => !p)}
              className="nav-hamburger"
              style={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                background: mobileOpen ? "rgba(0,0,0,0.04)" : "transparent",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "background-color 200ms ease",
                marginRight: "-10px", // Align with edge
              }}
            >
              <div style={{ position: "relative", width: "24px", height: "16px" }}>
                <span style={{
                  position: "absolute", left: 0, top: mobileOpen ? "7px" : "0px",
                  width: "100%", height: "2px",
                  backgroundColor: solid ? "var(--color-primary)" : "#fff",
                  borderRadius: "2px",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: mobileOpen ? "rotate(45deg)" : "none",
                }} />
                <span style={{
                  position: "absolute", left: 0, top: "7px",
                  width: "100%", height: "2px",
                  backgroundColor: solid ? "var(--color-primary)" : "#fff",
                  borderRadius: "2px",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "translateX(10px)" : "none",
                }} />
                <span style={{
                  position: "absolute", left: 0, top: mobileOpen ? "7px" : "14px",
                  width: "100%", height: "2px",
                  backgroundColor: solid ? "var(--color-primary)" : "#fff",
                  borderRadius: "2px",
                  transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: mobileOpen ? "rotate(-45deg)" : "none",
                }} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Service bar (second row) ── */}
      <div
        className="service-bar"
        style={{
          backgroundColor: "#0A0D0B",
          borderBottom: "1px solid rgba(197, 168, 105, 0.22)",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", alignItems: "stretch", justifyContent: "center", height: "44px", position: "relative" }}
        >
          {SERVICE_LINKS.map((s) => {
            const isOpen = openDrop === s.label;
            return (
              <div
                key={s.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenDrop(s.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    height: "44px",
                    padding: "0 1.125rem",
                    background: "none",
                    border: "none",
                    borderBottom: isOpen ? "2px solid #C5A869" : "2px solid transparent",
                    color: isOpen ? "#C5A869" : "rgba(255,255,255,0.78)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "color 160ms ease, border-color 160ms ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#C5A869"; }}
                  onMouseLeave={e => { if (!isOpen) e.currentTarget.style.color = "rgba(255,255,255,0.78)"; }}
                >
                  {s.label}
                  {/* chevron */}
                  <svg
                    width="11" height="11" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                    style={{
                      transition: "transform 220ms ease",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      opacity: 0.7,
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown panel */}
                {isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: "220px",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderTop: "2px solid #C5A869",
                      borderRadius: "0 0 6px 6px",
                      boxShadow: "var(--shadow-lg)",
                      padding: "0.5rem 0",
                      zIndex: 200,
                    }}
                  >
                    {s.items.map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenDrop(null)}
                        style={{
                          display: "block",
                          padding: "0.625rem 1.25rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--color-text-secondary)",
                          textDecoration: "none",
                          transition: "background-color 140ms ease, color 140ms ease",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor = "var(--color-surface-raised)";
                          e.currentTarget.style.color = "#C5A869";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "var(--color-text-secondary)";
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        id="nav-mobile-menu"
        style={{
          position: "absolute",
          top: "72px",
          left: 0,
          width: "100%",
          maxHeight: mobileOpen ? "calc(100dvh - 72px)" : "0px",
          overflowY: "auto",
          backgroundColor: "var(--color-surface)",
          borderTop: mobileOpen ? "1px solid var(--color-border)" : "none",
          boxShadow: mobileOpen ? "0 12px 30px -10px rgba(0,0,0,0.15)" : "none",
          transition: "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease, visibility 300ms",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
        }}
      >
        <div className="container" style={{ padding: "1rem 1rem 2.5rem" }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.25rem", margin: 0, padding: 0 }}>
            {TOP_LINKS.filter(l => l.label === "Home").map(l => (
              <li key={l.label} style={{ borderBottom: "1px solid var(--color-border)" }}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem 0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    textDecoration: "none",
                    transition: "color 200ms ease, padding-left 200ms ease",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            
            {SERVICE_LINKS.map(s => {
              const isExpanded = mobileExpanded === s.label;
              return (
                <li key={s.label} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : s.label)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 0.5rem",
                      background: "none",
                      border: "none",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: isExpanded ? "#C5A869" : "var(--color-text)",
                      cursor: "pointer",
                      transition: "color 200ms ease"
                    }}
                  >
                    {s.label}
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isExpanded ? "1fr" : "0fr",
                      transition: "grid-template-rows 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <div style={{ paddingBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                        {s.items.map(item => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block",
                              padding: "0.5rem 0.5rem 0.5rem 1.25rem",
                              fontSize: "0.875rem",
                              color: "var(--color-text-muted)",
                              textDecoration: "none",
                              borderLeft: "2px solid transparent",
                              transition: "color 200ms ease",
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            {TOP_LINKS.filter(l => l.label !== "Home").map(l => (
              <li key={l.label} style={{ borderBottom: "1px solid var(--color-border)" }}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "1rem 0.5rem",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    textDecoration: "none",
                    transition: "color 200ms ease, padding-left 200ms ease",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}

            <li style={{ paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
              <a
                href="tel:0398025800"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#C5A869",
                  textDecoration: "none",
                  padding: "0.75rem",
                  backgroundColor: "var(--color-surface-raised)",
                  borderRadius: "6px",
                  transition: "background-color 200ms ease",
                }}
                onClick={() => setMobileOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (03) 9802 5800
              </a>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ 
                  width: "100%", 
                  justifyContent: "center", 
                  borderRadius: "6px",
                  padding: "0.875rem",
                  fontSize: "1rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Book a Chat
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-top-links { display: none !important; }
          .nav-phone     { display: none !important; }
          #nav-cta       { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .service-bar   { display: none !important; }
        }
      `}</style>
    </header>
  );
}
