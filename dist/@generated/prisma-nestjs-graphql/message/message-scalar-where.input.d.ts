import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MessageScalarWhereInput {
    AND?: Array<MessageScalarWhereInput>;
    OR?: Array<MessageScalarWhereInput>;
    NOT?: Array<MessageScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringNullableFilter;
    image?: StringNullableFilter;
    type?: EnumTypeSectionNullableFilter;
    courseId?: IntNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}