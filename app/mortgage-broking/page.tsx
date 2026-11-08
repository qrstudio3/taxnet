import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";

export const metadata: Metadata = {
  title: "Mortgage Broker Melbourne | 40+ Bank & Non-Bank Lenders | TaxNet",
  description:
    "Expert mortgage broking services in Melbourne. Compare 40+ Australian lenders for first homes, refinancing, investment property, construction, and business loans. $0 broker fee.",
  keywords: [
    "mortgage broker Melbourne",
    "home loans Melbourne",
    "first home buyer loan Melbourne",
    "refinancing mortgage broker",
    "commercial business loans Melbourne",
    "MFAA accredited mortgage broker",
  ],
};

interface MortgageServiceItem {
  icon: BenefitIconType;
  title: string;
  href: string;
  desc: string;
}

const MORTGAGE_SERVICES: MortgageServiceItem[] = [
  {
    icon: "key",
    title: "Buying Your First Home",
    href: "/mortgage-broking/first-home-buyer",
    desc: "First Home Owner Grants (FHOG), 5% deposit First Home Guarantee Scheme, Victorian stamp duty concessions, and maximum borrowing power.",
  },
  {
    icon: "home",
    title: "Buying Your Next Home",
    href: "/mortgage-broking/next-home-buyer",
    desc: "Upgrading or downsizing with equity release, simultaneous settlements, loan porting, and transition finance to secure your dream home.",
  },
  {
    icon: "refresh",
    title: "Refinancing & Debt Consolidation",
    href: "/mortgage-broking/refinancing-debt-consolidation",
    desc: "Slash 0.5%–1.5% off your existing interest rate, unlock equity for renovations, capture bank cashback offers, and consolidate debts into one low payment.",
  },
  {
    icon: "building",
    title: "Investment Property Loans",
    href: "/mortgage-broking/investment-property-loans",
    desc: "Strategic interest-only facilities, stand-alone mortgages avoiding cross-collateralization, and tax-effective loan structuring integrated with our CPA team.",
  },
  {
    icon: "tool",
    title: "Land & Construction Loans",
    href: "/mortgage-broking/land-construction-loans",
    desc: "Progressive drawdown construction financing across slab, frame, lockup, fixing, and practical completion stages on fixed-price builder contracts.",
  },
  {
    icon: "briefcase",
    title: "Business & Commercial Loans",
    href: "/mortgage-broking/business-loans",
    desc: "Secured and unsecured commercial debt, working capital facilities, debtor finance, and commercial property mortgages with CPA-backed credit submissions.",
  },
  {
    icon: "car",
    title: "Personal, Car & Equipment Finance",
    href: "/mortgage-broking/personal-car-equipment-finance",
    desc: "Commercial chattel mortgages, novated car leases, yellow goods equipment funding, and instant asset write-off coordination for tax savings.",
  },
  {
    icon: "clock",
    title: "Bridging Loans",
    href: "/mortgage-broking/bridging-loans",
    desc: "Buy before you sell without stressful auction deadlines. Peak debt bridging structures with interest capitalization to avoid rushed property sales.",
  },
];

const FAQS = [
  {
    q: "Why should I use a TaxNet mortgage broker instead of going directly to my bank?",
    a: "A single bank can only offer you their own proprietary loan products and interest rates. TaxNet has access to a panel of over 40 major Australian banks and non-bank lenders (including CBA, ANZ, NAB, Westpac, Macquarie, ING, and Bankwest). We compare thousands of products, negotiate discounted discretionary rates, handle all lender paperwork, and ensure your borrowing structure aligns with your overall tax and wealth strategy.",
  },
  {
    q: "How much do TaxNet's mortgage broking services cost?",
    a: "Our residential mortgage broking services are completely free ($0) to you. The lender pays our practice an industry-standard commission after your loan settles. You receive independent, unbiased credit advice, maximum borrowing power calculations, and full application management without paying a broker fee.",
  },
  {
    q: "How does having an accounting firm manage our mortgage broking help us?",
    a: "For business owners, self-employed contractors, trust beneficiaries, and property investors, traditional lenders often struggle to interpret company financial statements, add-backs, and depreciation. Because TaxNet is a qualified CPA public practice, we prepare verified lender-ready credit memorandums that commercial credit underwriters understand, avoiding common self-employed loan rejections.",
  },
  {
    q: "How quickly can you arrange loan pre-approval?",
    a: "Depending on the chosen lender, pre-approval turnaround typically takes between 2 to 5 business days once your complete documentation is submitted. For urgent auction deadlines, we fast-track applications through priority broker assessment channels.",
  },
  {
    q: "What deposit do I need to buy a home in Victoria?",
    a: "While a traditional 20% deposit avoids Lenders Mortgage Insurance (LMI), eligible first-home buyers can purchase with as little as a 5% deposit through the federal First Home Guarantee Scheme without paying any LMI. Investors and next-home buyers can also utilize existing home equity as a deposit without dipping into cash reserves.",
  },
];

