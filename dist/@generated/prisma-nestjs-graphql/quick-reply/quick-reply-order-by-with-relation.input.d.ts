import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyOrderByWithRelationInput } from '../reply/reply-order-by-with-relation.input';
import { QuickReplyValueOrderByRelationAggregateInput } from '../quick-reply-value/quick-reply-value-order-by-relation-aggregate.input';
export declare class QuickReplyOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    reply?: ReplyOrderByWithRelationInput;
    keepIt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    values?: QuickReplyValueOrderByRelationAggregateInput;
}
