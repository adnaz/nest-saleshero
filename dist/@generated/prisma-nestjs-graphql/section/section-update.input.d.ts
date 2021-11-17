import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTypeSectionFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-section-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutSectionInput } from '../file/file-update-one-without-section.input';
import { CourseUpdateOneWithoutSectionsInput } from '../course/course-update-one-without-sections.input';
import { ReplyUpdateManyWithoutSectionInput } from '../reply/reply-update-many-without-section.input';
import { UserUpdateOneWithoutSectionsInput } from '../user/user-update-one-without-sections.input';
export declare class SectionUpdateInput {
    title?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    type?: NullableEnumTypeSectionFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    image?: FileUpdateOneWithoutSectionInput;
    course?: CourseUpdateOneWithoutSectionsInput;
    replies?: ReplyUpdateManyWithoutSectionInput;
    author?: UserUpdateOneWithoutSectionsInput;
}
