import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';

@ArgsType()
export class DeleteOneQuickReplyValueArgs {

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:false})
    where!: QuickReplyValueWhereUniqueInput;
}
