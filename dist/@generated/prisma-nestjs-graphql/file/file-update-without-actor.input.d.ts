import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ReplyUpdateOneWithoutFileInput } from '../reply/reply-update-one-without-file.input';
import { CourseUpdateOneWithoutImageInput } from '../course/course-update-one-without-image.input';
import { CourseUpdateOneWithoutAudioInput } from '../course/course-update-one-without-audio.input';
import { SectionUpdateOneWithoutImageInput } from '../section/section-update-one-without-image.input';
export declare class FileUpdateWithoutActorInput {
    link?: StringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumTypeFileFieldUpdateOperationsInput;
    reply?: ReplyUpdateOneWithoutFileInput;
    courseImage?: CourseUpdateOneWithoutImageInput;
    courseAudio?: CourseUpdateOneWithoutAudioInput;
    section?: SectionUpdateOneWithoutImageInput;
}
