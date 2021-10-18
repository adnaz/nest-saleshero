import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Actor } from '../actor/actor.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Reply {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    text!: string | null;

    @Field(() => String, {nullable:true})
    audio!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Actor, {nullable:true})
    user?: Actor | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
