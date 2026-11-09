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
  title: "Fringe Benefits Tax (FBT) Melbourne | Salary Packaging & EV Exemptions | Taxnet",
  description:
    "Expert Fringe Benefits Tax (FBT) compliance and salary packaging advisory in Melbourne. Electric vehicle (EV) exemptions, commercial vehicle logbooks, and FBT liability minimization.",
  keywords: [
    "Fringe Benefits Tax accountant Melbourne",
    "FBT return Melbourne",
    "electric vehicle FBT exemption",
    "salary packaging accountant Melbourne",
    "dual cab ute FBT exemption Australia",
  ],
};

const PILLARS: { icon: BenefitIconType; title: string; desc: string }[] = [
  {
    icon: "percent",
    title: "Electric Vehicle (EV) Exemption Structuring",
    desc: "Capitalize on federal zero-FBT rules for eligible zero-emission electric vehicles below the Luxury Car Tax fuel-efficient threshold ($91,387).",
  },
  {
    icon: "calculator",
    title: "Commercial Vehicle & Dual-Cab Exemption",
    desc: "Applying ATO Practical Compliance Guideline (PCG 2018/3) private-use rules to protect dual-cab utes and trade vans from punitive FBT charges.",
  },
  {
    icon: "coin",
    title: "Employee Contribution Method (ECM)",
    desc: "Applying post-tax employee recipient payments to offset fringe benefit taxable values, legally reducing your net business FBT liability to $0.",
  },
  {
    icon: "shield",
    title: "Minor & Infrequent Benefits ($300 Rule)",
    desc: "Structuring staff social functions, corporate gifts, and wellness perks within statutory thresholds to maintain 100% tax exemption.",
  },
  {
    icon: "document",
    title: "Executive Salary Packaging & Novated Leases",
    desc: "Designing tailored remuneration packages for key executives that maximize take-home income while preserving employer payroll margins.",
  },
  {
    icon: "chart",
    title: "Annual FBT Lodgement & STP Reporting",
    desc: "Reconciling Type 1 and Type 2 gross-up rates and correctly capturing Reportable Fringe Benefits Amounts (RFBA) on employee income statements.",
  },
];

const FAQS = [
  {
    q: "When does the Fringe Benefits Tax year run and when is the return due?",
    a: "Unlike the standard financial year, the FBT year runs from 1 April to 31 March. Self-lodgers must lodge and pay by 21 May, but when you lodge through Taxnet as your registered tax agent, your lodgement and payment deadline is automatically extended to 25 June.",
  },
  {
    q: "How does the Electric Vehicle (EV) FBT exemption work?",
    a: "Under the Treasury Laws Amendment (Electric Car Discount) Act, zero or low-emission cars (battery electric and hydrogen fuel cell vehicles) provided to employees or directors are 100% exempt from FBT, provided the first retail price is below the fuel-efficient Luxury Car Tax threshold and the vehicle was first held and used on or after 1 July 2022. This represents thousands in tax savings each year.",
  },
  {
    q: "Are commercial dual-cab utes automatically exempt from FBT?",
    a: "Not automatically. A dual-cab ute is only exempt if private travel is strictly minor, infrequent, and irregular (such as commuting between home and work, with minor incidental detours under 2km). If an employee uses a company ute for extensive personal holiday road trips or towing personal boats, the ATO can disallow the exemption. We prepare compliant vehicle logbooks and declarations.",
  },
  {
    q: "What is the Employee Contribution Method (ECM) and how does it reduce FBT to zero?",
    a: "The ECM allows an employee or director to make a post-tax contribution toward the running costs of a benefit (such as paying fuel or a recipient cash contribution directly to the employer). This payment directly reduces the taxable value of the fringe benefit dollar-for-dollar, entirely eliminating the 47% FBT liability.",
  },
  {
    q: "Why is the FBT rate set at 47%?",
    a: "The FBT rate of 47% mirrors the highest individual marginal tax bracket (including the 2% Medicare levy). Because benefits are grossed up to reflect the pre-tax income required to purchase the perk, unmanaged FBT can easily double the cost of a benefit. Taxnet structures your ledger to prevent these punitive charges.",
  },
];

export default function FringeBenefitsTaxPage() {
  const heroImg = "/taxnet-categories-images/Accounting%20and%20Tax/Fringe%20Benefits%20Tax/hero.jpg";
  const bodyImg1 = "/taxnet-categories-images/Accounting%20and%20Tax/Fringe%20Benefits%20Tax/Consultant_reviewing_records_wit_e6e4c95a.jpg";
  const bodyImg2 = "/taxnet-categories-images/Accounting%20and%20Tax/Fringe%20Benefits%20Tax/Tax_advisor_discussing_with_dire_a244a2c2.jpg";

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
              <span style={{ color: "#C5A869" }}>Fringe Benefits Tax</span>
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
              Fringe Benefits 
              <span
                style={{
                  background: "linear-gradient(135deg, #8A7040, #E5D6B6, #C5A869)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Tax (FBT)
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
                    alt="Taxnet consultant reviewing corporate expense records and vehicle logbooks with client"
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
                    FBT Elimination
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, marginTop: "2px" }}>
                    Shield Your Operating Margin
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
                  Remuneration Optimization
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
                  Why Fringe Benefits Tax Catches Australian Employers Off Guard
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Providing staff perks, company motor vehicles, or taking clients to dinner seems like good business
                  until an unexpected FBT assessment arrives. Because the statutory tax rate is 47% calculated on a grossed-up
                  base, an unmanaged $10,000 fringe benefit can trigger over $9,700 in additional tax.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet reviews your general ledger to categorize meal entertainment correctly, structure employee
                  reimbursements under the Employee Contribution Method, and leverage vehicle logbooks so you pay minimal or
                  zero FBT legally.
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
                      EV Salary Packaging
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Provide new electric cars completely free of FBT liabilities.
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
                      Safe Meal Structuring
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "#5C6B63" }}>
                      Isolate client business dining from employee entertainment.
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
                FBT Optimization Framework
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2rem, 3.4vw, 2.75rem)",
                  color: "#0A0D0B",
                  marginTop: "0.5rem",
                }}
              >
                Strategic Structuring for Australian Employer Fleets & Remuneration
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
                  Fleet Governance
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
                  Operating Cost Method vs Statutory Formula for Vehicles
                </h2>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  Vehicle fringe benefits represent over 70% of all FBT assessments in Australia. Choosing between the
                  Statutory Formula Method (flat 20% base value) and the Operating Cost Method (supported by a valid 12-week
                  logbook) often makes the difference between paying thousands in FBT or paying nothing.
                </p>
                <p style={{ color: "#4A5A50", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Taxnet models both calculation methodologies for every commercial vehicle in your fleet, ensuring you
                  select the most cost-effective method before lodgement.
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
                  Consult an FBT Specialist →
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
                  alt="Taxnet tax advisor discussing executive remuneration and vehicle fleet policies with company director"
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
                FBT Clarifications
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
          serviceName="Fringe Benefits Tax (FBT)"
          title="Eliminate Your Fringe Benefits Tax Exposure"
          subtitle="Structure executive perks and commercial vehicle fleets to slash FBT. Speak with our Melbourne CPA tax advisory team today."
        />
      </main>

      <Footer />
    </>
  );
}

