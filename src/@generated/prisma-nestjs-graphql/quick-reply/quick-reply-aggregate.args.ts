import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithRelationInput } from './quick-reply-order-by-with-relation.input';
import { QuickReplyWhereUniqueInput } from './quick-reply-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyCountAggregateInput } from './quick-reply-count-aggregate.input';
import { QuickReplyAvgAggregateInput } from './quick-reply-avg-aggregate.input';
import { QuickReplySumAggregateInput } from './quick-reply-sum-aggregate.input';
import { QuickReplyMinAggregateInput } from './quick-reply-min-aggregate.input';
import { QuickReplyMaxAggregateInput } from './quick-reply-max-aggregate.input';

@ArgsType()
export class QuickReplyAggregateArgs {

    @Field(() => QuickReplyWhereInput, {nullable:true})
    where?: QuickReplyWhereInput;

    @Field(() => [QuickReplyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuickReplyOrderByWithRelationInput>;

    @Field(() => QuickReplyWhereUniqueInput, {nullable:true})
    cursor?: QuickReplyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuickReplyCountAggregateInput, {nullable:true})
    _count?: QuickReplyCountAggregateInput;

    @Field(() => QuickReplyAvgAggregateInput, {nullable:true})
    _avg?: QuickReplyAvgAggregateInput;

    @Field(() => QuickReplySumAggregateInput, {nullable:true})
    _sum?: QuickReplySumAggregateInput;

    @Field(() => QuickReplyMinAggregateInput, {nullable:true})
    _min?: QuickReplyMinAggregateInput;

    @Field(() => QuickReplyMaxAggregateInput, {nullable:true})
    _max?: QuickReplyMaxAggregateInput;
}
