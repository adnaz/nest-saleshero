import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { QuickReplyValueCountAggregate } from './quick-reply-value-count-aggregate.output';
import { QuickReplyValueAvgAggregate } from './quick-reply-value-avg-aggregate.output';
import { QuickReplyValueSumAggregate } from './quick-reply-value-sum-aggregate.output';
import { QuickReplyValueMinAggregate } from './quick-reply-value-min-aggregate.output';
import { QuickReplyValueMaxAggregate } from './quick-reply-value-max-aggregate.output';

@ObjectType()
export class QuickReplyValueGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    value?: string;

    @Field(() => Int, {nullable:true})
    quickReplyId?: number;

    @Field(() => QuickReplyValueCountAggregate, {nullable:true})
    _count?: QuickReplyValueCountAggregate;

    @Field(() => QuickReplyValueAvgAggregate, {nullable:true})
    _avg?: QuickReplyValueAvgAggregate;

    @Field(() => QuickReplyValueSumAggregate, {nullable:true})
    _sum?: QuickReplyValueSumAggregate;

    @Field(() => QuickReplyValueMinAggregate, {nullable:true})
    _min?: QuickReplyValueMinAggregate;

    @Field(() => QuickReplyValueMaxAggregate, {nullable:true})
    _max?: QuickReplyValueMaxAggregate;
}
