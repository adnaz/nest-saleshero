import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ReplyRelationFilter } from '../reply/reply-relation-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { CourseRelationFilter } from '../course/course-relation-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumTypeFileFilter } from '../prisma/enum-type-file-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    link?: StringFilter;

    @Field(() => ReplyRelationFilter, {nullable:true})
    reply?: ReplyRelationFilter;

    @Field(() => ActorRelationFilter, {nullable:true})
    actor?: ActorRelationFilter;

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

    @Field(() => EnumTypeFileFilter, {nullable:true})
    type?: EnumTypeFileFilter;
}
