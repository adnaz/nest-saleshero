import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { QuickReply } from '../quick-reply/quick-reply.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class QuickReplyValue {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => QuickReply, {nullable:true})
    quickReply?: QuickReply | null;

    @Field(() => Int, {nullable:true})
    quickReplyId!: number | null;
}
