import { SortOrder } from '../prisma/sort-order.enum';
export declare class CourseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    audio?: keyof typeof SortOrder;
    image?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
