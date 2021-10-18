import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyWhereInput } from './quick-reply-where.input';
import { QuickReplyOrderByWithAggregationInput } from './quick-reply-order-by-with-aggregation.input';
import { QuickReplyScalarFieldEnum } from './quick-reply-scalar-field.enum';
import { QuickReplyScalarWhereWithAggregatesInput } from './quick-reply-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyCountAggregateInput } from './quick-reply-count-aggregate.input';
import { QuickReplyAvgAggregateInput } from './quick-reply-avg-aggregate.input';
import { QuickReplySumAggregateInput } from './quick-reply-sum-aggregate.input';
import { QuickReplyMinAggregateInput } from './quick-reply-min-aggregate.input';
import { QuickReplyMaxAggregateInput } from './quick-reply-max-aggregate.input';

@ArgsType()
export class QuickReplyGroupByArgs {

    @Field(() => QuickReplyWhereInput, {nullable:true})
    where?: QuickReplyWhereInput;

    @Field(() => [QuickReplyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuickReplyOrderByWithAggregationInput>;

    @Field(() => [QuickReplyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuickReplyScalarFieldEnum>;

    @Field(() => QuickReplyScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuickReplyScalarWhereWithAggregatesInput;

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
