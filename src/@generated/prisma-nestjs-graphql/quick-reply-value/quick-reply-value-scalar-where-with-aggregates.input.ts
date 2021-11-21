import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

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

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    title?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    value?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quickReplyId?: IntNullableWithAggregatesFilter;
}
