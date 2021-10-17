import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class CourseOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    audio?: keyof typeof SortOrder;
    image?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    author?: UserOrderByWithRelationInput;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
