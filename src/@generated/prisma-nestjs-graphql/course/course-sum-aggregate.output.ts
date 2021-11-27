import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CourseSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    audioId?: number;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;
}
