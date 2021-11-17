import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ReplyScalarWhereInput {

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    AND?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    OR?: Array<ReplyScalarWhereInput>;

    @Field(() => [ReplyScalarWhereInput], {nullable:true})
    NOT?: Array<ReplyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fileId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    sectionId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    actorId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quickRepliesId?: IntNullableFilter;
}
