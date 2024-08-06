import { Blog } from "../blog/Blog";

export type Post = {
  blog?: Blog | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
