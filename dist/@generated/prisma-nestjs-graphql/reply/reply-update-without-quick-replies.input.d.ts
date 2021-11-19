import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { SectionUpdateOneRequiredWithoutRepliesInput } from '../section/section-update-one-required-without-replies.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';
export declare class ReplyUpdateWithoutQuickRepliesInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    file?: FileUpdateOneWithoutReplyInput;
    section?: SectionUpdateOneRequiredWithoutRepliesInput;
    user?: ActorUpdateOneWithoutRepliesInput;
}
