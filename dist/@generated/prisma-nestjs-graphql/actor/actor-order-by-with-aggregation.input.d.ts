import { SortOrder } from '../prisma/sort-order.enum';
import { ActorCountOrderByAggregateInput } from './actor-count-order-by-aggregate.input';
import { ActorAvgOrderByAggregateInput } from './actor-avg-order-by-aggregate.input';
import { ActorMaxOrderByAggregateInput } from './actor-max-order-by-aggregate.input';
import { ActorMinOrderByAggregateInput } from './actor-min-order-by-aggregate.input';
import { ActorSumOrderByAggregateInput } from './actor-sum-order-by-aggregate.input';
export declare class ActorOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: ActorCountOrderByAggregateInput;
    _avg?: ActorAvgOrderByAggregateInput;
    _max?: ActorMaxOrderByAggregateInput;
    _min?: ActorMinOrderByAggregateInput;
    _sum?: ActorSumOrderByAggregateInput;
}
