import { PostCreateNestedManyWithoutBlogsInput } from "./PostCreateNestedManyWithoutBlogsInput";

export type BlogCreateInput = {
  description?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutBlogsInput;
};
