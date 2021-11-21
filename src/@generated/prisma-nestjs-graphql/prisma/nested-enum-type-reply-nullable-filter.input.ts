import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from './type-reply.enum';

@InputType()
export class NestedEnumTypeReplyNullableFilter {

    @Field(() => TypeReply, {nullable:true})
    equals?: keyof typeof TypeReply;

    @Field(() => [TypeReply], {nullable:true})
    in?: Array<keyof typeof TypeReply>;

    @Field(() => [TypeReply], {nullable:true})
    notIn?: Array<keyof typeof TypeReply>;

    @Field(() => NestedEnumTypeReplyNullableFilter, {nullable:true})
    not?: NestedEnumTypeReplyNullableFilter;
}
