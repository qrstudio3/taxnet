"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function MaintenanceAdminBanner() {
  const [isBypassActive, setIsBypassActive] = useState(false);

  useEffect(() => {
    // Check if the staff bypass cookie exists
    const t = setTimeout(() => {
      const hasCookie = document.cookie
        .split(";")
        .some((item) => item.trim().startsWith("taxnet_bypass_maintenance="));
      setIsBypassActive(hasCookie);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  if (!isBypassActive) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "14px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        backgroundColor: "#141815",
        color: "#FFFFFF",
        border: "1.5px solid #C5A869",
        borderRadius: "999px",
        padding: "6px 16px",
        fontSize: "0.78rem",
        fontWeight: 700,
        letterSpacing: "0.02em",
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 12px rgba(197, 168, 105, 0.3)",
        pointerEvents: "auto",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#C5A869",
          boxShadow: "0 0 8px #C5A869",
        }}
      />
      <span>Staff Preview Mode (Maintenance Active)</span>
      <Link
        href="/?bypass=exit"
        style={{
          backgroundColor: "rgba(197, 168, 105, 0.2)",
          color: "#DFC386",
          padding: "2px 8px",
          borderRadius: "999px",
          textDecoration: "none",
          fontSize: "0.74rem",
          fontWeight: 700,
          border: "1px solid rgba(197, 168, 105, 0.4)",
          transition: "all 150ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#C5A869";
          e.currentTarget.style.color = "#0A0D0B";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(197, 168, 105, 0.2)";
          e.currentTarget.style.color = "#DFC386";
        }}
      >
        Exit Preview ✕
      </Link>
    </div>
  );
}
