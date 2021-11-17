import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class CourseScalarWhereWithAggregatesInput {
    AND?: Array<CourseScalarWhereWithAggregatesInput>;
    OR?: Array<CourseScalarWhereWithAggregatesInput>;
    NOT?: Array<CourseScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    description?: StringNullableWithAggregatesFilter;
    audioId?: IntNullableWithAggregatesFilter;
    imageId?: IntNullableWithAggregatesFilter;
    published?: BoolNullableWithAggregatesFilter;
    authorId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