export default function MortgageBrokingHubPage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/hero.jpg";

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
              <span style={{ color: "#C5A869" }}>Mortgage Broking</span>
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
              Independent Mortgage Broking.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #A18650)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                40+ Australian Lenders.
              </span>{" "}
              Zero Broker Fees.
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
              Navigating Australian home loans and commercial finance shouldn&apos;t be stressful. TaxNet compares 40+
              banks and non-bank lenders, negotiates discounted rates, and manages all paperwork from pre-approval to settlement.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <Link
                href="/calculator"
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
                Calculate My Borrowing Capacity →
              </Link>

              <ExecutiveWhatsAppButton
                message="Hi TaxNet, I'd like to discuss mortgage broking options."
                label="Chat with a Mortgage Partner"
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

        {/* ─── SERVICES DIRECTORY GRID (ONLY THESE KIND OF CARDS) ─── */}
        <section id="services" style={{ padding: "5.5rem 0", backgroundColor: "#F9F9F6" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Comprehensive Lending Solutions
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.6vw, 3rem)",
                  color: "#0F261B",
                  marginTop: "0.5rem",
                }}
              >
                Explore Tailored Mortgage & Finance Disciplines
              </h2>
              <p style={{ color: "#55645B", maxWidth: "660px", margin: "0.75rem auto 0", fontSize: "0.95rem" }}>
                Whether you are stepping onto the property ladder, refinancing to slash monthly repayments, or funding a
                commercial business expansion, our Melbourne finance brokers deliver market-leading outcomes.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {MORTGAGE_SERVICES.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E4EAE6",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.03)",
                    textDecoration: "none",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                  className="card"
                >
                  <BookkeepingBenefitIcon type={s.icon} />
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
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      fontSize: "0.88rem",
                      color: "#55645B",
                      lineHeight: 1.6,
                      margin: "0 0 1.5rem 0",
                      flexGrow: 1,
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans), "Inter", system-ui, -apple-system, sans-serif',
                      color: "#0D3E26",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "auto",
                    }}
                  >
                    Explore Finance Option →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLANS SECTION EMBEDDED ─── */}
        <PlansSection />

        {/* ─── DEDICATED FAQS ─── */}
        <section style={{ padding: "5.5rem 0", backgroundColor: "#FFFFFF", borderTop: "1px solid #E6ECE8" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 1.5rem" }}>
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
                Clarity Before Borrowing
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
                    padding: "1.35rem 0.5rem",
                    cursor: "pointer",
                  }}
                >
                  <summary
                    style={{
                      fontSize: "1.08rem",
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
                    <span style={{ color: "#A18650", fontSize: "1.35rem" }}>+</span>
                  </summary>
                  <p style={{ color: "#4A5A50", fontSize: "0.94rem", lineHeight: 1.7, marginTop: "0.85rem", paddingLeft: "0.25rem" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION WITH EMAIL & WHATSAPP ─── */}
        <BookkeepingContact
          serviceName="Mortgage Broking & Credit Strategy"
          title="Secure Your Ideal Loan Structure"
          subtitle="Speak with an MFAA-accredited Melbourne finance broker at our Doncaster East offices or connect directly over phone or WhatsApp."
        />
      </main>

      <Footer />
    </>
  );
}
