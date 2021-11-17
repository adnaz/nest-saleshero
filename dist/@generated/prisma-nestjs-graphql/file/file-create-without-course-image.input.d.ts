import { TypeFile } from '../prisma/type-file.enum';
import { ReplyCreateNestedOneWithoutFileInput } from '../reply/reply-create-nested-one-without-file.input';
import { ActorCreateNestedOneWithoutAvatarInput } from '../actor/actor-create-nested-one-without-avatar.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';
import { SectionCreateNestedOneWithoutImageInput } from '../section/section-create-nested-one-without-image.input';
export declare class FileCreateWithoutCourseImageInput {
    link: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    reply?: ReplyCreateNestedOneWithoutFileInput;
    actor?: ActorCreateNestedOneWithoutAvatarInput;
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;
    section?: SectionCreateNestedOneWithoutImageInput;
}