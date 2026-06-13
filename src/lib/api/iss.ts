export async function fetchISSLocation() {
  try {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch ISS data"
      );
    }

    return response.json();
  } catch (error) {
    console.error(
      "ISS fetch error:",
      error
    );

    return {
      name: "iss",
      id: 25544,
      latitude: 0,
      longitude: 0,
      altitude: 0,
      velocity: 0,
      visibility: "unknown",
      footprint: 0,
      solar_lat: 0,
      solar_lon: 0,
      timestamp: Math.floor(
        Date.now() / 1000
      ),
      units: "kilometers",
    };
  }
}