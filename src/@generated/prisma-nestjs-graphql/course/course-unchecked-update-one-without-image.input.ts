import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseCreateWithoutImageInput } from './course-create-without-image.input';
import { CourseCreateOrConnectWithoutImageInput } from './course-create-or-connect-without-image.input';
import { CourseUpsertWithoutImageInput } from './course-upsert-without-image.input';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutImageInput } from './course-update-without-image.input';

@InputType()
export class CourseUncheckedUpdateOneWithoutImageInput {

    @Field(() => CourseCreateWithoutImageInput, {nullable:true})
    create?: CourseCreateWithoutImageInput;

    @Field(() => CourseCreateOrConnectWithoutImageInput, {nullable:true})
    connectOrCreate?: CourseCreateOrConnectWithoutImageInput;

    @Field(() => CourseUpsertWithoutImageInput, {nullable:true})
    upsert?: CourseUpsertWithoutImageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CourseWhereUniqueInput, {nullable:true})
    connect?: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutImageInput, {nullable:true})
    update?: CourseUpdateWithoutImageInput;
}
