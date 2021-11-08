import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class MessageWhereInput {
    AND?: Array<MessageWhereInput>;
    OR?: Array<MessageWhereInput>;
    NOT?: Array<MessageWhereInput>;
    id?: IntFilter;
    title?: StringFilter;
    description?: StringNullableFilter;
    image?: StringNullableFilter;
    type?: EnumTypeSectionNullableFilter;
    course?: CourseRelationFilter;
    courseId?: IntNullableFilter;
    published?: BoolNullableFilter;
    author?: UserRelationFilter;
    authorId?: IntNullableFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
