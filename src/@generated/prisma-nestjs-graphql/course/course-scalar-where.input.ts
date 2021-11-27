import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CourseScalarWhereInput {

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    AND?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    OR?: Array<CourseScalarWhereInput>;

    @Field(() => [CourseScalarWhereInput], {nullable:true})
    NOT?: Array<CourseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    order?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    audioId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    imageId?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
