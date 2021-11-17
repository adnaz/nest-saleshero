import { TypeFile } from '../prisma/type-file.enum';
import { ActorCreateNestedOneWithoutAvatarInput } from '../actor/actor-create-nested-one-without-avatar.input';
import { CourseCreateNestedOneWithoutImageInput } from '../course/course-create-nested-one-without-image.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';
import { SectionCreateNestedOneWithoutImageInput } from '../section/section-create-nested-one-without-image.input';
export declare class FileCreateWithoutReplyInput {
    link: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    actor?: ActorCreateNestedOneWithoutAvatarInput;
    courseImage?: CourseCreateNestedOneWithoutImageInput;
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;
    section?: SectionCreateNestedOneWithoutImageInput;
}
