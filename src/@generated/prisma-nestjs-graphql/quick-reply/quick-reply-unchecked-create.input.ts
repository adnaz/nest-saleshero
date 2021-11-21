import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyUncheckedCreateNestedOneWithoutQuickReplyInput } from '../reply/reply-unchecked-create-nested-one-without-quick-reply.input';
import { QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-create-nested-many-without-quick-reply.input';

@InputType()
export class QuickReplyUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:true})
    type?: keyof typeof TypeReply;

    @Field(() => ReplyUncheckedCreateNestedOneWithoutQuickReplyInput, {nullable:true})
    reply?: ReplyUncheckedCreateNestedOneWithoutQuickReplyInput;

    @Field(() => QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUncheckedCreateNestedManyWithoutQuickReplyInput;
}
