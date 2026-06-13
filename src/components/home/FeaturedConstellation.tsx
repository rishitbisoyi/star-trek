"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import constellations from "@/data/constellations.json";
import { Constellation } from "@/types/constellation";

export default function FeaturedConstellation() {
  const data = constellations as Constellation[];

  const [seed, setSeed] = useState(
    () => Math.floor(Math.random() * data.length)
  );

  const featured = useMemo(
    () => data[seed],
    [data, seed]
  );

  function randomize() {
    const next = Math.floor(
      Math.random() * data.length
    );

    setSeed(next);
  }

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led cyan" />
        FEATURED CONSTELLATION

        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.65rem",
            letterSpacing: "3px",
            color: "rgba(0,255,136,0.45)",
          }}
        >
          ASTRONOMY DATABASE
        </span>
      </div>

      <div
        className="mc-panel-body"
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "320px",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Image
            src={featured.image}
            alt={featured.name}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            <div className="section-eyebrow">
              CONSTELLATION PROFILE
            </div>

            <h2
              style={{
                fontSize: "3rem",
                color: "var(--green)",
                textShadow: "var(--glow-green)",
              }}
            >
              {featured.name}
            </h2>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "0.75rem",
              }}
            >
              <div className="telem-card">
                <div className="telem-label">
                  BRIGHTEST STAR
                </div>

                <div
                  className="telem-value"
                  style={{
                    fontSize: "1.4rem",
                  }}
                >
                  {featured.brightestStar}
                </div>
              </div>

              <div className="telem-card">
                <div className="telem-label">
                  HEMISPHERE
                </div>

                <div
                  className="telem-value"
                  style={{
                    fontSize: "1.4rem",
                  }}
                >
                  {featured.hemisphere}
                </div>
              </div>

              <div className="telem-card">
                <div className="telem-label">
                  SEASON
                </div>

                <div
                  className="telem-value"
                  style={{
                    fontSize: "1.4rem",
                  }}
                >
                  {featured.season}
                </div>
              </div>
            </div>
          </div>

          <div className="retro-card">
            <div className="section-eyebrow">
              MYTHOLOGY
            </div>

            <div
              style={{
                fontSize: "1rem",
                color: "var(--green)",
              }}
            >
              {featured.mythology}
            </div>
          </div>

          <div className="retro-card">
            <div className="section-eyebrow">
              DESCRIPTION
            </div>

            <div
              style={{
                color: "rgba(0,255,136,0.75)",
              }}
            >
              {featured.description}
            </div>
          </div>

          <div className="retro-card">
            <div className="section-eyebrow">
              FUN FACT
            </div>

            <div
              style={{
                color: "var(--cyan)",
              }}
            >
              {featured.funFact}
            </div>
          </div>

          <button
            onClick={randomize}
            className="city-btn"
            style={{
              width: "fit-content",
            }}
          >
            RANDOMIZE CONSTELLATION
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .mc-panel-body {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
