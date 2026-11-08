import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | TaxNet CPA Accountants & Mortgage Advisory Melbourne",
  description:
    "TaxNet's Privacy Policy outlining our compliance with the Privacy Act 1988 (Cth), Australian Privacy Principles (APPs), Tax Agent Services Act 2009, and CPA Australia fiduciary codes.",
  keywords: [
    "TaxNet privacy policy",
    "CPA client confidentiality Melbourne",
    "Privacy Act 1988 compliance",
    "Tax File Number security",
    "Australian Privacy Principles accounting",
  ],
};

const SECTIONS = [
  {
    id: "overview",
    number: "01",
    title: "Commitment to Fiduciary Confidentiality",
    content: (
      <>
        <p>
          TaxNet Pty Ltd (&ldquo;TaxNet&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating under
          ABN 40 610 387 881, is committed to safeguarding the confidentiality, integrity, and privacy of all personal,
          commercial, and financial information entrusted to us by our clients and website visitors.
        </p>
        <p>
          As a registered <strong>CPA Australia Public Practice</strong>, an authorised <strong>Tax Practitioners Board (TPB)</strong> registered
          tax agent, and an accredited member firm of the <strong>Mortgage &amp; Finance Association of Australia (MFAA)</strong>,
          our handling of your information is strictly governed by:
        </p>
        <ul>
          <li>The <em>Privacy Act 1988 (Cth)</em> and the Australian Privacy Principles (APPs);</li>
          <li>The <em>Privacy (Tax File Number) Rule 2015</em> issued under the <em>Privacy Act 1988</em>;</li>
          <li>The <em>Tax Agent Services Act 2009 (TASA)</em> Code of Professional Conduct;</li>
          <li>The <em>National Consumer Credit Protection Act 2009 (Cth)</em> (NCCP Act); and</li>
          <li>APES 110 <em>Code of Ethics for Professional Accountants</em> issued by the Accounting Professional &amp; Ethical Standards Board.</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-collected",
    number: "02",
    title: "Personal & Financial Information We Collect",
    content: (
      <>
        <p>
          To provide senior-level taxation strategy, accounting lodgements, and credit assistance, TaxNet collects various
          categories of information necessary to fulfill our professional engagements:
        </p>
        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          <div style={{ padding: "1.25rem", borderRadius: "12px", backgroundColor: "#F7FAF8", border: "1px solid #E1ECE4" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0D3E26", fontSize: "0.98rem" }}>A. Identity &amp; Contact Particulars</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#4A5A50" }}>
              Full legal names, residential addresses, registered business addresses, dates of birth, passport and driver licence details,
              Medicare details, email addresses, and contact phone numbers required for client identification and verification under the
              <em>Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act)</em>.
            </p>
          </div>

          <div style={{ padding: "1.25rem", borderRadius: "12px", backgroundColor: "#F7FAF8", border: "1px solid #E1ECE4" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0D3E26", fontSize: "0.98rem" }}>B. Taxation &amp; Regulatory Identifiers</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#4A5A50" }}>
              Tax File Numbers (TFNs), Australian Business Numbers (ABNs), Australian Company Numbers (ACNs), Director Identification Numbers (DINs),
              and Australian Taxation Office (ATO) historical portal lodgement records.
            </p>
          </div>

          <div style={{ padding: "1.25rem", borderRadius: "12px", backgroundColor: "#F7FAF8", border: "1px solid #E1ECE4" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0D3E26", fontSize: "0.98rem" }}>C. Financial Statements, Ledgers &amp; Payroll Records</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#4A5A50" }}>
              Bank account statements, balance sheets, profit &amp; loss statements, general ledgers from cloud software (Xero, MYOB, QuickBooks),
              invoices, payroll records, Single Touch Payroll (STP) files, superannuation contribution records, asset registers, and depreciation schedules.
            </p>
          </div>

          <div style={{ padding: "1.25rem", borderRadius: "12px", backgroundColor: "#F7FAF8", border: "1px solid #E1ECE4" }}>
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#0D3E26", fontSize: "0.98rem" }}>D. Mortgage, Lending &amp; Credit Information</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#4A5A50" }}>
              Existing mortgage balances, credit card limits, personal loan contracts, living expense estimates (HEM benchmarks), real estate
              valuations, purchase contracts of sale, and personal asset-and-liability summaries required for lender serviceability assessments.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "collection-methods",
    number: "03",
    title: "How We Collect Your Information",
    content: (
      <>
        <p>
          We collect personal and financial information through transparent, lawful means:
        </p>
        <ul>
          <li><strong>Direct Client Communication:</strong> During in-person discovery meetings at our Doncaster East suites, secure video conferences, telephone calls, and structured digital questionnaires;</li>
          <li><strong>Secure Website Submissions:</strong> When you complete an inquiry or booking form on <code>taxnet.com.au</code>;</li>
          <li><strong>Client Portal &amp; Cloud Integrations:</strong> Via direct invitation into cloud accounting platforms (Xero, MYOB, QuickBooks Online) or encrypted document transmission;</li>
          <li><strong>Government Agencies &amp; Regulators:</strong> Directly from the Australian Taxation Office (ATO) via our registered Tax Agent Portal, and the Australian Securities &amp; Investments Commission (ASIC);</li>
          <li><strong>Previous Professional Advisers:</strong> From your predecessor accountant upon execution of formal Ethical Clearance documentation pursuant to CPA Australia professional standards; and</li>
          <li><strong>Credit Reporting Bodies &amp; Financial Institutions:</strong> With your express written consent when applying for residential mortgages or commercial credit facilities.</li>
        </ul>
      </>
    ),
  },
  {
    id: "use-and-disclosure",
    number: "04",
    title: "Purpose of Collection, Use & Disclosure",
    content: (
      <>
        <p>
          TaxNet collects and uses your information strictly for legitimate commercial and fiduciary advisory objectives:
        </p>
        <ul>
          <li>Preparing and lodging annual Income Tax Returns, Business Activity Statements (BAS), Fringe Benefits Tax (FBT) returns, and SMSF compliance accounts with the ATO;</li>
          <li>Delivering proactive business structuring, cashflow advisory, Division 7A loan planning, and corporate secretarial management with ASIC;</li>
          <li>Structuring, assessing, and submitting residential mortgage, refinancing, and commercial equipment finance applications to Australian banks and accredited non-bank lenders;</li>
          <li>Communicating critical statutory deadlines, regulatory tax reforms, and practice updates relevant to your enterprise; and</li>
          <li>Complying with statutory reporting requirements under the <em>Corporations Act 2001</em>, <em>TASA 2009</em>, and <em>AML/CTF Act 2006</em>.</li>
        </ul>
        <div style={{ padding: "1rem 1.25rem", borderRadius: "10px", backgroundColor: "#FEF9EE", border: "1px solid #EBD5A0", marginTop: "1rem" }}>
          <strong style={{ color: "#7B5B1E", display: "block", marginBottom: "0.25rem" }}>Our Strict Non-Monetization Pledge:</strong>
          <span style={{ fontSize: "0.92rem", color: "#5F4517" }}>
            TaxNet will <strong>never</strong> sell, rent, license, or disclose your personal contact information or financial data to third-party marketing companies, advertisers, or lead brokers. All disclosures occur solely within direct fiduciary lines authorized by you.
          </span>
        </div>
      </>
    ),
  },
  {
    id: "tfn-protection",
    number: "05",
    title: "Tax File Number (TFN) Security",
    content: (
      <>
        <p>
          Tax File Numbers are subject to heightened legislative protection under the <em>Privacy (Tax File Number) Rule 2015</em>.
          TaxNet strictly adheres to all statutory restrictions:
        </p>
        <ul>
          <li>Your TFN is only requested and used for authorised taxation and superannuation compliance purposes;</li>
          <li>We will never disclose your TFN to third parties (including lenders or commercial brokers) without explicit legislative sanction or distinct written authority;</li>
          <li>TFNs stored within our secure cloud databases are encrypted at rest; and</li>
          <li>When records reach the conclusion of statutory retention periods, TFNs are securely de-identified or destroyed in accordance with TPB guidance.</li>
        </ul>
      </>
    ),
  },
  {
    id: "storage-security",
    number: "06",
    title: "Data Storage, Sovereignty & Cybersecurity",
    content: (
      <>
        <p>
          TaxNet employs enterprise-grade cybersecurity measures engineered to protect sensitive client records against
          loss, unauthorized access, alteration, or interception:
        </p>
        <ul>
          <li><strong>Data Sovereignty:</strong> Primary cloud infrastructure and document repositories reside within certified Australian ISO 27001 data centers located in Melbourne and Sydney;</li>
          <li><strong>Transport &amp; At-Rest Encryption:</strong> All website interactions and API endpoints enforce TLS 1.3 encryption. Internal databases utilize AES-256 encryption;</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> All partner, staff, and external administrative access mandates hardware-backed or authenticator-based multi-factor authentication;</li>
          <li><strong>Certified Cloud Ecosystems:</strong> We partner exclusively with accredited cloud accounting platforms (Xero, MYOB, Intuit QuickBooks) adhering to SOC-2 Type II benchmark audits; and</li>
          <li><strong>Physical Suite Security:</strong> Our Doncaster East offices maintain biometric/code-controlled access, clean desk policies, and secure on-site document destruction bins.</li>
        </ul>
      </>
    ),
  },
  {
    id: "record-retention",
    number: "07",
    title: "Retention & Disposal of Financial Records",
    content: (
      <>
        <p>
          Under section 382-5 of Schedule 1 to the <em>Taxation Administration Act 1953 (Cth)</em> and associated legislation,
          taxpayers and registered tax agents must retain accounting records, receipts, and supporting tax working papers for a
          statutory minimum period of <strong>five (5) to seven (7) years</strong> from the date of assessment or transaction completion.
        </p>
        <p>
          Upon the expiration of statutory retention obligations and where records are no longer required for active professional
          representation, electronic records are permanently purged and physical documents are shredded by licensed confidential
          waste contractors.
        </p>
      </>
    ),
  },
  {
    id: "access-and-correction",
    number: "08",
    title: "Your Rights to Access & Correction",
    content: (
      <>
        <p>
          Under Australian Privacy Principles 12 and 13, you have the right to request access to any personal information TaxNet
          holds about you, and to request correction if you believe the information is inaccurate, out of date, or incomplete.
        </p>
        <p>
          To exercise your rights, please submit a written request to our Privacy Officer. We will respond within thirty (30) days.
          In certain circumstances where statutory exemptions apply (such as ongoing legal proceedings or client legal privilege),
          we will provide a written explanation detailing the statutory rationale.
        </p>
      </>
    ),
  },
  {
    id: "cookies-analytics",
    number: "09",
    title: "Website Cookies & Digital Analytics",
    content: (
      <>
        <p>
          When you browse <code>taxnet.com.au</code>, we may employ standard HTTP cookies and privacy-respecting analytics
          to measure aggregate website traffic, optimize page rendering speeds, and improve visitor usability.
        </p>
        <p>
          Cookies do not extract personal identifiers from your device. You may disable cookies in your browser settings at any time
          without losing access to essential website functionality.
        </p>
      </>
    ),
  },
  {
    id: "contact-privacy-officer",
    number: "10",
    title: "Privacy Officer Contact Details & Complaints",
    content: (
      <>
        <p>
          If you have any questions, concerns, or wish to lodge a formal complaint regarding TaxNet&rsquo;s handling of your
          personal information under the Australian Privacy Principles, please contact our appointed Privacy Officer:
        </p>
        <div style={{ padding: "1.5rem", borderRadius: "14px", backgroundColor: "#0D3E26", color: "#FFFFFF", marginTop: "1rem" }}>
          <div style={{ fontSize: "0.82rem", color: "#C5A869", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
            Appointed Privacy Officer · TaxNet Practice
          </div>
          <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            TaxNet Advisory Pty Ltd
          </div>
          <div style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.85)" }}>
            Suite 6, 861 Doncaster Road, Doncaster East VIC 3109<br />
            Telephone: (03) 9802 5800<br />
            Email: <a href="mailto:info@taxnet.com.au" style={{ color: "#C5A869", textDecoration: "underline" }}>info@taxnet.com.au</a> (Attn: Privacy Officer)<br />
            Operating Hours: Monday – Friday: 6:00 AM – 6:00 PM (AEST)
          </div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.88rem", color: "#6A7B70" }}>
          If you are dissatisfied with our response, you retain the statutory right to escalate your complaint to the
          <strong> Office of the Australian Information Commissioner (OAIC)</strong> at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: "#0D3E26", textDecoration: "underline" }}>www.oaic.gov.au</a> or by calling 1300 363 992.
        </p>
      </>
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
            backgroundColor: "#061A10",
            background: "linear-gradient(180deg, #04140D 0%, #0D3E26 100%)",
            color: "#FFFFFF",
            paddingTop: "140px",
            paddingBottom: "4.5rem",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(197, 168, 105, 0.25)",
          }}
        >
          {/* Subtle Ambient Halo */}
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

            {/* Overline Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(197, 168, 105, 0.12)",
                border: "1px solid rgba(197, 168, 105, 0.3)",
                color: "#E5D6B6",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              <span>Statutory Legal Notice &amp; Client Protection</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: "#FFFFFF",
                margin: "0 0 1.25rem 0",
                letterSpacing: "-0.018em",
              }}
            >
              Privacy Policy &amp; Data Governance
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
                lineHeight: 1.65,
                color: "rgba(240, 235, 222, 0.9)",
                maxWidth: "760px",
                margin: "0 0 2rem 0",
              }}
            >
              How TaxNet collects, protects, utilizes, and governs confidential accounting, taxation, and mortgage
              data pursuant to the <em>Privacy Act 1988 (Cth)</em> and CPA Australia professional ethical standards.
            </p>

            {/* Practice Governance Highlights */}
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
                <strong style={{ color: "#C5A869" }}>Governing Entity:</strong> TaxNet Advisory Pty Ltd (ABN 40 610 387 881)
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Primary Jurisdiction:</strong> Victoria, Australia (APPs Compliant)
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Last Reviewed:</strong> November 2026
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Legal Clauses Content Section ── */}
        <section
          style={{
            paddingTop: "4rem",
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
                gap: "2.5rem",
              }}
            >
              {SECTIONS.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    padding: "clamp(1.75rem, 3.5vw, 2.75rem)",
                    border: "1px solid #E3ECE5",
                    boxShadow: "0 4px 20px rgba(13, 62, 38, 0.04)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        color: "#C5A869",
                        backgroundColor: "#0D3E26",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {sec.number}
                    </span>
                    <h2
                      style={{
                        fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                        fontSize: "clamp(1.5rem, 2.5vw, 1.95rem)",
                        fontWeight: 400,
                        color: "#0D3E26",
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {sec.title}
                    </h2>
                  </div>

                  <div
                    style={{
                      fontSize: "0.96rem",
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
                backgroundColor: "#0D3E26",
                color: "#FFFFFF",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
              }}
            >
              <div style={{ maxWidth: "600px" }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-monety), "Monety", Georgia, serif',
                    fontSize: "1.65rem",
                    fontWeight: 400,
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  Have Specific Compliance or Confidentiality Requirements?
                </h3>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.6 }}>
                  Speak directly with our senior CPA partners regarding secure data exchange, NDA executions, or bespoke corporate advisory governance.
                </p>
              </div>

              <Link
                href="/contact"
                style={{
                  backgroundColor: "#C5A869",
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  padding: "14px 26px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(197, 168, 105, 0.35)",
                }}
              >
                Book Practice Consultation →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

