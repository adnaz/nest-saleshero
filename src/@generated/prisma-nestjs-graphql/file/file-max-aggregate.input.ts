import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FileMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    link?: true;

    @Field(() => Boolean, {nullable:true})
    location?: true;

    @Field(() => Boolean, {nullable:true})
    key?: true;

    @Field(() => Boolean, {nullable:true})
    bucket?: true;

    @Field(() => Boolean, {nullable:true})
    etag?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;
}
