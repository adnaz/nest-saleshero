import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TypeSection } from '../prisma/type-section.enum';
import { Course } from '../course/course.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => TypeSection, {nullable:true})
    type!: keyof typeof TypeSection | null;

    @Field(() => Course, {nullable:true})
    course?: Course | null;

    @Field(() => Int, {nullable:true})
    courseId!: number | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    published!: boolean | null;

    @Field(() => User, {nullable:true})
    author?: User | null;

    @Field(() => Int, {nullable:true})
    authorId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
