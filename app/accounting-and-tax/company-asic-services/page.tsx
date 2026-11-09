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

export const metadata: Metadata = {
  title: "Company ASIC Services Melbourne | Corporate Secretarial & Registered Office | Taxnet",
  description:
    "Complete ASIC compliance, corporate secretarial services, and Melbourne CBD registered office address. Same-day Pty Ltd company incorporations, annual review management, and share registry updates.",
  keywords: [
    "ASIC agent Melbourne",
    "corporate secretarial services Melbourne",
    "registered office address Melbourne CBD",
    "company setup accountant Melbourne",
    "ASIC annual review lodgement",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "building",
    title: "ASIC Registered Agent Representation",
    desc: "We act as your authorized corporate intermediary with ASIC, receiving statutory correspondence and lodging compliance forms without friction.",
  },
  {
    icon: "award",
    title: "Registered Office Address Facility",
    desc: "Shield your private residential address from public search registries by utilizing our registered office address at Suite 6, 861 Doncaster Road.",
  },
  {
    icon: "document",
    title: "Annual Reviews & Solvency Minutes",
    desc: "Reviewing annual company statements, checking accuracy, and drafting mandatory director solvency resolutions within the statutory 2-month window.",
  },
  {
    icon: "scale",
    title: "Same-Day Pty Ltd Incorporations",
    desc: "Complete legal company setup with customized constitutions, initial member registries, ACN issuance, and consolidated ABN/TFN/GST registrations.",
  },
  {
    icon: "sync",
    title: "Share Transfers & Capital Reallocations",
    desc: "Formalizing share issues, rights classes, dividend access share structuring, and transfers with compliant ASIC Form 484 notifications.",
  },
  {
    icon: "shield",
    title: "Director ID & Officer Governance",
    desc: "Guiding boards through mandatory Australian Director ID verifications, officeholder changes, and constitution modernizations.",
  },
];

const FAQS = [
  {
    q: "What is an ASIC Registered Agent and why does my business need one?",
    a: "An ASIC Registered Agent is an authorized professional firm appointed to manage corporate compliance on behalf of Australian companies. The Corporations Act 2001 imposes strict notification deadlines (usually 28 days) for changes to directors, addresses, or share structures. As your agent, Taxnet ensures your records remain legally current, protecting you from automatic late penalties.",
  },
  {
    q: "Can I use Taxnet's office as our registered company address?",
    a: "Yes. Australian law requires every registered company to maintain an official registered office where legal notices can be served during business hours. Many founders prefer not to publish their private home address on public government records. Our registered office address package at Suite 6, 861 Doncaster Road provides privacy, prestige, and prompt document handling.",
  },
  {
    q: "What happens if a company misses its annual ASIC review fee?",
    a: "ASIC levies immediate late review fees: $96 for up to one month late, escalating to $401 for more than one month overdue. If fees remain unpaid for several months, ASIC initiates administrative deregistration. When a company is deregistered, its bank accounts are instantly frozen, and all company assets vest in the Commonwealth. We ensure your review is lodged and paid on time.",
  },
  {
    q: "What is a Director Identification Number (Director ID) and how is it obtained?",
    a: "A Director ID is a unique 15-digit identifier that a director keeps permanently. It was introduced to eliminate fictitious director appointments and combat illegal phoenix activity. Directors must apply for their own Director ID personally via myGovID. Taxnet guides you through the application and links your ID to your corporate records.",
  },
  {
    q: "How fast can Taxnet incorporate a new company in Australia?",
    a: "We execute company incorporations within hours once identity verifications are complete. You receive an electronic corporate binder including your Certificate of Incorporation, ACN, company constitution, initial director and shareholder minutes, and share certificates.",
  },
];

