import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { SectionUpdateOneRequiredWithoutRepliesInput } from '../section/section-update-one-required-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';
export declare class ReplyUpdateWithoutUserInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    file?: FileUpdateOneWithoutReplyInput;
    section?: SectionUpdateOneRequiredWithoutRepliesInput;
    quickReplies?: QuickReplyUpdateOneWithoutReplyInput;
}
