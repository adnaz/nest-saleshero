import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ReplyUpdateOneWithoutFileInput } from '../reply/reply-update-one-without-file.input';
import { ActorUpdateOneWithoutAvatarInput } from '../actor/actor-update-one-without-avatar.input';
import { CourseUpdateOneWithoutImageInput } from '../course/course-update-one-without-image.input';
import { CourseUpdateOneWithoutAudioInput } from '../course/course-update-one-without-audio.input';
import { SectionUpdateOneWithoutImageInput } from '../section/section-update-one-without-image.input';
export declare class FileUpdateInput {
    link?: NullableStringFieldUpdateOperationsInput;
    location?: NullableStringFieldUpdateOperationsInput;
    key?: NullableStringFieldUpdateOperationsInput;
    bucket?: NullableStringFieldUpdateOperationsInput;
    etag?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumTypeFileFieldUpdateOperationsInput;
    reply?: ReplyUpdateOneWithoutFileInput;
    actor?: ActorUpdateOneWithoutAvatarInput;
    courseImage?: CourseUpdateOneWithoutImageInput;
    courseAudio?: CourseUpdateOneWithoutAudioInput;
    section?: SectionUpdateOneWithoutImageInput;
}
