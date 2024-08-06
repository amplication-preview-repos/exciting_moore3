import { PostUpdateManyWithoutBlogsInput } from "./PostUpdateManyWithoutBlogsInput";

export type BlogUpdateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutBlogsInput;
};
