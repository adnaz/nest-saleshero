import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SectionUpdateOneWithoutRepliesInput } from '../section/section-update-one-without-replies.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';

@InputType()
export class ReplyUpdateWithoutFileInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    order?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reply?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => SectionUpdateOneWithoutRepliesInput, {nullable:true})
    section?: SectionUpdateOneWithoutRepliesInput;

    @Field(() => ActorUpdateOneWithoutRepliesInput, {nullable:true})
    user?: ActorUpdateOneWithoutRepliesInput;

    @Field(() => QuickReplyUpdateOneWithoutReplyInput, {nullable:true})
    quickReply?: QuickReplyUpdateOneWithoutReplyInput;
}
