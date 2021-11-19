import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutQuickRepliesInput } from '../reply/reply-unchecked-update-one-without-quick-replies.input';
export declare class QuickReplyUncheckedUpdateWithoutValuesInput {
    id?: IntFieldUpdateOperationsInput;
    keepIt?: BoolFieldUpdateOperationsInput;
    type?: EnumTypeReplyFieldUpdateOperationsInput;
    reply?: ReplyUncheckedUpdateOneWithoutQuickRepliesInput;
}
