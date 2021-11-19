import { SortOrder } from '../prisma/sort-order.enum';
import { AppCountOrderByAggregateInput } from './app-count-order-by-aggregate.input';
import { AppAvgOrderByAggregateInput } from './app-avg-order-by-aggregate.input';
import { AppMaxOrderByAggregateInput } from './app-max-order-by-aggregate.input';
import { AppMinOrderByAggregateInput } from './app-min-order-by-aggregate.input';
import { AppSumOrderByAggregateInput } from './app-sum-order-by-aggregate.input';
export declare class AppOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: AppCountOrderByAggregateInput;
    _avg?: AppAvgOrderByAggregateInput;
    _max?: AppMaxOrderByAggregateInput;
    _min?: AppMinOrderByAggregateInput;
    _sum?: AppSumOrderByAggregateInput;
}
