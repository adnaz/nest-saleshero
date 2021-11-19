import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutCourseImageInput } from '../file/file-create-nested-one-without-course-image.input';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';

@InputType()
export class CourseCreateWithoutAudioInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutCourseImageInput, {nullable:true})
    image?: FileCreateNestedOneWithoutCourseImageInput;

    @Field(() => SectionCreateNestedManyWithoutCourseInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutCourseInput;

    @Field(() => UserCreateNestedOneWithoutCoursesInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCoursesInput;
}
