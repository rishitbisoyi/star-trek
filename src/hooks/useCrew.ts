"use client";

import { useEffect, useState } from "react";

export function useCrew() {
  const [crew, setCrew] =
    useState<any>(null);

  useEffect(() => {
    async function getCrew() {
      const res =
        await fetch("/api/crew");

      const json =
        await res.json();

      setCrew(json);
    }

    getCrew();
  }, []);

  return crew;
}