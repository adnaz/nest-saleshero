import { PrismaService } from '../prisma.service';
import { Post, Prisma } from '@prisma/client';
import { FindManyPostArgs } from 'src/@generated/prisma-nestjs-graphql/post/find-many-post.args';
export declare class PostsService {
    private prisma;
    constructor(prisma: PrismaService);
    post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null>;
    posts(params: FindManyPostArgs): Promise<Post[]>;
    createPost(data: Prisma.PostCreateInput): Promise<Post>;
    updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Post>;
    deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post>;
}
