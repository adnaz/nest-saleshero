import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReplyMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    reply?: string;

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
