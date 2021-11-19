import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutCourseAudioInput } from '../file/file-create-nested-one-without-course-audio.input';
import { FileCreateNestedOneWithoutCourseImageInput } from '../file/file-create-nested-one-without-course-image.input';
import { UserCreateNestedOneWithoutCoursesInput } from '../user/user-create-nested-one-without-courses.input';

@InputType()
export class CourseCreateWithoutSectionsInput {

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

    @Field(() => FileCreateNestedOneWithoutCourseAudioInput, {nullable:true})
    audio?: FileCreateNestedOneWithoutCourseAudioInput;

    @Field(() => FileCreateNestedOneWithoutCourseImageInput, {nullable:true})
    image?: FileCreateNestedOneWithoutCourseImageInput;

    @Field(() => UserCreateNestedOneWithoutCoursesInput, {nullable:true})
    author?: UserCreateNestedOneWithoutCoursesInput;
}
