import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Section } from '../section/section.model';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { CourseCount } from './course-count.output';

@ObjectType()
export class Course {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    audio!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => [Section], {nullable:true})
    sections?: Array<Section>;

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

    @Field(() => CourseCount, {nullable:true})
    _count?: CourseCount | null;
}
