import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Taxnet Business Consultants Melbourne",
  description:
    "Terms of Service for Taxnet Business Consultants. Professional accounting, tax, and credit advisory services governed by Victorian and Australian law.",
  keywords: [
    "Taxnet terms of service",
    "Taxnet Business Consultants terms",
    "CPA terms Melbourne",
    "accounting terms Victoria",
    "credit assistance terms",
  ],
};

const TERMS_SECTIONS = [
  {
    number: "01",
    title: "About these terms",
    content: (
      <p style={{ margin: 0 }}>
        These terms apply to your use of this website and to services provided by The Trustee for Taxnet Unit Trust trading as Taxnet Business Consultants (ABN 40 610 387 881) (&ldquo;Taxnet&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). Each engagement is confirmed in a written engagement letter. If the engagement letter differs from these terms, the engagement letter applies.
      </p>
    ),
  },
  {
    number: "02",
    title: "Our services",
    content: (
      <ul style={{ margin: 0, paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        <li>
          <strong>Accounting and tax:</strong> provided by a registered tax agent with the Tax Practitioners Board and CPA Australia members in public practice.
        </li>
        <li>
          <strong>Mortgage broking and credit assistance:</strong> provided by Taxnet Business Consultants Pty Ltd (ACN 169 468 482 / Credit Representative Number 480328). Taxnet Business Consultants Pty Ltd has access to a panel of lenders through National Mortgage Brokers Pty Ltd (ACN 093 874 376 / Australian Credit Licence 391209), which is a fully-owned subsidiary of Liberty Financial Pty Ltd (ACN 077 248 983 / Australian Credit Licence 286596). Taxnet Business Consultants Pty Ltd has access to products including those from Liberty Financial. Before we help with a loan, we give you our Credit Guide, which explains our fees, the commissions we may receive and how to make a complaint.
        </li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Information on this website",
    content: (
      <p style={{ margin: 0 }}>
        The information on this website is general only. It doesn’t take your circumstances into account and isn’t advice. Tax and lending rules change, so please speak with us before acting on it.
      </p>
    ),
  },
  {
    number: "04",
    title: "Your responsibilities",
    content: (
      <p style={{ margin: 0 }}>
        You’re responsible for giving us complete and accurate information on time, and for keeping the records the law requires. We rely on the information you provide and don’t audit it unless engaged to. Please review documents carefully before you approve them for lodgement.
      </p>
    ),
  },
  {
    number: "05",
    title: "Fees",
    content: (
      <p style={{ margin: 0 }}>
        Fees are set out in your engagement letter or quote. Invoices are due within 14 days. We may pause work if fees remain unpaid. For mortgage broking, lenders usually pay us a commission. This is disclosed to you before you proceed.
      </p>
    ),
  },
  {
    number: "06",
    title: "Confidentiality and privacy",
    content: (
      <p style={{ margin: 0 }}>
        We keep your information confidential and handle it in line with our{" "}
        <Link href="/privacy-policy" style={{ color: "#A18650", fontWeight: 600, textDecoration: "underline" }}>
          Privacy Policy
        </Link>.
      </p>
    ),
  },
  {
    number: "07",
    title: "Electronic communication",
    content: (
      <p style={{ margin: 0 }}>
        You agree that we may send notices, documents and invoices electronically, and that electronic signatures may be used where the law allows.
      </p>
    ),
  },
  {
    number: "08",
    title: "Ending an engagement",
    content: (
      <p style={{ margin: 0 }}>
        Either of us may end an engagement by written notice. Fees for work already done remain payable. If you move to a new adviser, we’ll provide your records as required by our professional obligations.
      </p>
    ),
  },
  {
    number: "09",
    title: "Complaints",
    content: (
      <p style={{ margin: 0 }}>
        Please contact us first on{" "}
        <a href="tel:0398025800" style={{ color: "#A18650", fontWeight: 700, textDecoration: "none" }}>
          (03) 9802 5800
        </a>{" "}
        or{" "}
        <a href="mailto:info@taxnet.com.au" style={{ color: "#A18650", fontWeight: 700, textDecoration: "none" }}>
          info@taxnet.com.au
        </a>.{" "}
        If we can’t resolve your concern, you can contact the Tax Practitioners Board about tax agent services, or the Australian Financial Complaints Authority (AFCA) about credit services. AFCA details are in our Credit Guide.
      </p>
    ),
  },
  {
    number: "10",
    title: "Limitation of liability",
    content: (
      <p style={{ margin: 0 }}>
        Liability limited by a scheme approved under Professional Standards Legislation. This applies to our accounting and tax services. Nothing in these terms limits your rights under the Australian Consumer Law.
      </p>
    ),
  },
  {
    number: "11",
    title: "Governing law",
    content: (
      <p style={{ margin: 0 }}>
        These terms are governed by the laws of Victoria, Australia.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
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
              <span style={{ color: "#C5A869" }}>Terms of Service</span>
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
              Terms of Service
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
              These terms apply to your use of this website and to services provided by The Trustee for Taxnet Unit Trust trading as Taxnet Business Consultants (ABN 40 610 387 881).
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
                <strong style={{ color: "#C5A869" }}>Accounting &amp; Tax:</strong> Registered Tax Agent &amp; CPA Australia Public Practice
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Credit Services:</strong> Credit Representative No. 480328 (ACL 391209)
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Governing Law:</strong> Victoria, Australia
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
              {TERMS_SECTIONS.map((sec) => (
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

            {/* Direct Consultation Link Card */}
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
                  Questions Regarding Your Engagement?
                </h3>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.6 }}>
                  Our team is readily accessible to assist with engagement details, invoicing queries, or credit guide requests.
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
                Contact Our Team →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
