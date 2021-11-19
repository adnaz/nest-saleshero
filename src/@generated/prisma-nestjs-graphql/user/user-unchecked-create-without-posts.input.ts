import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { AppUncheckedCreateNestedManyWithoutAuthorInput } from '../app/app-unchecked-create-nested-many-without-author.input';
import { HideField } from '@nestjs/graphql';
import { CourseUncheckedCreateNestedManyWithoutAuthorInput } from '../course/course-unchecked-create-nested-many-without-author.input';
import { SectionUncheckedCreateNestedManyWithoutAuthorInput } from '../section/section-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutPostsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    username?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @HideField()
    apps?: AppUncheckedCreateNestedManyWithoutAuthorInput;

    @HideField()
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput;

    @HideField()
    sections?: SectionUncheckedCreateNestedManyWithoutAuthorInput;
}
