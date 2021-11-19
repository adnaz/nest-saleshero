import { SortOrder } from '../prisma/sort-order.enum';
import { MessageCountOrderByAggregateInput } from './message-count-order-by-aggregate.input';
import { MessageAvgOrderByAggregateInput } from './message-avg-order-by-aggregate.input';
import { MessageMaxOrderByAggregateInput } from './message-max-order-by-aggregate.input';
import { MessageMinOrderByAggregateInput } from './message-min-order-by-aggregate.input';
import { MessageSumOrderByAggregateInput } from './message-sum-order-by-aggregate.input';
export declare class MessageOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    image?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    courseId?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: MessageCountOrderByAggregateInput;
    _avg?: MessageAvgOrderByAggregateInput;
    _max?: MessageMaxOrderByAggregateInput;
    _min?: MessageMinOrderByAggregateInput;
    _sum?: MessageSumOrderByAggregateInput;
}
