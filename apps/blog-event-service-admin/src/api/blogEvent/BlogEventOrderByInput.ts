import { SortOrder } from "../../util/SortOrder";

export type BlogEventOrderByInput = {
  createdAt?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  updatedAt?: SortOrder;
};
