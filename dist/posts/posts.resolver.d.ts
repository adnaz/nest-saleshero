import { PostCreateInput } from 'src/@generated/prisma-nestjs-graphql/post/post-create.input';
import { Post } from 'src/@generated/prisma-nestjs-graphql/post/post.model';
import { FindManyPostArgs } from 'src/@generated/prisma-nestjs-graphql/post/find-many-post.args';
import { UpdateOnePostArgs } from 'src/@generated/prisma-nestjs-graphql/post/update-one-post.args';
import { UsersService } from 'src/users/users.service';
import { PostsService } from './posts.service';
export declare class PostsResolver {
    private postsService;
    private usersService;
    constructor(postsService: PostsService, usersService: UsersService);
    posts(findManyPostArgs: FindManyPostArgs): Promise<Post[]>;
    post(id: number): Promise<import(".prisma/client").Post>;
    createPost(postCreateInput: PostCreateInput): Promise<import(".prisma/client").Post>;
    updatePost(updateOnePostArgs: UpdateOnePostArgs): Promise<import(".prisma/client").Post>;
    removePost(id: number): Promise<import(".prisma/client").Post>;
    author(post: Post): Promise<import(".prisma/client").User>;
}
