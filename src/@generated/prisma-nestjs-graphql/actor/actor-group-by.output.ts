import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ActorCountAggregate } from './actor-count-aggregate.output';
import { ActorAvgAggregate } from './actor-avg-aggregate.output';
import { ActorSumAggregate } from './actor-sum-aggregate.output';
import { ActorMinAggregate } from './actor-min-aggregate.output';
import { ActorMaxAggregate } from './actor-max-aggregate.output';

@ObjectType()
export class ActorGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ActorCountAggregate, {nullable:true})
    _count?: ActorCountAggregate;

    @Field(() => ActorAvgAggregate, {nullable:true})
    _avg?: ActorAvgAggregate;

    @Field(() => ActorSumAggregate, {nullable:true})
    _sum?: ActorSumAggregate;

    @Field(() => ActorMinAggregate, {nullable:true})
    _min?: ActorMinAggregate;

    @Field(() => ActorMaxAggregate, {nullable:true})
    _max?: ActorMaxAggregate;
}
