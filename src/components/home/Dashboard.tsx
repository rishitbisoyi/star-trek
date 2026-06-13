"use client";

import Hero from "./Hero";
import QuickStats from "./QuickStats";
import ISSPreview from "./ISSPreview";
import MissionModules from "./MissionModules";
import StarField from "@/components/retro/StarField";

export default function Dashboard() {
  return (
    <>
      <StarField />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <main
          style={{
            maxWidth: "1700px",
            margin: "0 auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Hero />

          <QuickStats />

          <ISSPreview />

          <MissionModules />
        </main>
      </div>
    </>
  );
}