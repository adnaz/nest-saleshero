import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class SectionScalarWhereInput {
    AND?: Array<SectionScalarWhereInput>;
    OR?: Array<SectionScalarWhereInput>;
    NOT?: Array<SectionScalarWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringNullableFilter;
    imageId?: IntNullableFilter;
    type?: EnumTypeSectionNullableFilter;
    courseId?: IntNullableFilter;
    published?: BoolNullableFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
