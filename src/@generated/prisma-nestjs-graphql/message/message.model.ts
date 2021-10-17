import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Actor } from '../actor/actor.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Actor, {nullable:true})
    user?: Actor | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
