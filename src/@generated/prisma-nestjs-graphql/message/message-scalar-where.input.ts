import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

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

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
