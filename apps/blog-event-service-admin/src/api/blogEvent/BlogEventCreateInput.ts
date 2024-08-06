import { InputJsonValue } from "../../types";

export type BlogEventCreateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
};
