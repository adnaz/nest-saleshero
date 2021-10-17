import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutAuthorInput } from './course-create-without-author.input';

@InputType()
export class CourseCreateOrConnectWithoutAuthorInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutAuthorInput, {nullable:false})
    create!: CourseCreateWithoutAuthorInput;
}
