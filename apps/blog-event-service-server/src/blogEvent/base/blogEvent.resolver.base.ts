/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BlogEvent } from "./BlogEvent";
import { BlogEventCountArgs } from "./BlogEventCountArgs";
import { BlogEventFindManyArgs } from "./BlogEventFindManyArgs";
import { BlogEventFindUniqueArgs } from "./BlogEventFindUniqueArgs";
import { CreateBlogEventArgs } from "./CreateBlogEventArgs";
import { UpdateBlogEventArgs } from "./UpdateBlogEventArgs";
import { DeleteBlogEventArgs } from "./DeleteBlogEventArgs";
import { BlogEventService } from "../blogEvent.service";
@graphql.Resolver(() => BlogEvent)
export class BlogEventResolverBase {
  constructor(protected readonly service: BlogEventService) {}

  async _blogEventsMeta(
    @graphql.Args() args: BlogEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogEvent])
  async blogEvents(
    @graphql.Args() args: BlogEventFindManyArgs
  ): Promise<BlogEvent[]> {
    return this.service.blogEvents(args);
  }

  @graphql.Query(() => BlogEvent, { nullable: true })
  async blogEvent(
    @graphql.Args() args: BlogEventFindUniqueArgs
  ): Promise<BlogEvent | null> {
    const result = await this.service.blogEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogEvent)
  async createBlogEvent(
    @graphql.Args() args: CreateBlogEventArgs
  ): Promise<BlogEvent> {
    return await this.service.createBlogEvent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BlogEvent)
  async updateBlogEvent(
    @graphql.Args() args: UpdateBlogEventArgs
  ): Promise<BlogEvent | null> {
    try {
      return await this.service.updateBlogEvent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BlogEvent)
  async deleteBlogEvent(
    @graphql.Args() args: DeleteBlogEventArgs
  ): Promise<BlogEvent | null> {
    try {
      return await this.service.deleteBlogEvent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}