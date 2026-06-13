export interface ISSPosition {
  latitude: string;
  longitude: string;
}

export interface ISSData {
  message: string;
  timestamp: number;
  iss_position: ISSPosition;
}