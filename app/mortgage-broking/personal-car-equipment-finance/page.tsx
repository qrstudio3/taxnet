import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PlansSection from "@/app/components/PlansSection";
import BookkeepingContact from "@/app/components/BookkeepingContact";
import AutoSlidingCards from "@/app/components/AutoSlidingCards";
import BookkeepingBenefitIcon, { BenefitIconType } from "@/app/components/BookkeepingBenefitIcon";
import CategoryHeroParallax from "@/app/components/CategoryHeroParallax";
import ExecutiveWhatsAppButton from "@/app/components/ExecutiveWhatsAppButton";

export const metadata: Metadata = {
  title: "Personal, Car & Equipment Finance Melbourne | Chattel Mortgage | Taxnet",
  description:
    "Expert car and equipment finance in Melbourne. Chattel mortgages, novated leases, asset write-off tax integration, and wholesale rates that beat dealership finance.",
  keywords: [
    "car finance broker Melbourne",
    "equipment finance Melbourne",
    "chattel mortgage Victoria",
    "novated lease broker",
    "heavy machinery finance",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "car",
    title: "Wholesale Car Finance Rates",
    desc: "Bypass predatory dealership finance commissions. We source wholesale rates from tier-1 lenders with transparent loan terms, flexible deposits, and low balloon options.",
  },
  {
    icon: "tool",
    title: "Commercial Chattel Mortgages",
    desc: "Take immediate vehicle ownership, claim the full GST component on your next BAS return, and write off depreciation and interest against your trading profit.",
  },
  {
    icon: "percent",
    title: "Novated Leasing & Pre-Tax Deductions",
    desc: "Pay for your passenger vehicle and running costs (fuel, rego, insurance, servicing) using pre-tax salary packaging, with 0% FBT on eligible electric vehicles.",
  },
  {
    icon: "briefcase",
    title: "Heavy Equipment & Yellow Goods Finance",
    desc: "Finance excavators, trucks, manufacturing plant, and medical technology with structured repayments matched to your business contracts and seasonal cash flow.",
  },
  {
    icon: "refresh",
    title: "Low-Doc Machinery Approvals",
    desc: "Need immediate machinery on site? Access streamlined equipment finance up to $150,000 with simple asset declarations and no requirement for prior tax returns.",
  },
  {
    icon: "lock",
    title: "Comprehensive Asset & Loan Protection",
    desc: "Integrate guaranteed asset protection and repayment cover to clear vehicle and equipment balances if total write-off, theft, or severe accident occurs.",
  },
];

const FAQS = [
  {
    q: "Why should I use a finance broker instead of dealership car financing?",
    a: "Car dealerships often quote attractive headline interest rates while disguising exorbitant doc fees, inflated dealer origination commissions, and punitive balloon payments that cost thousands extra over the loan term. Taxnet compares over 30 specialized asset financiers to secure genuine wholesale rates with zero hidden dealer margins.",
  },
  {
    q: "How does a chattel mortgage work for business vehicles and machinery in Australia?",
    a: "Under an Australian chattel mortgage, your business takes immediate legal ownership of the vehicle or equipment at settlement. If registered for GST on a cash basis, your business can claim back the entire GST component included in the purchase price on your very next Business Activity Statement (BAS), while claiming ongoing depreciation and loan interest as tax deductions.",
  },
  {
    q: "What is a novated lease and how does it save tax?",
    a: "A novated lease is a three-way agreement between you, your employer, and the finance company. Your vehicle repayments and running expenses (fuel, tires, registration, insurance, servicing) are deducted from your gross salary before PAYG income tax is calculated. For qualifying electric vehicles (EVs) below the luxury car tax threshold, zero Fringe Benefits Tax (FBT) applies, delivering massive personal tax savings.",
  },
  {
    q: "Can I finance used equipment or private vehicle sales?",
    a: "Yes. Taxnet arranges finance for new and used vehicles or machinery purchased through licensed dealerships, online auctions (like Pickles or Manheim), and verified private sellers. We perform complete PPSR title encumbrance and write-off register checks to protect you before funds are disbursed.",
  },
  {
    q: "How fast can equipment and vehicle finance be approved?",
    a: "Most car loans, novated leases, and standard equipment finance facilities are approved within 2 to 24 hours once basic ID and income verification documents are submitted. Funds can typically be settled directly to the seller within 24 to 48 hours.",
  },
];

