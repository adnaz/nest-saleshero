import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumTypeFileWithAggregatesFilter } from '../prisma/enum-type-file-with-aggregates-filter.input';
export declare class FileScalarWhereWithAggregatesInput {
    AND?: Array<FileScalarWhereWithAggregatesInput>;
    OR?: Array<FileScalarWhereWithAggregatesInput>;
    NOT?: Array<FileScalarWhereWithAggregatesInput>;
    id?: IntWithAggregatesFilter;
    link?: StringWithAggregatesFilter;
    createdAt?: DateTimeWithAggregatesFilter;
    updatedAt?: DateTimeWithAggregatesFilter;
    type?: EnumTypeFileWithAggregatesFilter;
}
