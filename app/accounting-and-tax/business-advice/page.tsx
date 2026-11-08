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
  title: "Strategic Business Advice & Virtual CFO Melbourne | TaxNet Advisory",
  description:
    "Executive business advisory and Virtual CFO services in Melbourne. 3-way financial modeling, margin optimization, cash flow expansion, and exit planning.",
  keywords: [
    "business advice Melbourne",
    "virtual CFO services Melbourne",
    "business advisory accountant",
    "3 way cash flow forecasting Melbourne",
    "fractional CFO Australia",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "chart",
    title: "Virtual CFO & Boardroom Direction",
    desc: "Executive C-suite financial guidance, monthly variance analysis, and governance board packs without the cost of a full-time executive salary.",
  },
  {
    icon: "trend",
    title: "3-Way Rolling Financial Forecasts",
    desc: "Predictive dynamic modeling harmonizing Profit & Loss, Balance Sheet, and Cash Flow over 12 to 36 forward-looking rolling months.",
  },
  {
    icon: "calculator",
    title: "Unit Economics & Gross Margin Engineering",
    desc: "In-depth margin analysis across individual products, client segments, or service contracts to eliminate silent profit drains.",
  },
  {
    icon: "target",
    title: "Working Capital & Runway Expansion",
    desc: "Strategies to shrink debtor recovery cycles (DSO), negotiate vendor terms, and unlock trapped cash inside your operational balance sheet.",
  },
  {
    icon: "search",
    title: "M&A Due Diligence & Business Valuation",
    desc: "Defensible Quality of Earnings (QoE) reviews, balance sheet audits, and valuation modeling for business acquisitions or trade exits.",
  },
  {
    icon: "handshake",
    title: "Commercial Debt & Capital Raising",
    desc: "Formulating compelling bank credit presentations and investor-grade financial models that secure debt financing on favorable terms.",
  },
];

const FAQS = [
  {
    q: "What is a Virtual CFO and how does it help my business?",
    a: "A Virtual CFO (Chief Financial Officer) provides the high-level strategic financial leadership of an enterprise executive on a flexible, fractional retainer. Instead of paying $250,000–$350,000+ for a full-time CFO, you gain access to TaxNet's seasoned CPA directors to steer capital allocation, optimize margins, forecast cash runways, and support strategic acquisitions.",
  },
  {
    q: "What is 3-way financial modeling and why is it essential?",
    a: "A 3-way model links your Profit & Loss statement, Balance Sheet, and Cash Flow statement into a single unified dynamic spreadsheet or software model. An increase in sales triggers inventory reorders, impacts debtor days, and changes tax liabilities. A 3-way model shows you the exact bank balance outcome of every strategic operational choice before you commit funds.",
  },
  {
    q: "What stage of business benefits most from strategic business advice?",
    a: "Businesses generating between $1M and $25M in annual turnover experience the highest return on investment. At this scale, founders are juggling staff, complex supplier lines, and tax obligations, where small percentage improvements in gross margin or debtor velocity translate into hundreds of thousands of dollars in free cash.",
  },
  {
    q: "Can TaxNet help us prepare our company for an eventual sale or acquisition?",
    a: "Yes. Maximizing enterprise value requires 12 to 24 months of preparation. We clean up historical balance sheets, eliminate personal director entanglements, document normalized EBITDA margins, and assemble comprehensive data rooms that command premium multiples from buyers.",
  },
  {
    q: "How frequently do we meet with our strategic business advisor?",
    a: "Depending on your selected advisory tier, we conduct structured monthly or quarterly executive reviews. You also receive ongoing priority access via phone, email, and WhatsApp for urgent commercial decision support.",
  },
];

export default function BusinessAdvicePage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Advice/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Advice/Advisor_consulting_entrepreneur_a37a99dd.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Advice/Consultants_collaborating_on_bus_053fff54.jpg";

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
              <Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Accounting & Tax
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Strategic Business Advice</span>
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
              Strategic Business Advice.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Virtual CFO Leadership.
              </span>{" "}
              Predictable Growth.
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
              Gain the financial firepower of an executive CFO without the six-figure salary. TaxNet delivers high-impact
              commercial advisory, 3-way rolling cash forecasts, margin engineering, and boardroom decision support.
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
                Book a Strategic Advisory Session →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss Virtual CFO and business advisory services."
                label="Chat with an Executive CFO Advisor"
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
                    alt="TaxNet senior commercial advisor consulting with entrepreneur on growth strategy"
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
                    Commercial Impact
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Unlock Hidden Working Capital
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
                  Enterprise Strategy
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
                  Why Top-Line Revenue Does Not Guarantee Bottom-Line Wealth
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Every entrepreneur learns the hard truth: revenue is vanity, profit is sanity, but cash is reality.
                  Too many business owners celebrate 40% annual top-line growth, only to find their bank account empty
                  and supplier payables mounting.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  As your Virtual CFO, TaxNet interrogates your cost of goods sold, price points, and cash conversion
                  cycles. We ensure every additional dollar in sales contributes tangible, retained equity to your enterprise.
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
                      Cash Runway Clarity
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Know your exact cash balance 13 weeks into the future.
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
                      Boardroom Accountability
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Regular executive reviews keep leadership laser-focused on profit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS ─── */}
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
                Virtual CFO Architecture
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Executive Financial Capabilities Delivered on Your Terms
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {PILLARS.map((p) => (
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

        {/* ─── SECTION 2: ADVISORY IN ACTION ─── */}
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
                  Enterprise Valuation
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
                  Building Clean, Transferable Enterprise Value
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  A business that relies entirely on its founder is an exhausting job, not an asset. Our strategic advisory
                  services systematically transition operations toward documented financial controls, transparent reporting,
                  and recurring cash flows that potential buyers and investors value at higher EBITDA multiples.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Whether your goal is private equity recapitalization, management buyout, or family succession, we
                  craft the financial bridge that turns operational sweat equity into life-changing liquidity.
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
                  Speak with an Advisory Partner →
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
                  alt="TaxNet executive consultants collaborating on commercial business advisory roadmap"
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
                Strategic Inquiries
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
          serviceName="Strategic Business Advice & Virtual CFO"
          title="Scale Your Business with Executive Advisory"
          subtitle="Turn financial complexity into predictable commercial growth. Speak with our Melbourne CPA corporate advisory directors."
        />
      </main>

      <Footer />
    </>
  );
}