export default function PersonalCarEquipmentFinancePage() {
  const heroImg = "/taxnet-categories-images/Mortgage%20Broking/Personal%20Car%20Equipment%20Finance/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Mortgage%20Broking/Personal%20Car%20Equipment%20Finance/Consultant_reviewing_documents_w_acbc3ff1.jpg";
  const bodyImg2 = "/taxnet-categories-images/Mortgage%20Broking/Personal%20Car%20Equipment%20Finance/Business_owner_inspecting_indust_239dc354.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "74vh",
            backgroundColor: "#0A0D0B",
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
                "linear-gradient(135deg, rgba(10,13,11,0.96) 0%, rgba(20,24,22,0.85) 55%, rgba(10,13,11,0.98) 100%)",
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
              <Link href="/mortgage-broking" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                Mortgage Broking
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Personal, Car & Equipment Finance</span>
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
              Personal, Car & Equipment Finance.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Wholesale Rates.
              </span>{" "}
              Instant Tax Depreciation.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "640px",
                marginBottom: "2rem",
              }}
            >
              Fast commercial chattel mortgages and yellow goods asset finance coordinated with our CPA advisory team.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#C5A869",
                  color: "#0A0D0B",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  padding: "0.9rem 2rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(197, 168, 105, 0.4)",
                  transition: "all 180ms ease",
                }}
              >
                Get a Fast Quote on Car / Equipment Finance →
              </a>

              <ExecutiveWhatsAppButton
                message="Hi Taxnet, I'm looking for car / equipment finance and want a competitive rate quote."
                label="Chat with an Asset Finance Specialist"
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
                    alt="Taxnet finance consultant reviewing vehicle and equipment loan documents with Melbourne client"
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
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    padding: "1.2rem 1.4rem",
                    borderRadius: "14px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    maxWidth: "240px",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", color: "#C5A869", fontWeight: 700, textTransform: "uppercase" }}>
                    Beat The Dealer
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Save Thousands in Margins
                  </div>
                </div>
              </div>

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
                  Dealer Trap Avoidance
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0A0D0B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Don&apos;t Let Dealership Finance Add Thousands to Your Next Vehicle
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Car dealerships love arranging finance on the spot because their business managers earn hefty trailing
                  commissions and origination markups. They often lock buyers into restrictive loan contracts with high
                  early exit penalties and inflated balloon payments.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet operates strictly as an independent broker. We source wholesale commercial and personal finance
                  rates, compare balloon options side-by-side, and ensure the contract structure aligns perfectly with
                  your tax return deductions and ATO guidelines.
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
                    <div style={{ fontWeight: 800, color: "#0A0D0B", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Wholesale Pricing
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Institutional asset finance rates with zero dealer markups.
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
                    <div style={{ fontWeight: 800, color: "#0A0D0B", fontSize: "0.95rem", marginBottom: "4px" }}>
                      Immediate BAS Claim
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Claim up to 100% of GST back on your very next quarterly return.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS (ONLY THESE KIND OF CARDS) ─── */}
        <section style={{ padding: "5.5rem 0", backgroundColor: "#F9F9F6", borderTop: "1px solid #E7ECE8" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Asset Finance Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Intelligent Vehicle & Equipment Lending Tailored to Your Balance Sheet
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
          </div>
        </section>

        {/* ─── SECTION 2: HEAVY EQUIPMENT & MACHINERY ─── */}
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
                  Industrial & Commercial Power
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                    fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                    color: "#0A0D0B",
                    lineHeight: 1.2,
                    margin: "0.6rem 0 1.25rem",
                  }}
                >
                  Equip Your Business Without Depleting Capital Reserves
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Whether upgrading an excavation fleet, outfitting a high-end dental practice, or acquiring warehouse
                  forklifts, tying up operating cash slows down business momentum. Our equipment finance solutions allow
                  the new machinery to generate revenue while paying for itself over time.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet synchronises your asset acquisitions with the Federal Government&apos;s small business instant
                  asset write-off thresholds and temporary full expensing rules, ensuring you maximize immediate tax
                  shielding in the financial year of purchase.
                </p>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: "#0A0D0B",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textDecoration: "none",
                  }}
                >
                  Compare Car & Equipment Rates →
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
                  alt="Business owner inspecting industrial heavy machinery and equipment funded through Taxnet"
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
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Finance Answers
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  color: "#0A0D0B",
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
                      color: "#0A0D0B",
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
          serviceName="Personal, Car & Equipment Finance"
          submitButtonText="Book A Consultation"
          title="Finance Your Vehicle or Equipment"
          subtitle="Get a competitive wholesale finance quote within hours. We compare 30+ lenders to deliver lower repayments and maximized tax deductions."
        />
      </main>

      <Footer />
    </>
  );
}
