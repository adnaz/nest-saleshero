import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyCountOrderByAggregateInput } from './quick-reply-count-order-by-aggregate.input';
import { QuickReplyAvgOrderByAggregateInput } from './quick-reply-avg-order-by-aggregate.input';
import { QuickReplyMaxOrderByAggregateInput } from './quick-reply-max-order-by-aggregate.input';
import { QuickReplyMinOrderByAggregateInput } from './quick-reply-min-order-by-aggregate.input';
import { QuickReplySumOrderByAggregateInput } from './quick-reply-sum-order-by-aggregate.input';

@InputType()
export class QuickReplyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    keepIt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => QuickReplyCountOrderByAggregateInput, {nullable:true})
    _count?: QuickReplyCountOrderByAggregateInput;

    @Field(() => QuickReplyAvgOrderByAggregateInput, {nullable:true})
    _avg?: QuickReplyAvgOrderByAggregateInput;

    @Field(() => QuickReplyMaxOrderByAggregateInput, {nullable:true})
    _max?: QuickReplyMaxOrderByAggregateInput;

    @Field(() => QuickReplyMinOrderByAggregateInput, {nullable:true})
    _min?: QuickReplyMinOrderByAggregateInput;

    @Field(() => QuickReplySumOrderByAggregateInput, {nullable:true})
    _sum?: QuickReplySumOrderByAggregateInput;
}
