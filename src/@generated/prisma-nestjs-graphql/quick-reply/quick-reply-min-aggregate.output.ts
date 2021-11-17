import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TypeReply } from '../prisma/type-reply.enum';

@ObjectType()
export class QuickReplyMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    keepIt?: boolean;

    @Field(() => TypeReply, {nullable:true})
    type?: keyof typeof TypeReply;
}
