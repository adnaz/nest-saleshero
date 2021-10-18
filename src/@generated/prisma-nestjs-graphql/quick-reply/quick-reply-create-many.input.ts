import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';

@InputType()
export class QuickReplyCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => TypeReply, {nullable:false})
    type!: keyof typeof TypeReply;
}
