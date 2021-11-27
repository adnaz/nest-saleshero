import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SectionSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;
}
