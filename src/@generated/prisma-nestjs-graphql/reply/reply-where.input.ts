import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ReplyWhereInput {

    @Field(() => [ReplyWhereInput], {nullable:true})
    AND?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    OR?: Array<ReplyWhereInput>;

    @Field(() => [ReplyWhereInput], {nullable:true})
    NOT?: Array<ReplyWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    text?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    audio?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ActorRelationFilter, {nullable:true})
    user?: ActorRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
