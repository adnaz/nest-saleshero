import { TypeFile } from '../prisma/type-file.enum';
import { ReplyCreateNestedOneWithoutFileInput } from '../reply/reply-create-nested-one-without-file.input';
import { ActorCreateNestedOneWithoutAvatarInput } from '../actor/actor-create-nested-one-without-avatar.input';
import { CourseCreateNestedOneWithoutImageInput } from '../course/course-create-nested-one-without-image.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';
export declare class FileCreateWithoutSectionInput {
    link?: string;
    location?: string;
    key?: string;
    bucket?: string;
    etag?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    reply?: ReplyCreateNestedOneWithoutFileInput;
    actor?: ActorCreateNestedOneWithoutAvatarInput;
    courseImage?: CourseCreateNestedOneWithoutImageInput;
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;
}
