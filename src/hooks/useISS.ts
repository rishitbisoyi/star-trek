"use client";

import { useEffect, useState } from "react";
import { ISSData } from "@/types/iss";

export function useISS() {
  const [data, setData] = useState<ISSData | null>(null);

  useEffect(() => {
    async function getISS() {
      const res = await fetch("/api/iss");
      const json = await res.json();

      setData(json);
    }

    getISS();

    const interval = setInterval(
      getISS,
      5000
    );

    return () => clearInterval(interval);
  }, []);

  return data;
}