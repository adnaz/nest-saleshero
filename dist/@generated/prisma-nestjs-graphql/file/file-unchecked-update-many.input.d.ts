import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
export declare class FileUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput;
    link?: NullableStringFieldUpdateOperationsInput;
    location?: NullableStringFieldUpdateOperationsInput;
    key?: NullableStringFieldUpdateOperationsInput;
    bucket?: NullableStringFieldUpdateOperationsInput;
    etag?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumTypeFileFieldUpdateOperationsInput;
}
