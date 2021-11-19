import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { FileUpdateOneWithoutCourseAudioInput } from '../file/file-update-one-without-course-audio.input';
import { FileUpdateOneWithoutCourseImageInput } from '../file/file-update-one-without-course-image.input';
import { SectionUpdateManyWithoutCourseInput } from '../section/section-update-many-without-course.input';
import { UserUpdateOneWithoutCoursesInput } from '../user/user-update-one-without-courses.input';

@InputType()
export class CourseUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutCourseAudioInput, {nullable:true})
    audio?: FileUpdateOneWithoutCourseAudioInput;

    @Field(() => FileUpdateOneWithoutCourseImageInput, {nullable:true})
    image?: FileUpdateOneWithoutCourseImageInput;

    @Field(() => SectionUpdateManyWithoutCourseInput, {nullable:true})
    sections?: SectionUpdateManyWithoutCourseInput;

    @Field(() => UserUpdateOneWithoutCoursesInput, {nullable:true})
    author?: UserUpdateOneWithoutCoursesInput;
}
