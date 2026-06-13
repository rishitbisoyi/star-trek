"use client";

import { useEffect, useState } from "react";

interface SystemItem {
  id:     string;
  label:  string;
  status: "NOMINAL" | "ACTIVE" | "STANDBY" | "WARNING";
  detail: string;
  bar?:   number; // 0–100
}

const SYSTEMS: SystemItem[] = [
  {
    id:     "tracking",
    label:  "ORBITAL TRACKING",
    status: "NOMINAL",
    detail: "SIGNAL LOCKED",
    bar:    100,
  },
  {
    id:     "telemetry",
    label:  "TELEMETRY FEED",
    status: "ACTIVE",
    detail: "5s POLL RATE",
    bar:    100,
  },
  {
    id:     "crew",
    label:  "CREW MANIFEST",
    status: "NOMINAL",
    detail: "DATA CURRENT",
    bar:    100,
  },
  {
    id:     "orbit",
    label:  "ORBIT COMPUTE",
    status: "ACTIVE",
    detail: "UPDATING",
    bar:    88,
  },
  {
    id:     "solar",
    label:  "SOLAR MONITOR",
    status: "NOMINAL",
    detail: "ALL ARRAYS OK",
    bar:    95,
  },
  {
    id:     "comms",
    label:  "COMMS UPLINK",
    status: "ACTIVE",
    detail: "TDRS CONNECTED",
    bar:    100,
  },
];

function statusColor(s: SystemItem["status"]): string {
  return s === "WARNING"  ? "red"
    :    s === "STANDBY"  ? "amber"
    :    /* active/nominal */ "green";
}

function statusTextColor(s: SystemItem["status"]): string {
  return s === "WARNING"  ? "var(--red)"
    :    s === "STANDBY"  ? "var(--amber)"
    :    "var(--green)";
}

export default function SystemStatus() {
  const [tick, setTick] = useState(0);

  // Simulate a tiny fluctuation on bar widths for "live" feel
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        SYSTEM STATUS
        <span style={{
          marginLeft: "auto",
          fontSize: "0.65rem",
          letterSpacing: "3px",
          color: "rgba(0,255,136,0.4)",
        }}>
          ALL SYSTEMS NOMINAL
        </span>
      </div>

      <div
        className="mc-panel-body"
        style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap:                 "0.75rem",
        }}
      >
        {SYSTEMS.map((sys) => {
          const col = statusColor(sys.status);
          const txt = statusTextColor(sys.status);
          const barW = sys.bar
            ? Math.max(85, sys.bar - (tick % 3 === 0 && sys.bar < 100 ? 2 : 0))
            : 100;

          return (
            <div
              key={sys.id}
              style={{
                background:  "rgba(0,255,136,0.03)",
                border:      "1px solid var(--border-dim)",
                borderRadius:"3px",
                padding:     "0.6rem 0.85rem",
              }}
            >
              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span className={`status-led ${col}`} />
                <span
                  style={{
                    fontSize:      "0.65rem",
                    letterSpacing: "2px",
                    color:         "rgba(0,255,136,0.5)",
                    flex:          1,
                  }}
                >
                  {sys.label}
                </span>
              </div>

              {/* Status text */}
              <div
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "1.1rem",
                  color:         txt,
                  letterSpacing: "2px",
                  marginBottom:  "0.35rem",
                }}
              >
                {sys.status}
              </div>

              {/* Progress bar */}
              {sys.bar !== undefined && (
                <div className="mc-bar-track">
                  <div
                    className="mc-bar-fill"
                    style={{
                      width:     barW + "%",
                      background: txt,
                      boxShadow: `0 0 6px ${txt}`,
                    }}
                  />
                </div>
              )}

              {/* Detail */}
              <div style={{
                fontSize:      "0.6rem",
                letterSpacing: "2px",
                color:         "rgba(0,255,136,0.35)",
                marginTop:     "0.3rem",
              }}>
                {sys.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}