import { SortOrder } from '../prisma/sort-order.enum';
import { SectionCountOrderByAggregateInput } from './section-count-order-by-aggregate.input';
import { SectionAvgOrderByAggregateInput } from './section-avg-order-by-aggregate.input';
import { SectionMaxOrderByAggregateInput } from './section-max-order-by-aggregate.input';
import { SectionMinOrderByAggregateInput } from './section-min-order-by-aggregate.input';
import { SectionSumOrderByAggregateInput } from './section-sum-order-by-aggregate.input';
export declare class SectionOrderByWithAggregationInput {
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
    _count?: SectionCountOrderByAggregateInput;
    _avg?: SectionAvgOrderByAggregateInput;
    _max?: SectionMaxOrderByAggregateInput;
    _min?: SectionMinOrderByAggregateInput;
    _sum?: SectionSumOrderByAggregateInput;
}
