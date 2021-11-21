import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from './type-reply.enum';
import { NestedEnumTypeReplyNullableWithAggregatesFilter } from './nested-enum-type-reply-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTypeReplyNullableFilter } from './nested-enum-type-reply-nullable-filter.input';

@InputType()
export class EnumTypeReplyNullableWithAggregatesFilter {

    @Field(() => TypeReply, {nullable:true})
    equals?: keyof typeof TypeReply;

    @Field(() => [TypeReply], {nullable:true})
    in?: Array<keyof typeof TypeReply>;

    @Field(() => [TypeReply], {nullable:true})
    notIn?: Array<keyof typeof TypeReply>;

    @Field(() => NestedEnumTypeReplyNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypeReplyNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTypeReplyNullableFilter, {nullable:true})
    _min?: NestedEnumTypeReplyNullableFilter;

    @Field(() => NestedEnumTypeReplyNullableFilter, {nullable:true})
    _max?: NestedEnumTypeReplyNullableFilter;
}
