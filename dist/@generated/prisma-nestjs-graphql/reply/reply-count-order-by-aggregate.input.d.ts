import { SortOrder } from '../prisma/sort-order.enum';
export declare class ReplyCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fileId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    sectionId?: keyof typeof SortOrder;
    actorId?: keyof typeof SortOrder;
    quickRepliesId?: keyof typeof SortOrder;
}
