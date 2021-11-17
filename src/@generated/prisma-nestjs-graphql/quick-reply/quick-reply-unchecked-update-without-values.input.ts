import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-update-one-without-quick-replies.input';

@InputType()
export class QuickReplyUncheckedUpdateWithoutValuesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => ReplyUncheckedUpdateOneWithoutQuickRepliesInput, {nullable:true})
    reply?: ReplyUncheckedUpdateOneWithoutQuickRepliesInput;
}
