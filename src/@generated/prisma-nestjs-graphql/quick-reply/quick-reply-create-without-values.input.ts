import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-create-nested-one-without-quick-replies.input';

@InputType()
export class QuickReplyCreateWithoutValuesInput {

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @Field(() => ReplyCreateNestedOneWithoutQuickRepliesInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutQuickRepliesInput;
}
