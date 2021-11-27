import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class CourseCreateManyAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    order?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    audioId?: number;

    @Field(() => Int, {nullable:true})
    imageId?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
