import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuickReplyCountAggregate } from './quick-reply-count-aggregate.output';
import { QuickReplyAvgAggregate } from './quick-reply-avg-aggregate.output';
import { QuickReplySumAggregate } from './quick-reply-sum-aggregate.output';
import { QuickReplyMinAggregate } from './quick-reply-min-aggregate.output';
import { QuickReplyMaxAggregate } from './quick-reply-max-aggregate.output';

@ObjectType()
export class AggregateQuickReply {

    @Field(() => QuickReplyCountAggregate, {nullable:true})
    _count?: QuickReplyCountAggregate;

    @Field(() => QuickReplyAvgAggregate, {nullable:true})
    _avg?: QuickReplyAvgAggregate;

    @Field(() => QuickReplySumAggregate, {nullable:true})
    _sum?: QuickReplySumAggregate;

    @Field(() => QuickReplyMinAggregate, {nullable:true})
    _min?: QuickReplyMinAggregate;

    @Field(() => QuickReplyMaxAggregate, {nullable:true})
    _max?: QuickReplyMaxAggregate;
}
