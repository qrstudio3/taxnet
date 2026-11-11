"use client";

import React, { useState } from "react";

interface BookkeepingContactProps {
  title?: string;
  subtitle?: string;
  serviceName?: string;
  submitButtonText?: string;
  darkTheme?: boolean;
  hideSoftwareField?: boolean;
}

export default function BookkeepingContact({
  title = "Ready to Put Your Books on Autopilot?",
  subtitle = "Book a confidential 15-minute discovery consultation with our Melbourne CPA team. We'll assess your current ledger, eliminate bottlenecks, and tailor a flat-fee bookkeeping plan.",
  serviceName = "Small Business Bookkeeping",
  submitButtonText,
  darkTheme = false,
}: BookkeepingContactProps) {
  const isMortgage = /mortgage|loan|finance|buyer|refinanc/i.test(serviceName);
  const isBookkeeping = /bookkeeping|payroll|reconciliation|payable|receivable|invoice|invoicing|budget|cash flow/i.test(serviceName);
  const isTaxOrAccounting = !isBookkeeping && !isMortgage;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
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
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          selectedService: serviceName,
          source: `Service Page (${serviceName})`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry via SMTP.");
      }

      // Show submitted confirmation on the button, then transition to thank you screen
      setIsSuccess(true);
      setTimeout(() => {
        setSubmitted(true);
        setIsSuccess(false);
      }, 750);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const e = err as { message?: string };
      setErrorMessage(
        e?.message || "Unable to send message directly via SMTP. Please try again or reach us via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    isMortgage
      ? `Hi Taxnet, I'm looking for advice regarding ${serviceName}. I'd like to book a consultation with an accredited mortgage broker.`
      : `Hi Taxnet, I'm interested in your ${serviceName} services for my business. I'd like to book a consultation.`
  );

  const labelColor = "#0A0D0B";
  const inputBg = "#FAFBF9";
  const inputBorder = "1px solid #D1DCD5";
  const inputTextColor = "#1C2022";
  const cardBg = "#FFFFFF";
  const cardBorder = "1px solid rgba(161, 134, 80, 0.28)";
  const cardText = "#1C2022";
  const titleColor = "#0A0D0B";
  const submitBg = "#0A0D0B";
  const submitText = "#FFFFFF";
  const submitHoverBg = "#222824";

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0A0D0B",
        color: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 168, 105, 0.28)",
      }}
    >
      <style>{`
        @keyframes tnBtnSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(161, 134, 80, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197, 168, 105, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
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
          {/* ── Left Column: Sales Copy & Fast Action Channels ── */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.1rem, 3.8vw, 3rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                margin: "0 0 1.25rem 0",
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.72)",
                lineHeight: 1.65,
                marginBottom: "2.25rem",
                maxWidth: "520px",
              }}
            >
              {subtitle}
            </p>

            {/* Direct Instant Channels: WhatsApp & Phone & Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/61420956761?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.95rem 1.4rem",
                  borderRadius: "10px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  color: "#0A0D0B",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                  transition: "all 180ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 22px rgba(0, 0, 0, 0.14)";
                  e.currentTarget.style.borderColor = "#C5A869";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }} aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#0A0D0B" }}>Chat with us</div>
                    <div style={{ fontSize: "0.78rem", color: "#5C6B63" }}>Instant reply · Melbourne Advisory Desk</div>
                  </div>
                </div>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0A0D0B" }}>→</span>
              </a>

              {/* Direct Phone */}
              <a
                href="tel:0398025800"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.95rem 1.25rem",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
                  e.currentTarget.style.borderColor = "#A18650";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(161, 134, 80, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E5D6B6",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>(03) 9802 5800</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.65)" }}>Melbourne Office Phone</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#A18650", fontWeight: 600 }}>Call Direct →</span>
              </a>

              {/* Direct Email */}
              <a
                href="mailto:info@taxnet.com.au"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.95rem 1.25rem",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
                  e.currentTarget.style.borderColor = "#A18650";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.16)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(161, 134, 80, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E5D6B6",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>info@taxnet.com.au</div>
                    <div style={{ fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.65)" }}>Send Documents & Ledger Inquiries</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#A18650", fontWeight: 600 }}>Email Us →</span>
              </a>
            </div>
          </div>

          {/* ── Right Column: Consultation Booking Card ── */}
          <div
            style={{
              backgroundColor: cardBg,
              color: cardText,
              borderRadius: "20px",
              padding: "2.25rem 2rem",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
              border: cardBorder,
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(197, 168, 105, 0.16)",
                    color: "#C5A869",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    border: "1.5px solid rgba(197, 168, 105, 0.35)",
                  }}
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div style={{ color: "#C5A869", fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Request Submitted Successfully
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "1.75rem",
                    color: "#0A0D0B",
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
                  Your inquiry for <strong>{serviceName}</strong> has been received. One of our
                  {isMortgage
                    ? " accredited FBAA mortgage brokers "
                    : " senior Melbourne CPAs "}
                  will review your {isMortgage ? "borrowing scenario" : "details"} and connect with you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: submitBg,
                    color: submitText,
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px 22px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.25rem" }}>
                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: titleColor,
                      marginBottom: "0.3rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isTaxOrAccounting
                      ? `Request a Free ${serviceName} Consultation`
                      : isMortgage
                      ? `Request a Free ${serviceName} Assessment`
                      : `Request a Free Bookkeeping Assessment`}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: darkTheme ? "#9CA3AF" : "#6B7C72", margin: 0 }}>
                    {isTaxOrAccounting
                      ? "100% confidential · Direct CPA Partner Review · Upfront Fixed Proposal"
                      : isMortgage
                      ? "100% complimentary · Accredited FBAA broker review · a wide range of lenders"
                      : "100% confidential · Direct CPA review · Flat monthly fee quote"}
                  </p>
                </div>

                {/* Name & Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label
                      htmlFor="bk-name"
                      style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: labelColor, marginBottom: "4px" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="bk-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: inputBorder,
                        fontSize: "0.88rem",
                        color: inputTextColor,
                        outline: "none",
                        backgroundColor: inputBg,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bk-email"
                      style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: labelColor, marginBottom: "4px" }}
                    >
                      Business Email *
                    </label>
                    <input
                      id="bk-email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@business.com.au"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: inputBorder,
                        fontSize: "0.88rem",
                        color: inputTextColor,
                        outline: "none",
                        backgroundColor: inputBg,
                      }}
                    />
                  </div>
                </div>

                {/* Phone & Business Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label
                      htmlFor="bk-phone"
                      style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: labelColor, marginBottom: "4px" }}
                    >
                      Mobile / Phone *
                    </label>
                    <input
                      id="bk-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: inputBorder,
                        fontSize: "0.88rem",
                        color: inputTextColor,
                        outline: "none",
                        backgroundColor: inputBg,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bk-business"
                      style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: labelColor, marginBottom: "4px" }}
                    >
                      {isMortgage ? "Employer or Business (Optional)" : "Company / Trading Name"}
                    </label>
                    <input
                      id="bk-business"
                      name="businessName"
                      type="text"
                      placeholder={isMortgage ? "e.g. Self-Employed or Employer" : "e.g. Jenkins Hospitality"}
                      value={formData.businessName}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: inputBorder,
                        fontSize: "0.88rem",
                        color: inputTextColor,
                        outline: "none",
                        backgroundColor: inputBg,
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    htmlFor="bk-msg"
                    style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: labelColor, marginBottom: "4px" }}
                  >
                    {isTaxOrAccounting
                      ? "How can our Melbourne CPA team assist your business or tax?"
                      : isMortgage
                      ? "What are your borrowing or property purchasing goals?"
                      : "What is your primary bookkeeping or payroll challenge right now?"}
                  </label>
                  <textarea
                    id="bk-msg"
                    name="message"
                    rows={3}
                    placeholder={
                      isTaxOrAccounting
                        ? "e.g. Need pre-EOFY tax planning, business return lodgement, or company/trust structuring..."
                        : isMortgage
                        ? "e.g. Looking to purchase a home or investment property in Melbourne, refinance current loan, or calculate borrowing power..."
                        : "e.g. We are behind on bank reconciliations, payroll & STP compliance is getting messy, or we want our bookkeeping on fixed-fee autopilot..."
                    }
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: inputBorder,
                      fontSize: "0.88rem",
                      color: inputTextColor,
                      outline: "none",
                      backgroundColor: inputBg,
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

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || isSuccess}
                  style={{
                    width: "100%",
                    backgroundColor: isSuccess ? "#C5A869" : loading ? "#141815" : submitBg,
                    color: isSuccess ? "#0A0D0B" : submitText,
                    border: loading
                      ? "1.5px solid #C5A869"
                      : isSuccess
                      ? "1.5px solid #C5A869"
                      : "1px solid rgba(197, 168, 105, 0.45)",
                    borderRadius: "10px",
                    padding: "14px 20px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    cursor: loading || isSuccess ? "default" : "pointer",
                    boxShadow: loading
                      ? "0 0 16px rgba(197, 168, 105, 0.25)"
                      : "0 4px 14px rgba(10, 13, 11, 0.25)",
                    transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    pointerEvents: loading || isSuccess ? "none" : "auto",
                  }}
                  onMouseEnter={(e) => {
                    if (!loading && !isSuccess) {
                      e.currentTarget.style.backgroundColor = submitHoverBg;
                      e.currentTarget.style.borderColor = "#C5A869";
                      e.currentTarget.style.transform = "translateY(-3.5px) scale(1.025)";
                      e.currentTarget.style.boxShadow = "0 12px 28px rgba(10, 13, 11, 0.35), 0 0 0 1px rgba(197, 168, 105, 0.35)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading && !isSuccess) {
                      e.currentTarget.style.backgroundColor = submitBg;
                      e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.45)";
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 14px rgba(10, 13, 11, 0.25)";
                    }
                  }}
                  onMouseDown={(e) => {
                    if (!loading && !isSuccess) {
                      e.currentTarget.style.transform = "translateY(1.5px) scale(0.97)";
                    }
                  }}
                  onMouseUp={(e) => {
                    if (!loading && !isSuccess) {
                      e.currentTarget.style.transform = "translateY(-3.5px) scale(1.025)";
                    }
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        style={{ animation: "tnBtnSpin 0.85s linear infinite" }}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="#C5A869" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      <span>Submitting Consultation Request...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Submitted Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {submitButtonText ? submitButtonText : "Book A Consultation"}
                      </span>
                      <span className="btn-arrow" style={{ fontSize: "1.05rem", transition: "transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)", display: "inline-block" }}>→</span>
                    </>
                  )}
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
                  href={`https://wa.me/61420956761?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="playful-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    color: "#0A0D0B",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "13px 20px",
                    borderRadius: "10px",
                    border: "1.5px solid #D1DCD5",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                    transition: "all 340ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F9FAF9";
                    e.currentTarget.style.borderColor = "#25D366";
                    e.currentTarget.style.transform = "translateY(-3.5px) scale(1.025)";
                    e.currentTarget.style.boxShadow = "0 8px 22px rgba(37, 211, 102, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.borderColor = "#D1DCD5";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "translateY(1.5px) scale(0.97)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "translateY(-3.5px) scale(1.025)";
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

