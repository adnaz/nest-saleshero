import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';

@InputType()
export class QuickReplyUpdateWithoutValuesInput {

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;
}
