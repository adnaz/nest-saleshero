import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseUpdateWithoutImageInput } from './course-update-without-image.input';
import { CourseCreateWithoutImageInput } from './course-create-without-image.input';

@InputType()
export class CourseUpsertWithoutImageInput {

    @Field(() => CourseUpdateWithoutImageInput, {nullable:false})
    update!: CourseUpdateWithoutImageInput;

    @Field(() => CourseCreateWithoutImageInput, {nullable:false})
    create!: CourseCreateWithoutImageInput;
}
