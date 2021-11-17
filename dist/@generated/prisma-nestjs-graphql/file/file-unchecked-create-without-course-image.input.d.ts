import { TypeFile } from '../prisma/type-file.enum';
import { ReplyUncheckedCreateNestedOneWithoutFileInput } from '../reply/reply-unchecked-create-nested-one-without-file.input';
import { ActorUncheckedCreateNestedOneWithoutAvatarInput } from '../actor/actor-unchecked-create-nested-one-without-avatar.input';
import { CourseUncheckedCreateNestedOneWithoutAudioInput } from '../course/course-unchecked-create-nested-one-without-audio.input';
import { SectionUncheckedCreateNestedOneWithoutImageInput } from '../section/section-unchecked-create-nested-one-without-image.input';
export declare class FileUncheckedCreateWithoutCourseImageInput {
    id?: number;
    link: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    reply?: ReplyUncheckedCreateNestedOneWithoutFileInput;
    actor?: ActorUncheckedCreateNestedOneWithoutAvatarInput;
    courseAudio?: CourseUncheckedCreateNestedOneWithoutAudioInput;
    section?: SectionUncheckedCreateNestedOneWithoutImageInput;
}
