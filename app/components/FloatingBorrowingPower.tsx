"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingBorrowingPower() {
  const pathname = usePathname();
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Periodic Show / Hide Animation Loop
  // Shows for 5 seconds, hides for 6 seconds, then shows again
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isShowing = true;

    const cycle = () => {
      if (isShowing) {
        // Was showing -> now hide for 6s
        setIsBannerVisible(false);
        isShowing = false;
        timeoutId = setTimeout(cycle, 6000);
      } else {
        // Was hidden -> now show for 5s
        setIsBannerVisible(true);
        isShowing = true;
        timeoutId = setTimeout(cycle, 5000);
      }
    };

    // First cycle hides after 5s
    timeoutId = setTimeout(cycle, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Do not show on the calculator or contact page
  if (!mounted || pathname === "/calculator" || pathname === "/contact") {
    return null;
  }

  const showBanner = isBannerVisible || isHovered;

  return (
    <>
      <style>{`
        .float-borrow-root {
          position: fixed;
          bottom: 26px;
          left: 26px;
          z-index: 9995;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-family: inherit;
          cursor: pointer;
          user-select: none;
        }

        .float-borrow-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #0D3E26;
          border: 2px solid #A18650;
          color: #E5D6B6;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(13, 62, 38, 0.35);
          transition: transform 220ms ease, background-color 220ms ease, box-shadow 220ms ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .float-borrow-root:hover .float-borrow-circle {
          transform: scale(1.06);
          background-color: #124A2F;
          box-shadow: 0 10px 28px rgba(13, 62, 38, 0.45);
        }

        .float-borrow-banner {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #FFFFFF;
          color: #0D3E26;
          border: 1.5px solid rgba(161, 134, 80, 0.5);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          border-radius: 999px;
          padding: 9px 18px 9px 14px;
          white-space: nowrap;
          overflow: hidden;
          transition: max-width 420ms cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 350ms ease,
                      transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
                      margin-left 350ms ease;
          pointer-events: auto;
          margin-left: 10px;
        }

        .float-borrow-banner.show {
          max-width: 320px;
          opacity: 1;
          transform: translateX(0) scale(1);
          margin-left: 10px;
        }

        .float-borrow-banner.hide {
          max-width: 0px;
          opacity: 0;
          transform: translateX(-12px) scale(0.92);
          margin-left: 0px;
          padding-left: 0px;
          padding-right: 0px;
          border-width: 0px;
        }

        .float-borrow-text {
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0D3E26;
        }

        .float-borrow-badge {
          background-color: rgba(13, 62, 38, 0.08);
          color: #A18650;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          letter-spacing: 0.02em;
        }

        @media (max-width: 640px) {
          .float-borrow-root {
            bottom: 20px;
            left: 16px;
          }
          .float-borrow-circle {
            width: 48px;
            height: 48px;
          }
          .float-borrow-text {
            font-size: 0.8rem;
          }
          .float-borrow-badge {
            display: none;
          }
        }
      `}</style>

      <Link
        href="/calculator"
        className="float-borrow-root"
        aria-label="How much I can borrow? Calculate borrowing power"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Circular Icon */}
        <div className="float-borrow-circle">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="16" y1="14" x2="16" y2="14.01" />
            <line x1="12" y1="14" x2="12" y2="14.01" />
            <line x1="8" y1="14" x2="8" y2="14.01" />
            <line x1="16" y1="18" x2="16" y2="18.01" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
            <line x1="8" y1="18" x2="8" y2="18.01" />
          </svg>
        </div>

        {/* Peek-a-boo Animated Banner */}
        <div className={`float-borrow-banner ${showBanner ? "show" : "hide"}`}>
          <span className="float-borrow-text">How much I can borrow?</span>
          <span className="float-borrow-badge">Estimate →</span>
        </div>
      </Link>
    </>
  );
}

