import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement | Taxnet CPA Accountants Melbourne",
  description:
    "Taxnet's standard Terms of Service and Professional Engagement outlining advisory scope, client substantiation obligations, fee policies, and CPA Australia standards.",
  keywords: [
    "Taxnet terms of service",
    "CPA terms of engagement Melbourne",
    "Tax agent client obligations",
    "Professional Standards Act Victoria",
    "accounting retainer agreement",
  ],
};

const SECTIONS = [
  {
    id: "scope-and-capacity",
    number: "01",
    title: "Dual-Disciplinary Scope of Engagement",
    content: (
      <>
        <p>
          These Terms of Service and Engagement (&ldquo;Terms&rdquo;) govern all professional accounting, taxation advisory,
          Single Touch Payroll compliance, bookkeeping, and credit advisory services provided by Taxnet Pty Ltd (ABN 40 610 387 881)
          (&ldquo;Taxnet&rdquo;) to you (&ldquo;the Client&rdquo;).
        </p>
        <p>
          Our practice operates across two distinctly regulated professional capacities:
        </p>
        <ul>
          <li>
            <strong>Public Practice Accounting &amp; Taxation:</strong> Bound by statutory ethical standards as a registered
            <strong> CPA Australia Public Practice</strong> and a registered <strong>Tax Agent</strong> under the
            <em> Tax Agent Services Act 2009 (Cth)</em> (Registration overseen by the Tax Practitioners Board).
          </li>
          <li>
            <strong>Mortgage Broking &amp; Credit Assistance:</strong> Provided in accordance with the
            <em> National Consumer Credit Protection Act 2009 (Cth)</em> and overseen by the
            <strong> Finance Brokers Association of Australia (FBAA)</strong>.
          </li>
        </ul>
        <p>
          Each individual engagement is confirmed via a tailored <em>Letter of Engagement</em> detailing specific entities, lodgement deliverables,
          and fee arrangements. In the event of any inconsistency, the specific Letter of Engagement shall prevail over these general terms.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    number: "02",
    title: "Client Obligations & Tax Substantiation",
    content: (
      <>
        <p>
          Australian taxation legislation places the primary legal responsibility for the accuracy and completeness of tax returns,
          BAS statements, and declarations squarely upon the taxpayer. To enable Taxnet to deliver accurate advice, the Client agrees to:
        </p>
        <ul>
          <li><strong>Full &amp; Frank Disclosure:</strong> Provide complete, truthful, and accurate disclosures of all worldwide income, revenue, business assets, and allowable deductions;</li>
          <li><strong>Documentary Substantiation:</strong> Maintain and retain all primary accounting source records, invoices, logbooks, receipts, and bank statements required by the ATO for a minimum of five (5) to seven (7) years;</li>
          <li><strong>Timely Information Provision:</strong> Furnish requested ledger files, payroll queries, and bank reconciliation verifications within agreed preparation timelines; and</li>
          <li><strong>Formal Verification:</strong> Review all draft Income Tax Returns, activity statements, and loan applications thoroughly prior to executing final electronic authorizations.</li>
        </ul>
        <div style={{ padding: "1rem 1.25rem", borderRadius: "10px", backgroundColor: "#FEF2F2", border: "1px solid #FCA5A5", marginTop: "1rem", color: "#991B1B" }}>
          <strong>Statutory ATO Audit Notice:</strong> Taxnet relies on the financial records provided by the Client without independent forensic audit unless specifically engaged to conduct formal auditing. The ATO may apply statutory administrative penalties and general interest charges (GIC) if claims are unsubstantiated.
        </div>
      </>
    ),
  },
  {
    id: "lodgement-deadlines",
    number: "03",
    title: "Statutory Deadlines & Lodgement Extensions",
    content: (
      <>
        <p>
          As a registered Tax Agent, Taxnet clients are entitled to beneficial lodgement program extensions under the ATO Tax Agent Lodgement Program
          (typically extending annual return deadlines from 31 October up to 15 May or 5 June of the following calendar year, subject to compliance history).
        </p>
        <p>
          To maintain access to these concessional extensions, the Client must ensure that all outstanding prior-year lodgements are up to date and that
          all required financial documentation for the current financial year is delivered to our offices no later than <strong>thirty (30) days prior</strong>
          to the relevant statutory deadline. Taxnet accepts no liability for statutory late lodgement penalties resulting from late document provision by the Client.
        </p>
      </>
    ),
  },
  {
    id: "fees-and-retainers",
    number: "04",
    title: "Fee Structures, Retainers & Invoicing",
    content: (
      <>
        <p>
          Taxnet rejects opaque hourly billing. We provide clear, agreed billing models:
        </p>
        <ul>
          <li><strong>Agreed Fixed Retainers:</strong> Ongoing business clients operate on an agreed monthly retainer covering all scheduled BAS, quarterly reviews, payroll oversight, and annual corporate returns;</li>
          <li><strong>Upfront Project Proposals:</strong> One-off tax structuring, SMSF setups, or prior-year backlog rectifications are quoted with guaranteed fixed upfront pricing; and</li>
          <li><strong>Credit Advisory Services:</strong> Standard residential mortgage broking services are provided at zero direct advisory cost to the consumer (commission is paid by the lending institution, fully disclosed under our Credit Proposal Disclosure).</li>
        </ul>
        <p>
          Invoices are payable within <strong>fourteen (14) days</strong> of issue via direct debit, electronic funds transfer (EFT), or credit card.
          Taxnet reserves the statutory right to suspend preparation or withhold ATO lodgement where undisputed fees remain overdue beyond thirty (30) days.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    number: "05",
    title: "Limitation of Professional Liability",
    content: (
      <>
        <p>
          Liability limited by a scheme approved under Professional Standards Legislation.
        </p>
        <p>
          Taxnet Business Consultants participates in the <strong>CPA Australia Professional Standards Scheme</strong> approved under the
          <em> Professional Standards Act 2003 (VIC)</em>. The scheme limits the civil liability of our firm, partners, and employees
          to the monetary caps established under the statutory scheme, except where liability cannot be excluded by law (such as fraud or gross negligence).
        </p>
      </>
    ),
  },
  {
    id: "fiduciary-independence",
    number: "06",
    title: "Fiduciary Independence & Commissions",
    content: (
      <>
        <p>
          Our dual-disciplinary practice guarantees complete transparency regarding financial incentives:
        </p>
        <ul>
          <li><strong>Accounting &amp; Tax Strategy:</strong> We accept zero referral kickbacks or proprietary product commissions from wealth management or financial products. Our advice is 100% fiduciary and objective; and</li>
          <li><strong>Mortgage Broking:</strong> When acting as your licensed finance broker, we receive upfront and ongoing trail commissions directly from the credit provider. Every commission dollar, percentage, and potential volume incentive is formally disclosed to you in writing via our <em>Credit Guide</em> and <em>Credit Proposal Document</em> before any loan agreement is executed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "electronic-communications",
    number: "07",
    title: "Electronic Signatures & Document Authority",
    content: (
      <>
        <p>
          Pursuant to the <em>Electronic Transactions Act 1999 (Cth)</em>, the Client consents to receiving statutory notices, engagement letters,
          invoices, and draft tax returns electronically via email or encrypted client portals.
        </p>
        <p>
          Electronic signatures (executed via verified cloud platforms such as Adobe Sign, DocuSign, or portal click-to-sign) shall be deemed
          legally binding and equivalent to physical wet signatures for all ATO declarations, ASIC resolutions, and lender credit applications.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality-and-data",
    number: "08",
    title: "Confidentiality & Cloud Ledger Integrity",
    content: (
      <>
        <p>
          Taxnet holds all Client files, financial balances, and communications in strict professional confidence under
          APES 110 <em>Code of Ethics for Professional Accountants</em> and section 30-10(6) of the <em>Tax Agent Services Act 2009</em>.
        </p>
        <p>
          We will not disclose any information to third parties (including your bank, financial planner, or solicitor) without your express
          prior authorization, except where mandated by statutory legal warrant, court order, or regulatory notice issued by the ATO or ASIC.
        </p>
      </>
    ),
  },
  {
    id: "termination-and-handover",
    number: "09",
    title: "Termination & Ethical Clearance Handover",
    content: (
      <>
        <p>
          Either party may terminate the professional engagement by providing fourteen (14) days written notice.
        </p>
        <p>
          Upon termination, the Client remains responsible for fees incurred up to the termination date. In accordance with CPA Australia
          professional regulations, upon receiving an ethical clearance request from your nominated incoming accountant, Taxnet will promptly
          transfer all primary client records, prior-year depreciation schedules, and trial balances with zero operational obstruction.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "10",
    title: "Governing Law & Jurisdiction",
    content: (
      <>
        <p>
          These Terms are governed by and construed in accordance with the laws in force in the State of <strong>Victoria, Australia</strong>.
          The Client and Taxnet submit to the exclusive jurisdiction of the Courts of Victoria and the Commonwealth of Australia in respect of
          any proceedings arising out of or in connection with these Terms.
        </p>
      </>
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
              <span>Practice Governance &amp; Engagement Charter</span>
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
              Terms of Service &amp; Engagement
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
              Professional terms governing all CPA accounting, taxation advisory, corporate ASIC compliance,
              and mortgage broking services rendered by Taxnet Business Consultants.
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
                <strong style={{ color: "#C5A869" }}>Practice Standard:</strong> CPA Australia Public Practice
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Regulatory Oversight:</strong> Tax Practitioners Board (TPB) &amp; FBAA
              </div>
              <div>
                <strong style={{ color: "#C5A869" }}>Jurisdiction:</strong> Victoria, Australia
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
                  Ready to Establish a Professional Engagement?
                </h3>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.6 }}>
                  Schedule a complimentary discovery consultation at our Doncaster East suites or via secure video Australia-wide.
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
                Book Discovery Session →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

