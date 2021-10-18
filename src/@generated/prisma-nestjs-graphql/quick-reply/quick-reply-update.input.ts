import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';

@InputType()
export class QuickReplyUpdateInput {

    @Field(() => EnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => QuickReplyValueUpdateManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
