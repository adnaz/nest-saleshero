import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PostUpdateManyWithoutAuthorInput } from '../post/post-update-many-without-author.input';
import { CourseUpdateManyWithoutAuthorInput } from '../course/course-update-many-without-author.input';
import { SectionUpdateManyWithoutAuthorInput } from '../section/section-update-many-without-author.input';

@InputType()
export class UserUpdateWithoutAppsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    username?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorInput;

    @Field(() => CourseUpdateManyWithoutAuthorInput, {nullable:true})
    courses?: CourseUpdateManyWithoutAuthorInput;

    @Field(() => SectionUpdateManyWithoutAuthorInput, {nullable:true})
    sections?: SectionUpdateManyWithoutAuthorInput;
}
