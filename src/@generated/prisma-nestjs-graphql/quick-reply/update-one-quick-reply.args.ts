import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyUpdateInput } from './quick-reply-update.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';

@ArgsType()
export class UpdateOneQuickReplyArgs {

    @Field(() => QuickReplyUpdateInput, {nullable:false})
    data!: QuickReplyUpdateInput;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:false})
    where!: QuickReplyWhereUniqueInput;
}
