import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
export declare class QuickReplyValueScalarWhereWithAggregatesInput {
    AND?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;
    OR?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;
    NOT?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    value?: StringWithAggregatesFilter;
    quickReplyId?: IntNullableWithAggregatesFilter;
}
