"use client";

import { useEffect, useState } from "react";

const ALERTS = [
  "[ONLINE] ISS telemetry synchronized",
  "[INFO] Constellation database loaded",
  "[INFO] Night Sky observation module ready",
  "[ONLINE] Orbital tracking active",
  "[INFO] Solar position calculations updated",
  "[ONLINE] Deep space archive accessible",
  "[INFO] Mission control systems nominal",
  "[ONLINE] Data uplink established",
];

export default function MissionAlerts() {
  const [items, setItems] = useState(ALERTS.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const nextIndex = Math.floor(
          Math.random() * ALERTS.length
        );

        return [
          ALERTS[nextIndex],
          ...prev.slice(0, 3),
        ];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        OPERATIONS FEED
      </div>

      <div className="mc-panel-body">
        <div className="section-eyebrow">
          LIVE MISSION EVENTS
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              style={{
                borderLeft:
                  "2px solid var(--green)",
                paddingLeft: "0.75rem",
                color: "var(--green)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}