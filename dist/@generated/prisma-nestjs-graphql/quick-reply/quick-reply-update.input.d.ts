import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { QuickReplyValueUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-update-many-without-quick-reply.input';
export declare class QuickReplyUpdateInput {
    type?: EnumTypeReplyFieldUpdateOperationsInput;
    values?: QuickReplyValueUpdateManyWithoutQuickReplyInput;
}
