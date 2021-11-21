import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReplyAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    fileId?: number;

    @Field(() => Float, {nullable:true})
    sectionId?: number;

    @Field(() => Float, {nullable:true})
    actorId?: number;

    @Field(() => Float, {nullable:true})
    quickReplyId?: number;
}
