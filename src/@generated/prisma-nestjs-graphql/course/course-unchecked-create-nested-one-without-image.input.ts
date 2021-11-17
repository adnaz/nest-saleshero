import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutImageInput } from './course-create-without-image.input';
import { CourseCreateOrConnectWithoutImageInput } from './course-create-or-connect-without-image.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';

@InputType()
export class CourseUncheckedCreateNestedOneWithoutImageInput {

    @Field(() => CourseCreateWithoutImageInput, {nullable:true})
    create?: CourseCreateWithoutImageInput;

    @Field(() => CourseCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutImageInput;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;
}
