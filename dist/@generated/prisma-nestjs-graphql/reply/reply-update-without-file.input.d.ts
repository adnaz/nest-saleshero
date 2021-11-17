import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SectionUpdateOneRequiredWithoutRepliesInput } from '../section/section-update-one-required-without-replies.input';
import { ActorUpdateOneWithoutRepliesInput } from '../actor/actor-update-one-without-replies.input';
import { QuickReplyUpdateOneWithoutReplyInput } from '../quick-reply/quick-reply-update-one-without-reply.input';
export declare class ReplyUpdateWithoutFileInput {
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    section?: SectionUpdateOneRequiredWithoutRepliesInput;
    user?: ActorUpdateOneWithoutRepliesInput;
    quickReplies?: QuickReplyUpdateOneWithoutReplyInput;
}
