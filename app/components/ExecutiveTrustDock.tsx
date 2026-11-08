import React from "react";

export interface TrustMetric {
  value: string;
  label: string;
  tag?: string;
}

interface ExecutiveTrustDockProps {
  metrics: TrustMetric[];
}

export default function ExecutiveTrustDock({ metrics }: ExecutiveTrustDockProps) {
  return (
    <div
      style={{
        marginTop: "3rem",
        position: "relative",
        borderRadius: "18px",
        background: "linear-gradient(180deg, rgba(16, 42, 28, 0.72) 0%, rgba(6, 18, 11, 0.88) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderTop: "1.5px solid rgba(197, 168, 105, 0.5)",
        boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        padding: "1.75rem 2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "1.75rem",
          alignItems: "stretch",
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              paddingRight: i < metrics.length - 1 ? "1rem" : "0",
            }}
          >
            {/* Value in Gold Bold */}
            <div
              style={{
                fontSize: "clamp(1.5rem, 2.1vw, 2rem)",
                fontWeight: 700,
                color: "#C5A869",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: "0.35rem",
              }}
            >
              {m.value}
            </div>

            {/* Descriptive Label */}
            <div
              style={{
                fontSize: "0.82rem",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.45,
                fontWeight: 400,
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

