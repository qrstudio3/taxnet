import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";

export const metadata: Metadata = {
  title: "Bank Reconciliation & BAS-Ready Bookkeeping Melbourne | TaxNet",
  description:
    "Zero-discrepancy bank reconciliations, GST coding, and BAS-ready financial records. Melbourne CPA bookkeepers ensuring 100% balanced ledgers every week.",
  keywords: [
    "bank reconciliation Melbourne",
    "BAS ready records",
    "GST coding bookkeeping",
    "Xero bank feed reconciliation",
    "balanced balance sheet Melbourne",
  ],
};

const RECON_PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "scale",
    title: "Cent-for-Cent Balance",
    desc: "Every bank, savings, loan, and business credit card account reconciled against physical bank statements to eliminate mysterious balance discrepancies.",
  },
  {
    icon: "document",
    title: "Flawless GST Input Tax Credits",
    desc: "Meticulous categorization of GST on expenses to legally maximize your GST refunds and avoid overpaying on quarterly BAS lodgements.",
  },
  {
    icon: "card",
    title: "Merchant Clearing (Stripe/Square)",
    desc: "Specialized reconciliation of merchant clearing accounts (EFTPOS, Tyro, Stripe, PayPal) separating merchant fees from gross sales.",
  },
  {
    icon: "search",
    title: "Zero 'Suspense' Account Clutter",
    desc: "We investigate and clear out unallocated transactions so your balance sheet reflects clean, audit-proof truth rather than guesswork.",
  },
  {
    icon: "shield",
    title: "ATO & BAS-Ready Packages",
    desc: "Quarterly reconciliations finalized weeks ahead of deadlines, ready for immediate BAS lodgement by our registered tax agents.",
  },
  {
    icon: "lock",
    title: "Internal Fraud & Error Safeguards",
    desc: "Continuous ledger surveillance identifying duplicate vendor debits, unexpected direct debits, and unauthorized card charges.",
  },
];

const FAQS = [
  {
    q: "Why do bank feed reconciliations often get out of sync in Xero?",
    a: "Bank feed glitches, duplicate imported transactions, manual journal entries, or transactions deleted by mistake can cause the Xero statement balance to drift from your real bank balance. We perform deep bank statement audits to find and fix historical discrepancies to the exact cent.",
  },
  {
    q: "How do you handle missing receipts for expenses?",
    a: "We implement cloud capture tools (Dext/Hubdoc) so receipts are snapped immediately. For any uncaught transactions, we flag queries via a clean monthly summary rather than bombarding you with daily emails.",
  },
  {
    q: "Why is merchant reconciliation (Stripe / EFTPOS) so difficult?",
    a: "Payment processors batch hundreds of customer payments together and deduct their transaction fee before depositing net funds into your bank account days later. If you simply code the bank deposit as sales income, your revenue is understated and merchant fees are unrecorded. We reconcile the gross vs. fee breakdown accurately.",
  },
  {
    q: "Can you fix backlogged reconciliations from previous financial years?",
    a: "Yes. We frequently rescue ledgers that haven't been reconciled for months or years, rebuilding historical bank statements, catching up on GST, and restoring order.",
  },
];

