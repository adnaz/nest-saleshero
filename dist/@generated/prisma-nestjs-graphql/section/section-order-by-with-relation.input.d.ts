import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { CourseOrderByWithRelationInput } from '../course/course-order-by-with-relation.input';
import { ReplyOrderByRelationAggregateInput } from '../reply/reply-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
export declare class SectionOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    title?: keyof typeof SortOrder;
    description?: keyof typeof SortOrder;
    image?: FileOrderByWithRelationInput;
    imageId?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
    course?: CourseOrderByWithRelationInput;
    courseId?: keyof typeof SortOrder;
    replies?: ReplyOrderByRelationAggregateInput;
    published?: keyof typeof SortOrder;
    author?: UserOrderByWithRelationInput;
    authorId?: keyof typeof SortOrder;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
}
