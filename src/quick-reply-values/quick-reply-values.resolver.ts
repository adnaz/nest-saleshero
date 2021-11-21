import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FindManyQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/find-many-quick-reply-value.args';
import { QuickReplyValueCreateInput } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value-create.input';
import { QuickReplyValue } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/quick-reply-value.model';
import { UpdateOneQuickReplyValueArgs } from 'src/@generated/prisma-nestjs-graphql/quick-reply-value/update-one-quick-reply-value.args';
import { UsersService } from 'src/users/users.service';
import { QuickReplyValuesService } from './quick-reply-values.service';
@Resolver( QuickReplyValue)
export class QuickReplyValuesResolver {

    constructor(private quickReplyValuesService: QuickReplyValuesService, private usersService: UsersService) { }


    @Query(returns => [QuickReplyValue])
    quickReplyValues(@Args() findManyQuickReplyValueArgs : FindManyQuickReplyValueArgs): Promise<QuickReplyValue[]> {
        return this.quickReplyValuesService.quickReplyValues(findManyQuickReplyValueArgs);
    }

    @Query(retuns => QuickReplyValue)
    async quickReplyValue(@Args('id', { type: () => Int }) id: number) {
        return this.quickReplyValuesService.quickReplyValue({ id })
    }

    @Mutation(returns =>QuickReplyValue)
    createQuickReplyValue(@Args('quickReplyValueCreateInput') quickReplyValueCreateInput: QuickReplyValueCreateInput ){
        return this.quickReplyValuesService.createQuickReplyValue(quickReplyValueCreateInput)
    }
    
    @Mutation(()=>QuickReplyValue)
    updateQuickReplyValue(@Args() updateOneQuickReplyValueArgs: UpdateOneQuickReplyValueArgs ){
        return this.quickReplyValuesService.updateQuickReplyValue(updateOneQuickReplyValueArgs)
    }

    @Mutation(()=>QuickReplyValue)
    removeQuickReplyValue(@Args('id', { type: () => Int }) id: number){
        return this.quickReplyValuesService.deleteQuickReplyValue({id});
    }

   
}
