import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AppUpdateManyWithoutAuthorInput } from '../app/app-update-many-without-author.input';
import { CourseUpdateManyWithoutAuthorInput } from '../course/course-update-many-without-author.input';
import { SectionUpdateManyWithoutAuthorInput } from '../section/section-update-many-without-author.input';

@InputType()
export class UserUpdateWithoutPostsInput {

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

    @Field(() => AppUpdateManyWithoutAuthorInput, {nullable:true})
    apps?: AppUpdateManyWithoutAuthorInput;

    @Field(() => CourseUpdateManyWithoutAuthorInput, {nullable:true})
    courses?: CourseUpdateManyWithoutAuthorInput;

    @Field(() => SectionUpdateManyWithoutAuthorInput, {nullable:true})
    sections?: SectionUpdateManyWithoutAuthorInput;
}
