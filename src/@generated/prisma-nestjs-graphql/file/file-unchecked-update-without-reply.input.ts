import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumTypeFileFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-file-field-update-operations.input';
import { ActorUncheckedUpdateOneWithoutAvatarInput } from '../actor/actor-unchecked-update-one-without-avatar.input';
import { AffirmationUncheckedUpdateOneWithoutImageInput } from '../affirmation/affirmation-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutImageInput } from '../course/course-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutAudioInput } from '../course/course-unchecked-update-one-without-audio.input';
import { SectionUncheckedUpdateOneWithoutImageInput } from '../section/section-unchecked-update-one-without-image.input';

@InputType()
export class FileUncheckedUpdateWithoutReplyInput {

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

    @Field(() => ActorUncheckedUpdateOneWithoutAvatarInput, {nullable:true})
    actor?: ActorUncheckedUpdateOneWithoutAvatarInput;

    @Field(() => AffirmationUncheckedUpdateOneWithoutImageInput, {nullable:true})
    affirmation?: AffirmationUncheckedUpdateOneWithoutImageInput;

    @Field(() => CourseUncheckedUpdateOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUncheckedUpdateOneWithoutImageInput;

    @Field(() => CourseUncheckedUpdateOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUncheckedUpdateOneWithoutAudioInput;

    @Field(() => SectionUncheckedUpdateOneWithoutImageInput, {nullable:true})
    section?: SectionUncheckedUpdateOneWithoutImageInput;
}
