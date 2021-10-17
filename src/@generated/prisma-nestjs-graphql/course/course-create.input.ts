import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';

@InputType()
export class CourseCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    audio?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => SectionCreateNestedManyWithoutCourseInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutCourseInput;

    @HideField()
    author?: UserCreateNestedOneWithoutCoursesInput;
}
