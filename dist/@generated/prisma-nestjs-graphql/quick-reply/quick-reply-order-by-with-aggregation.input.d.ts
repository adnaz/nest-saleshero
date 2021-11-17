import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyCountOrderByAggregateInput } from './quick-reply-count-order-by-aggregate.input';
import { QuickReplyAvgOrderByAggregateInput } from './quick-reply-avg-order-by-aggregate.input';
import { QuickReplyMaxOrderByAggregateInput } from './quick-reply-max-order-by-aggregate.input';
import { QuickReplyMinOrderByAggregateInput } from './quick-reply-min-order-by-aggregate.input';
import { QuickReplySumOrderByAggregateInput } from './quick-reply-sum-order-by-aggregate.input';
export declare class QuickReplyOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    keepIt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: QuickReplyCountOrderByAggregateInput;
    _avg?: QuickReplyAvgOrderByAggregateInput;
    _max?: QuickReplyMaxOrderByAggregateInput;
    _min?: QuickReplyMinOrderByAggregateInput;
    _sum?: QuickReplySumOrderByAggregateInput;
}
