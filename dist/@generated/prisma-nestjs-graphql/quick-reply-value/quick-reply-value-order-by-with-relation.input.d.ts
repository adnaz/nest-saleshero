import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyOrderByWithRelationInput } from '../quick-reply/quick-reply-order-by-with-relation.input';
export declare class QuickReplyValueOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    value?: keyof typeof SortOrder;
    quickReply?: QuickReplyOrderByWithRelationInput;
    quickReplyId?: keyof typeof SortOrder;
}
