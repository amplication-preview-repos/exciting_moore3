import { InputJsonValue } from "../../types";

export type BlogEventUpdateInput = {
  eventType?: string | null;
  payload?: InputJsonValue;
};
