"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedHeading from "./AnimatedHeading";

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "What Types Of Businesses Do You Work With?",
    answer:
      "We work with Australian businesses across trades, medical and dental practices, legal and professional services, hospitality, engineering, and expanding family enterprises. Whether you are an owner-operator, an expanding SME, or a multi-entity group, our solutions scale with you.",
  },
  {
    id: "faq-2",
    question: "Do You Offer Agreed Pricing?",
    answer:
      "Yes. We offer transparent, agreed pricing tailored to your business needs, entity structure, and transaction volume so you always have cost certainty without unexpected fees.",
  },
  {
    id: "faq-3",
    question: "Which Accounting Software Do You Use?",
    answer:
      "We are accredited Gold Champion Partners with Xero, and also fully support MYOB and QuickBooks Online. We handle complete historical ledger migrations, automate bank feeds, set up Single Touch Payroll (STP Phase 2), and integrate industry add-ons like Dext and Stripe.",
  },
  {
    id: "faq-4",
    question: "What Makes Taxnet Different From Other Accounting Firms?",
    answer:
      "Unlike traditional firms that only review your numbers once a year at tax time, Taxnet works proactively with you throughout the year. We combine experienced tax accountants, bookkeepers, and licensed mortgage brokers under one roof—ensuring your tax structuring, bookkeeping, and lending work in harmony.",
  },
  {
    id: "faq-5",
    question: "How Difficult Is It To Switch From Our Previous Accountant?",
    answer:
      "It is completely seamless and requires zero effort from your team. We manage the entire handover process: sending ethical clearance letters to your previous firm, securely transferring historical files and depreciation schedules, and conducting an initial tax review to check for missed deductions.",
  },
  {
    id: "faq-6",
    question: "What Are Your Office Opening Hours?",
    answer:
      "Our office is open Monday to Friday from 9:00am to 5:30pm (closed Saturday and Sunday). You can reach our team by phone, email, or schedule an in-person appointment at our Doncaster East office.",
  },
  {
    id: "faq-areas",
    question: "What Areas Do You Service?",
    answer:
      "Our office is located in Doncaster East. We service clients across Melbourne's eastern suburbs (including Doncaster, Doncaster East, Templestowe, Box Hill, Blackburn, and Manningham) as well as clients across Victoria and Australia via secure video and phone consultations.",
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
        paddingTop: "4rem",
        paddingBottom: "4.5rem",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* ── Section Header (No Badges) ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <AnimatedHeading>
            <h2
              style={{
                fontFamily: '"Monety", Georgia, serif',
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                color: "#1C2022",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                margin: "0 auto 0.6rem",
              }}
            >
              Frequently Asked <span style={{ color: "#C5A869" }}>Questions</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#5A6B62",
                maxWidth: "540px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Clear answers to common questions about our tax, bookkeeping, and
              commercial advisory services for Australian businesses.
            </p>
          </AnimatedHeading>
        </div>

        {/* ── FAQ Accordion List (Matching Reference Design) ── */}
        <div
          style={{
            borderTop: "1px solid #E5EAE7",
          }}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                style={{
                  borderBottom: "1px solid #E5EAE7",
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
                    padding: "1.35rem 0.5rem",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: isOpen ? "#C5A869" : "#1C2022",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      transition: "color 180ms ease",
                    }}
                  >
                    {item.question}
                  </span>

                  {/* Clean + / − Icon Toggle */}
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "rgba(197, 168, 105, 0.12)"
                        : "rgba(0, 0, 0, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 200ms ease",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: 1,
                        fontWeight: 400,
                        color: isOpen ? "#C5A869" : "#6B7C72",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 250ms ease, color 200ms ease",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 320ms cubic-bezier(0.4, 0, 0.2, 1), opacity 260ms ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 0.5rem 1.4rem 0.5rem",
                      color: "#4A5A50",
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Still have questions CTA ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            padding: "1.25rem",
            borderRadius: "14px",
            backgroundColor: "#F8FAF8",
            border: "1px solid #E5ECE7",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "#4A5A50",
              margin: 0,
            }}
          >
            Have a specific scenario or complex entity structure? &nbsp;
            <Link
              href="/contact"
              style={{
                color: "#C5A869",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Book a Consultation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
