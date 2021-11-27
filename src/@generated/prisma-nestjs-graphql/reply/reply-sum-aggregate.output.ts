import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReplySumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => Int, {nullable:true})
    sectionId?: number;

    @Field(() => Int, {nullable:true})
    actorId?: number;

    @Field(() => Int, {nullable:true})
    quickReplyId?: number;
}
