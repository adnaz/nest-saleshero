import { CourseCreateWithoutImageInput } from './course-create-without-image.input';
import { CourseCreateOrConnectWithoutImageInput } from './course-create-or-connect-without-image.input';
import { CourseUpsertWithoutImageInput } from './course-upsert-without-image.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutImageInput } from './course-update-without-image.input';
export declare class CourseUncheckedUpdateOneWithoutImageInput {
    create?: CourseCreateWithoutImageInput;
    connectOrCreate?: CourseCreateOrConnectWithoutImageInput;
    upsert?: CourseUpsertWithoutImageInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: CourseWhereUniqueInput;
    update?: CourseUpdateWithoutImageInput;
}
