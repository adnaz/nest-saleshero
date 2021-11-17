import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
export declare class ReplyUncheckedUpdateWithoutFileInput {
    id?: IntFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    sectionId?: IntFieldUpdateOperationsInput;
    actorId?: NullableIntFieldUpdateOperationsInput;
    quickRepliesId?: NullableIntFieldUpdateOperationsInput;
}