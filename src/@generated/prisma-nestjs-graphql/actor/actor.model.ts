import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { ActorCount } from './actor-count.output';

@ObjectType()
export class Actor {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ActorCount, {nullable:true})
    _count?: ActorCount | null;
}
