"use client";

import Link from "next/link";
import { useISS } from "@/hooks/useISS";

export default function ISSPreview() {
  const { data } = useISS();

  if (!data) {
    return (
      <div className="mc-panel">
        <div className="mc-panel-header">
          <span className="status-led amber" />
          ISS LIVE STATUS
        </div>

        <div
          className="mc-panel-body"
          style={{
            padding: "2rem",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          ACQUIRING ORBITAL TELEMETRY...
        </div>
      </div>
    );
  }

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led green" />
        ISS LIVE SNAPSHOT

        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.65rem",
            letterSpacing: "3px",
            color: "rgba(0,255,136,0.45)",
          }}
        >
          LIVE FEED
        </span>
      </div>

      <div
        className="mc-panel-body"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "1rem",
        }}
      >
        <div>
          <div className="section-eyebrow">
            CURRENT POSITION
          </div>

          <h2
            style={{
              fontSize: "2.8rem",
              color: "var(--green)",
              textShadow: "var(--glow-green)",
            }}
          >
            ISS
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <div className="telem-card">
              <div className="telem-label">
                LATITUDE
              </div>

              <div className="telem-value">
                {data.latitude.toFixed(2)}
              </div>

              <div className="telem-unit">
                DEGREES
              </div>
            </div>

            <div className="telem-card">
              <div className="telem-label">
                LONGITUDE
              </div>

              <div className="telem-value">
                {data.longitude.toFixed(2)}
              </div>

              <div className="telem-unit">
                DEGREES
              </div>
            </div>

            <div className="telem-card">
              <div className="telem-label">
                ALTITUDE
              </div>

              <div
                className="telem-value"
                style={{
                  color: "var(--cyan)",
                  textShadow: "var(--glow-cyan)",
                }}
              >
                {Math.round(data.altitude)}
              </div>

              <div className="telem-unit">
                KM
              </div>
            </div>

            <div className="telem-card">
              <div className="telem-label">
                VELOCITY
              </div>

              <div
                className="telem-value"
                style={{
                  color: "var(--amber)",
                  textShadow: "var(--glow-amber)",
                }}
              >
                {Math.round(data.velocity).toLocaleString()}
              </div>

              <div className="telem-unit">
                KM/H
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid var(--border)",
            padding: "1rem",
            borderRadius: "4px",
            background:
              "rgba(0,255,136,0.03)",
          }}
        >
          <div className="section-eyebrow">
            QUICK ACCESS
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <Link
              href="/iss-tracker"
              className="quick-btn"
            >
              OPEN TRACKER
            </Link>

            <div
              style={{
                fontSize: "0.8rem",
                color:
                  "rgba(0,255,136,0.65)",
              }}
            >
              Visibility:
            </div>

            <div
              style={{
                fontFamily:
                  "var(--font-display)",
                fontSize: "1.4rem",
              }}
            >
              {data.visibility.toUpperCase()}
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                color:
                  "rgba(0,255,136,0.45)",
              }}
            >
              Last update:
            </div>

            <div>
              {new Date(
                data.timestamp * 1000
              ).toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}