import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReplyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    fileId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    sectionId!: number;

    @Field(() => Int, {nullable:false})
    actorId!: number;

    @Field(() => Int, {nullable:false})
    quickRepliesId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
