"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes float-btn-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        @keyframes float-btn-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(161, 134, 80, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(161, 134, 80, 0); }
          100% { box-shadow: 0 0 0 0 rgba(161, 134, 80, 0); }
        }
        .fab-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 9999;
          pointer-events: none; /* Let clicks pass through container */
        }
        .fab-button {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0D3E26 0%, #155233 100%);
          border: 2px solid rgba(161, 134, 80, 0.6);
          color: #E5D6B6;
          text-decoration: none;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        .fab-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #8A7040, #E5D6B6, #A18650);
          opacity: 0;
          transition: opacity 300ms ease;
          z-index: 1;
        }
        .fab-button:hover::before {
          opacity: 1;
        }
        .fab-icon {
          position: relative;
          z-index: 2;
          width: 24px;
          height: 24px;
          transition: transform 300ms ease, color 300ms ease;
        }
        .fab-button:hover .fab-icon {
          transform: scale(1.15);
          color: #111; /* Dark icon on gold background */
        }
        
        /* The playful cinematic animations */
        .fab-email {
          animation: float-btn-1 4s ease-in-out infinite, pulse-glow 3s infinite;
          animation-delay: 0s, 1s; /* stagger pulse */
        }
        .fab-phone {
          animation: float-btn-2 4.5s ease-in-out infinite, pulse-glow 3s infinite;
          animation-delay: 0.5s, 0s;
        }

        .fab-button:hover {
          transform: scale(1.1) translateY(-4px) !important;
          animation-play-state: paused;
          box-shadow: 0 12px 24px rgba(161, 134, 80, 0.4);
          border-color: #E5D6B6;
        }
      `}</style>

      <div className="fab-container">
        {/* Email Button */}
        <a href="mailto:info@taxnet.com.au" className="fab-button fab-email" aria-label="Email Us">
          <svg
            className="fab-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>

        {/* Phone Button */}
        <a href="tel:0390008820" className="fab-button fab-phone" aria-label="Call Us">
          <svg
            className="fab-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </>
  );
}
