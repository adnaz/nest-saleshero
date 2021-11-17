import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { QuickReplyCreateWithoutReplyInput } from './quick-reply-create-without-reply.input';

@InputType()
export class QuickReplyCreateOrConnectWithoutReplyInput {

    @Field(() => QuickReplyWhereUniqueInput, {nullable:false})
    where!: QuickReplyWhereUniqueInput;

    @Field(() => QuickReplyCreateWithoutReplyInput, {nullable:false})
    create!: QuickReplyCreateWithoutReplyInput;
}
