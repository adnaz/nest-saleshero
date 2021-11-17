import { FileCreateNestedOneWithoutCourseAudioInput } from '../file/file-create-nested-one-without-course-audio.input';
import { FileCreateNestedOneWithoutCourseImageInput } from '../file/file-create-nested-one-without-course-image.input';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
export declare class CourseCreateWithoutAuthorInput {
    title: string;
    description?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audio?: FileCreateNestedOneWithoutCourseAudioInput;
    image?: FileCreateNestedOneWithoutCourseImageInput;
    sections?: SectionCreateNestedManyWithoutCourseInput;
}
