import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuickReplyUpdateOneWithoutValuesInput } from '../quick-reply/quick-reply-update-one-without-values.input';

@InputType()
export class QuickReplyValueUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: StringFieldUpdateOperationsInput;

    @Field(() => QuickReplyUpdateOneWithoutValuesInput, {nullable:true})
    quickReply?: QuickReplyUpdateOneWithoutValuesInput;
}
