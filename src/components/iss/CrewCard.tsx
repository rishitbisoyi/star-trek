"use client";

import { useCrew } from "@/hooks/useCrew";

function CrewLoader() {
  return (
    <div style={{ padding: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", lineHeight: 2 }}>
      {["QUERYING CREW MANIFEST...", "AWAITING RESPONSE...", "LOADING PERSONNEL DATA..."].map((l, i) => (
        <div key={i} style={{ color: "rgba(0,255,136,0.5)", letterSpacing: "2px" }}>
          <span style={{ color: "var(--amber)" }}>›</span> {l}
        </div>
      ))}
      <div style={{ marginTop: "0.5rem" }}>
        <span className="cursor" />
      </div>
    </div>
  );
}

export default function CrewCard() {
  const crew = useCrew();

  const issCrew: { name: string; craft: string }[] =
    crew?.people?.filter((p: { craft: string }) => p.craft === "ISS") ?? [];

  return (
    <div
      className="mc-panel"
      style={{
        display:       "flex",
        flexDirection: "column",
        minHeight:     "400px",
      }}
    >
      <div className="mc-panel-header">
        <span className="status-led green" />
        CREW MANIFEST
        {issCrew.length > 0 && (
          <span style={{
            marginLeft:    "auto",
            fontFamily:    "var(--font-display)",
            fontSize:      "1.4rem",
            color:         "var(--cyan)",
            textShadow:    "var(--glow-cyan)",
            letterSpacing: "2px",
          }}>
            {issCrew.length} ABOARD
          </span>
        )}
      </div>

      <div className="mc-panel-body" style={{ flex: 1 }}>
        {!crew ? (
          <CrewLoader />
        ) : issCrew.length === 0 ? (
          <div style={{ color: "var(--amber)", fontSize: "0.8rem", letterSpacing: "2px" }}>
            NO CREW DATA AVAILABLE
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>

            <div style={{
              fontSize:      "0.6rem",
              letterSpacing: "3px",
              color:         "rgba(0,255,136,0.35)",
              marginBottom:  "0.25rem",
            }}>
              ACTIVE ISS PERSONNEL
            </div>

            {issCrew.map((astronaut, i) => (
              <div
                key={i}
                style={{
                  display:       "flex",
                  alignItems:    "center",
                  gap:           "0.75rem",
                  padding:       "0.6rem 0.75rem",
                  background:    "rgba(0,255,136,0.03)",
                  border:        "1px solid var(--border-dim)",
                  borderRadius:  "3px",
                  transition:    "border-color 0.2s, background 0.2s",
                  cursor:        "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,136,0.4)";
                  (e.currentTarget as HTMLDivElement).style.background  = "rgba(0,255,136,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-dim)";
                  (e.currentTarget as HTMLDivElement).style.background  = "rgba(0,255,136,0.03)";
                }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width:        36,
                    height:       36,
                    borderRadius: "50%",
                    border:       "1px solid rgba(0,255,136,0.3)",
                    background:   "rgba(0,255,136,0.08)",
                    display:      "flex",
                    alignItems:   "center",
                    justifyContent:"center",
                    fontSize:     "1.1rem",
                    flexShrink:   0,
                  }}
                >
                  👨‍🚀
                </div>

                <div style={{ flex: 1, overflow: "hidden" }}>
                  <div
                    style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      "1.1rem",
                      color:         "var(--green)",
                      letterSpacing: "1px",
                      whiteSpace:    "nowrap",
                      overflow:      "hidden",
                      textOverflow:  "ellipsis",
                    }}
                  >
                    {astronaut.name}
                  </div>
                  <div
                    style={{
                      fontSize:      "0.6rem",
                      letterSpacing: "2px",
                      color:         "rgba(0,255,136,0.4)",
                    }}
                  >
                    ISS · EXPEDITION CREW
                  </div>
                </div>

                {/* Status dot */}
                <span className="status-led green" style={{ flexShrink: 0 }} />
              </div>
            ))}

            <hr className="mc-divider" />

            <div style={{
              fontSize:      "0.6rem",
              letterSpacing: "2px",
              color:         "rgba(0,255,136,0.3)",
              lineHeight:    1.8,
            }}>
              <div>STATION: ISS</div>
              <div>ORBIT: ~420 KM ALT</div>
              <div>STATUS: OPERATIONAL</div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}