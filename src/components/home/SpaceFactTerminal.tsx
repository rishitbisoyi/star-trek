"use client";

import { useEffect, useState } from "react";

const FACTS = [
  "ISS travels at approximately 27,600 km/h.",
  "One day on Venus is longer than one Venusian year.",
  "Neutron stars can spin over 600 times per second.",
  "The Milky Way contains over 100 billion stars.",
  "Betelgeuse is a red supergiant nearing the end of its life cycle.",
  "Light from the Sun takes about 8 minutes to reach Earth.",
  "Jupiter's Great Red Spot is a giant storm larger than Earth.",
  "The International Space Station orbits Earth every 90 minutes.",
  "Saturn would float in water due to its low density.",
  "The Andromeda Galaxy is moving toward the Milky Way.",
];

export default function SpaceFactTerminal() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % FACTS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        MISSION KNOWLEDGE TERMINAL
      </div>

      <div
        className="mc-panel-body"
        style={{
          minHeight: "140px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div className="section-eyebrow">
          LIVE ASTRONOMY FACT STREAM
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--green)",
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
        >
          <span style={{ color: "var(--amber)" }}>
            &gt;
          </span>{" "}
          {FACTS[index]}
          <span className="cursor" />
        </div>

        <div
          style={{
            color: "rgba(0,255,136,0.45)",
            fontSize: "0.75rem",
            letterSpacing: "2px",
          }}
        >
          DATABASE REFRESH INTERVAL :: 8 SECONDS
        </div>
      </div>
    </div>
  );
}