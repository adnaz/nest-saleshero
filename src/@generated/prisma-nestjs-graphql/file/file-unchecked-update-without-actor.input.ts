import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumTypeFileFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-file-field-update-operations.input';
import { ReplyUncheckedUpdateOneWithoutFileInput } from '../reply/reply-unchecked-update-one-without-file.input';
import { AffirmationUncheckedUpdateOneWithoutImageInput } from '../affirmation/affirmation-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutImageInput } from '../course/course-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutAudioInput } from '../course/course-unchecked-update-one-without-audio.input';
import { SectionUncheckedUpdateOneWithoutImageInput } from '../section/section-unchecked-update-one-without-image.input';

@InputType()
export class FileUncheckedUpdateWithoutActorInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    link?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    location?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    key?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bucket?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    etag?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeFileFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeFileFieldUpdateOperationsInput;

    @Field(() => ReplyUncheckedUpdateOneWithoutFileInput, {nullable:true})
    reply?: ReplyUncheckedUpdateOneWithoutFileInput;

    @Field(() => AffirmationUncheckedUpdateOneWithoutImageInput, {nullable:true})
    affirmation?: AffirmationUncheckedUpdateOneWithoutImageInput;

    @Field(() => CourseUncheckedUpdateOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUncheckedUpdateOneWithoutImageInput;

    @Field(() => CourseUncheckedUpdateOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUncheckedUpdateOneWithoutAudioInput;

    @Field(() => SectionUncheckedUpdateOneWithoutImageInput, {nullable:true})
    section?: SectionUncheckedUpdateOneWithoutImageInput;
}
