import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutCourseAudioInput } from '../file/file-update-one-without-course-audio.input';
import { FileUpdateOneWithoutCourseImageInput } from '../file/file-update-one-without-course-image.input';
import { UserUpdateOneWithoutCoursesInput } from '../user/user-update-one-without-courses.input';

@InputType()
export class CourseUpdateWithoutSectionsInput {

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

    @Field(() => FileUpdateOneWithoutCourseImageInput, {nullable:true})
    image?: FileUpdateOneWithoutCourseImageInput;

    @Field(() => UserUpdateOneWithoutCoursesInput, {nullable:true})
    author?: UserUpdateOneWithoutCoursesInput;
}
