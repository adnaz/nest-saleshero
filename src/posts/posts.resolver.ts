import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PostCreateInput } from 'src/@generated/prisma-nestjs-graphql/post/post-create.input';
import { Post } from 'src/@generated/prisma-nestjs-graphql/post/post.model';
import { FindManyPostArgs } from 'src/@generated/prisma-nestjs-graphql/post/find-many-post.args';
import { UpdateOnePostArgs } from 'src/@generated/prisma-nestjs-graphql/post/update-one-post.args';
import { UsersService } from 'src/users/users.service';
import { PostsService } from './posts.service';
import { Prisma } from '@prisma/client';
@Resolver( Post)
export class PostsResolver {

    constructor(private postsService: PostsService, private usersService: UsersService) { }


    @Query(returns => [Post])
    posts(@Args() findManyPostArgs : FindManyPostArgs): Promise<Post[]> {
        return this.postsService.posts(findManyPostArgs);
    }

    @Query(retuns => Post)
    async post(@Args('id', { type: () => Int }) id: number) {
        return this.postsService.post({ id })
    }

    @Mutation(returns =>Post)
    createPost(@Args('postCreateInput') postCreateInput:PostCreateInput ){
        return this.postsService.createPost(postCreateInput)
    }
    
    @Mutation(()=>Post)
    updatePost(@Args() updateOnePostArgs: UpdateOnePostArgs ){
        return this.postsService.updatePost(updateOnePostArgs)
    }

    @Mutation(()=>Post)
    removePost(@Args('id', { type: () => Int }) id: number){
        return this.postsService.deletePost({id});
    }

    @ResolveField()
    async author(@Parent() post: Post) {
        const { authorId } = post;
        if(authorId){
            return this.usersService.user({ id:authorId });
        }
    }
}
