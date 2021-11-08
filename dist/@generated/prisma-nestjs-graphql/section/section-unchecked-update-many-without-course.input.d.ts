import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';
import { SectionCreateOrConnectWithoutCourseInput } from './section-create-or-connect-without-course.input';
import { SectionUpsertWithWhereUniqueWithoutCourseInput } from './section-upsert-with-where-unique-without-course.input';
import { SectionCreateManyCourseInputEnvelope } from './section-create-many-course-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithWhereUniqueWithoutCourseInput } from './section-update-with-where-unique-without-course.input';
import { SectionUpdateManyWithWhereWithoutCourseInput } from './section-update-many-with-where-without-course.input';
import { SectionScalarWhereInput } from './section-scalar-where.input';
export declare class SectionUncheckedUpdateManyWithoutCourseInput {
    create?: Array<SectionCreateWithoutCourseInput>;
    connectOrCreate?: Array<SectionCreateOrConnectWithoutCourseInput>;
    upsert?: Array<SectionUpsertWithWhereUniqueWithoutCourseInput>;
    createMany?: SectionCreateManyCourseInputEnvelope;
    connect?: Array<SectionWhereUniqueInput>;
    set?: Array<SectionWhereUniqueInput>;
    disconnect?: Array<SectionWhereUniqueInput>;
    delete?: Array<SectionWhereUniqueInput>;
    update?: Array<SectionUpdateWithWhereUniqueWithoutCourseInput>;
    updateMany?: Array<SectionUpdateManyWithWhereWithoutCourseInput>;
    deleteMany?: Array<SectionScalarWhereInput>;
}
