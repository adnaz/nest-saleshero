import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CourseAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => Float, {nullable:true})
    audioId?: number;

    @Field(() => Float, {nullable:true})
    imageId?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;
}
