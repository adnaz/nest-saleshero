import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUpdateOneWithoutQuickRepliesInput } from '../reply/reply-update-one-without-quick-replies.input';
export declare class QuickReplyUpdateWithoutValuesInput {
    keepIt?: BoolFieldUpdateOperationsInput;
    type?: EnumTypeReplyFieldUpdateOperationsInput;
    reply?: ReplyUpdateOneWithoutQuickRepliesInput;
}
