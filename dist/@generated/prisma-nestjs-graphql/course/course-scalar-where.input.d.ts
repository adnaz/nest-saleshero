import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CourseScalarWhereInput {
    AND?: Array<CourseScalarWhereInput>;
    OR?: Array<CourseScalarWhereInput>;
    NOT?: Array<CourseScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringNullableFilter;
    audio?: StringNullableFilter;
    image?: StringNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
