import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    apps!: number;

    @Field(() => Int, {nullable:false})
    posts!: number;

    @Field(() => Int, {nullable:false})
    courses!: number;

    @Field(() => Int, {nullable:false})
    sections!: number;
}
