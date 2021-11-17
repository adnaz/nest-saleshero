import { FileCreateNestedOneWithoutCourseAudioInput } from '../file/file-create-nested-one-without-course-audio.input';
import { FileCreateNestedOneWithoutCourseImageInput } from '../file/file-create-nested-one-without-course-image.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';
export declare class CourseCreateWithoutSectionsInput {
    title: string;
    description?: string;
    published?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audio?: FileCreateNestedOneWithoutCourseAudioInput;
    image?: FileCreateNestedOneWithoutCourseImageInput;
    author?: UserCreateNestedOneWithoutCoursesInput;
}
