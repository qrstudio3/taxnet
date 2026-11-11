"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MaintenancePage() {
  const router = useRouter();
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [bypassCode, setBypassCode] = useState("");
  const [adminError, setAdminError] = useState("");

  const handleAdminBypass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bypassCode.trim()) {
      setAdminError("Please enter the staff bypass key.");
      return;
    }
    // Redirect to home with bypass query to activate the bypass cookie via middleware
    router.push(`/?bypass=${encodeURIComponent(bypassCode.trim())}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0D0B",
        color: "#F9F9F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.18);
          }
        }
        @keyframes subtleDrift {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #C5A869;
          box-shadow: 0 0 12px #C5A869;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .maintenance-btn {
          transition: transform 340ms cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 340ms cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-color 200ms ease,
                      border-color 200ms ease,
                      color 200ms ease;
          will-change: transform;
          cursor: pointer;
          text-decoration: none;
        }
        .maintenance-btn:hover {
          transform: translateY(-3.5px) scale(1.04);
        }
        .maintenance-btn:active {
          transform: translateY(1.5px) scale(0.965);
        }
      `}</style>

      {/* Background Decorative Radial Glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "550px",
          background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, rgba(10, 13, 11, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "500px",
          background: "radial-gradient(circle, rgba(197, 168, 105, 0.08) 0%, rgba(10, 13, 11, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header / Brand Logo */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          zIndex: 2,
          paddingTop: "1rem",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "#141815",
            border: "1px solid rgba(197, 168, 105, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Image
            src="/logo/emblem.png?v=3"
            alt="Taxnet Logo"
            width={28}
            height={28}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#FFFFFF",
              lineHeight: 1.1,
            }}
          >
            TAXNET
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C5A869",
            }}
          >
            Private Clients & Advisory
          </div>
        </div>
      </header>

      {/* Main Content Box */}
      <main
        style={{
          maxWidth: "760px",
          width: "100%",
          textAlign: "center",
          zIndex: 2,
          margin: "3rem auto",
        }}
      >
        {/* Status Pill Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "999px",
            backgroundColor: "rgba(197, 168, 105, 0.1)",
            border: "1px solid rgba(197, 168, 105, 0.35)",
            marginBottom: "2rem",
          }}
        >
          <div className="pulse-dot" />
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#DFC386",
            }}
          >
            Scheduled System Upgrade in Progress
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
            fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
            fontWeight: 400,
            lineHeight: 1.16,
            letterSpacing: "-0.015em",
            color: "#FFFFFF",
            margin: "0 0 1.5rem 0",
          }}
        >
          We are upgrading our digital advisory portal.
        </h1>

        {/* Subtitle Message */}
        <p
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.12rem)",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.75)",
            maxWidth: "620px",
            margin: "0 auto 2.75rem auto",
          }}
        >
          Our client lodgement engine, mortgage calculation suites, and advisory infrastructure are currently undergoing scheduled updates to deliver improved performance and security.
        </p>

        {/* Emergency Assistance Card */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(197, 168, 105, 0.25)",
            borderRadius: "18px",
            padding: "2.25rem 2rem",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 18px 48px rgba(0, 0, 0, 0.45)",
            maxWidth: "660px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C5A869",
              marginBottom: "0.5rem",
            }}
          >
            Direct Partner Assistance
          </div>
          <h2
            style={{
              fontSize: "1.22rem",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: "0 0 0.75rem 0",
            }}
          >
            Need urgent tax, BAS lodgement, or lending advice?
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
              margin: "0 0 1.75rem 0",
            }}
          >
            Our Melbourne advisory desk remains operational. Connect directly with our senior CPA accountants and accredited brokers:
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* WhatsApp Fast-Track */}
            <a
              href={`https://wa.me/61420956761?text=${encodeURIComponent(
                "Hi Taxnet, I am reaching out while your website is undergoing maintenance."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="maintenance-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.92rem",
                padding: "12px 22px",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(37, 211, 102, 0.35)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp Chat</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="tel:0398025800"
              className="maintenance-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#C5A869",
                color: "#0A0D0B",
                fontWeight: 700,
                fontSize: "0.92rem",
                padding: "12px 22px",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(197, 168, 105, 0.35)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call (03) 9802 5800</span>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:philip@taxnet.com.au"
              className="maintenance-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#E5D6B6",
                fontWeight: 600,
                fontSize: "0.92rem",
                padding: "12px 20px",
                borderRadius: "10px",
                border: "1px solid rgba(197, 168, 105, 0.35)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email Advisory Desk</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer / Address & Staff Access */}
      <footer
        style={{
          width: "100%",
          maxWidth: "840px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          fontSize: "0.82rem",
          color: "rgba(255, 255, 255, 0.5)",
          zIndex: 2,
        }}
      >
        <div>
          Suite 1, 1024 Doncaster Road, Doncaster East VIC 3109 · Melbourne, Australia
        </div>

        <div>
          <button
            type="button"
            onClick={() => setShowAdminModal(true)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(197, 168, 105, 0.8)",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 8px",
              borderRadius: "4px",
              transition: "color 180ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC386")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(197, 168, 105, 0.8)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Staff Access</span>
          </button>
        </div>
      </footer>

      {/* Staff Bypass Modal */}
      {showAdminModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setShowAdminModal(false)}
        >
          <div
            style={{
              backgroundColor: "#141815",
              border: "1.5px solid #C5A869",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>
                Staff Preview Access
              </div>
              <button
                type="button"
                onClick={() => setShowAdminModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255, 255, 255, 0.6)",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  padding: "4px",
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "1.25rem", lineHeight: 1.5 }}>
              Enter your bypass key to view and test the live website while maintenance mode remains visible to public visitors.
            </p>

            <form onSubmit={handleAdminBypass}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="bypass-code-input"
                  style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#C5A869", marginBottom: "6px" }}
                >
                  Bypass Secret Key
                </label>
                <input
                  id="bypass-code-input"
                  type="password"
                  placeholder="e.g. taxnet-admin"
                  value={bypassCode}
                  onChange={(e) => {
                    setBypassCode(e.target.value);
                    setAdminError("");
                  }}
                  autoFocus
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(197, 168, 105, 0.4)",
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    fontSize: "0.92rem",
                    outline: "none",
                  }}
                />
                {adminError && (
                  <div style={{ color: "#F87171", fontSize: "0.78rem", marginTop: "6px" }}>
                    {adminError}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "#FFFFFF",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "#C5A869",
                    border: "none",
                    color: "#0A0D0B",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Unlock Site
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
