import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type PostUpdateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
