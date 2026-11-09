"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function FloatingContact() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Do not show on the dedicated contact page
  if (pathname === "/contact") {
    return null;
  }

  return (
    <>
      <style>{`
        .fab-root {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: inherit;
        }

        .fab-menu {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          transition: opacity 220ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1), visibility 220ms;
        }

        .fab-menu.closed {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(14px) scale(0.95);
        }

        .fab-menu.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .fab-action-row {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 180ms ease;
        }

        .fab-action-row:hover {
          transform: translateX(-3px);
        }

        .fab-action-pill {
          background-color: #FFFFFF;
          color: #0A0D0B;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          padding: 8px 14px;
          border-radius: 999px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(197, 168, 105, 0.35);
          white-space: nowrap;
          transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .fab-action-row:hover .fab-action-pill {
          background-color: #0A0D0B;
          color: #FFFFFF;
          border-color: #C5A869;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
        }

        .fab-action-bubble {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
          flex-shrink: 0;
        }

        .fab-action-row:hover .fab-action-bubble {
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .fab-bubble-whatsapp {
          background-color: #25D366;
          color: #FFFFFF;
        }

        .fab-bubble-phone {
          background-color: #0A0D0B;
          color: #C5A869;
          border: 1.5px solid #C5A869;
        }

        .fab-bubble-email {
          background-color: #0A0D0B;
          color: #C5A869;
          border: 1.5px solid #C5A869;
        }

        .fab-trigger-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #0A0D0B;
          border: 2px solid #C5A869;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(197, 168, 105, 0.2);
          cursor: pointer;
          transition: transform 200ms ease, background-color 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
          position: relative;
        }

        .fab-trigger-btn:hover {
          transform: scale(1.06);
          background-color: #141815;
          border-color: #E5D6B6;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(197, 168, 105, 0.35);
        }

        .fab-trigger-icon {
          transition: transform 240ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
        }

        @media (max-width: 640px) {
          .fab-root {
            bottom: 20px;
            right: 18px;
          }
          .fab-trigger-btn {
            width: 54px;
            height: 54px;
          }
          .fab-action-bubble {
            width: 44px;
            height: 44px;
          }
          .fab-action-pill {
            font-size: 0.8rem;
            padding: 7px 12px;
          }
        }
      `}</style>

      {/* Backdrop overlay on mobile/desktop when open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            backgroundColor: "rgba(0, 0, 0, 0.18)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            transition: "opacity 200ms ease",
          }}
        />
      )}

      <div ref={containerRef} className="fab-root" aria-label="Contact options">
        {/* Expanded Speed Dial Options */}
        <div className={`fab-menu ${isOpen ? "open" : "closed"}`}>
          {/* WhatsApp Option */}
          <a
            href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
            target="_blank"
            rel="noopener noreferrer"
            className="fab-action-row"
            aria-label="Chat with us on WhatsApp"
            onClick={() => setIsOpen(false)}
          >
            <span className="fab-action-pill">Chat with us</span>
            <div className="fab-action-bubble fab-bubble-whatsapp">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
          </a>

          {/* Phone Call Option */}
          <a
            href="tel:0398025800"
            className="fab-action-row"
            aria-label="Make a phone call"
            onClick={() => setIsOpen(false)}
          >
            <span className="fab-action-pill">Make a phone call</span>
            <div className="fab-action-bubble fab-bubble-phone">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
          </a>

          {/* Email Advisory Option */}
          <a
            href="mailto:info@taxnet.com.au"
            className="fab-action-row"
            aria-label="Email us"
            onClick={() => setIsOpen(false)}
          >
            <span className="fab-action-pill">Email us</span>
            <div className="fab-action-bubble fab-bubble-email">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Primary Toggle Floating Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="fab-trigger-btn"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          {isOpen ? (
            <svg
              className="fab-trigger-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C5A869"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="fab-trigger-icon"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C5A869"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
