import { SortOrder } from '../prisma/sort-order.enum';
export declare class ReplySumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileId?: keyof typeof SortOrder;
    sectionId?: keyof typeof SortOrder;
    actorId?: keyof typeof SortOrder;
    quickRepliesId?: keyof typeof SortOrder;
}
