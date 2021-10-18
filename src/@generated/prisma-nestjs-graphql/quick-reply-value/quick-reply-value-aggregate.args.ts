import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithRelationInput } from './quick-reply-value-order-by-with-relation.input';
import { QuickReplyValueWhereUniqueInput } from './quick-reply-value-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyValueCountAggregateInput } from './quick-reply-value-count-aggregate.input';
import { QuickReplyValueAvgAggregateInput } from './quick-reply-value-avg-aggregate.input';
import { QuickReplyValueSumAggregateInput } from './quick-reply-value-sum-aggregate.input';
import { QuickReplyValueMinAggregateInput } from './quick-reply-value-min-aggregate.input';
import { QuickReplyValueMaxAggregateInput } from './quick-reply-value-max-aggregate.input';

@ArgsType()
export class QuickReplyValueAggregateArgs {

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    where?: QuickReplyValueWhereInput;

    @Field(() => [QuickReplyValueOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuickReplyValueOrderByWithRelationInput>;

    @Field(() => QuickReplyValueWhereUniqueInput, {nullable:true})
    cursor?: QuickReplyValueWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuickReplyValueCountAggregateInput, {nullable:true})
    _count?: QuickReplyValueCountAggregateInput;

    @Field(() => QuickReplyValueAvgAggregateInput, {nullable:true})
    _avg?: QuickReplyValueAvgAggregateInput;

    @Field(() => QuickReplyValueSumAggregateInput, {nullable:true})
    _sum?: QuickReplyValueSumAggregateInput;

    @Field(() => QuickReplyValueMinAggregateInput, {nullable:true})
    _min?: QuickReplyValueMinAggregateInput;

    @Field(() => QuickReplyValueMaxAggregateInput, {nullable:true})
    _max?: QuickReplyValueMaxAggregateInput;
}
