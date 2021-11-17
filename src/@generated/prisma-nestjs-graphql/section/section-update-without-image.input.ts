import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumTypeSectionFieldUpdateOperationsInput } from '../prisma/nullable-enum-type-section-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { CourseUpdateOneWithoutSectionsInput } from '../course/course-update-one-without-sections.input';
import { ReplyUpdateManyWithoutSectionInput } from '../reply/reply-update-many-without-section.input';
import { UserUpdateOneWithoutSectionsInput } from '../user/user-update-one-without-sections.input';

@InputType()
export class SectionUpdateWithoutImageInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumTypeSectionFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumTypeSectionFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    published?: NullableBoolFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CourseUpdateOneWithoutSectionsInput, {nullable:true})
    course?: CourseUpdateOneWithoutSectionsInput;

    @Field(() => ReplyUpdateManyWithoutSectionInput, {nullable:true})
    replies?: ReplyUpdateManyWithoutSectionInput;

    @HideField()
    author?: UserUpdateOneWithoutSectionsInput;
}
