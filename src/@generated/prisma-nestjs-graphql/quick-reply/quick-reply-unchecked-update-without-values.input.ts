import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumTypeReplyFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-reply-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutQuickReplyInput } from '../reply/reply-unchecked-update-one-without-quick-reply.input';

@InputType()
export class QuickReplyUncheckedUpdateWithoutValuesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => ReplyUncheckedUpdateOneWithoutQuickReplyInput, {nullable:true})
    reply?: ReplyUncheckedUpdateOneWithoutQuickReplyInput;
}
