import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuickReplyValueWhereInput } from './quick-reply-value-where.input';
import { QuickReplyValueOrderByWithAggregationInput } from './quick-reply-value-order-by-with-aggregation.input';
import { QuickReplyValueScalarFieldEnum } from './quick-reply-value-scalar-field.enum';
import { QuickReplyValueScalarWhereWithAggregatesInput } from './quick-reply-value-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuickReplyValueCountAggregateInput } from './quick-reply-value-count-aggregate.input';
import { QuickReplyValueAvgAggregateInput } from './quick-reply-value-avg-aggregate.input';
import { QuickReplyValueSumAggregateInput } from './quick-reply-value-sum-aggregate.input';
import { QuickReplyValueMinAggregateInput } from './quick-reply-value-min-aggregate.input';
import { QuickReplyValueMaxAggregateInput } from './quick-reply-value-max-aggregate.input';

@ArgsType()
export class QuickReplyValueGroupByArgs {

    @Field(() => QuickReplyValueWhereInput, {nullable:true})
    where?: QuickReplyValueWhereInput;

    @Field(() => [QuickReplyValueOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuickReplyValueOrderByWithAggregationInput>;

    @Field(() => [QuickReplyValueScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuickReplyValueScalarFieldEnum>;

    @Field(() => QuickReplyValueScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuickReplyValueScalarWhereWithAggregatesInput;

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
