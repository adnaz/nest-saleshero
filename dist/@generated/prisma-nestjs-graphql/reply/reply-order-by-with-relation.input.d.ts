import { SortOrder } from '../prisma/sort-order.enum';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
export declare class ReplyOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    text?: keyof typeof SortOrder;
    audio?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    user?: ActorOrderByWithRelationInput;
    userId?: keyof typeof SortOrder;
}
