import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';
export declare class ActorOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    name?: keyof typeof SortOrder;
    avatar?: keyof typeof SortOrder;
    replies?: ReplyOrderByRelationAggregateInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
