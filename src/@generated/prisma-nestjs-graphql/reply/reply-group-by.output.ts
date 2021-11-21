import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReplyCountAggregate } from './reply-count-aggregate.output';
import { ReplyAvgAggregate } from './reply-avg-aggregate.output';
import { ReplySumAggregate } from './reply-sum-aggregate.output';
import { ReplyMinAggregate } from './reply-min-aggregate.output';
import { ReplyMaxAggregate } from './reply-max-aggregate.output';

@ObjectType()
export class ReplyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    sectionId?: number;

    @Field(() => Int, {nullable:true})
    actorId?: number;

    @Field(() => Int, {nullable:true})
    quickReplyId?: number;

    @Field(() => ReplyCountAggregate, {nullable:true})
    _count?: ReplyCountAggregate;

    @Field(() => ReplyAvgAggregate, {nullable:true})
    _avg?: ReplyAvgAggregate;

    @Field(() => ReplySumAggregate, {nullable:true})
    _sum?: ReplySumAggregate;

    @Field(() => ReplyMinAggregate, {nullable:true})
    _min?: ReplyMinAggregate;

    @Field(() => ReplyMaxAggregate, {nullable:true})
    _max?: ReplyMaxAggregate;
}
