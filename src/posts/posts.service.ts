import { Injectable } from '@nestjs/common';
// import { Post } from './post.entity';
import { PrismaService } from '../prisma.service';
import {
  Post,
  Prisma,
} from '@prisma/client';
import { FindManyPostArgs } from 'src/@generated/prisma-nestjs-graphql/post/find-many-post.args';
@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}


    async post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null> {
        return this.prisma.post.findUnique({
          where: postWhereUniqueInput,
        });
      }
    
      async posts(params: FindManyPostArgs): Promise<Post[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.post.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }
    
      async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        return this.prisma.post.create({
          data,
        });
      }
    
      async updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
      }): Promise<Post> {
        const { data, where } = params;
        return this.prisma.post.update({
          data,
          where,
        });
      }
    
      async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
        return this.prisma.post.delete({
          where,
        });
      }
}
