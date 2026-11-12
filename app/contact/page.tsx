import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactHero from "@/app/components/ContactHero";
import ContactPageForm from "@/app/components/ContactPageForm";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";
import ExpandableFaq from "@/app/components/ExpandableFaq";

export const metadata: Metadata = {
  title: "Contact Taxnet | CPA Accountants & Mortgage Brokers Melbourne",
  description:
    "Schedule a confidential consultation with Taxnet's certified CPA accountants, registered tax agents, and accredited mortgage brokers. Suite 6, 861 Doncaster Road, Doncaster East VIC 3109 or video consultation Australia-wide.",
  keywords: [
    "contact Taxnet",
    "tax accountant Doncaster East",
    "CPA accountant Melbourne contact",
    "mortgage broker Doncaster East contact",
    "Taxnet phone number",
    "Taxnet office address Melbourne",
    "book accountant consultation Melbourne",
  ],
};

const FAQS = [
  {
    q: "Is there any cost for our initial discovery consultation?",
    a: "No. Your initial discovery consultation is 100% complimentary ($0 cost) with zero obligation. We evaluate your accounting, tax, or mortgage scenario and provide transparent upfront options.",
  },
  {
    q: "Do I need to visit your Doncaster East office in person?",
    a: "Not necessarily. While we welcome clients to our Doncaster East suites (with free on-site parking), we also service clients Australia-wide via secure video consultations and digital document signing.",
  },
  {
    q: "Can Taxnet coordinate my business tax and my mortgage together?",
    a: "Yes. As qualified CPA accountants and accredited mortgage brokers under one roof, we structure your financials so business tax deductions don't inadvertently limit your home loan borrowing capacity.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Complimentary Discovery",
    desc: "A confidential 15–30 minute session to review your business, tax position, or borrowing goals.",
  },
  {
    num: "02",
    title: "Clear Plan & Advice on Fees",
    desc: "We deliver a transparent, tailored roadmap with clear advice on fees before we start and ongoing communication.",
  },
  {
    num: "03",
    title: "Senior Advisor Execution",
    desc: "Our team of senior advisors and brokers handle complete file setup, ATO lodgements, and lender submissions.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION (CENTERED, MINIMAL, TITLE + BUTTON) ─── */}
        <ContactHero />

        {/* ─── TWO-COLUMN CONSULTATION & DIRECT CHANNELS ─── */}
        <section
          id="booking"
          style={{
            paddingTop: "4.5rem",
            paddingBottom: "5rem",
            position: "relative",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "3.5rem",
                alignItems: "start",
              }}
            >
              {/* ── LEFT COLUMN: DIRECT CHANNELS & OFFICE LOCATION ── */}
              <div>
                <div style={{ marginBottom: "2rem" }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                      fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                      fontWeight: 400,
                      color: "#0A0D0B",
                      lineHeight: 1.18,
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    CONTACT US
                  </h2>
                </div>

                {/* 3 High-Priority Interactive Channel Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                  {/* WhatsApp Direct Card */}
                  <a
                    href="https://wa.me/61420956761?text=Hi%20Taxnet%2C%20I%20would%20like%20to%20speak%20with%20an%20advisor."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "16px",
                      backgroundColor: "#FFFFFF",
                      border: "1.5px solid #E2ECE5",
                      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                      textDecoration: "none",
                      color: "#1C2022",
                      transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(37, 211, 102, 0.12)",
                        border: "1px solid rgba(37, 211, 102, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#A18650", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "2px" }}>
                        (Direct WhatsApp)
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                        0420 956 761
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#6A7B71", marginTop: "2px" }}>
                        Instant chat with our team
                      </div>
                    </div>
                    <span style={{ color: "#0A0D0B", fontSize: "1.2rem", fontWeight: 700 }}>→</span>
                  </a>

                  {/* Direct Phone Card */}
                  <a
                    href="tel:0398025800"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "16px",
                      backgroundColor: "#FFFFFF",
                      border: "1.5px solid #E2ECE5",
                      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                      textDecoration: "none",
                      color: "#1C2022",
                      transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(161, 134, 80, 0.12)",
                        border: "1px solid rgba(161, 134, 80, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A18650" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#A18650", textTransform: "uppercase", marginBottom: "2px" }}>
                        Melbourne Office
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                        (03) 9802 5800
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#6A7B71", marginTop: "2px" }}>
                        Monday to Friday: 9:00am – 5:30pm
                      </div>
                    </div>
                    <span style={{ color: "#0A0D0B", fontSize: "1.2rem", fontWeight: 700 }}>→</span>
                  </a>

                  {/* Email Advisory Card */}
                  <a
                    href="mailto:info@taxnet.com.au"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1.25rem 1.5rem",
                      borderRadius: "16px",
                      backgroundColor: "#FFFFFF",
                      border: "1.5px solid #E2ECE5",
                      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                      textDecoration: "none",
                      color: "#1C2022",
                      transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        backgroundColor: "rgba(161, 134, 80, 0.12)",
                        border: "1px solid rgba(161, 134, 80, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A18650" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#A18650", textTransform: "uppercase", marginBottom: "2px" }}>
                        Email Enquiries
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B" }}>
                        info@taxnet.com.au
                      </div>
                    </div>
                    <span style={{ color: "#0A0D0B", fontSize: "1.2rem", fontWeight: 700 }}>→</span>
                  </a>
                </div>

                {/* Head Office Address & Interactive Google Maps Card */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "1.75rem",
                    border: "1px solid #E2ECE5",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(161, 134, 80, 0.12)",
                        color: "#A18650",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#A18650", textTransform: "uppercase" }}>
                        Office Location
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0A0D0B", marginTop: "2px" }}>
                        Suite 6, 861 Doncaster Road
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "#54655B" }}>
                        Doncaster East VIC 3109, Australia
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#7A8C82", marginTop: "4px" }}>
                        Free on-site client parking
                      </div>
                    </div>
                  </div>

                  {/* Embedded Stylized Map Iframe */}
                  <div
                    style={{
                      borderRadius: "14px",
                      overflow: "hidden",
                      border: "1px solid #D5E2D9",
                      height: "200px",
                      position: "relative",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <iframe
                      title="Taxnet Doncaster East Office Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://maps.google.com/maps?q=Suite+6+861+Doncaster+Road+Doncaster+East+VIC+3109&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>

                  {/* Opening Hours */}
                  <div
                    style={{
                      backgroundColor: "#F7F9F7",
                      borderRadius: "12px",
                      padding: "0.85rem 1.25rem",
                      fontSize: "0.84rem",
                      marginBottom: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "#25382E" }}>Monday to Friday:</span>
                    <span style={{ fontWeight: 700, color: "#0A0D0B" }}>9:00am – 5:30pm</span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Suite+6+861+Doncaster+Road+Doncaster+East+VIC+3109"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      backgroundColor: "#0A0D0B",
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background-color 180ms ease",
                    }}
                  >
                    <span>Open Directions in Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* ── RIGHT COLUMN: INTERACTIVE CONSULTATION FORM ── */}
              <div>
                <ContactPageForm />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3-STEP CONSULTATION ROADMAP (CLEAN & CONCISE) ─── */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            paddingTop: "4rem",
            paddingBottom: "4.5rem",
            borderTop: "1px solid #E5ECE7",
            borderBottom: "1px solid #E5ECE7",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem auto" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#A18650",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Transparent Advisory Process
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#0A0D0B",
                  lineHeight: 1.2,
                  margin: "0 0 0.6rem 0",
                }}
              >
                What Happens When You Reach Out?
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#55675D", lineHeight: 1.6, margin: 0 }}>
                From initial confidential discovery to final execution, our team ensures a seamless, structured experience.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {STEPS.map((step) => (
                <div
                  key={step.num}
                  style={{
                    backgroundColor: "#FAFBF9",
                    borderRadius: "16px",
                    padding: "1.75rem",
                    border: "1px solid #E2EDE6",
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-monety), "Playfair Display", serif',
                      fontSize: "2.25rem",
                      fontWeight: 400,
                      color: "#A18650",
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      marginBottom: "0.45rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#54655B",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONCISE FREQUENTLY ASKED QUESTIONS ─── */}
        <section
          style={{
            paddingTop: "4rem",
            paddingBottom: "4.5rem",
            backgroundColor: "#F9F9F6",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#A18650",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                Clear Answers
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(1.85rem, 3.2vw, 2.5rem)",
                  fontWeight: 400,
                  color: "#0A0D0B",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <ExpandableFaq items={FAQS} defaultOpenIndex={0} />
          </div>
        </section>

        {/* ─── FOOTER CTA BANNER (BLACK WITH GOLD ACCENTS) ─── */}
        <section
          style={{
            backgroundColor: "#0A0D0B",
            color: "#FFFFFF",
            padding: "4rem 1.5rem",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(197, 168, 105, 0.3)",
          }}
        >
          {/* Subtle gold ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "250px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 105, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="container"
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                marginBottom: "0.85rem",
                lineHeight: 1.18,
              }}
            >
              Need Immediate Guidance? Connect With Us Today.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.78)",
                maxWidth: "600px",
                margin: "0 auto 2rem auto",
                lineHeight: 1.6,
              }}
            >
              Reach our senior Melbourne advisory desk directly for quick questions, lodgements, and borrowing reviews.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I would like to schedule a consultation with your team."
                style={{
                  fontSize: "0.95rem",
                  padding: "0.9rem 1.75rem",
                }}
              />

              <a
                href="tel:0398025800"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(197, 168, 105, 0.6)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "#E5D6B6",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 180ms ease",
                }}
              >
                <span>Call (03) 9802 5800</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
