"use client";

import { useMemo } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  opacity: number;
}

export default function StarField() {
  // useMemo so stars don't re-randomise on every render
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 220 }, (_, i) => ({
      id: i,
      left:     (Math.random() * 100).toFixed(2) + "%",
      top:      (Math.random() * 100).toFixed(2) + "%",
      delay:    (Math.random() * 6).toFixed(2) + "s",
      duration: (3 + Math.random() * 4).toFixed(2) + "s",
      size:     Math.random() < 0.15 ? 3 : 2,
      opacity:  0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          style={{
            left:            s.left,
            top:             s.top,
            animationDelay:  s.delay,
            animationDuration: s.duration,
            width:           s.size + "px",
            height:          s.size + "px",
            opacity:         s.opacity,
          }}
        />
      ))}

      {/* A few larger "bright" stars */}
      {[
        { left: "12%",  top: "8%"  },
        { left: "78%",  top: "15%" },
        { left: "45%",  top: "3%"  },
        { left: "92%",  top: "42%" },
        { left: "5%",   top: "67%" },
        { left: "60%",  top: "88%" },
      ].map((pos, i) => (
        <span
          key={`bright-${i}`}
          style={{
            left:   pos.left,
            top:    pos.top,
            width:  "3px",
            height: "3px",
            animationDelay:    (i * 1.1).toFixed(1) + "s",
            animationDuration: "2.5s",
            background: i % 2 === 0 ? "#a0cfff" : "#fffbe0",
            boxShadow: i % 2 === 0
              ? "0 0 4px #a0cfff"
              : "0 0 4px #fffbe0",
          }}
        />
      ))}
    </div>
  );
}