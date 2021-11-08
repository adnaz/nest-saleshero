import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
export declare class ReplyScalarWhereWithAggregatesInput {
    AND?: Array<ReplyScalarWhereWithAggregatesInput>;
    OR?: Array<ReplyScalarWhereWithAggregatesInput>;
    NOT?: Array<ReplyScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    text?: StringNullableWithAggregatesFilter;
    audio?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    userId?: IntNullableWithAggregatesFilter;
}
