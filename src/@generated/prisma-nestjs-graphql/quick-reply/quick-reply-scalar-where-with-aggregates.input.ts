import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { EnumTypeReplyNullableWithAggregatesFilter } from '../prisma/enum-type-reply-nullable-with-aggregates-filter.input';

@InputType()
export class QuickReplyScalarWhereWithAggregatesInput {

    @Field(() => [QuickReplyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuickReplyScalarWhereWithAggregatesInput>;

    @Field(() => [QuickReplyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuickReplyScalarWhereWithAggregatesInput>;

    @Field(() => [QuickReplyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuickReplyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    keepIt?: BoolNullableWithAggregatesFilter;

    @Field(() => EnumTypeReplyNullableWithAggregatesFilter, {nullable:true})
    type?: EnumTypeReplyNullableWithAggregatesFilter;
}
