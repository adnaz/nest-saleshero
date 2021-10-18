import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { CourseOrderByRelationAggregateInput } from '../course/course-order-by-relation-aggregate.input';
import { SectionOrderByRelationAggregateInput } from '../section/section-order-by-relation-aggregate.input';
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    courses?: CourseOrderByRelationAggregateInput;
    sections?: SectionOrderByRelationAggregateInput;
    role?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
