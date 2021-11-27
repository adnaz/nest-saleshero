import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTypeSectionFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-section-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FileUpdateOneWithoutSectionInput } from '../file/file-update-one-without-section.input';
import { ReplyUpdateManyWithoutSectionInput } from '../reply/reply-update-many-without-section.input';
import { UserUpdateOneWithoutSectionsInput } from '../user/user-update-one-without-sections.input';

@InputType()
export class SectionUpdateWithoutCourseInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    order?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeSectionFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeSectionFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneWithoutSectionInput, {nullable:true})
    image?: FileUpdateOneWithoutSectionInput;

    @Field(() => ReplyUpdateManyWithoutSectionInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutSectionInput;

    @Field(() => UserUpdateOneWithoutSectionsInput, {nullable:true})
    author?: UserUpdateOneWithoutSectionsInput;
}
