import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';
import { CourseCreateOrConnectWithoutAuthorInput } from './course-create-or-connect-without-author.input';
import { CourseCreateManyAuthorInputEnvelope } from './course-create-many-author-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
export declare class CourseCreateNestedManyWithoutAuthorInput {
    create?: Array<CourseCreateWithoutAuthorInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutAuthorInput>;
    createMany?: CourseCreateManyAuthorInputEnvelope;
    connect?: Array<CourseWhereUniqueInput>;
}
