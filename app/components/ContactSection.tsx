"use client";

import React, { useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "Corporate Tax & Structuring",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#F9FAF9",
        paddingTop: "4.5rem",
        paddingBottom: "5rem",
        position: "relative",
        borderTop: "1px solid #E6ECE8",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left Column: Contact Info (No Badges) ── */}
          <div>
          <AnimatedHeading>
            <h2
              style={{
                fontFamily: '"Monety", Georgia, serif',
                fontSize: "clamp(2rem, 3.6vw, 2.75rem)",
                fontWeight: 400,
                color: "#0F261B",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                margin: "0 0 1rem 0",
              }}
            >
              Let’s Elevate Your{" "}
              <span
                style={{
                  color: "#0D3E26",
                }}
              >
                Financial Position
              </span>
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#4A5A50",
                lineHeight: 1.6,
                marginBottom: "2.25rem",
                maxWidth: "520px",
              }}
            >
              Book a confidential discovery session with our Melbourne partner team.
              We’ll review your entity structure, uncover immediate tax deductions,
              and tailor a seamless bookkeeping roadmap for your business.
            </p>
          </AnimatedHeading>

            {/* Direct Contact Details with Theme Green Icons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.35rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(13, 62, 38, 0.08)",
                    border: "1px solid rgba(13, 62, 38, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0D3E26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                    Melbourne Head Office
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#3B4A41", marginTop: "2px" }}>
                    Level 28, 385 Bourke Street, Melbourne VIC 3000
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(13, 62, 38, 0.08)",
                    border: "1px solid rgba(13, 62, 38, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0D3E26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                    Direct Advisory Line
                  </div>
                  <a
                    href="tel:0390008820"
                    style={{
                      fontSize: "0.88rem",
                      color: "#3B4A41",
                      marginTop: "2px",
                      display: "inline-block",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    (03) 9000 8820
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(13, 62, 38, 0.08)",
                    border: "1px solid rgba(13, 62, 38, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0D3E26"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                    Email Advisory
                  </div>
                  <a
                    href="mailto:advisory@taxnet.com.au"
                    style={{
                      fontSize: "0.88rem",
                      color: "#3B4A41",
                      marginTop: "2px",
                      display: "inline-block",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    advisory@taxnet.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Form Card (Light Mode) ── */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "2.25rem 2rem",
              boxShadow: "0 10px 35px rgba(0, 0, 0, 0.06)",
              border: "1px solid #E5ECE7",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(13, 62, 38, 0.1)",
                    color: "#0D3E26",
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: '"Monety", Georgia, serif',
                    fontSize: "1.75rem",
                    color: "#0D3E26",
                    marginBottom: "0.5rem",
                  }}
                >
                  Thank You, {formData.name || "Client"}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#4A5A50",
                    lineHeight: 1.6,
                    maxWidth: "420px",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  Your discovery consultation request has been received. One of our
                  senior CPA partners will review your details and reach out within 2
                  business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "#0D3E26",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 22px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0F261B",
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Book Your Free Consultation
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#6B7C72",
                    marginBottom: "1.5rem",
                  }}
                >
                  Zero cost, zero obligation discovery with our senior advisors.
                </p>

                {/* Name & Email Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0D3E26",
                        marginBottom: "4px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #D1DCD5",
                        fontSize: "0.88rem",
                        color: "#1C2022",
                        outline: "none",
                        backgroundColor: "#FAFBF9",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0D3E26",
                        marginBottom: "4px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com.au"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #D1DCD5",
                        fontSize: "0.88rem",
                        color: "#1C2022",
                        outline: "none",
                        backgroundColor: "#FAFBF9",
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Business Name Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0D3E26",
                        marginBottom: "4px",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #D1DCD5",
                        fontSize: "0.88rem",
                        color: "#1C2022",
                        outline: "none",
                        backgroundColor: "#FAFBF9",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-business"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "#0D3E26",
                        marginBottom: "4px",
                      }}
                    >
                      Business / Entity Name
                    </label>
                    <input
                      id="contact-business"
                      name="businessName"
                      type="text"
                      placeholder="e.g. Smith Holdings Pty Ltd"
                      value={formData.businessName}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid #D1DCD5",
                        fontSize: "0.88rem",
                        color: "#1C2022",
                        outline: "none",
                        backgroundColor: "#FAFBF9",
                      }}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    htmlFor="contact-service"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#0D3E26",
                      marginBottom: "4px",
                    }}
                  >
                    Primary Service Needed
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #D1DCD5",
                      fontSize: "0.88rem",
                      color: "#1C2022",
                      outline: "none",
                      backgroundColor: "#FAFBF9",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Corporate Tax & Structuring">
                      Corporate Tax & Structuring
                    </option>
                    <option value="Full Scope Bookkeeping & BAS">
                      Full Scope Bookkeeping & BAS
                    </option>
                    <option value="Commercial & Equipment Financing">
                      Commercial & Equipment Financing
                    </option>
                    <option value="Virtual CFO & Advisory">
                      Virtual CFO & Strategic Advisory
                    </option>
                    <option value="High-Net-Worth / Individual Tax">
                      High-Net-Worth / Individual Tax
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#0D3E26",
                      marginBottom: "4px",
                    }}
                  >
                    How Can We Help? (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us briefly about your current situation, business goals, or challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #D1DCD5",
                      fontSize: "0.88rem",
                      color: "#1C2022",
                      outline: "none",
                      backgroundColor: "#FAFBF9",
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#0D3E26",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "10px",
                    padding: "14px 20px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(13, 62, 38, 0.25)",
                    transition: "transform 180ms ease, background-color 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#155233";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0D3E26";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Request Consultation · Get Free Assessment →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
