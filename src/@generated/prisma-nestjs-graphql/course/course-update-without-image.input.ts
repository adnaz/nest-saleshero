import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutCourseAudioInput } from '../file/file-update-one-without-course-audio.input';
import { SectionUpdateManyWithoutCourseInput } from '../section/section-update-many-without-course.input';
import { UserUpdateOneWithoutCoursesInput } from '../user/user-update-one-without-courses.input';

@InputType()
export class CourseUpdateWithoutImageInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    order?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutCourseAudioInput, {nullable:true})
    audio?: FileUpdateOneWithoutCourseAudioInput;

    @Field(() => SectionUpdateManyWithoutCourseInput, {nullable:true})
    sections?: SectionUpdateManyWithoutCourseInput;

    @Field(() => UserUpdateOneWithoutCoursesInput, {nullable:true})
    author?: UserUpdateOneWithoutCoursesInput;
}
