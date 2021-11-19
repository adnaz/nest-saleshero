import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AppUpdateManyWithoutAuthorInput } from '../app/app-update-many-without-author.input';
import { CourseUpdateManyWithoutAuthorInput } from '../course/course-update-many-without-author.input';
import { SectionUpdateManyWithoutAuthorInput } from '../section/section-update-many-without-author.input';
export declare class UserUpdateWithoutPostsInput {
    email?: StringFieldUpdateOperationsInput;
    username?: NullableStringFieldUpdateOperationsInput;
    name?: NullableStringFieldUpdateOperationsInput;
    password?: StringFieldUpdateOperationsInput;
    role?: EnumRoleFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    apps?: AppUpdateManyWithoutAuthorInput;
    courses?: CourseUpdateManyWithoutAuthorInput;
    sections?: SectionUpdateManyWithoutAuthorInput;
}
