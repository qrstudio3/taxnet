"use client";

import React, { useState, useEffect, useRef } from "react";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if user has already subscribed or suppressed popup
    try {
      const isSubscribed = localStorage.getItem("taxnet_newsletter_subscribed");
      if (isSubscribed === "true") return;

      const dismissedUntil = localStorage.getItem("taxnet_newsletter_dismissed_until");
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return; // Suppressed for the week
      }

      // Check if dismissed in current browser session
      const sessionDismissed = sessionStorage.getItem("taxnet_newsletter_session_closed");
      if (sessionDismissed === "true") return;

      // Graceful entrance delay after home page loads (2.8 seconds)
      timerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 2800);
    } catch {
      // LocalStorage access fallback (e.g. private browsing)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClose = () => {
    try {
      if (dontShowAgain) {
        // Suppress for exactly 1 week (7 days)
        const oneWeekFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000;
        localStorage.setItem("taxnet_newsletter_dismissed_until", oneWeekFromNow.toString());
      } else {
        // Suppress for the remainder of this session so it doesn't immediately reappear on reload
        sessionStorage.setItem("taxnet_newsletter_session_closed", "true");
      }
    } catch {
      // Fallback
    }
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setStatus("success");
      try {
        // Mark as subscribed permanently so they are never prompted again
        localStorage.setItem("taxnet_newsletter_subscribed", "true");
      } catch {
        // Fallback
      }

      // Automatically close after 2.2 seconds on success
      setTimeout(() => {
        setIsOpen(false);
      }, 2200);
    } catch (err: unknown) {
      const error = err as Error;
      setStatus("error");
      setErrorMessage(error.message || "Failed to subscribe. Please try again.");
    }
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, dontShowAgain]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="TaxNet Newsletter Subscription"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.75rem",
        backgroundColor: "rgba(3, 12, 7, 0.78)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "tnFadeIn 240ms ease forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <style>{`
        @keyframes tnFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes tnPopUp {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .newsletter-modal-card {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .newsletter-modal-card::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        @media (max-height: 680px) {
          .newsletter-modal-card {
            padding: 1.15rem 1.25rem !important;
          }
          .newsletter-modal-title {
            font-size: 1.35rem !important;
            margin-bottom: 0.35rem !important;
          }
          .newsletter-modal-desc {
            font-size: 0.8rem !important;
            margin-bottom: 0.85rem !important;
          }
        }
      `}</style>

      {/* Modal Card */}
      <div
        className="newsletter-modal-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#071F14",
          background: "linear-gradient(150deg, #071F14 0%, #0D3E26 65%, #0A2B1B 100%)",
          borderRadius: "18px",
          border: "1px solid rgba(197, 168, 105, 0.35)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.65), 0 0 35px rgba(197, 168, 105, 0.12)",
          padding: "clamp(1.35rem, 4vw, 2.25rem)",
          color: "#FFFFFF",
          animation: "tnPopUp 280ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Halo */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(197, 168, 105, 0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Close "✕" Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close newsletter popup"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color: "rgba(255, 255, 255, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
            transition: "all 180ms ease",
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.22)";
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ✕
        </button>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, paddingRight: "0.5rem" }}>
          {/* Heading */}
          <h2
            className="newsletter-modal-title"
            style={{
              fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
              fontSize: "clamp(1.5rem, 4.4vw, 2.05rem)",
              fontWeight: 400,
              lineHeight: 1.18,
              color: "#FFFFFF",
              letterSpacing: "-0.015em",
              margin: "0 0 0.55rem 0",
              paddingRight: "1.75rem",
            }}
          >
            Stay Ahead of Australian Tax &amp; Lending Changes.
          </h2>

          {/* Subtitle */}
          <p
            className="newsletter-modal-desc"
            style={{
              fontSize: "clamp(0.82rem, 2.8vw, 0.88rem)",
              lineHeight: 1.55,
              color: "rgba(240, 245, 242, 0.82)",
              marginBottom: "1.25rem",
            }}
          >
            Join Victorian business owners and property investors receiving timely CPA tax minimization strategies, ATO regulatory alerts, and mortgage rate analysis.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div
              style={{
                backgroundColor: "rgba(197, 168, 105, 0.15)",
                border: "1px solid #C5A869",
                borderRadius: "10px",
                padding: "1.25rem",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              <div style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>✓</div>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: "#C5A869", marginBottom: "0.25rem" }}>
                You&apos;re Subscribed!
              </div>
              <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", margin: 0 }}>
                Thank you for connecting with TaxNet. You&apos;ll receive our next quarterly advisory digest.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email address..."
                    style={{
                      width: "100%",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid",
                      borderColor: status === "error" ? "#FF6B6B" : "rgba(197, 168, 105, 0.4)",
                      borderRadius: "8px",
                      padding: "12px 14px",
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                      outline: "none",
                      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
                      transition: "border-color 180ms ease, background-color 180ms ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#C5A869";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = status === "error" ? "#FF6B6B" : "rgba(197, 168, 105, 0.4)";
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                    }}
                  />
                </div>

                {status === "error" && errorMessage && (
                  <div style={{ fontSize: "0.8rem", color: "#FF8E8E", paddingLeft: "4px" }}>
                    {errorMessage}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "#C5A869",
                  color: "#05110A",
                  fontWeight: 700,
                  fontSize: "0.94rem",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  boxShadow: "0 6px 18px rgba(197, 168, 105, 0.3)",
                  transition: "all 180ms ease",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.backgroundColor = "#D4BC7D";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.backgroundColor = "#C5A869";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {status === "loading" ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send</span>
                    <span>→</span>
                  </>
                )}
              </button>

              {/* "Do not show that again" Checkbox */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "rgba(240, 245, 242, 0.75)",
                  cursor: "pointer",
                  marginTop: "0.25rem",
                  userSelect: "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  style={{
                    width: "14px",
                    height: "14px",
                    accentColor: "#C5A869",
                    cursor: "pointer",
                    borderRadius: "3px",
                  }}
                />
                <span>Do not show this again</span>
              </label>
            </form>
          )}

          {/* Reassurance Note */}
          <div
            style={{
              fontSize: "0.72rem",
              color: "rgba(255, 255, 255, 0.45)",
              textAlign: "center",
              marginTop: "0.85rem",
              paddingTop: "0.65rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            Strictly zero spam. Unsubscribe with 1-click anytime.
          </div>
        </div>
      </div>
    </div>
  );
}

