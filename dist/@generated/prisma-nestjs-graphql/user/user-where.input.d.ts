import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AppListRelationFilter } from '../app/app-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';
import { SectionListRelationFilter } from '../section/section-list-relation-filter.input';
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
    apps?: AppListRelationFilter;
    posts?: PostListRelationFilter;
    courses?: CourseListRelationFilter;
    sections?: SectionListRelationFilter;
    role?: EnumRoleFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
}
