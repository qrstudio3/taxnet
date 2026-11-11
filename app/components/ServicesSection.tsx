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
    subtitle: "Tax Compliance, Planning & Business Advisory",
    shortDesc: "Comprehensive accounting solutions to keep you fully compliant and support your business growth.",
    items: [
      {
        id: "full-scope-accounting",
        tag: "Business Accounting",
        badge: "",
        title: "Full Scope Accounting",
        headline: "Full Scope Business Accounting",
        description: "Complete financial statements, cash flow reviews, and ongoing advisory for Australian companies, trusts, and sole traders.",
        highlights: ["P&L & Balance Sheet", "Cash Flow Reviews", "Proactive Guidance"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "chart",
        overlayLabel: "Full-scope financial clarity",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Accounting%20Consultation/Accountant_consulting_business_o_3a69478d.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "gst-bas-prep",
        tag: "BAS & GST",
        badge: "",
        title: "GST & BAS Lodgements",
        headline: "GST & BAS Preparation",
        description: "Accurate, timely Business Activity Statements and GST reconciliations lodged on schedule with the ATO.",
        highlights: ["Quarterly & Monthly BAS", "PAYG Withholding", "Input Tax Credits"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "ledger",
        overlayLabel: "Accurate ATO lodgements",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/GST-BAS-Preparation/Accountant_preparing_financial_r_9f0cd682.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "individual-tax",
        tag: "Tax Returns",
        badge: "",
        title: "Individual Tax Returns",
        headline: "Individual Tax Returns",
        description: "Tailored returns for professionals, investors, and contractors. Proper reporting of work deductions and investment income.",
        highlights: ["Allowable Deductions", "Investment Income", "Prompt ATO Lodgement"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "shield",
        overlayLabel: "Accurate personal tax",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Individual%20Tax%20Returns/Tax_consultant_helping_client_wi_9abab800.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "super-fund-tax",
        tag: "SMSF",
        badge: "",
        title: "Super Fund Returns",
        headline: "Super Fund Tax Returns",
        description: "Specialized compliance, financial statements, and independent audit coordination for Self-Managed Super Funds.",
        highlights: ["SMSF Annual Return", "Auditor Collaboration", "Compliance Checks"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "vault",
        overlayLabel: "SMSF compliance",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Super%20Fund%20Tax%20Returns/Accountant_meeting_with_couple_b956daa8.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "tax-planning",
        tag: "Tax Structuring",
        badge: "",
        title: "Tax Planning & Structuring",
        headline: "Tax Planning",
        description: "We review your position before 30 June and help you structure things properly, so there are no surprises at tax time.",
        highlights: ["Pre-June Review", "Trust Distributions", "Entity Structuring"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "blueprint",
        overlayLabel: "Proactive tax planning",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Tax%20Planning/Tax_advisor_analyzing_financial_247bc4d4.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "business-advice",
        tag: "Advisory",
        badge: "",
        title: "Strategic Business Advice",
        headline: "Business Advice",
        description: "Objective financial evaluation, cash flow roadmaps, and practical commercial guidance to support your business decisions.",
        highlights: ["Financial Reviews", "Growth Roadmaps", "Cash Flow Planning"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "compass",
        overlayLabel: "Clear commercial direction",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Business%20Advice/Advisor_consulting_entrepreneur_a37a99dd.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "company-asic",
        tag: "ASIC Compliance",
        badge: "",
        title: "Company & ASIC Services",
        headline: "Company & ASIC Services",
        description: "Company registrations, annual ASIC review lodgements, registered office hosting, and corporate changes.",
        highlights: ["Company Formations", "Annual ASIC Lodgement", "Corporate Registry"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "certificate",
        overlayLabel: "Corporate governance",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Company%20ASIC%20Services/Consultant_meeting_with_entrepre_50c2fa66.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "fbt",
        tag: "FBT",
        badge: "",
        title: "Fringe Benefits Tax",
        headline: "Fringe Benefits Tax (FBT)",
        description: "FBT return lodgements, salary sacrifice packaging reviews, and compliant perk structuring for employers.",
        highlights: ["Salary Packaging Check", "Vehicle Logbook Review", "FBT Return Lodgement"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "percent",
        overlayLabel: "FBT compliance",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Fringe%20Benefits%20Tax/Tax_advisor_discussing_with_dire_a244a2c2.jpg",
        href: "/accounting-and-tax",
      },
      {
        id: "property-investment-tax",
        tag: "Property",
        badge: "",
        title: "Property & Investment Tax",
        headline: "Property & Investment Tax",
        description: "Rental property tax schedules, capital gains tax calculations, and investment structure advice.",
        highlights: ["Rental Property Schedules", "Depreciation Claims", "Capital Gains Guidance"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "building",
        overlayLabel: "Property tax clarity",
        image: "/taxnet-categories-images/Accounting%20and%20Tax/Property%20Investment%20Tax/Advisor_reviewing_property_with_7fb17636.jpg",
        href: "/accounting-and-tax",
      },
    ],
  },
  {
    id: "mortgage-broking",
    title: "Mortgage Broking",
    subtitle: "Home Loans, Refinancing & Commercial Lending",
    shortDesc: "Access to 40+ Australian lenders with tailored loan structuring to find the right loan for your situation.",
    items: [
      {
        id: "first-home",
        tag: "Home Ownership",
        badge: "",
        title: "First Home Buyer",
        headline: "Buying Your First Home",
        description: "Step-by-step guidance from pre-approval to settlement, helping you navigate deposit requirements and stamp duty rules.",
        highlights: ["Deposit Schemes", "Stamp Duty Advice", "Pre-Approval Support"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "home",
        overlayLabel: "First home guidance",
        image: "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20First%20Home/Broker_consulting_couple_on_mort_34d7a579.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "next-home",
        tag: "Upsizing",
        badge: "",
        title: "Buying Your Next Home",
        headline: "Buying Your Next Home",
        description: "Using equity in your existing home to upsize or relocate, coordinating purchase and sale timelines smoothly.",
        highlights: ["Equity Release", "Transition Finance", "Settlement Coordination"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "key",
        overlayLabel: "Next home transition",
        image: "/taxnet-categories-images/Mortgage%20Broking/Buying%20Your%20Next%20Home/Family_exploring_new_home_d12c6415.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "refinancing",
        tag: "Refinancing",
        badge: "",
        title: "Refinance & Debt Consolidation",
        headline: "Refinancing & Debt Consolidation",
        description: "Reviewing your current loan across 40+ lenders to explore better loan features and consolidate multiple debts into one payment.",
        highlights: ["40+ Lender Panel", "Debt Consolidation", "Loan Structure Review"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "refresh",
        overlayLabel: "Refinancing review",
        image: "/taxnet-categories-images/Mortgage%20Broking/Refinancing%20Debt%20Consolidation/Advisor_reviewing_mortgage_with_7c45afd4.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "investment-property-loans",
        tag: "Investment Loans",
        badge: "",
        title: "Investment Property Loans",
        headline: "Investment Property Loans",
        description: "Structuring investment property finance properly with stand-alone security and alignment with your tax strategy.",
        highlights: ["Property Structuring", "Stand-Alone Security", "Tax-Effective Finance"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "trend",
        overlayLabel: "Investment lending",
        image: "/taxnet-categories-images/Mortgage%20Broking/Investment%20Property%20Loans/Mortgage_broker_consulting_prope_c4e3922b.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "land-construction",
        tag: "Construction",
        badge: "",
        title: "Land & Construction",
        headline: "Land & Construction Loans",
        description: "Progressive drawdown finance for vacant land purchases, knockdown-rebuilds, and builder construction contracts.",
        highlights: ["Progressive Payments", "Fixed Price Contracts", "Construction Staging"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "crane",
        overlayLabel: "Construction finance",
        image: "/taxnet-categories-images/Mortgage%20Broking/Land%20and%20Construction%20Loans/Broker_reviewing_construction_pl_2e98e204.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "business-loans",
        tag: "Commercial Loans",
        badge: "",
        title: "Commercial & Business Loans",
        headline: "Business Loans",
        description: "Commercial borrowing, working capital facilities, and business property mortgages tailored to your cash flow.",
        highlights: ["Commercial Property", "Working Capital", "Business Expansion"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "briefcase",
        overlayLabel: "Commercial borrowing",
        image: "/taxnet-categories-images/Mortgage%20Broking/Business%20Loans/Finance_advisor_meeting_business_fad494fe.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "asset-finance",
        tag: "Equipment & Vehicle",
        badge: "",
        title: "Personal, Car & Equipment",
        headline: "Personal, Car & Equipment Finance",
        description: "Chattel mortgages, novated leases, and equipment finance to fund assets while preserving your working capital.",
        highlights: ["Chattel Mortgage", "Novated Leases", "Equipment Finance"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "truck",
        overlayLabel: "Asset finance",
        image: "/taxnet-categories-images/Mortgage%20Broking/Personal%20Car%20Equipment%20Finance/Business_owner_inspecting_indust_239dc354.jpg",
        href: "/mortgage-broking",
      },
      {
        id: "bridging-loans",
        tag: "Bridging Loans",
        badge: "",
        title: "Strategic Bridging Loans",
        headline: "Bridging Loans",
        description: "Finance to help you buy your new property before your existing property is sold, avoiding rushed sales.",
        highlights: ["Buy Before Selling", "Flexible Terms", "Orderly Sale Period"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "bridge",
        overlayLabel: "Bridging finance",
        image: "/taxnet-categories-images/Mortgage%20Broking/Bridging%20Loans/Broker_reviewing_documents_with_1bc068cc.jpg",
        href: "/mortgage-broking",
      },
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    subtitle: "Accurate Records, Payroll & Financial Visibility",
    shortDesc: "Clean, up-to-date accounts and payroll support so you always know where your business stands.",
    items: [
      {
        id: "smb-bookkeeping",
        tag: "Bookkeeping",
        badge: "",
        title: "Small Business Bookkeeping",
        headline: "Small Business Bookkeeping",
        description: "Day-to-day transaction coding, expense tracking, and regular reconciliations keeping your ledger clean and current.",
        highlights: ["Transaction Coding", "Expense Tracking", "Reconciled Accounts"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "book",
        overlayLabel: "Accurate accounts",
        image: "/taxnet-categories-images/Bookkeeping/Small%20Business%20Bookkeeping/Bookkeeper_organizing_financial_1e11db7f.jpg",
        href: "/bookkeeping",
      },
      {
        id: "bank-rec",
        tag: "Reconciliation",
        badge: "",
        title: "Bank & Ledger Reconciliation",
        headline: "Bank Reconciliation & BAS-Ready",
        description: "Bank feed clearing and ledger checks so your records are balanced and ready for quarterly BAS lodgement.",
        highlights: ["Bank Feed Clearing", "Credit Card Matching", "Balanced Ledgers"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "checkcircle",
        overlayLabel: "Balanced bank feeds",
        image: "/taxnet-categories-images/Bookkeeping/Bank%20Reconciliation%20and%20BAS-Ready%20Records/Bookkeeper_consulting_business_o_4a9fba8d.jpg",
        href: "/bookkeeping",
      },
      {
        id: "payroll-stp",
        tag: "Payroll",
        badge: "",
        title: "Payroll & STP Compliance",
        headline: "Payroll",
        description: "Regular pay runs, superannuation clearing house coordination, and Single Touch Payroll (STP Phase 2) reporting.",
        highlights: ["STP Phase 2 Reporting", "Super Guarantee Filing", "Leave Tracking"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "users",
        overlayLabel: "Compliant payroll",
        image: "/taxnet-categories-images/Bookkeeping/Payroll/Professionals_reviewing_payroll_2577f172.jpg",
        href: "/bookkeeping",
      },
      {
        id: "accounts-management",
        tag: "Payables & Receivables",
        badge: "",
        title: "Accounts Management",
        headline: "Accounts Management",
        description: "Systematic bill tracking, supplier invoices, aged payables, and customer debtor follow-up.",
        highlights: ["Accounts Receivable", "Accounts Payable", "Aged Ledger Tracking"],
        themeColor: "#141718",
        accentBg: "#22272A",
        iconType: "certificate",
        overlayLabel: "Structured payables",
        image: "/taxnet-categories-images/Bookkeeping/Invoicing%20and%20Accounts%20Management/Managers_reviewing_financial_rep_1d46b3e0.jpg",
        href: "/bookkeeping",
      },
      {
        id: "invoicing",
        tag: "Invoicing",
        badge: "",
        title: "Automated Invoicing",
        headline: "Automated Invoicing",
        description: "Professional digital invoicing with automated reminders and online payment options to help you get paid on time.",
        highlights: ["Digital Invoicing", "Automated Reminders", "Pay Online Links"],
        themeColor: "#141718",
        accentBg: "#1E2326",
        iconType: "invoice",
        overlayLabel: "Timely invoicing",
        image: "/taxnet-categories-images/Bookkeeping/Invoicing%20and%20Accounts%20Management/Woman_reviewing_invoice_at_works_a5ae91ad.jpg",
        href: "/bookkeeping",
      },
      {
        id: "cash-flow-budget",
        tag: "Cash Flow",
        badge: "",
        title: "Budgeting & Cash Flow",
        headline: "Budgeting & Cash Flow",
        description: "Rolling cash flow forecasts and practical variance tracking so you have full visibility over your cash runway.",
        highlights: ["Cash Projections", "Variance Reviews", "Working Capital Visibility"],
        themeColor: "#0A0D0B",
        accentBg: "#161A18",
        iconType: "graph",
        overlayLabel: "Cash flow control",
        image: "/taxnet-categories-images/Bookkeeping/Budgeting%20and%20Cash%20Flow/Consultant_and_owners_planning_b_e32e868c.jpg",
        href: "/bookkeeping",
      },
      {
        id: "cloud-setup",
        tag: "Cloud Accounting",
        badge: "",
        title: "Cloud Accounting Set-Up",
        headline: "Cloud Accounting Set-Up",
        description: "Setup and transition to Xero, MYOB, or QuickBooks, including chart of accounts customization and receipt capture tools.",
        highlights: ["Xero, MYOB & QuickBooks", "Clean Data Migration", "Receipt Capture Tools"],
        themeColor: "#1C2022",
        accentBg: "#282E32",
        iconType: "cloud",
        overlayLabel: "Cloud setup",
        image: "/taxnet-categories-images/Bookkeeping/Cloud%20Accounting%20Set-Up/Man_reviewing_financials_on_laptop_81b34cc9.jpg",
        href: "/bookkeeping",
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
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distanceFromCenter = (cardCenter - containerCenter) / (containerRect.width / 2);

      // Clamp distance between -1.5 and 1.5
      const clampedDist = Math.max(-1.5, Math.min(1.5, distanceFromCenter));

      // Calculate 3D perspective rotation (Y-axis tilt, scaling, z-translation)
      // Gentler angle on mobile devices to keep card content clearly visible and avoid overlap
      const rotateY = clampedDist * (isMobile ? -5 : -14);
      const scale = Math.max(isMobile ? 0.95 : 0.92, 1 - Math.abs(clampedDist) * (isMobile ? 0.04 : 0.08));
      const translateZ = Math.max(isMobile ? -30 : -100, -Math.abs(clampedDist) * (isMobile ? 25 : 80));

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
    const step = typeof window !== "undefined" && window.innerWidth < 768 ? 290 : 360;
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
          background-color: #0A0D0B !important;
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px #C5A869 !important;
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

        /* ─── Responsive Adjustments for Mobile Peek Carousel ─── */
        @media (max-width: 768px) {
          .services-gallery-viewport {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            padding-top: 1rem !important;
            padding-bottom: 1.5rem !important;
          }
          .services-gallery-track {
            gap: 0.875rem !important; /* Reduced ~14px gap */
          }
          .service-card-item {
            width: clamp(270px, 74vw, 300px) !important;
            padding: 0.875rem !important;
          }
          .card-poster-wrapper {
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .services-gallery-viewport {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 0.75rem !important;
            padding-bottom: 1.25rem !important;
          }
          .services-gallery-track {
            gap: 0.75rem !important; /* 12px compact gap between cards */
          }
          .service-card-item {
            /* Width calibrated so the next card clearly peeks into view by ~65-85px */
            width: clamp(255px, 75vw, 280px) !important;
            padding: 0.75rem !important;
            border-radius: 16px !important;
          }
          .card-poster-wrapper {
            height: 180px !important;
            border-radius: 12px !important;
          }
          .sc-headline {
            font-size: 1.25rem !important;
            margin-bottom: 1rem !important;
          }
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
          color: "#C5A869",
          opacity: 0.08,
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
                color: "#C5A869",
                marginBottom: "1.25rem",
              }}
            >
              Comprehensive Financial Solutions,{" "}
              <span style={{ color: "#1C2022" }}>Engineered for Growth.</span>
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.25vw, 1.25rem)",
                lineHeight: 1.65,
                color: "var(--color-text-secondary)",
                maxWidth: "720px",
              }}
            >
              Three core pillars delivering tax compliance, lending strategy, and clear bookkeeping for Australian businesses, property investors, and individuals.
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
                    cursor: "pointer",
                    fontSize: "0.9375rem",
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "-0.01em",
                    fontFamily: "var(--font-sans)",
                    transition: "all 240ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                    backgroundColor: isActive ? "#0A0D0B" : "transparent",
                    color: isActive ? "#C5A869" : "var(--color-text-secondary)",
                    boxShadow: isActive ? "0 4px 14px rgba(197, 168, 105, 0.25)" : "none",
                    border: isActive ? "1px solid rgba(197, 168, 105, 0.4)" : "1px solid transparent",
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
                      backgroundColor: isActive ? "rgba(197, 168, 105, 0.2)" : "rgba(0,0,0,0.06)",
                      color: isActive ? "#C5A869" : "var(--color-text-muted)",
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
                  e.currentTarget.style.backgroundColor = "#0A0D0B";
                  e.currentTarget.style.color = "#C5A869";
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
                  e.currentTarget.style.backgroundColor = "#0A0D0B";
                  e.currentTarget.style.color = "#C5A869";
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
        className="services-gallery-viewport"
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
          className="services-gallery-track"
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
              {/* Top Tag */}
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
                      color: "#C5A869",
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
                    <span>View Service</span>
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
