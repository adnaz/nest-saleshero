import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';
import { CourseCreateOrConnectWithoutAuthorInput } from './course-create-or-connect-without-author.input';
import { CourseUpsertWithWhereUniqueWithoutAuthorInput } from './course-upsert-with-where-unique-without-author.input';
import { CourseCreateManyAuthorInputEnvelope } from './course-create-many-author-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutAuthorInput } from './course-update-with-where-unique-without-author.input';
import { CourseUpdateManyWithWhereWithoutAuthorInput } from './course-update-many-with-where-without-author.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';
export declare class CourseUpdateManyWithoutAuthorInput {
    create?: Array<CourseCreateWithoutAuthorInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutAuthorInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutAuthorInput>;
    createMany?: CourseCreateManyAuthorInputEnvelope;
    set?: Array<CourseWhereUniqueInput>;
    disconnect?: Array<CourseWhereUniqueInput>;
    delete?: Array<CourseWhereUniqueInput>;
    connect?: Array<CourseWhereUniqueInput>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutAuthorInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutAuthorInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
