import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTypeSectionNullableFilter } from '../prisma/enum-type-section-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageScalarWhereInput {

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    AND?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    OR?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    NOT?: Array<MessageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => EnumTypeSectionNullableFilter, {nullable:true})
    type?: EnumTypeSectionNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @HideField()
    authorId?: IntNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
