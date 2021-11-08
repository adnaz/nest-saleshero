import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTypeSectionFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-section-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CourseUpdateOneWithoutSectionsInput } from '../course/course-update-one-without-sections.input';
export declare class MessageUpdateWithoutAuthorInput {
    title?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    image?: NullableStringFieldUpdateOperationsInput;
    type?: NullableEnumTypeSectionFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    course?: CourseUpdateOneWithoutSectionsInput;
}
