import { SortOrder } from '../prisma/sort-order.enum';
export declare class ReplyCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    audio?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
