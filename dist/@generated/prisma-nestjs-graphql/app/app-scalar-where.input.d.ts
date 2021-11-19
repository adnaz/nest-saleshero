import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class AppScalarWhereInput {
    AND?: Array<AppScalarWhereInput>;
    OR?: Array<AppScalarWhereInput>;
    NOT?: Array<AppScalarWhereInput>;
    id?: IntFilter;
    name?: StringNullableFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
