import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUpdateOneWithoutQuickRepliesInput } from '../reply/reply-update-one-without-quick-replies.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';

@InputType()
export class QuickReplyUpdateInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => ReplyUpdateOneWithoutQuickRepliesInput, {nullable:true})
    reply?: ReplyUpdateOneWithoutQuickRepliesInput;

    @Field(() => QuickReplyValueUpdateManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
