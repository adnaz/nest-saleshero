import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ReplyUncheckedUpdateManyWithoutRepliesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    order?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    fileId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reply?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    actorId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    quickReplyId?: NullableIntFieldUpdateOperationsInput;
}
