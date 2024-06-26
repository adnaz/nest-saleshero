import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseScalarWhereInput } from './course-scalar-where.input';
import { CourseUpdateManyMutationInput } from './course-update-many-mutation.input';

@InputType()
export class CourseUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => CourseScalarWhereInput, {nullable:false})
    where!: CourseScalarWhereInput;

    @Field(() => CourseUpdateManyMutationInput, {nullable:false})
    data!: CourseUpdateManyMutationInput;
}
