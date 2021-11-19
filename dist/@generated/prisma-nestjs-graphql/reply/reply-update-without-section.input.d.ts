import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutReplyInput } from '../file/file-update-one-without-reply.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';
export declare class ReplyUpdateWithoutSectionInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    file?: FileUpdateOneWithoutReplyInput;
    user?: ActorUpdateOneWithoutRepliesInput;
    quickReplies?: QuickReplyUpdateOneWithoutReplyInput;
}
