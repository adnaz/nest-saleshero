import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumTypeFileFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-file-field-update-operations.input';
import { ReplyUpdateOneWithoutFileInput } from '../reply/reply-update-one-without-file.input';
import { ActorUpdateOneWithoutAvatarInput } from '../actor/actor-update-one-without-avatar.input';
import { CourseUpdateOneWithoutImageInput } from '../course/course-update-one-without-image.input';
import { CourseUpdateOneWithoutAudioInput } from '../course/course-update-one-without-audio.input';
import { SectionUpdateOneWithoutImageInput } from '../section/section-update-one-without-image.input';

@InputType()
export class FileUpdateInput {

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

    @Field(() => ReplyUpdateOneWithoutFileInput, {nullable:true})
    reply?: ReplyUpdateOneWithoutFileInput;

    @Field(() => ActorUpdateOneWithoutAvatarInput, {nullable:true})
    actor?: ActorUpdateOneWithoutAvatarInput;

    @Field(() => CourseUpdateOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUpdateOneWithoutImageInput;

    @Field(() => CourseUpdateOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUpdateOneWithoutAudioInput;

    @Field(() => SectionUpdateOneWithoutImageInput, {nullable:true})
    section?: SectionUpdateOneWithoutImageInput;
}
