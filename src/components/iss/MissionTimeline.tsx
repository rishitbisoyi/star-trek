"use client";

interface TimelineEvent {
  date:  string;
  label: string;
  note:  string;
  type:  "milestone" | "launch" | "crew";
}

const EVENTS: TimelineEvent[] = [
  { date: "1998-11-20", label: "FIRST MODULE LAUNCHED",  note: "Zarya FGB Module",       type: "launch"    },
  { date: "1998-12-04", label: "UNITY NODE DOCKED",      note: "Node 1 Attached",         type: "milestone" },
  { date: "2000-11-02", label: "CREW ABOARD",            note: "Expedition 1 Arrives",    type: "crew"      },
  { date: "2001-02-07", label: "DESTINY LAB ATTACHED",   note: "US Science Module",       type: "milestone" },
  { date: "2011-07-08", label: "LAST SHUTTLE MISSION",   note: "STS-135 Atlantis",        type: "milestone" },
  { date: "2021-04-23", label: "CREW DRAGON DOCKS",      note: "SpaceX Commercial Crew",  type: "crew"      },
];

function typeColor(t: TimelineEvent["type"]): string {
  return t === "launch"    ? "var(--amber)"
    :    t === "crew"      ? "var(--cyan)"
    :    "var(--green)";
}

function typeIcon(t: TimelineEvent["type"]): string {
  return t === "launch" ? "▲" : t === "crew" ? "◈" : "◆";
}

export default function MissionTimeline() {
  const launchDate  = new Date("1998-11-20");
  const today       = new Date();
  const daysInOrbit = Math.floor((today.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24));
  const totalOrbits = Math.floor(daysInOrbit * (1440 / 92));

  return (
    <div className="mc-panel">
      <div className="mc-panel-header">
        <span className="status-led cyan" style={{ background: "var(--cyan)", boxShadow: "0 0 6px var(--cyan)" }} />
        MISSION TIMELINE
      </div>

      <div className="mc-panel-body">

        {/* Counters */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:                 "0.5rem",
          marginBottom:        "1rem",
        }}>
          {[
            { label: "DAYS IN ORBIT", value: daysInOrbit.toLocaleString(), accent: "green" },
            { label: "TOTAL ORBITS",  value: totalOrbits.toLocaleString(), accent: "cyan"  },
          ].map((item) => (
            <div key={item.label} style={{
              background:  "rgba(0,255,136,0.04)",
              border:      "1px solid var(--border-dim)",
              borderRadius:"3px",
              padding:     "0.5rem 0.75rem",
              textAlign:   "center",
            }}>
              <div className="telem-label">{item.label}</div>
              <div style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "1.5rem",
                color:         item.accent === "cyan" ? "var(--cyan)" : "var(--green)",
                textShadow:    item.accent === "cyan" ? "var(--glow-cyan)" : "var(--glow-green)",
                letterSpacing: "1px",
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Event log */}
        <div style={{
          fontSize:      "0.6rem",
          letterSpacing: "3px",
          color:         "rgba(0,255,136,0.3)",
          marginBottom:  "0.5rem",
        }}>
          MISSION LOG — KEY EVENTS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              style={{
                display:       "flex",
                gap:           "0.75rem",
                alignItems:    "flex-start",
                paddingBottom: "0.6rem",
                position:      "relative",
              }}
            >
              {/* Vertical line */}
              {i < EVENTS.length - 1 && (
                <div style={{
                  position: "absolute",
                  left:     "5px",
                  top:      "14px",
                  bottom:   0,
                  width:    "1px",
                  background: "rgba(0,255,136,0.12)",
                }} />
              )}

              {/* Icon dot */}
              <span style={{
                color:      typeColor(ev.type),
                fontSize:   "0.7rem",
                flexShrink: 0,
                marginTop:  "2px",
                width:      "12px",
                textAlign:  "center",
              }}>
                {typeIcon(ev.type)}
              </span>

              <div>
                <div style={{
                  fontSize:      "0.6rem",
                  letterSpacing: "2px",
                  color:         "rgba(0,255,136,0.35)",
                }}>
                  {ev.date}
                </div>
                <div style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "0.95rem",
                  color:         typeColor(ev.type),
                  letterSpacing: "1px",
                  lineHeight:    1.2,
                }}>
                  {ev.label}
                </div>
                <div style={{
                  fontSize:      "0.6rem",
                  letterSpacing: "1px",
                  color:         "rgba(0,255,136,0.4)",
                }}>
                  {ev.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}