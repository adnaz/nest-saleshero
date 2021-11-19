import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @HideField()
    quickReplyId?: IntNullableFilter;
}
