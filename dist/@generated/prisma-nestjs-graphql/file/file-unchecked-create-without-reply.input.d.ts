import { TypeFile } from '../prisma/type-file.enum';
import { ActorUncheckedCreateNestedOneWithoutAvatarInput } from '../actor/actor-unchecked-create-nested-one-without-avatar.input';
import { CourseUncheckedCreateNestedOneWithoutImageInput } from '../course/course-unchecked-create-nested-one-without-image.input';
import { CourseUncheckedCreateNestedOneWithoutAudioInput } from '../course/course-unchecked-create-nested-one-without-audio.input';
import { SectionUncheckedCreateNestedOneWithoutImageInput } from '../section/section-unchecked-create-nested-one-without-image.input';
export declare class FileUncheckedCreateWithoutReplyInput {
    id?: number;
    link?: string;
    location?: string;
    key?: string;
    bucket?: string;
    etag?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    actor?: ActorUncheckedCreateNestedOneWithoutAvatarInput;
    courseImage?: CourseUncheckedCreateNestedOneWithoutImageInput;
    courseAudio?: CourseUncheckedCreateNestedOneWithoutAudioInput;
    section?: SectionUncheckedCreateNestedOneWithoutImageInput;
}
