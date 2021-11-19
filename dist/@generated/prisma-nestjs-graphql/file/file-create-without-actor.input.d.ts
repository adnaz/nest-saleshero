import { TypeFile } from '../prisma/type-file.enum';
import { ReplyCreateNestedOneWithoutFileInput } from '../reply/reply-create-nested-one-without-file.input';
import { CourseCreateNestedOneWithoutImageInput } from '../course/course-create-nested-one-without-image.input';
import { CourseCreateNestedOneWithoutAudioInput } from '../course/course-create-nested-one-without-audio.input';
import { SectionCreateNestedOneWithoutImageInput } from '../section/section-create-nested-one-without-image.input';
export declare class FileCreateWithoutActorInput {
    link?: string;
    location?: string;
    key?: string;
    bucket?: string;
    etag?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    type: keyof typeof TypeFile;
    reply?: ReplyCreateNestedOneWithoutFileInput;
    courseImage?: CourseCreateNestedOneWithoutImageInput;
    courseAudio?: CourseCreateNestedOneWithoutAudioInput;
    section?: SectionCreateNestedOneWithoutImageInput;
}
