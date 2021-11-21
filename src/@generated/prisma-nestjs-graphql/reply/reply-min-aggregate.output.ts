import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReplyMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    sectionId?: number;

    @Field(() => Int, {nullable:true})
    actorId?: number;

    @Field(() => Int, {nullable:true})
    quickReplyId?: number;
}
