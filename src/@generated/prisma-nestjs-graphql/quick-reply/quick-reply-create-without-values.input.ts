import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';

@InputType()
export class QuickReplyCreateWithoutValuesInput {

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;
}
