import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutFileInput } from '../reply/reply-unchecked-update-one-without-file.input';
import { CourseUncheckedUpdateOneWithoutImageInput } from '../course/course-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutAudioInput } from '../course/course-unchecked-update-one-without-audio.input';
import { SectionUncheckedUpdateOneWithoutImageInput } from '../section/section-unchecked-update-one-without-image.input';
export declare class FileUncheckedUpdateWithoutActorInput {
    id?: IntFieldUpdateOperationsInput;
    link?: NullableStringFieldUpdateOperationsInput;
    location?: NullableStringFieldUpdateOperationsInput;
    key?: NullableStringFieldUpdateOperationsInput;
    bucket?: NullableStringFieldUpdateOperationsInput;
    etag?: NullableStringFieldUpdateOperationsInput;
    createdAt?: DateTimeFieldUpdateOperationsInput;
    updatedAt?: DateTimeFieldUpdateOperationsInput;
    type?: EnumTypeFileFieldUpdateOperationsInput;
    reply?: ReplyUncheckedUpdateOneWithoutFileInput;
    courseImage?: CourseUncheckedUpdateOneWithoutImageInput;
    courseAudio?: CourseUncheckedUpdateOneWithoutAudioInput;
    section?: SectionUncheckedUpdateOneWithoutImageInput;
}
