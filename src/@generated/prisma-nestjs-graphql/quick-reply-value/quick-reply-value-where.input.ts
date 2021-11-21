import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { QuickReplyRelationFilter } from '../quick-reply/quick-reply-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class QuickReplyValueWhereInput {

    @Field(() => [QuickReplyValueWhereInput], {nullable:true})
    AND?: Array<QuickReplyValueWhereInput>;

    @Field(() => [QuickReplyValueWhereInput], {nullable:true})
    OR?: Array<QuickReplyValueWhereInput>;

    @Field(() => [QuickReplyValueWhereInput], {nullable:true})
    NOT?: Array<QuickReplyValueWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    value?: StringNullableFilter;

    @Field(() => QuickReplyRelationFilter, {nullable:true})
    quickReply?: QuickReplyRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quickReplyId?: IntNullableFilter;
}
