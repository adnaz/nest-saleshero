import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class AppScalarWhereWithAggregatesInput {
    AND?: Array<AppScalarWhereWithAggregatesInput>;
    OR?: Array<AppScalarWhereWithAggregatesInput>;
    NOT?: Array<AppScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringNullableWithAggregatesFilter;
    authorId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
