import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';
import { CourseUncheckedCreateNestedManyWithoutAuthorInput } from '../course/course-unchecked-create-nested-many-without-author.input';
import { SectionUncheckedCreateNestedManyWithoutAuthorInput } from '../section/section-unchecked-create-nested-many-without-author.input';

@InputType()
export class UserUncheckedCreateWithoutAppsInput {

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

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => CourseUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    courses?: CourseUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => SectionUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    sections?: SectionUncheckedCreateNestedManyWithoutAuthorInput;
}
