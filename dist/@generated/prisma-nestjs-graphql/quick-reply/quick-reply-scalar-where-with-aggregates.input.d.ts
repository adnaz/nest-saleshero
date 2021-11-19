import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumTypeReplyWithAggregatesFilter } from '../prisma/enum-type-reply-with-aggregates-filter.input';
export declare class QuickReplyScalarWhereWithAggregatesInput {
    AND?: Array<QuickReplyScalarWhereWithAggregatesInput>;
    OR?: Array<QuickReplyScalarWhereWithAggregatesInput>;
    NOT?: Array<QuickReplyScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    keepIt?: BoolWithAggregatesFilter;
    type?: EnumTypeReplyWithAggregatesFilter;
}
