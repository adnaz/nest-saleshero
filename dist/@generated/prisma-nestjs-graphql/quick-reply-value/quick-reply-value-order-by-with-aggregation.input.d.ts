import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyValueCountOrderByAggregateInput } from './quick-reply-value-count-order-by-aggregate.input';
import { QuickReplyValueAvgOrderByAggregateInput } from './quick-reply-value-avg-order-by-aggregate.input';
import { QuickReplyValueMaxOrderByAggregateInput } from './quick-reply-value-max-order-by-aggregate.input';
import { QuickReplyValueMinOrderByAggregateInput } from './quick-reply-value-min-order-by-aggregate.input';
import { QuickReplyValueSumOrderByAggregateInput } from './quick-reply-value-sum-order-by-aggregate.input';
export declare class QuickReplyValueOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    quickReplyId?: keyof typeof SortOrder;
    _count?: QuickReplyValueCountOrderByAggregateInput;
    _avg?: QuickReplyValueAvgOrderByAggregateInput;
    _max?: QuickReplyValueMaxOrderByAggregateInput;
    _min?: QuickReplyValueMinOrderByAggregateInput;
    _sum?: QuickReplyValueSumOrderByAggregateInput;
}
