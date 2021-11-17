import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CourseWhereUniqueInput } from './course-where-unique.input';
import { CourseCreateWithoutImageInput } from './course-create-without-image.input';

@InputType()
export class CourseCreateOrConnectWithoutImageInput {

    @Field(() => CourseWhereUniqueInput, {nullable:false})
    where!: CourseWhereUniqueInput;

    @Field(() => CourseCreateWithoutImageInput, {nullable:false})
    create!: CourseCreateWithoutImageInput;
}
