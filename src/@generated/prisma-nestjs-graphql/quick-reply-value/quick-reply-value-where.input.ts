import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
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

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => QuickReplyRelationFilter, {nullable:true})
    quickReply?: QuickReplyRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quickReplyId?: IntNullableFilter;
}
