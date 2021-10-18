import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyCreateInput } from './quick-reply-create.input';
import { QuickReplyUpdateInput } from './quick-reply-update.input';

@ArgsType()
export class UpsertOneQuickReplyArgs {

    @Field(() => QuickReplyWhereUniqueInput, {nullable:false})
    where!: QuickReplyWhereUniqueInput;

    @Field(() => QuickReplyCreateInput, {nullable:false})
    create!: QuickReplyCreateInput;

    @Field(() => QuickReplyUpdateInput, {nullable:false})
    update!: QuickReplyUpdateInput;
}
