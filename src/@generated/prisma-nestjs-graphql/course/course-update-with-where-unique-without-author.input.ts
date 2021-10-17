import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseUpdateWithoutAuthorInput } from './course-update-without-author.input';

@InputType()
export class CourseUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseUpdateWithoutAuthorInput, {nullable:false})
    data!: CourseUpdateWithoutAuthorInput;
}
