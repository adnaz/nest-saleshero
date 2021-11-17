import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { SectionUpdateOneRequiredWithoutRepliesInput } from '../section/section-update-one-required-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';

@InputType()
export class ReplyUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutReplyInput, {nullable:true})
    file?: FileUpdateOneWithoutReplyInput;

    @Field(() => SectionUpdateOneRequiredWithoutRepliesInput, {nullable:true})
    section?: SectionUpdateOneRequiredWithoutRepliesInput;

    @Field(() => QuickReplyUpdateOneWithoutReplyInput, {nullable:true})
    quickReplies?: QuickReplyUpdateOneWithoutReplyInput;
}
