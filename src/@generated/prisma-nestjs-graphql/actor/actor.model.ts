import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Reply } from '../reply/reply.model';
import { ActorCount } from './actor-count.output';

@ObjectType()
export class Actor {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => [Reply], {nullable:true})
    replies?: Array<Reply>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ActorCount, {nullable:true})
    _count?: ActorCount | null;
}
