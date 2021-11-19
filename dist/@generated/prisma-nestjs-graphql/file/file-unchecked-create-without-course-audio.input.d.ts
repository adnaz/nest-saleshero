import { TypeFile } from '../prisma/type-file.enum';
import { ReplyUncheckedCreateNestedOneWithoutFileInput } from '../reply/reply-unchecked-create-nested-one-without-file.input';
import { ActorUncheckedCreateNestedOneWithoutAvatarInput } from '../actor/actor-unchecked-create-nested-one-without-avatar.input';
import { CourseUncheckedCreateNestedOneWithoutImageInput } from '../course/course-unchecked-create-nested-one-without-image.input';
import { SectionUncheckedCreateNestedOneWithoutImageInput } from '../section/section-unchecked-create-nested-one-without-image.input';
export declare class FileUncheckedCreateWithoutCourseAudioInput {
    id?: number;
    link?: string;
    location?: string;
    key?: string;
    bucket?: string;
    etag?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    reply?: ReplyUncheckedCreateNestedOneWithoutFileInput;
    actor?: ActorUncheckedCreateNestedOneWithoutAvatarInput;
    courseImage?: CourseUncheckedCreateNestedOneWithoutImageInput;
    section?: SectionUncheckedCreateNestedOneWithoutImageInput;
}
