import { JsonValue } from "type-fest";

export type BlogEvent = {
  createdAt: Date;
  eventType: string | null;
  id: string;
  payload: JsonValue;
  updatedAt: Date;
};
