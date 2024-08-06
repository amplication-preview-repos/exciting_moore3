import { BlogWhereUniqueInput } from "../blog/BlogWhereUniqueInput";

export type PostCreateInput = {
  blog?: BlogWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
};
