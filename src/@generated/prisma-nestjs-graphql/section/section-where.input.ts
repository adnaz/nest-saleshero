import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { ReplyListRelationFilter } from '../reply/reply-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SectionWhereInput {

    @Field(() => [SectionWhereInput], {nullable:true})
    AND?: Array<SectionWhereInput>;

    @Field(() => [SectionWhereInput], {nullable:true})
    OR?: Array<SectionWhereInput>;

    @Field(() => [SectionWhereInput], {nullable:true})
    NOT?: Array<SectionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    image?: FileRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    imageId?: IntNullableFilter;

    @Field(() => EnumTypeSectionNullableFilter, {nullable:true})
    type?: EnumTypeSectionNullableFilter;

    @Field(() => CourseRelationFilter, {nullable:true})
    course?: CourseRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => ReplyListRelationFilter, {nullable:true})
    replies?: ReplyListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
