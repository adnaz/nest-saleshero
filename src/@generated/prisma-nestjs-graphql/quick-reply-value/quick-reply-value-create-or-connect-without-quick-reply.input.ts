import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { QuickReplyValueCreateWithoutQuickReplyInput } from './quick-reply-value-create-without-quick-reply.input';

@InputType()
export class QuickReplyValueCreateOrConnectWithoutQuickReplyInput {

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:false})
    where!: QuickReplyValueWhereUniqueInput;

    @Field(() => QuickReplyValueCreateWithoutQuickReplyInput, {nullable:false})
    create!: QuickReplyValueCreateWithoutQuickReplyInput;
}
