import { SortOrder } from '../prisma/sort-order.enum';
export declare class FileCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    link?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    key?: keyof typeof SortOrder;
    bucket?: keyof typeof SortOrder;
    etag?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
