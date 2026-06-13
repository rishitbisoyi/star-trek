export type EventType =
  | "solar"
  | "lunar"
  | "meteor_shower"
  | "planet_conjunction"
  | "other";

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: EventType;
}