export default function CompanyAsicServicesPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Company%20ASIC%20Services/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Company%20ASIC%20Services/Consultant_meeting_with_entrepre_50c2fa66.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Company%20ASIC%20Services/Consultant_reviewing_corporate_c_04fa1cd3.jpg";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#F9F9F6", color: "#1C2022" }}>
        {/* ─── HERO SECTION ─── */}
        <section
          style={{
            position: "relative",
            minHeight: "56vh",
            backgroundColor: "#0A0D0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "140px",
            paddingBottom: "5rem",
            overflow: "hidden",
            textAlign: "center",
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

          {/* Subtle gold ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "550px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(197, 168, 105, 0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              padding: "0 1.5rem",
              position: "relative",
              zIndex: 2,
              width: "100%",
              textAlign: "center",
            }}
          >
            {/* Breadcrumb */}
            <nav style={{ marginBottom: "1.25rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <Link href="/accounting-and-tax" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                Accounting & Tax
              </Link>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "#C5A869" }}>Company & ASIC Services</span>
            </nav>

            {/* Short Heading in Center */}
            <h1
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 5.2vw, 4.25rem)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                margin: "0 auto 1.75rem auto",
                maxWidth: "760px",
              }}
            >
              Company & 
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                ASIC Services
              </span>
            </h1>

            {/* Book A Consultation Button */}
                        <style>{`
              .hero-consultation-btn {
                display: inline-block;
                background-color: #C5A869;
                color: #0A0D0B;
                font-weight: 700;
                font-size: 0.95rem;
                padding: 14px 34px;
                border-radius: 10px;
                text-decoration: none;
                box-shadow: 0 6px 20px rgba(197, 168, 105, 0.4);
                transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
              }
              .hero-consultation-btn:hover {
                background-color: #DFC386 !important;
                transform: translateY(-2px);
                box-shadow: 0 8px 24px rgba(197, 168, 105, 0.55) !important;
              }
            `}</style>
            <div>
              <a href="#contact" className="hero-consultation-btn">
                Book A Consultation →
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
                    alt="Taxnet corporate secretarial consultant meeting with director on company governance"
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
                    Corporate Protection
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Zero Inadvertent Deregistrations
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
                  Director Safeguards
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
                  Why ASIC Non-Compliance Threatens Company Directors
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  A missed ASIC mail notice can easily snowball into serious legal exposure. Late lodgement fees accrue
                  automatically, and after 60 days of non-payment, ASIC initiates deregistration proceedings. Once struck off,
                  your company ceases to legally exist, commercial contracts are breached, and company bank accounts are frozen.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet takes custody of your statutory obligations. We maintain your company register, issue timely reminders,
                  prepare compliant solvency resolutions, and safeguard your corporate veil from regulatory breakdown.
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
                      Residential Privacy
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Keep your family address completely off public search records.
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
                      Solvency Resolution
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Documented director minutes fulfilling legal Corporations Act duties.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6 PILLARS ─── */}
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
                Statutory Secretarial Capabilities
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Comprehensive Corporate Governance for Australian Proprietary Companies
              </h2>
            </div>

            <AutoSlidingCards items={PILLARS} />
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
                  Corporate Architecture
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
                  Custom Articles & Shareholder Class Structuring
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Off-the-shelf company setups frequently fail when companies grow. Standard replaceable rules lack
                  critical protections for pre-emptive share rights, drag-along and tag-along rights, and dividend access
                  shares necessary for flexible family distributions.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet drafts modern company constitutions and shareholder registers tailored specifically to your
                  commercial strategy, safeguarding founder control while optimizing tax outcomes.
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
                  Incorporate or Transfer Company →
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
                  alt="Taxnet corporate secretarial consultant reviewing ASIC company registers and compliance binder"
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
                Corporate Secretarial FAQs
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
          submitButtonText="Book A Consultation"
          serviceName="Company & ASIC Secretarial Services"
          title="Secure Your Corporate Governance"
          subtitle="Protect your corporate veil and avoid costly ASIC penalties. Appoint Taxnet as your registered corporate agent today."
        />
      </main>

      <Footer />
    </>
  );
}

