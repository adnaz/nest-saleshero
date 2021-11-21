import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SectionScalarWhereInput {

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    AND?: Array<SectionScalarWhereInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    OR?: Array<SectionScalarWhereInput>;

    @Field(() => [SectionScalarWhereInput], {nullable:true})
    NOT?: Array<SectionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    imageId?: IntNullableFilter;

    @Field(() => EnumTypeSectionNullableFilter, {nullable:true})
    type?: EnumTypeSectionNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
