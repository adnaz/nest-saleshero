import { SortOrder } from '../prisma/sort-order.enum';
export declare class FileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    link?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
