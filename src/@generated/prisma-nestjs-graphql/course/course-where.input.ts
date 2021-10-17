import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { SectionListRelationFilter } from '../section/section-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourseWhereInput {

    @Field(() => [CourseWhereInput], {nullable:true})
    AND?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    OR?: Array<CourseWhereInput>;

    @Field(() => [CourseWhereInput], {nullable:true})
    NOT?: Array<CourseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    audio?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => SectionListRelationFilter, {nullable:true})
    sections?: SectionListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @HideField()
    author?: UserRelationFilter;

    @HideField()
    authorId?: IntNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
