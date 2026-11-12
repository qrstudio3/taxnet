"use client";

import React, { useState, useMemo, useEffect } from "react";

// --- Mathematical Helper Functions (Exact to Specification) ---
const fmt = (n: number) => "$" + Math.round(n).toLocaleString("en-AU");
const pct = (n: number) => Math.round(n * 10) / 10 + "%";

export function getStamp(price: number, state: string, proptype: string, isFHB: boolean) {
  let duty = 0;
  let note = "";
  let above = false;

  if (state === "VIC") {
    if (isFHB && price <= 600000) {
      duty = 0;
      note = "VIC FHB exemption up to $600,000";
    } else if (isFHB && price <= 750000) {
      duty = (price * 0.055 * (price - 600000)) / 150000;
      note = "VIC FHB partial concession ($600K–$750K)";
    } else {
      if (price <= 25000) {
        duty = price * 0.014;
      } else if (price <= 130000) {
        duty = 350 + (price - 25000) * 0.024;
      } else if (price <= 960000) {
        duty = 2870 + (price - 130000) * 0.06;
      } else {
        duty = price * 0.055;
      }
      note = isFHB ? "Standard VIC rate — above FHB threshold" : "Standard VIC stamp duty";
      above = true;
    }
  } else if (state === "NSW") {
    if (isFHB && price <= 800000) {
      duty = 0;
      note = "NSW FHB exemption up to $800,000";
    } else if (isFHB && price <= 1000000) {
      duty = (price - 800000) * 0.04;
      note = "NSW FHB partial concession ($800K–$1M)";
    } else {
      if (price <= 16000) {
        duty = price * 0.0125;
      } else if (price <= 35000) {
        duty = 200 + (price - 16000) * 0.015;
      } else if (price <= 93000) {
        duty = 485 + (price - 35000) * 0.0175;
      } else if (price <= 351000) {
        duty = 1500 + (price - 93000) * 0.035;
      } else if (price <= 1168000) {
        duty = 10530 + (price - 351000) * 0.045;
      } else {
        duty = 47295 + (price - 1168000) * 0.055;
      }
      note = isFHB ? "Standard NSW rate — above FHB threshold" : "Standard NSW stamp duty";
      above = true;
    }
  } else if (state === "QLD") {
    if (isFHB && price <= 550000) {
      duty = 0;
      note = "QLD FHB concession up to $550,000";
    } else {
      if (price <= 5000) {
        duty = 0;
      } else if (price <= 75000) {
        duty = (price - 5000) * 0.015;
      } else if (price <= 540000) {
        duty = 1050 + (price - 75000) * 0.035;
      } else if (price <= 1000000) {
        duty = 17325 + (price - 540000) * 0.045;
      } else {
        duty = 38025 + (price - 1000000) * 0.0575;
      }
      note = isFHB ? "Standard QLD rate — above FHB threshold" : "Standard QLD stamp duty";
      above = true;
    }
  } else if (state === "SA") {
    if (price <= 12000) {
      duty = price * 0.01;
    } else if (price <= 30000) {
      duty = 120 + (price - 12000) * 0.02;
    } else if (price <= 50000) {
      duty = 480 + (price - 30000) * 0.03;
    } else if (price <= 100000) {
      duty = 1080 + (price - 50000) * 0.035;
    } else if (price <= 200000) {
      duty = 2830 + (price - 100000) * 0.04;
    } else if (price <= 300000) {
      duty = 6830 + (price - 200000) * 0.05;
    } else if (price <= 500000) {
      duty = 11830 + (price - 300000) * 0.055;
    } else {
      duty = 22830 + (price - 500000) * 0.055;
    }
    note = "SA standard rate — no FHB stamp duty concession";
    above = true;
  } else if (state === "WA") {
    if (isFHB && price <= 430000) {
      duty = 0;
      note = "WA FHB exemption up to $430,000";
    } else if (isFHB && price <= 530000) {
      duty = (price - 430000) * 0.019;
      note = "WA FHB partial concession ($430K–$530K)";
    } else {
      if (price <= 120000) {
        duty = price * 0.019;
      } else if (price <= 150000) {
        duty = 2280 + (price - 120000) * 0.0285;
      } else if (price <= 360000) {
        duty = 3135 + (price - 150000) * 0.038;
      } else if (price <= 725000) {
        duty = 11115 + (price - 360000) * 0.046;
      } else {
        duty = 27905 + (price - 725000) * 0.051;
      }
      note = isFHB ? "Standard WA rate — above FHB threshold" : "Standard WA stamp duty";
      above = true;
    }
  } else if (state === "TAS") {
    let d = 0;
    if (price <= 3000) {
      d = 50;
    } else if (price <= 25000) {
      d = 50 + (price - 3000) * 0.0175;
    } else if (price <= 75000) {
      d = 435 + (price - 25000) * 0.025;
    } else if (price <= 200000) {
      d = 1685 + (price - 75000) * 0.03;
    } else if (price <= 375000) {
      d = 5435 + (price - 200000) * 0.035;
    } else if (price <= 725000) {
      d = 11560 + (price - 375000) * 0.04;
    } else {
      d = 25560 + (price - 725000) * 0.045;
    }
    const isn = proptype !== "established";
    if (isFHB && isn) {
      duty = d * 0.5;
      note = "TAS 50% FHB concession (new builds only)";
    } else {
      duty = d;
      note = "Standard TAS stamp duty";
      above = true;
    }
  } else if (state === "ACT") {
    if (isFHB) {
      duty = 0;
      note = "ACT FHB — no stamp duty (Home Buyer Concession Scheme)";
    } else {
      if (price <= 200000) {
        duty = price * 0.006;
      } else if (price <= 300000) {
        duty = 1200 + (price - 200000) * 0.023;
      } else if (price <= 500000) {
        duty = 3500 + (price - 300000) * 0.029;
      } else if (price <= 750000) {
        duty = 9300 + (price - 500000) * 0.037;
      } else if (price <= 1000000) {
        duty = 18550 + (price - 750000) * 0.044;
      } else if (price <= 1455000) {
        duty = 29550 + (price - 1000000) * 0.055;
      } else {
        duty = 54575 + (price - 1455000) * 0.057;
      }
      note = "Standard ACT stamp duty";
      above = true;
    }
  } else {
    // NT
    const v = price / 1000;
    duty = price <= 525000 ? Math.max(0, 0.06571441 * (v * v) + 15 * v - 12000) : price * 0.049;
    note = isFHB ? "NT — verify FHB concessions with Territory Revenue" : "Standard NT stamp duty";
    above = true;
  }
  return { duty: Math.round(duty), note, above };
}

