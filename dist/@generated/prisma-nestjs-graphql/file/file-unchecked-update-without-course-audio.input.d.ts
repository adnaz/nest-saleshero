import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutFileInput } from '../reply/reply-unchecked-update-one-without-file.input';
import { ActorUncheckedUpdateOneWithoutAvatarInput } from '../actor/actor-unchecked-update-one-without-avatar.input';
import { CourseUncheckedUpdateOneWithoutImageInput } from '../course/course-unchecked-update-one-without-image.input';
import { SectionUncheckedUpdateOneWithoutImageInput } from '../section/section-unchecked-update-one-without-image.input';
export declare class FileUncheckedUpdateWithoutCourseAudioInput {
    id?: IntFieldUpdateOperationsInput;
    link?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumTypeFileFieldUpdateOperationsInput;
    reply?: ReplyUncheckedUpdateOneWithoutFileInput;
    actor?: ActorUncheckedUpdateOneWithoutAvatarInput;
    courseImage?: CourseUncheckedUpdateOneWithoutImageInput;
    section?: SectionUncheckedUpdateOneWithoutImageInput;
}
