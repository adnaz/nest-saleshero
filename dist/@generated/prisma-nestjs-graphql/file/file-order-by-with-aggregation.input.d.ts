import { SortOrder } from '../prisma/sort-order.enum';
import { FileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { FileAvgOrderByAggregateInput } from './file-avg-order-by-aggregate.input';
import { FileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { FileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';
import { FileSumOrderByAggregateInput } from './file-sum-order-by-aggregate.input';
export declare class FileOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    link?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    _count?: FileCountOrderByAggregateInput;
    _avg?: FileAvgOrderByAggregateInput;
    _max?: FileMaxOrderByAggregateInput;
    _min?: FileMinOrderByAggregateInput;
    _sum?: FileSumOrderByAggregateInput;
}
