import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class CourseWhereInput {
    AND?: Array<CourseWhereInput>;
    OR?: Array<CourseWhereInput>;
    NOT?: Array<CourseWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringNullableFilter;
    audio?: StringNullableFilter;
    image?: StringNullableFilter;
    published?: BoolNullableFilter;
    author?: UserRelationFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
