export async function fetchCrew() {
  const response = await fetch(
    "http://api.open-notify.org/astros.json"
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch crew data"
    );
  }

  return response.json();
}