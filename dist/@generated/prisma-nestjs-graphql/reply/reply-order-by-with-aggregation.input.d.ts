import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyCountOrderByAggregateInput } from './reply-count-order-by-aggregate.input';
import { ReplyAvgOrderByAggregateInput } from './reply-avg-order-by-aggregate.input';
import { ReplyMaxOrderByAggregateInput } from './reply-max-order-by-aggregate.input';
import { ReplyMinOrderByAggregateInput } from './reply-min-order-by-aggregate.input';
import { ReplySumOrderByAggregateInput } from './reply-sum-order-by-aggregate.input';
export declare class ReplyOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fileId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    sectionId?: keyof typeof SortOrder;
    actorId?: keyof typeof SortOrder;
    quickRepliesId?: keyof typeof SortOrder;
    _count?: ReplyCountOrderByAggregateInput;
    _avg?: ReplyAvgOrderByAggregateInput;
    _max?: ReplyMaxOrderByAggregateInput;
    _min?: ReplyMinOrderByAggregateInput;
    _sum?: ReplySumOrderByAggregateInput;
}
