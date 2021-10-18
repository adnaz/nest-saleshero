import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
import { QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput } from '../quick-reply-value/quick-reply-value-unchecked-update-many-without-quick-reply.input';
export declare class QuickReplyUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput;
    type?: EnumTypeReplyFieldUpdateOperationsInput;
    values?: QuickReplyValueUncheckedUpdateManyWithoutQuickReplyInput;
}
