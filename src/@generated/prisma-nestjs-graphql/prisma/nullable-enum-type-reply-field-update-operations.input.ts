import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from './type-reply.enum';

@InputType()
export class NullableEnumTypeReplyFieldUpdateOperationsInput {

    @Field(() => TypeReply, {nullable:true})
    set?: keyof typeof TypeReply;
}
