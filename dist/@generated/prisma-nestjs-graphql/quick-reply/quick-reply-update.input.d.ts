import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUpdateOneWithoutQuickRepliesInput } from '../reply/reply-update-one-without-quick-replies.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';
export declare class QuickReplyUpdateInput {
    keepIt?: BoolFieldUpdateOperationsInput;
    type?: EnumTypeReplyFieldUpdateOperationsInput;
    reply?: ReplyUpdateOneWithoutQuickRepliesInput;
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
