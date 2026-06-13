"use client";

import { useEffect, useState } from "react";

function UTCClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      setTime(now.toUTCString().slice(17, 25)); // HH:MM:SS
      setDate(now.toUTCString().slice(0, 16));  // Day, DD Mon YYYY
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ textAlign: "right", lineHeight: 1.3 }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize:   "2.2rem",
          color:      "var(--amber)",
          textShadow: "var(--glow-amber)",
          letterSpacing: "4px",
        }}
      >
        {time || "00:00:00"}
      </div>
      <div
        style={{
          fontSize:   "0.65rem",
          color:      "rgba(255,176,0,0.55)",
          letterSpacing: "3px",
        }}
      >
        {date} UTC
      </div>
    </div>
  );
}

export default function MissionHeader() {
  const [online, setOnline] = useState(false);

  // Slight delay so "ESTABLISHING…" shows briefly then flips to ONLINE
  useEffect(() => {
    const t = setTimeout(() => setOnline(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      style={{
        display:       "flex",
        alignItems:    "center",
        justifyContent:"space-between",
        flexWrap:      "wrap",
        gap:           "1rem",
        padding:       "0.85rem 1.25rem",
        borderBottom:  "1px solid var(--border)",
        background:    "rgba(5,8,22,0.95)",
        position:      "sticky",
        top:           0,
        zIndex:        100,
        backdropFilter:"blur(6px)",
      }}
    >
      {/* Left — logo / title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        {/* Radar icon */}
        <div
          style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(0,255,136,0.15)" strokeWidth="1"/>
            <circle cx="20" cy="20" r="12" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="1"/>
            <circle cx="20" cy="20" r="6"  fill="none" stroke="rgba(0,255,136,0.3)" strokeWidth="1"/>
            <circle cx="20" cy="20" r="2"  fill="var(--green)"/>
            {/* sweep line */}
            <line x1="20" y1="20" x2="20" y2="2"
              stroke="var(--green)" strokeWidth="1.5"
              style={{
                transformOrigin: "20px 20px",
                animation: "spin-radar 3s linear infinite",
              }}
            />
          </svg>
        </div>

        <div>
          <h1
            className="glow"
            style={{
              fontFamily:    "var(--font-display)",
              fontSize:      "clamp(1.6rem, 3vw, 2.6rem)",
              letterSpacing: "4px",
              color:         "var(--green)",
              margin:        0,
            }}
          >
            ISS MISSION CONTROL
          </h1>
          <div
            style={{
              fontSize:      "0.65rem",
              letterSpacing: "4px",
              color:         "rgba(0,255,136,0.45)",
            }}
          >
            ORBITAL TELEMETRY TRACKING SYSTEM · v4.1
          </div>
        </div>
      </div>

      {/* Centre — status badges */}
      <div
        style={{
          display:   "flex",
          gap:       "1.5rem",
          flexWrap:  "wrap",
          alignItems:"center",
        }}
      >
        {[
          { label: "UPLINK",    color: "green" },
          { label: "TELEMETRY", color: "green" },
          { label: "ORBIT DATA",color: "green" },
          {
            label: online ? "ONLINE" : "CONNECTING",
            color: online ? "green" : "amber",
          },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              display:   "flex",
              alignItems:"center",
              gap:       "0.4rem",
              fontSize:  "0.65rem",
              letterSpacing: "2px",
              color:     s.color === "green"
                ? "rgba(0,255,136,0.7)"
                : "rgba(255,176,0,0.8)",
            }}
          >
            <span className={`status-led ${s.color}`} />
            {s.label}
          </div>
        ))}
      </div>

      {/* Right — UTC clock */}
      <UTCClock />
    </header>
  );
}