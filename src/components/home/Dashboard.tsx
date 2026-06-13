"use client";

import Hero from "./Hero";
import QuickStats from "./QuickStats";
import ISSPreview from "./ISSPreview";
import MissionModules from "./MissionModules";
import StarField from "@/components/retro/StarField";
import FeaturedConstellation from "./FeaturedConstellation";
import SpaceFactTerminal from "./SpaceFactTerminal";
import MissionAlerts from "./MissionAlerts";
import NightSkyPreview from "./NightSkyPreview";

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

          <FeaturedConstellation />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  }}
>
  <SpaceFactTerminal />
  <MissionAlerts />
</div>
<NightSkyPreview />
<MissionModules />
        </main>
      </div>
    </>
  );
}