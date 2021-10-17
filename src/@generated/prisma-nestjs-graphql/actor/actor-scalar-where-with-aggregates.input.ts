import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ActorScalarWhereWithAggregatesInput {

    @Field(() => [ActorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActorScalarWhereWithAggregatesInput>;

    @Field(() => [ActorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActorScalarWhereWithAggregatesInput>;

    @Field(() => [ActorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActorScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avatar?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
