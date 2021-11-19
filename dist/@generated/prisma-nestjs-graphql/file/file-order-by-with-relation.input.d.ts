import { SortOrder } from '../prisma/sort-order.enum';
import { ReplyOrderByWithRelationInput } from '../reply/reply-order-by-with-relation.input';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
import { CourseOrderByWithRelationInput } from '../course/course-order-by-with-relation.input';
import { SectionOrderByWithRelationInput } from '../section/section-order-by-with-relation.input';
export declare class FileOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    link?: keyof typeof SortOrder;
    location?: keyof typeof SortOrder;
    key?: keyof typeof SortOrder;
    bucket?: keyof typeof SortOrder;
    etag?: keyof typeof SortOrder;
    reply?: ReplyOrderByWithRelationInput;
    actor?: ActorOrderByWithRelationInput;
    courseImage?: CourseOrderByWithRelationInput;
    courseAudio?: CourseOrderByWithRelationInput;
    section?: SectionOrderByWithRelationInput;
    createdAt?: keyof typeof SortOrder;
    updatedAt?: keyof typeof SortOrder;
    type?: keyof typeof SortOrder;
}
