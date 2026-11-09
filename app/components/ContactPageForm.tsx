"use client";

import React, { useState } from "react";

const MEETING_FORMATS = [
  { id: "in-person", label: "In-Person Doncaster East" },
  { id: "video", label: "Video Call (Zoom / Teams)" },
  { id: "phone", label: "Direct Phone Call" },
];

export default function ContactPageForm() {
  const [meetingFormat, setMeetingFormat] = useState<string>("In-Person Doncaster East");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          selectedService: "General Consultation & Advisory",
          clientType: "Client",
          meetingFormat,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send consultation inquiry via SMTP."
        );
      }

      setIsSuccess(true);
      setTimeout(() => {
        setSubmitted(true);
        setIsSuccess(false);
      }, 750);
    } catch (err: any) {
      console.error("Form Submission Error:", err);
      setErrorMessage(
        err.message ||
          "Could not send email directly. Please verify SMTP credentials in .env.local or reach us via WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        padding: "clamp(1.75rem, 3.5vw, 2.75rem)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)",
        border: "1px solid #E5ECE7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Top Accent Gradient Bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "linear-gradient(90deg, #0A0D0B 0%, #C5A869 50%, #0A0D0B 100%)",
        }}
      />

      {submitted ? (
        <div
          style={{
            textAlign: "center",
            padding: "2.5rem 1rem",
            animation: "fadeIn 300ms ease",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(161, 134, 80, 0.12)",
              border: "2px solid #C5A869",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem auto",
              color: "#A18650",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-monety), "Monety", serif',
              fontSize: "2rem",
              color: "#0A0D0B",
              marginBottom: "0.75rem",
              fontWeight: 400,
            }}
          >
            Consultation Request Received
          </h3>

          <p
            style={{
              fontSize: "0.98rem",
              color: "#4A5A50",
              lineHeight: 1.6,
              maxWidth: "480px",
              margin: "0 auto 1.75rem auto",
            }}
          >
            Thank you, <strong>{formData.name || "Client"}</strong>. Your consultation briefing has been securely dispatched directly to our senior advisory desk via Gmail SMTP. A partner will review your requirements and respond within 2 business hours.
          </p>

          <div
            style={{
              backgroundColor: "#F6F9F7",
              borderRadius: "14px",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
              border: "1px solid #E1EBE4",
              textAlign: "left",
              fontSize: "0.88rem",
              color: "#2C3E33",
            }}
          >
            <div style={{ marginBottom: "6px" }}>
              <span style={{ color: "#7B8E82", fontWeight: 600 }}>Meeting Preference:</span> <strong>{meetingFormat}</strong>
            </div>
            <div>
              <span style={{ color: "#7B8E82", fontWeight: 600 }}>Response Guarantee:</span> <strong>Within 2 business hours</strong>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a
              href={`https://wa.me/61420956761?text=${encodeURIComponent(
                `Hi Taxnet, I just submitted a consultation request. My name is ${formData.name || ""}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#25D366",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.95rem",
                padding: "12px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Fast-Track on WhatsApp Instant Chat
            </a>

            <button
              type="button"
              onClick={resetForm}
              style={{
                background: "none",
                border: "none",
                color: "#6B7C72",
                fontSize: "0.85rem",
                textDecoration: "underline",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#A18650",
                marginBottom: "0.5rem",
              }}
            >
              Partner Consultation Request
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-monety), "Monety", serif',
                fontSize: "clamp(1.75rem, 2.5vw, 2.3rem)",
                color: "#0A0D0B",
                fontWeight: 400,
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                margin: "0 0 0.5rem 0",
              }}
            >
              Book Your Complimentary Discovery
            </h3>

            <p
              style={{
                fontSize: "0.92rem",
                color: "#5A6B60",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Confidential, partner-level review of your entity structure, immediate tax opportunities, and lending options. Zero obligation.
            </p>
          </div>

          {/* Form Fields: Name & Email */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
              marginBottom: "1.2rem",
            }}
          >
            <div>
              <label
                htmlFor="cf-name"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "6px",
                }}
              >
                Full Name *
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                placeholder="e.g. David Mitchell"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #D1DCD5",
                  fontSize: "0.92rem",
                  color: "#1C2022",
                  outline: "none",
                  backgroundColor: "#FAFBF9",
                  transition: "border-color 180ms ease, box-shadow 180ms ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 13, 11, 0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCD5";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                htmlFor="cf-email"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "6px",
                }}
              >
                Business or Personal Email *
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                placeholder="david@enterprise.com.au"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #D1DCD5",
                  fontSize: "0.92rem",
                  color: "#1C2022",
                  outline: "none",
                  backgroundColor: "#FAFBF9",
                  transition: "border-color 180ms ease, box-shadow 180ms ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 13, 11, 0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCD5";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Form Fields: Phone & Business Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.2rem",
              marginBottom: "1.2rem",
            }}
          >
            <div>
              <label
                htmlFor="cf-phone"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "6px",
                }}
              >
                Contact Phone Number *
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                required
                placeholder="e.g. 0420 956 761 or (03) 9802 5800"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #D1DCD5",
                  fontSize: "0.92rem",
                  color: "#1C2022",
                  outline: "none",
                  backgroundColor: "#FAFBF9",
                  transition: "border-color 180ms ease, box-shadow 180ms ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 13, 11, 0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCD5";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            <div>
              <label
                htmlFor="cf-biz"
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "6px",
                }}
              >
                Business / Company Name (Optional)
              </label>
              <input
                id="cf-biz"
                name="businessName"
                type="text"
                placeholder="e.g. Mitchell Holdings Pty Ltd"
                value={formData.businessName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #D1DCD5",
                  fontSize: "0.92rem",
                  color: "#1C2022",
                  outline: "none",
                  backgroundColor: "#FAFBF9",
                  transition: "border-color 180ms ease, box-shadow 180ms ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0A0D0B";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 13, 11, 0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#D1DCD5";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>
          </div>

          {/* Meeting Format Radio Cards */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#0A0D0B",
                letterSpacing: "0.02em",
                marginBottom: "0.65rem",
                textTransform: "uppercase",
              }}
            >
              Preferred Meeting Format *
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "0.6rem",
              }}
            >
              {MEETING_FORMATS.map((fmt) => {
                const isSelected = meetingFormat === fmt.label;
                return (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setMeetingFormat(fmt.label)}
                    style={{
                      padding: "11px 14px",
                      borderRadius: "10px",
                      border: isSelected
                        ? "1.5px solid #0A0D0B"
                        : "1px solid #D9E4DD",
                      backgroundColor: isSelected ? "#0A0D0B" : "#FAFBF9",
                      color: isSelected ? "#FFFFFF" : "#1C2022",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.84rem",
                      fontWeight: isSelected ? 700 : 500,
                      transition: "all 150ms ease",
                      textAlign: "center",
                    }}
                  >
                    <span>{fmt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message / Objectives Field */}
          <div style={{ marginBottom: "1.75rem" }}>
            <label
              htmlFor="cf-message"
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#0A0D0B",
                marginBottom: "6px",
              }}
            >
              How can we best prepare for your session? (Optional)
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={3}
              placeholder="e.g. Looking to review current trust distribution before 30 June, reduce GST on upcoming transactions, and review borrowing power for a commercial property purchase..."
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1.5px solid #D1DCD5",
                fontSize: "0.9rem",
                color: "#1C2022",
                outline: "none",
                backgroundColor: "#FAFBF9",
                fontFamily: "inherit",
                resize: "vertical",
                lineHeight: 1.5,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#0A0D0B";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(10, 13, 11, 0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#D1DCD5";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Error Notice if SMTP Fails */}
          {errorMessage && (
            <div
              style={{
                marginBottom: "1.25rem",
                padding: "14px 18px",
                borderRadius: "10px",
                backgroundColor: "#FEF2F2",
                border: "1px solid #FCA5A5",
                color: "#991B1B",
                fontSize: "0.88rem",
                lineHeight: 1.5,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Submission Note:</span>
              </div>
              <p style={{ margin: 0 }}>{errorMessage}</p>
            </div>
          )}

          <style>{`
            @keyframes tnBtnSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || isSuccess}
            style={{
              width: "100%",
              backgroundColor: isSuccess ? "#C5A869" : loading ? "#141815" : "#0A0D0B",
              color: isSuccess ? "#0A0D0B" : "#FFFFFF",
              border: loading
                ? "1.5px solid #C5A869"
                : isSuccess
                ? "1.5px solid #C5A869"
                : "1px solid rgba(197, 168, 105, 0.45)",
              borderRadius: "12px",
              padding: "16px 24px",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.02em",
              cursor: loading || isSuccess ? "default" : "pointer",
              boxShadow: loading
                ? "0 0 18px rgba(197, 168, 105, 0.25)"
                : "0 8px 24px rgba(10, 13, 11, 0.25)",
              transition: "all 200ms ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              if (!loading && !isSuccess) {
                e.currentTarget.style.backgroundColor = "#222824";
                e.currentTarget.style.borderColor = "#C5A869";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(10, 13, 11, 0.35)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading && !isSuccess) {
                e.currentTarget.style.backgroundColor = "#0A0D0B";
                e.currentTarget.style.borderColor = "rgba(197, 168, 105, 0.45)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(10, 13, 11, 0.25)";
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
                <span>Book A Consultation</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </>
            )}
          </button>

          {/* Privacy Note */}
          <div
            style={{
              textAlign: "center",
              marginTop: "1.25rem",
              fontSize: "0.8rem",
              color: "#6B7C72",
            }}
          >
            Direct Senior Partner Review · Zero Obligation
          </div>
        </form>
      )}
    </div>
  );
}

