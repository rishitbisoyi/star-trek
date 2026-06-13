"use client";

import { useEffect, useState } from "react";

const FACTS = [
  { id: "FC-001", text: "ISS travels at approximately 27,600 km/h — fast enough to circle the globe in ~92 minutes.", clearance: "UNCLASSIFIED" },
  { id: "FC-002", text: "ISS has completed over 135,000 orbits of Earth since first launch in November 1998.",        clearance: "UNCLASSIFIED" },
  { id: "FC-003", text: "ISS has been continuously inhabited since 2 November 2000 — over two decades of occupation.", clearance: "UNCLASSIFIED" },
  { id: "FC-004", text: "ISS maintains a stable orbit at approximately 408–420 km above Earth's surface.",            clearance: "UNCLASSIFIED" },
  { id: "FC-005", text: "ISS is the largest artificial structure ever placed in orbit, spanning 109 metres wide.",    clearance: "RESTRICTED"   },
  { id: "FC-006", text: "ISS generates up to 120 kilowatts of power from its eight solar array wings.",               clearance: "UNCLASSIFIED" },
  { id: "FC-007", text: "ISS loses ~2 km of altitude per month and must perform periodic reboost manoeuvres.",        clearance: "RESTRICTED"   },
];

export default function ISSFacts() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible]  = useState(true);
  const [typed, setTyped]      = useState("");

  // Rotate facts every 8 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % FACTS.length);
        setVisible(true);
      }, 400);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  // Typewriter effect on fact change
  const fact = FACTS[current];
  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      setTyped(fact.text.slice(0, i + 1));
      i++;
      if (i >= fact.text.length) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [current, fact.text]);

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led cyan" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
        MISSION DATABASE — CLASSIFIED LOG
        <span style={{
          marginLeft:    "auto",
          fontSize:      "0.6rem",
          letterSpacing: "2px",
          color:         "rgba(0,217,255,0.45)",
        }}>
          ENTRY {current + 1} / {FACTS.length}
        </span>
      </div>

      <div
        className="mc-panel-body"
        style={{
          opacity:    visible ? 1 : 0,
          transition: "opacity 0.35s",
        }}
      >
        {/* File header */}
        <div style={{
          display:       "flex",
          gap:           "1.5rem",
          marginBottom:  "0.75rem",
          fontSize:      "0.6rem",
          letterSpacing: "2px",
          flexWrap:      "wrap",
        }}>
          <span style={{ color: "rgba(0,255,136,0.4)" }}>
            RECORD: <span style={{ color: "var(--green)" }}>{fact.id}</span>
          </span>
          <span style={{ color: "rgba(0,255,136,0.4)" }}>
            ACCESS: <span style={{
              color: fact.clearance === "RESTRICTED" ? "var(--amber)" : "var(--green)",
            }}>
              {fact.clearance}
            </span>
          </span>
          <span style={{ color: "rgba(0,255,136,0.4)" }}>
            SOURCE: <span style={{ color: "var(--cyan)" }}>NASA / ISS PROGRAM OFFICE</span>
          </span>
        </div>

        <hr className="mc-divider" />

        {/* Typewriter text */}
        <div style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      "0.85rem",
          color:         "var(--green)",
          lineHeight:    1.8,
          letterSpacing: "0.5px",
          minHeight:     "3.5rem",
        }}>
          <span style={{ color: "rgba(0,255,136,0.4)" }}>›</span>{" "}
          {typed}
          {typed.length < fact.text.length && (
            <span className="cursor" />
          )}
        </div>

        {/* Dot indicators */}
        <div style={{
          display:       "flex",
          gap:           "0.4rem",
          marginTop:     "1rem",
          alignItems:    "center",
        }}>
          {FACTS.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width:        i === current ? "18px" : "6px",
                height:       "3px",
                borderRadius: "2px",
                background:   i === current ? "var(--cyan)" : "rgba(0,255,136,0.2)",
                boxShadow:    i === current ? "var(--glow-cyan)" : "none",
                cursor:       "pointer",
                transition:   "all 0.3s",
              }}
            />
          ))}
          <span style={{
            marginLeft:    "auto",
            fontSize:      "0.6rem",
            letterSpacing: "2px",
            color:         "rgba(0,255,136,0.3)",
          }}>
            AUTO-ADVANCE 8s
          </span>
        </div>
      </div>
    </div>
  );
}