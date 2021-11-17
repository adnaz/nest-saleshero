import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ActorUpdateOneWithoutAvatarInput } from '../actor/actor-update-one-without-avatar.input';
import { CourseUpdateOneWithoutImageInput } from '../course/course-update-one-without-image.input';
import { CourseUpdateOneWithoutAudioInput } from '../course/course-update-one-without-audio.input';
import { SectionUpdateOneWithoutImageInput } from '../section/section-update-one-without-image.input';

@InputType()
export class FileUpdateWithoutReplyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumTypeFileFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeFileFieldUpdateOperationsInput;

    @Field(() => ActorUpdateOneWithoutAvatarInput, {nullable:true})
    actor?: ActorUpdateOneWithoutAvatarInput;

    @Field(() => CourseUpdateOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUpdateOneWithoutImageInput;

    @Field(() => CourseUpdateOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUpdateOneWithoutAudioInput;

    @Field(() => SectionUpdateOneWithoutImageInput, {nullable:true})
    section?: SectionUpdateOneWithoutImageInput;
}