export function getFHBG(price: number, state: string, area: string) {
  const caps: Record<string, [number, number]> = {
    NSW: [1500000, 800000],
    VIC: [950000, 650000],
    QLD: [1000000, 700000],
    WA: [850000, 600000],
    SA: [900000, 500000],
    TAS: [700000, 550000],
    ACT: [1000000, 1000000],
    NT: [750000, 600000],
  };
  const c = caps[state] || [700000, 700000];
  const cap = area === "regional" ? c[1] : c[0];
  return { eligible: price <= cap, cap };
}

export function getFHOG(state: string, proptype: string, price: number) {
  const g: Record<string, number> = {
    VIC: 10000,
    NSW: 10000,
    QLD: 30000,
    SA: 15000,
    WA: 10000,
    TAS: 20000,
    ACT: 0,
    NT: 50000,
  };
  const caps: Record<string, number> = {
    VIC: 750000,
    NSW: proptype === "land" ? 750000 : 600000,
    QLD: 750000,
    WA: 800000,
  };
  const cap = caps[state] || 0;
  if (proptype === "established" || !g[state]) return { amount: 0, cap, overCap: false };
  if (cap && price > cap) return { amount: 0, cap, overCap: true };
  return { amount: g[state], cap, overCap: false };
}

export function calcRepay(loan: number, r: number, yrs: number) {
  if (loan <= 0) return 0;
  const mr = r / 100 / 12;
  const n = yrs * 12;
  return (loan * mr) / (1 - Math.pow(1 + mr, -n));
}

export function calcLMI(loan: number, price: number) {
  const lvr = loan / price;
  if (lvr <= 0.8) return 0;
  if (lvr <= 0.85) return loan * 0.011;
  if (lvr <= 0.9) return loan * 0.019;
  return loan * 0.025;
}

