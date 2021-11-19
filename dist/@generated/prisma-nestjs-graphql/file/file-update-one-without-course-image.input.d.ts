import { FileCreateWithoutCourseImageInput } from './file-create-without-course-image.input';
import { FileCreateOrConnectWithoutCourseImageInput } from './file-create-or-connect-without-course-image.input';
import { FileUpsertWithoutCourseImageInput } from './file-upsert-without-course-image.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithoutCourseImageInput } from './file-update-without-course-image.input';
export declare class FileUpdateOneWithoutCourseImageInput {
    create?: FileCreateWithoutCourseImageInput;
    connectOrCreate?: FileCreateOrConnectWithoutCourseImageInput;
    upsert?: FileUpsertWithoutCourseImageInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: FileWhereUniqueInput;
    update?: FileUpdateWithoutCourseImageInput;
}
