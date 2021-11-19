import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumTypeReplyFieldUpdateOperationsInput } from '../prisma/enum-type-reply-field-update-operations.input';
export declare class QuickReplyUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    keepIt?: BoolFieldUpdateOperationsInput;
    type?: EnumTypeReplyFieldUpdateOperationsInput;
}
