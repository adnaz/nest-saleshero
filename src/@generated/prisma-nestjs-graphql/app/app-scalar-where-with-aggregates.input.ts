import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AppScalarWhereWithAggregatesInput {

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => [AppScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AppScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
