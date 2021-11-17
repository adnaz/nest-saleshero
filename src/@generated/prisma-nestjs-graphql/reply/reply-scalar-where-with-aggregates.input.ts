import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ReplyScalarWhereWithAggregatesInput {

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => [ReplyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fileId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sectionId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    actorId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quickRepliesId?: IntNullableWithAggregatesFilter;
}
