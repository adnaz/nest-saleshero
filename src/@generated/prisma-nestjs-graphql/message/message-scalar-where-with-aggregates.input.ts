import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumTypeSectionNullableWithAggregatesFilter } from '../prisma/enum-type-section-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MessageScalarWhereWithAggregatesInput {

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    image?: StringNullableWithAggregatesFilter;

    @Field(() => EnumTypeSectionNullableWithAggregatesFilter, {nullable:true})
    type?: EnumTypeSectionNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    courseId?: IntNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    published?: BoolNullableWithAggregatesFilter;

    @HideField()
    authorId?: IntNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
