import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
export declare class ReplyScalarWhereInput {
    AND?: Array<ReplyScalarWhereInput>;
    OR?: Array<ReplyScalarWhereInput>;
    NOT?: Array<ReplyScalarWhereInput>;
    id?: IntFilter;
    text?: StringNullableFilter;
    audio?: StringNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    userId?: IntNullableFilter;
}
