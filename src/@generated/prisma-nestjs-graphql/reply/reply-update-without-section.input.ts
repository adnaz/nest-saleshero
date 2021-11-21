import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';

@InputType()
export class ReplyUpdateWithoutSectionInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutReplyInput, {nullable:true})
    file?: FileUpdateOneWithoutReplyInput;

    @Field(() => ActorUpdateOneWithoutRepliesInput, {nullable:true})
    user?: ActorUpdateOneWithoutRepliesInput;

    @Field(() => QuickReplyUpdateOneWithoutReplyInput, {nullable:true})
    quickReply?: QuickReplyUpdateOneWithoutReplyInput;
}
