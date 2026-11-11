"use client";

import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "where-are-you-based",
    question: "Where are you based?",
    answer:
      "Suite 6, 861 Doncaster Road, Doncaster East. We see clients in person, by phone or online.",
  },
  {
    id: "help-tax-and-loan",
    question: "Can you help with both my tax and my home loan?",
    answer:
      "Yes. That’s what we’re set up for, and it often saves you time and paperwork.",
  },
  {
    id: "switch-accountants",
    question: "How hard is it to switch accountants?",
    answer:
      "Not hard. We contact your previous accountant and arrange the handover for you.",
  },
  {
    id: "software-work-with",
    question: "Which software do you work with?",
    answer: "Xero, MYOB and QuickBooks.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              color: "#C5A869",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Got Questions?
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#111827",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Common questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            borderTop: "1px solid #E5E7EB",
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #E5E7EB",
                  transition: "background-color 200ms ease",
                  backgroundColor: isOpen ? "#FAFBF9" : "transparent",
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
                    padding: "1.4rem 0.5rem",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: isOpen ? "#8A7040" : "#111827",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      transition: "color 180ms ease",
                    }}
                  >
                    {item.question}
                  </span>

                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: isOpen ? "rgba(197, 168, 105, 0.15)" : "#F3F4F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isOpen ? "#8A7040" : "#6B7280",
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      flexShrink: 0,
                      transition: "all 200ms ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 0.5rem 1.4rem",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.98rem",
                        color: "#4B5563",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
