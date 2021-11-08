import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CourseUncheckedUpdateManyWithoutAuthorInput } from '../course/course-unchecked-update-many-without-author.input';
import { SectionUncheckedUpdateManyWithoutAuthorInput } from '../section/section-unchecked-update-many-without-author.input';
export declare class UserUncheckedUpdateWithoutPostsInput {
    id?: IntFieldUpdateOperationsInput;
    email?: StringFieldUpdateOperationsInput;
    username?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    courses?: CourseUncheckedUpdateManyWithoutAuthorInput;
    sections?: SectionUncheckedUpdateManyWithoutAuthorInput;
}