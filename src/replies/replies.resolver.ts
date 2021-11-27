import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ReplyCreateInput } from 'src/@generated/prisma-nestjs-graphql/reply/reply-create.input';
import { Reply } from 'src/@generated/prisma-nestjs-graphql/reply/reply.model';
import { FindManyReplyArgs } from 'src/@generated/prisma-nestjs-graphql/reply/find-many-reply.args';
import { UpdateOneReplyArgs } from 'src/@generated/prisma-nestjs-graphql/reply/update-one-reply.args';
import { UsersService } from 'src/users/users.service';
import { RepliesService } from './replies.service';
import { SectionsService } from 'src/sections/sections.service';
import { Prisma } from '@prisma/client';
import { QuickRepliesService } from 'src/quick-replies/quick-replies.service';
import { QuickReply } from 'src/@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model';
import { ActorsService } from 'src/actors/actors.service';
import { FilesService } from 'src/files/files.service';
@Resolver( Reply)
export class RepliesResolver {

    constructor(private repliesService: RepliesService, private sectionsService: SectionsService,private quickRepliesService:QuickRepliesService,private actorsService:ActorsService, private filesService:FilesService) { }


    @Query(returns => [Reply])
    replies(@Args() findManyReplyArgs : FindManyReplyArgs): Promise<Reply[]> {
        return this.repliesService.replies(findManyReplyArgs);
    }

    @Query(retuns => Reply)
    async reply(@Args('id', { type: () => Int }) id: number) {
        return this.repliesService.reply({ id })
    }

    @Mutation(returns =>Reply)
    createReply(@Args('replyCreateInput') replyCreateInput:ReplyCreateInput ){
        return this.repliesService.createReply(replyCreateInput)
    }
    
    @Mutation(()=>Reply)
    updateReply(@Args() updateOneReplyArgs: UpdateOneReplyArgs){
        return this.repliesService.updateReply(updateOneReplyArgs)
    }

    @Mutation(()=>Reply)
    removeReply(@Args('id', { type: () => Int }) id: number){
        return this.repliesService.deleteReply({id});
    }

    @ResolveField()
    async file(@Parent() reply: Reply) {
        const { fileId } = reply;
        if(fileId){
            return this.filesService.file({ id:fileId });
        }
    }

    @ResolveField()
    async section(@Parent() reply: Reply) {
        const { sectionId } = reply;
        if(sectionId){
            return this.sectionsService.section({ id:sectionId });
        }
    }
    @ResolveField()
    async quickReply(@Parent() reply: Reply) {
        const { quickReplyId } = reply;
        return this.quickRepliesService.quickReply({id:quickReplyId});
    }
    @ResolveField()
    async user(@Parent() reply: Reply) {
        const { actorId } = reply;
        return this.actorsService.actor({id:actorId});
    }
}
