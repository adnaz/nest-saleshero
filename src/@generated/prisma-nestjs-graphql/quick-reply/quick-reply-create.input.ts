import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';
import { ReplyCreateNestedOneWithoutQuickRepliesInput } from '../reply/reply-create-nested-one-without-quick-replies.input';
import { QuickReplyValueCreateNestedManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-create-nested-many-without-quick-reply.input';

@InputType()
export class QuickReplyCreateInput {

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;

    @Field(() => ReplyCreateNestedOneWithoutQuickRepliesInput, {nullable:true})
    reply?: ReplyCreateNestedOneWithoutQuickRepliesInput;

    @Field(() => QuickReplyValueCreateNestedManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueCreateNestedManyWithoutQuickReplyInput;
}
