import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
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

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    order?: FloatNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    fileId?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    text?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reply?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sectionId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    actorId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quickReplyId?: IntNullableWithAggregatesFilter;
}
