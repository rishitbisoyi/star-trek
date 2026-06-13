"use client";

import { useISS } from "@/hooks/useISS";

export default function ISSStats() {
  const { data } = useISS();

  if (!data) {
    return <p>Loading ISS Data...</p>;
  }

  return (
    <div>
      <h2>Live ISS Position</h2>

      <p>
        Latitude: {data.latitude}
      </p>

      <p>
        Longitude: {data.longitude}
      </p>

      <p>
        Last Updated:{" "}
        {new Date(
          data.timestamp * 1000
        ).toLocaleTimeString()}
      </p>
    </div>
  );
}