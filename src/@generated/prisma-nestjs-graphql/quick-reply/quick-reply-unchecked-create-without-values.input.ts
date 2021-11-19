import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-create-nested-one-without-quick-replies.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class QuickReplyUncheckedCreateWithoutValuesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @HideField()
    reply?: ReplyUncheckedCreateNestedOneWithoutQuickRepliesInput;
}
