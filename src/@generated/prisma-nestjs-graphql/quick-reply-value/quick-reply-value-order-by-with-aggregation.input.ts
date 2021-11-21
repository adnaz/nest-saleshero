import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyValueCountOrderByAggregateInput } from './quick-reply-value-count-order-by-aggregate.input';
import { QuickReplyValueAvgOrderByAggregateInput } from './quick-reply-value-avg-order-by-aggregate.input';
import { QuickReplyValueMaxOrderByAggregateInput } from './quick-reply-value-max-order-by-aggregate.input';
import { QuickReplyValueMinOrderByAggregateInput } from './quick-reply-value-min-order-by-aggregate.input';
import { QuickReplyValueSumOrderByAggregateInput } from './quick-reply-value-sum-order-by-aggregate.input';

@InputType()
export class QuickReplyValueOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quickReplyId?: keyof typeof SortOrder;

    @Field(() => QuickReplyValueCountOrderByAggregateInput, {nullable:true})
    _count?: QuickReplyValueCountOrderByAggregateInput;

    @Field(() => QuickReplyValueAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuickReplyValueAvgOrderByAggregateInput;

    @Field(() => QuickReplyValueMaxOrderByAggregateInput, {nullable:true})
    _max?: QuickReplyValueMaxOrderByAggregateInput;

    @Field(() => QuickReplyValueMinOrderByAggregateInput, {nullable:true})
    _min?: QuickReplyValueMinOrderByAggregateInput;

    @Field(() => QuickReplyValueSumOrderByAggregateInput, {nullable:true})
    _sum?: QuickReplyValueSumOrderByAggregateInput;
}
