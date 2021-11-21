import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumTypeReplyFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-reply-field-update-operations.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';

@InputType()
export class QuickReplyUpdateWithoutReplyInput {

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => QuickReplyValueUpdateManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
