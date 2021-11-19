import { SortOrder } from '../prisma/sort-order.enum';
export declare class SectionMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    imageId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    courseId?: keyof typeof SortOrder;
    published?: keyof typeof SortOrder;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
