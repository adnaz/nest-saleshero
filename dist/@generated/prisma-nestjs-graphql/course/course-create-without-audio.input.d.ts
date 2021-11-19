import { FileCreateNestedOneWithoutCourseImageInput } from '../file/file-create-nested-one-without-course-image.input';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
export declare class CourseCreateWithoutAudioInput {
    title: string;
    description?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    image?: FileCreateNestedOneWithoutCourseImageInput;
    sections?: SectionCreateNestedManyWithoutCourseInput;
    author?: UserCreateNestedOneWithoutCoursesInput;
}
