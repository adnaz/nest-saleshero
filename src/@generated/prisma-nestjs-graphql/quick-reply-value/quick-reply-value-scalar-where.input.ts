import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class QuickReplyValueScalarWhereInput {

    @Field(() => [QuickReplyValueScalarWhereInput], {nullable:true})
    AND?: Array<QuickReplyValueScalarWhereInput>;

    @Field(() => [QuickReplyValueScalarWhereInput], {nullable:true})
    OR?: Array<QuickReplyValueScalarWhereInput>;

    @Field(() => [QuickReplyValueScalarWhereInput], {nullable:true})
    NOT?: Array<QuickReplyValueScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    value?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quickReplyId?: IntNullableFilter;
}
