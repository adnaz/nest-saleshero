import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumTypeReplyWithAggregatesFilter } from '../prisma/enum-type-reply-with-aggregates-filter.input';

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

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    keepIt?: BoolWithAggregatesFilter;

    @Field(() => EnumTypeReplyWithAggregatesFilter, {nullable:true})
    type?: EnumTypeReplyWithAggregatesFilter;
}
