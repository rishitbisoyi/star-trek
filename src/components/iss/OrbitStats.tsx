"use client";

import { useISS } from "@/hooks/useISS";

function StatRow({ label, value, accent = false }: {
  label:   string;
  value:   string;
  accent?: boolean;
}) {
  return (
    <div style={{
      display:       "flex",
      justifyContent:"space-between",
      alignItems:    "baseline",
      padding:       "0.45rem 0",
      borderBottom:  "1px solid var(--border-dim)",
      gap:           "1rem",
    }}>
      <span style={{
        fontSize:      "0.65rem",
        letterSpacing: "2px",
        color:         "rgba(0,255,136,0.45)",
        textTransform: "uppercase",
        whiteSpace:    "nowrap",
      }}>
        {label}
      </span>
      <span style={{
        fontFamily:    "var(--font-display)",
        fontSize:      "1.3rem",
        color:         accent ? "var(--cyan)" : "var(--green)",
        textShadow:    accent ? "var(--glow-cyan)" : "var(--glow-green)",
        letterSpacing: "1px",
        textAlign:     "right",
      }}>
        {value}
      </span>
    </div>
  );
}

export default function OrbitStats() {
  const { data } = useISS();

  if (!data) {
    return (
      <div className="mc-panel">
        <div className="mc-panel-header">
          <span className="status-led amber" />
          ORBIT STATISTICS
        </div>
        <div className="mc-panel-body" style={{ color: "rgba(0,255,136,0.5)", fontSize: "0.75rem" }}>
          COMPUTING ORBITAL PARAMETERS<span className="cursor" />
        </div>
      </div>
    );
  }

  const orbitalPeriod = 92;
  const orbitsPerDay  = (1440 / orbitalPeriod).toFixed(2);
  const distPerDay    = Math.round(data.velocity * 24);
  const distPerOrbit  = Math.round(data.velocity * (orbitalPeriod / 60));

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        ORBIT STATISTICS
      </div>

      <div className="mc-panel-body">
        <div style={{
          fontSize:      "0.6rem",
          letterSpacing: "3px",
          color:         "rgba(0,255,136,0.3)",
          marginBottom:  "0.5rem",
        }}>
          COMPUTED ORBITAL PARAMETERS
        </div>

        <StatRow label="Orbital Period"    value={`${orbitalPeriod} MIN`} />
        <StatRow label="Orbits / Day"      value={orbitsPerDay}           accent />
        <StatRow label="Distance / Day"    value={`${distPerDay.toLocaleString()} KM`} />
        <StatRow label="Distance / Orbit"  value={`${distPerOrbit.toLocaleString()} KM`} />
        <StatRow label="Current Velocity"  value={`${Math.round(data.velocity).toLocaleString()} KM/H`} accent />
        <StatRow label="Orbital Altitude"  value={`${data.altitude.toFixed(1)} KM`} />
      </div>
    </div>
  );
}