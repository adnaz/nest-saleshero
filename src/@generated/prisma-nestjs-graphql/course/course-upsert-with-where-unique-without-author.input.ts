import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutAuthorInput } from './course-update-without-author.input';
import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';

@InputType()
export class CourseUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutAuthorInput, {nullable:false})
    update!: CourseUpdateWithoutAuthorInput;

    @Field(() => CourseCreateWithoutAuthorInput, {nullable:false})
    create!: CourseCreateWithoutAuthorInput;
}
