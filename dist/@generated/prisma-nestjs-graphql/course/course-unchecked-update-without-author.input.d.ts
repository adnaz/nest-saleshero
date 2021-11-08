import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { SectionUncheckedUpdateManyWithoutCourseInput } from '../section/section-unchecked-update-many-without-course.input';
export declare class CourseUncheckedUpdateWithoutAuthorInput {
    id?: IntFieldUpdateOperationsInput;
    title?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    audio?: NullableStringFieldUpdateOperationsInput;
    image?: NullableStringFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    sections?: SectionUncheckedUpdateManyWithoutCourseInput;
}
