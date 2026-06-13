import { NextResponse } from "next/server";
import { fetchCrew } from "@/lib/api/crew";

export async function GET() {
  try {
    const data = await fetchCrew();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        error: "Failed to fetch crew data",
      },
      {
        status: 500,
      }
    );
  }
}