export default function FirstHomeBuyerCalculator() {
  // --- Form State ---
  const [price, setPrice] = useState<number>(750000);
  const [savings, setSavings] = useState<number>(65000);
  const [partnerSavings, setPartnerSavings] = useState<number>(35000);
  const [state, setState] = useState<string>("VIC");
  const [area, setArea] = useState<"metro" | "regional">("metro");
  const [proptype, setProptype] = useState<"established" | "new" | "land">("established");
  const [isJoint, setIsJoint] = useState<boolean>(false);
  const [isFHB, setIsFHB] = useState<boolean>(true);
  const [rate, setRate] = useState<number>(6.14);
  const [term, setTerm] = useState<number>(30);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [schemesOpen, setSchemesOpen] = useState<boolean>(true);

  // Copy protection as per user request in original file
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "u", "s", "p", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === "PrintScreen" || e.key === "F12") {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // --- Calculations ---
  const calcData = useMemo(() => {
    const { duty, note: dutyNote, above } = getStamp(price, state, proptype, isFHB);
    const fhbg = getFHBG(price, state, area);
    const fhog = getFHOG(state, proptype, price);

    const conv = 2200;
    const insp = 600;
    const misc = 1500;
    const base = duty + conv + insp + misc;

    const dep5 = price * 0.05;
    const dep10 = price * 0.1;
    const dep20 = price * 0.2;

    const loan5 = price - dep5;
    const loan10 = price - dep10;
    const loan20 = price - dep20;

    const lmi5 = isFHB && fhbg.eligible ? 0 : calcLMI(loan5, price);
    const lmi10 = calcLMI(loan10, price);

    const cash5 = dep5 + base + (isFHB && fhbg.eligible ? 0 : lmi5);
    const cash10 = dep10 + base + lmi10;
    const cash20 = dep20 + base;

    const eff = savings + (isJoint ? partnerSavings : 0) + (isFHB && fhog.amount > 0 ? fhog.amount : 0);
    const scenA = isFHB && fhbg.eligible;

    const pDep = scenA ? dep5 : dep10;
    const pLoan = scenA ? loan5 : loan10;
    const pLMI = scenA ? 0 : lmi10;
    const pCash = scenA ? cash5 : cash10;
    const pRepay = calcRepay(pLoan, rate, term);
    const pLVR = (pLoan / price) * 100;

    const shortfall = Math.max(0, pCash - eff);
    const surplus = Math.max(0, eff - pCash);

    const repay5 = calcRepay(loan5, rate, term);
    const repay10 = calcRepay(loan10, rate, term);
    const repay20 = calcRepay(loan20, rate, term);

    const i5 = repay5 * term * 12 - loan5;
    const i10 = repay10 * term * 12 - loan10;
    const i20 = repay20 * term * 12 - loan20;

    return {
      duty,
      dutyNote,
      above,
      fhbg,
      fhog,
      conv,
      insp,
      misc,
      base,
      dep5,
      dep10,
      dep20,
      loan5,
      loan10,
      loan20,
      lmi5,
      lmi10,
      cash5,
      cash10,
      cash20,
      eff,
      scenA,
      pDep,
      pLoan,
      pLMI,
      pCash,
      pRepay,
      pLVR,
      shortfall,
      surplus,
      repay5,
      repay10,
      repay20,
      i5,
      i10,
      i20,
    };
  }, [price, savings, partnerSavings, state, area, proptype, isJoint, isFHB, rate, term]);

  // Construct Email Pre-fill link for Ben Willis
  const emailHref = useMemo(() => {
    const lines = [
      "Hi Ben,",
      "",
      "Please find my details from the Taxnet First Home Buyer Calculator.",
      "",
      "-- PROPERTY --",
      "Purchase price:   " + fmt(price),
      "State:            " + state,
      "Buying:           " + (isJoint ? "With a partner" : "Solo"),
      "Buyer type:       " + (isFHB ? "First home buyer" : "Not a first home buyer"),
      "Current savings:  " + fmt(calcData.eff),
      "",
      "-- LOAN --",
      "Loan amount:      " + fmt(calcData.pLoan),
      "Interest rate:    " + rate + "%",
      "Loan term:        " + term + " years",
      "Est. repayment:   " + fmt(calcData.pRepay) + "/mo",
      "",
      "Kind regards",
    ];
    const subject = encodeURIComponent("First Home Buyer Enquiry - Taxnet");
    const body = encodeURIComponent(lines.join("\r\n"));
    return "mailto:ben@taxnet.com.au?subject=" + subject + "&body=" + body;
  }, [price, state, isJoint, isFHB, calcData.eff, calcData.pLoan, rate, term, calcData.pRepay]);

  // Cost Bar items
  const costBarItems = useMemo(() => {
    const items = [
      { label: "Deposit", value: calcData.pDep, color: "#0A0D0B" },
      { label: "Stamp duty", value: calcData.duty, color: "#C5A869" },
      {
        label: "Other costs",
        value: calcData.conv + calcData.insp + calcData.misc,
        color: "#6B7C72",
      },
    ];
    if (calcData.pLMI > 0) {
      items.push({ label: "LMI", value: calcData.pLMI, color: "#B94A48" });
    }
    const total = items.reduce((acc, curr) => acc + curr.value, 0);
    return { items, total };
  }, [calcData]);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        border: "1px solid #E2ECE5",
        boxShadow: "0 18px 48px rgba(10, 13, 11, 0.06)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "0",
        }}
      >
        {/* ─── LEFT COLUMN: INTERACTIVE CONTROLS ─── */}
        <div
          style={{
            padding: "clamp(1.75rem, 3.5vw, 2.75rem)",
            backgroundColor: "#FAFBF9",
            borderRight: "1px solid #E2ECE5",
          }}
        >
          <div style={{ marginBottom: "1.75rem" }}>
            <span
              style={{
                color: "#A18650",
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              First Home Assessment
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-monety), "Playfair Display", Georgia, serif',
                fontSize: "clamp(1.75rem, 2.6vw, 2.2rem)",
                color: "#0A0D0B",
                marginTop: "0.35rem",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Enter Your Scenario
            </h2>
            <p style={{ fontSize: "0.88rem", color: "#54655B", margin: "0.4rem 0 0" }}>
              Explore how much cash you actually need to buy, taking into account government guarantees, stamp duty relief, and fees.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Purchase Price */}
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A0D0B" }}>
                  Estimated Purchase Price
                </label>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#A18650" }}>
                  {fmt(price)}
                </span>
              </div>
              <input
                type="range"
                min="350000"
                max="2000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "#A18650",
                  height: "6px",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                {[550000, 650000, 750000, 850000, 1000000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setPrice(preset)}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "4px 8px",
                      borderRadius: "6px",
                      border: "1px solid #E2ECE5",
                      backgroundColor: price === preset ? "#0A0D0B" : "#FFFFFF",
                      color: price === preset ? "#FFFFFF" : "#54655B",
                      cursor: "pointer",
                      transition: "all 150ms ease",
                    }}
                  >
                    {fmt(preset)}
                  </button>
                ))}
              </div>
            </div>

            {/* State & Area Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#0A0D0B",
                    marginBottom: "4px",
                  }}
                >
                  State / Territory
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid #D1DCD5",
                    backgroundColor: "#FFFFFF",
                    padding: "0 10px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0A0D0B",
                    outline: "none",
                  }}
                >
                  {["VIC", "NSW", "QLD", "WA", "SA", "TAS", "ACT", "NT"].map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#0A0D0B",
                    marginBottom: "4px",
                  }}
                >
                  Location Type
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value as "metro" | "regional")}
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid #D1DCD5",
                    backgroundColor: "#FFFFFF",
                    padding: "0 10px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    color: "#0A0D0B",
                    outline: "none",
                  }}
                >
                  <option value="metro">Capital / Metro</option>
                  <option value="regional">Regional</option>
                </select>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "4px",
                }}
              >
                Property Type
              </label>
              <select
                value={proptype}
                onChange={(e) =>
                  setProptype(e.target.value as "established" | "new" | "land")
                }
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #D1DCD5",
                  backgroundColor: "#FFFFFF",
                  padding: "0 10px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#0A0D0B",
                  outline: "none",
                }}
              >
                <option value="established">Established Home (Existing)</option>
                <option value="new">New Build / Off-the-Plan</option>
                <option value="land">Vacant Land</option>
              </select>
            </div>

            {/* Solo or Joint Toggle */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#0A0D0B",
                  marginBottom: "6px",
                }}
              >
                Buying Arrangement
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  backgroundColor: "#FFFFFF",
                  padding: "4px",
                  borderRadius: "10px",
                  border: "1px solid #E2ECE5",
                }}
              >
                <button
                  type="button"
                  onClick={() => setIsJoint(false)}
                  style={{
                    padding: "8px",
                    borderRadius: "7px",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    backgroundColor: !isJoint ? "#0A0D0B" : "transparent",
                    color: !isJoint ? "#FFFFFF" : "#54655B",
                    transition: "all 150ms ease",
                  }}
                >
                  Buying Solo
                </button>
                <button
                  type="button"
                  onClick={() => setIsJoint(true)}
                  style={{
                    padding: "8px",
                    borderRadius: "7px",
                    border: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    backgroundColor: isJoint ? "#0A0D0B" : "transparent",
                    color: isJoint ? "#FFFFFF" : "#54655B",
                    transition: "all 150ms ease",
                  }}
                >
                  With a Partner
                </button>
              </div>
            </div>

            {/* Savings Inputs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isJoint ? "1fr 1fr" : "1fr",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#0A0D0B",
                    marginBottom: "4px",
                  }}
                >
                  {isJoint ? "Your Savings ($)" : "Current Savings ($)"}
                </label>
                <input
                  type="number"
                  step="5000"
                  value={savings}
                  onChange={(e) => setSavings(Math.max(0, Number(e.target.value)))}
                  style={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid #D1DCD5",
                    backgroundColor: "#FFFFFF",
                    padding: "0 10px",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#0A0D0B",
                    outline: "none",
                  }}
                />
              </div>

              {isJoint && (
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      marginBottom: "4px",
                    }}
                  >
                    Partner&apos;s Savings ($)
                  </label>
                  <input
                    type="number"
                    step="5000"
                    value={partnerSavings}
                    onChange={(e) => setPartnerSavings(Math.max(0, Number(e.target.value)))}
                    style={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "8px",
                      border: "1px solid #D1DCD5",
                      backgroundColor: "#FFFFFF",
                      padding: "0 10px",
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "#0A0D0B",
                      outline: "none",
                    }}
                  />
                </div>
              )}
            </div>

            {/* First Home Buyer Checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "10px",
                backgroundColor: isFHB ? "rgba(197, 168, 105, 0.12)" : "#FFFFFF",
                border: isFHB
                  ? "1px solid rgba(197, 168, 105, 0.45)"
                  : "1px solid #E2ECE5",
                cursor: "pointer",
                transition: "all 180ms ease",
              }}
            >
              <input
                type="checkbox"
                checked={isFHB}
                onChange={(e) => setIsFHB(e.target.checked)}
                style={{
                  width: "18px",
                  height: "18px",
                  accentColor: "#A18650",
                  cursor: "pointer",
                }}
              />
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0A0D0B" }}>
                I am a First Home Buyer (Qualify for schemes &amp; relief)
              </span>
            </label>

            {/* Advanced Settings Toggle */}
            <div>
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#A18650",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                }}
              >
                <span>{showAdvanced ? "▲ Hide Loan Settings" : "▼ Edit Loan Settings (Rate & Term)"}</span>
              </button>

              {showAdvanced && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "12px",
                    borderRadius: "10px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2ECE5",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#54655B", marginBottom: "3px" }}>
                      Example Rate (% p.a.)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      style={{
                        width: "100%",
                        height: "36px",
                        borderRadius: "6px",
                        border: "1px solid #D1DCD5",
                        padding: "0 8px",
                        fontSize: "0.85rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#54655B", marginBottom: "3px" }}>
                      Loan Term (Years)
                    </label>
                    <select
                      value={term}
                      onChange={(e) => setTerm(Number(e.target.value))}
                      style={{
                        width: "100%",
                        height: "36px",
                        borderRadius: "6px",
                        border: "1px solid #D1DCD5",
                        padding: "0 8px",
                        fontSize: "0.85rem",
                      }}
                    >
                      <option value="20">20 Years</option>
                      <option value="25">25 Years</option>
                      <option value="30">30 Years (Most Common)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: DYNAMIC RESULTS & VISUALIZATIONS ─── */}
        <div style={{ padding: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
          {/* Main KPI Card */}
          <div
            style={{
              backgroundColor: "#0A0D0B",
              color: "#FFFFFF",
              borderRadius: "18px",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(197, 168, 105, 0.35)",
              boxShadow: "0 12px 32px rgba(10, 13, 11, 0.3)",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                color: "#C5A869",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Total Cash Required to Buy
            </div>

            <div
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {fmt(calcData.pCash)}
            </div>

            <div
              style={{
                fontSize: "0.88rem",
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: "4px",
                marginBottom: "1.25rem",
              }}
            >
              {fmt(calcData.pDep)} deposit + {fmt(calcData.pCash - calcData.pDep)} in upfront costs &amp; fees
            </div>

            {/* 3 Metric Pills */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.6)" }}>Estimated Loan</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>{fmt(calcData.pLoan)}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.6)" }}>Monthly Repayment</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#C5A869" }}>{fmt(calcData.pRepay)}/mo</div>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.6)" }}>Assessed LVR</div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF" }}>{pct(calcData.pLVR)}</div>
              </div>
            </div>
          </div>

          {/* Visual Stacked Cost Bar */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                height: "12px",
                borderRadius: "6px",
                overflow: "hidden",
                backgroundColor: "#E2ECE5",
                marginBottom: "8px",
              }}
            >
              {costBarItems.items.map((item, idx) => {
                const widthPct = Math.round((item.value / costBarItems.total) * 100);
                return (
                  <div
                    key={idx}
                    style={{
                      width: `${widthPct}%`,
                      backgroundColor: item.color,
                      transition: "width 250ms ease",
                    }}
                    title={`${item.label}: ${fmt(item.value)}`}
                  />
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                fontSize: "0.78rem",
                color: "#54655B",
              }}
            >
              {costBarItems.items.map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "2px",
                      backgroundColor: item.color,
                      display: "inline-block",
                    }}
                  />
                  <span>
                    <strong>{item.label}:</strong> {fmt(item.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Itemised Breakdown Table */}
          <div
            style={{
              backgroundColor: "#F9FAF9",
              borderRadius: "14px",
              padding: "1.25rem 1.5rem",
              border: "1px solid #E5ECE7",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A0D0B", marginBottom: "0.75rem" }}>
              Itemised Cost Breakdown
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                  <td style={{ padding: "7px 0", color: "#54655B" }}>
                    <strong>Deposit required</strong>
                    <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>
                      {calcData.scenA
                        ? "5% via First Home Guarantee — government backs remainder, no LMI"
                        : isFHB && !calcData.fhbg.eligible
                        ? "10% shown — FHBG price cap exceeded, LMI applies"
                        : "10% shown — LMI applies below 20% deposit"}
                    </div>
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 700, color: "#0A0D0B", verticalAlign: "top", padding: "7px 0" }}>
                    {fmt(calcData.pDep)}
                  </td>
                </tr>

                {calcData.pLMI > 0 && (
                  <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                    <td style={{ padding: "7px 0", color: "#54655B" }}>
                      <strong>Lenders Mortgage Insurance (LMI)</strong>
                      <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>
                        Charged below 20% deposit — protects the lender, not you
                      </div>
                    </td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "#B94A48", verticalAlign: "top", padding: "7px 0" }}>
                      ~{fmt(calcData.pLMI)}
                    </td>
                  </tr>
                )}

                <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                  <td style={{ padding: "7px 0", color: "#54655B" }}>
                    <strong>Stamp duty ({state})</strong>
                    <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>{calcData.dutyNote}</div>
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 700, color: "#0A0D0B", verticalAlign: "top", padding: "7px 0" }}>
                    {fmt(calcData.duty)}
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                  <td style={{ padding: "7px 0", color: "#54655B" }}>
                    <strong>Conveyancing &amp; legal fees</strong>
                    <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>Handles the legal transfer of title</div>
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 600, color: "#54655B", verticalAlign: "top", padding: "7px 0" }}>
                    ~{fmt(calcData.conv)}
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                  <td style={{ padding: "7px 0", color: "#54655B" }}>
                    <strong>Building &amp; pest inspection</strong>
                    <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>Pre-purchase structural check</div>
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 600, color: "#54655B", verticalAlign: "top", padding: "7px 0" }}>
                    ~{fmt(calcData.insp)}
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid #EEF3EF" }}>
                  <td style={{ padding: "7px 0", color: "#54655B" }}>
                    <strong>Moving, utilities &amp; council rates</strong>
                    <div style={{ fontSize: "0.75rem", color: "#7B8E83" }}>Adjustments and moving expenses</div>
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 600, color: "#54655B", verticalAlign: "top", padding: "7px 0" }}>
                    ~{fmt(calcData.misc)}
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "10px 0 0", fontWeight: 800, color: "#0A0D0B", fontSize: "0.95rem" }}>
                    Total Cash Required
                  </td>
                  <td style={{ padding: "10px 0 0", textAlign: "right", fontWeight: 800, color: "#A18650", fontSize: "1.05rem" }}>
                    {fmt(calcData.pCash)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Savings Status Card */}
          <div
            style={{
              backgroundColor: calcData.shortfall > 0 ? "#FFFDF5" : "#F4F8F5",
              borderRadius: "14px",
              padding: "1.25rem 1.5rem",
              border: `1.5px solid ${calcData.shortfall > 0 ? "#E5D6B6" : "#A2CDB0"}`,
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A0D0B" }}>
                Total Cash Available
              </span>
              <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0A0D0B" }}>
                {fmt(calcData.eff)}
              </span>
            </div>

            <div style={{ fontSize: "0.8rem", color: "#54655B", marginBottom: "10px" }}>
              {isJoint
                ? `Includes your savings (${fmt(savings)}) + partner (${fmt(partnerSavings)})`
                : `Your declared savings (${fmt(savings)})`}
              {isFHB && calcData.fhog.amount > 0 && ` + First Home Owner Grant (${fmt(calcData.fhog.amount)})`}
            </div>

            <div
              style={{
                paddingTop: "8px",
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "0.92rem", fontWeight: 800, color: calcData.shortfall > 0 ? "#A18650" : "#2E7D32" }}>
                {calcData.shortfall > 0 ? "Still to Save" : "You Have Enough Funds!"}
              </span>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: calcData.shortfall > 0 ? "#A18650" : "#2E7D32" }}>
                {calcData.shortfall > 0 ? `${fmt(calcData.shortfall)} needed` : `${fmt(calcData.surplus)} surplus`}
              </span>
            </div>

            {calcData.shortfall > 0 && (
              <div style={{ fontSize: "0.75rem", color: "#7B8E83", marginTop: "6px" }}>
                That&apos;s approximately <strong>{fmt(calcData.shortfall / 12)}/month</strong> over 12 months, or <strong>{fmt(calcData.shortfall / 24)}/month</strong> over 24 months.
              </div>
            )}
          </div>

          {/* Government Support Accordion */}
          {isFHB && (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid #E2ECE5",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <button
                type="button"
                onClick={() => setSchemesOpen(!schemesOpen)}
                style={{
                  width: "100%",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#F9FAF9",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#A18650", fontSize: "1.1rem" }}>★</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0A0D0B" }}>
                    Your First Home Buyer Government Schemes Status
                  </span>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#54655B" }}>{schemesOpen ? "▲" : "▼"}</span>
              </button>

              {schemesOpen && (
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* FHBG 5% Scheme */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      backgroundColor: calcData.fhbg.eligible ? "#F4F8F5" : "#FFFBF4",
                      border: `1px solid ${calcData.fhbg.eligible ? "#A2CDB0" : "#E8A04A"}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          backgroundColor: calcData.fhbg.eligible ? "#0A0D0B" : "#7C3A00",
                          color: calcData.fhbg.eligible ? "#C5A869" : "#FFF",
                        }}
                      >
                        {calcData.fhbg.eligible ? "✓ Likely Eligible" : "⚠ Not Eligible at this Price"}
                      </span>
                      <strong style={{ fontSize: "0.85rem", color: "#0A0D0B" }}>
                        5% First Home Guarantee (FHBG)
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#4A5A50", lineHeight: 1.5 }}>
                      {calcData.fhbg.eligible
                        ? `Buy with just a 5% deposit — the government guarantees the rest so lenders won't charge you LMI. The ${state} price cap for this location is ${fmt(calcData.fhbg.cap)} and your property is within this threshold.`
                        : `The 5% Deposit Scheme does not apply at this price. The ${state} price cap is ${fmt(calcData.fhbg.cap)} — your property at ${fmt(price)} is ${fmt(price - calcData.fhbg.cap)} above the cap. LMI will apply if borrowing over 80%.`}
                    </p>
                  </div>

                  {/* Stamp Duty Relief */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      backgroundColor: !calcData.above ? "#F4F8F5" : "#FFFBF4",
                      border: `1px solid ${!calcData.above ? "#A2CDB0" : "#E8A04A"}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          backgroundColor: !calcData.above ? "#0A0D0B" : "#7C3A00",
                          color: !calcData.above ? "#C5A869" : "#FFF",
                        }}
                      >
                        {!calcData.above ? "✓ Concession / Exemption Applies" : "⚠ Standard Rate Applies"}
                      </span>
                      <strong style={{ fontSize: "0.85rem", color: "#0A0D0B" }}>
                        State Stamp Duty Relief ({state})
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#4A5A50", lineHeight: 1.5 }}>
                      {calcData.dutyNote}. Stamp duty is payable at settlement from your own funds and cannot be added to the mortgage.
                    </p>
                  </div>

                  {/* FHOG Grant */}
                  <div
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      backgroundColor: calcData.fhog.amount > 0 ? "#F4F8F5" : "#FAFBF9",
                      border: "1px solid #E2ECE5",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          backgroundColor: calcData.fhog.amount > 0 ? "#0A0D0B" : "#F0F0EE",
                          color: calcData.fhog.amount > 0 ? "#C5A869" : "#6B6B6B",
                        }}
                      >
                        {calcData.fhog.amount > 0
                          ? `✓ ${fmt(calcData.fhog.amount)} Grant Available`
                          : "Not Applicable"}
                      </span>
                      <strong style={{ fontSize: "0.85rem", color: "#0A0D0B" }}>
                        First Home Owner Grant (FHOG)
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.8rem", color: "#4A5A50", lineHeight: 1.5 }}>
                      {calcData.fhog.amount > 0
                        ? `Buying a new or off-the-plan property in ${state} may entitle you to a ${fmt(calcData.fhog.amount)} cash grant at settlement.`
                        : proptype === "established"
                        ? "The FHOG only applies to brand-new builds and off-the-plan homes — it does not apply to established properties."
                        : state === "ACT"
                        ? "The ACT does not offer a cash FHOG. Full stamp duty exemption is the primary support mechanism."
                        : `In ${state}, the FHOG is capped at new homes valued up to ${fmt(calcData.fhog.cap)}.`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Deposit Comparison Grid */}
          <div style={{ marginBottom: "1.75rem" }}>
            <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0A0D0B", marginBottom: "0.75rem" }}>
              Compare Your Deposit Paths
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "10px",
              }}
            >
              {/* Option 1: 5% Deposit */}
              <div
                style={{
                  backgroundColor: calcData.scenA ? "#FFFFFF" : "#FAFBF9",
                  borderRadius: "14px",
                  padding: "1rem",
                  border: calcData.scenA ? "2px solid #C5A869" : "1px solid #E2ECE5",
                  position: "relative",
                }}
              >
                {calcData.scenA && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-9px",
                      right: "12px",
                      backgroundColor: "#C5A869",
                      color: "#0A0D0B",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      padding: "2px 8px",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                    }}
                  >
                    FHBG Choice
                  </span>
                )}
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0A0D0B" }}>5% Deposit</div>
                <div style={{ fontSize: "0.75rem", color: "#54655B", margin: "2px 0 10px" }}>
                  {calcData.scenA ? "No LMI via FHBG" : "LMI applies"}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Deposit: <strong>{fmt(calcData.dep5)}</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>LMI: <strong>{calcData.lmi5 > 0 ? fmt(calcData.lmi5) : "$0"}</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Cash Needed: <strong>{fmt(calcData.cash5)}</strong></div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0A0D0B", marginTop: "6px" }}>
                  {fmt(calcData.repay5)}/mo
                </div>
              </div>

              {/* Option 2: 10% Deposit */}
              <div
                style={{
                  backgroundColor: !calcData.scenA ? "#FFFFFF" : "#FAFBF9",
                  borderRadius: "14px",
                  padding: "1rem",
                  border: !calcData.scenA ? "2px solid #0A0D0B" : "1px solid #E2ECE5",
                }}
              >
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0A0D0B" }}>10% Deposit</div>
                <div style={{ fontSize: "0.75rem", color: "#54655B", margin: "2px 0 10px" }}>With LMI</div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Deposit: <strong>{fmt(calcData.dep10)}</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#B94A48" }}>LMI: <strong>~{fmt(calcData.lmi10)}</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Cash Needed: <strong>{fmt(calcData.cash10)}</strong></div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0A0D0B", marginTop: "6px" }}>
                  {fmt(calcData.repay10)}/mo
                </div>
              </div>

              {/* Option 3: 20% Deposit */}
              <div
                style={{
                  backgroundColor: "#FAFBF9",
                  borderRadius: "14px",
                  padding: "1rem",
                  border: "1px solid #E2ECE5",
                }}
              >
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0A0D0B" }}>20% Deposit</div>
                <div style={{ fontSize: "0.75rem", color: "#2E7D32", fontWeight: 700, margin: "2px 0 10px" }}>No LMI</div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Deposit: <strong>{fmt(calcData.dep20)}</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#2E7D32" }}>LMI: <strong>$0</strong></div>
                <div style={{ fontSize: "0.78rem", color: "#54655B" }}>Cash Needed: <strong>{fmt(calcData.cash20)}</strong></div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0A0D0B", marginTop: "6px" }}>
                  {fmt(calcData.repay20)}/mo
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href={emailHref}
              style={{
                flex: "1 1 200px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#C5A869",
                color: "#0A0D0B",
                fontWeight: 800,
                fontSize: "0.92rem",
                padding: "14px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(197, 168, 105, 0.35)",
                transition: "all 180ms ease",
              }}
            >
              <span>Email Scenario to Ben Willis</span>
              <span>→</span>
            </a>

            <a
              href="#booking"
              style={{
                flex: "1 1 180px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "#0A0D0B",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.92rem",
                padding: "14px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                transition: "all 180ms ease",
              }}
            >
              <span>Book a Broker Chat</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

