import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';
import { FileCreateOrConnectWithoutCourseImageInput } from './file-create-or-connect-without-course-image.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
export declare class FileCreateNestedOneWithoutCourseImageInput {
    create?: FileCreateWithoutCourseImageInput;
    connectOrCreate?: FileCreateOrConnectWithoutCourseImageInput;
    connect?: FileWhereUniqueInput;
}
