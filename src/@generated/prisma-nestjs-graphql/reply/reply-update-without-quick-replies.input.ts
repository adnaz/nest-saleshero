import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { SectionUpdateOneWithoutRepliesInput } from '../section/section-update-one-without-replies.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';

@InputType()
export class ReplyUpdateWithoutQuickRepliesInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    text?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutReplyInput, {nullable:true})
    file?: FileUpdateOneWithoutReplyInput;

    @Field(() => SectionUpdateOneWithoutRepliesInput, {nullable:true})
    section?: SectionUpdateOneWithoutRepliesInput;

    @Field(() => ActorUpdateOneWithoutRepliesInput, {nullable:true})
    user?: ActorUpdateOneWithoutRepliesInput;
}
