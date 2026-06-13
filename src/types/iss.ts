export interface ISSData {
  id: number;
  name: string;

  latitude: number;
  longitude: number;

  altitude: number;
  velocity: number;

  visibility: string;

  footprint: number;

  solar_lat: number;
  solar_lon: number;

  timestamp: number;

  units: string;
}

export interface CrewMember {
  name: string;
  craft: string;
}