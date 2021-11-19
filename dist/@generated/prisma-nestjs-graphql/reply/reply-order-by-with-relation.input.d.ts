import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { SectionOrderByWithRelationInput } from '../section/section-order-by-with-relation.input';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
import { QuickReplyOrderByWithRelationInput } from '../quick-reply/quick-reply-order-by-with-relation.input';
export declare class ReplyOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    file?: FileOrderByWithRelationInput;
    fileId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    section?: SectionOrderByWithRelationInput;
    sectionId?: keyof typeof SortOrder;
    user?: ActorOrderByWithRelationInput;
    actorId?: keyof typeof SortOrder;
    quickReplies?: QuickReplyOrderByWithRelationInput;
    quickRepliesId?: keyof typeof SortOrder;
}
