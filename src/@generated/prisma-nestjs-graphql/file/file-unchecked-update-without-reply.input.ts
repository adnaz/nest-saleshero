import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumTypeFileFieldUpdateOperationsInput } from '../prisma/enum-type-file-field-update-operations.input';
import { ActorUncheckedUpdateOneWithoutAvatarInput } from '../actor/actor-unchecked-update-one-without-avatar.input';
import { CourseUncheckedUpdateOneWithoutImageInput } from '../course/course-unchecked-update-one-without-image.input';
import { CourseUncheckedUpdateOneWithoutAudioInput } from '../course/course-unchecked-update-one-without-audio.input';
import { SectionUncheckedUpdateOneWithoutImageInput } from '../section/section-unchecked-update-one-without-image.input';

@InputType()
export class FileUncheckedUpdateWithoutReplyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumTypeFileFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTypeFileFieldUpdateOperationsInput;

    @Field(() => ActorUncheckedUpdateOneWithoutAvatarInput, {nullable:true})
    actor?: ActorUncheckedUpdateOneWithoutAvatarInput;

    @Field(() => CourseUncheckedUpdateOneWithoutImageInput, {nullable:true})
    courseImage?: CourseUncheckedUpdateOneWithoutImageInput;

    @Field(() => CourseUncheckedUpdateOneWithoutAudioInput, {nullable:true})
    courseAudio?: CourseUncheckedUpdateOneWithoutAudioInput;

    @Field(() => SectionUncheckedUpdateOneWithoutImageInput, {nullable:true})
    section?: SectionUncheckedUpdateOneWithoutImageInput;
}
