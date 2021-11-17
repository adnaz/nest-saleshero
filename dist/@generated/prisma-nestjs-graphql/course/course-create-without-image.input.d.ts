import { FileCreateNestedOneWithoutCourseAudioInput } from '../file/file-create-nested-one-without-course-audio.input';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
export declare class CourseCreateWithoutImageInput {
    title: string;
    description?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audio?: FileCreateNestedOneWithoutCourseAudioInput;
    sections?: SectionCreateNestedManyWithoutCourseInput;
    author?: UserCreateNestedOneWithoutCoursesInput;
}
