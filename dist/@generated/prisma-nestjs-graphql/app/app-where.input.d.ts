import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class AppWhereInput {
    AND?: Array<AppWhereInput>;
    OR?: Array<AppWhereInput>;
    NOT?: Array<AppWhereInput>;
    id?: IntFilter;
    name?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}