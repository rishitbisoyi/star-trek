"use client";

import Link from "next/link";

export default function Hero() {
  const utcTime = new Date().toUTCString();

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        STAR TREK COMMAND CENTER
      </div>

      <div
        className="mc-panel-body"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <div className="section-eyebrow">
            SPACE EXPLORATION PLATFORM
          </div>

          <h1
            style={{
              fontSize: "4rem",
              color: "var(--green)",
              textShadow: "var(--glow-green)",
            }}
          >
            MISSION CONTROL
          </h1>

          <p
            style={{
              maxWidth: "700px",
              color: "rgba(0,255,136,0.75)",
              marginTop: "0.5rem",
            }}
          >
            Real-time ISS telemetry, night sky observation,
            constellation database and planetary exploration
            systems unified under a single command interface.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <Link href="/iss-tracker" className="quick-btn">
            ISS TRACKER
          </Link>

          <Link href="/night-sky" className="quick-btn">
            NIGHT SKY
          </Link>

          <Link href="/constellations" className="quick-btn">
            CONSTELLATIONS
          </Link>

          <Link href="/celestial-events" className="quick-btn">
            EVENTS
          </Link>

          <Link href="/planets" className="quick-btn">
            PLANETS
          </Link>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "2px",
            color: "rgba(0,255,136,0.45)",
          }}
        >
          UTC TIME :: {utcTime}
        </div>
      </div>
    </div>
  );
}