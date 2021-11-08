import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { SectionUpdateManyWithoutAuthorInput } from '../section/section-update-many-without-author.input';
export declare class UserUpdateWithoutCoursesInput {
    email?: StringFieldUpdateOperationsInput;
    username?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    posts?: PostUpdateManyWithoutAuthorInput;
    sections?: SectionUpdateManyWithoutAuthorInput;
}