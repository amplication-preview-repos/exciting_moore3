/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Post as PrismaPost, Blog as PrismaBlog } from "@prisma/client";

export class PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PostCountArgs, "select">): Promise<number> {
    return this.prisma.post.count(args);
  }

  async posts(args: Prisma.PostFindManyArgs): Promise<PrismaPost[]> {
    return this.prisma.post.findMany(args);
  }
  async post(args: Prisma.PostFindUniqueArgs): Promise<PrismaPost | null> {
    return this.prisma.post.findUnique(args);
  }
  async createPost(args: Prisma.PostCreateArgs): Promise<PrismaPost> {
    return this.prisma.post.create(args);
  }
  async updatePost(args: Prisma.PostUpdateArgs): Promise<PrismaPost> {
    return this.prisma.post.update(args);
  }
  async deletePost(args: Prisma.PostDeleteArgs): Promise<PrismaPost> {
    return this.prisma.post.delete(args);
  }

  async getBlog(parentId: string): Promise<PrismaBlog | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .blog();
  }
}
