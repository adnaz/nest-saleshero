import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueUpdateInput } from './quick-reply-value-update.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';

@ArgsType()
export class UpdateOneQuickReplyValueArgs {

    @Field(() => QuickReplyValueUpdateInput, {nullable:false})
    data!: QuickReplyValueUpdateInput;

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:false})
    where!: QuickReplyValueWhereUniqueInput;
}
