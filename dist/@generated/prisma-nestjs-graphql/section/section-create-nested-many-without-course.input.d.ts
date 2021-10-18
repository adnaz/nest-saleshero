import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';
import { SectionCreateOrConnectWithoutCourseInput } from './section-create-or-connect-without-course.input';
import { SectionCreateManyCourseInputEnvelope } from './section-create-many-course-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
export declare class SectionCreateNestedManyWithoutCourseInput {
    create?: Array<SectionCreateWithoutCourseInput>;
    connectOrCreate?: Array<SectionCreateOrConnectWithoutCourseInput>;
    createMany?: SectionCreateManyCourseInputEnvelope;
    connect?: Array<SectionWhereUniqueInput>;
}
