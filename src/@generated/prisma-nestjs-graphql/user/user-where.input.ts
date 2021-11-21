import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AppListRelationFilter } from '../app/app-list-relation-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CourseListRelationFilter } from '../course/course-list-relation-filter.input';
import { SectionListRelationFilter } from '../section/section-list-relation-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    username?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => AppListRelationFilter, {nullable:true})
    apps?: AppListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => CourseListRelationFilter, {nullable:true})
    courses?: CourseListRelationFilter;

    @Field(() => SectionListRelationFilter, {nullable:true})
    sections?: SectionListRelationFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
