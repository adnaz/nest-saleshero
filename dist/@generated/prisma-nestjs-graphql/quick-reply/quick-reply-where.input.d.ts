import { IntFilter } from '../prisma/int-filter.input';
import { EnumTypeReplyFilter } from '../prisma/enum-type-reply-filter.input';
import { QuickReplyValueListRelationFilter } from '../quick-reply-value/quick-reply-value-list-relation-filter.input';
export declare class QuickReplyWhereInput {
    AND?: Array<QuickReplyWhereInput>;
    OR?: Array<QuickReplyWhereInput>;
    NOT?: Array<QuickReplyWhereInput>;
    id?: IntFilter;
    type?: EnumTypeReplyFilter;
    values?: QuickReplyValueListRelationFilter;
}
