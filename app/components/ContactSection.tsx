"use client";

import React, { useState } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          selectedService: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry via SMTP.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message || "Unable to send message directly via SMTP. Please try again or reach us via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
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
                color: "#1C2022",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                margin: "0 0 1rem 0",
              }}
            >
              Let’s Elevate Your{" "}
              <span
                style={{
                  color: "#C5A869",
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
                    backgroundColor: "rgba(197, 168, 105, 0.1)",
                    border: "1px solid rgba(197, 168, 105, 0.25)",
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
                    stroke="#C5A869"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C5A869" }}>
                    Melbourne Head Office
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#3B4A41", marginTop: "2px" }}>
                    Suite 6 , 861 Doncaster Road, Doncaster East VIC 3109
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(197, 168, 105, 0.1)",
                    border: "1px solid rgba(197, 168, 105, 0.25)",
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
                    stroke="#C5A869"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C5A869" }}>
                    Direct Advisory Line
                  </div>
                  <a
                    href="tel:0398025800"
                    style={{
                      fontSize: "0.88rem",
                      color: "#3B4A41",
                      marginTop: "2px",
                      display: "inline-block",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    (03) 9802 5800
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(197, 168, 105, 0.1)",
                    border: "1px solid rgba(197, 168, 105, 0.25)",
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
                    stroke="#C5A869"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C5A869" }}>
                    Email Advisory
                  </div>
                  <a
                    href="mailto:info@taxnet.com.au"
                    style={{
                      fontSize: "0.88rem",
                      color: "#3B4A41",
                      marginTop: "2px",
                      display: "inline-block",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    info@taxnet.com.au
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(37, 211, 102, 0.12)",
                    border: "1px solid rgba(37, 211, 102, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#C5A869" }}>
                    Direct WhatsApp
                  </div>
                  <a
                    href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.88rem",
                      color: "#3B4A41",
                      marginTop: "2px",
                      display: "inline-block",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    +61 420 956 761 (Chat with us)
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
                    backgroundColor: "rgba(197, 168, 105, 0.15)",
                    color: "#C5A869",
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
                    color: "#1C2022",
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "320px",
                    margin: "0 auto",
                  }}
                >
                  <a
                    href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20just%20submitted%20a%20consultation%20request%20and%20would%20like%20to%20connect%20now."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "9px",
                      backgroundColor: "#FFFFFF",
                      color: "#1C2022",
                      border: "1.5px solid #25D366",
                      borderRadius: "8px",
                      padding: "11px 18px",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 2px 8px rgba(37, 211, 102, 0.15)",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Chat with us</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: "#0A0D0B",
                      color: "#FFFFFF",
                      border: "1px solid rgba(197, 168, 105, 0.4)",
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
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#1C2022",
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
                        color: "#1C2022",
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
                        color: "#1C2022",
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
                        color: "#1C2022",
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
                        color: "#1C2022",
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
                      color: "#1C2022",
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
                    <option value="Mortgage Broking & Home Loans">
                      Mortgage Broking & Home Loans
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
                    <option value="Cloud Accounting & Software Setup">
                      Cloud Accounting & Software Setup (Xero / MYOB)
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
                      color: "#1C2022",
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

                {/* Inline Error Message */}
                {errorMessage && (
                  <div
                    style={{
                      marginBottom: "1rem",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      backgroundColor: "#FEF2F2",
                      border: "1px solid #FCA5A5",
                      color: "#991B1B",
                      fontSize: "0.85rem",
                      lineHeight: 1.45,
                    }}
                  >
                    <strong>Submission Note:</strong> {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    border: "1px solid rgba(197, 168, 105, 0.45)",
                    borderRadius: "10px",
                    padding: "14px 20px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    cursor: loading ? "wait" : "pointer",
                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.25)",
                    transition: "transform 180ms ease, background-color 180ms ease, border-color 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.backgroundColor = "#161A18";
                      e.currentTarget.style.borderColor = "#C5A869";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0A0D0B";
                    e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.45)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {loading
                    ? "Dispatching Consultation Request..."
                    : "Request Consultation · Get Free Assessment →"}
                </button>

                {/* Divider */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    margin: "1.2rem 0",
                  }}
                >
                  <div style={{ flex: 1, height: "1px", backgroundColor: "#E5ECE7" }} />
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "#6B7C72",
                      letterSpacing: "0.04em",
                    }}
                  >
                    OR CONNECT INSTANTLY
                  </span>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "#E5ECE7" }} />
                </div>

                {/* Simple White Background WhatsApp Button */}
                <a
                  href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    color: "#1C2022",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "13px 20px",
                    borderRadius: "10px",
                    border: "1.5px solid #D1DCD5",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    transition: "all 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FAF9";
                    e.currentTarget.style.borderColor = "#25D366";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 14px rgba(37, 211, 102, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#D1DCD5";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Chat with us</span>
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
