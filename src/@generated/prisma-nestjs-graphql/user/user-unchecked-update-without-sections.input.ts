import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AppUncheckedUpdateManyWithoutAuthorInput } from '../app/app-unchecked-update-many-without-author.input';
import { PostUncheckedUpdateManyWithoutAuthorInput } from '../post/post-unchecked-update-many-without-author.input';
import { CourseUncheckedUpdateManyWithoutAuthorInput } from '../course/course-unchecked-update-many-without-author.input';

@InputType()
export class UserUncheckedUpdateWithoutSectionsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

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

    @Field(() => AppUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    apps?: AppUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => CourseUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    courses?: CourseUncheckedUpdateManyWithoutAuthorInput;
}
