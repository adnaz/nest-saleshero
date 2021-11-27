import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumTypeSectionNullableWithAggregatesFilter } from '../prisma/enum-type-section-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SectionScalarWhereWithAggregatesInput {

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => [SectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    order?: FloatNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    imageId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumTypeSectionNullableWithAggregatesFilter, {nullable:true})
    type?: EnumTypeSectionNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    courseId?: IntNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    published?: BoolNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    authorId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
