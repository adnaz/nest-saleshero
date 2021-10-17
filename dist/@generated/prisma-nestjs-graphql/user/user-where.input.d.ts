import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: IntFilter;
    email?: StringFilter;
    username?: StringNullableFilter;
    name?: StringNullableFilter;
    password?: StringFilter;
    posts?: PostListRelationFilter;
    courses?: CourseListRelationFilter;
    role?: EnumRoleFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
