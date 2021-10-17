import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionCreateWithoutCourseInput } from './section-create-without-course.input';
import { SectionCreateOrConnectWithoutCourseInput } from './section-create-or-connect-without-course.input';
import { SectionCreateManyCourseInputEnvelope } from './section-create-many-course-input-envelope.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';

@InputType()
export class SectionUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [SectionCreateWithoutCourseInput], {nullable:true})
    create?: Array<SectionCreateWithoutCourseInput>;

    @Field(() => [SectionCreateOrConnectWithoutCourseInput], {nullable:true})
    connectOrCreate?: Array<SectionCreateOrConnectWithoutCourseInput>;

    @Field(() => SectionCreateManyCourseInputEnvelope, {nullable:true})
    createMany?: SectionCreateManyCourseInputEnvelope;

    @Field(() => [SectionWhereUniqueInput], {nullable:true})
    connect?: Array<SectionWhereUniqueInput>;
}
