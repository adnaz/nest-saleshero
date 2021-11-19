import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class QuickReplyValueScalarWhereWithAggregatesInput {

    @Field(() => [QuickReplyValueScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;

    @Field(() => [QuickReplyValueScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;

    @Field(() => [QuickReplyValueScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuickReplyValueScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @HideField()
    quickReplyId?: IntNullableWithAggregatesFilter;
}
