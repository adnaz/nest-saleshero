import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { QuickReplyUpdateOneWithoutValuesInput } from '../quick-reply/quick-reply-update-one-without-values.input';
export declare class QuickReplyValueUpdateInput {
    title?: StringFieldUpdateOperationsInput;
    value?: StringFieldUpdateOperationsInput;
    quickReply?: QuickReplyUpdateOneWithoutValuesInput;
}
