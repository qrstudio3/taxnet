"use client";

import React, { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface ExpandableFaqProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}

export default function ExpandableFaq({
  items,
  defaultOpenIndex = 0,
}: ExpandableFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              border: isOpen ? "1.5px solid #0A0D0B" : "1px solid #E5ECE7",
              boxShadow: isOpen
                ? "0 4px 18px rgba(0, 0, 0, 0.05)"
                : "0 2px 6px rgba(0, 0, 0, 0.02)",
              overflow: "hidden",
              transition: "border-color 200ms ease, box-shadow 200ms ease",
            }}
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.25rem 1.5rem",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.02rem",
                  fontWeight: 700,
                  color: isOpen ? "#0A0D0B" : "#1C2022",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.q}
              </span>

              {/* Minimal + / − Toggle Icon */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: isOpen
                    ? "rgba(197, 168, 105, 0.15)"
                    : "rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background-color 200ms ease",
                }}
              >
                <span
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1,
                    fontWeight: 500,
                    color: isOpen ? "#A18650" : "#6B7C72",
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "transform 250ms ease, color 200ms ease",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>
            </button>

            {/* Expandable Answer */}
            <div
              style={{
                maxHeight: isOpen ? "350px" : "0px",
                overflow: "hidden",
                opacity: isOpen ? 1 : 0,
                transition:
                  "max-height 320ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms ease",
              }}
            >
              <div
                style={{
                  padding: "0 1.5rem 1.35rem 1.5rem",
                  color: "#4A5A50",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                }}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

