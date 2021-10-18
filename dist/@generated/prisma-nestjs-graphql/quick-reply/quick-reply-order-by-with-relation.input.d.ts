import { SortOrder } from '../prisma/sort-order.enum';
import { QuickReplyValueOrderByRelationAggregateInput } from '../quick-reply-value/quick-reply-value-order-by-relation-aggregate.input';
export declare class QuickReplyOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    values?: QuickReplyValueOrderByRelationAggregateInput;
}
