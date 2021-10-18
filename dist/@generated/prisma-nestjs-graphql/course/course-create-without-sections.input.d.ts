import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
export declare class CourseCreateWithoutSectionsInput {
    title: string;
    description?: string;
    audio?: string;
    image?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author?: UserCreateNestedOneWithoutCoursesInput;
}
