import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';
import { CourseCreateOrConnectWithoutAuthorInput } from './course-create-or-connect-without-author.input';
import { CourseUpsertWithWhereUniqueWithoutAuthorInput } from './course-upsert-with-where-unique-without-author.input';
import { CourseCreateManyAuthorInputEnvelope } from './course-create-many-author-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithWhereUniqueWithoutAuthorInput } from './course-update-with-where-unique-without-author.input';
import { CourseUpdateManyWithWhereWithoutAuthorInput } from './course-update-many-with-where-without-author.input';
import { CourseScalarWhereInput } from './course-scalar-where.input';

@InputType()
export class CourseUpdateManyWithoutAuthorInput {

    @Field(() => [CourseCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CourseCreateWithoutAuthorInput>;

    @Field(() => [CourseCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutAuthorInput>;

    @Field(() => [CourseUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => CourseCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: CourseCreateManyAuthorInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    set?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    disconnect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    delete?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;

    @Field(() => [CourseUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<CourseUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [CourseUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<CourseUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    deleteMany?: Array<CourseScalarWhereInput>;
}
