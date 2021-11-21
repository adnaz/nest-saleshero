import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ReplyRelationFilter } from '../reply/reply-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumTypeReplyNullableFilter } from '../prisma/enum-type-reply-nullable-filter.input';
import { QuickReplyValueListRelationFilter } from '../quick-reply-value/quick-reply-value-list-relation-filter.input';

@InputType()
export class QuickReplyWhereInput {

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    AND?: Array<QuickReplyWhereInput>;

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    OR?: Array<QuickReplyWhereInput>;

    @Field(() => [QuickReplyWhereInput], {nullable:true})
    NOT?: Array<QuickReplyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ReplyRelationFilter, {nullable:true})
    reply?: ReplyRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    keepIt?: BoolNullableFilter;

    @Field(() => EnumTypeReplyNullableFilter, {nullable:true})
    type?: EnumTypeReplyNullableFilter;

    @Field(() => QuickReplyValueListRelationFilter, {nullable:true})
    values?: QuickReplyValueListRelationFilter;
}
