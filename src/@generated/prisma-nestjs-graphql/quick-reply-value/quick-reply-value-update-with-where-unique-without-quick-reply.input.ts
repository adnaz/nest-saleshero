import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueUpdateWithoutQuickReplyInput } from './quick-reply-value-update-without-quick-reply.input';

@InputType()
export class QuickReplyValueUpdateWithWhereUniqueWithoutQuickReplyInput {

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:false})
    where!: QuickReplyValueWhereUniqueInput;

    @Field(() => QuickReplyValueUpdateWithoutQuickReplyInput, {nullable:false})
    data!: QuickReplyValueUpdateWithoutQuickReplyInput;
}
