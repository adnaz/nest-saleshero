import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyUncheckedCreateNestedOneWithoutQuickReplyInput } from '../reply/reply-unchecked-create-nested-one-without-quick-reply.input';

@InputType()
export class QuickReplyUncheckedCreateWithoutValuesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:true})
    type?: keyof typeof TypeReply;

    @Field(() => ReplyUncheckedCreateNestedOneWithoutQuickReplyInput, {nullable:true})
    reply?: ReplyUncheckedCreateNestedOneWithoutQuickReplyInput;
}
