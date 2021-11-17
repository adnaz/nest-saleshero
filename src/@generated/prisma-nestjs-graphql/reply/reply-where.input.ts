import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SectionRelationFilter } from '../section/section-relation-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { QuickReplyRelationFilter } from '../quick-reply/quick-reply-relation-filter.input';

@InputType()
export class ReplyWhereInput {

    @Field(() => [ReplyWhereInput], {nullable:true})
    AND?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    OR?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    NOT?: Array<ReplyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    file?: FileRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fileId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SectionRelationFilter, {nullable:true})
    section?: SectionRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    sectionId?: IntFilter;

    @Field(() => ActorRelationFilter, {nullable:true})
    user?: ActorRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    actorId?: IntNullableFilter;

    @Field(() => QuickReplyRelationFilter, {nullable:true})
    quickReplies?: QuickReplyRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quickRepliesId?: IntNullableFilter;
}
