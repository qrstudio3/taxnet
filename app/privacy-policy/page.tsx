import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Taxnet Business Consultants Melbourne",
  description:
    "Privacy Policy for Taxnet Business Consultants. How we handle personal and financial information in line with the Privacy Act 1988 (Cth), Australian Privacy Principles, and the Privacy (TFN) Rule 2015.",
  keywords: [
    "Taxnet privacy policy",
    "client confidentiality Melbourne",
    "Privacy Act 1988 compliance",
    "Tax File Number security",
    "Australian Privacy Principles accounting",
  ],
};

const PRIVACY_SECTIONS = [
  {
    number: "01",
    title: "Who we are",
    content: (
      <p style={{ margin: 0 }}>
        This policy applies to The Trustee for Taxnet Unit Trust trading as Taxnet Business Consultants (ABN 40 610 387 881), and to Taxnet Business Consultants Pty Ltd (ACN 169 468 482 / Credit Representative Number 480328) for mortgage broking (&ldquo;Taxnet&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). We handle personal information in line with the <em>Privacy Act 1988 (Cth)</em>, the Australian Privacy Principles and the <em>Privacy (Tax File Number) Rule 2015</em>.
      </p>
    ),
  },
  {
    number: "02",
    title: "What we collect",
    content: (
      <>
        <p style={{ margin: "0 0 0.85rem 0" }}>
          We collect information we need to provide our services, including:
        </p>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          <li>Name, contact details, date of birth and identification documents</li>
          <li>Tax file numbers, ABNs and other government identifiers</li>
          <li>Income, financial, business, payroll and tax records</li>
          <li>For loans: employment, assets, liabilities, expenses and credit history</li>
          <li>Website enquiries and any other information you choose to give us</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "How we collect it",
    content: (
      <p style={{ margin: 0 }}>
        Mostly directly from you, in person, by phone, email or our website. With your consent, we may also collect it from the ATO, ASIC, your previous accountant, lenders, credit reporting bodies, and others you authorise.
      </p>
    ),
  },
  {
    number: "04",
    title: "Why we collect it",
    content: (
      <p style={{ margin: 0 }}>
        To prepare and lodge returns and statements, provide accounting, bookkeeping and advisory services, help you apply for credit, verify your identity, meet our legal obligations, and keep in touch with you about your affairs. We don’t sell your personal information.
      </p>
    ),
  },
  {
    number: "05",
    title: "Who we share it with",
    content: (
      <p style={{ margin: 0 }}>
        Only as needed to provide our services, or where the law requires it. This may include the ATO, ASIC, lenders and our credit licensee National Mortgage Brokers Pty Ltd (Australian Credit Licence 391209), credit reporting bodies, your other advisers (with your consent), and service providers who help us run our practice, such as our email, cloud accounting and document storage providers. We only use or disclose your tax file number for purposes allowed by law.
      </p>
    ),
  },
  {
    number: "06",
    title: "Overseas storage",
    content: (
      <p style={{ margin: 0 }}>
        Some of our service providers may store or process information outside Australia, including in [countries to be confirmed, e.g. the United States]. We take reasonable steps to make sure they protect your information.
      </p>
    ),
  },
  {
    number: "07",
    title: "How we keep it secure",
    content: (
      <p style={{ margin: 0 }}>
        We take reasonable steps to protect your information from misuse, loss and unauthorised access, including secure systems, multi-factor authentication and restricted staff access. We keep records for as long as the law requires, then destroy or de-identify them securely.
      </p>
    ),
  },
  {
    number: "08",
    title: "Marketing",
    content: (
      <p style={{ margin: 0 }}>
        We may send you practice updates. You can opt out at any time by contacting us or using the unsubscribe link.
      </p>
    ),
  },
  {
    number: "09",
    title: "Our website",
    content: (
      <p style={{ margin: 0 }}>
        Our website may use cookies and basic analytics to understand how it’s used. Information you submit through our forms is used only to respond to your enquiry.
      </p>
    ),
  },
  {
    number: "10",
    title: "Access and correction",
    content: (
      <p style={{ margin: 0 }}>
        You can ask to see or correct the personal information we hold about you. Contact us and we’ll respond within 30 days.
      </p>
    ),
  },
  {
    number: "11",
    title: "Questions and complaints",
    content: (
      <p style={{ margin: 0 }}>
        Contact our Privacy Officer on{" "}
        <a href="tel:0398025800" style={{ color: "#A18650", fontWeight: 700, textDecoration: "none" }}>
          (03) 9802 5800
        </a>
        , at{" "}
        <a href="mailto:info@taxnet.com.au" style={{ color: "#A18650", fontWeight: 700, textDecoration: "none" }}>
          info@taxnet.com.au
        </a>
        , or at{" "}
        <strong>Suite 6, 861 Doncaster Road, Doncaster East VIC 3109</strong>. We’ll respond within 30 days. If you’re not satisfied, you can contact the Office of the Australian Information Commissioner at{" "}
        <a
          href="https://www.oaic.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#A18650", textDecoration: "underline" }}
        >
          www.oaic.gov.au
        </a>{" "}
        or{" "}
        <a href="tel:1300363992" style={{ color: "#A18650", textDecoration: "underline" }}>
          1300 363 992
        </a>
        . Complaints about credit services can also go to AFCA, as set out in our Credit Guide.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9FAF9", color: "#1C2022" }}>
        {/* ── Header Hero Banner ── */}
        <section
          style={{
            backgroundColor: "#0A0D0B",
            background: "linear-gradient(180deg, #070908 0%, #0E1410 100%)",
            color: "#FFFFFF",
            paddingTop: "140px",
            paddingBottom: "4.5rem",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(197, 168, 105, 0.25)",
          }}
        >
          {/* Ambient Golden Glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 105, 0.15) 0%, transparent 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="container"
            style={{
              maxWidth: "1080px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Breadcrumb Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.82rem",
                color: "rgba(229, 214, 182, 0.75)",
                marginBottom: "1.25rem",
              }}
            >
              <Link href="/" style={{ color: "rgba(229, 214, 182, 0.75)", textDecoration: "none" }}>
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "#C5A869" }}>Privacy Policy</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: "#FFFFFF",
                margin: "0 0 0.5rem 0",
                letterSpacing: "-0.018em",
              }}
            >
              Privacy Policy
            </h1>

            <div
              style={{
                fontSize: "0.88rem",
                color: "#C5A869",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Last updated: November 2026
            </div>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                lineHeight: 1.65,
                color: "rgba(240, 235, 222, 0.9)",
                maxWidth: "760px",
                margin: "0 0 2rem 0",
              }}
            >
              This policy outlines how Taxnet Business Consultants and Taxnet Business Consultants Pty Ltd handle personal information in line with the Privacy Act 1988 (Cth), the Australian Privacy Principles and the Privacy (Tax File Number) Rule 2015.
            </p>

            {/* Regulatory Governance Strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                fontSize: "0.82rem",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              <div>
                <strong style={{ color: "#C5A869" }}>Statutory Framework:</strong> Privacy Act 1988 (Cth) &amp; APPs
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>TFN Protection:</strong> Privacy (TFN) Rule 2015
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Office:</strong> Suite 6, 861 Doncaster Road, Doncaster East VIC 3109
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Legal Clauses Content Section ── */}
        <section
          style={{
            paddingTop: "3.5rem",
            paddingBottom: "5.5rem",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: "1080px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "1.75rem",
              }}
            >
              {PRIVACY_SECTIONS.map((sec) => (
                <article
                  key={sec.number}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "clamp(1.5rem, 3vw, 2.25rem)",
                    border: "1px solid #E2ECE5",
                    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.85rem" }}>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        color: "#C5A869",
                        backgroundColor: "#0A0D0B",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {sec.number}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                        fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)",
                        fontWeight: 400,
                        color: "#0A0D0B",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {sec.title}
                    </h2>
                  </div>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "#38473E",
                    }}
                  >
                    {sec.content}
                  </div>
                </article>
              ))}
            </div>

            {/* Questions Card */}
            <div
              style={{
                marginTop: "3.5rem",
                padding: "2.5rem",
                borderRadius: "20px",
                backgroundColor: "#0A0D0B",
                color: "#FFFFFF",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
                border: "1px solid rgba(197, 168, 105, 0.3)",
              }}
            >
              <div style={{ maxWidth: "600px" }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    color: "#FFFFFF",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  Questions About Your Privacy or Information?
                </h3>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.6 }}>
                  Our team is committed to transparency. Contact our Privacy Officer for any questions regarding your personal information, records, or privacy rights.
                </p>
              </div>

              <Link
                href="/contact"
                style={{
                  backgroundColor: "#C5A869",
                  color: "#0A0D0B",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  padding: "14px 26px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(197, 168, 105, 0.35)",
                  transition: "background-color 180ms ease, transform 180ms ease",
                }}
              >
                Contact Privacy Officer →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
