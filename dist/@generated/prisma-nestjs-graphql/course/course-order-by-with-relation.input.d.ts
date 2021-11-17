import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { SectionOrderByRelationAggregateInput } from '../section/section-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class CourseOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    audio?: FileOrderByWithRelationInput;
    audioId?: keyof typeof SortOrder;
    image?: FileOrderByWithRelationInput;
    imageId?: keyof typeof SortOrder;
    sections?: SectionOrderByRelationAggregateInput;
    published?: keyof typeof SortOrder;
    author?: UserOrderByWithRelationInput;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
