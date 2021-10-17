import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';
import { SectionCreateOrConnectWithoutCourseInput } from './section-create-or-connect-without-course.input';
import { SectionUpsertWithWhereUniqueWithoutCourseInput } from './section-upsert-with-where-unique-without-course.input';
import { SectionCreateManyCourseInputEnvelope } from './section-create-many-course-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { SectionUpdateWithWhereUniqueWithoutCourseInput } from './section-update-with-where-unique-without-course.input';
import { SectionUpdateManyWithWhereWithoutCourseInput } from './section-update-many-with-where-without-course.input';
import { SectionScalarWhereInput } from './section-scalar-where.input';

@InputType()
export class SectionUncheckedUpdateManyWithoutCourseInput {

    @Field(() => [SectionCreateWithoutCourseInput], {nullable:true})
    create?: Array<SectionCreateWithoutCourseInput>;

    @Field(() => [SectionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<SectionCreateOrConnectWithoutCourseInput>;

    @Field(() => [SectionUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    upsert?: Array<SectionUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => SectionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: SectionCreateManyCourseInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    connect?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    set?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    disconnect?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    delete?: Array<SectionWhereUniqueInput>;

    @Field(() => [SectionUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    update?: Array<SectionUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [SectionUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    updateMany?: Array<SectionUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    deleteMany?: Array<SectionScalarWhereInput>;
}
