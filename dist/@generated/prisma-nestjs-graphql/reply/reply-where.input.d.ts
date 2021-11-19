import { IntFilter } from '../prisma/int-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { QuickReplyRelationFilter } from '../quick-reply/quick-reply-relation-filter.input';
export declare class ReplyWhereInput {
    AND?: Array<ReplyWhereInput>;
    OR?: Array<ReplyWhereInput>;
    NOT?: Array<ReplyWhereInput>;
    id?: IntFilter;
    file?: FileRelationFilter;
    fileId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    section?: SectionRelationFilter;
    sectionId?: IntFilter;
    user?: ActorRelationFilter;
    actorId?: IntNullableFilter;
    quickReplies?: QuickReplyRelationFilter;
    quickRepliesId?: IntNullableFilter;
}
