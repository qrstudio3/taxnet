"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedHeading from "./AnimatedHeading";
/* ─── Service Data Definitions ─── */
interface SubService {
  id: string;
  tag: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  themeColor: string;
  accentBg: string;
  iconType: string;
  overlayLabel: string;
  image: string;
  href: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  items: SubService[];
}

/* ─── Strict Brand Palette: Dark Charcoal/Black (#1C2022) & Forest Green (#0D3E26) ─── */
const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "accounting-tax",
    title: "Accounting & Tax",
    subtitle: "Precision Tax, Compliance & Strategic Advisory",
    shortDesc: "End-to-end accounting solutions engineered to protect wealth, ensure ATO compliance, and accelerate commercial growth.",
    items: [
      {
        id: "full-scope-accounting",
        tag: "Corporate Advisory",
        badge: "Core Essential",
        title: "Full Scope Accounting",
        headline: "Full Scope Business Accounting",
        description: "Comprehensive financial statements, cash flow analytics, profit & loss management, and proactive executive-level advisory for Australian enterprises.",
        highlights: ["Quarterly P&L & Balance Sheet", "Cashflow Forecasting", "Proactive Advisory"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "chart",
        overlayLabel: "Full-scope financial clarity",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/Accountant_consulting_business_o_3a69478d.jpg",
        href: "/accounting-and-tax/business-accounting",
      },
      {
        id: "gst-bas-prep",
        tag: "Compliance & Filing",
        badge: "ATO Certified",
        title: "GST & BAS Lodgements",
        headline: "GST & BAS Preparation",
        description: "Accurate, timely Business Activity Statements and GST reconciliations ensuring maximum input tax credits with zero penalty risk.",
        highlights: ["Quarterly & Monthly BAS", "PAYG Withholding", "Fuel Tax Credits"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "ledger",
        overlayLabel: "Zero penalty lodgements",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/GST-BAS-Preparation/Accountant_preparing_financial_r_9f0cd682.jpg",
        href: "/accounting-and-tax/gst-bas-preparation",
      },
      {
        id: "individual-tax",
        tag: "Personal Taxation",
        badge: "Max Refund",
        title: "Individual Tax Returns",
        headline: "Individual Tax Returns",
        description: "Tailored returns for professionals, investors, and contractors. Maximizing all work deductions, foreign income rules, and investment offsets.",
        highlights: ["Work Deductions Check", "Crypto & Share Portfolios", "Fast ATO Lodgement"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "shield",
        overlayLabel: "Maximise every refund",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Individual%20Tax%20Returns/Tax_consultant_helping_client_wi_9abab800.jpg",
        href: "/accounting-and-tax/individual-tax-returns",
      },
      {
        id: "super-fund-tax",
        tag: "SMSF Governance",
        badge: "Specialist",
        title: "Super Fund Returns",
        headline: "Super Fund Tax Returns",
        description: "Specialized compliance, financial statements, and independent audit coordination for Self-Managed Super Funds (SMSF) to safeguard retirement assets.",
        highlights: ["SMSF Annual Return", "Auditor Collaboration", "Contribution Caps"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "vault",
        overlayLabel: "Protect your retirement wealth",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Super%20Fund%20Tax%20Returns/Accountant_meeting_with_couple_b956daa8.jpg",
        href: "/accounting-and-tax/super-fund-tax-returns",
      },
      {
        id: "tax-planning",
        tag: "Wealth Protection",
        badge: "Strategic",
        title: "Tax Planning & Structuring",
        headline: "Tax Planning",
        description: "Proactive pre-30 June tax planning frameworks, trust distributions, and optimal entity structures to legally minimize long-term tax liabilities.",
        highlights: ["Pre-June Review", "Trust Distributions", "Capital Gains Strategies"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "blueprint",
        overlayLabel: "Legally minimise your tax",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Tax%20Planning/Tax_advisor_analyzing_financial_247bc4d4.jpg",
        href: "/accounting-and-tax/tax-planning",
      },
      {
        id: "business-advice",
        tag: "Commercial Growth",
        badge: "Executive",
        title: "Strategic Business Advice",
        headline: "Business Advice",
        description: "Objective financial evaluation, KPI benchmarking, business valuation modeling, and commercial roadmaps to elevate your market standing.",
        highlights: ["Financial Benchmarking", "Growth Roadmaps", "Valuation Analysis"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "compass",
        overlayLabel: "Accelerate your growth",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Advice/Advisor_consulting_entrepreneur_a37a99dd.jpg",
        href: "/accounting-and-tax/business-advice",
      },
      {
        id: "company-asic",
        tag: "Corporate Governance",
        badge: "ASIC Registered",
        title: "Company & ASIC Services",
        headline: "Company & ASIC Services",
        description: "Company secretarial support, new entity formations, registered office hosting, annual ASIC reviews, and director identity compliance.",
        highlights: ["Turnkey Company Setup", "Annual ASIC Lodgement", "Director ID & Share Registry"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "certificate",
        overlayLabel: "Full ASIC compliance covered",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Company%20ASIC%20Services/Consultant_meeting_with_entrepre_50c2fa66.jpg",
        href: "/accounting-and-tax/company-asic-services",
      },
      {
        id: "fbt",
        tag: "Payroll & Perks",
        badge: "Compliance",
        title: "Fringe Benefits Tax",
        headline: "Fringe Benefits Tax (FBT)",
        description: "Review of employer-provided benefits, salary sacrifice packages, motor vehicle calculations, and exemption optimization to prevent costly ATO audits.",
        highlights: ["Salary Packaging Check", "Vehicle Logbook Method", "Exempt Minor Benefits"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "percent",
        overlayLabel: "Smart benefit structuring",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Fringe%20Benefits%20Tax/Tax_advisor_discussing_with_dire_a244a2c2.jpg",
        href: "/accounting-and-tax/fringe-benefits-tax",
      },
      {
        id: "property-investment-tax",
        tag: "Real Estate & CGT",
        badge: "Investor Focus",
        title: "Property & Investment Tax",
        headline: "Property & Investment Tax",
        description: "Negative gearing structuring, capital gains tax (CGT) discount calculations, foreign investment compliance, and depreciation schedule integration.",
        highlights: ["Negative Gearing Maximizer", "Division 40/43 Depreciation", "CGT Main Residence Rules"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "building",
        overlayLabel: "Maximise property returns",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Property%20Investment%20Tax/Advisor_reviewing_property_with_7fb17636.jpg",
        href: "/accounting-and-tax/property-investment-tax",
      },
    ],
  },
  {
    id: "mortgage-broking",
    title: "Mortgage Broking",
    subtitle: "Strategic Finance, Home Loans & Commercial Lending",
    shortDesc: "Access to 40+ Australian lenders with bespoke loan structuring to secure competitive rates and maximize borrowing capacity.",
    items: [
      {
        id: "first-home",
        tag: "Home Ownership",
        badge: "Govt Schemes",
        title: "First Home Buyer",
        headline: "Buying Your First Home",
        description: "Step-by-step guidance from pre-approval to settlement. Unlock First Home Guarantee (FHG) 5% deposit schemes and state stamp duty concessions.",
        highlights: ["5% Deposit Guarantee", "Stamp Duty Concessions", "Free Pre-Approval"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "home",
        overlayLabel: "Get your keys sooner",
        image: "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/Broker_consulting_couple_on_mort_34d7a579.jpg",
        href: "/mortgage-broking/first-home-buyer",
      },
      {
        id: "next-home",
        tag: "Upsizing & Relocating",
        badge: "Strategic Move",
        title: "Buying Your Next Home",
        headline: "Buying Your Next Home",
        description: "Unlock equity in your existing home to upsize or relocate. Seamlessly coordinate purchase and sale timelines with tailored finance options.",
        highlights: ["Equity Release", "Bridging Solutions", "Simultaneous Settlements"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "key",
        overlayLabel: "Your perfect next chapter",
        image: "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20Next%20Home/Family_exploring_new_home_d12c6415.jpg",
        href: "/mortgage-broking/next-home-buyer",
      },
      {
        id: "refinancing",
        tag: "Rate Reduction",
        badge: "Save $1,000s",
        title: "Refinance & Debt Consolidation",
        headline: "Refinancing & Debt Consolidation",
        description: "Compare your current rate against 40+ lenders. Consolidate personal loans, credit cards, and car debt into one manageable, lower repayment.",
        highlights: ["40+ Bank Comparison", "Cashback Incentive Review", "Reduced Monthly Outgoings"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "refresh",
        overlayLabel: "Save thousands on your loan",
        image: "/taxnet-categories-images/Mortgage%20Broking/Refinancing%20Debt%20Consolidation/Advisor_reviewing_mortgage_with_7c45afd4.jpg",
        href: "/mortgage-broking/refinancing-debt-consolidation",
      },
      {
        id: "investment-property-loans",
        tag: "Wealth Creation",
        badge: "Investor Choice",
        title: "Investment Property Loans",
        headline: "Investment Property Loans",
        description: "Smart loan structuring with interest-only options and cross-collateralization safeguards to grow your Australian property portfolio sustainably.",
        highlights: ["Interest-Only Structuring", "Stand-Alone Security", "Tax-Deductible Debt"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "trend",
        overlayLabel: "Grow your portfolio",
        image: "/taxnet-categories-images/Mortgage%20Broking/Investment%20Property%20Loans/Mortgage_broker_consulting_prope_c4e3922b.jpg",
        href: "/mortgage-broking/investment-property-loans",
      },
      {
        id: "land-construction",
        tag: "Custom Builds",
        badge: "Progress Draws",
        title: "Land & Construction",
        headline: "Land & Construction Loans",
        description: "Specialized progressive drawdown finance for vacant land acquisition, knockdown-rebuilds, and turnkey custom residential architectural builds.",
        highlights: ["Progress Payment Invoicing", "Fixed Price Contracts", "Interest Only While Building"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "crane",
        overlayLabel: "Build your dream home",
        image: "/taxnet-categories-images/Mortgage%20Broking/Land%20and%20Construction%20Loans/Broker_reviewing_construction_pl_2e98e204.jpg",
        href: "/mortgage-broking/land-construction-loans",
      },
      {
        id: "business-loans",
        tag: "Commercial Credit",
        badge: "Working Capital",
        title: "Commercial & Business Loans",
        headline: "Business Loans",
        description: "Secured and unsecured commercial borrowing, lines of credit, and commercial property mortgages up to $10M+ to fund capital expansion.",
        highlights: ["Commercial Property Mortgages", "Unsecured Working Capital", "Fast-Track Approval"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "briefcase",
        overlayLabel: "Fuel your business growth",
        image: "/taxnet-categories-images/Mortgage%20Broking/Business%20Loans/Finance_advisor_meeting_business_fad494fe.jpg",
        href: "/mortgage-broking/business-loans",
      },
      {
        id: "asset-finance",
        tag: "Vehicle & Plant",
        badge: "Same-Day Review",
        title: "Personal, Car & Equipment",
        headline: "Personal, Car & Equipment Finance",
        description: "Competitive chattel mortgages, novated leases, and industrial plant finance to equip your enterprise without depleting working cash reserves.",
        highlights: ["Chattel Mortgage", "Novated Car Leases", "Tax-Effective Depreciation"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "truck",
        overlayLabel: "Drive away today",
        image: "/taxnet-categories-images/Mortgage%20Broking/Personal%20Car%20Equipment%20Finance/Business_owner_inspecting_indust_239dc354.jpg",
        href: "/mortgage-broking/personal-car-equipment-finance",
      },
      {
        id: "bridging-loans",
        tag: "Gap Funding",
        badge: "No Double Mortgage",
        title: "Strategic Bridging Loans",
        headline: "Bridging Loans",
        description: "Buy your dream property before selling your current one. Flexible bridging finance giving you up to 12 months grace to secure top market price.",
        highlights: ["Buy Before Selling", "Capitalized Interest", "Up to 12 Months Flexibility"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "bridge",
        overlayLabel: "Buy before you sell",
        image: "/taxnet-categories-images/Mortgage%20Broking/Bridging%20Loans/Broker_reviewing_documents_with_1bc068cc.jpg",
        href: "/mortgage-broking/bridging-loans",
      },
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    subtitle: "Precision Records, Payroll & Real-Time Financial Visibility",
    shortDesc: "Clean, compliant books managed by certified Xero & MYOB advisors so you never miss a deduction or deadline.",
    items: [
      {
        id: "smb-bookkeeping",
        tag: "Daily Operations",
        badge: "Always Current",
        title: "Small Business Bookkeeping",
        headline: "Small Business Bookkeeping",
        description: "Flawless day-to-day transaction coding, expense tracking, and monthly reconciliation ensuring your books are accurate and up to date every week.",
        highlights: ["Weekly Transaction Coding", "Expense Categorization", "Monthly Balanced Ledgers"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "book",
        overlayLabel: "Books balanced every week",
        image: "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/Bookkeeper_organizing_financial_1e11db7f.jpg",
        href: "/small-business-bookkeeping",
      },
      {
        id: "bank-rec",
        tag: "Reconciliation",
        badge: "100% Balanced",
        title: "Bank & Ledger Reconciliation",
        headline: "Bank Reconciliation & BAS-Ready",
        description: "Zero-discrepancy bank feed clearing, credit card verification, and meticulous balance sheet reconciliations ready for your accountant or BAS lodgement.",
        highlights: ["Daily Bank Feeds", "Credit Card Matching", "Audit-Proof Ledgers"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "checkcircle",
        overlayLabel: "Zero discrepancies, always",
        image: "/taxnet-categories-images/Bookkeeping/Bank%20Reconciliation%20and%20BAS-Ready%20Records/Bookkeeper_consulting_business_o_4a9fba8d.jpg",
        href: "/small-business-bookkeeping/bank-reconciliation",
      },
      {
        id: "payroll-stp",
        tag: "Workforce",
        badge: "STP Phase 2",
        title: "Payroll & STP Compliance",
        headline: "Payroll",
        description: "Accurate weekly, fortnightly, or monthly payroll processing, superannuation clearing house transfers, and STP Phase 2 ATO compliance.",
        highlights: ["STP Phase 2 Direct ATO", "Super Guarantee (11.5%)", "Leave Accrual Tracking"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "users",
        overlayLabel: "Pay runs done right",
        image: "/taxnet-categories-images/Bookkeeping/Payroll/Professionals_reviewing_payroll_2577f172.jpg",
        href: "/small-business-bookkeeping/payroll",
      },
      {
        id: "accounts-management",
        tag: "Debtor & Creditor",
        badge: "AP / AR",
        title: "Accounts Management",
        headline: "Accounts Management",
        description: "Systematic debtor follow-up, supplier bill verification, aged payables tracking, and structured cash approvals to protect vendor relationships and credit rating.",
        highlights: ["Accounts Receivable", "Accounts Payable Approval", "Aged Debt Recovery"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "certificate",
        overlayLabel: "Streamline payables & receivables",
        image: "/taxnet-categories-images/Bookkeeping/Invoicing%20and%20Accounts%20Management/Managers_reviewing_financial_rep_1d46b3e0.jpg",
        href: "/small-business-bookkeeping/accounts-management",
      },
      {
        id: "invoicing",
        tag: "Cash Velocity",
        badge: "Fast Payments",
        title: "Automated Invoicing",
        headline: "Automated Invoicing",
        description: "Accelerate cash collection with professional, branded digital invoicing, automated payment reminders, and integrated payment gateway links.",
        highlights: ["Automated Reminders", "Pay-Now Buttons", "Zero Payment Lag"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "invoice",
        overlayLabel: "Get paid on time, every time",
        image: "/taxnet-categories-images/Bookkeeping/Invoicing%20and%20Accounts%20Management/Woman_reviewing_invoice_at_works_a5ae91ad.jpg",
        href: "/small-business-bookkeeping/invoicing",
      },
      {
        id: "cash-flow-budget",
        tag: "Financial Control",
        badge: "Predictive",
        title: "Budgeting & Cash Flow",
        headline: "Budgeting & Cash Flow",
        description: "Dynamic 13-week rolling cash forecasts, variance tracking, and scenario modeling so you never encounter unexpected cash shortages.",
        highlights: ["13-Week Cash Projections", "Variance Analysis", "Working Capital Insights"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "graph",
        overlayLabel: "Predict & control cash flow",
        image: "/taxnet-categories-images/Bookkeeping/Budgeting%20and%20Cash%20Flow/Consultant_and_owners_planning_b_e32e868c.jpg",
        href: "/small-business-bookkeeping/budgeting-cash-flow",
      },
      {
        id: "cloud-setup",
        tag: "Software Systems",
        badge: "Certified Partner",
        title: "Cloud Accounting Set-Up",
        headline: "Cloud Accounting Set-Up",
        description: "Seamless migration and custom configuration of Xero, MYOB, or QuickBooks, tailored chart of accounts, and automated receipt capture tools.",
        highlights: ["Xero & MYOB Setup", "Zero Data Loss Migration", "Receipt Bank & Dext Sync"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "cloud",
        overlayLabel: "Seamless cloud migration",
        image: "/taxnet-categories-images/Bookkeeping/Cloud%20Accounting%20Set-Up/Man_reviewing_financials_on_laptop_81b34cc9.jpg",
        href: "/small-business-bookkeeping/cloud-accounting",
      },
    ],
  },
  {
    id: "software-we-use",
    title: "Software We Use",
    subtitle: "Certified Cloud Platforms & Ecosystem Integrations",
    shortDesc: "Official certified partnerships across Australia's leading cloud accounting platforms with tailored workflows and real-time reporting.",
    items: [
      {
        id: "xero",
        tag: "Cloud Ecosystem",
        badge: "Gold Partner",
        title: "Xero Cloud Accounting",
        headline: "Xero",
        description: "Seamless, beautiful cloud accounting with automated bank feeds, real-time invoicing, single touch payroll, and 1,000+ ecosystem integrations for growing businesses.",
        highlights: ["Real-Time Bank Feeds", "Automated Invoicing", "1,000+ App Connections"],
        themeColor: "#0D3E26",
        accentBg: "#114B30",
        iconType: "cloud",
        overlayLabel: "Certified Xero setup & training",
        image: "/taxnet-categories-images/Software%20We%20Use/Xero/Accountant_consulting_with_busin_2ce35d4f.jpg",
        href: "/software-we-use/xero",
      },
      {
        id: "myob",
        tag: "Enterprise Grade",
        badge: "Certified Partner",
        title: "MYOB Business Solutions",
        headline: "MYOB",
        description: "Powerful Australian business management platform engineered for inventory control, complex enterprise payroll, multi-entity reporting, and STP Phase 2 compliance.",
        highlights: ["Complex Payroll Management", "Inventory Control", "Multi-Entity Reporting"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "briefcase",
        overlayLabel: "End-to-end MYOB management",
        image: "/taxnet-categories-images/Software%20We%20Use/MYOB/Accountant_consulting_business_o_76bfb758.jpg",
        href: "/software-we-use/myob",
      },
      {
        id: "quickbooks",
        tag: "Smart Automation",
        badge: "ProAdvisor",
        title: "QuickBooks Online",
        headline: "QuickBooks",
        description: "Intuitive cash flow monitoring, instant mobile receipt snapping, automated mileage tracking, and streamlined tax preparation for sole traders and SMBs.",
        highlights: ["Mobile Expense Snapping", "Live Cash Flow Dashboard", "Multi-Currency Support"],
        themeColor: "#114B30",
        accentBg: "#165E3D",
        iconType: "trend",
        overlayLabel: "QuickBooks ProAdvisor setup",
        image: "/taxnet-categories-images/Software%20We%20Use/QuickBooks/Accountant_reviewing_financial_r_46f66d7c.jpg",
        href: "/software-we-use/quickbooks",
      },
      {
        id: "cloud-addons",
        tag: "Ecosystem Sync",
        badge: "App Integration",
        title: "Cloud Accounting Add-Ons",
        headline: "Cloud Accounting Add-Ons",
        description: "Supercharge your tech stack with Dext, Receipt Bank, Stripe, Shopify, and Deputy integrations for complete end-to-end workflow automation.",
        highlights: ["Dext / Receipt Bank OCR", "Shopify & Stripe Sync", "Inventory & POS Integrations"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "refresh",
        overlayLabel: "Automate your workflows",
        image: "/taxnet-categories-images/Software%20We%20Use/Cloud%20Accounting%20Add-Ons/Man_configuring_business_softwar_ec0afc8b.jpg",
        href: "/software-we-use/cloud-accounting-add-ons",
      },
    ],
  },
];

/* ─── Service Card Visual Cover ─── */
function CardPosterArt({
  title,
  image,
}: {
  title: string;
  image: string;
  overlayLabel?: string;
  href?: string;
}) {
  return (
    <div className="card-poster-wrapper">
      <img
        src={image}
        alt={title}
        className="card-poster-img"
        draggable={false}
      />
    </div>
  );
}

/* ─── Main ServicesSection Component ─── */
export default function ServicesSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("accounting-tax");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragCursorVisible, setDragCursorVisible] = useState<boolean>(false);
  const [hoveringCard, setHoveringCard] = useState<boolean>(false);

  const currentCategory = SERVICES_DATA.find((c) => c.id === activeTab) || SERVICES_DATA[0];

  const trackContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Click handler for entire card
  const handleCardClick = (href: string) => {
    if (state.current.hasMovedSignificantly) {
      return;
    }
    router.push(href);
  };

  // Physics animation state
  const state = useRef({
    currentX: 0,
    targetX: 0,
    minX: 0,
    maxX: 0,
    startX: 0,
    dragStartX: 0,
    isPointerDown: false,
    lastPointerX: 0,
    velocity: 0,
    lastTime: 0,
    hasMovedSignificantly: false,
    animFrameId: 0,
    cursorTargetX: 0,
    cursorTargetY: 0,
    cursorCurrentX: 0,
    cursorCurrentY: 0,
  });

  // Calculate carousel boundaries
  const updateBoundaries = useCallback(() => {
    if (!trackContainerRef.current || !trackRef.current) return;
    const containerW = trackContainerRef.current.clientWidth;
    const contentW = trackRef.current.scrollWidth;
    const maxScroll = Math.max(0, contentW - containerW + 40);
    state.current.minX = -maxScroll;
    state.current.maxX = 0;
  }, []);

  // Recalculate on resize and tab switch
  useEffect(() => {
    updateBoundaries();
    window.addEventListener("resize", updateBoundaries);
    return () => window.removeEventListener("resize", updateBoundaries);
  }, [updateBoundaries, activeTab]);

  // Reset scroll smoothly when switching tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    state.current.targetX = 0;
    state.current.velocity = 0;
  };

  // 3D Perspective update for cards
  const applyCardTransforms = useCallback(() => {
    if (!trackRef.current || !trackContainerRef.current) return;
    const containerRect = trackContainerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const cards = trackRef.current.querySelectorAll<HTMLElement>(".service-card-item");

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distanceFromCenter = (cardCenter - containerCenter) / (containerRect.width / 2);

      // Clamp distance between -1.5 and 1.5
      const clampedDist = Math.max(-1.5, Math.min(1.5, distanceFromCenter));

      // Calculate 3D perspective rotation (Y-axis tilt, scaling, z-translation)
      const rotateY = clampedDist * -14;
      const scale = Math.max(0.92, 1 - Math.abs(clampedDist) * 0.08);
      const translateZ = Math.max(-100, -Math.abs(clampedDist) * 80);

      // Use separate `perspective` property instead of perspective() inside transform
      // — Edge sometimes fails pointer-event hit-testing with inline perspective().
      card.style.perspective = "1200px";
      card.style.transform = `rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)}) translateZ(${translateZ.toFixed(1)}px)`;
      card.style.transformOrigin = "center center";
    });
  }, []);

  // Main RAF Physics Engine (Inertia + Smooth Spring Lerp)
  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;
      const s = state.current;

      if (!s.isPointerDown) {
        // Friction glide
        s.targetX += s.velocity;
        s.velocity *= 0.92;

        // Soft bounce boundaries
        if (s.targetX > s.maxX) {
          s.targetX += (s.maxX - s.targetX) * 0.15;
          s.velocity *= 0.5;
        } else if (s.targetX < s.minX) {
          s.targetX += (s.minX - s.targetX) * 0.15;
          s.velocity *= 0.5;
        }
      }

      // Smooth lerp toward target position
      s.currentX += (s.targetX - s.currentX) * 0.14;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${s.currentX.toFixed(2)}px, 0, 0)`;
        applyCardTransforms();
      }

      // Smooth custom cursor follow
      s.cursorCurrentX += (s.cursorTargetX - s.cursorCurrentX) * 0.22;
      s.cursorCurrentY += (s.cursorTargetY - s.cursorCurrentY) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${s.cursorCurrentX}px, ${s.cursorCurrentY}px, 0) translate(-50%, -50%) scale(${s.isPointerDown ? 0.9 : 1})`;
      }

      s.animFrameId = requestAnimationFrame(tick);
    };

    state.current.animFrameId = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(state.current.animFrameId);
    };
  }, [applyCardTransforms]);

  /* ─── Pointer Event Handlers for Dragging ─── */
  const onPointerDown = (e: React.PointerEvent) => {
    // Only handle primary button (left click / single touch)
    if (e.button !== 0) return;
    const s = state.current;
    s.isPointerDown = true;
    setIsDragging(true);
    s.startX = e.clientX;
    s.dragStartX = s.targetX;
    s.lastPointerX = e.clientX;
    s.lastTime = performance.now();
    s.velocity = 0;
    s.hasMovedSignificantly = false;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = state.current;

    // Track cursor for neon drag badge
    if (trackContainerRef.current) {
      const rect = trackContainerRef.current.getBoundingClientRect();
      s.cursorTargetX = e.clientX - rect.left;
      s.cursorTargetY = e.clientY - rect.top;
    }

    if (!s.isPointerDown) return;

    const deltaX = e.clientX - s.startX;
    if (Math.abs(deltaX) > 6) {
      if (!s.hasMovedSignificantly) {
        s.hasMovedSignificantly = true;
        // Only capture pointer after confirming a real drag — this prevents
        // Edge from stealing hover/click events on non-drag interactions
        try {
          (trackContainerRef.current as HTMLElement)?.setPointerCapture(e.pointerId);
        } catch {
          // Ignored — some browsers/scenarios reject pointer capture
        }
      }
    }

    const now = performance.now();
    const dt = Math.max(1, now - s.lastTime);
    const instantaneousVel = ((e.clientX - s.lastPointerX) / dt) * 16;
    s.velocity = s.velocity * 0.6 + instantaneousVel * 0.4;
    s.lastPointerX = e.clientX;
    s.lastTime = now;

    // Direct drag with boundary rubber-band resistance
    let newTarget = s.dragStartX + deltaX;
    if (newTarget > s.maxX) {
      newTarget = s.maxX + (newTarget - s.maxX) * 0.3;
    } else if (newTarget < s.minX) {
      newTarget = s.minX + (newTarget - s.minX) * 0.3;
    }
    s.targetX = newTarget;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const s = state.current;
    const wasDragging = s.hasMovedSignificantly;
    s.isPointerDown = false;
    setIsDragging(false);

    // Only release capture if we actually captured
    if (wasDragging) {
      try {
        (trackContainerRef.current as HTMLElement)?.releasePointerCapture(e.pointerId);
      } catch {
        // Ignored — may not have been captured
      }
    }

    // Give Edge's event pipeline more time to settle before resetting the
    // drag guard. 60ms was too short for Edge; 200ms is safe for all browsers.
    setTimeout(() => {
      s.hasMovedSignificantly = false;
    }, 200);
  };

  // Step Left / Right Button Handlers
  const scrollStep = (direction: "left" | "right") => {
    const step = 360;
    const s = state.current;
    if (direction === "left") {
      s.targetX = Math.min(s.maxX, s.targetX + step);
    } else {
      s.targetX = Math.max(s.minX, s.targetX - step);
    }
  };

  return (
    <section
      id="services"
      style={{
        position: "relative",
        backgroundColor: "var(--color-bg)",
        color: "var(--color-primary)",
        paddingTop: "5.5rem",
        paddingBottom: "7rem",
        overflow: "hidden",
      }}
    >
      <style>{`
        .service-card-item {
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
          background-color: var(--color-surface) !important;
          border-color: var(--color-border) !important;
        }
        .service-card-item:hover {
          background-color: #0F261B !important;
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 30px 60px rgba(13, 62, 38, 0.35), 0 0 0 1px #C5A869 !important;
          border-color: transparent !important;
        }
        .service-card-item:hover .sc-tag,
        .service-card-item:hover .sc-headline,
        .service-card-item:hover .sc-counter {
          color: #F9F9F6 !important;
        }
        .service-card-item:hover .sc-badge {
          background-color: rgba(197, 168, 105, 0.15) !important;
          color: #C5A869 !important;
        }
        .service-card-item:hover .sc-link {
          color: #C5A869 !important;
          transform: translateX(4px) !important;
        }
        .service-card-item:hover .sc-footer {
          border-color: rgba(197, 168, 105, 0.3) !important;
        }
        /* Service image clean presentation without hover distortion */
        .card-poster-img {
          transform: none !important;
          filter: none !important;
        }
        .service-card-item:hover .card-poster-img {
          transform: none !important;
          filter: none !important;
        }
      `}</style>
      {/* ─── ARCHITECTURAL DISPLAY TYPOGRAPHY IN FOREST GREEN & MONETY FONT ─── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0.6rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          textAlign: "center",
          fontFamily: "var(--font-monety), serif",
          fontSize: "clamp(6rem, 18vw, 16rem)",
          fontWeight: 400,
          letterSpacing: "-0.01em",
          color: "var(--color-secondary)",
          opacity: 0.12,
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 0.85,
          zIndex: 0,
          whiteSpace: "nowrap",
        }}
      >
        Financial
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* ─── SECTION HEADER ─── */}
        <AnimatedHeading>
          <div style={{ maxWidth: "860px", marginBottom: "3rem" }}>
            {/* Section Main Title with Monety font */}
            <h2
              style={{
                fontFamily: "var(--font-monety), serif",
                fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "var(--color-secondary)",
                marginBottom: "1.25rem",
              }}
            >
              Comprehensive Financial Solutions,{" "}
              <span style={{ color: "var(--color-primary)" }}>Engineered for Growth.</span>
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                lineHeight: 1.65,
                color: "var(--color-text-secondary)",
                maxWidth: "720px",
              }}
            >
              Four multidisciplinary pillars delivering elite compliance, wealth acceleration, lending strategy, and cloud accounting systems for Australian businesses, property investors, and individuals.
            </p>
          </div>
        </AnimatedHeading>

        {/* ─── 4 MAIN SERVICE TABS ─── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: "1.25rem",
          }}
        >
          {/* Tab Switcher Pills */}
          <div style={{ maxWidth: "100%" }}>
            <div style={{ position: "relative", maxWidth: "100%" }}>
              <style>{`
                div[role="tablist"]::-webkit-scrollbar {
                  display: none;
                }
                .tab-fade-edge {
                  position: absolute;
                  right: -1px;
                  top: 0;
                  bottom: 0;
                  width: 48px;
                  background: linear-gradient(to right, transparent, var(--color-bg));
                  pointer-events: none;
                  display: none;
                  border-radius: 0 9999px 9999px 0;
                }
                .swipe-hint {
                  display: none;
                  align-items: center;
                  gap: 4px;
                  font-size: 0.75rem;
                  font-weight: 600;
                  color: var(--color-text-muted);
                  margin-top: 0.5rem;
                  margin-left: 0.5rem;
                }
                .swipe-hint svg {
                  animation: swipeBounce 1.5s infinite;
                }
                @keyframes swipeBounce {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(4px); }
                }
                @media (max-width: 900px) {
                  .tab-fade-edge { display: block; }
                  .swipe-hint { display: flex; }
                }
              `}</style>
              <div
                role="tablist"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "6px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid var(--color-border)",
                  maxWidth: "100%",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none", // Hide scrollbar Firefox
                  position: "relative",
                  zIndex: 1,
                }}
              >
            {SERVICES_DATA.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(tab.id)}
                  style={{
                    padding: "0.625rem 1.35rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.9375rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "-0.01em",
                    fontFamily: "var(--font-sans)",
                    transition: "all 240ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    backgroundColor: isActive ? "var(--color-secondary)" : "transparent",
                    color: isActive ? "#FFFFFF" : "var(--color-text-secondary)",
                    boxShadow: isActive ? "0 4px 14px rgba(13, 62, 38, 0.22)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <span>{tab.title}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "2px 7px",
                      borderRadius: "12px",
                      backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                      color: isActive ? "#fff" : "var(--color-text-muted)",
                    }}
                  >
                    {tab.items.length}
                  </span>
                </button>
              );
            })}
              </div>
              <div className="tab-fade-edge" style={{ zIndex: 2 }} />
            </div>
            <div className="swipe-hint">
              Swipe to see more 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>

          {/* Navigation Controls: Arrows */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontSize: "0.84rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Scroll to explore
            </span>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => scrollStep("left")}
                aria-label="Scroll left"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-secondary)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-surface)";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
              >
                ←
              </button>

              <button
                onClick={() => scrollStep("right")}
                aria-label="Scroll right"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 150ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-secondary)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-surface)";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DRAGGABLE GALLERY VIEWPORT ─── */}
      <div
        ref={trackContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={(e) => {
          // Only intercept horizontal wheel events or shift+scroll.
          // Let vertical-only scrolling pass through to the page for Edge/Firefox.
          if (Math.abs(e.deltaX) > 2 || (e.shiftKey && Math.abs(e.deltaY) > 2)) {
            e.preventDefault();
            const delta = Math.abs(e.deltaX) > 2 ? e.deltaX : e.deltaY;
            state.current.targetX = Math.max(state.current.minX, Math.min(state.current.maxX, state.current.targetX - delta * 1.2));
          }
        }}
        onMouseEnter={() => setDragCursorVisible(true)}
        onMouseLeave={() => setDragCursorVisible(false)}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          cursor: isDragging ? "grabbing" : hoveringCard ? "pointer" : "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          touchAction: "pan-y",
          msTouchAction: "pan-y",
          paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))",
          paddingRight: "2rem",
          paddingTop: "1.5rem",
          paddingBottom: "2rem",
        } as React.CSSProperties}
      >
        {/* Carousel Moving Track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "2rem",
            width: "max-content",
            willChange: "transform",
            /* Removed transformStyle: preserve-3d — causes pointer-event bugs in Edge */
          }}
        >
          {currentCategory.items.map((sub, index) => (
            <div
              key={sub.id}
              className="service-card-item"
              onClick={() => handleCardClick(sub.href)}
              onMouseEnter={() => setHoveringCard(true)}
              onMouseLeave={() => setHoveringCard(false)}
              onPointerEnter={() => setHoveringCard(true)}
              onPointerLeave={() => setHoveringCard(false)}
              style={{
                width: "320px",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                borderRadius: "20px",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                padding: "1rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                WebkitTransition: "box-shadow 250ms ease, border-color 250ms ease",
                transition: "box-shadow 250ms ease, border-color 250ms ease",
                cursor: "pointer",
              } as React.CSSProperties}
            >
              {/* Top Tag & Badge */}
              <div
                className="sc-header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.25rem 0.5rem 0.75rem 0.5rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  transition: "color 0.4s ease",
                }}
              >
                <span className="sc-tag" style={{ transition: "color 0.4s ease" }}>{sub.tag}</span>
                <span
                  className="sc-badge"
                  style={{
                    backgroundColor: "rgba(13, 62, 38, 0.08)",
                    color: "var(--color-secondary)",
                    padding: "2px 8px",
                    borderRadius: "6px",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    transition: "all 0.4s ease",
                  }}
                >
                  {sub.badge}
                </span>
              </div>

              {/* Service Card Visual Illustration with animated hover overlay */}
              <CardPosterArt
                title={sub.title}
                image={sub.image}
                overlayLabel={sub.overlayLabel}
                href={sub.href}
              />

              {/* Lower Content Section */}
              <div
                style={{
                  padding: "1.25rem 0.5rem 0.5rem 0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="sc-headline"
                    style={{
                      fontFamily: "var(--font-monety), serif",
                      fontSize: "1.45rem",
                      fontWeight: 400,
                      lineHeight: 1.25,
                      color: "var(--color-primary)",
                      marginBottom: "1.5rem",
                      letterSpacing: "-0.01em",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {sub.headline}
                  </h3>
                </div>

                {/* Card Action Link */}
                <div
                  className="sc-footer"
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "border-color 0.4s ease",
                  }}
                >
                  <Link
                    href={sub.href}
                    className="sc-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--color-secondary)",
                      transition: "all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
                      textDecoration: "none",
                    }}
                    onClick={(e) => {
                      if (state.current.hasMovedSignificantly) {
                        e.preventDefault();
                      }
                      e.stopPropagation();
                    }}
                  >
                    <span>Explore Service</span>
                    <span>→</span>
                  </Link>

                  <span
                    className="sc-counter"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      transition: "color 0.4s ease",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")} / {String(currentCategory.items.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
