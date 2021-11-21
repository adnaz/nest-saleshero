import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { QuickReplyUpdateOneWithoutValuesInput } from '../quick-reply/quick-reply-update-one-without-values.input';

@InputType()
export class QuickReplyValueUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    title?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    value?: NullableStringFieldUpdateOperationsInput;

    @Field(() => QuickReplyUpdateOneWithoutValuesInput, {nullable:true})
    quickReply?: QuickReplyUpdateOneWithoutValuesInput;
}
