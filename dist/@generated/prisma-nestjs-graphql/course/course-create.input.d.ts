import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
export declare class CourseCreateInput {
    title: string;
    description?: string;
    audio?: string;
    image?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: SectionCreateNestedManyWithoutCourseInput;
    author?: UserCreateNestedOneWithoutCoursesInput;
}
