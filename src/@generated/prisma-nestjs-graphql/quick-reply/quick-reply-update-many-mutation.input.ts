import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumTypeReplyFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-reply-field-update-operations.input';

@InputType()
export class QuickReplyUpdateManyMutationInput {

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeReplyFieldUpdateOperationsInput;
}
