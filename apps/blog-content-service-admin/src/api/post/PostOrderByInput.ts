import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  blogId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
