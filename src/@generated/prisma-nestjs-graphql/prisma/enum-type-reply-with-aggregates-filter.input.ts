import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from './type-reply.enum';
import { NestedEnumTypeReplyWithAggregatesFilter } from './nested-enum-type-reply-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTypeReplyFilter } from './nested-enum-type-reply-filter.input';

@InputType()
export class EnumTypeReplyWithAggregatesFilter {

    @Field(() => TypeReply, {nullable:true})
    equals?: keyof typeof TypeReply;

    @Field(() => [TypeReply], {nullable:true})
    in?: Array<keyof typeof TypeReply>;

    @Field(() => [TypeReply], {nullable:true})
    notIn?: Array<keyof typeof TypeReply>;

    @Field(() => NestedEnumTypeReplyWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTypeReplyWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTypeReplyFilter, {nullable:true})
    _min?: NestedEnumTypeReplyFilter;

    @Field(() => NestedEnumTypeReplyFilter, {nullable:true})
    _max?: NestedEnumTypeReplyFilter;
}
