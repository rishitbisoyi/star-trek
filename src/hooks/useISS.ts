"use client";

import { useEffect, useState } from "react";
import { ISSData } from "@/types/iss";

export function useISS() {
  const [data, setData] =
    useState<ISSData | null>(null);

  const [history, setHistory] =
    useState<[number, number][]>([]);

  useEffect(() => {
    async function getISS() {
      try {
        const res = await fetch("/api/iss");

        const json = await res.json();

        setData(json);

        if (
          json?.latitude !== undefined &&
          json?.longitude !== undefined
        ) {
          const lat = Number(
            json.latitude
          );

          const lon = Number(
            json.longitude
          );

          setHistory((prev) => {
            const updated = [
              ...prev,
              [lat, lon] as [number, number],
            ];

            return updated.slice(-200);
          });
        }
      } catch (error) {
        console.error(
          "ISS fetch error:",
          error
        );
      }
    }

    getISS();

    const interval = setInterval(
      getISS,
      5000
    );

    return () =>
      clearInterval(interval);
  }, []);

  return {
    data,
    history,
  };
}