import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumTypeSectionNullableWithAggregatesFilter } from '../prisma/enum-type-section-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
export declare class MessageScalarWhereWithAggregatesInput {
    AND?: Array<MessageScalarWhereWithAggregatesInput>;
    OR?: Array<MessageScalarWhereWithAggregatesInput>;
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    title?: StringWithAggregatesFilter;
    description?: StringNullableWithAggregatesFilter;
    image?: StringNullableWithAggregatesFilter;
    type?: EnumTypeSectionNullableWithAggregatesFilter;
    courseId?: IntNullableWithAggregatesFilter;
    published?: BoolNullableWithAggregatesFilter;
    authorId?: IntNullableWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
}
