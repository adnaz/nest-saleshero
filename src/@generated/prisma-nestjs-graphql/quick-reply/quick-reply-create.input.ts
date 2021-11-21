import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyCreateNestedOneWithoutQuickReplyInput } from '../reply/reply-create-nested-one-without-quick-reply.input';
import { QuickReplyValueCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input';

@InputType()
export class QuickReplyCreateInput {

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:true})
    type?: keyof typeof TypeReply;

    @Field(() => ReplyCreateNestedOneWithoutQuickReplyInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutQuickReplyInput;

    @Field(() => QuickReplyValueCreateNestedManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueCreateNestedManyWithoutQuickReplyInput;
}
