import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueCreateInput } from './quick-reply-value-create.input';
import { QuickReplyValueUpdateInput } from './quick-reply-value-update.input';

@ArgsType()
export class UpsertOneQuickReplyValueArgs {

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:false})
    where!: QuickReplyValueWhereUniqueInput;

    @Field(() => QuickReplyValueCreateInput, {nullable:false})
    create!: QuickReplyValueCreateInput;

    @Field(() => QuickReplyValueUpdateInput, {nullable:false})
    update!: QuickReplyValueUpdateInput;
}
