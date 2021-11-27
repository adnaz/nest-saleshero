import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { QuickReplyValue } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model';
import { FindManyQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/find-many-quick-reply.args';
import { QuickReplyCreateInput } from 'src/@generated/prisma-nestjs-graphql/quick-reply/quick-reply-create.input';
import { QuickReply } from 'src/@generated/prisma-nestjs-graphql/quick-reply/quick-reply.model';
import { UpdateOneQuickReplyArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply/update-one-quick-reply.args';
import { QuickReplyValuesService } from 'src/quick-reply-values/quick-reply-values.service';
import { UsersService } from 'src/users/users.service';
import { QuickRepliesService } from './quick-replies.service';
@Resolver( QuickReply)
export class QuickRepliesResolver {

    constructor(private quickRepliesService: QuickRepliesService, private usersService: UsersService, private quickReplyValuesService:QuickReplyValuesService) { }


    @Query(returns => [QuickReply])
    quickReplies(@Args() findManyQuickReplyArgs : FindManyQuickReplyArgs): Promise<QuickReply[]> {
        return this.quickRepliesService.quickReplies(findManyQuickReplyArgs);
    }

    @Query(retuns => QuickReply)
    async quickReply(@Args('id', { type: () => Int }) id: number) {
        return this.quickRepliesService.quickReply({ id })
    }

    @Mutation(returns =>QuickReply)
    createQuickReply(@Args('quickReplyCreateInput') quickReplyCreateInput: QuickReplyCreateInput ){
        return this.quickRepliesService.createQuickReply(quickReplyCreateInput)
    }
    
    @Mutation(()=>QuickReply)
    updateQuickReply(@Args() updateOneQuickReplyArgs: UpdateOneQuickReplyArgs){
        return this.quickRepliesService.updateQuickReply(updateOneQuickReplyArgs)
    }

    @Mutation(()=>QuickReply)
    removeQuickReply(@Args('id', { type: () => Int }) id: number){
        return this.quickRepliesService.deleteQuickReply({id});
    }

    @ResolveField(()=>[QuickReplyValue])
    async values(@Parent() quickReply: QuickReply) {
        const { id } = quickReply;
        return this.quickReplyValuesService.quickReplyValues({where:{quickReplyId:{equals:id}}})
    }

   
}
