import { CourseCreateWithoutImageInput } from './course-create-without-image.input';
import { CourseCreateOrConnectWithoutImageInput } from './course-create-or-connect-without-image.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
export declare class CourseCreateNestedOneWithoutImageInput {
    create?: CourseCreateWithoutImageInput;
    connectOrCreate?: CourseCreateOrConnectWithoutImageInput;
    connect?: CourseWhereUniqueInput;
}
