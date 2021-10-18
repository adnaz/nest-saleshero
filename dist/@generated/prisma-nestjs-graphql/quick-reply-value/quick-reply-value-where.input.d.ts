import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { QuickReplyRelationFilter } from '../quick-reply/quick-reply-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class QuickReplyValueWhereInput {
    AND?: Array<QuickReplyValueWhereInput>;
    OR?: Array<QuickReplyValueWhereInput>;
    NOT?: Array<QuickReplyValueWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    value?: StringFilter;
    quickReply?: QuickReplyRelationFilter;
    quickReplyId?: IntNullableFilter;
}
