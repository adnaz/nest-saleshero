import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Affirmation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:true})
    order!: number | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => File, {nullable:true})
    image?: File | null;

    @Field(() => Int, {nullable:true})
    imageId!: number | null;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    published!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
