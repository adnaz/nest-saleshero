import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ReplyRelationFilter } from '../reply/reply-relation-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { AffirmationRelationFilter } from '../affirmation/affirmation-relation-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTypeFileNullableFilter } from '../prisma/enum-type-file-nullable-filter.input';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    link?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    location?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    key?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bucket?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    etag?: StringNullableFilter;

    @Field(() => ReplyRelationFilter, {nullable:true})
    reply?: ReplyRelationFilter;

    @Field(() => ActorRelationFilter, {nullable:true})
    actor?: ActorRelationFilter;

    @Field(() => AffirmationRelationFilter, {nullable:true})
    affirmation?: AffirmationRelationFilter;

    @Field(() => CourseRelationFilter, {nullable:true})
    courseImage?: CourseRelationFilter;

    @Field(() => CourseRelationFilter, {nullable:true})
    courseAudio?: CourseRelationFilter;

    @Field(() => SectionRelationFilter, {nullable:true})
    section?: SectionRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumTypeFileNullableFilter, {nullable:true})
    type?: EnumTypeFileNullableFilter;
}
