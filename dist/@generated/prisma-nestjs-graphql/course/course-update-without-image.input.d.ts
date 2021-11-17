import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutCourseAudioInput } from '../file/file-update-one-without-course-audio.input';
import { SectionUpdateManyWithoutCourseInput } from '../section/section-update-many-without-course.input';
import { UserUpdateOneWithoutCoursesInput } from '../user/user-update-one-without-courses.input';
export declare class CourseUpdateWithoutImageInput {
    title?: StringFieldUpdateOperationsInput;
    description?: NullableStringFieldUpdateOperationsInput;
    published?: NullableBoolFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    audio?: FileUpdateOneWithoutCourseAudioInput;
    sections?: SectionUpdateManyWithoutCourseInput;
    author?: UserUpdateOneWithoutCoursesInput;
}