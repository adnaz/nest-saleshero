import { SortOrder } from '../prisma/sort-order.enum';
export declare class QuickReplyValueMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    quickReplyId?: keyof typeof SortOrder;
}
