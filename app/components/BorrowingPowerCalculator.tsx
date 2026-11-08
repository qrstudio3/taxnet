"use client";

import React, { useState, useId } from "react";

export default function BorrowingPowerCalculator() {
  const depId = useId();
  const salary1Id = useId();
  const salary2Id = useId();
  const otherIncId = useId();
  const expensesId = useId();
  const otherLoansId = useId();
  const ccLimitsId = useId();
  const loanTermId = useId();
  const interestRateId = useId();
  const depositId = useId();

  // Active Tab for visual charts
  const [activeChartTab, setActiveChartTab] = useState<"cashflow" | "lifetime" | "lenders">("cashflow");

  // Household Profile
  const [isJoint, setIsJoint] = useState(true);
  const [dependents, setDependents] = useState(1);

  // Annual Gross Incomes (AUD)
  const [primarySalary, setPrimarySalary] = useState(125000);
  const [secondarySalary, setSecondarySalary] = useState(85000);
  const [otherIncome, setOtherIncome] = useState(12000);

  // Monthly Expenses & Liabilities (AUD)
  const [livingExpenses, setLivingExpenses] = useState(3200);
  const [otherLoanRepayments, setOtherLoanRepayments] = useState(500);
  const [creditCardLimit, setCreditCardLimit] = useState(10000);
  const [hasHecs, setHasHecs] = useState(false);

  // Loan Settings
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.14); // Current average owner-occupied rate
  const [cashDeposit, setCashDeposit] = useState(180000);

  // --- Accurate 2024-2025 Australian Stage 3 Resident Tax Formula ---
  const calculateAnnualTax = (taxableIncome: number) => {
    if (taxableIncome <= 18200) return 0;
    let tax = 0;
    if (taxableIncome <= 45000) {
      tax = (taxableIncome - 18200) * 0.16;
    } else if (taxableIncome <= 135000) {
      tax = 4288 + (taxableIncome - 45000) * 0.30;
    } else if (taxableIncome <= 190000) {
      tax = 31288 + (taxableIncome - 135000) * 0.37;
    } else {
      tax = 51638 + (taxableIncome - 190000) * 0.45;
    }
    // Medicare levy 2%
    tax += taxableIncome * 0.02;
    return tax;
  };

  // HECS/HELP Repayment Schedule (2024-2025 ATO Indexed Brackets)
  const calculateHecs = (gross: number) => {
    if (!hasHecs || gross < 54435) return 0;
    if (gross < 62850) return gross * 0.01;
    if (gross < 74000) return gross * 0.025;
    if (gross < 90000) return gross * 0.04;
    if (gross < 110000) return gross * 0.055;
    if (gross < 130000) return gross * 0.07;
    return gross * 0.085;
  };

  // 1. Gross & Tax Breakdown
  const annualGross1 = primarySalary;
  const annualGross2 = isJoint ? secondarySalary : 0;
  const totalAnnualGross = annualGross1 + annualGross2 + otherIncome;
  const monthlyGross = totalAnnualGross / 12;

  const annualTax1 = calculateAnnualTax(annualGross1) + calculateHecs(annualGross1);
  const annualTax2 = isJoint ? calculateAnnualTax(annualGross2) + calculateHecs(annualGross2) : 0;
  const monthlyTaxTotal = (annualTax1 + annualTax2) / 12;

  // Net Base Earnings
  const monthlyNet1 = (annualGross1 - annualTax1) / 12;
  const monthlyNet2 = isJoint ? (annualGross2 - annualTax2) / 12 : 0;
  // Shaded secondary/rental income (Australian bank standard: 80% shading)
  const monthlyShadedOther = (otherIncome * 0.8) / 12;
  const totalMonthlyNetIncome = monthlyNet1 + monthlyNet2 + monthlyShadedOther;

  // 2. Commitments & Living Expenses
  // Credit card ongoing liability: Australian banks assess 3.5% of the TOTAL LIMIT monthly
  const monthlyCreditCardCommitment = creditCardLimit * 0.035;

  // Household Expenditure Measure (HEM) baseline floor
  const hemBenchmark = isJoint ? 2800 + dependents * 520 : 1850 + dependents * 520;
  const assessedLivingExpenses = Math.max(livingExpenses, hemBenchmark);

  const monthlyDebtsTotal = otherLoanRepayments + monthlyCreditCardCommitment;
  const totalMonthlyExpensesAndDebts = assessedLivingExpenses + monthlyDebtsTotal;

  // 3. Net Disposable Income (Surplus available for mortgage)
  const netMonthlySurplus = Math.max(0, totalMonthlyNetIncome - totalMonthlyExpensesAndDebts);

  // 4. APRA 3.00% Buffer Calculation
  const assessmentInterestRate = (interestRate + 3.0) / 100 / 12;
  const totalMonths = loanTermYears * 12;

  // Max Borrowing Capacity via Loan Amortization: PV = PMT * (1 - (1+r)^-n) / r
  let maxBorrowingCapacity = 0;
  if (netMonthlySurplus > 0) {
    const presentValue =
      (netMonthlySurplus * (1 - Math.pow(1 + assessmentInterestRate, -totalMonths))) /
      assessmentInterestRate;
    // Conservative rounding to nearest $5,000
    maxBorrowingCapacity = Math.max(0, Math.floor(presentValue / 5000) * 5000);
  }

  // 5. Actual Monthly Repayments (at market interest rate, not stress rate)
  const actualMonthlyRate = interestRate / 100 / 12;
  const actualMonthlyRepayment =
    maxBorrowingCapacity > 0
      ? (maxBorrowingCapacity *
          actualMonthlyRate *
          Math.pow(1 + actualMonthlyRate, totalMonths)) /
        (Math.pow(1 + actualMonthlyRate, totalMonths) - 1)
      : 0;

  const actualFortnightlyRepayment = (actualMonthlyRepayment * 12) / 26;

  // Total Lifetime Payments
  const totalLifetimeRepayments = actualMonthlyRepayment * totalMonths;
  const totalLifetimeInterest = Math.max(0, totalLifetimeRepayments - maxBorrowingCapacity);

  // Purchasing Power & Loan to Value Ratio (LVR)
  const totalPropertyBudget = maxBorrowingCapacity + cashDeposit;
  const lvrPercentage =
    totalPropertyBudget > 0 ? (maxBorrowingCapacity / totalPropertyBudget) * 100 : 0;

  // Lender Variance Modeling (Australian Market Reality: up to $150k variance between banks)
  const conservativeLenderCapacity = Math.round(maxBorrowingCapacity * 0.94);
  const averageLenderCapacity = maxBorrowingCapacity;
  const optimizedLenderCapacity = Math.round(maxBorrowingCapacity * 1.14);

  // Currency Formatter
  const formatAud = (val: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // Percentages for Monthly Cashflow Ring Chart
  const taxPct = Math.round((monthlyTaxTotal / monthlyGross) * 100) || 0;
  const livingPct = Math.round((assessedLivingExpenses / monthlyGross) * 100) || 0;
  const debtPct = Math.round((monthlyDebtsTotal / monthlyGross) * 100) || 0;
  const surplusPct = Math.max(0, 100 - (taxPct + livingPct + debtPct));

  return (
    <div
      id="borrowing-power-calculator"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #E2EAE5",
        boxShadow: "0 18px 48px rgba(13, 62, 38, 0.08)",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      {/* ─── CALCULATOR HEADER BAR ─── */}
      <div
        style={{
          backgroundColor: "#0D3E26",
          padding: "2rem 2.25rem",
          color: "#FFFFFF",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div>
            <span
              style={{
                color: "#C5A869",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Precision Financial Assessment Engine
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(1.75rem, 2.6vw, 2.3rem)",
                fontWeight: 400,
                margin: "0.35rem 0 0 0",
              }}
            >
              Australian Borrowing Power & Capacity Calculator
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "0.82rem",
              color: "#E5D6B6",
              fontWeight: 600,
            }}
          >
            ✓ APRA 3.00% Stress Buffer Included
          </div>
        </div>
      </div>

      {/* ─── MAIN TWO-COLUMN WORKSPACE ─── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: 0,
        }}
      >
        {/* ── LEFT PANE: INPUTS & SLIDERS ── */}
        <div
          style={{
            padding: "2.25rem 2rem",
            borderRight: "1px solid #EEF3EF",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* STEP 1: HOUSEHOLD & APPLICANTS */}
          <div style={{ marginBottom: "1.75rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0D3E26",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                1. Borrower Profile
              </span>
              <span style={{ fontSize: "0.74rem", color: "#6B7C72" }}>Step 1 of 4</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "1rem" }}>
              <button
                type="button"
                onClick={() => setIsJoint(false)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: isJoint ? "1px solid #D1DCD5" : "2px solid #0D3E26",
                  backgroundColor: isJoint ? "#FAFBF9" : "rgba(13, 62, 38, 0.08)",
                  color: isJoint ? "#4A5A50" : "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 150ms ease",
                }}
              >
                Single Borrower
              </button>
              <button
                type="button"
                onClick={() => setIsJoint(true)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: !isJoint ? "1px solid #D1DCD5" : "2px solid #0D3E26",
                  backgroundColor: !isJoint ? "#FAFBF9" : "rgba(13, 62, 38, 0.08)",
                  color: !isJoint ? "#4A5A50" : "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  cursor: "pointer",
                  transition: "all 150ms ease",
                }}
              >
                Joint / Couple (2 Incomes)
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <label htmlFor={depId} style={{ fontSize: "0.86rem", fontWeight: 600, color: "#3B4A41" }}>
                Number of Dependents
              </label>
              <select
                id={depId}
                value={dependents}
                onChange={(e) => setDependents(Number(e.target.value))}
                style={{
                  padding: "6px 14px",
                  borderRadius: "6px",
                  border: "1px solid #D1DCD5",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  color: "#0D3E26",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                }}
              >
                <option value={0}>0 Dependents</option>
                <option value={1}>1 Dependent</option>
                <option value={2}>2 Dependents</option>
                <option value={3}>3 Dependents</option>
                <option value={4}>4+ Dependents</option>
              </select>
            </div>
          </div>

          {/* STEP 2: ANNUAL GROSS EARNINGS */}
          <div style={{ marginBottom: "1.75rem", paddingTop: "1.35rem", borderTop: "1px solid #EEF3EF" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0D3E26",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.8rem",
              }}
            >
              2. Annual Incomes (Pre-Tax)
            </span>

            {/* Primary Salary Slider */}
            <div style={{ marginBottom: "1.1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label htmlFor={salary1Id} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                  Primary Applicant Gross Salary
                </label>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(primarySalary)}
                </span>
              </div>
              <input
                id={salary1Id}
                type="range"
                min={30000}
                max={400000}
                step={5000}
                value={primarySalary}
                onChange={(e) => setPrimarySalary(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
              />
            </div>

            {/* Secondary Salary Slider */}
            {isJoint && (
              <div style={{ marginBottom: "1.1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <label htmlFor={salary2Id} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                    Secondary Applicant Gross Salary
                  </label>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                    {formatAud(secondarySalary)}
                  </span>
                </div>
                <input
                  id={salary2Id}
                  type="range"
                  min={20000}
                  max={300000}
                  step={5000}
                  value={secondarySalary}
                  onChange={(e) => setSecondarySalary(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
                />
              </div>
            )}

            {/* Other Income Slider */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label htmlFor={otherIncId} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                  Other Annual Income (Rental, Overtime, Bonus)
                </label>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(otherIncome)}
                </span>
              </div>
              <input
                id={otherIncId}
                type="range"
                min={0}
                max={100000}
                step={2500}
                value={otherIncome}
                onChange={(e) => setOtherIncome(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
              />
              <span style={{ fontSize: "0.72rem", color: "#7A8A80", display: "block", marginTop: "2px" }}>
                *Lenders shade rental and commission income to 80% to account for vacancies and taxation.
              </span>
            </div>
          </div>

          {/* STEP 3: LIVING COSTS & EXISTING LIABILITIES */}
          <div style={{ marginBottom: "1.75rem", paddingTop: "1.35rem", borderTop: "1px solid #EEF3EF" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0D3E26",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.8rem",
              }}
            >
              3. Living Costs & Financial Commitments
            </span>

            {/* Monthly Living Costs */}
            <div style={{ marginBottom: "1.1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label htmlFor={expensesId} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                  Monthly General Living Costs (Groceries, bills, lifestyle)
                </label>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(livingExpenses)} / mo
                </span>
              </div>
              <input
                id={expensesId}
                type="range"
                min={1400}
                max={10000}
                step={100}
                value={livingExpenses}
                onChange={(e) => setLivingExpenses(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
              />
              <span style={{ fontSize: "0.72rem", color: "#7A8A80", display: "block", marginTop: "2px" }}>
                Assessed against the statutory Household Expenditure Measure (HEM) benchmark floor of {formatAud(hemBenchmark)}/mo.
              </span>
            </div>

            {/* Other Loans */}
            <div style={{ marginBottom: "1.1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label htmlFor={otherLoansId} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                  Other Monthly Loan Repayments (Car, Personal loans)
                </label>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(otherLoanRepayments)} / mo
                </span>
              </div>
              <input
                id={otherLoansId}
                type="range"
                min={0}
                max={3000}
                step={50}
                value={otherLoanRepayments}
                onChange={(e) => setOtherLoanRepayments(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
              />
            </div>

            {/* Credit Card Limits */}
            <div style={{ marginBottom: "1.1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <label htmlFor={ccLimitsId} style={{ fontSize: "0.85rem", color: "#3B4A41", fontWeight: 600 }}>
                  Total Combined Credit Card Limits
                </label>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(creditCardLimit)}
                </span>
              </div>
              <input
                id={ccLimitsId}
                type="range"
                min={0}
                max={50000}
                step={1000}
                value={creditCardLimit}
                onChange={(e) => setCreditCardLimit(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#0D3E26", height: "6px" }}
              />
              <span style={{ fontSize: "0.72rem", color: "#7A8A80", display: "block", marginTop: "2px" }}>
                *Banks assess 3.5% of the total limit per month as liability, even if card balance is $0!
              </span>
            </div>

            {/* HECS Toggle */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "4px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#3B4A41" }}>
                HECS / HELP Education Debt
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  type="button"
                  onClick={() => setHasHecs(false)}
                  style={{
                    padding: "4px 14px",
                    borderRadius: "6px",
                    border: hasHecs ? "1px solid #D1DCD5" : "2px solid #0D3E26",
                    backgroundColor: hasHecs ? "#FAFBF9" : "rgba(13, 62, 38, 0.08)",
                    color: hasHecs ? "#55645B" : "#0D3E26",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  No HECS
                </button>
                <button
                  type="button"
                  onClick={() => setHasHecs(true)}
                  style={{
                    padding: "4px 14px",
                    borderRadius: "6px",
                    border: !hasHecs ? "1px solid #D1DCD5" : "2px solid #0D3E26",
                    backgroundColor: !hasHecs ? "#FAFBF9" : "rgba(13, 62, 38, 0.08)",
                    color: !hasHecs ? "#55645B" : "#0D3E26",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  Yes, Active
                </button>
              </div>
            </div>
          </div>

          {/* STEP 4: LOAN SETTINGS */}
          <div style={{ paddingTop: "1.35rem", borderTop: "1px solid #EEF3EF" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#0D3E26",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.8rem",
              }}
            >
              4. Loan Term & Rate Preferences
            </span>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label htmlFor={loanTermId} style={{ fontSize: "0.78rem", color: "#55645B", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                  Loan Term
                </label>
                <select
                  id={loanTermId}
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  style={{
                    width: "100%",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    border: "1px solid #D1DCD5",
                    fontSize: "0.88rem",
                    color: "#0D3E26",
                    fontWeight: 700,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <option value={30}>30 Years (Standard)</option>
                  <option value={25}>25 Years</option>
                  <option value={20}>20 Years</option>
                </select>
              </div>

              <div>
                <label htmlFor={interestRateId} style={{ fontSize: "0.78rem", color: "#55645B", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                  Interest Rate (% p.a.)
                </label>
                <input
                  id={interestRateId}
                  type="number"
                  step="0.05"
                  min="4.0"
                  max="10.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{
                    width: "100%",
                    padding: "7px 10px",
                    borderRadius: "6px",
                    border: "1px solid #D1DCD5",
                    fontSize: "0.88rem",
                    color: "#0D3E26",
                    fontWeight: 700,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANE: RESULTS & INTERACTIVE VISUAL CHARTS ── */}
        <div
          style={{
            backgroundColor: "#F9FAF9",
            padding: "2.25rem 2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {/* Primary Capacity Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "1.75rem",
                border: "1px solid #D6E3DB",
                boxShadow: "0 8px 24px rgba(13, 62, 38, 0.06)",
                textAlign: "center",
                marginBottom: "1.75rem",
              }}
            >
              <span
                style={{
                  color: "#0D3E26",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Estimated Max Borrowing Power
              </span>

              <div
                style={{
                  fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                  fontSize: "clamp(2.5rem, 4.2vw, 3.8rem)",
                  fontWeight: 700,
                  color: "#0D3E26",
                  lineHeight: 1.1,
                  margin: "0.4rem 0",
                }}
              >
                {formatAud(maxBorrowingCapacity)}
              </div>

              <div style={{ fontSize: "0.82rem", color: "#55645B", marginBottom: "1rem" }}>
                Tested at stress rate of <strong>{(interestRate + 3.0).toFixed(2)}% p.a.</strong> (APRA Mandatory Buffer)
              </div>

              {/* Repayments grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  paddingTop: "1rem",
                  borderTop: "1px solid #EDF3EF",
                }}
              >
                <div style={{ backgroundColor: "#F7FAF8", padding: "10px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.72rem", color: "#6B7C72", fontWeight: 600 }}>Monthly Repayment</div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F261B", marginTop: "2px" }}>
                    {formatAud(actualMonthlyRepayment)}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "#8A9990" }}>At {interestRate}% p.a.</div>
                </div>

                <div style={{ backgroundColor: "#F7FAF8", padding: "10px", borderRadius: "10px" }}>
                  <div style={{ fontSize: "0.72rem", color: "#6B7C72", fontWeight: 600 }}>Fortnightly Repayment</div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0F261B", marginTop: "2px" }}>
                    {formatAud(actualFortnightlyRepayment)}
                  </div>
                  <div style={{ fontSize: "0.68rem", color: "#8A9990" }}>At {interestRate}% p.a.</div>
                </div>
              </div>
            </div>

            {/* ─── INTERACTIVE CHARTS SECTION ─── */}
            <div style={{ marginBottom: "1.75rem" }}>
              {/* Tab Selector */}
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#EBF1ED",
                  padding: "4px",
                  borderRadius: "10px",
                  gap: "4px",
                  marginBottom: "1rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveChartTab("cashflow")}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: activeChartTab === "cashflow" ? "#FFFFFF" : "transparent",
                    color: activeChartTab === "cashflow" ? "#0D3E26" : "#55645B",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    boxShadow: activeChartTab === "cashflow" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                    transition: "all 150ms ease",
                  }}
                >
                  Cashflow Allocation
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChartTab("lifetime")}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: activeChartTab === "lifetime" ? "#FFFFFF" : "transparent",
                    color: activeChartTab === "lifetime" ? "#0D3E26" : "#55645B",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    boxShadow: activeChartTab === "lifetime" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                    transition: "all 150ms ease",
                  }}
                >
                  30-Yr Principal vs Interest
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChartTab("lenders")}
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: activeChartTab === "lenders" ? "#FFFFFF" : "transparent",
                    color: activeChartTab === "lenders" ? "#0D3E26" : "#55645B",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    boxShadow: activeChartTab === "lenders" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                    transition: "all 150ms ease",
                  }}
                >
                  Lender Comparison
                </button>
              </div>

              {/* ── TAB 1: CASHFLOW ALLOCATION DONUT / SEGMENTS ── */}
              {activeChartTab === "cashflow" && (
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "1.25rem",
                    border: "1px solid #E2EAE5",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                      Monthly Gross Cashflow Breakdown ({formatAud(monthlyGross)}/mo)
                    </span>
                  </div>

                  {/* Horizontal Segmented Bar Chart */}
                  <div
                    style={{
                      height: "22px",
                      borderRadius: "999px",
                      backgroundColor: "#EEF2EF",
                      display: "flex",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: `${surplusPct}%`,
                        backgroundColor: "#0D3E26",
                        transition: "width 300ms ease",
                      }}
                      title={`Mortgage Surplus: ${surplusPct}%`}
                    />
                    <div
                      style={{
                        width: `${livingPct}%`,
                        backgroundColor: "#A18650",
                        transition: "width 300ms ease",
                      }}
                      title={`Living Costs: ${livingPct}%`}
                    />
                    <div
                      style={{
                        width: `${debtPct}%`,
                        backgroundColor: "#D97706",
                        transition: "width 300ms ease",
                      }}
                      title={`Existing Liabilities: ${debtPct}%`}
                    />
                    <div
                      style={{
                        width: `${taxPct}%`,
                        backgroundColor: "#64748B",
                        transition: "width 300ms ease",
                      }}
                      title={`Income Tax & Medicare: ${taxPct}%`}
                    />
                  </div>

                  {/* Legend Grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px",
                      fontSize: "0.76rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "#0D3E26", flexShrink: 0 }} />
                      <span style={{ color: "#3B4A41" }}>
                        Mortgage Capacity: <strong>{formatAud(netMonthlySurplus)}</strong> ({surplusPct}%)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "#A18650", flexShrink: 0 }} />
                      <span style={{ color: "#3B4A41" }}>
                        Living Costs (HEM): <strong>{formatAud(assessedLivingExpenses)}</strong> ({livingPct}%)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "#D97706", flexShrink: 0 }} />
                      <span style={{ color: "#3B4A41" }}>
                        Existing Debts: <strong>{formatAud(monthlyDebtsTotal)}</strong> ({debtPct}%)
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "12px", height: "12px", borderRadius: "3px", backgroundColor: "#64748B", flexShrink: 0 }} />
                      <span style={{ color: "#3B4A41" }}>
                        Tax & Medicare: <strong>{formatAud(monthlyTaxTotal)}</strong> ({taxPct}%)
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ── TAB 2: LIFETIME PRINCIPAL VS INTEREST ── */}
              {activeChartTab === "lifetime" && (
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "1.25rem",
                    border: "1px solid #E2EAE5",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                      Total 30-Year Loan Repayment: {formatAud(totalLifetimeRepayments)}
                    </span>
                  </div>

                  {/* Dual Bar Chart */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "3px" }}>
                        <span style={{ color: "#0D3E26", fontWeight: 700 }}>Principal (Original Loan)</span>
                        <span style={{ color: "#0D3E26", fontWeight: 700 }}>{formatAud(maxBorrowingCapacity)}</span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "6px", backgroundColor: "#EEF2EF", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: totalLifetimeRepayments > 0 ? `${(maxBorrowingCapacity / totalLifetimeRepayments) * 100}%` : "0%",
                            backgroundColor: "#0D3E26",
                            transition: "width 300ms ease",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "3px" }}>
                        <span style={{ color: "#A18650", fontWeight: 700 }}>Total Interest Paid (30 Yrs)</span>
                        <span style={{ color: "#A18650", fontWeight: 700 }}>{formatAud(totalLifetimeInterest)}</span>
                      </div>
                      <div style={{ height: "14px", borderRadius: "6px", backgroundColor: "#EEF2EF", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: totalLifetimeRepayments > 0 ? `${(totalLifetimeInterest / totalLifetimeRepayments) * 100}%` : "0%",
                            backgroundColor: "#A18650",
                            transition: "width 300ms ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "8px 12px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(161, 134, 80, 0.09)",
                      fontSize: "0.74rem",
                      color: "#4A3B18",
                    }}
                  >
                    💡 Shaving just <strong>0.35%</strong> off your interest rate through TaxNet broker negotiations saves approximately{" "}
                    <strong>{formatAud(maxBorrowingCapacity * 0.0035 * 18)}</strong> over the life of this loan.
                  </div>
                </div>
              )}

              {/* ── TAB 3: LENDER COMPARISON VARIANCE ── */}
              {activeChartTab === "lenders" && (
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "14px",
                    padding: "1.25rem",
                    border: "1px solid #E2EAE5",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                      Borrowing Power Across Lender Policies
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#25D366", fontWeight: 700 }}>
                      +{formatAud(optimizedLenderCapacity - conservativeLenderCapacity)} Max Advantage
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Conservative Bank */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "2px" }}>
                        <span style={{ color: "#55645B" }}>Conservative Major Bank (Strict HEM)</span>
                        <span style={{ fontWeight: 700, color: "#55645B" }}>{formatAud(conservativeLenderCapacity)}</span>
                      </div>
                      <div style={{ height: "12px", borderRadius: "6px", backgroundColor: "#EEF2EF", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: optimizedLenderCapacity > 0 ? `${(conservativeLenderCapacity / optimizedLenderCapacity) * 100}%` : "0%",
                            backgroundColor: "#94A3B8",
                          }}
                        />
                      </div>
                    </div>

                    {/* Standard Tier 1 */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "2px" }}>
                        <span style={{ color: "#0D3E26" }}>Standard Tier-1 Major Bank</span>
                        <span style={{ fontWeight: 700, color: "#0D3E26" }}>{formatAud(averageLenderCapacity)}</span>
                      </div>
                      <div style={{ height: "12px", borderRadius: "6px", backgroundColor: "#EEF2EF", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: optimizedLenderCapacity > 0 ? `${(averageLenderCapacity / optimizedLenderCapacity) * 100}%` : "0%",
                            backgroundColor: "#0D3E26",
                          }}
                        />
                      </div>
                    </div>

                    {/* Specialized Lender */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginBottom: "2px" }}>
                        <span style={{ color: "#0D3E26", fontWeight: 700 }}>TaxNet Optimized Specialist / Non-Bank</span>
                        <span style={{ fontWeight: 800, color: "#0D3E26" }}>{formatAud(optimizedLenderCapacity)}</span>
                      </div>
                      <div style={{ height: "12px", borderRadius: "6px", backgroundColor: "#EEF2EF", overflow: "hidden" }}>
                        <div
                          style={{
                            height: "100%",
                            width: "100%",
                            background: "linear-gradient(90deg, #0D3E26 0%, #A18650 100%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ─── PURCHASING POWER & LVR BOX ─── */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "1.25rem",
                borderRadius: "14px",
                border: "1px solid #D5E2D9",
                marginBottom: "1.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0D3E26" }}>
                  Your Available Cash Deposit / Equity
                </span>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0D3E26" }}>
                  {formatAud(cashDeposit)}
                </span>
              </div>

              <input
                id={depositId}
                type="range"
                min={30000}
                max={500000}
                step={10000}
                value={cashDeposit}
                onChange={(e) => setCashDeposit(Number(e.target.value))}
                style={{ width: "100%", accentColor: "#A18650", marginBottom: "10px", height: "6px" }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "10px",
                  borderTop: "1px solid #EDF3EF",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#55645B", display: "block" }}>
                    Total Estimated Property Budget:
                  </span>
                  <span style={{ fontSize: "0.72rem", color: lvrPercentage <= 80 ? "#25D366" : "#D97706", fontWeight: 700 }}>
                    {lvrPercentage <= 80
                      ? `LVR: ${lvrPercentage.toFixed(1)}% (No LMI Required)`
                      : `LVR: ${lvrPercentage.toFixed(1)}% (LMI May Apply)`}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#0D3E26",
                  }}
                >
                  {formatAud(totalPropertyBudget)}
                </span>
              </div>
            </div>
          </div>

          {/* ─── ACTION CTAS ─── */}
          <div>
            <a
              href="#booking"
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#0D3E26",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "14px 20px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(13, 62, 38, 0.25)",
                marginBottom: "10px",
                transition: "background-color 160ms ease",
              }}
            >
              Lock In Formal Borrowing Pre-Approval →
            </a>

            <a
              href="https://wa.me/61420956761?text=Hi%20TaxNet%2C%20I%20used%20your%20borrowing%20power%20calculator%20and%20would%20like%20to%20review%20my%20capacity."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                backgroundColor: "#FFFFFF",
                color: "#0D3E26",
                border: "1.5px solid #25D366",
                padding: "11px 18px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
