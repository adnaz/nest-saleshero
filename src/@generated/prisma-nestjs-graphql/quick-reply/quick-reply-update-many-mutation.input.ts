import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';

@InputType()
export class QuickReplyUpdateManyMutationInput {

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;
}
