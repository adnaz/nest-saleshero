import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';
import { Section } from '../section/section.model';
import { User } from '../user/user.model';
import { CourseCount } from './course-count.output';

@ObjectType()
export class Course {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:true})
    order!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => File, {nullable:true})
    audio?: File | null;

    @Field(() => Int, {nullable:true})
    audioId!: number | null;

    @Field(() => File, {nullable:true})
    image?: File | null;

    @Field(() => Int, {nullable:true})
    imageId!: number | null;

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

    @Field(() => CourseCount, {nullable:false})
    _count?: CourseCount;
}
