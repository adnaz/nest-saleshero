import { SortOrder } from '../prisma/sort-order.enum';
import { CourseCountOrderByAggregateInput } from './course-count-order-by-aggregate.input';
import { CourseAvgOrderByAggregateInput } from './course-avg-order-by-aggregate.input';
import { CourseMaxOrderByAggregateInput } from './course-max-order-by-aggregate.input';
import { CourseMinOrderByAggregateInput } from './course-min-order-by-aggregate.input';
import { CourseSumOrderByAggregateInput } from './course-sum-order-by-aggregate.input';
export declare class CourseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    audio?: keyof typeof SortOrder;
    image?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    _count?: CourseCountOrderByAggregateInput;
    _avg?: CourseAvgOrderByAggregateInput;
    _max?: CourseMaxOrderByAggregateInput;
    _min?: CourseMinOrderByAggregateInput;
    _sum?: CourseSumOrderByAggregateInput;
}
