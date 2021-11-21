import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplyWhereUniqueInput } from './reply-where-unique.input';
import { ReplyCreateWithoutQuickReplyInput } from './reply-create-without-quick-reply.input';

@InputType()
export class ReplyCreateOrConnectWithoutQuickReplyInput {

    @Field(() => ReplyWhereUniqueInput, {nullable:false})
    where!: ReplyWhereUniqueInput;

    @Field(() => ReplyCreateWithoutQuickReplyInput, {nullable:false})
    create!: ReplyCreateWithoutQuickReplyInput;
}
