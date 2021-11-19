import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class ActorScalarWhereWithAggregatesInput {
    AND?: Array<ActorScalarWhereWithAggregatesInput>;
    OR?: Array<ActorScalarWhereWithAggregatesInput>;
    NOT?: Array<ActorScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    name?: StringNullableWithAggregatesFilter;
    fileId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
