import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from './type-reply.enum';
import { NestedEnumTypeReplyFilter } from './nested-enum-type-reply-filter.input';

@InputType()
export class EnumTypeReplyFilter {

    @Field(() => TypeReply, {nullable:true})
    equals?: keyof typeof TypeReply;

    @Field(() => [TypeReply], {nullable:true})
    in?: Array<keyof typeof TypeReply>;

    @Field(() => [TypeReply], {nullable:true})
    notIn?: Array<keyof typeof TypeReply>;

    @Field(() => NestedEnumTypeReplyFilter, {nullable:true})
    not?: NestedEnumTypeReplyFilter;
}
