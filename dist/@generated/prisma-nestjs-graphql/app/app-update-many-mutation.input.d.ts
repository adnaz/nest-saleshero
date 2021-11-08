import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
export declare class AppUpdateManyMutationInput {
    name?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}