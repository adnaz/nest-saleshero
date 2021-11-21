import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumTypeReplyFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-reply-field-update-operations.input';
import { ReplyUpdateOneWithoutQuickReplyInput } from '../reply/reply-update-one-without-quick-reply.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';

@InputType()
export class QuickReplyUpdateInput {

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    keepIt?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeReplyFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeReplyFieldUpdateOperationsInput;

    @Field(() => ReplyUpdateOneWithoutQuickReplyInput, {nullable:true})
    reply?: ReplyUpdateOneWithoutQuickReplyInput;

    @Field(() => QuickReplyValueUpdateManyWithoutQuickReplyInput, {nullable:true})
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
