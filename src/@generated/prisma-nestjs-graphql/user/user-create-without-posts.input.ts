import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { AppCreateNestedManyWithoutAuthorInput } from '../app/app-create-nested-many-without-author.input';
import { CourseCreateNestedManyWithoutAuthorInput } from '../course/course-create-nested-many-without-author.input';
import { SectionCreateNestedManyWithoutAuthorInput } from '../section/section-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutPostsInput {

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

    @Field(() => AppCreateNestedManyWithoutAuthorInput, {nullable:true})
    apps?: AppCreateNestedManyWithoutAuthorInput;

    @Field(() => CourseCreateNestedManyWithoutAuthorInput, {nullable:true})
    courses?: CourseCreateNestedManyWithoutAuthorInput;

    @Field(() => SectionCreateNestedManyWithoutAuthorInput, {nullable:true})
    sections?: SectionCreateNestedManyWithoutAuthorInput;
}
