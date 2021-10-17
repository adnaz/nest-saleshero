import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';
import { CourseCreateOrConnectWithoutAuthorInput } from './course-create-or-connect-without-author.input';
import { CourseCreateManyAuthorInputEnvelope } from './course-create-many-author-input-envelope.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [CourseCreateWithoutAuthorInput], {nullable:true})
    create?: Array<CourseCreateWithoutAuthorInput>;

    @Field(() => [CourseCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<CourseCreateOrConnectWithoutAuthorInput>;

    @Field(() => CourseCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: CourseCreateManyAuthorInputEnvelope;

    @Field(() => [CourseWhereUniqueInput], {nullable:true})
    connect?: Array<CourseWhereUniqueInput>;
}
