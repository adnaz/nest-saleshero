import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { App } from '../app/app.model';
import { Post } from '../post/post.model';
import { Course } from '../course/course.model';
import { Section } from '../section/section.model';
import { Role } from '../prisma/role.enum';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @HideField()
    password!: string;

    @Field(() => [App], {nullable:true})
    apps?: Array<App>;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => [Course], {nullable:true})
    courses?: Array<Course>;

    @Field(() => [Section], {nullable:true})
    sections?: Array<Section>;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