export default function BankReconciliationPage() {
  const heroImg = "/taxnet-categories-images/Bookkeeping/Bank%20Reconciliation%20and%20BAS-Ready%20Records/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Bookkeeping/Bank%20Reconciliation%20and%20BAS-Ready%20Records/Accountant_performing_bank_recon_fc7babfa.jpg";
  const bodyImg2 = "/taxnet-categories-images/Bookkeeping/Bank%20Reconciliation%20and%20BAS-Ready%20Records/Bookkeeper_consulting_business_o_4a9fba8d.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "82vh",
            backgroundColor: "#06120B",
            display: "flex",
            alignItems: "center",
            paddingTop: "140px",
            paddingBottom: "5rem",
            overflow: "hidden",
          }}
        >
          {/* Parallax Background Hero Image */}
          <CategoryHeroParallax heroImg={heroImg} />

          {/* Dark Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(6,18,11,0.95) 0%, rgba(13,62,38,0.82) 55%, rgba(6,18,11,0.96) 100%)",
            }}
          />

          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
              width: "100%",
            }}
          >
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "1.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/small-business-bookkeeping" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Bookkeeping
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Bank Reconciliation</span>
            </nav>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                maxWidth: "880px",
                marginBottom: "1.5rem",
              }}
            >
              Zero Discrepancies.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                100% Balanced to the Cent.
              </span>{" "}
              BAS-Ready Every Week.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.35vw, 1.25rem)",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
                maxWidth: "680px",
                marginBottom: "2.25rem",
              }}
            >
              An unbalanced ledger is a ticking audit risk. Our Melbourne bookkeeping specialists perform rigorous
              weekly reconciliations across all bank accounts, credit cards, and merchant gateways—ensuring every
              cent is accounted for and your business is always 100% BAS-ready.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#A18650",
                  color: "#0D3E26",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(161, 134, 80, 0.4)",
                  transition: "all 180ms ease",
                }}
              >
                Reconcile My Ledgers →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss bank reconciliation and BAS-ready records."
                label="Chat with a Reconciliation Specialist"
                sublabel="Direct WhatsApp Line"
              />

              <a
                href="tel:0398025800"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  textDecoration: "none",
                  marginLeft: "0.5rem",
                }}
              >
                Or call (03) 9802 5800
              </a>
            </div>


          </div>
        </section>

        {/* ─── PAIN POINT SECTION ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Image 1 */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                    position: "relative",
                    aspectRatio: "4/3",
                  }}
                >
                  <Image
                    src={bodyImg1}
                    alt="TaxNet accountant performing bank reconciliation and ledger verification"
                    fill
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />
                </div>
                {/* Float Card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    backgroundColor: "#0D3E26",
                    color: "#FFFFFF",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    maxWidth: "240px",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "#C5A869", fontWeight: 700, textTransform: "uppercase" }}>
                    Verified Daily
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Audit-Proof Accounting
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <span
                  style={{
                    color: "#0D3E26",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  The Hidden Leak
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0F261B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Why Small Discrepancies Turn Into Big Accounting Bills
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  When transactions are quickly &apos;OK&apos;d&apos; in Xero without matching receipts or correct tax rates, errors
                  compound. Business owners end up missing thousands in valid GST credits, or worse, paying GST on
                  non-taxable income transfers between their own accounts.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  TaxNet audits every line item. We verify tax invoices for expenses above $82.50, ensure correct
                  depreciation thresholds are applied, and reconcile loan balances against bank amortization schedules.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "#F9FAF9",
                      border: "1px solid #E6ECE8",
                    }}
                  >
                    <div style={{ fontWeight: 800, color: "#0D3E26", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Maximized BAS Refunds
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Every allowable input tax credit claimed legally.
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "#F9FAF9",
                      border: "1px solid #E6ECE8",
                    }}
                  >
                    <div style={{ fontWeight: 800, color: "#0D3E26", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Faster Tax Lodgement
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Clean year-end handovers save thousands in CPA fees.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 RECONCILIATION PILLARS ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#F3F5F2", borderTop: "1px solid #E7ECE8" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Zero-Variance Methodology
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Comprehensive Balance Sheet Reconciliations
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {RECON_PILLARS.map((p) => (
                <div
                  key={p.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <BookkeepingBenefitIcon type={p.icon} />
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      marginBottom: "0.6rem",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "0.88rem",
                      color: "#55645B",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: ADVISOR PARTNERSHIP ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "3.5rem",
                alignItems: "center",
              }}
            >
              {/* Text */}
              <div>
                <span
                  style={{
                    color: "#A18650",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Proactive Guidance
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0F261B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Peace of Mind with Certified Registered BAS Agents
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  You didn&apos;t start a business to spend Friday nights matching bank feeds. With TaxNet, you have a
                  dedicated Australian bookkeeper backed by CPA partners who inspects your ledgers on a weekly rhythm.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  When your quarterly BAS is due, there is no mad scramble. Your reports are balanced, verified against
                  ATO benchmarks, and lodged seamlessly with extended registered agent deadlines.
                </p>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#0D3E26",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                  }}
                >
                  Request a Free Ledger Audit →
                </a>
              </div>

              {/* Image 2 */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.1)",
                  position: "relative",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={bodyImg2}
                  alt="TaxNet bookkeeper consulting with Australian business owner on financial reports"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── PLANS SECTION EMBEDDED ─── */}
        <PlansSection />

        {/* ─── FAQS ─── */}
        <section style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Clarity
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  color: "#0F261B",
                  marginTop: "0.4rem",
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ borderTop: "1px solid #E5EAE7" }}>
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom: "1px solid #E5EAE7",
                    padding: "1.25rem 0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <summary
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0F261B",
                      outline: "none",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "#A18650", fontSize: "1.25rem" }}>+</span>
                  </summary>
                  <p style={{ color: "#4A5A50", fontSize: "0.92rem", lineHeight: 1.65, marginTop: "0.75rem", paddingLeft: "0.25rem" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION WITH EMAIL & WHATSAPP ─── */}
        <BookkeepingContact
          serviceName="Bank Reconciliation & BAS Records"
          title="Get Your Ledgers Clean & Balanced"
          subtitle="Stop stressing about mystery balance discrepancies. Speak with our Melbourne bookkeeping team for an immediate audit-proof review."
        />
      </main>

      <Footer />
    </>
  );
}

