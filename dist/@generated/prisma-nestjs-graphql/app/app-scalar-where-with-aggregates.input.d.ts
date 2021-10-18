import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class AppScalarWhereWithAggregatesInput {
    AND?: Array<AppScalarWhereWithAggregatesInput>;
    OR?: Array<AppScalarWhereWithAggregatesInput>;
    NOT?: Array<AppScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
