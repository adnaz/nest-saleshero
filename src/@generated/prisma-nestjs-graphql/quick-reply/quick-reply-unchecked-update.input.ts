import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-update-one-without-quick-replies.input';
import { HideField } from '@nestjs/graphql';
import { QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-update-many-without-quick-reply.input';

@InputType()
export class QuickReplyUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;

    @HideField()
    reply?: ReplyUncheckedUpdateOneWithoutQuickRepliesInput;

    @HideField()
    values?: QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput;
}
