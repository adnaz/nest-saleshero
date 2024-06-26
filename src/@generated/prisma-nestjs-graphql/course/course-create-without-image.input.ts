import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutCourseAudioInput } from '../file/file-create-nested-one-without-course-audio.input';
import { SectionCreateNestedManyWithoutCourseInput } from '../section/section-create-nested-many-without-course.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';

@InputType()
export class CourseCreateWithoutImageInput {

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FileCreateNestedOneWithoutCourseAudioInput, {nullable:true})
    audio?: FileCreateNestedOneWithoutCourseAudioInput;

    @Field(() => SectionCreateNestedManyWithoutCourseInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutCourseInput;

    @Field(() => UserCreateNestedOneWithoutCoursesInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCoursesInput;
}
